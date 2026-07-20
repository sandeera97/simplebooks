"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {items.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="faq-card sim_bk_pointer"
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                background: "#ffffff",
                border: "1px solid #e7e9f5",
                borderRadius: 14,
                padding: "24px 28px",
                boxShadow: "0 4px 16px rgba(17,20,77,0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18 }}>
                <span style={{ fontSize: 17, fontWeight: 700, color: "#14143d" }}>{f.q}</span>
                <span style={{ fontSize: 14, color: "#8a8fa6", flexShrink: 0 }}>{isOpen ? "⌃" : "⌄"}</span>
              </div>
              {isOpen && (
                <div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6b7290", margin: "16px 0 0" }}>{f.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
