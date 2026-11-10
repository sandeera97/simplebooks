import "./serviceArt.css";

/**
 * Small product scenes for the homepage service cards (website audit: "add
 * some images to the card components"). Each one shows the service doing its
 * job, the way the doola reference does with slices of its dashboard, but
 * drawn in HTML so it stays sharp, on brand and weightless.
 *
 * Decorative only: the card's heading and copy already say the same thing,
 * so every scene is aria-hidden. Figures are illustrative, not client data.
 */
export type ServiceArtKind = "setup" | "books" | "legal" | "payroll" | "support" | "platform";

const Tick = () => (
  <svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true">
    <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Setup() {
  return (
    <div className="sa_win">
      <p className="sa_win_h">Company registration</p>
      <div className="sa_bar"><span style={{ width: "72%" }} /></div>
      <ul className="sa_steps">
        <li className="is_done"><i><Tick /></i>Name approved</li>
        <li className="is_done"><i><Tick /></i>Forms 01, 18, 19 signed</li>
        <li className="is_live"><i /> With the Registrar</li>
      </ul>
    </div>
  );
}

function Books() {
  const rows = [
    { n: "Client payment", v: "+ 240,000", ok: true },
    { n: "Office rent", v: "− 85,000", ok: true },
    { n: "Electricity bill", v: "− 12,400", ok: false },
  ];
  return (
    <div className="sa_win">
      <p className="sa_win_h">Bank reconciliation <b>LKR</b></p>
      <ul className="sa_rows">
        {rows.map((r) => (
          <li key={r.n}>
            <span>{r.n}</span>
            <span className={r.v.startsWith("+") ? "sa_in" : "sa_out"}>{r.v}</span>
            <em className={r.ok ? "sa_chip_ok" : "sa_chip_wait"}>{r.ok ? "Matched" : "Review"}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Legal() {
  return (
    <div className="sa_win sa_doc">
      <p className="sa_win_h">Shareholders&rsquo; agreement</p>
      <span className="sa_line" style={{ width: "92%" }} />
      <span className="sa_line" style={{ width: "78%" }} />
      <span className="sa_line" style={{ width: "86%" }} />
      <div className="sa_sign">
        <svg viewBox="0 0 120 32" width="96" height="26" aria-hidden="true">
          <path d="M4 22c10-14 16-16 18-8s-4 12 4 6 10-16 16-10-2 14 8 8 12-10 18-6 6 8 14 4 14-6 30-8" fill="none" stroke="#0a1233" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <em className="sa_stamp">Signed</em>
      </div>
    </div>
  );
}

function Payroll() {
  return (
    <div className="sa_win">
      <p className="sa_win_h">November payroll</p>
      <div className="sa_people">
        {["A", "K", "N", "R", "S"].map((l, i) => (
          <span key={l} style={{ zIndex: 5 - i }}>{l}</span>
        ))}
        <b>24 employees</b>
      </div>
      <div className="sa_chips">
        <em className="sa_chip_ok"><Tick /> EPF 12%</em>
        <em className="sa_chip_ok"><Tick /> ETF 3%</em>
        <em className="sa_chip_ok"><Tick /> Payslips sent</em>
      </div>
    </div>
  );
}

function Support() {
  return (
    <div className="sa_win sa_chat">
      <p className="sa_bubble sa_them">Can you file our VAT return this month?</p>
      <p className="sa_bubble sa_us">Done. Filed today, and the receipt is in your dashboard.</p>
      <p className="sa_typing"><span /><span /><span /></p>
    </div>
  );
}

function Platform() {
  const rows = [
    { n: "VAT return", d: "20 Nov", s: "Due soon", cls: "sa_chip_due" },
    { n: "EPF / ETF", d: "30 Nov", s: "Scheduled", cls: "sa_chip_next" },
    { n: "Annual return", d: "Filed", s: "Done", cls: "sa_chip_ok" },
  ];
  return (
    <div className="sa_win sa_dark">
      <p className="sa_win_h">Upcoming deadlines</p>
      <ul className="sa_rows">
        {rows.map((r) => (
          <li key={r.n}>
            <span>{r.n}</span>
            <span className="sa_date">{r.d}</span>
            <em className={r.cls}>{r.s}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

const SCENES: Record<ServiceArtKind, () => React.JSX.Element> = {
  setup: Setup,
  books: Books,
  legal: Legal,
  payroll: Payroll,
  support: Support,
  platform: Platform,
};

export default function ServiceArt({ kind }: { kind: ServiceArtKind }) {
  const Scene = SCENES[kind];
  return (
    <div className={`sa sa_${kind}`} aria-hidden="true">
      <Scene />
    </div>
  );
}
