"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/components/layout/navData";

/** A column of links inside the mega panel. */
function Column({ item, onPick }: { item: NavItem; onPick: () => void }) {
  const kids = item.children ?? [];
  return (
    <div className="v2_mega_col">
      <p className="v2_mega_h">{item.label}</p>
      <ul>
        {kids.map((c) => (
          <li key={c.label}>
            {c.external ? (
              <a href={c.href} onClick={onPick}>
                {c.label} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link href={c.href ?? "#"} onClick={onPick}>
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Panel({ item, onPick }: { item: NavItem; onPick: () => void }) {
  const kids = item.children ?? [];
  const groups = kids.filter((k) => k.children?.length);
  const flat = kids.filter((k) => !k.children?.length);

  /* Since the September 2026 restructure every menu is a flat list, and Tax
     has twelve entries — one column of that is a very tall, thin panel. Long
     lists flow into two columns instead. */
  const cols = flat.length > 6 ? 2 : 1;

  // A group becomes its own column; the plain links share the first column.
  return (
    <div className="v2_mega_grid">
      {flat.length > 0 && (
        <div className={`v2_mega_col${cols > 1 ? " v2_mega_col_wide" : ""}`}>
          <p className="v2_mega_h">{item.label}</p>
          <ul style={cols > 1 ? { columnCount: cols, columnGap: 26 } : undefined}>
            {flat.map((c) => (
              <li key={c.label}>
                {c.external ? (
                  <a href={c.href} onClick={onPick}>
                    {c.label} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link href={c.href ?? "#"} onClick={onPick}>
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      {groups.map((g) => (
        <Column key={g.label} item={g} onPick={onPick} />
      ))}
    </div>
  );
}

export default function DesktopNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  // A small grace period so the cursor can cross the gap into the panel.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      cancelClose();
    };
  }, []);

  return (
    <nav className="v2_nav" onMouseLeave={scheduleClose}>
      {items.map((item) => {
        const hasKids = !!item.children?.length;
        const isOpen = open === item.label;

        if (!hasKids) {
          return (
            <Link key={item.label} href={item.href ?? "#"} onMouseEnter={() => setOpen(null)}>
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className={`v2_nav_has${isOpen ? " is_open" : ""}`}
            onMouseEnter={() => {
              cancelClose();
              setOpen(item.label);
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : item.label)}
            >
              {item.label}
              <span className="v2_nav_caret" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div className="v2_mega" onMouseEnter={cancelClose}>
              <div className="v2_mega_in">
                <Panel item={item} onPick={() => setOpen(null)} />
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
