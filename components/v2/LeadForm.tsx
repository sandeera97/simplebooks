"use client";

import { useState, FormEvent } from "react";
import { submitLead, LeadNotConfiguredError } from "@/lib/leads";

/**
 * The consultation form that sits at the foot of the live pages.
 *
 * The live site does not use one form — it uses several, and they differ in
 * real ways: the WordPress service pages split the name and ask for marketing
 * consent, while the newer React tax pages take a single name, ask one
 * qualifying question and offer a message box. Rather than flatten that, this
 * component covers the variants and each page picks one in lib/leadForms.ts.
 *
 * Every submission goes through lib/leads.ts, so there is exactly one place to
 * wire up whichever provider we land on.
 */

export interface LeadQuestion {
  label: string;
  /** First option on the live select — a prompt, not a value. */
  placeholder: string;
  options: string[];
  required?: boolean;
}

export interface LeadCheckboxGroup {
  label: string;
  options: string[];
  required?: boolean;
}

export interface LeadFormConfig {
  heading?: string;
  lead?: string;
  /** Live WP forms split first/last; the React tax pages take one "Name". */
  nameMode?: "split" | "single";
  /** The one qualifying question a page asks, e.g. "Are you VAT registered?". */
  question?: LeadQuestion;
  /** The webinar page's "Areas of Interest". */
  checkboxGroup?: LeadCheckboxGroup;
  services?: LeadQuestion;
  showLanguage?: boolean;
  languageRequired?: boolean;
  languagePlaceholder?: string;
  languageOptions?: string[];
  showMessage?: boolean;
  showConsent?: boolean;
  consentText?: string;
  requiredNote?: boolean;
  note?: string;
  buttonLabel?: string;
  /** Tints the section, for pages whose preceding section is already cream. */
  band?: boolean;
}

export interface LeadFormProps extends LeadFormConfig {
  /** Page this sits on, sent with the lead, e.g. "/srilanka/services/auditing". */
  source: string;
}

const DIAL_CODES = [
  { flag: "🇱🇰", code: "+94" },
  { flag: "🇧🇩", code: "+880" },
  { flag: "🇮🇳", code: "+91" },
];

export default function LeadForm({
  source,
  heading = "Get started",
  lead,
  nameMode = "split",
  question,
  checkboxGroup,
  services,
  showLanguage = true,
  languageRequired = false,
  languagePlaceholder = "Preferred Language",
  languageOptions = ["Sinhala", "English", "Tamil"],
  showMessage = false,
  showConsent = false,
  consentText = "I agree to receive your marketing and promotional emails",
  requiredNote = true,
  note,
  buttonLabel = "Set up a Free Consultation",
  band = false,
}: LeadFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  /* Ids derive from the route so two forms on one page can never collide. */
  const uid = source.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "lead";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFailed(false);

    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();

    try {
      await submitLead({
        firstName: nameMode === "split" ? get("firstName") : get("name"),
        lastName: nameMode === "split" ? get("lastName") : "",
        email: get("email"),
        phoneCountry: get("phoneCountry"),
        phone: get("phone"),
        service: services ? get("service") : undefined,
        question: question ? { label: question.label, answer: get("question") } : undefined,
        interests: checkboxGroup ? d.getAll("interests").map(String) : undefined,
        language: showLanguage ? get("language") : undefined,
        message: showMessage ? get("message") : undefined,
        marketingConsent: showConsent ? d.get("consent") === "on" : undefined,
        source,
      });
      setSent(true);
    } catch (err) {
      /* Never claim an enquiry was received when it was not — the visitor
         would stop trying. Point them at the phone and email instead. */
      if (!(err instanceof LeadNotConfiguredError)) console.error(err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  const Select = ({
    id, name, q, required,
  }: { id: string; name: string; q: LeadQuestion; required: boolean }) => (
    <div className="v2_field">
      <label htmlFor={id}>{q.label} {required && <span>*</span>}</label>
      <select id={id} name={name} className="v2_select" required={required} defaultValue="">
        <option value="" disabled>{q.placeholder}</option>
        {q.options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );

  return (
    <section className={band ? "v2_band" : "v2_sec v2_sec_pad"} id="consultation">
      <div className="v2_wrap">
        <div className="v2_leadform v2_reveal">
          {heading && (
            <h2 className="v2_leadform_h">{heading}<span className="v2_dot">.</span></h2>
          )}
          {lead && <p className="v2_leadform_lead">{lead}</p>}

          {sent ? (
            <div className="v2_leadform_done">
              <p className="v2_leadform_done_icon" aria-hidden="true">🎉</p>
              <h3>Thank you</h3>
              <p>We&rsquo;ve received your enquiry and will reply within one working day.</p>
            </div>
          ) : (
            <form className="v2_leadform_form" onSubmit={onSubmit}>
              {requiredNote && (
                <p className="v2_form_req"><span>*</span> indicates required fields</p>
              )}

              {nameMode === "split" ? (
                <div className="v2_grid2">
                  <div className="v2_field">
                    <label htmlFor={`${uid}-fn`}>First name <span>*</span></label>
                    <input id={`${uid}-fn`} name="firstName" className="v2_input" required autoComplete="given-name" />
                  </div>
                  <div className="v2_field">
                    <label htmlFor={`${uid}-ln`}>Last name <span>*</span></label>
                    <input id={`${uid}-ln`} name="lastName" className="v2_input" required autoComplete="family-name" />
                  </div>
                </div>
              ) : (
                <div className="v2_field">
                  <label htmlFor={`${uid}-nm`}>Name <span>*</span></label>
                  <input id={`${uid}-nm`} name="name" className="v2_input" required autoComplete="name" />
                </div>
              )}

              <div className="v2_field">
                <label htmlFor={`${uid}-em`}>Email <span>*</span></label>
                <input id={`${uid}-em`} name="email" type="email" className="v2_input" required autoComplete="email" />
              </div>

              <div className="v2_field">
                <label htmlFor={`${uid}-ph`}>Phone number <span>*</span></label>
                <div className="v2_phone">
                  <select name="phoneCountry" className="v2_select" aria-label="Country dialling code">
                    {DIAL_CODES.map((c) => <option key={c.code}>{`${c.flag} ${c.code}`}</option>)}
                  </select>
                  <input id={`${uid}-ph`} name="phone" type="tel" className="v2_input" required autoComplete="tel" />
                </div>
              </div>

              {services && <Select id={`${uid}-sv`} name="service" q={services} required={!!services.required} />}
              {question && <Select id={`${uid}-qq`} name="question" q={question} required={question.required !== false} />}

              {checkboxGroup && (
                <fieldset className="v2_field v2_checkgroup">
                  <legend>{checkboxGroup.label} {checkboxGroup.required && <span>*</span>}</legend>
                  <div className="v2_checkgroup_opts">
                    {checkboxGroup.options.map((o) => (
                      <label key={o}>
                        <input type="checkbox" name="interests" value={o} />
                        <span>{o}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              )}

              {showLanguage && (
                <Select
                  id={`${uid}-lg`}
                  name="language"
                  q={{ label: "Preferred Language", placeholder: languagePlaceholder, options: languageOptions }}
                  required={languageRequired}
                />
              )}

              {showMessage && (
                <div className="v2_field">
                  <label htmlFor={`${uid}-ms`}>Your message (Optional)</label>
                  <textarea id={`${uid}-ms`} name="message" className="v2_textarea" />
                </div>
              )}

              {showConsent && (
                <label className="v2_consent">
                  <input type="checkbox" name="consent" />
                  <span>{consentText}</span>
                </label>
              )}

              {failed && (
                <p className="v2_leadform_err" role="alert">
                  Sorry — we couldn&rsquo;t send that just now. Please call{" "}
                  <a href="tel:+94117555878">0117 555 878</a> or email{" "}
                  <a href="mailto:info@simplebooks.com">info@simplebooks.com</a>{" "}
                  and we&rsquo;ll pick it up.
                </p>
              )}

              <button type="submit" className="v2_btn v2_btn_primary" disabled={loading}>
                {loading ? "Sending…" : buttonLabel}
              </button>
              {note && <p className="v2_form_note">{note}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
