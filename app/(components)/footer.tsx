'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAudio } from "@/app/(components)/audio-provider";

const footerLinks = [
  { label: "Product", href: "#product" },
  { label: "Security", href: "#security" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Press kit", href: "/press" }
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "Email", href: "mailto:hello@municipallabs.com" }
];

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const { muted, toggle } = useAudio();

  return (
    <footer
      className={cn(
        "mt-24 border-t border-white/10 bg-white/[0.03] pb-10 pt-12 backdrop-blur-lg",
        className
      )}
      id="contact"
    >
      <div className="mx-auto grid w-[min(1100px,92vw)] gap-10 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-background shadow-lg shadow-sky-500/20">
              ML
            </span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-muted-foreground">
                MunicipalLabs
              </h3>
              <p className="text-sm text-muted-foreground/80">
                Software cities can trust.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground/80">
            Modern AI tooling built for regulated teams. Reach out for pilots,
            partnerships, and press inquiries.
          </p>
          <button
            type="button"
            onClick={toggle}
            className="btn-focus inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-white"
            aria-pressed={!muted}
          >
            <span aria-hidden="true">{muted ? "🔇" : "🔊"}</span>
            {muted ? "Enable audio cues" : "Mute audio cues"}
          </button>
        </div>
        <div className="grid gap-6 text-sm text-muted-foreground md:col-span-3 md:grid-cols-3">
          <nav className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/60">
              Explore
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/60">
              Social
            </p>
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="transition hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/60">
              Contact
            </p>
            <Link
              href="mailto:hello@municipallabs.com"
              className="transition hover:text-white"
            >
              hello@municipallabs.com
            </Link>
            <Link
              href="https://municipallabs.com"
              className="transition hover:text-white"
            >
              municipal labs.com
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-[min(1100px,92vw)] flex-col gap-2 text-xs text-muted-foreground/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MunicipalLabs. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

