import type { Metadata } from "next";
import Link from "next/link";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, SecHead, Steps, CtaBand } from "@/components/v2/blocks";

export const metadata: Metadata = {
  title: "Simplebooks - Loyalty Program",
  description:
    "Karma is our discount program — share a picture of you and your team on social media and get 10% cashback on whatever bill you've paid us, for life.",
};

const STEPS = [
  {
    t: "Grab a pic & go social",
    d: "Take a picture of you and your team — a selfie, the office, even a smile and a thumbs-up. Publish it on Instagram or Facebook with a short write-up of your business.",
  },
  {
    t: "Message the team",
    d: "Send it to karma@simplebooks.com and we'll get back to you with a confirmation and your discount.",
  },
  {
    t: "Receive Karma",
    d: "We'll share it on our social profiles too. Your 10% applies for life, on that service.",
  },
];

const KARMA = [
  {
    img: "/images/karma/tom.jpg",
    name: "Tom Simpson",
    quote:
      "Big shout out and thank-you to Simplebooks our digitally savvy and entrepreneurial minded newly retained book-keepers for our new start-up Remote Workforce. They went above and beyond in their level of service in handling all the drawn out Sri Lankan registration processes required to set up the company.",
    more: false,
  },
  {
    img: "/images/karma/dhanushka.jpg",
    name: "Dhanushka",
    quote:
      "I remember trying to figure out the company registration process, checking the official governmental website as well as with a few established entrepreneurs and they all made it sound unseemingly complicated. It was then I stumbled across the Simplebooks website where they've taken the time to explain everything in a manner anyone could understand….",
    more: true,
  },
  {
    img: "/images/karma/damith.jpg",
    name: "Damith Menaka",
    quote:
      "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver. Bhanuka, Aabith and the Simplebooks have been really helpful and supportive to get my company registration done. Can't think of any startup doing a company registration without these guys.",
    more: false,
  },
];

export default function KarmaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Loyalty programme"
        title="Get Karma, get 10% off"
        dot={false}
        lead="Karma is a discount program we've made to share the love. New customer or old — get 10% cashback on whatever bill you've paid us."
        primary={{ label: "Claim your Karma", href: "mailto:karma@simplebooks.com" }}
        secondary={{ label: "Talk to us", href: "/srilanka/contact" }}
        note="Not stackable — one per service, but it applies for life."
      />

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <div className="v2_why_in">
            <div>
              <p className="v2_eyebrow v2_reveal">How it works</p>
              <h2 className="v2_h2 v2_reveal" style={{ marginTop: 16 }}>
                If you&rsquo;ve loved what we&rsquo;ve done, Karma might be for you
                <span className="v2_dot">.</span>
              </h2>
              <p className="v2_lead v2_reveal" style={{ margin: "22px 0 18px", maxWidth: 520 }}>
                Even if we&rsquo;ve done something for you at cost. Karma isn&rsquo;t stackable —
                you can only do it once per service. But if you have two active services with us,
                you can get 10% off each one, for life.
              </p>
              <p className="v2_lead v2_reveal" style={{ maxWidth: 520 }}>
                Message the team at{" "}
                <a href="mailto:karma@simplebooks.com" style={{ color: "var(--v2-orange)", fontWeight: 600 }}>
                  karma@simplebooks.com
                </a>{" "}
                and we&rsquo;ll confirm your discount.
              </p>
            </div>
            <div className="v2_reveal v2_karma_art">
              <img src="/images/karma/heart.png" alt="" width={300} height={300} />
              <img src="/images/karma/ten-percent.png" alt="10% off" />
            </div>
          </div>
        </div>
      </section>

      <section className="v2_band">
        <div className="v2_wrap">
          <SecHead eyebrow="Three steps" title="How to claim it" />
          <Steps items={STEPS} />
        </div>
      </section>

      <section className="v2_sec v2_sec_pad">
        <div className="v2_wrap">
          <SecHead eyebrow="Karma" title="A few people who received it" />
          <div className="v2_karma_grid">
            {KARMA.map((k) => (
              <article key={k.name} className="v2_karma_card v2_reveal">
                <img src={k.img} alt={k.name} />
                <div className="v2_karma_body">
                  <p>
                    {k.quote}
                    {k.more && (
                      <>
                        {" "}
                        <Link href="/srilanka/testimonials" style={{ color: "var(--v2-orange)", fontWeight: 600 }}>
                          Read more
                        </Link>
                      </>
                    )}
                  </p>
                  <b>{k.name}</b>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Share the love, take the 10%"
        lead="Post your picture, send it to us, and we'll apply your discount for life."
        primary={{ label: "Email karma@simplebooks.com", href: "mailto:karma@simplebooks.com" }}
        secondary={{ label: "See all reviews", href: "/srilanka/testimonials" }}
      />
    </PageShell>
  );
}
