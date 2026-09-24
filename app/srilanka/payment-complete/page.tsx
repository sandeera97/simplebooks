import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Payment complete - Sri Lanka",
  description: "Your payment was successful. Thank you for choosing Simplebooks.",
  robots: { index: false, follow: true },
};

export default function PaymentCompletePage() {
  return (
    <PageShell>
      <section className="v2_sec v2_status">
        <div className="v2_grid_bg" />
        <div className="v2_blob v2_blob_a" style={{ width: 620, height: 620, top: -240, right: -160 }} />
        <div className="v2_wrap v2_status_in">
          <p className="v2_eyebrow v2_reveal">Payment successful</p>
          <h1 className="v2_h1 v2_reveal">
            Thank you<span className="v2_dot">!</span>
          </h1>
          <p className="v2_lead v2_status_lead v2_reveal">
            Your payment has gone through. A receipt is on its way to your email, and your
            consultant will pick things up from here.
          </p>
          <img
            className="v2_reveal"
            src="/images/status/payment-successful.png"
            alt="Payment successful"
            width={768}
            height={769}
          />
        </div>
      </section>

      <CtaBand
        title="What happens next"
        lead="Your consultant will confirm the next step by email. If you need anything sooner, just call."
        primary={{ label: "Contact us", href: "/srilanka/contact" }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </PageShell>
  );
}
