"use client";

import { useState } from "react";

const faqData = [
  {
    q: "What is Simplebooks VAT Tool?",
    a: "It's a tool that turns manual VAT schedule creation and RAMIS filing into a few clicks — built specifically for Sri Lankan accountants.",
  },
  {
    q: "Do I still need to log into the RAMIS portal?",
    a: "No. You can file directly to the IRD through Simplebooks — no more manual entry into the slow RAMIS portal.",
  },
  {
    q: "What file formats can I upload?",
    a: "Upload your existing invoices, TIN lists and schedules in common formats like Excel and CSV — no reformatting needed.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your data is encrypted and stored securely, and we always ask for your consent before anything is filed.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing will be announced at launch. Join the waitlist to be the first to know and to lock in early-access offers.",
  },
  {
    q: "Can I use this for multiple clients?",
    a: "Yes. The tool is built for accountants managing VAT filing for many clients, all from one place.",
  },
  {
    q: "What if I find an error after filing?",
    a: "Errors are flagged before you file, but if something comes up afterwards our team helps you correct and refile quickly.",
  },
];

export default function FaqSingle() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: 920, margin: "0 auto" }}>
      {faqData.map((f, i) => {
        const isOpen = faqOpen === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid #d9dcea" }}>
            <div
              onClick={() => setFaqOpen(isOpen ? null : i)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                padding: "24px 4px",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: 17, fontWeight: 700, color: "#11144d" }}>{f.q}</span>
              <span style={{ fontSize: 14, color: "#8a8fa6", flexShrink: 0 }}>
                {isOpen ? "⌃" : "⌄"}
              </span>
            </div>
            {isOpen && (
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#6b7290", margin: 0, padding: "0 4px 24px" }}>
                  {f.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
