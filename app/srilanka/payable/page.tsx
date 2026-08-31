import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "PAYABLE - Sri Lanka",
  description:
    "Simplebooks is now integrated with Payable — no setup fee, free for the first year, market-leading rates and transparent percentage-based pricing.",
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
    <svg
      className="sim_bk_payable_tick"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#f15f2c" />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PayablePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "60px 0 80px" }}>
          <div className="sim_bk_container sim_bk_payable_row">
            <div>
              <p className="sim_bk_payable_kicker">Now integrated with</p>
              <h1 className="sim_bk_payable_title">PAYABLE</h1>
              <p className="sim_bk_payable_lead">
                Simplify your payments with seamless processing and unmatched value
              </p>
              <img
                src="/images/payable/webxpay.png"
                alt="Payable online payment processing"
                style={{ width: "100%", maxWidth: 420, height: "auto", display: "block", marginTop: 28 }}
              />
            </div>

            <div>
              <ul className="sim_bk_payable_list">
                {benefits.map((b) => (
                  <li key={b.text}>
                    <Tick />
                    <div>
                      <span>{b.text}</span>
                      {b.sub && (
                        <ul className="sim_bk_payable_sublist">
                          {b.sub.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="sim_bk_payable_outro">
                Partner with Payable for a faster, more cost-effective, and professional payment
                experience tailored to your business needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
