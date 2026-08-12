const BOOKING_LINK =
  "https://www.upwork.com/services/product/development-it-ai-driven-saas-platform-ecom-platform-2073477430135302936?ref=fl_profile";

const NAV_LINKS = [
  { label: "Work", href: "#what-i-build" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#how-i-work" },
  { label: "Pricing", href: "#ways-to-start" },
  { label: "FAQ", href: "#faq" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imaduddinzangi/",
  },
  {
    label: "GitHub",
    href: "https://github.com/ImaduddinZangi",
  },
  {
    label: "Upwork",
    href: BOOKING_LINK,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary-50 text-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-24 sm:pb-12">
        {/* ── Main grid: CTA left, links right ── */}
        <div className="grid gap-16 lg:grid-cols-5">
          {/* ── Left — CTA block (takes 3 cols) ── */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-paper">
              Let&rsquo;s build something
              <br />
              <span className="text-primary-300">that actually works.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-700/80">
              Skip the pitch decks. Tell me about your operation and I&rsquo;ll
              give you an honest answer on whether software is even the right
              fix.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Hire me on Upwork
              </a>
              <a
                href="mailto:imaduddinzangi07@gmail.com"
                className="text-sm font-medium text-primary-300 no-underline hover:text-paper transition-colors"
              >
                or email me &rarr;
              </a>
            </div>
          </div>

          {/* ── Right — Link columns (takes 2 cols) ── */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-10">
            {/* Navigation */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-700">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-300 no-underline hover:text-paper transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-700">
                Connect
              </p>
              <ul className="mt-4 space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-300 no-underline hover:text-paper transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:imaduddinzangi07@gmail.com"
                    className="text-sm text-primary-300 no-underline hover:text-paper transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary-700/40 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-primary-900">
            &copy; {new Date().getFullYear()} Imaduddin Zangi. All rights
            reserved.
          </p>
          <p className="text-xs text-primary-900">
            Designed &amp; built by hand.
          </p>
        </div>
      </div>
    </footer>
  );
}
