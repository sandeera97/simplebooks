"use client";

import { useState } from "react";

const tabDefs = [
  {
    title: "Effortless Payroll Calculations",
    desc: "Our tool automates complex payroll calculations, ensuring accuracy and saving you time. Plus, our experts are always on hand to answer your questions and simplify the process.",
  },
  {
    title: "Stress-Free Employee Tax Filing",
    desc: "We handle employee tax filing end-to-end, so you stay compliant with Sri Lankan tax regulations without the paperwork or the stress.",
  },
  {
    title: "Expert-Guided EPF/ETF Registration",
    desc: "Our payroll experts guide you through EPF/ETF registration and monthly submissions, making statutory compliance completely hassle-free.",
  },
  {
    title: "Organized Records at Your Fingertips",
    desc: "Access payslips, summaries and employee records anytime from one organized dashboard — everything you need, always within reach.",
  },
  {
    title: "Payroll Expertise, Beyond the Numbers",
    desc: "More than software: a dedicated team of payroll professionals is always available to advise you and get things right.",
  },
];

export default function WhyTabs() {
  const [tab, setTab] = useState(0);

  return (
    <div className="sim_bk_tabs_row" style={{ maxWidth: 1250, margin: "0 auto" }}>
      <div style={{ width: "44%", paddingRight: 0 }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 30px", color: "#11144d" }}>Why Simplebooks?</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tabDefs.map((t, i) => {
            const active = tab === i;
            return (
              <div
                key={i}
                className="sim_bk_pointer"
                onClick={() => setTab(i)}
                style={{
                  padding: "18px 26px",
                  fontSize: 18,
                  fontWeight: 700,
                  borderRadius: 10,
                  background: active ? "#3447d1" : "transparent",
                  color: active ? "#ffffff" : "#2b3358",
                  marginRight: active ? -24 : 0,
                  position: "relative",
                  zIndex: 2,
                  transition: "background .2s ease, color .2s ease",
                }}
              >
                {t.title}
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: "56%",
          background: "#3447d1",
          borderRadius: 22,
          padding: "44px 44px 40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ textAlign: "center", fontSize: 17, lineHeight: 1.6, color: "#dfe3ff", margin: "0 0 30px" }}>
          {tabDefs[tab].desc}
        </p>
        <div
          style={{
            flex: 1,
            minHeight: 360,
            background: "repeating-linear-gradient(45deg, #3f52d8, #3f52d8 12px, #4658da 12px, #4658da 24px)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 13, color: "#c3ccff" }}>[ payroll dashboard — EPF/ETF &amp; PAYE summary ]</span>
        </div>
      </div>
    </div>
  );
}
