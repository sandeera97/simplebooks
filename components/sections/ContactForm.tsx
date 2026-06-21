"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Business Registration",
  "Bookkeeping",
  "Payroll",
  "Tax",
  "Company Secretary",
  "Legal",
  "Trademark",
  "General",
];

const languageOptions = ["English", "Sinhala", "Tamil"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-navy mb-2">Thank you!</h3>
            <p className="text-gray-600">
              We&apos;ve received your enquiry and will be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-gray-500 mb-2">* indicates required fields</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-brand">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number <span className="text-brand">*</span>
              </label>
              <div className="flex gap-2">
                <select className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition w-28">
                  <option>🇱🇰 +94</option>
                  <option>🇧🇩 +880</option>
                  <option>🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  required
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Services required <span className="text-brand">*</span>
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition">
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s.toLowerCase()}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Language
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition">
                {languageOptions.map((l) => (
                  <option key={l} value={l.toLowerCase()}>{l}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your message (Optional)
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Sending..." : "Sign up a Free Consultation"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
