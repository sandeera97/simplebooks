const services = [
  {
    bg: "#fff3ee",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <rect x="6" y="14" width="28" height="20" rx="3" fill="#f5712a" />
        <rect x="14" y="8" width="12" height="8" rx="2" fill="#e05f18" />
        <rect x="10" y="22" width="8" height="10" rx="1" fill="white" opacity="0.6" />
        <rect x="22" y="22" width="8" height="10" rx="1" fill="white" opacity="0.6" />
      </svg>
    ),
    title: "Business Setup",
    description:
      "We'll guide you through the process of registering your business from A-Z. We've set up 5,000 businesses covering every industry imaginable.",
    href: "/srilanka/services/register-a-company",
  },
  {
    bg: "#fffbeb",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <rect x="8" y="6" width="24" height="28" rx="3" fill="#f59e0b" />
        <rect x="12" y="12" width="16" height="2.5" rx="1" fill="white" opacity="0.8" />
        <rect x="12" y="17" width="12" height="2.5" rx="1" fill="white" opacity="0.8" />
        <rect x="12" y="22" width="14" height="2.5" rx="1" fill="white" opacity="0.8" />
        <rect x="12" y="27" width="10" height="2.5" rx="1" fill="white" opacity="0.8" />
      </svg>
    ),
    title: "Online Bookkeeping",
    description:
      "Have your very own finance team looking after your books while you focus on capturing your invoices, receipts and bills, it's simple.",
    href: "/srilanka/services/accounting-services",
  },
  {
    bg: "#f0fdf4",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <path d="M20 5 L34 11 V22 C34 30 20 36 20 36 C20 36 6 30 6 22 V11 L20 5Z" fill="#22c55e" />
        <path d="M14 20 L18 24 L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Legal Services",
    description:
      "Protect your Trademarks, Intellectual property or get your contracts in order, we've got someone who specializes in the problems you have.",
    href: "/srilanka/legal",
  },
  {
    bg: "#eff6ff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <circle cx="15" cy="14" r="6" fill="#3b82f6" />
        <circle cx="26" cy="14" r="5" fill="#3b82f6" opacity="0.7" />
        <path d="M6 32C6 26 10 22 15 22H25C30 22 34 26 34 32" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Payroll Management",
    description:
      "As your team grows, so does your paperwork. We'll ensure that all the busy work is taken care of, so you can grow and train your team.",
    href: "/srilanka/services/payroll-managment",
  },
  {
    bg: "#fff3ee",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <circle cx="20" cy="18" r="8" fill="#f5712a" />
        <path d="M16 18 Q16 14 20 14 Q24 14 24 18 Q24 22 20 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="24" r="1.5" fill="white" />
        <path d="M10 32C10 28 14 26 20 26C26 26 30 28 30 32" stroke="#f5712a" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Dedicated Support",
    description:
      "The #1 source of our new customers are referrals from our old. You'll always have more than one way to get in touch and stay in touch.",
    href: "/srilanka/contact",
  },
  {
    bg: "#fdf4ff",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
        <rect x="6" y="10" width="28" height="18" rx="3" fill="#a855f7" />
        <rect x="14" y="28" width="12" height="4" rx="1" fill="#a855f7" opacity="0.6" />
        <rect x="10" y="32" width="20" height="2" rx="1" fill="#a855f7" opacity="0.4" />
        <circle cx="20" cy="19" r="4" fill="white" opacity="0.9" />
        <path d="M18 19 L19.5 20.5 L22 17.5" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Technology Platform",
    description:
      "We're not just here to do the paperwork, we're innovators. We're building tools, apps and capabilities to make your business experience better.",
    href: "/srilanka/dashboard/accounting-software",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-hero-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group flex flex-col items-center text-center rounded-2xl bg-white px-6 py-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon with coloured background circle */}
              <div
                className="mb-5 h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: s.bg }}
              >
                {s.icon}
              </div>
              <h3 className="text-base font-semibold text-navy mb-3 group-hover:text-brand transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
