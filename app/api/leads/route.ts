import { NextResponse } from "next/server";
import type { Lead } from "@/lib/leads";
import { accountFor, isConfigured, sendToPipedrive, PipedriveError } from "@/lib/pipedrive";
import { sanitizeAttribution } from "@/lib/attribution";

/** Tokens are read at request time, so this must not be prerendered. */
export const dynamic = "force-dynamic";

/* Up to four Pipedrive calls at 6s each, so the default 10s would cut a slow
   run short after the deal was created but before the note was attached. */
export const maxDuration = 30;

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: Partial<Lead> & { company?: string };
  try {
    body = await request.json();
  } catch {
    return bad("Expected a JSON body.");
  }

  /* Honeypot. The field is hidden from people and never filled by them, so
     anything in it is a bot. Answer 200 so the bot does not learn otherwise. */
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email ?? "").trim();
  const source = (body.source ?? "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("A valid email is required.");
  if (!source.startsWith("/")) return bad("A source path is required.");
  if (!(body.firstName ?? "").trim()) return bad("A name is required.");

  const lead: Lead = {
    firstName: (body.firstName ?? "").trim(),
    lastName: (body.lastName ?? "").trim(),
    email,
    phoneCountry: (body.phoneCountry ?? "").trim(),
    phone: (body.phone ?? "").trim(),
    service: body.service?.trim() || undefined,
    question: body.question?.answer ? body.question : undefined,
    interests: body.interests?.length ? body.interests : undefined,
    language: body.language?.trim() || undefined,
    message: body.message?.trim() || undefined,
    marketingConsent: body.marketingConsent,
    source,
    /* Straight from the visitor's browser, so re-checked rather than trusted:
       unknown keys dropped, values trimmed to what Pipedrive will hold. */
    attribution: sanitizeAttribution(body.attribution),
  };

  const account = accountFor(lead.source);

  /* Before the tokens are in, log the payload and tell the caller plainly.
     Pretending to succeed here would lose real enquiries silently. */
  if (!isConfigured(account)) {
    console.info(`[lead] ${account} account not configured — not sent:`, lead);
    return NextResponse.json(
      { ok: false, error: `Pipedrive is not connected for the ${account} account yet.`, account },
      { status: 503 }
    );
  }

  try {
    const result = await sendToPipedrive(lead);
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const message = err instanceof PipedriveError ? err.message : "Could not reach Pipedrive.";
    /* Log the whole submission so nothing is lost while we debug a failure. */
    console.error(`[lead] ${account} sync failed: ${message}`, lead);
    return NextResponse.json({ ok: false, error: message, account }, { status: 502 });
  }
}
