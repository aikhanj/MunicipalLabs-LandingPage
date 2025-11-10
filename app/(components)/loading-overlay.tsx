'use client';

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LoadingOverlay({
	onComplete,
	className
}: {
	onComplete: () => void;
	className?: string;
}) {
	const [progress, setProgress] = useState(0);
	const [showWelcome, setShowWelcome] = useState(false);
	const timerRef = useRef<number | null>(null);
	const failSafeRef = useRef<number | null>(null);
	const completedRef = useRef(false);

	useEffect(() => {
		// Progress with easing and a couple jitter jumps for "hacker" vibe
		let value = 0;
		const tick = () => {
			const remaining = 100 - value;
			const step = Math.max(1, Math.round(remaining * 0.08));
			// small randomization
			value = Math.min(100, value + step + Math.floor(Math.random() * 3));
			setProgress(value);
			if (value < 100) {
				timerRef.current = window.setTimeout(tick, 70);
			} else if (!completedRef.current) {
				completedRef.current = true;
				setShowWelcome(true);
				window.setTimeout(() => {
					onComplete();
				}, 650);
			}
		};
		timerRef.current = window.setTimeout(tick, 250);

		// Fail-safe: ensure completion even if tab timers are throttled
		// or the progress loop stalls for any reason.
		failSafeRef.current = window.setTimeout(() => {
			if (!completedRef.current) {
				setProgress(100);
				completedRef.current = true;
				setShowWelcome(true);
				window.setTimeout(() => {
					onComplete();
				}, 500);
			}
		}, 6500);

		return () => {
			if (timerRef.current) window.clearTimeout(timerRef.current);
			if (failSafeRef.current) window.clearTimeout(failSafeRef.current);
		};
	}, [onComplete]);

	return (
		<motion.div
			className={cn(
				"fixed inset-0 z-[1000] flex items-center justify-center bg-black",
				className
			)}
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
		>
				{/* mask any subpixel flicker at the very top edge during fade */}
				<div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black to-transparent" />
				<div className="w-[min(640px,92vw)]">
					<div className="mb-6 text-center font-mono text-xs uppercase tracking-[0.35rem] text-[rgb(93,214,255)]/80">
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ repeat: Infinity, duration: 1.2, repeatType: "reverse" }}
						>
							Initializing Secure Session
						</motion.span>
					</div>
					<div className="relative h-3 w-full overflow-hidden rounded bg-[rgba(93,214,255,0.12)]">
						<motion.div
							className="absolute inset-y-0 left-0 bg-[rgb(93,214,255)] shadow-[0_0_34px_rgba(93,214,255,0.7)]"
							style={{ width: `${progress}%` }}
							initial={{ width: 0 }}
							animate={{ width: `${progress}%` }}
							transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.25 }}
						/>
						{/* scan line */}
						<motion.div
							className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[rgba(93,214,255,0.7)] to-transparent mix-blend-screen"
							animate={{ x: ["-10%", "110%"] }}
							transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
						/>
					</div>
					<div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[rgb(93,214,255)]/80">
						<span>{progress.toString().padStart(3, "0")}%</span>
						<span className="opacity-70">/ / MUNICIPAL LABS</span>
					</div>
					<div className="mt-10 text-center font-mono text-lg tracking-widest">
						<AnimatePresence mode="wait">
							{showWelcome ? (
								<motion.span
									key="welcome"
									className="text-[rgb(93,214,255)]"
									initial={{ y: 12, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -12, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									Welcome
								</motion.span>
							) : (
								<motion.span
									key="auth"
									className="text-[rgba(93,214,255,0.8)]"
									initial={{ y: 12, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -12, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									Authenticating…
								</motion.span>
							)}
						</AnimatePresence>
					</div>
				</div>
		</motion.div>
	);
}


