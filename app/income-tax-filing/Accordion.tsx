"use client";

import { useState } from "react";

export interface AccItem {
  title: string;
  body: string;
}

export default function Accordion({ items }: { items: AccItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((a, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            style={{
              border: "1px solid #eef0f6",
              borderRadius: 12,
              padding: "4px 26px",
              boxShadow: "0 4px 16px rgba(17,20,77,0.03)",
            }}
          >
            <div
              className="sim_bk_pointer"
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 18,
                padding: "20px 0",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, color: "#11144d" }}>{a.title}</span>
              <span style={{ fontSize: 15, color: "#8a8fa6", flexShrink: 0 }}>
                {isOpen ? "⌃" : "⌄"}
              </span>
            </div>
            {isOpen && (
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#8a8fa6", margin: 0, padding: "0 0 20px" }}>
                  {a.body}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
