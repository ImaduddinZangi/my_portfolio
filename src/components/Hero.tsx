import { BOOKING_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-primary-50 text-paper">
      <div className="mx-auto max-w-4xl px-6 pt-36 pb-28 sm:pt-44 sm:pb-36 md:pt-52 md:pb-44 text-center">
        {/* ── Headline ── */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-tight tracking-tight text-paper">
          I build the software that runs inspections, inventory and logistics
          operations.
        </h1>

        {/* ── Thin decorative rule ── */}
        <div className="mx-auto mt-6 h-px w-24 bg-primary-300" />

        {/* ── Subhead ── */}
        <p className="text-primary-700 mx-auto mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-paper/75">
          Five years, twelve production systems, eight countries. Usually the
          only engineer on the project.
        </p>

        {/* ── CTA ── */}
        <div className="mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Book a 15-minute call
          </a>
        </div>

        {/* ── Risk-reduction line ── */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-paper/60">
          No pitch deck. Fifteen minutes on your operation, and you&rsquo;ll
          leave with an honest answer on whether software is even the right fix.
        </p>
      </div>
    </section>
  );
}
