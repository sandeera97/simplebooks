"use client";

import { FormEvent, useState } from "react";

export default function BlogLeadForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
        <button type="submit">Get a free consultation</button>
      </form>
    </aside>
  );
}
