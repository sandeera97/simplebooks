import Link from "next/link";

export default function Hero() {
  return (
    <section className="sim_bk_hero">
      <div className="sim_bk_hero_text">
        <h1>
          The right place to<br />start your business.
        </h1>
        <p>
          We&apos;ve helped over 4,500+ business owners set up, run and grow their
          business across south asia from set up, finance to legal.
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
        <div className="sim_bk_ph_img" style={{ width: 460, height: 360 }}>
          <span className="sim_bk_ph_label">[ hero illustration — team ]</span>
        </div>
      </div>
    </section>
  );
}
