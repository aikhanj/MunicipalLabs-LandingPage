'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className={cn(
        "sticky top-4 z-50 mx-auto flex w-[min(1100px,94vw)] items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl transition-all",
        scrolled ? "shadow-xl shadow-black/40" : ""
      )}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        href="#hero"
        className="flex items-center gap-2 text-sm font-semibold text-white"
      >
        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-white/70 to-white/20 text-background shadow-lg shadow-sky-500/30">
          ML
        </span>
        MunicipalLabs
      </Link>

      <nav className="hidden items-center gap-7 text-sm text-muted-foreground/80 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="#contact"
          className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-muted-foreground transition hover:text-white md:inline-flex"
        >
          Get early access
        </Link>
        <MagneticButton className="hidden md:inline-flex" href="#contact">
          Contact
        </MagneticButton>
        <MagneticButton className="md:hidden" href="#contact">
          Connect
        </MagneticButton>
      </div>
    </motion.header>
  );
}

