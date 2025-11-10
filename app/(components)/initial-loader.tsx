'use client';

import { useCallback, useEffect, useState } from "react";
import { LoadingOverlay } from "@/app/(components)/loading-overlay";
import { AnimatePresence } from "framer-motion";

export function InitialLoader({ children }: { children: React.ReactNode }) {
	// Always show the overlay on first paint (SSR and initial client render)
	const [showOverlay, setShowOverlay] = useState(true);

	// Extra safety: if the overlay somehow doesn't complete, hide it after a max time
	useEffect(() => {
		if (!showOverlay) return;
		const id = window.setTimeout(() => setShowOverlay(false), 6000);
		return () => window.clearTimeout(id);
	}, [showOverlay]);

	const handleComplete = useCallback(() => {
		setShowOverlay(false);
	}, []);

	return (
		<>
			<AnimatePresence initial={false} mode="wait">
				{showOverlay && <LoadingOverlay onComplete={handleComplete} />}
			</AnimatePresence>
			{children}
		</>
	);
}


