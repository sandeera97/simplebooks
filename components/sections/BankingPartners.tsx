export default function BankingPartners() {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold text-navy mb-10">
          Banking partners
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {/* Seylan Bank */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 44 44" className="h-11 w-11" fill="none">
              <circle cx="22" cy="22" r="22" fill="#003087" />
              <text x="22" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">S</text>
            </svg>
            <div>
              <p className="font-bold text-[#003087] text-base leading-tight">SEYLAN</p>
              <p className="text-[10px] text-gray-500 tracking-wider uppercase">Bank PLC</p>
            </div>
          </div>

          {/* Sampath Bank */}
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 44 44" className="h-11 w-11" fill="none">
              <circle cx="22" cy="22" r="22" fill="#E31E24" />
              <text x="22" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">S</text>
            </svg>
            <div>
              <p className="font-bold text-gray-800 text-base leading-tight">SAMPATH</p>
              <p className="text-[10px] text-gray-500 tracking-wider uppercase">Bank PLC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
