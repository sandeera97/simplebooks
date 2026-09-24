"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ITEMS = [
  {
    n: "01",
    t: "Every document in one vault",
    d: "Incorporation papers, Form 20s, share certificates, board resolutions and tax filings — stored once, searchable, and downloadable the moment a bank or investor asks for them.",
  },
  {
    n: "02",
    t: "Requests with a real status",
    d: "No more “checking with the team”. Every request shows the stage it is at, who is holding it, and what happens next — updated by the consultant doing the work.",
  },
  {
    n: "03",
    t: "Deadlines that chase you first",
    d: "Annual returns, VAT periods, EPF and ETF dates and licence renewals sit on one calendar, with reminders that start well before the penalty window.",
  },
  {
    n: "04",
    t: "One consultant, on the record",
    d: "Message the person who knows your file. Every conversation is attached to the matter it belongs to, so nothing is lost in a WhatsApp thread.",
  },
];

const DEADLINES = [
  { m: "MAY", d: "22", t: "RFE — Annual return", in: "6 days" },
  { m: "JUN", d: "10", t: "VAT filing · Q2", in: "25 days" },
  { m: "JUL", d: "01", t: "EPF / ETF remittance", in: "46 days" },
];

function DashboardMock() {
  return (
    <div className="v2_dash">
      <div className="v2_dash_bar">
        <span className="v2_dash_dot" />
        <span className="v2_dash_dot" />
        <span className="v2_dash_dot" />
        <span className="v2_dash_url">dashboard.simplebooks.com</span>
      </div>
      <div className="v2_dash_body">
        <aside className="v2_dash_side">
          <p className="v2_dash_brand">simplebooks</p>
          <ul className="v2_dash_nav">
            <li className="is_on">Overview</li>
            <li>Requests</li>
            <li>Documents</li>
            <li>Filings</li>
            <li>Payroll</li>
          </ul>
        </aside>

        <div className="v2_dash_main">
          <div className="v2_dash_hi">
            <b>Good morning, Nimal.</b>
            <span className="v2_dash_chip">ON TRACK</span>
          </div>

          <div className="v2_dash_kpis">
            <div className="v2_dash_kpi"><i>ACTIVE</i><b>03</b></div>
            <div className="v2_dash_kpi"><i>PENDING</i><b>01</b></div>
            <div className="v2_dash_kpi"><i>COMPLETED</i><b>12</b></div>
          </div>

          <div className="v2_dash_row">
            <div className="v2_dash_row_h">
              Annual return — FY 2025/26 <span>#SB-2487</span>
            </div>
            <div className="v2_dash_meta">
              <div><i>FILED</i><b>12 Mar</b></div>
              <div><i>NEXT</i><b>Director signature</b></div>
              <div><i>DUE</i><b>28 May</b></div>
            </div>
            <div className="v2_dash_bar_track"><div className="v2_dash_bar_fill" /></div>
          </div>

          <p className="v2_dash_lbl">UPCOMING DEADLINES</p>
          {DEADLINES.map((x) => (
            <div key={x.t} className="v2_dash_dl">
              <div className="v2_dash_date"><i>{x.m}</i><b>{x.d}</b></div>
              <span className="v2_dash_dl_t">{x.t}</span>
              <span className="v2_dash_dl_d">{x.in}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Platform() {
  const [open, setOpen] = useState(0);
  // Hover-to-open is for mice only. Touch devices report no hover, and a
  // hover-opened panel there would fight the tap.
  const [hoverOpens, setHoverOpens] = useState(false);
  const leaveTimer = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setHoverOpens(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    };
  }, []);

  function onEnter(i: number) {
    if (!hoverOpens) return;
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    setOpen(i);
  }

  return (
    <section className="v2_sec v2_platform" id="platform">
      <div className="v2_grid_bg" style={{ opacity: 0.35 }} />
      <div
        className="v2_blob v2_blob_a"
        style={{ width: 700, height: 700, top: -160, left: -180 }}
      />

      <div className="v2_wrap v2_platform_in">
        <div>
          <p className="v2_eyebrow v2_reveal">Introducing the platform</p>
          <h2 className="v2_h2 v2_reveal">
            Your company, engineered into one dashboard<span className="v2_dot">.</span>
          </h2>
          <p className="v2_platform_p v2_reveal">
            Built on requests from thousands of business owners. Submit a request, issue shares or
            ask for a contract in one place — with real-time status, reminders and no headaches.
          </p>

          <div className="v2_acc v2_reveal">
            {ITEMS.map((it, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={it.n}
                  className={`v2_acc_item${isOpen ? " is_open" : ""}`}
                  onMouseEnter={() => onEnter(i)}
                >
                  <button
                    type="button"
                    className="v2_acc_btn"
                    aria-expanded={isOpen}
                    aria-controls={`v2-acc-${it.n}`}
                    onFocus={() => onEnter(i)}
                    onClick={() => setOpen(isOpen && !hoverOpens ? -1 : i)}
                  >
                    <span className="v2_acc_n">{it.n}</span>
                    <span className="v2_acc_t">{it.t}</span>
                    <span className="v2_acc_s" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Always rendered; collapsed with grid-template-rows so the
                      open/close is a real CSS transition, not a mount. */}
                  <div className="v2_acc_wrap" id={`v2-acc-${it.n}`} role="region">
                    <div className="v2_acc_inner">
                      <p className="v2_acc_body">{it.d}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Link className="v2_btn v2_btn_primary v2_reveal" href="/srilanka/dashboard/accounting-tool">
            Explore the dashboard <span className="v2_arrow">→</span>
          </Link>
        </div>

        <div className="v2_reveal">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
