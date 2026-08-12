import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = localFont({
  src: [
    {
      path: "../fonts/Fraunces-VariableFont.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Fraunces-Italic-VariableFont.ttf",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imaduddin Zangi — Operations Software Engineer",
  description:
    "I build the software that runs inspections, inventory and logistics operations. Five years, twelve production systems, eight countries. Usually the only engineer on the project.",
  keywords: [
    "operations software",
    "full-stack developer",
    "inspection platforms",
    "inventory systems",
    "logistics software",
    "NestJS",
    "Next.js",
    "React Native",
    "PostgreSQL",
  ],
  openGraph: {
    title: "Imaduddin Zangi — Operations Software Engineer",
    description:
      "I build the software that runs inspections, inventory and logistics operations. Five years, twelve production systems, eight countries.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
