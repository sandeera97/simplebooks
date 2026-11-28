"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/layout/navData";

/** One link in a panel. The current page carries aria-current. */
function PanelLink({ c, pathname, onPick }: { c: NavItem; pathname: string; onPick: () => void }) {
  if (c.external) {
    return (
      <a href={c.href} onClick={onPick}>
        {c.label} <span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <Link href={c.href ?? "#"} onClick={onPick} aria-current={c.href === pathname ? "page" : undefined}>
      {c.label}
    </Link>
  );
}

/** A column of links inside the mega panel. */
function Column({ item, pathname, onPick }: { item: NavItem; pathname: string; onPick: () => void }) {
  const kids = item.children ?? [];
  return (
    <div className="v2_mega_col">
      <p className="v2_mega_h">{item.label}</p>
      <ul>
        {kids.map((c) => (
          <li key={c.label}>
            <PanelLink c={c} pathname={pathname} onPick={onPick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Panel({ item, pathname, onPick }: { item: NavItem; pathname: string; onPick: () => void }) {
  const kids = item.children ?? [];
  const groups = kids.filter((k) => k.children?.length);
  const flat = kids.filter((k) => !k.children?.length);

  /* Since the September 2026 restructure every menu is a flat list, and Tax
     has twelve entries; one column of that is a very tall, thin panel. Long
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
                <PanelLink c={c} pathname={pathname} onPick={onPick} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {groups.map((g) => (
        <Column key={g.label} item={g} pathname={pathname} onPick={onPick} />
      ))}
    </div>
  );
}

const slug = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function DesktopNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggers = useRef(new Map<string, HTMLButtonElement>());
  /* How the open panel was opened. A panel opened by hover closes when the
     pointer leaves; one opened (or pinned) by a click or a key stays open
     until a click, Escape, focus leaving it or a click outside closes it. */
  const openedBy = useRef<"hover" | "click">("hover");
  const closeTimer = useRef<number | null>(null);
  const switchTimer = useRef<number | null>(null);

  const clear = (t: React.RefObject<number | null>) => {
    if (t.current) window.clearTimeout(t.current);
    t.current = null;
  };
  // A small grace period so the cursor can cross the gap into the panel.
  const scheduleClose = () => {
    clear(closeTimer);
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  };
  const close = () => {
    clear(closeTimer);
    clear(switchTimer);
    setOpen(null);
  };

  /* Hover intent. With a panel already open, moving to another trigger waits a
     moment before switching, so a diagonal path from a trigger to the left
     edge of its own panel (which crosses the neighbouring triggers) no longer
     swaps the menu out from under the cursor. Re-entering the open item
     cancels the switch. */
  const hoverItem = (label: string) => {
    clear(closeTimer);
    if (open === label) {
      clear(switchTimer);
      return;
    }
    const go = () => {
      openedBy.current = "hover";
      setOpen(label);
    };
    clear(switchTimer);
    if (open === null) go();
    else switchTimer.current = window.setTimeout(go, 160);
  };

  /* Click and Enter/Space. Hover has usually opened the panel already by the
     time a mouse click (or an iPad tap, which fires both) arrives; that click
     used to close it again. Now it pins the panel instead. */
  const clickItem = (label: string) => {
    clear(switchTimer);
    clear(closeTimer);
    if (open === label && openedBy.current === "hover") {
      openedBy.current = "click";
      return;
    }
    openedBy.current = "click";
    setOpen(open === label ? null : label);
  };

  useEffect(() => {
    if (!open) return;
    const trigger = triggers.current.get(open);
    const shut = () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
      if (switchTimer.current) window.clearTimeout(switchTimer.current);
      setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Hand focus back to the trigger instead of dropping it to <body>.
      if (navRef.current?.contains(document.activeElement)) trigger?.focus();
      shut();
    };
    const onDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) shut();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // Never leave a timer running after unmount.
  useEffect(() => {
    const timers = [closeTimer, switchTimer];
    return () => timers.forEach((t) => t.current && window.clearTimeout(t.current));
  }, []);

  return (
    <nav
      ref={navRef}
      className="v2_nav"
      aria-label="Main"
      onMouseLeave={() => {
        clear(switchTimer);
        if (openedBy.current === "hover") scheduleClose();
      }}
    >
      {items.map((item) => {
        const hasKids = !!item.children?.length;
        const isOpen = open === item.label;
        const panelId = `v2-mega-${slug(item.label)}`;

        if (!hasKids) {
          return (
            <Link
              key={item.label}
              href={item.href ?? "#"}
              onMouseEnter={() => {
                if (open) scheduleClose();
              }}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className={`v2_nav_has${isOpen ? " is_open" : ""}`}
            onMouseEnter={() => hoverItem(item.label)}
            onBlur={(e) => {
              // Tabbing out of an open menu closes it, rather than leaving the
              // panel open over the page.
              if (isOpen && !e.currentTarget.contains(e.relatedTarget as Node | null)) close();
            }}
          >
            <button
              ref={(el) => {
                if (el) triggers.current.set(item.label, el);
                else triggers.current.delete(item.label);
              }}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => clickItem(item.label)}
            >
              {item.label}
              <span className="v2_nav_caret" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div className="v2_mega" id={panelId}>
              <div className="v2_mega_in">
                <Panel item={item} pathname={pathname} onPick={close} />
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
