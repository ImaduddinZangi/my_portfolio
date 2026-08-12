"use client";

const FAQS = [
  {
    question: "Who owns the code?",
    answer:
      "You do. Repos and cloud accounts in your name from day one.",
  },
  {
    question: "What if you become unavailable?",
    answer:
      "Handover documentation with every project, and your infrastructure is yours \u2014 no lock-in.",
  },
  {
    question: "How do we work across time zones?",
    answer:
      "Pakistan time overlaps the whole UK and European working day and Gulf mornings. Async by default, one fixed call each week.",
  },
  {
    question: "Can we start small?",
    answer: "Yes \u2014 the one-week scoping sprint.",
  },
  {
    question: "Do you work alongside an existing team?",
    answer: "Yes, including taking over legacy codebases.",
  },
  {
    question: "What don\u2019t you do?",
    answer:
      "Native iOS/Android in Swift or Kotlin, machine-learning research, and design-only work. Naming what I decline makes everything else more credible.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        {/* ── Section heading ── */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
            Frequently asked questions
          </h2>
        </div>

        {/* ── Accordion ── */}
        <div className="mt-14 divide-y divide-border">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between text-left">
                <span className="font-serif text-lg font-semibold text-ink pr-4">
                  {faq.question}
                </span>
                <span className="faq-icon shrink-0 text-2xl leading-none text-primary-600">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
