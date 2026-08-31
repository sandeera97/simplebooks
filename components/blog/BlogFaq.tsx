"use client";

import { useState } from "react";

export type BlogFaqItem = {
  question: string;
  answer: string;
};

type BlogFaqProps = {
  items: BlogFaqItem[];
};

export default function BlogFaq({ items }: BlogFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="blog-faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `blog-faq-answer-${index}`;

        return (
          <section className={isOpen ? "is-open" : ""} key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="blog-faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={answerId} className="blog-faq-answer" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
