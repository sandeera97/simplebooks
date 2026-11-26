import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, CtaBand } from "@/components/v2/blocks";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = pageMetadata("/srilanka/contact");

/* Office details are the same ones published in the footer. The email and
   WhatsApp number are the ones the site already gives elsewhere (the footer's
   WhatsApp icon, the forms' error message); they used to be missing here, on
   the one page whose job is getting in touch. */
const OFFICES = [
  {
    flag: "🇱🇰",
    city: "Colombo",
    lines: ["Simplebooks (Pvt) Ltd", "Millennium Tower, 2nd Floor,", "345 Galle Rd, Colombo 00300,", "Sri Lanka"],
    ways: [
      { label: "0117 555 878", action: "Call", href: "tel:+94117555878" },
      { label: "info@simplebooks.com", action: "Email", href: "mailto:info@simplebooks.com" },
      { label: "WhatsApp", action: "Message", href: "https://wa.me/94117555878" },
    ],
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Drop us a message"
        lead="Tell us what you need and we'll set up a free consultation. Most enquiries get a reply the same working day."
      />

      <section className="v2_sec v2_sec_pad v2_sec_pad_tight">
        <div className="v2_wrap">
          <div className="v2_contact">
            <div className="v2_contact_form v2_reveal">
              <h2 className="v2_contact_form_h" id="contact-form-h">Send us your details</h2>
              <ContactForm />
            </div>

            <aside className="v2_contact_side v2_reveal" aria-label="Contact details">
              {OFFICES.map((o) => (
                <div className="v2_office_card" key={o.city}>
                  <h2 className="v2_office_city">
                    <span aria-hidden="true">{o.flag}</span> {o.city}
                  </h2>
                  <p className="v2_office_lines">
                    {o.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </p>
                  <div className="v2_office_ways">
                    {o.ways.map((w) => (
                      <a key={w.href} href={w.href}>
                        {w.label} <span>{w.action}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="v2_office_card v2_office_hours">
                <h2 className="v2_office_city">Office hours</h2>
                <p className="v2_office_lines">
                  <span>Monday–Friday · 9.00am–5.30pm</span>
                  <span>Saturday, Sunday &amp; public holidays · closed</span>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer to start straight away?"
        lead="Create an account and you can register a company, file a return or run payroll without waiting for a call back."
        primary={{ label: "Get started free", href: "https://dashboard.simplebooks.com" }}
        secondary={{ label: "See what's included", href: "/srilanka/dashboard/accounting-tool" }}
      />
    </PageShell>
  );
}
