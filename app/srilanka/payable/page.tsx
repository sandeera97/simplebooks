import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "PAYABLE - Sri Lanka",
  description:
    "Simplebooks is now integrated with Payable — no setup fee, free for the first year, market-leading rates and transparent percentage-based pricing.",
  alternates: { canonical: "https://simplebooks.com/srilanka/payable" },
};

const benefits: { text: string; sub?: string[] }[] = [
  {
    text: "We'll handle the submission of your documents to the payment provider—saving you time, hassle, and unnecessary back-and-forth.",
  },
  { text: "No setup fee – Get started instantly with zero upfront costs." },
  {
    text: "Free for the first year – Enjoy a full year with no subscription fees, helping you save more.",
  },
  {
    text: "Market-leading interest rates – Minimize your payment processing costs with the most competitive rates available.",
  },
  {
    text: "Transparent pricing – A simple, percentage-based fee per transaction—no hidden charges.",
  },
  {
    text: "Competitive MDR (Merchant Discount Rates):",
    sub: ["3.00% for local transactions", "3.50% for foreign transactions"],
  },
];

function Tick() {
  return (
    <svg className="v2_payable_tick" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PayablePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Now integrated with"
        title="Payable"
        lead="Simplify your payments with seamless processing and unmatched value."
      />

      <section className="v2_sec v2_sec_pad v2_sec_pad_tight">
        <div className="v2_wrap">
          <div className="v2_payable_row">
            <div className="v2_payable_media v2_reveal">
              <img
                src="/images/payable/webxpay.png"
                alt="Payable online payment processing"
              />
            </div>

            <div className="v2_payable_body v2_reveal">
              <ul className="v2_payable_list">
                {benefits.map((b) => (
                  <li key={b.text}>
                    <Tick />
                    <div>
                      <span>{b.text}</span>
                      {b.sub && (
                        <ul className="v2_payable_sublist">
                          {b.sub.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="v2_payable_outro">
                Partner with Payable for a faster, more cost-effective, and professional payment
                experience tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to start taking payments?"
        lead="Talk to us and we'll handle the paperwork with the payment provider for you."
        primary={{ label: "Talk to a consultant", href: "/srilanka/contact" }}
        secondary={{ label: "Pay online", href: "https://dashboard.simplebooks.com/pay-online" }}
      />
    </PageShell>
  );
}
