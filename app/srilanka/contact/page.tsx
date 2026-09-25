import type { Metadata } from "next";
import "@/app/home-v2.css";
import PageShell from "@/components/v2/PageShell";
import { PageHero, CtaBand } from "@/components/v2/blocks";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Sri Lanka",
  description:
    "Drop us a message and we'll set up a free consultation. Simplebooks helps Sri Lankan businesses with registration, bookkeeping, payroll, tax and legal services.",
  alternates: { canonical: "https://simplebooks.com/srilanka/contact" },
};

/* Office details are the same ones published in the footer. */
const OFFICES = [
  {
    flag: "🇱🇰",
    city: "Colombo",
    lines: ["Simplebooks (Pvt) Ltd", "Millennium Tower, 2nd Floor,", "345 Galle Rd, Colombo 00300,", "Sri Lanka"],
    phone: "0117 555 878",
    tel: "tel:+94117555878",
  },
  {
    flag: "🇧🇩",
    city: "Dhaka",
    lines: ["REGUS – Crystal Palace, House 22,", "Gulshan Ave, Gulshan-1,", "Dhaka 1212, Bangladesh"],
    phone: "+880 1312 329255",
    tel: "tel:+8801312329255",
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
              <p className="v2_contact_form_h">Send us your details</p>
              <ContactForm />
            </div>

            <aside className="v2_contact_side v2_reveal">
              {OFFICES.map((o) => (
                <div className="v2_office_card" key={o.city}>
                  <p className="v2_office_city">
                    <span aria-hidden="true">{o.flag}</span> {o.city}
                  </p>
                  <p className="v2_office_lines">
                    {o.lines.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </p>
                  <a className="v2_office_tel" href={o.tel}>
                    {o.phone}
                  </a>
                </div>
              ))}

              <div className="v2_office_card v2_office_hours">
                <p className="v2_office_city">Office hours</p>
                <p className="v2_office_lines">
                  <span>Monday – Friday · 9.00am – 5.30pm</span>
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
