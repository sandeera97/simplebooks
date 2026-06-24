import { ReactNode } from "react";

interface Service {
  color: string;
  icon: ReactNode;
  title: ReactNode;
  description: string;
  href: string;
}

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    color: "#1bbf9a",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Business Setup",
    description:
      "We'll guide you through the process of registering your business from A–Z. We've set up 4,500 businesses covering every industry imaginable.",
    href: "/srilanka/services/register-a-company",
  },
  {
    color: "#7b2ff7",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
      </svg>
    ),
    title: (<>Online<br />Bookkeeping</>),
    description:
      "Have your very own finance team looking after your books while you focus on capturing your invoices, receipts and bills, it's simple.",
    href: "/srilanka/services/accounting-services",
  },
  {
    color: "#f5b921",
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="8" r="5" />
        <path d="M11.5 11.5 21 21" />
        <path d="M16 16l2-2" />
      </svg>
    ),
    title: "Legal Services",
    description:
      "Protect your Trademarks, Intellectual property or get your contracts in order, we've got someone who specialises in the problems you have.",
    href: "/srilanka/legal",
  },
  {
    color: "#f0395b",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <line x1="13" y1="9" x2="18" y2="9" />
        <line x1="13" y1="13" x2="18" y2="13" />
      </svg>
    ),
    title: (<>Payroll<br />Management</>),
    description:
      "As your team grows, so does your paperwork. We'll ensure that all the busy work is taken care of, so you can grow and train your team.",
    href: "/srilanka/services/payroll-managment",
  },
  {
    color: "#15151f",
    icon: (
      <svg {...iconProps} width={24} height={24}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: (<>Dedicated<br />Support</>),
    description:
      "The #1 source of our new customers are referrals from our old. You'll always have more than one way to get in touch and stay in touch.",
    href: "/srilanka/contact",
  },
  {
    color: "#2f6bef",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: (<>Technology<br />Platform</>),
    description:
      "We're not just here to do the paperwork, we're innovators. We're building tools, apps and capabilities to make your business experience better.",
    href: "/srilanka/dashboard/accounting-software",
  },
];

export default function Services() {
  return (
    <section className="sim_bk_services">
      <div className="sim_bk_svc_grid">
        {services.map((s, i) => (
          <a key={i} href={s.href} className="sim_bk_svc_card" style={{ textDecoration: "none" }}>
            <div className="sim_bk_svc_icon" style={{ background: s.color }}>
              {s.icon}
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
