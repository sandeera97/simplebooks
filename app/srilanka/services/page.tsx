import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata = { title: "Our Services | Simplebooks" };

const svcImg: React.CSSProperties = {
  width: "100%",
  maxWidth: 460,
  height: 340,
  borderRadius: 14,
  objectFit: "contain",
  display: "block",
};

const h2Style: React.CSSProperties = {
  fontSize: 38,
  fontWeight: 800,
  margin: "0 0 24px",
  letterSpacing: "-0.5px",
  color: "#14143d",
};

const legalBullets = [
  "Lease Agreements",
  "Collective Agreements",
  "Power of Attorney",
  "Loan Agreements",
  "Employee Contracts",
  "Sales Agreements",
  "Memorandum of Understanding",
  "Affidavits",
  "Non Disclosure Agreements",
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: "#11144d",
          background: "#ffffff",
          overflowX: "hidden",
        }}
      >
        {/* ============ SERVICE BLOCKS ============ */}
        <section style={{ padding: "70px 0 40px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto" }}>
            {/* Business Registration */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Business Registration</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 20px",
                  }}
                >
                  Our team of business registration consultants have helped set
                  up legal entities for founders, entrepreneurs and
                  conglomerates. Regardless of where you are in the stage of your
                  business, lean on the experience and insight generated from
                  incorporating over 3,000+ organizations across South Asia.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  Leverage the learnings and insight from other business owners
                  to avoid making the same mistakes and setting yourself up for
                  success. Whether you&apos;re launching your Small Business,
                  Non-Profit or raising capital for your Tech Startup, speak to
                  an advisor and set yourself up for success.
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/01.jpg"
                  alt="Business registration consultants planning on a board"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Bookkeeping */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Bookkeeping</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 20px",
                  }}
                >
                  We allow you to focus on what you do best. Sign up with our
                  book-keeping team to ensure that you have the right talent and
                  flexibility to continue growing your business without worrying
                  about finances.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  At Simplebooks, real people handle your bookkeeping:
                  there&apos;s always someone here if you need to talk about your
                  business, your accounts, and your numbers. Get access to a
                  dedicated bookkeeper and manager, and CPA who are on your team
                  at a fraction of the cost of hiring inhouse talent that&apos;s
                  hard to train and retain.
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/02.png"
                  alt="Bookkeeper working with a calculator"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Flexible Legal Consulting */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Flexible Legal Consulting</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 28px",
                  }}
                >
                  Growing businesses shouldn&apos;t have to be bogged down with
                  complex and expensive legal work. We&apos;ve partnered up with
                  Lawyers that understand the challenges you face. Whether you
                  need to create legal documents for your business, or need help
                  staying compliant, we&apos;re here to help your business grow.
                  We specialise in areas like corporate law, commercial law,
                  employment law, intellectual property law, and commercial
                  property law currently limited to Sri Lanka.
                </p>
                <div
                  className="bullets"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px 30px",
                  }}
                >
                  {legalBullets.map((label) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 15,
                        color: "#2b3358",
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#14143d",
                          flexShrink: 0,
                        }}
                      />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/03.jpg"
                  alt="Legal consultant meeting with a business owner"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Contract Review */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Contract Review</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 20px",
                  }}
                >
                  Ensure fair representation on all legal contracts you sign.
                  Whether you need help drafting the right deal or advice on
                  whether you should sign, our legal team will help you guide and
                  navigate the most important decisions along your business
                  journey.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  Our team of legal experts frequently deal with Confidentiality
                  Agreement/NDAs, Consultant Agreements, Statements of Work,
                  Employment Contracts, Commercial Property Lease Agreements,
                  Software/App Development Agreement, Software Licence Agreement,
                  Shareholder Agreement, Supply of Services Contract, and Website
                  Terms and Conditions.
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/04.jpg"
                  alt="Reviewing a terms of service contract document"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Trademark */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Trademark</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 20px",
                  }}
                >
                  We make it easy to file your trademark and protect your assets.
                  We serve thousands of growing businesses around Sri Lanka and
                  help them protect their most valuable assets.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  Manage The Entire Process From Filing To Registration. Legally
                  protects your company name and logo so no one else can claim
                  it.
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/05.png"
                  alt="Creative ideas and brand assets worth protecting with a trademark"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Shareholder Agreements */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Shareholder Agreements</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 20px",
                  }}
                >
                  Avoid potential disputes and set up your business for success
                  by making sure all the shareholders see eye-to-eye on all the
                  details.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  Greater protection to shareholders over and above the standard
                  articles of association both in terms of how the company is
                  run, decision making, minority shareholder and majority
                  shareholder rights;
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/06.png"
                  alt="Shareholders shaking hands over a signed agreement"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Tax & Financial Consulting */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Tax &amp; Financial Consulting</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  Ensure that decisions you&apos;re making around money are the
                  best possible ones. Our team of financial and tax consultants
                  have worked across industries, businesses segments and helped
                  navigate hundreds of deals to benefit our clients. From
                  preparing investor materials, financial models to ensuring your
                  organization has been set up in the most efficient way to
                  reduce your tax burden. The right accounting team can help you
                  avoid costly mistakes and put you on the path to profitable
                  growth.
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/07.png"
                  alt="Tax and financial consultants discussing notes"
                  style={svcImg}
                />
              </div>
            </div>

            {/* Payroll Services */}
            <div
              className="svc"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 70,
                padding: "40px 0",
              }}
            >
              <div className="svc-text" style={{ flex: 1, maxWidth: 520 }}>
                <h2 style={h2Style}>Payroll Services</h2>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: "0 0 20px",
                  }}
                >
                  Our Small business payroll services help hundreds of business
                  owners save time and money by helping them focus on the
                  important things.
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "#5f6f9a",
                    margin: 0,
                  }}
                >
                  Our Payroll services have been designed from the learnings
                  working together with 100s of Sri Lankan small businesses.
                  Ensure that you&apos;re compliant with labour laws and
                  regulations and your team gets paid on time with the support of
                  our experts.
                </p>
              </div>
              <div
                style={{ flex: 1, display: "flex", justifyContent: "center" }}
              >
                <img
                  src="/images/services/08.png"
                  alt="Team getting paid on time through payroll services"
                  style={svcImg}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
