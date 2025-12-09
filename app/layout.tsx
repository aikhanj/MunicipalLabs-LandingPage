import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import { Inter, JetBrains_Mono, Crimson_Pro } from "next/font/google";
import { AudioProvider } from "@/app/(components)/audio-provider";
import { ThemeProvider } from "@/app/(components)/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Municipal Labs | Utilizing Software to expedite public sector operations",
  description:
    "Expediting public sector operations through software",
  icons: {
    icon: "/logos/logo-iconblack.png",
    shortcut: "/logos/logo-iconblack.png",
    apple: "/logos/logo-iconblack.png",
  },
  openGraph: {
    title: "Municipal Labs | Utilizing Software to expedite public sector operations",
    description: "Expediting public sector operations through software",
    images: [
      {
        url: "/logos/logo-iconblack.png",
        width: 1200,
        height: 630,
        alt: "Municipal Labs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Municipal Labs | Utilizing Software to expedite public sector operations",
    description: "Expediting public sector operations through software",
    images: ["/logos/logo-iconblack.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-background" />
          <AudioProvider>{children}</AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


