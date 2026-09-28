"use client";

import { FormEvent, useState } from "react";
import { submitLead, LeadNotConfiguredError } from "@/lib/leads";

export default function BlogLeadForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFailed(false);

    const d = new FormData(event.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    try {
      await submitLead({
        firstName: get("firstName"),
        lastName: get("lastName"),
        email: get("email"),
        phoneCountry: "",
        phone: get("mobile"),
        source: typeof window === "undefined" ? "/srilanka/blog" : window.location.pathname,
      });
      setSent(true);
    } catch (err) {
      /* This used to flip straight to "Thank you!" without sending anything. */
      if (!(err instanceof LeadNotConfiguredError)) console.error(err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <aside className="blog-lead-card blog-lead-success" aria-live="polite">
        <span>✓</span>
        <h2>Thank you!</h2>
        <p>We have received your details and will be in touch shortly.</p>
      </aside>
    );
  }

  return (
    <aside className="blog-lead-card">
      <h2>Have more questions?</h2>
      <form onSubmit={submit}>
        <div className="blog-name-fields">
          <label>
            <span className="blog-field-label">First name</span>
            <input
              name="firstName"
              autoComplete="given-name"
              placeholder="First name"
              required
            />
          </label>
          <label>
            <span className="blog-field-label">Last name</span>
            <input
              name="lastName"
              autoComplete="family-name"
              placeholder="Last name"
              required
            />
          </label>
        </div>
        <label>
          <span className="blog-field-label">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            required
          />
        </label>
        <label>
          <span className="blog-field-label">Mobile number</span>
          <input
            name="mobile"
            type="tel"
            autoComplete="tel"
            placeholder="Mobile number"
            required
          />
        </label>
        {failed && (
          <p className="v2_leadform_err" role="alert">
            Sorry — we couldn&apos;t send that just now. Please call{" "}
            <a href="tel:+94117555878">0117 555 878</a> or email{" "}
            <a href="mailto:info@simplebooks.com">info@simplebooks.com</a>{" "}
            and we&apos;ll pick it up.
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Sending…" : "Get a free consultation"}
        </button>
      </form>
    </aside>
  );
}
