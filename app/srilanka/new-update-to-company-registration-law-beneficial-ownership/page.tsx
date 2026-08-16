import type { Metadata } from "next";
import BlogPostLayout from "@/components/blog/BlogPostLayout";

const canonical =
  "https://simplebooks.com/srilanka/new-update-to-company-registration-law-beneficial-ownership";
const title =
  "New update to company registration law: Beneficial Ownership - Sri Lanka";
const description =
  "From 30th March 2026, all newly incorporated companies in Sri Lanka must disclose their beneficial owners to the Registrar of Companies. The rule comes under the Companies (Amendment) Act No. 12 of 2025 and the Companies (Beneficial Ownership) Regulation No. 1 of 2026. After completing eROC registration, Companies must submit beneficial ownership details through a […]";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  authors: [{ name: "Team simplebooks" }],
  openGraph: {
    locale: "en_GB",
    type: "article",
    title,
    description,
    url: canonical,
    siteName: "Sri Lanka",
    publishedTime: "2026-04-20T17:12:29+00:00",
    modifiedTime: "2026-04-20T17:15:31+00:00",
    authors: ["Team simplebooks"],
    images: [
      {
        url: "https://simplebooks.com/srilanka/wp-content/uploads/sites/6/2026/04/ChatGPT-Image-Apr-20-2026-10_41_07-PM.png",
        width: 1536,
        height: 1024,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "https://simplebooks.com/srilanka/wp-content/uploads/sites/6/2026/04/ChatGPT-Image-Apr-20-2026-10_41_07-PM.png",
    ],
  },
  other: {
    "twitter:label1": "Written by",
    "twitter:data1": "Team simplebooks",
    "twitter:label2": "Estimated reading time",
    "twitter:data2": "6 minutes",
    "article:publisher": "https://www.facebook.com/teamsimplebooks/",
    "article:section": "Business Registration",
  },
};

const portal = (
  <a href="https://bo.drc.gov.lk/" target="_blank" rel="noopener noreferrer">
    bo.drc.gov.lk
  </a>
);

export default function BeneficialOwnershipPost() {
  return (
    <BlogPostLayout
      title="New update to company registration law: Beneficial Ownership"
      author="Team simplebooks"
      authorUrl="https://simplebooks.com/srilanka/author/simplebooks/"
      date="Apr 20, 2026"
      tag="Business Registration"
      canonical={canonical}
      authorInitials="sb"
    >
            <p className="blog-intro">
              From 30th March 2026, all newly incorporated companies in Sri Lanka must
              disclose their beneficial owners to the Registrar of Companies.
            </p>
            <p>
              The rule comes under the Companies (Amendment) Act No. 12 of 2025 and
              the Companies (Beneficial Ownership) Regulation No. 1 of 2026. After
              completing eROC registration, Companies must submit beneficial ownership
              details through a separate government portal. Failure to do so means the
              incorporation will not be treated as complete.
            </p>

            <h2 id="what-has-changed">What Has Changed: The New Requirement at a Glance</h2>
            <p>
              Previously, a company completing its incorporation through the eROC
              system needed to submit Forms 1, 18, and 19 along with its Articles of
              Association. That process remains unchanged. What is new is what happens
              immediately after: once incorporation fees are paid and the eROC process
              is complete, all companies must now log into a separate, dedicated
              Beneficial Ownership portal at {portal} using their eROC credentials and
              submit two additional forms: BO 5 and BO 1.
            </p>

            <h2 id="two-new-forms">The Two New Forms You Must File</h2>
            <p>
              <strong>Form BO5 — Details of the Authorised Person (AP).</strong> This is
              the first form you should prepare because it identifies the natural person
              who will be responsible for maintaining the company’s beneficial ownership
              registration and ongoing compliance. They should be a resident in Sri
              Lanka. Once you obtain the signature of the AP, you can prepare the next
              form: Form BO1
            </p>
            <p>
              <strong>Form BO1 — Declaration of Beneficial Ownership.</strong> This form
              captures the full details of every individual who qualifies as a beneficial
              owner of the newly incorporated company.
            </p>
            <p>
              Both forms must be submitted through the official BO Portal at {portal} before
              the incorporation process can be treated as finalised.
            </p>
            <p>
              As per the new regulation, failure to submit these forms will result in the
              incorporation being resubmitted. In practical terms, this means a company
              that completes its eROC registration but skips the BO portal step will not
              be treated as fully incorporated. Directors, company secretaries, and business
              owners should treat the BO portal submission as part of the standard
              incorporation checklist to get their business up and running.
            </p>

            <h2 id="information-disclosed">What Information Must Be Disclosed?</h2>
            <p>
              The disclosure requirements are detailed and specific. When filing Form BO1,
              companies must provide the full name, date and place of birth, nationality,
              countries of residence, last known address, all other relevant addresses, tax
              identification numbers, other identification numbers, contact details, for
              each beneficial owner and the extent of their beneficial ownership.
            </p>
            <p>
              Form BO5 similarly requires detailed information about the Authorised Person:
              the individual resident in Sri Lanka who will be the registered point of
              contact for the company’s BO register, responsible for maintaining its
              accuracy and keeping it up to date. This person must be a natural person
              physically resident in Sri Lanka.
            </p>

            <h2 id="two-tier-public-access">Two-Tier Public Access</h2>
            <p>
              The information will be stored in a two-tier public access system, with some
              information only being available to the public and more sensitive information
              restricted only to authorised authorities. Not all of this information becomes
              fully public. The law creates a two-tier system:
            </p>
            <p>
              <strong>Publicly accessible (on request to the Registrar):</strong> Full name,
              nationality/citizenship, countries of residence, business address, and the
              nature and extent of beneficial ownership.
            </p>
            <p>
              <strong>Restricted to authorised authorities only:</strong> Full identifying
              details including identification numbers, tax numbers, date of birth, and
              residential address. These are available to the Financial Intelligence Unit,
              the Attorney General, Inland Revenue, Customs, and relevant regulatory bodies.
            </p>
            <p>
              <strong>Full information via RTI:</strong> Members of the public may apply for
              more complete information under the Right to Information Act.
            </p>

            <h2 id="penalties">Penalties for Non-Compliance</h2>
            <p>
              Failure to carry out these new obligations carry serious consequences.
              Non-compliance is not treated as a minor administrative oversight — it is a
              criminal offence that can result in both fines and imprisonment for directors
              and officers personally.
            </p>
            <p>
              Critically, these penalties apply personally to directors and officers — not
              just to the company as a legal entity. Every individual who held a directorial
              or officer position at the time an offence was committed may be held liable.
              This is a deliberate design: it ensures that personal accountability sits at
              the heart of the compliance framework.
            </p>

            <h2 id="existing-companies">Existing Companies: Your Deadline Is Coming</h2>
            <p>
              The 30th March 2026 mandatory submission requirement applies immediately to
              all new incorporations. However, companies that were already registered before
              the law came into operation are subject to a separate transition deadline.
              Existing companies must submit their beneficial ownership information within
              six months of the law’s operative date. This means that virtually every company
              registered in Sri Lanka will need to complete BO filings well before the end
              of 2026.
            </p>
            <p>
              Every depositary of a licensed stock exchange must additionally notify the
              Registrar of all shareholders holding 10% or more within 30 days of the
              operative date.
            </p>
            <p><strong>Do not wait.</strong> Begin identifying your beneficial owners and gathering the required documentation now.</p>

            <h2 id="how-to-comply">How to Comply: A Step-by-Step Guide for New Companies</h2>
            <div className="blog-steps">
              <section><b>1</b><div><h3>Complete Standard eROC Registration</h3><p>Proceed through the existing eROC process as normal: reserve your company name, submit Forms 1, 18, and 19, upload your Articles of Association, and pay the incorporation fees.</p></div></section>
              <section><b>2</b><div><h3>Identify Your Beneficial Owners</h3><p>Before logging into the BO portal, identify every natural person who holds 10% or more of shares or voting rights, or who exercises effective control. Gather their full personal details, identification numbers, and tax identification numbers.</p></div></section>
              <section><b>3</b><div><h3>Appoint an Authorised Person</h3><p>Appoint a natural person who is resident in Sri Lanka to serve as the Authorised Person who will maintain the beneficial ownership register. This person’s details will be submitted on Form BO5.</p></div></section>
              <section><b>4</b><div><h3>Log Into the BO Portal</h3><p>Visit {portal} and log in using your existing eROC credentials, selecting “Company User” as the login type.</p></div></section>
              <section><b>5</b><div><h3>Submit Form BO1 and Form BO5</h3><p>Complete and submit both forms through the portal. First you have to complete Form BO5, which covers the Authorised Person, and then complete the Form BO1, which covers the beneficial owner details. Both must be submitted for the process to be complete.</p></div></section>
              <section><b>6</b><div><h3>Maintain Your Internal Register</h3><p>Establish and maintain an internal beneficial ownership register at your company’s registered office. This register must be kept accurate, updated within 20 working days of any change, and retained for at least 10 years (5 years after dissolution).</p></div></section>
            </div>

            <h2 id="bigger-picture">The Bigger Picture: Sri Lanka’s Place in the Global Transparency Movement</h2>
            <p>
              Sri Lanka is not alone in making this change. Over 100 countries now maintain
              some form of beneficial ownership register, and the global trend is firmly
              toward greater transparency and public accessibility. The United Kingdom, the
              European Union member states, and most OECD economies have had mandatory
              registers for years.
            </p>
            <p>
              Sri Lanka’s adoption of this framework places it in alignment with
              international best practice and opens the door to improved standing with
              international investors and financial institutions who increasingly conduct
              due diligence on a jurisdiction’s governance standards before committing capital.
            </p>

    </BlogPostLayout>
  );
}
