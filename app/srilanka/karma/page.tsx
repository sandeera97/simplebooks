import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

export const metadata: Metadata = {
  title: "Simplebooks - Loyalty Program",
  description:
    "Karma is our discount program — share a picture of you and your team on social media and get 10% cashback on whatever bill you've paid us, for life.",
};

const karmaReviews = [
  {
    img: "/images/karma/tom.jpg",
    name: "Tom Simpson",
    quote:
      "Big shout out and thank-you to Simplebooks our digitally savvy and entrepreneurial minded newly retained book-keepers for our new start-up Remote Workforce. They went above and beyond in their level of service in handling all the drawn out Sri Lankan registration processes required to set up the company. Here's to a long lasting partnership – and as they say what goes around comes around!",
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
      "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver. Bhanuka, Aabith and the Simplebooks have been really helpful and supportive to get my company registration done. Can't think of any startup doing a company registration without these guys. Thanks a bunch!",
    more: false,
  },
];

export default function KarmaPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
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
              Get Karma, get 10% off
            </h1>
          </div>
        </section>

        {/* WHAT IS KARMA */}
        <section style={{ padding: "70px 0" }}>
          <div className="sim_bk_container sim_bk_karma_row">
            <div className="sim_bk_karma_media">
              <img
                src="/images/karma/heart.png"
                alt=""
                width={300}
                height={300}
                style={{ width: "100%", maxWidth: 300, height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
            <div className="sim_bk_karma_copy">
              <h2 className="sim_bk_karma_h2">
                If you&rsquo;ve loved what we&rsquo;ve done, Karma might be for you.
              </h2>
              <p className="sim_bk_karma_p">
                Karma is a discount program we&rsquo;ve made to share the love. Whether you&rsquo;re a
                new customer or an oldie. You can get a 10% Cashback on whatever bill you&rsquo;ve paid us.
              </p>
              <p className="sim_bk_karma_p">
                Even if we&rsquo;ve done something for you at cost (whoa, it&rsquo;s amazing right?)
              </p>
              <p className="sim_bk_karma_p">
                Karma, it isn&rsquo;t stackable, however. You can only do it once per service. If you
                have 2 active services running with Simplebooks, you can get 10% off on each service,
                for life with Karma!
              </p>
            </div>
          </div>
        </section>

        {/* GRAB A PIC */}
        <section style={{ padding: "0 0 70px" }}>
          <div className="sim_bk_container sim_bk_karma_row">
            <div className="sim_bk_karma_copy">
              <h2 className="sim_bk_karma_h2">Grab a pic &amp; go social</h2>
              <p className="sim_bk_karma_p">
                Take a picture of you &amp; your team, whether it&rsquo;s a selfie, or you in the office
                or if you&rsquo;re just a solopreneur, even a smile and a thumbs-up go along way!
              </p>
              <p className="sim_bk_karma_p">
                Publish it on your Instagram or Facebook with a small write up of your business &amp;
                what you&rsquo;re planning on achieving
              </p>
            </div>
            <div className="sim_bk_karma_media">
              <img
                src="/images/karma/social-post.png"
                alt="A Simplebooks customer's social media post"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }}
              />
            </div>
          </div>
        </section>

        {/* RECEIVE KARMA */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="sim_bk_container sim_bk_karma_row">
            <div className="sim_bk_karma_media">
              <img
                src="/images/karma/ten-percent.png"
                alt="10% off"
                style={{ width: "100%", maxWidth: 300, height: "auto", display: "block", margin: "0 auto" }}
              />
            </div>
            <div className="sim_bk_karma_copy">
              <h2 className="sim_bk_karma_h2">Receive Karma</h2>
              <p className="sim_bk_karma_p">
                Message the team at &ndash;{" "}
                <a href="mailto:karma@simplebooks.com" style={{ color: "#f15f2c", fontWeight: 600 }}>
                  karma@simplebooks.com
                </a>{" "}
                and we&rsquo;ll get back to you with a confirmation and your discount for life.
              </p>
              <p className="sim_bk_karma_p">
                We&rsquo;ll share it on our social profiles as well, let&rsquo;s have some fun.
              </p>
            </div>
          </div>
        </section>

        {/* PEOPLE WHO RECEIVED KARMA */}
        <section style={{ background: "#f7f8fd", padding: "70px 0 80px" }}>
          <div className="sim_bk_container">
            <h2
              style={{
                fontSize: 32,
                fontWeight: 800,
                textAlign: "center",
                color: "#14143d",
                margin: "0 0 40px",
              }}
            >
              Few people who received Karma
            </h2>
            <div className="sim_bk_karma_grid">
              {karmaReviews.map((r) => (
                <article key={r.name} className="sim_bk_karma_card">
                  <img src={r.img} alt={r.name} className="sim_bk_karma_card_img" />
                  <div className="sim_bk_karma_card_body">
                    <p className="sim_bk_karma_card_quote">
                      {r.quote}
                      {r.more && (
                        <>
                          {" "}
                          <Link href="/srilanka/testimonials" style={{ color: "#f15f2c", fontWeight: 600 }}>
                            Read more
                          </Link>
                        </>
                      )}
                    </p>
                    <div className="sim_bk_karma_card_name">{r.name}</div>
                  </div>
                </article>
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
