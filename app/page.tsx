import { Navbar } from "@/app/(components)/navbar";
import { Hero } from "@/app/(sections)/hero";
import { Solution } from "@/app/(sections)/solution";
import { Security } from "@/app/(sections)/security";
import { Footer } from "@/app/(components)/footer";
import { CommandPalette } from "@/app/(components)/command-palette";
import { InitialLoader } from "@/app/(components)/initial-loader";

export default function Page() {
  return (
    <InitialLoader>
      <>
        <Navbar />
        <CommandPalette />
        <main id="content" className="relative">
          <Hero />
          <Solution />
          <Security />
        </main>
        <Footer />
      </>
    </InitialLoader>
  );
}

