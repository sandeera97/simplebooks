"use client";

import { useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/components/layout/navData";

function Row({
  item,
  depth,
  onNavigate,
}: {
  item: NavItem;
  depth: number;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasKids = !!item.children?.length;

  if (!hasKids) {
    const cls = `v2_mnav_link v2_mnav_d${depth}`;
    return (
      <li>
        {item.external ? (
          <a className={cls} href={item.href} onClick={onNavigate}>
            <span>{item.label}</span>
            <span className="v2_mnav_go" aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link className={cls} href={item.href ?? "#"} onClick={onNavigate}>
            <span>{item.label}</span>
            <span className="v2_mnav_go" aria-hidden="true">→</span>
          </Link>
        )}
      </li>
    );
  }

  return (
    <li className={open ? "is_open" : undefined}>
      <button
        type="button"
        className={`v2_mnav_link v2_mnav_toggle v2_mnav_d${depth}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{item.label}</span>
        <span className="v2_mnav_chev" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div className="v2_mnav_sub">
        <div className="v2_mnav_sub_in">
          <ul>
            {item.children!.map((c) => (
              <Row key={c.label} item={c} depth={depth + 1} onNavigate={onNavigate} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function MobileNav({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <ul className="v2_mnav_list">
      {items.map((item) => (
        <Row key={item.label} item={item} depth={0} onNavigate={onNavigate} />
      ))}
    </ul>
  );
}
