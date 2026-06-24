"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { navItems, regions, NavItem } from "./navData";

/* Open instantly on hover, close after a short delay so the mouse can
   cross the gap between the trigger and the menu without it closing. */
function useHoverOpen(delay = 140) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onMouseEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const onMouseLeave = () => {
    timer.current = setTimeout(() => setOpen(false), delay);
  };
  return { open, onMouseEnter, onMouseLeave };
}

/* ---------- Desktop dropdown ---------- */
function DesktopDropdown({ item }: { item: NavItem }) {
  const { open, onMouseEnter, onMouseLeave } = useHoverOpen();

  if (!item.children) {
    return (
      <Link href={item.href ?? "#"} className="sim_bk_nav_link">
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="sim_bk_nav_item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="sim_bk_nav_link">
        {item.label} <span className="sim_bk_caret">▾</span>
      </button>
      {open && (
        <div className="sim_bk_dropdown">
          {item.children.map((child) =>
            child.children ? (
              <SubDropdown key={child.label} item={child} />
            ) : (
              <Link key={child.label} href={child.href ?? "#"} className="sim_bk_dropdown_item">
                {child.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

function SubDropdown({ item }: { item: NavItem }) {
  const { open, onMouseEnter, onMouseLeave } = useHoverOpen();
  return (
    <div
      className="sim_bk_nav_item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="sim_bk_dropdown_item" style={{ width: "100%" }}>
        {item.label} <span className="sim_bk_caret">▸</span>
      </button>
      {open && item.children && (
        <div className="sim_bk_dropdown sim_bk_submenu">
          {item.children.map((c) => (
            <Link key={c.label} href={c.href ?? "#"} className="sim_bk_dropdown_item">
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Region dropdown ---------- */
function RegionDropdown() {
  const { open, onMouseEnter, onMouseLeave } = useHoverOpen();
  return (
    <div
      className="sim_bk_nav_item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="sim_bk_nav_link">
        Region <span style={{ fontSize: 15 }}>🌐</span>{" "}
        <span className="sim_bk_caret">▾</span>
      </button>
      {open && (
        <div className="sim_bk_dropdown sim_bk_dropdown_right">
          {regions.map((r) => (
            <Link key={r.label} href={r.href} className="sim_bk_dropdown_item">
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Mobile accordion ---------- */
function MobileItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [open, setOpen] = useState(false);
  const pad = { paddingLeft: 28 + depth * 18 };

  if (!item.children) {
    return (
      <Link href={item.href ?? "#"} className="sim_bk_mobile_link" style={pad}>
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button className="sim_bk_mobile_link" style={pad} onClick={() => setOpen(!open)}>
        {item.label} <span className="sim_bk_caret">{open ? "▴" : "▾"}</span>
      </button>
      {open && item.children.map((c) => <MobileItem key={c.label} item={c} depth={depth + 1} />)}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sim_bk_header">
      <div className="sim_bk_hdr">
        <Link href="/" className="sim_bk_logo">simplebooks</Link>

        <nav className="sim_bk_nav">
          {navItems.map((item) => <DesktopDropdown key={item.label} item={item} />)}
          <RegionDropdown />
        </nav>

        <div className="sim_bk_header_actions">
          <Link href="https://dashboard.simplebooks.com/sign-in" className="sim_bk_btn_outline sim_bk_signin">
            Sign In
          </Link>
          <Link href="https://dashboard.simplebooks.com" className="sim_bk_btn_orange sim_bk_signup">
            Sign Up
          </Link>
        </div>

        <button
          className="sim_bk_burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div className={`sim_bk_mobile_menu ${mobileOpen ? "sim_bk_open" : ""}`}>
        {navItems.map((item) => <MobileItem key={item.label} item={item} />)}
        <MobileItem item={{ label: "Region", children: regions }} />
        <div className="sim_bk_mobile_actions">
          <Link href="https://dashboard.simplebooks.com/sign-in" className="sim_bk_btn_outline" style={{ textAlign: "center", padding: "12px" }}>
            Sign In
          </Link>
          <Link href="https://dashboard.simplebooks.com" className="sim_bk_btn_orange" style={{ textAlign: "center", padding: "12px" }}>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
