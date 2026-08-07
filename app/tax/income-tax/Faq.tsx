"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      className="sim_bk_faq2"
      style={{ maxWidth: 1180, margin: "0 auto 44px" }}
    >
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="sim_bk_faq2_card"
            onClick={() => setOpen(isOpen ? null : i)}
            style={{ alignSelf: "start" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "#11144d" }}>{f.q}</span>
              <span
                style={{
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  borderRadius: "50%",
                  background: "#e3e7fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: "#4a56b8",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && (
              <div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#6b7290", margin: "16px 0 0" }}>{f.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
