import { Navbar } from "@/app/(components)/navbar";
import { Hero } from "@/app/(sections)/hero";
import { Approach } from "@/app/(sections)/approach";
import { Problem } from "@/app/(sections)/problem";
import { HowItWorks } from "@/app/(sections)/how-it-works";
import { CTA } from "@/app/(sections)/cta";
import { Footer } from "@/app/(components)/footer";
import { CommandPalette } from "@/app/(components)/command-palette";

export default function Page() {
  return (
    <>
      <Navbar />
      <CommandPalette />
      <main id="content" className="relative">
        <Hero />
        <Approach />
        <Problem />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

