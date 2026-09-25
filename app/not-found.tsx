import type { Metadata } from "next";
import Link from "next/link";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Page not found — Simplebooks",
  description: "The page you were looking for has moved or no longer exists.",
};

/* Somewhere useful to go, rather than a dead end with a Home button. */
const LINKS = [
  { t: "Register a company", d: "Start a Sri Lankan company online in three working days.", href: "/srilanka/services/register-a-company" },
  { t: "File your taxes", d: "Income tax, VAT, APIT and SSCL, reviewed by a human.", href: "/income-tax-filing" },
  { t: "Free calculators", d: "APIT, VAT, WHT, EPF/ETF, gratuity and salary tools.", href: "/tools" },
  { t: "Talk to us", d: "Tell us what you need and we'll set up a free consultation.", href: "/srilanka/contact" },
];

export default function NotFound() {
  return (
    <PageShell>
      <PageHero
        eyebrow="404"
        title="We couldn't find that page"
        dot={false}
        lead="It may have moved, or the link that brought you here might be out of date."
        primary={{ label: "Back to home", href: "/" }}
        secondary={{ label: "Contact us", href: "/srilanka/contact" }}
      />

      <section className="v2_sec v2_sec_pad v2_sec_pad_tight">
        <div className="v2_wrap">
          <div className="v2_404_grid">
            {LINKS.map((l) => (
              <Link className="v2_404_card v2_reveal" href={l.href} key={l.t}>
                <p className="v2_404_card_t">
                  {l.t} <span className="v2_arrow">→</span>
                </p>
                <p className="v2_404_card_d">{l.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
