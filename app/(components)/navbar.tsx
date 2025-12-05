'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./magnetic-button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#product", label: "Problem" },
  { href: "#solution", label: "Product" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#security", label: "Security" }
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
        "sticky z-50 flex w-full justify-center transition-all duration-500",
        scrolled ? "top-6 px-3" : "top-0 px-0"
      )}
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4 transition-all duration-500",
          scrolled
            ? "w-[min(1100px,94vw)] rounded-full border border-white/15 bg-neutral-950/80 px-5 py-3 shadow-[0_12px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            : "w-full rounded-none border-none bg-transparent px-6 py-5 sm:px-10"
        )}
      >
        <Link
          href="#hero"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToHash("#hero", "center");
          }}
        >
          <Image
            src="/logos/logo-icon.png"
            alt="Municipal Labs"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground/80 md:flex">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={item.href}
                className="relative block transition-colors hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  // Product -> start of "Meet Legaside"
                  const isProduct = item.href === "#solution";
                  scrollToHash(item.href, isProduct ? "start" : "center");
                }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] w-full bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute inset-0 rounded-md bg-white/5 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MagneticButton
            className="hidden md:inline-flex bg-white text-background hover:bg-slate-100/95 hover:text-background"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#contact", "center");
            }}
          >
            Request access
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}

