import type { PipedriveAccount } from "./pipedrive";
import type { AttributionParam } from "./attribution";

/**
 * Where each answer lands in each Pipedrive account.
 *
 * Both accounts were already set up for the live Gravity Forms integration, so
 * these are THEIR existing fields — matched by name against what our forms ask
 * — rather than new ones. That matters: their reports, filters and automations
 * are already keyed off these ids, and a parallel set of fields would quietly
 * leave all of that reading zero.
 *
 * Custom field ids are per-account hashes, which is why there are two maps and
 * no shared one. They are not secrets, so they belong in the repo where they
 * can be reviewed; the API tokens stay in the environment.
 *
 * Read with scripts/pipedrive-fields.mjs, which prints every field in both
 * accounts next to the names below.
 */

interface OptionSet {
  key: string;
  /** Pipedrive stores enum and set answers as numeric option ids, not labels. */
  options: Record<string, number>;
}

interface AccountFields {
  /** Deals open in the first stage of the pipeline the team actually works. */
  stageId: number;
  /** Ad parameter -> deal field. Only what the account has a field for. */
  utm: Partial<Record<AttributionParam, string>>;
  /** Facebook's campaign/ad-set/ad naming trio, where the account has it. */
  adNames?: { campaign?: string; adset?: string; ad?: string };
  landingPage?: string;
  name?: string;
  email?: string;
  /** Free-text copy of the service chosen. */
  serviceText?: string;
  /** The same service as a pick-list, for their existing filters. */
  servicesSet?: OptionSet;
  /** A plain varchar on one account, a pick-list on the other. */
  language?: { key: string; options?: Record<string, number> };
  message?: string;
  interests?: OptionSet;
  /** The one qualifying question a page asks, by route. */
  questionByRoute?: Record<string, string>;
  /**
   * A page with a SECOND dropdown puts the answer in `service`. Listed here so
   * it is filed as an answer instead of being mistaken for a service name.
   */
  serviceAnswerByRoute?: Record<string, string>;
}

export const ACCOUNT_FIELDS: Record<PipedriveAccount, AccountFields> = {
  /* Simplebooks Limited — pipeline "Company Registration". */
  business: {
    stageId: 3, // Need to Call
    utm: {
      utm_source: "58dd78721df4fcbf4951a8d53f96d2d6c98d9e9f",
      utm_medium: "f5d47639dd1e22ac1a79cd26002e9757e97df6a4",
      utm_campaign: "21bcb23c37dc7a6a5669b96ae6f83938fa83d4e1",
      utm_content: "ec5131f78b3966834ca01b058cc63bcb6f0122c5",
      /* No fbclid, gclid or landing-page field: this account is at Pipedrive's
         30-custom-field limit. All three are in the deal note instead, and they
         move into fields the moment three slots are freed. */
    },
    adNames: {
      campaign: "f394e8c86c677d7b32e63268e5f3bdb694cad71e", // UTM_Campaign_Name
      adset: "718ff47c8f6a7a0e54fc40c45557be39e587d3cd", // UTM_Adset_Name
      ad: "ddbd7658467820755e37e6f0863f6158a8f35259", // UTM_AD_Name
    },
    name: "b8873de35cab90c4f3017eb66c0189d5171f251e",
    email: "4ae83f612f8a93cdb0c49c63d332bcf6dad86fac",
    /* Their "Phone" deal field is a number field and cannot hold "+94 77...",
       so the phone goes on the Person record and into the note. */
    serviceText: "d5824ba98b9b579bfec39b4b33ed03a7bce28244", // Service Required
    servicesSet: {
      key: "6503becc540adbbc8b40ba36bbd7c4559d738684", // Services Required
      options: {
        "Business registration": 4,
        Bookkeeping: 5,
        Tax: 6,
        Payroll: 7,
        Trademark: 8,
        "Company secretary": 28,
        Legal: 29,
        General: 30,
      },
    },
    language: {
      key: "82f33f6278b79fc776210989fe0357c488213af2",
      options: { Sinhala: 108, English: 109, Tamil: 110 },
    },
    questionByRoute: {
      "/business-registration": "53a646ed9d599c8c7beb4afde8f90fb5adfca94b",
      "/srilanka/dashboard/payroll-management-system": "8b84c1b47f1a364ff966877464f44b9d61a4c14e",
    },
    serviceAnswerByRoute: {
      "/srilanka/dashboard/payroll-management-system": "5469355b9c2f19c657048098f102db2648ed979f",
    },
  },

  /* Simplebooks Pvt Ltd — pipeline "Pipeline". */
  tax: {
    stageId: 1, // Need to Call
    utm: {
      utm_source: "761403ebcb8552544eaf0a9da9d181f60be58c6a",
      utm_medium: "b1b9a4c11e24b127dd080dffe85cd30ea5fc04a1",
      utm_campaign: "0df8a9cbce522fba0f96323e520747f460c8170d",
      utm_content: "9457c77c2325fb22cf09862170d6706adb5c07d6",
      fbclid: "641ceb07c03c1a06ca1e0eaeb5d5cdac251624c0",
      gclid: "cf718b29ba7db8515d297b32269311e02f30abf1",
    },
    landingPage: "73ec3dd9f5a2fc77aa88405db800a8a3e1be86e6",
    serviceText: "63a313c9a07ff4a07d5b94d401855fbf7e14842b", // Service Required
    language: { key: "3bd42f3164a70faa50c5333ca1126c76f612e894" },
    message: "8d6923f9788774b596072f3b5db2fe470fe0ddac", // Message From User
    interests: {
      key: "0e5ced4de9b4602878412ff9110280fb23fc1895", // Areas of Interest
      options: {
        "Individual Tax": 46,
        "Corporate Tax": 47,
        "VAT Compliance": 48,
        "Foreign Income": 49,
      },
    },
    questionByRoute: {
      "/tax/vat": "ad2339d1323359ad55ca4bae4c123b74264e9513",
      "/tax/corporate-tax": "45820312fdbbc43a8c859dd9fa1d7737a2ad9d41",
      "/tax/foreign-income": "59e489fa92929961b550da4f0cfc8cc40fe23a88",
      "/tax/sscl": "b0847e1e60fa20187b211f4e83eaf0bac9b81b66",
      "/tax/capital-gains": "1d76737de1f270b00b5a72864b4b5d46b1445165",
      "/tax/tin-registration": "f7e73715cecd1565e1b9668a2a905f81413f5ddb",
      "/tax/apit": "a63d9d56880eb7a359140fe17e0917f52494b5cf",
    },
  },
};
