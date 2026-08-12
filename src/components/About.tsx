import Image from "next/image";
import photo from "@/app/assets/zangi.jpg";

export default function About() {
  return (
    <section id="about" className="bg-primary-50">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          {/* ── Photo ── */}
          <div className="shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-border">
              <Image
                src={photo}
                alt="Imaduddin Zangi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* ── Bio ── */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
              About
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80">
              I&rsquo;m Imaduddin Zangi, a full-stack developer in Lahore. For five years
              I&rsquo;ve built operations software for companies in the UK, US,
              Australia and the Gulf &mdash; usually as the only engineer on the
              project, from database design through to deployment. I work best
              on the unglamorous systems: ledgers, inventory, inspections,
              dispatch. I&rsquo;m currently full-time at Africa House Pakistan
              and take on a limited number of outside projects.
            </p>

            {/* ── Resume download ── */}
            <div className="mt-6">
              <a
                href="/Imad-Ud-Din-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 0 1 .75.75v7.69l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 1.06-1.06l2.72 2.72V3.75A.75.75 0 0 1 10 3Z"
                    clipRule="evenodd"
                  />
                  <path d="M3.75 15a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z" />
                </svg>
                Download full resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
