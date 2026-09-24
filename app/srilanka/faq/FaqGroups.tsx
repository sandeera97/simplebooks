"use client";

import { useState } from "react";
import type { FaqGroup } from "./content";

function Group({ group }: { group: FaqGroup }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="v2_faqg">
      <h2 className="v2_faqg_title v2_reveal">{group.name}</h2>
      <div className="v2_faq2">
        {group.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`v2_faq2_item v2_reveal${isOpen ? " is_open" : ""}`}>
              <button
                type="button"
                className="v2_faq2_q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="v2_faq2_s" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div className="v2_faq2_wrap">
                <div className="v2_faq2_inner">
                  <div className="v2_faq2_a">
                    {item.blocks.map((b, j) =>
                      b.type === "ul" ? (
                        <ul key={j} className="v2_faq2_ul">
                          {b.items?.map((li, k) => <li key={k}>{li}</li>)}
                        </ul>
                      ) : (
                        <p key={j}>{b.text}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FaqGroups({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="v2_faqg_wrap">
      {groups.map((g) => (
        <Group key={g.name} group={g} />
      ))}
    </div>
  );
}
