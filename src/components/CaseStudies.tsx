import Image, { StaticImageData } from "next/image";

import optima1 from "@/app/assets/optima1.jpeg";
import optima2 from "@/app/assets/optima2.jpeg";
import optima3 from "@/app/assets/optima3.jpeg";
import cditech1 from "@/app/assets/cditech1.jpeg";
import cditech2 from "@/app/assets/cditech2.jpeg";
import cditech3 from "@/app/assets/cditech3.jpeg";
import erp1 from "@/app/assets/erp1.jpeg";
import erp2 from "@/app/assets/erp2.jpeg";
import erp3 from "@/app/assets/erp3.jpeg";

const BOOKING_LINK =
  "https://www.upwork.com/services/product/development-it-ai-driven-saas-platform-ecom-platform-2073477430135302936?ref=fl_profile";

interface CaseStudy {
  id: string;
  name: string;
  angle: string;
  problem: string;
  built: string;
  stack: string;
  result: string;
  proof?: { label: string; href: string };
  note?: string;
  bg: "paper" | "primary-50";
  screenshots: StaticImageData[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "optima",
    name: "Optima.AI",
    angle: "One developer, one commercial product, eleven business customers.",
    problem:
      "A UK health testing company needed to sell kits online, ingest lab results, and let partner organisations run their own branded storefronts \u2014 all under one platform.",
    built:
      "Built and shipped the entire platform single-handedly: at-home test-kit e-commerce, lab result ingestion, and an LLM pipeline producing personalised, downloadable health reports. Designed a multi-tenant subdomain architecture now serving 11 partner organisations, each with its own branded storefront and admin dashboard. Implemented Stripe checkout and subscription billing, multi-tiered authentication, and the full relational schema on Supabase.",
    stack: "Next.js App Router, Supabase, Stripe, LLM pipelines, Vercel",
    result:
      "11 partner tenants on their own subdomains, ~300 kit listings, live Stripe billing. Still retained for ongoing maintenance.",
    proof: {
      label: "optimatesting.co.uk",
      href: "https://optimatesting.co.uk",
    },
    bg: "paper",
    screenshots: [optima1, optima2, optima3],
  },
  {
    id: "cdi-tech",
    name: "CDI Tech",
    angle:
      "Scale and endurance. Fourteen months, three connected products across browser, desktop and mobile.",
    problem:
      "A US industrial inspection company needed a connected platform spanning browser, desktop and mobile \u2014 built on top of a legacy codebase that was slowing everything down.",
    built:
      "Full-stack developer across three products: Utility Point (browser), Station Point (desktop) and Inspection Point Lite (mobile companion). Inherited the legacy codebase and redesigned the database schema end to end, measurably reducing lag and defect rates. Built automated geospatial routing over Google Maps/Earth, computing optimised daily itineraries for field engineers. Implemented full-duplex WebSocket messaging connecting clients, inspectors and administrators.",
    stack:
      "NestJS, PostgreSQL, Vite React/TypeScript, React Native, Google Maps/Earth, Stripe",
    result:
      "14 months of continuous delivery across three platforms with a rebuilt database layer.",
    note: "The engagement closed following the client owner\u2019s death.",
    bg: "primary-50",
    screenshots: [cditech1, cditech2, cditech3],
  },
  {
    id: "mills-car",
    name: "Mills ERP + Car Inventory",
    angle:
      "Software running real, physical, high-value operations \u2014 in daily production use.",
    problem:
      "Two large mills in Gujranwala needed professional double-entry accounting and multi-warehouse inventory. Eight car dealerships across Pakistan needed vehicle inventory, ledgers, installment plans and profit analytics. Both needed desktop software, white-labelled under their own brand.",
    built:
      "Built a full double-entry accounting core \u2014 ledgers, dynamic invoicing and cash-flow reporting to professional accounting standards. Designed multi-warehouse inventory schemas tracking raw materials, warehouse movements and shipment arrivals in real time; packaged as native cross-platform desktop software. For car dealerships, delivered vehicle inventory, purchase and sale ledgers, installment plans and profit analytics with Chart.js visualisations. Both solutions white-labelled under each client\u2019s own brand.",
    stack:
      "Electron, NestJS, Vite React, Redux, TypeScript, React Native, Chart.js",
    result:
      "Two large mills and eight car dealerships in daily production use, handling high-value physical inventory.",
    bg: "paper",
    screenshots: [erp1, erp2, erp3],
  },
];



export default function CaseStudies() {
  return (
    <section id="case-studies">
      {/* ── Section heading ── */}
      <div className="bg-paper py-16 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink">
          Case studies
        </h2>
        <p className="mt-3 text-base text-ink/60">
          Three projects in depth. The problem, what I built, and the result.
        </p>
      </div>

      {/* ── Individual case studies ── */}
      {CASE_STUDIES.map((cs) => (
        <div
          key={cs.id}
          className={cs.bg === "paper" ? "bg-paper" : "bg-primary-50"}
        >
          <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
            {/* ── Name & angle ── */}
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ink">
              {cs.name}
            </h3>
            <p className="mt-2 text-base font-medium italic text-ink/70">
              {cs.angle}
            </p>

            {/* ── Problem ── */}
            <div className="mt-8">
              <h4 className="font-serif text-lg font-semibold text-ink">
                The problem
              </h4>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {cs.problem}
              </p>
            </div>

            {/* ── What I built ── */}
            <div className="mt-6">
              <h4 className="font-serif text-lg font-semibold text-ink">
                What I built
              </h4>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {cs.built}
              </p>
            </div>

            {/* ── Stack ── */}
            <div className="mt-6">
              <h4 className="font-serif text-lg font-semibold text-ink">
                The stack
              </h4>
              <p className="mt-2 text-sm font-mono text-ink/70">{cs.stack}</p>
            </div>

            {/* ── Result ── */}
            <div className="mt-6">
              <h4 className="font-serif text-lg font-semibold text-ink">
                The result
              </h4>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {cs.result}
              </p>
            </div>

            {/* ── Note (if any) ── */}
            {cs.note && (
              <p className="mt-4 text-sm italic text-ink/50">{cs.note}</p>
            )}

            {/* ── Proof link ── */}
            {cs.proof && (
              <div className="mt-6">
                <a
                  href={cs.proof.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium underline"
                >
                  {cs.proof.label} &rarr;
                </a>
              </div>
            )}

            {/* ── Screenshots ── */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cs.screenshots.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-lg border border-border">
                  <Image
                    src={img}
                    alt={`${cs.name} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover"
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* ── Mid-page CTA (after case studies) ── */}
      <div className="bg-paper py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-xl font-serif font-semibold text-ink">
            Seen enough?
          </p>
          <p className="mt-2 text-base text-ink/60">
            Twenty minutes. Your operation, my honest assessment.
          </p>
          <div className="mt-6">
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
              Hire me on Upwork
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
