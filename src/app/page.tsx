import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import WhatIBuild from "@/components/WhatIBuild";
import CaseStudies from "@/components/CaseStudies";
import HowIWork from "@/components/HowIWork";
import WaysToStart from "@/components/WaysToStart";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <WhatIBuild />
        <CaseStudies />
        <HowIWork />
        <WaysToStart />
        <About />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
