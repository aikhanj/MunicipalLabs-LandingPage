"use client";

import React from "react";
import clsx from "clsx";

export type TiltCardProps = React.PropsWithChildren<{
	className?: string;
}> &
	React.HTMLAttributes<HTMLDivElement>;

/**
 * Simple presentational card that can be enhanced with tilt/hover effects later.
 * For now it forwards props and preserves children.
 */
export function TiltCard({ className, children, ...rest }: TiltCardProps) {
	return (
		<div
			// Using a subtle default style so existing classNames can extend it
			className={clsx("rounded-3xl border border-white/10 p-[1px]", className)}
			{...rest}
		>
			{children}
		</div>
	);
}

export default TiltCard;
 