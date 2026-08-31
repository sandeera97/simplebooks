import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "Terms & Conditions - Sri Lanka",
  description:
    "Simplebooks terms and conditions — company registration at cost, and our Basic and Premium company secretarial packages.",
};

const secretarialDuties = [
  "We will help you with your company incorporation and maintain important documents like: incorporation papers, director agreements and shareholder agreements.",
  "Help you pass resolutions and maintain minutes of the business in order to open bank accounts, obtain leases and etc.",
  "We will maintain your share register, minute books, issue share certificates and help you file your annual returns.",
  "Communicate and liaise with the Registrar of Companies on your behalf",
  "We will help you register and file for company changes such as; director changes, company name changes, address changes, share transfers and share issues.",
];

export default function TermsConditionsPage() {
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
              Terms &amp; Conditions
            </h1>
          </div>
        </section>

        <section style={{ padding: "60px 0 80px" }}>
          <div className="sim_bk_container">
            <div className="sim_bk_prose">
              <p>
                Thank you for selecting Simplebooks to register your business. As your registrar,
                Simplebooks will register your company at cost.
              </p>
              <p>
                However, you will always need a company secretary to register with the ROC. As a
                registered company secretary, Simplebooks will act as your Secretary.
              </p>
              <p>Our charges for these secretarial services are pretty simple.</p>

              <h2>Basic Package</h2>
              <p>
                If you register your company through our basic package, you will be charged Rs 1,583
                per month. This will be billed Rs 19,000 rupees for a year for 365 degree secretarial
                service.
              </p>

              <h2>Premium Package</h2>
              <p>
                When you register with our Premium Package, you will be billed Rs 1,250 per month for
                our 365 degree secretarial services. This adds up to Rs 15,000 for the entire year.
              </p>

              <ul>
                {secretarialDuties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
