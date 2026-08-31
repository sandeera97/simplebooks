import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "Payment complete - Sri Lanka",
  description: "Your payment was successful. Thank you for choosing Simplebooks.",
  robots: { index: false, follow: true },
};

export default function PaymentCompletePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: "60px 0 80px", textAlign: "center" }}>
          <div className="sim_bk_container">
            <h1
              style={{
                fontSize: 40,
                lineHeight: 1.2,
                fontWeight: 800,
                margin: "0 0 34px",
                letterSpacing: "-1px",
                color: "#14143d",
              }}
            >
              Thank You!
            </h1>
            <img
              src="/images/status/payment-successful.png"
              alt="Payment successful"
              width={768}
              height={769}
              style={{ width: "100%", maxWidth: 520, height: "auto", display: "block", margin: "0 auto" }}
            />
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
