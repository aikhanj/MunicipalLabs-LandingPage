'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "/logos/city-forward.svg", alt: "CityForward" },
  { src: "/logos/civic-systems.svg", alt: "Civic Systems" },
  { src: "/logos/publicui.svg", alt: "PublicUI" },
  { src: "/logos/metro-ops.svg", alt: "MetroOps" },
  { src: "/logos/north-analytics.svg", alt: "North Analytics" },
  { src: "/logos/statecraft.svg", alt: "Statecraft Labs" }
];

interface LogoCloudProps {
  className?: string;
}

export function LogoCloud({ className }: LogoCloudProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent" />
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="relative h-12 w-32 flex-shrink-0 opacity-70 transition-opacity hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="128px"
              className="object-contain"
              priority={index < logos.length}
              loading={index < logos.length ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

