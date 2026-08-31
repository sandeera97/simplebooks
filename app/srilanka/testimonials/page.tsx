import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import { avatarFor } from "@/components/avatars";
import { reviews } from "./content";

export const metadata: Metadata = {
  title: "Simplebooks — Trusted by Sri Lankan customers",
  description:
    "Read what Sri Lankan business owners say about Simplebooks — company registration, bookkeeping, payroll, tax and legal services.",
};

function Stars() {
  return (
    <div style={{ display: "flex", gap: 2, marginBottom: 14 }} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5b921" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ background: "#eef0fb", padding: "70px 0 64px" }}>
          <div style={{ maxWidth: 1250, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: 44, lineHeight: 1.15, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-1px", color: "#14143d" }}>
              Here is what our clients are saying!
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#6b7db0", margin: "0 auto", maxWidth: 640 }}>
              Thousands of Sri Lankan business owners trust Simplebooks with their
              registrations, books, payroll and taxes.
            </p>
            <div className="sim_bk_rating_bar" style={{ marginTop: 30, color: "#14143d" }}>
              <span style={{ fontSize: 24, fontWeight: 800 }}>
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </span>
              <span style={{ fontSize: 18 }}>4.9 Rating</span>
              <span style={{ color: "#f5b921", letterSpacing: 2 }}>★★★★★</span>
              <span style={{ color: "#f15f2c", fontWeight: 600, fontSize: 15 }}>(800+ customer reviews)</span>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section style={{ padding: "70px 0 80px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto" }}>
            <div className="sim_bk_testi_masonry">
              {reviews.map((r, i) => {
                const photo = avatarFor(r.author);
                return (
                  <article key={i} className="sim_bk_testi_card">
                    {r.title && (
                      <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px", color: "#14143d", lineHeight: 1.35 }}>
                        {r.title}
                      </h2>
                    )}
                    <Stars />
                    <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "#5a607a", margin: "0 0 20px" }}>{r.quote}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 10}}>
                      {photo ? (
                        <img
                          src={photo}
                          alt={r.author}
                          style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", flexShrink: 0, display: "block" }}
                        />
                      ) : (
                        <div style={{ width: 38, height: 38, borderRadius: "50%", background: "#d9dcee", flexShrink: 0 }} />
                      )}
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#11144d" }}>{r.author}</div>
                        {r.role && (
                          <div style={{ fontSize: 12.5, color: "#8289a6", marginTop: 1 }}>{r.role}</div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* KARMA CTA */}
        <section style={{ padding: "0 0 90px", background: "#ffffff" }}>
          <div style={{ maxWidth: 1150, margin: "0 auto", background: "#f15f2c", borderRadius: 18, padding: "60px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.25, margin: "0 0 18px", color: "#ffffff" }}>
              Would you like to take part in our Karma program<br />and get 10% for lifetime?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#ffe0d3", margin: "0 auto 34px", maxWidth: 620 }}>
              Karma is a discount program we&apos;ve made to share the love. Whether
              you&apos;re a new customer or an oldie, you can get a 10% cashback on
              whatever bill you&apos;ve paid us.
            </p>
            <a
              href="/srilanka/contact"
              className="sim_bk_btn_dark"
              style={{ padding: "15px 36px", fontSize: 15, background: "#12123f" }}
            >
              Get Karma
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
