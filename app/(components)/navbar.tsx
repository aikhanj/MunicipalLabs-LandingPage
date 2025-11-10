'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const navItems = [
  {href: "#problem", label: "Problem" },
  { href: "#solution", label: "Product" },
  { href: "#security", label: "Security" },
  
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToHash = (hash: string, block: ScrollLogicalPosition = "center") => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block });
      // Keep URL hash in sync without jumping
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <motion.header
      className={cn(
        "sticky top-4 z-50 mx-auto flex w-[min(1100px,94vw)] items-center justify-between rounded-full border border-white/10 bg-transparent px-6 py-3 backdrop-blur-xl transition-all",
        scrolled ? "shadow-xl shadow-black/40" : ""
      )}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        href="#hero"
        className="flex items-center gap-2 text-sm font-semibold text-white"
        onClick={(e) => {
          e.preventDefault();
          scrollToHash("#hero", "center");
        }}
      >
        
        Municipal Labs
      </Link>

      <nav className="hidden items-center gap-7 text-sm text-muted-foreground/80 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              // Product -> start of "Meet Legaside"
              const isProduct = item.href === "#solution";
              scrollToHash(item.href, isProduct ? "start" : "center");
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        
        <MagneticButton className="hidden md:inline-flex" href="https://legaside-v0-frontend.vercel.app/">
          Try Legaside
        </MagneticButton>
        
      </div>
    </motion.header>
  );
}

