const OFFERS = [
  {
    title: "Field operations & inspection platforms",
    description:
      "Scheduling, route optimisation, mobile apps for crews in the field, and a dashboard that shows head office what\u2019s happening right now.",
  },
  {
    title: "Inventory, accounting & dealership systems",
    description:
      "Double-entry ledgers, multi-warehouse stock tracking, installment plans and profit analytics \u2014 including desktop software that keeps working when the internet doesn\u2019t.",
  },
  {
    title: "Multi-tenant platforms with payments",
    description:
      "Partner subdomains, Stripe billing and subscriptions, and separate portals for admins, partners and customers on one codebase.",
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="bg-primary-50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        {/* ── Section heading with amber accent ── */}
        <div className="text-center">
          <h2 className="inline-block font-serif text-3xl sm:text-4xl font-semibold text-ink">
            What I build
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-amber" />
        </div>

        {/* ── Offer blocks ── */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <div
              key={offer.title}
              className="rounded-lg border border-border bg-paper p-8"
            >
              <h3 className="font-serif text-xl font-semibold leading-snug text-ink">
                {offer.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/80">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
