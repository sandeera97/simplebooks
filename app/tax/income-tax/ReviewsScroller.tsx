"use client";

import { useRef } from "react";

export interface Review {
  text: string;
  name: string;
  role: string;
  initial: string;
}

export default function ReviewsScroller({ reviews }: { reviews: Review[] }) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (rowRef.current) rowRef.current.scrollBy({ left: -340, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (rowRef.current) rowRef.current.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <div style={{ maxWidth: 1250, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
      <div
        className="sim_bk_arrow_btn"
        onClick={scrollLeft}
        style={{
          flexShrink: 0,
          width: 46,
          height: 46,
          borderRadius: "50%",
          border: "1px solid #e4e6f2",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
      <div
        ref={rowRef}
        style={{
          flex: 1,
          display: "flex",
          gap: 22,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "6px 4px 16px",
        }}
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 300px",
              scrollSnapAlign: "start",
              background: "#ffffff",
              border: "1px solid #eef0f6",
              borderRadius: 16,
              padding: "26px 24px",
              height: 340,
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 6px 22px rgba(17,20,77,0.04)",
            }}
          >
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5a607a", margin: "0 0 16px", flex: 1, overflow: "hidden" }}>{r.text}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #f1f2f8", paddingTop: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#eef0f6",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#9aa0b4",
                }}
              >
                {r.initial}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#11144d" }}>{r.name}</div>
                <div style={{ fontSize: 12, color: "#9aa0b4" }}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="sim_bk_arrow_btn"
        onClick={scrollRight}
        style={{
          flexShrink: 0,
          width: 46,
          height: 46,
          borderRadius: "50%",
          border: "1px solid #e4e6f2",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11144d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
}
