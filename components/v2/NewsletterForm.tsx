"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { submitLead, LeadNotConfiguredError } from "@/lib/leads";

/**
 * Footer newsletter signup.
 *
 * This used to be a GET to /srilanka/contact, which stored nothing and sent
 * nothing — anyone who typed their email in simply landed on the contact page
 * and was lost. It now goes to Pipedrive like every other form on the site.
 *
 * Routed by the page it was used on, so a signup from a tax page reaches the
 * tax account, the same rule the consultation forms follow. The email doubles
 * as the person's name: Pipedrive needs one and the box asks for nothing else,
 * which is how the live site records its name-check enquiries too.
 */
export default function NewsletterForm() {
  const pathname = usePathname();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    const d = new FormData(e.currentTarget);
    const email = String(d.get("email") ?? "").trim();

    try {
      await submitLead({
        firstName: email,
        lastName: "",
        email,
        phoneCountry: "",
        phone: "",
        service: "Newsletter subscription",
        source: pathname || "/",
        company: String(d.get("company") ?? ""),
      });
      setSent(true);
    } catch (err) {
      /* Saying "thanks" for a signup that never left the browser is worse than
         an error — they believe they are on the list and stop trying. */
      if (!(err instanceof LeadNotConfiguredError)) console.error(err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <p className="v2_news_done" role="status">
        You&apos;re on the list — look out for the next one.
      </p>
    );
  }

  return (
    <form className="v2_news_form" onSubmit={onSubmit}>
      {/* Hidden from people. Anything in it is a bot, and the API drops it. */}
      <div className="v2_hp" aria-hidden="true">
        <label htmlFor="v2-news-co">Company</label>
        <input id="v2-news-co" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <input
        type="email"
        name="email"
        placeholder="you@company.lk"
        aria-label="Your email"
        required
      />
      <button type="submit" className="v2_btn v2_btn_primary" disabled={loading}>
        {loading ? "Subscribing…" : "Subscribe"}
      </button>
      {failed && (
        <p className="v2_news_err" role="alert">
          That didn&apos;t go through. Email{" "}
          <a href="mailto:info@simplebooks.com">info@simplebooks.com</a> and we&apos;ll add you.
        </p>
      )}
    </form>
  );
}
