'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAudio } from "@/app/(components)/audio-provider";

const footerLinks = [
  { label: "Product", href: "#product" },
  { label: "Security", href: "#security" },
  { label: "Tech", href: "#tech" },
  // FAQ temporarily removed
];

const socials = [
  { label: "LinkedIn (Aikhan)", href: "https://www.linkedin.com/in/aikhanj" },
  { label: "GitHub", href: "https://github.com/Lutashi/" },
  { label: "Twitter", href: "https://x.com/jumashukurov" },
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
    >
      <div className="mx-auto grid w-[min(1100px,92vw)] gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center gap-3 text-white">
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3rem] text-muted-foreground">
                Municipal Labs
              </h3>
              <p className="text-sm text-muted-foreground/80">
                Software cities can trust.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground/80">
            Modern software built for public sector teams. Reach out for pilots,
            partnerships, and press inquiries.
          </p>
          
        </div>
        <div className="md:col-span-2 flex items-start justify-start md:justify-end">
          <div className="text-left md:text-right text-xs text-muted-foreground/60">
          <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Legal &amp; security
          </p>
          <div className="flex flex-col gap-1.5">
            <Link
              href="/terms-of-service"
              className="group inline-flex items-center gap-1 text-xs text-muted-foreground/80 transition hover:text-white whitespace-nowrap"
            >
              <span>Terms of Service</span>
              <span className="inline-flex h-4 w-4 translate-x-0 items-center justify-center rounded border border-white/10 text-[0.55rem] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                ↗
              </span>
            </Link>
            <Link
              href="/privacy-policy"
              className="group inline-flex items-center gap-1 text-xs text-muted-foreground/80 transition hover:text-white whitespace-nowrap"
            >
              <span>Privacy Policy</span>
              <span className="inline-flex h-4 w-4 translate-x-0 items-center justify-center rounded border border-white/10 text-[0.55rem] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                ↗
              </span>
            </Link>
            <Link
              href="/data-processing-agreement"
              className="group inline-flex items-center gap-1 text-xs text-muted-foreground/80 transition hover:text-white whitespace-nowrap"
            >
              <span>Data Processing Agreement</span>
              <span className="inline-flex h-4 w-4 translate-x-0 items-center justify-center rounded border border-white/10 text-[0.55rem] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                ↗
              </span>
            </Link>
            <Link
              href="/incident-response-plan"
              className="group inline-flex items-center gap-1 text-xs text-muted-foreground/80 transition hover:text-white whitespace-nowrap"
            >
              <span>Incident Response Plan</span>
              <span className="inline-flex h-4 w-4 translate-x-0 items-center justify-center rounded border border-white/10 text-[0.55rem] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                ↗
              </span>
            </Link>
          </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-[min(1100px,92vw)] text-xs text-muted-foreground/60">
        <p>© {new Date().getFullYear()} MunicipalLabs. All rights reserved.</p>
        </div>
    </footer>
  );
}

