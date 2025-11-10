'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import { LoadingOverlay } from "@/app/(components)/loading-overlay";
import { AnimatePresence } from "framer-motion";

const STORAGE_KEY = "ml_first_visit_v1";

export function InitialLoader({ children }: { children: React.ReactNode }) {
	// Render overlay immediately on first paint (pre-hydration) to avoid gradient flash.
	// We'll refine after mount using sessionStorage.
	const initialShow = useMemo(() => {
		if (typeof window === "undefined") return true;
		try {
			return !window.sessionStorage.getItem(STORAGE_KEY);
		} catch {
			return true;
		}
	}, []);
	const [showOverlay, setShowOverlay] = useState(initialShow);

	useEffect(() => {
		try {
			const visited = window.sessionStorage.getItem(STORAGE_KEY);
			// Detect hard reloads using the Performance API
			// Prefer NavigationTiming Level 2, fall back to deprecated API.
			const navEntries = performance.getEntriesByType?.("navigation") as PerformanceNavigationTiming[];
			const navType =
				(navEntries && navEntries[0]?.type) ||
				// @ts-expect-error legacy
				(performance as any).navigation?.type === 1
					? "reload"
					: "navigate";

			const isReload = navType === "reload";

			// Show overlay if first visit OR on any hard reload
			if (!visited || isReload) setShowOverlay(true);
			else setShowOverlay(false);
		} catch {
			// keep overlay if storage is inaccessible
		}
	}, []);

	const handleComplete = useCallback(() => {
		try {
			window.sessionStorage.setItem(STORAGE_KEY, "1");
		} catch {}
		setShowOverlay(false);
	}, []);

	return (
		<>
			<AnimatePresence>
				{showOverlay && <LoadingOverlay onComplete={handleComplete} />}
			</AnimatePresence>
			{children}
		</>
	);
}


