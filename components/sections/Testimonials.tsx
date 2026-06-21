import Link from "next/link";

const testimonials = [
  {
    name: "Travel with Wife",
    role: "Entrepreneur",
    quote: "Aku quite happy with the simplebooks team for his amazing service. The team was very well organized, monthly visits and other team members was very helpful. Keep up the great work simplebooks, highly recommended this house.",
    initials: "TW",
    color: "#f5712a",
  },
  {
    name: "Damith Menaka",
    role: "Director - Animspire",
    quote: "Company registration is a hectic process in Sri Lanka. Simplebooks is simply a life saver.",
    initials: "DM",
    color: "#3b82f6",
  },
  {
    name: "NAWRAN",
    role: "Social Media Academy",
    quote: "would rather thank you simplebooks team for his amazing organization, monthly visits and other team members was very helpful, keep up the great work simplebooks. free weeks.",
    initials: "NA",
    color: "#22c55e",
  },
  {
    name: "Ratta",
    role: "Studio Ratta",
    quote: "Too bad the time to update what they were doing every day of the work. Every member of simplebooks appreciate their professionality and also always simple simplebooks to any in need of the services you provide. I would have worked for anything better.",
    initials: "RA",
    color: "#a855f7",
  },
  {
    name: "Chanux Bro",
    role: "Creator",
    quote: "LMAO I got so just had we.",
    initials: "CB",
    color: "#f59e0b",
  },
  {
    name: "Jeevan Mendis",
    role: "Cricketer",
    quote: "The entire process was quick, simple and most importantly the team was always there when I needed them.",
    initials: "JM",
    color: "#ef4444",
  },
  {
    name: "Bhanuka Harischandra",
    role: "Founder, Surge Global",
    quote: "I've registered over 10 businesses with Simplebooks over the years. Their service is consistently excellent.",
    initials: "BH",
    color: "#06b6d4",
  },
  {
    name: "Andreena Mohammed",
    role: "Director",
    quote: "I have worked with simplebooks team for almost 2 years and am quite happy about their attention to detail, follow-ups and communication. Simplebooks has been a great partner in managing my company accounts. I really appreciated simplebooks for company secretarial. Their team is very professional and easy to work with.",
    initials: "AM",
    color: "#8b5cf6",
  },
  {
    name: "Damith Roshan",
    role: "Founder",
    quote: "Very friendly and Professional, easily recommend to anyone who wants to start the documents. simple as that.",
    initials: "DR",
    color: "#10b981",
  },
  {
    name: "Dhanushka",
    role: "Sama Escapes",
    quote: "It's a superb experience that I get from simply books. I got the contact through my firm. From there onwards it's been more than 3 months since I registered with simplebooks. Responding me for my queries, updating the process etc., everything is good.",
    initials: "DH",
    color: "#f5712a",
  },
  {
    name: "Tom Simpson",
    role: "Remote Workforce",
    quote: "I've registered with simplebooks, been more than a year since we listed on the web. They are very good service. Responding me for my queries, updating the process etc., everything is good.",
    initials: "TS",
    color: "#3b82f6",
  },
  {
    name: "Bhanuka Hathurusingha",
    role: "Legal Advisor",
    quote: "My simplebooks support has been very reliable. Their quality service and swift communication has been commendable.",
    initials: "BH",
    color: "#ec4899",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const visible = testimonials.slice(0, 9);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-navy mb-10">
          Thousands of repeat customers<br className="hidden sm:block" /> can&apos;t all be wrong
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((t, i) => (
            <div key={i} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 flex flex-col">
              <StarRow />
              <p className="text-xs text-gray-600 leading-relaxed flex-1 line-clamp-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: t.color }}
                >
                  <span className="text-[10px] font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">{t.name}</p>
                  <p className="text-[10px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/srilanka/testimonials"
            className="rounded-lg bg-navy px-8 py-3 text-sm font-semibold text-white hover:bg-navy-mid transition-colors"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}
