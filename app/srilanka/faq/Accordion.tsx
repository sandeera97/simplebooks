"use client";

import { useState } from "react";
import type { FaqItem } from "./content";

export default function Accordion({ items }: { items: FaqItem[] }) {
  // Divi opens the first item of each group by default; match that.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="sim_bk_faq_list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`sim_bk_faq_item${isOpen ? " is_open" : ""}`}>
            <h3 className="sim_bk_faq_q">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d={isOpen ? "M5 12h14" : "M12 5v14M5 12h14"}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div className="sim_bk_faq_a">
                {item.blocks.map((b, j) =>
                  b.type === "ul" ? (
                    <ul key={j}>
                      {b.items?.map((li, k) => (
                        <li key={k}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{b.text}</p>
                  )
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
