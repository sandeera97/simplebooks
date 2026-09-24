import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Thank You - Sri Lanka",
  description: "Your request has been submitted. The Simplebooks team will be in touch shortly.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <PageShell>
      <section className="v2_sec v2_status">
        <div className="v2_grid_bg" />
        <div className="v2_blob v2_blob_a" style={{ width: 620, height: 620, top: -240, left: -160 }} />
        <div className="v2_wrap v2_status_in">
          <p className="v2_eyebrow v2_reveal">Request received</p>
          <h1 className="v2_h1 v2_reveal">
            Thank you<span className="v2_dot">!</span>
          </h1>
          <p className="v2_lead v2_status_lead v2_reveal">
            Your request is submitted. One of our consultants will be in touch within one working
            day — usually sooner.
          </p>
          <img
            className="v2_reveal"
            src="/images/status/thank-you.png"
            alt="Your request is submitted"
            width={768}
            height={769}
          />
        </div>
      </section>

      <CtaBand
        title="While you wait"
        lead="Have a look at how registration works, or check whether your company name is free."
        primary={{ label: "Check a company name", href: "/srilanka/company-name-check" }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </PageShell>
  );
}
