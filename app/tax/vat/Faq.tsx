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
      className="faq-grid"
      style={{
        maxWidth: 1180,
        margin: "0 auto 44px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        alignItems: "start",
      }}
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
              <span style={{ fontSize: 18, color: "#8a8fa6", flexShrink: 0 }}>{isOpen ? "−" : "+"}</span>
            </div>
            <div style={{ display: isOpen ? "block" : "none" }}>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#6b7290", margin: "14px 0 0" }}>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
