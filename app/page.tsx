import { Navbar } from "@/app/(components)/navbar";
import { Hero } from "@/app/(sections)/hero";
import { Problem } from "@/app/(sections)/problem";
import { Solution } from "@/app/(sections)/solution";
import { HowItWorks } from "@/app/(sections)/how-it-works";
import { Security } from "@/app/(sections)/security";
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
        <Problem />
        <Solution />
        <HowItWorks />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

