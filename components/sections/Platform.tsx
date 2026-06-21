import Link from "next/link";

/* Dashboard illustration placeholder */
function DashboardIllustration() {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
      {/* Person */}
      <circle cx="160" cy="240" r="32" fill="#1a2744" />
      <rect x="132" y="272" width="56" height="60" rx="12" fill="#1a2744" />
      {/* Laptop */}
      <rect x="185" y="255" width="130" height="85" rx="8" fill="#f0f2ff" />
      <rect x="190" y="260" width="120" height="72" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      {/* Screen content */}
      <rect x="196" y="266" width="108" height="8" rx="2" fill="#f5712a" opacity="0.9" />
      <rect x="196" y="278" width="60" height="5" rx="2" fill="#e5e7eb" />
      <rect x="196" y="286" width="80" height="5" rx="2" fill="#e5e7eb" />
      <rect x="196" y="294" width="50" height="5" rx="2" fill="#e5e7eb" />
      {/* Chart bars */}
      <rect x="238" y="302" width="10" height="22" rx="2" fill="#f5712a" opacity="0.7" />
      <rect x="252" y="295" width="10" height="29" rx="2" fill="#f5712a" />
      <rect x="266" y="308" width="10" height="16" rx="2" fill="#f5712a" opacity="0.5" />
      <rect x="280" y="299" width="10" height="25" rx="2" fill="#f5712a" opacity="0.8" />
      {/* Laptop base */}
      <rect x="175" y="338" width="150" height="8" rx="4" fill="#d1d5db" />

      {/* Floating card 1 */}
      <rect x="290" y="180" width="150" height="70" rx="10" fill="white" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.12))" />
      <rect x="302" y="192" width="60" height="6" rx="2" fill="#111827" />
      <rect x="302" y="202" width="40" height="5" rx="2" fill="#9ca3af" />
      <rect x="380" y="190" width="46" height="24" rx="6" fill="#f5712a" />
      <text x="403" y="206" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">Done</text>
      <rect x="302" y="216" width="118" height="5" rx="2" fill="#e5e7eb" />
      <rect x="302" y="225" width="90" height="5" rx="2" fill="#e5e7eb" />
      <rect x="302" y="234" width="70" height="5" rx="2" fill="#e5e7eb" />

      {/* Floating card 2 */}
      <rect x="30" y="150" width="140" height="80" rx="10" fill="white" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.10))" />
      <rect x="44" y="165" width="50" height="6" rx="2" fill="#111827" />
      <rect x="44" y="175" width="30" height="4" rx="2" fill="#9ca3af" />
      <rect x="44" y="188" width="112" height="28" rx="6" fill="#f0f2ff" />
      <rect x="50" y="196" width="60" height="4" rx="2" fill="#6366f1" opacity="0.6" />
      <rect x="50" y="204" width="40" height="4" rx="2" fill="#6366f1" opacity="0.4" />
      <rect x="116" y="194" width="26" height="16" rx="4" fill="#f5712a" />
      <text x="129" y="205" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">View</text>

      {/* Floating invoice card */}
      <rect x="310" y="120" width="130" height="52" rx="10" fill="white" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.10))" />
      <rect x="322" y="132" width="40" height="5" rx="2" fill="#9ca3af" />
      <rect x="322" y="141" width="70" height="7" rx="2" fill="#111827" />
      <rect x="322" y="153" width="55" height="5" rx="2" fill="#22c55e" />
      <rect x="394" y="128" width="32" height="32" rx="8" fill="#f0fdf4" />
      <path d="M402 142 L406 146 L412 138" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Arrows / lines connecting */}
      <path d="M240 245 Q260 220 290 210" stroke="#f5712a" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
    </svg>
  );
}

export default function Platform() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-snug">
              The future of the business owner experience.
            </h2>
            <p className="mt-5 text-base text-gray-600 leading-relaxed">
              The simplebooks platform has been built on the requests generated
              over the years from thousands of business owners. Submit requests,
              issue shares or request a contract in one place with real-time
              updates, notifications and no headaches.
            </p>
            <Link
              href="https://dashboard.simplebooks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-navy text-navy px-6 py-2.5 text-sm font-semibold hover:bg-navy hover:text-white transition-colors"
            >
              Access Dashboard
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Right: illustration */}
          <div className="flex items-center justify-center">
            <DashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
