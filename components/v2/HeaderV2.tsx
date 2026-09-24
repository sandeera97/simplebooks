"use client";

import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape, and whenever the viewport grows back to the desktop nav.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1081px)");
    const onWide = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <>
      <div className="v2_announce">
        <span>Register a Sri Lankan company entirely online — in three working days.</span>
        <Link href="/srilanka/contact">Start now →</Link>
      </div>

      <header className={`v2_hdr${open ? " is_open" : ""}`}>
        <div className="v2_wrap v2_hdr_in">
          <Link href="/" aria-label="Simplebooks home" onClick={() => setOpen(false)}>
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

            <button
              type="button"
              className={`v2_burger${open ? " is_open" : ""}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="v2-mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {/* three bars that morph into an X */}
              <span className="v2_burger_box" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {/* Expanding panel — pushes the page down rather than covering it,
            which is what the redesign does. */}
        <div className="v2_mnav" id="v2-mobile-menu" ref={panelRef} aria-hidden={!open}>
          <div className="v2_mnav_inner">
            <div className="v2_wrap v2_mnav_pad">
              <ul className="v2_mnav_list">
                {NAV.map((n, i) => (
                  <li key={n.label} style={{ transitionDelay: `${open ? 0.05 + i * 0.045 : 0}s` }}>
                    <Link href={n.href} onClick={() => setOpen(false)}>
                      <span>{n.label}</span>
                      <span className="v2_mnav_go" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="v2_mnav_region">
                🇱🇰 Sri Lanka <span className="v2_nav_caret">▼</span>
              </div>

              <div className="v2_mnav_cta">
                <a className="v2_mnav_signin" href="https://dashboard.simplebooks.com/sign-in">
                  Sign in
                </a>
                <a className="v2_mnav_signup" href="https://dashboard.simplebooks.com">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* tapping anywhere else closes it */}
      <button
        type="button"
        className={`v2_mnav_scrim${open ? " is_on" : ""}`}
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </>
  );
}
