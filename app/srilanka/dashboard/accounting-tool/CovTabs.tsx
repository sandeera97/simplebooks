"use client";

import { useState } from "react";

interface TabDef {
  title: string;
  desc: string;
}

const tabDefs: TabDef[] = [
  {
    title: "User-Friendly Interface",
    desc: "Our accounting tool provides a simple dashboard to enter transactions, reconcile accounts, and manage all accounting tasks efficiently, streamlining your financial processes with ease",
  },
  {
    title: "Track Customers and Invoices",
    desc: "Keep every customer and invoice in one place — create, send and track invoices, and always know exactly who has paid and what's outstanding.",
  },
  {
    title: "Manage Vendors and Purchases",
    desc: "Record your vendors, bills and purchases effortlessly, so your payables stay organised and nothing slips through the cracks.",
  },
  {
    title: "Detailed Reporting",
    desc: "Generate P&L statements, balance sheets and transaction reports in a click, giving you clear insight into your business performance.",
  },
  {
    title: "No Cost to Get Started",
    desc: "Start using the Simplebooks accounting tool for free — no upfront cost, no credit card required, and expert support whenever you need it.",
  },
];

export default function CovTabs() {
  const [tab, setTab] = useState(0);

  return (
    <div
      className="sim_bk_tabs_row"
      style={{ maxWidth: 1200, margin: "0 auto" }}
    >
      <div
        className="sim_bk_cov_tabs"
        style={{
          width: "34%",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          justifyContent: "center",
        }}
      >
        {tabDefs.map((t, i) => {
          const active = tab === i;
          return (
            <div
              key={i}
              className="sim_bk_pointer"
              onClick={() => setTab(i)}
              style={{
                padding: "20px 26px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 12,
                transition: "background .2s ease, color .2s ease",
                background: active ? "#2f4bd6" : "#f1f2f8",
                color: active ? "#ffffff" : "#2b3358",
                boxShadow: active ? "0 10px 24px rgba(47,75,214,0.25)" : "none",
              }}
            >
              {t.title}
            </div>
          );
        })}
      </div>
      <div
        className="sim_bk_cov_panel"
        style={{
          width: "66%",
          background: "#f5f6fb",
          borderRadius: 18,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: "#5b6ea8",
            margin: 0,
          }}
        >
          {tabDefs[tab].desc}
        </p>
        <div
          className="ph-img"
          style={{
            flex: 1,
            minHeight: 360,
            background:
              "repeating-linear-gradient(45deg, #e9ebf6, #e9ebf6 12px, #eef0fa 12px, #eef0fa 24px)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 13,
              color: "#9aa0b4",
            }}
          >
            [ dashboard — Transactions view ]
          </span>
        </div>
      </div>
    </div>
  );
}
