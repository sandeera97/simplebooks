import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, CtaBand } from "@/components/v2/blocks";
import { avatarFor } from "@/components/avatars";
import { reviews } from "./content";

export const metadata: Metadata = {
  title: "Simplebooks — Trusted by Sri Lankan customers",
  description:
    "Read what Sri Lankan business owners say about Simplebooks — company registration, bookkeeping, payroll, tax and legal services.",
  alternates: { canonical: "https://simplebooks.com/srilanka/testimonials" },
};

function Stars() {
  return (
    <div className="v2_testi_stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Customer stories"
        title="Here is what our clients are saying"
        lead="Thousands of Sri Lankan business owners trust Simplebooks with their registrations, books, payroll and taxes."
      >
        <div className="v2_google_bar v2_reveal">
          <span className="v2_google_word" aria-hidden="true">
            <b style={{ color: "#4285F4" }}>G</b>
            <b style={{ color: "#EA4335" }}>o</b>
            <b style={{ color: "#FBBC05" }}>o</b>
            <b style={{ color: "#4285F4" }}>g</b>
            <b style={{ color: "#34A853" }}>l</b>
            <b style={{ color: "#EA4335" }}>e</b>
          </span>
          <span className="v2_google_score">4.9</span>
          <Stars />
          <span className="v2_google_count">800+ customer reviews</span>
        </div>
      </PageHero>

      <section className="v2_sec v2_sec_pad v2_sec_pad_tight">
        <div className="v2_wrap">
          <div className="v2_testi_masonry">
            {reviews.map((r, i) => {
              const photo = avatarFor(r.author);
              return (
                <article key={i} className="v2_testi_card v2_reveal">
                  {r.title && <h2 className="v2_testi_title">{r.title}</h2>}
                  <Stars />
                  <p className="v2_testi_quote">{r.quote}</p>
                  <div className="v2_testi_person">
                    {photo ? (
                      <img src={photo} alt={r.author} className="v2_testi_avatar" />
                    ) : (
                      <span className="v2_testi_avatar v2_testi_avatar_blank" aria-hidden="true" />
                    )}
                    <div>
                      <b>{r.author}</b>
                      {r.role && <span>{r.role}</span>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Take part in Karma and get 10% for lifetime"
        lead="Karma is a discount program we've made to share the love. Whether you're a new customer or an oldie, you can get a 10% cashback on whatever bill you've paid us."
        primary={{ label: "Get Karma", href: "/srilanka/contact" }}
        secondary={{ label: "How Karma works", href: "/srilanka/karma" }}
      />
    </PageShell>
  );
}
