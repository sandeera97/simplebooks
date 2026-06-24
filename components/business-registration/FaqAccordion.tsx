"use client";

import { useState } from "react";
import { faqs } from "./content";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="sim_bk_faq_wrap">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="sim_bk_faq_row">
            <button
              className="sim_bk_faq_q"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="sim_bk_faq_q_text">{f.q}</span>
              <span className="sim_bk_faq_sign">{isOpen ? "∧" : "∨"}</span>
            </button>
            {isOpen && (
              <div style={{ overflow: "hidden" }}>
                <p className="sim_bk_faq_a">{f.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
