import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import {
  PageHero, SecHead, FeatureGrid, Steps, Compare, Faq, CtaBand,
} from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "VAT Filing Made Simple for Sri Lankan Accountants | Simplebooks",
  description:
    "Turn hours of manual schedule creation, validation headaches and RAMIS portal struggles into a few clicks. Built for Sri Lankan accountants.",
};

const STEPS = [
  { t: "Upload", d: "Drop your existing documents — invoices, TIN lists, anything. No reformatting needed." },
  { t: "Review & fix", d: "Auto-validation highlights every error and missing field. Fix them in place in seconds." },
  { t: "File", d: "Submit directly to the IRD with one click. We always ask for your consent before proceeding." },
];

const WHY = [
  { t: "Hours → minutes", d: "What used to take a full working day now takes minutes, for every client on your list.", tags: ["Faster"] },
  { t: "Zero missed fields", d: "Every field is validated before submission, so a rejected schedule stops being a monthly event.", tags: ["Validated"] },
  { t: "No more RAMIS headaches", d: "Skip the portal wrestling. File directly to the IRD from one screen.", tags: ["Direct filing"] },
  { t: "Your data, your control", d: "We always ask before proceeding. Full transparency over what is submitted and when.", tags: ["Consent"] },
];

const OLD_WAY = [
  "Rebuilding the schedule by hand in a spreadsheet every period",
  "Discovering a missing TIN only after RAMIS rejects the file",
  "Fighting the portal at 11pm on the deadline",
  "No record of what was submitted, or when",
];

const NEW_WAY = [
  "Upload the documents you already have, in the format you already use",
  "Every error and missing field flagged before you submit",
  "One-click filing straight to the IRD",
  "A full audit trail of every submission",
];

const FAQS = [
  { q: "What is the Simplebooks VAT tool?", a: "It's a tool that turns manual VAT schedule creation and RAMIS filing into a few clicks — built specifically for Sri Lankan accountants." },
  { q: "Do I need to reformat my files?", a: "No. Upload the invoices and TIN lists you already have. The tool reads them and builds the schedule for you." },
  { q: "Does it file directly to the IRD?", a: "Yes, with one click — and it always asks for your explicit consent before anything is submitted." },
  { q: "How many clients can I manage?", a: "There's no limit. The tool is built for practices filing for many clients each period, not just a single company." },
  { q: "When does it launch?", a: "We're finishing the last round of testing with practising accountants. Join the waitlist and you'll be among the first in." },
];

export default function VatToolPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="VAT tool"
        title="VAT filing shouldn't take all day"
        lead="Simplebooks turns hours of manual schedule creation, validation headaches and RAMIS portal struggles into a few clicks. Built for Sri Lankan accountants."
        primary={{ label: "Join the waitlist", href: "/srilanka/contact" }}
        secondary={{ label: "Talk to us", href: "/srilanka/contact" }}
        note="Be the first to know when we launch. No spam, ever."
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="The difference"
            title="The old way versus the Simplebooks way"
            lead="Every pain point Sri Lankan accountants face with VAT filing — solved."
          />
          <Compare
            badTitle="The old way"
            bad={OLD_WAY}
            goodTitle="With simplebooks"
            good={NEW_WAY}
          />
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="How it works" title="Three steps, that's all it takes" />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Why accountants love it"
            title="Built for the people who actually file"
            lead="Designed with practising accountants, around the period-end crunch rather than around the software."
          />
          <FeatureGrid items={WHY} cols={4} />
        </div>
      </section>

      <section className="v2_band_white">
        <div className="v2_wrap">
          <SecHead
            eyebrow="Your questions, answered"
            title="Frequently asked questions"
            lead="Everything you need to know about Simplebooks VAT filing."
          />
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Ready to simplify your VAT filing"
        lead="Join the waitlist and be the first to know when the Simplebooks VAT tool launches."
        primary={{ label: "Join the waitlist", href: "/srilanka/contact" }}
        secondary={{ label: "See the dashboard", href: "/srilanka/dashboard/accounting-tool" }}
      />
    </PageShell>
  );
}
