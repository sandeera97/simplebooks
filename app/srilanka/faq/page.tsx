import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Accordion from "./Accordion";
import { faqGroups } from "./content";

export const metadata: Metadata = {
  title: "FAQ - Sri Lanka",
  description:
    "Answers to common questions about company registration, bookkeeping and working with Simplebooks in Sri Lanka.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ background: "#eef0fb", padding: "70px 0 64px" }}>
          <div className="sim_bk_container" style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: 44,
                lineHeight: 1.15,
                fontWeight: 800,
                margin: 0,
                letterSpacing: "-1px",
                color: "#14143d",
              }}
            >
              Frequently Asked Questions
            </h1>
          </div>
        </section>

        <section style={{ padding: "60px 0 80px" }}>
          <div className="sim_bk_container">
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              {faqGroups.map((g) => (
                <div key={g.name} className="sim_bk_faq_group">
                  <h2 className="sim_bk_faq_group_title">{g.name}</h2>
                  <Accordion items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
