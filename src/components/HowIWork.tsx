const PROMISES = [
  {
    title: "Fixed scope, fixed timeline.",
    description:
      "Agreed in writing before a line of code. You know the date and the number on day one.",
  },
  {
    title: "A working demo every week.",
    description:
      "No progress reports, no black boxes \u2014 you see the thing running.",
  },
  {
    title: "You own everything from day one.",
    description:
      "Repositories, cloud accounts and domains in your name, not mine.",
  },
  {
    title: "I finish what I start.",
    description:
      "When I moved companies mid-project, my contract required me to see two client systems through to completion \u2014 so I did, alongside a new full-time job. One of those clients still sends me maintenance work eighteen months later.",
    highlight: true,
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="bg-primary-50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        {/* ── Section heading ── */}
        <div className="text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
            How I work
          </h2>
          <p className="mt-3 text-base text-ink/60">
            Four promises. All of them checkable.
          </p>
        </div>

        {/* ── Promise grid ── */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PROMISES.map((p) => (
            <div
              key={p.title}
              className={`rounded-lg border bg-paper p-8 ${
                p.highlight
                  ? "border-primary-600 ring-1 ring-primary-600/20"
                  : "border-border"
              }`}
            >
              <h3 className="font-serif text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
