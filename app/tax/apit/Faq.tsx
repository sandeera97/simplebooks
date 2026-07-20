"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      className="sim_bk_faq2"
      style={{ maxWidth: 1180, margin: "0 auto 44px", alignItems: "start" }}
    >
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="faq-card"
            onClick={() => setOpen(isOpen ? null : i)}
            style={{
              background: "#f6f7fe",
              border: "1px solid #dfe3f7",
              borderRadius: 12,
              padding: "22px 24px",
              alignSelf: "start",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <span style={{ fontSize: 15.5, fontWeight: 700, color: "#11144d" }}>{f.q}</span>
              <span
                style={{
                  width: 26,
                  height: 26,
                  flexShrink: 0,
                  borderRadius: "50%",
                  background: "#e3e7fb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  color: "#4a56b8",
                }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && (
              <div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#6b7290", margin: "14px 0 0" }}>{f.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
