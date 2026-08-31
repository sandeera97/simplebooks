export interface FaqBlock {
  type: "p" | "ul";
  text?: string;
  items?: string[];
}

export interface FaqItem {
  q: string;
  blocks: FaqBlock[];
}

export interface FaqGroup {
  name: string;
  items: FaqItem[];
}

/* Questions and answers exactly as published on simplebooks.com/srilanka/faq/ */
export const faqGroups: FaqGroup[] = [
  {
    name: "Company Registration",
    items: [
      {
        q: "What documents we need from you to register the company?",
        blocks: [
          { type: "p", text: "We will do all the processing work for you. To fill out the documents needed to register your business, we would need the following information from your end:" },
          {
            type: "ul",
            items: [
              "Name of the Company",
              "Number of Directors",
              "Distribution of Shares",
              "Full name of directors typed in English",
              "Permanent addresses of Directors and Share Holders",
              "National ID / Passport (scans) of Directors",
              "Business activities company will undertake",
              "Permanent address of the business.",
            ],
          },
        ],
      },
      {
        q: "What is the role of Company Secretary?",
        blocks: [
          { type: "p", text: "Secretaries do a lot of work; but to summarize, they make sure the companies they have helped register are working within the legal framework." },
          { type: "p", text: "Accordingly, their tasks would be:" },
          {
            type: "ul",
            items: [
              "To ensure that the operations of the company are conducted in accordance with its objects as contained in its memorandum of association.",
              "To ensure that affairs of the company are managed in accordance with its objects contained in the articles of association and the provisions of the Companies Law.",
              "To carry out all matters concerned with the allotment of shares, and issuance of share certificates including maintenance of a statutory Share Register and conducting the appropriate activities connected with share transfers.",
              "To notify ROC on changing address, directors and name of the company.",
              "To amend articles of Association (There are documentation fees that the government requires to pay).",
              "To pass special resolutions and ordinary resolutions as t when required.",
              "To submit annual returns to ROC.",
            ],
          },
        ],
      },
      {
        q: "Who do I contact if I have a personal complain or question?",
        blocks: [
          { type: "p", text: "For personal complains, questions, amendments or to correct any information given, you can contact our P.C.O (Privacy Compliance Officer) via this email – people@simplebooks.com or by sending a letter to our physical office." },
        ],
      },
      {
        q: "What are the minimum/maximum number of shareholders in a company?",
        blocks: [
          { type: "p", text: "We have a minimum of 1 shareholder and a maximum of 50 shareholders." },
        ],
      },
      {
        q: "What’s the difference between a Shareholder and a Director?",
        blocks: [
          { type: "p", text: "A Shareholder is an owner of the Company where as a Director is someone who manages the Company." },
        ],
      },
      {
        q: "Should i have an Office Address?",
        blocks: [
          { type: "p", text: "It isn’t necessary for a Company to have an office space/address when starting out, there wouldn’t be a ‘Gramasevaka Inspection’ unlike in Soletrader Registrations. You will be able to start with your Residence Address, if necessary, a change can even be made. It is also necessary that the address has a number." },
        ],
      },
      {
        q: "What are the local residency requirements for Directors, Company Secretaries and Legal Representatives?",
        blocks: [
          { type: "p", text: "It is mandatory for company secretaries and legal representatives to reside in Sri Lanka but not for Directors." },
        ],
      },
      {
        q: "What is the management structure put in place by the company?",
        blocks: [
          { type: "p", text: "The Directors exercise power to manage and supervise all the activities of the company which are regulated by the laws put in place by the company (Articles of Association) and the Companies Act." },
        ],
      },
      {
        q: "What is the minimum number of directors for a company?",
        blocks: [
          { type: "p", text: "A private company must have at least one director, whereas a public company must have a minimum of two directors." },
        ],
      },
      {
        q: "Are there annual reporting obligations?",
        blocks: [
          { type: "p", text: "Yes, At the Department of the Registrar of Companies, the Annual Returns should be filed. Meanwhile, for a branch office, the annual Financial Statements of the Parent Company must be filed at the Registrar of Companies." },
        ],
      },
      {
        q: "What’s the difference between a Shareholder and a Director?",
        blocks: [
          { type: "p", text: "A Shareholder is an owner of the Company where as a Director is someone who manages the Company." },
        ],
      },
      {
        q: "What are the Duties of a company director ?",
        blocks: [
          {
            type: "ul",
            items: [
              "Must act in good faith,",
              "Act in the best interests of the company",
              "Act in a manner that does not contravene the provisions of the Companies Act.",
              "Act in a manner that is not reckless or grossly negligent, and exercise the degree of skill and care that can reasonably be expected of a person of their knowledge and experience when discharging their duties.",
              "Directors must also comply with special duties and obligations in the event of an insolvency or serious loss of capital.",
              "In accordance with the fiduciary duty of acting in good faith and in the best interests of the company, directors must make full disclosure of any interests (as defined) in relation to a transaction entered into by the company.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bookkeeping",
    items: [
      {
        q: "How does the Bookkeeping process work?",
        blocks: [
          { type: "p", text: "Our process involves three major steps to help you achieve your financial goals." },
          {
            type: "ul",
            items: [
              "The first step is the pricing step. This has to do with knowing the package that suits you – from startups to enterprise.",
              "Secondly, as our customer, you send your invoices and every details about your finances to us via Google Drive or Dropbox. We have a structure set up for only you so you can be rest assured your details are secured with us",
              "Lastly, after working on your financial details, we send your account statements to you via the same accounting structure or dashboard to make it easy for you to access it.",
            ],
          },
        ],
      },
      {
        q: "Can I get access to my statements anytime?",
        blocks: [
          { type: "p", text: "As long as you have subscribed to a plan, you can have access to your income statements anytime you want to." },
        ],
      },
      {
        q: "Tell me about the Bookkeeping pricing plan?",
        blocks: [
          { type: "p", text: "We have divided the pricing into three plans to suit your standard." },
          {
            type: "ul",
            items: [
              "Startups: This plan is for emerging startups and it goes for Rs. 10,000 per month for ONLY 2 bank accounts which will be on your dashboard. You have access to income statement and a balance sheet for every month you subscribe to.",
              "Growing Company: This plan is for companies that are growing and developing. They are no longer termed startups because they have existed for a while and are making profits to stay afloat. The pricing plan for such companies is Rs. 25,000 per month which gives you access to 2 bank accounts on your dashboard. We will send your income statement and balance sheet to you for the month. You also have access to bank reconciliation and cash flow statements with this plan.",
              "Enterprise Plan: This plan is for bigger companies known as enterprises. If you subscribe to this plan, you have access to multiple accounts on your dashboard and access to custom statements from us. If you need to subscribe to this plan, you need to contact us directly to agree on a price.",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "General",
    items: [
      {
        q: "What is Simplebooks about?",
        blocks: [
          { type: "p", text: "Simplebooks is a company that is into Bookkeeping,Company Registration,Trademark Registration,Payroll Management and Etc. We are designed to help small business owners, freelancers and entrepreneurs reduce their workload by getting rid of the mundane tasks, and focusing on their craft, business & passion." },
        ],
      },
      {
        q: "Do you provide any form of discount and how can I access one?",
        blocks: [
          { type: "p", text: "Yes, we do through Karma discount program. We give out 10% discount on our prices for a Karma. Karma is a program for our existing and new customers. All you have to do is to snap a picture with your team or alone with a big smile on your face and a thumbs-up then post on your social media accounts. After these, contact us with proofs via karma@simplebooks.com and we will get back to you if you are successful." },
        ],
      },
      {
        q: "How do I know if my karma application is successful?",
        blocks: [
          { type: "p", text: "We will send you a confirmation mail and publish your posts on all our social media platform." },
        ],
      },
      {
        q: "Can I get many karma on my plan?",
        blocks: [
          { type: "p", text: "Karma is for only one plan and it is applicable for a lifetime. If you subscribe for more than a plan, you can actually get karma for each plan you have subscribed to, just go through the process and send us a mail." },
        ],
      },
      {
        q: "How does Simplebooks run?",
        blocks: [
          { type: "p", text: "We are run by well-qualified staffs that are good at what they do. This means you will always get a reply whenever you contact us. Many people believe we should be run by a software nut we believe when we are run by people, we tend to be safer and closer to our customers." },
        ],
      },
      {
        q: "How do I contact you?",
        blocks: [
          { type: "p", text: "Our physical office is at 29/2, Visaka Road ,Colombo 4, Sri Lanka or you can call us on 011-4060909 or 011 4365409.You can also contact us Simplebooks." },
        ],
      },
      {
        q: "Is there any disclosure on your privacy policy?",
        blocks: [
          { type: "p", text: "Yes, there is. We abide by the law which allows us to disclose your personal details if we are asked to do so by a law enforcement agency or if you go against our written terms and conditions of service." },
        ],
      },
      {
        q: "How am I sure my details are safe with you?",
        blocks: [
          { type: "p", text: "After employing our accountants, they agree to be discrete with customer’s details – this is what we call “non-disclosure agreement.’ This is signed by us and our employees. We also have a privacy policy which can be accessed on our website." },
        ],
      },
      {
        q: "What are the other services you provide and for how much?",
        blocks: [
          { type: "p", text: "Our services are not limited to bookkeeping alone, we offer the following services at a fixed price:" },
          {
            type: "ul",
            items: [
              "We help to register your business starting from Rs. 16,100 LKR. We provide a quick and simple way to register your company.",
              "You can contact us for company secretary at a price of Rs. 12,000 LKR per year.",
              "For Value Added Tax (VAT) and Nation Building Tax (NBT) – Rs. 3,000 onwards",
              "For payroll management , Our Packages start from Rs. 3,000 Onwards",
              "For registering import, we charge Rs. 12,500.",
              "We provide trademark registration for a price of Rs. 25,000.",
            ],
          },
        ],
      },
    ],
  },
];
