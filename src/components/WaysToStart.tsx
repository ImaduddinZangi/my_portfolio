import { BOOKING_URL } from "@/lib/links";

const TIERS = [
  {
    name: "Architecture & scoping sprint",
    duration: "One week, fixed fee",
    description:
      "I map your operation, design the data model, and hand you an architecture document and a milestone plan with costs. Yours to keep, whether or not I build it.",
    price: "$750",
    featured: true,
  },
  {
    name: "Build",
    duration: "Four to eight weeks, fixed scope",
    description:
      "Weekly demos, agreed milestones, handover documentation at the end.",
    price: "From $8,000",
    featured: false,
  },
  {
    name: "Ongoing engineering",
    duration: "Monthly retainer",
    description:
      "Capped hours, priority response, for systems already running.",
    price: "From $2,000/mo",
    featured: false,
  },
];

export default function WaysToStart() {
  return (
    <section id="ways-to-start" className="bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        {/* ── Section heading ── */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
            Ways to start
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base text-ink/60">
            &ldquo;Hire an unknown developer for three months&rdquo; is a
            terrifying decision. &ldquo;Pay for one week of thinking and keep
            the document&rdquo; is easy.
          </p>
        </div>

        {/* ── Tier cards ── */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-lg border bg-paper p-8 ${
                tier.featured
                  ? "border-primary-600 ring-1 ring-primary-600/20"
                  : "border-border"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-serif text-xl font-semibold text-ink">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-600">
                {tier.duration}
              </p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/80">
                {tier.description}
              </p>
              <p className="mt-6 font-serif text-2xl font-semibold text-ink">
                {tier.price}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full text-center"
              >
                Book a call
              </a>
            </div>
          ))}
        </div>

        {/* ── Pricing note ── */}
        <p className="mt-10 text-center text-sm text-ink/50">
          Fixed-price engagements. The scoping sprint fee is credited against
          the build if you go ahead.
        </p>
      </div>
    </section>
  );
}
