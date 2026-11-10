import Link from "next/link";

export default function Hero() {
  return (
    <section className="sim_bk_hero">
      <div className="sim_bk_hero_text">
        <h1>
          The right place to<br />start your business.
        </h1>
        <p>
          We’ve helped over 10000+ business owners set up, run, and grow — from incorporation and bookkeeping to payroll, tax, and legal—one team, one platform, across South Asia.
        </p>
        <Link href="/srilanka/contact" className="sim_bk_btn_orange sim_bk_hero_cta">
          Start Now
        </Link>
        <p className="sim_bk_hero_region">
          Or select your region:{" "}
          <Link href="/srilanka" className="sim_bk_region_link">Sri Lanka</Link>
        </p>
      </div>

      <div className="sim_bk_hero_img">
        <img
          src="/images/home/01.png"
          alt="Team of business owners celebrating with a high five"
          style={{ width: "100%", maxWidth: 460, height: 360, objectFit: "contain", display: "block" }}
        />
      </div>
    </section>
  );
}
