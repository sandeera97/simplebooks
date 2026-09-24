import Link from "next/link";

const NAV = [
  { label: "Dashboard", href: "/srilanka/dashboard/accounting-tool", caret: true },
  { label: "Company Name Check", href: "/srilanka/company-name-check" },
  { label: "Services", href: "/srilanka/services", caret: true },
  { label: "Resources", href: "/srilanka/videos", caret: true },
  { label: "Contact", href: "/srilanka/contact" },
];

export function Logo({ size = 21 }: { size?: number }) {
  return (
    <span className="v2_logo" style={{ fontSize: size }}>
      <span className="v2_logo_mark" />
      simplebooks
    </span>
  );
}

export default function HeaderV2() {
  return (
    <>
      <div className="v2_announce">
        <span>Register a Sri Lankan company entirely online — in three working days.</span>
        <Link href="/srilanka/contact">Start now →</Link>
      </div>

      <header className="v2_hdr">
        <div className="v2_wrap v2_hdr_in">
          <Link href="/" aria-label="Simplebooks home">
            <Logo />
          </Link>

          <nav className="v2_nav">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href}>
                {n.label}
                {n.caret && <span className="v2_nav_caret">▼</span>}
              </Link>
            ))}
          </nav>

          <div className="v2_hdr_right">
            <span className="v2_region">
              🇱🇰 Sri Lanka <span className="v2_nav_caret">▼</span>
            </span>
            <a className="v2_signin" href="https://dashboard.simplebooks.com/sign-in">
              Sign in
            </a>
            <a className="v2_btn v2_btn_navy v2_btn_sm" href="https://dashboard.simplebooks.com">
              Sign up
            </a>
            <button className="v2_burger" aria-label="Open menu">
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
