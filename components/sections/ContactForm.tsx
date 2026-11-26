"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { submitLead, LeadNotConfiguredError } from "@/lib/leads";
import { SuccessIcon } from "@/components/v2/icons";
import { EMAIL_PATTERN, NAME_PATTERN, PHONE_PATTERN } from "@/components/v2/LeadForm";

/* The contact page's form. It now uses the same labelled v2 fields as every
   other form on the site: it was the last one whose only labels were
   placeholders (which vanish as you type, and gave the two selects no
   accessible name at all). Field names and the submitted payload are
   unchanged. */

const SERVICES = [
  "Business registration",
  "Bookkeeping",
  "Payroll",
  "Tax",
  "Company secretary",
  "Legal",
  "Trademark",
  "General",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const doneRef = useRef<HTMLDivElement>(null);

  // The button just disappeared with the form: announce the thank-you and keep focus with it.
  useEffect(() => {
    if (submitted) doneRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    try {
      await submitLead({
        firstName: get("firstName"),
        lastName: get("lastName"),
        email: get("email"),
        phoneCountry: get("phoneCountry"),
        phone: get("phone"),
        service: get("service"),
        language: get("language"),
        message: get("message"),
        source: "/srilanka/contact",
      });
      setSubmitted(true);
    } catch (err) {
      /* This form used to fake an 800ms delay and show "Thank you!" while
         dropping the enquiry. Never again. */
      if (!(err instanceof LeadNotConfiguredError)) console.error(err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="v2_contact_done" ref={doneRef} tabIndex={-1} role="status">
        <p className="v2_leadform_done_icon"><SuccessIcon /></p>
        <h3>Thank you!</h3>
        <p>We&apos;ve received your enquiry and will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    /* method="post": if this is ever submitted before the page's script runs,
       the details must not end up in the URL. */
    <form onSubmit={handleSubmit} method="post" aria-labelledby="contact-form-h">
      <p className="v2_form_req"><span>*</span> indicates required fields</p>

      <div className="v2_grid2">
        <div className="v2_field">
          <label htmlFor="cf-fn">First name&nbsp;<span>*</span></label>
          <input id="cf-fn" name="firstName" className="v2_input" required pattern={NAME_PATTERN} autoComplete="given-name" />
        </div>
        <div className="v2_field">
          <label htmlFor="cf-ln">Last name&nbsp;<span>*</span></label>
          <input id="cf-ln" name="lastName" className="v2_input" required pattern={NAME_PATTERN} autoComplete="family-name" />
        </div>
      </div>

      <div className="v2_field">
        <label htmlFor="cf-em">Email&nbsp;<span>*</span></label>
        <input
          id="cf-em" type="email" name="email" className="v2_input" required autoComplete="email"
          pattern={EMAIL_PATTERN} title="An email address like you@company.lk"
        />
      </div>

      <div className="v2_field">
        <label htmlFor="cf-ph">Phone number&nbsp;<span>*</span></label>
        <div className="v2_phone">
          <select name="phoneCountry" className="v2_select" aria-label="Country dialling code">
            <option>🇱🇰 +94</option>
            <option>🇧🇩 +880</option>
            <option>🇮🇳 +91</option>
          </select>
          <input
            id="cf-ph" type="tel" name="phone" className="v2_input" required autoComplete="tel-national"
            pattern={PHONE_PATTERN} title="Your phone number, e.g. 77 123 4567" placeholder="77 123 4567"
          />
        </div>
      </div>

      <div className="v2_field">
        <label htmlFor="cf-sv">Service required&nbsp;<span>*</span></label>
        <select id="cf-sv" name="service" className="v2_select" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="v2_field">
        <label htmlFor="cf-lg">Preferred language</label>
        <select id="cf-lg" name="language" className="v2_select" defaultValue="">
          <option value="" disabled>Select a language</option>
          <option>Sinhala</option>
          <option>English</option>
          <option>Tamil</option>
        </select>
      </div>

      <div className="v2_field">
        <label htmlFor="cf-ms">Your message (optional)</label>
        <textarea id="cf-ms" name="message" rows={4} className="v2_textarea" />
      </div>

      {failed && (
        <p className="v2_leadform_err" role="alert">
          Sorry, we couldn&apos;t send that just now. Please call{" "}
          <a href="tel:+94117555878">0117 555 878</a> or email{" "}
          <a href="mailto:info@simplebooks.com">info@simplebooks.com</a>{" "}
          and we&apos;ll pick it up.
        </p>
      )}

      <button type="submit" className="v2_btn v2_btn_primary" disabled={loading} aria-busy={loading}>
        {loading ? "Sending…" : "Set up a Free Consultation"}
      </button>
    </form>
  );
}
