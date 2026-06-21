"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { navItems, regions, NavItem } from "./navData";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-3.5 w-3.5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

/* Desktop dropdown (first level) */
function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <div className="absolute left-0 top-full z-50 mt-2 min-w-52 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/8">
      {items.map((item) =>
        item.children ? (
          <SubMenuTrigger key={item.label} item={item} />
        ) : (
          <Link
            key={item.label}
            href={item.href ?? "#"}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand transition-colors"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}

function SubMenuTrigger({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand transition-colors">
        {item.label}
        <ChevronDown className="-rotate-90" />
      </button>
      {open && item.children && (
        <div className="absolute left-full top-0 z-50 min-w-52 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/8">
          {item.children.map((child) => (
            <Link key={child.label} href={child.href ?? "#"}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand transition-colors">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link href={item.href ?? "#"} className="text-sm font-medium text-gray-700 hover:text-brand transition-colors whitespace-nowrap">
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-brand transition-colors whitespace-nowrap">
        {item.label} <ChevronDown className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      {open && <DropdownMenu items={item.children} />}
    </div>
  );
}

/* Region dropdown */
function RegionDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-brand transition-colors">
        <GlobeIcon /> Region <ChevronDown className={open ? "rotate-180 transition-transform" : "transition-transform"} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/8">
          {regions.map((r) => (
            <Link key={r.label} href={r.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand transition-colors">
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* Mobile accordion */
function MobileNavItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link href={item.href ?? "#"}
        className={`block py-2.5 px-4 text-sm font-medium text-gray-800 hover:text-brand ${depth > 0 ? "pl-8" : ""}`}>
        {item.label}
      </Link>
    );
  }
  return (
    <div>
      <button onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between py-2.5 px-4 text-sm font-medium text-gray-800 hover:text-brand ${depth > 0 ? "pl-8" : ""}`}>
        {item.label} <ChevronDown className={open ? "rotate-180" : ""} />
      </button>
      {open && (
        <div className="border-l-2 border-orange-100 ml-6">
          {item.children.map((child) => <MobileNavItem key={child.label} item={child} depth={depth + 1} />)}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-2">
            <span className="text-xl font-bold tracking-tight text-navy">simplebooks</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 flex-1">
            {navItems.map((item) => <DesktopNavItem key={item.label} item={item} />)}
          </nav>

          {/* Right: region + auth */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <RegionDropdown />
            <Link href="https://dashboard.simplebooks.com/sign-in"
              className="text-sm font-medium text-gray-700 hover:text-brand transition-colors">
              Sign in
            </Link>
            <Link href="https://dashboard.simplebooks.com"
              className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">
              Sign up
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu">
            {mobileOpen ? (
              <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="py-2">
            {navItems.map((item) => <MobileNavItem key={item.label} item={item} />)}
          </div>
          <div className="border-t border-gray-100 p-4 space-y-3">
            <Link href="https://dashboard.simplebooks.com/sign-in"
              className="block text-center py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
              Sign in
            </Link>
            <Link href="https://dashboard.simplebooks.com"
              className="block text-center py-2.5 text-sm font-semibold text-white bg-brand rounded-lg hover:bg-brand-dark">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
