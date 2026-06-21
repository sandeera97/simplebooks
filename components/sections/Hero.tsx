import Link from "next/link";

/* Placeholder illustration — 3 people with arms raised in orange brand style */
function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* Background circle */}
      <circle cx="240" cy="200" r="180" fill="#fff3ee" />

      {/* Person 1 (left) */}
      <circle cx="140" cy="120" r="28" fill="#f5712a" />
      <rect x="116" y="148" width="48" height="70" rx="10" fill="#f5712a" />
      <rect x="104" y="155" width="20" height="45" rx="8" fill="#f5712a" />
      <rect x="136" y="155" width="20" height="45" rx="8" fill="#f5712a" />
      <rect x="120" y="215" width="18" height="50" rx="6" fill="#1a2744" />
      <rect x="142" y="215" width="18" height="50" rx="6" fill="#1a2744" />
      {/* Raised arm */}
      <rect x="88" y="100" width="18" height="60" rx="8" fill="#f5712a" transform="rotate(-30 88 100)" />

      {/* Person 2 (center, taller) */}
      <circle cx="240" cy="105" r="32" fill="#1a2744" />
      <rect x="212" y="137" width="56" height="78" rx="12" fill="#1a2744" />
      <rect x="196" y="142" width="22" height="50" rx="9" fill="#1a2744" />
      <rect x="234" y="142" width="22" height="50" rx="9" fill="#1a2744" />
      <rect x="216" y="212" width="20" height="55" rx="7" fill="#374151" />
      <rect x="240" y="212" width="20" height="55" rx="7" fill="#374151" />
      {/* Raised arm */}
      <rect x="258" y="88" width="18" height="65" rx="8" fill="#1a2744" transform="rotate(25 258 88)" />

      {/* Person 3 (right) */}
      <circle cx="340" cy="125" r="26" fill="#f5712a" />
      <rect x="318" y="151" width="44" height="65" rx="10" fill="#f5712a" />
      <rect x="306" y="158" width="18" height="42" rx="8" fill="#f5712a" />
      <rect x="338" y="158" width="18" height="42" rx="8" fill="#f5712a" />
      <rect x="322" y="213" width="16" height="48" rx="6" fill="#1a2744" />
      <rect x="342" y="213" width="16" height="48" rx="6" fill="#1a2744" />
      {/* Raised arm */}
      <rect x="352" y="105" width="16" height="56" rx="7" fill="#f5712a" transform="rotate(35 352 105)" />

      {/* Stars / confetti */}
      <path d="M200 60 l4 12 l12 4 l-12 4 l-4 12 l-4-12 l-12-4 l12-4z" fill="#f5712a" opacity="0.7" />
      <path d="M300 50 l3 9 l9 3 l-9 3 l-3 9 l-3-9 l-9-3 l9-3z" fill="#f59e0b" opacity="0.7" />
      <circle cx="170" cy="58" r="5" fill="#f5712a" opacity="0.5" />
      <circle cx="320" cy="68" r="4" fill="#f59e0b" opacity="0.5" />
      <circle cx="120" cy="200" r="6" fill="#e8e8ff" />
      <circle cx="360" cy="180" r="5" fill="#e8e8ff" />

      {/* Ground line */}
      <ellipse cx="240" cy="275" rx="140" ry="8" fill="#f5712a" opacity="0.12" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-hero-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left: text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight tracking-tight">
              The right place to<br />start your business.
            </h1>
            <p className="mt-5 text-base text-gray-600 leading-relaxed max-w-lg">
              We&apos;ve helped over 4,500+ business owners set up, run and grow
              their business across south asia from set up, finance to legal.
            </p>

            <div className="mt-8">
              <Link
                href="/srilanka/contact"
                className="inline-block rounded-lg bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors shadow-sm"
              >
                Start Now
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Or select your region:{" "}
              {[
                { label: "Sri Lanka", href: "/srilanka" },
                { label: "Bangladesh", href: "/bangladesh" },
                { label: "India", href: "#" },
              ].map((r, i, arr) => (
                <span key={r.label}>
                  <Link href={r.href} className="text-brand font-medium hover:text-brand-dark transition-colors">
                    {r.label}
                  </Link>
                  {i < arr.length - 1 && <span className="text-gray-400"> </span>}
                </span>
              ))}
            </p>
          </div>

          {/* Right: illustration */}
          <div className="flex items-center justify-center">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
