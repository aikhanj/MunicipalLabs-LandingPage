'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface ScrambleTextProps {
	text: string;
	className?: string;
	/** Duration in ms for full resolve */
	durationMs?: number;
	/** Characters used while scrambling */
	charset?: string;
	/** Delay before starting, in ms */
	delayMs?: number;
	/** If true, re-animate when `text` changes */
	replayOnTextChange?: boolean;
}

/**
 * ScrambleText reveals characters one-by-one by iterating random symbols,
 * producing a "glitchy decode" effect similar to sci‑fi HUDs.
 */
export function ScrambleText({
	text,
	className,
	durationMs = 900,
	charset = "!<>-_\\/[]{}—=+*^?#________",
	delayMs = 0,
	replayOnTextChange = true
}: ScrambleTextProps) {
	const prefersReducedMotion = usePrefersReducedMotion();
	const [output, setOutput] = useState<string[]>(() => text.split(""));
	const frameRef = useRef<number | null>(null);
	const startRef = useRef<number | null>(null);
	const lastText = useRef(text);

	const characters = useMemo(() => charset.split(""), [charset]);

	useEffect(() => {
		// If reduced motion, render text immediately.
		if (prefersReducedMotion) {
			setOutput(text.split(""));
			return;
		}
		// Re-run when text changes (optional).
		if (!replayOnTextChange && lastText.current === text) return;
		lastText.current = text;

		let rafActive = true;
		const target = text;
		const length = target.length;
		const perChar = Math.max(16, Math.floor(durationMs / Math.max(1, length)));

		const run = (now: number) => {
			if (!rafActive) return;
			if (startRef.current === null) startRef.current = now;
			const elapsed = now - startRef.current;
			const index = Math.min(length, Math.floor(elapsed / perChar));

			const next: string[] = new Array(length);
			for (let i = 0; i < length; i++) {
				if (i < index) {
					next[i] = target[i];
				} else {
					// Random symbol for characters not yet resolved
					next[i] =
						characters[Math.floor(Math.random() * characters.length)] ?? " ";
				}
			}
			setOutput(next);

			if (index < length) {
				frameRef.current = requestAnimationFrame(run);
			} else {
				// One final pass to set exact text (avoid trailing underscores)
				setOutput(target.split(""));
			}
		};

		const startTimer = window.setTimeout(() => {
			frameRef.current = requestAnimationFrame(run);
		}, delayMs);

		return () => {
			rafActive = false;
			startRef.current = null;
			window.clearTimeout(startTimer);
			if (frameRef.current) cancelAnimationFrame(frameRef.current);
		};
	}, [text, durationMs, characters, delayMs, replayOnTextChange, prefersReducedMotion]);

	// Group characters into words so lines break only between words,
	// never inside a word (prevents "wi\nth" splits while scrambling).
	const tokens = useMemo(() => {
		type Token = { kind: "word" | "space"; from: number; to: number };
		const result: Token[] = [];
		let i = 0;
		while (i < text.length) {
			if (/\s/.test(text[i] ?? "")) {
				const start = i;
				while (i < text.length && /\s/.test(text[i] ?? "")) i++;
				result.push({ kind: "space", from: start, to: i });
			} else {
				const start = i;
				while (i < text.length && !/\s/.test(text[i] ?? "")) i++;
				result.push({ kind: "word", from: start, to: i });
			}
		}
		return result;
	}, [text]);

	return (
		<span className={cn("font-mono tracking-normal", className)} aria-label={text}>
			{tokens.map((tok, idx) => {
				if (tok.kind === "space") {
					return <span key={`s-${idx}`} aria-hidden="true">{" "}</span>;
				}
				const wordChars = output.slice(tok.from, tok.to);
				return (
					<span key={`w-${idx}`} className="inline-flex whitespace-nowrap">
						{wordChars.map((ch, i) => (
							<span
								// Fixed-width slot per character to keep layout static
								key={i}
								style={{ width: "1ch" }}
								className="inline-block"
								aria-hidden="true"
							>
								{ch}
							</span>
						))}
					</span>
				);
			})}
		</span>
	);
}


