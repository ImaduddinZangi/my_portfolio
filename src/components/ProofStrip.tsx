const CLIENTS = [
  { name: "Optima.AI", country: "UK" },
  { name: "CDI Tech", country: "USA" },
  { name: "CYORN", country: "Australia" },
  { name: "Usee-360", country: "UAE" },
  { name: "Inspection Mentoring", country: "USA" },
  { name: "MatMate", country: "Saudi Arabia" },
  { name: "Mills ERP", country: "Pakistan" },
];

function ClientChip({ name, country }: { name: string; country: string }) {
  return (
    <span className="inline-flex items-center gap-3 mx-6 shrink-0">
      {/* Decorative dot */}
      <span
        className="h-1.5 w-1.5 rounded-full bg-primary-300 shrink-0"
        aria-hidden="true"
      />
      <span className="font-serif text-xl font-semibold text-ink tracking-tight">
        {name}
      </span>
      <span className="text-xs font-medium text-ink/40 uppercase tracking-widest">
        {country}
      </span>
    </span>
  );
}

export default function ProofStrip() {
  // Duplicate the array so the seam is invisible during the loop
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="proof"
      className="relative bg-primary-50 border-y border-border overflow-hidden py-8"
    >
      {/* ── Fade edges ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, var(--primary-50), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to left, var(--primary-50), transparent)",
        }}
      />

      {/* ── Scrolling track ── */}
      <div className="marquee-track">
        {doubled.map((client, i) => (
          <ClientChip key={i} name={client.name} country={client.country} />
        ))}
      </div>

      {/* ── Caption ── */}
      <p className="mt-6 text-center text-sm font-medium tracking-widest uppercase text-ink/40">
        Delivered for clients across the UK &nbsp;&middot;&nbsp; USA
        &nbsp;&middot;&nbsp; Australia &nbsp;&middot;&nbsp; Saudi Arabia
        &nbsp;&middot;&nbsp; UAE &nbsp;&middot;&nbsp; Pakistan
      </p>
    </section>
  );
}
