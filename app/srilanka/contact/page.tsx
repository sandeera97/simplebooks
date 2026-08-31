import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Sri Lanka",
  description:
    "Drop us a message and we'll set up a free consultation. Simplebooks helps Sri Lankan businesses with registration, bookkeeping, payroll, tax and legal services.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* The live page is a single form on a tinted band: a centred column
            with the heading and the form both aligned to its left edge. */}
        <section style={{ background: "#f4f5fe", padding: "50px 0 70px" }}>
          {/* 736 - 2x20 padding = a 696px column, matching the live row at 1280px */}
          <div style={{ width: "100%", maxWidth: 736, margin: "0 auto", padding: "0 20px" }}>
            <h1
              style={{
                fontSize: 40,
                lineHeight: "48px",
                fontWeight: 700,
                color: "#080a3c",
                margin: "0 0 24px",
                letterSpacing: "-0.5px",
              }}
            >
              Drop us a Message
            </h1>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
