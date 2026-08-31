import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "Company Name Check & Domain Availability Check in Sri Lanka",
  description:
    "Enter your company name to check its availability at the Registrar of Companies and whether the matching domain is free — instantly.",
};

export default function CompanyNameCheckPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#f4f5fe", padding: "60px 0 80px" }}>
          <div className="sim_bk_container" style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: 700,
                color: "#080a3c",
                margin: "0 0 14px",
                letterSpacing: "-0.5px",
              }}
            >
              Company Name Check and Domain Name Check
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#5a607a", margin: "0 0 36px" }}>
              Enter your company name below to verify its and the domain&rsquo;s availability instantly
            </p>

            {/* Same checker the live site embeds. */}
            <iframe
              src="https://name-checker-wp.pages.dev/"
              title="Company name and domain availability checker"
              loading="lazy"
              style={{
                width: "100%",
                minHeight: 400,
                height: 400,
                border: 0,
                overflow: "hidden",
                display: "block",
              }}
            />
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
