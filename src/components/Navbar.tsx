"use client";

import { useState, useEffect } from "react";

const BOOKING_LINK =
  "https://www.upwork.com/services/product/development-it-ai-driven-saas-platform-ecom-platform-2073477430135302936?ref=fl_profile";

const NAV_LINKS = [
  { label: "Work", href: "#what-i-build" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Process", href: "#how-i-work" },
  { label: "Pricing", href: "#ways-to-start" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Colour tokens that flip on scroll ── */
  const logoColor = scrolled
    ? "text-white hover:text-primary-300"
    : "text-primary-600 hover:text-primary-900";
  const dotColor = scrolled ? "text-primary-300" : "text-primary-300";
  const linkColor = scrolled
    ? "text-white/85 hover:text-white"
    : "text-primary-600 hover:text-primary-900";
  const hamburgerBg = scrolled ? "bg-white" : "bg-primary-600";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-900/95 backdrop-blur-md shadow-lg shadow-primary-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* ── Logo / Name ── */}
        <a
          href="#hero"
          className={`font-serif text-xl font-semibold no-underline transition-colors ${logoColor}`}
        >
          ZANGI<span className={dotColor}>.</span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium no-underline transition-colors ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 !text-sm !rounded-md"
          >
            Hire me
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${hamburgerBg} ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${hamburgerBg} ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${hamburgerBg} ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-primary-900/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-paper/80 no-underline transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn-primary !py-2.5 !text-sm text-center !rounded-md mt-2"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
