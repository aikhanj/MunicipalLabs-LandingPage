'use client';

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Command = {
  label: string;
  href: string;
  keywords?: string[];
};

const commands: Command[] = [
  { label: "Hero", href: "#hero", keywords: ["top", "start"] },
  { label: "Product overview", href: "#product", keywords: ["problem", "chaos"] },
  { label: "Legaside solution", href: "#solution", keywords: ["legaside", "tabs"] },
  { label: "How it works", href: "#how-it-works", keywords: ["steps", "process"] },
  { label: "Security", href: "#security", keywords: ["compliance", "rls"] },
  { label: "Metrics", href: "#metrics", keywords: ["proof", "logos"] },
  { label: "About", href: "#about", keywords: ["team", "mission"] },
  { label: "Request access", href: "#contact", keywords: ["cta", "form"] }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return commands;
    return commands.filter((command) => {
      const haystack = [command.label, ...(command.keywords ?? [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="gap-6">
        <div className="space-y-1">
          <DialogTitle>Quick navigation</DialogTitle>
          <DialogDescription>
            Jump anywhere on the page or hit <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5">Esc</span> to close.
          </DialogDescription>
        </div>
        <Input
          autoFocus
          placeholder="Search sections…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="max-h-72 overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-2">
          {filtered.length ? (
            filtered.map((command) => (
              <button
                key={command.href}
                className={cn(
                  "w-full rounded-xl px-4 py-3 text-left text-sm text-muted-foreground hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                )}
                onClick={() => {
                  router.push(command.href);
                  setOpen(false);
                }}
              >
                <div className="font-medium text-white/90">{command.label}</div>
                {command.keywords ? (
                  <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/60">
                    {command.keywords.join(" · ")}
                  </p>
                ) : null}
              </button>
            ))
          ) : (
            <div className="rounded-xl bg-white/5 px-4 py-6 text-center text-sm text-muted-foreground">
              No matches. Try “security” or “metrics”.
            </div>
          )}
        </div>
        <p className="text-xs uppercase tracking-[0.3rem] text-muted-foreground/60">
          Press ⌘K / Ctrl K from anywhere
        </p>
      </DialogContent>
    </Dialog>
  );
}

