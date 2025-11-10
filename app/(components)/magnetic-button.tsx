'use client';

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  useCallback
} from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useAudio } from "@/app/(components)/audio-provider";

type CommonProps = {
  children: ReactNode;
  className?: string;
  magneticDistance?: number;
};

type MotionConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragExit"
  | "onDragLeave"
  | "onDragOver"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, MotionConflictingHandlers> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, MotionConflictingHandlers> & {
    href: string;
  };

type MagneticButtonProps = ButtonProps | AnchorProps;

export function MagneticButton({
  children,
  className,
  magneticDistance = 80,
  ...props
}: MagneticButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { play } = useAudio();

  const springConfig = { stiffness: 400, damping: 40, mass: 1.2 };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handlePointerMoveImpl = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);

      if (distance < magneticDistance) {
        x.set(offsetX * 0.35);
        y.set(offsetY * 0.35);
      }
    },
    [magneticDistance, prefersReducedMotion, x, y]
  );

  // no-op

  const resetPosition = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const elementProps = {
    ...props,
    type:
      "href" in (props as AnchorProps) ? undefined : props.type ?? "button"
  };

  const handlePointerMoveButton: React.PointerEventHandler<HTMLButtonElement> = (
    event
  ) => {
    handlePointerMoveImpl(
      event as unknown as React.PointerEvent<HTMLElement>
    );
  };
  const handlePointerMoveAnchor: React.PointerEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    handlePointerMoveImpl(
      event as unknown as React.PointerEvent<HTMLElement>
    );
  };

  if ("href" in (props as AnchorProps)) {
    return (
      <motion.a
        className={cn(
          "btn-focus group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-inner shadow-white/10 transition-colors hover:bg-white/20 focus-visible:ring-white/50",
          className
        )}
        style={{
          translateX: prefersReducedMotion ? 0 : springX,
          translateY: prefersReducedMotion ? 0 : springY
        }}
        onPointerMove={handlePointerMoveAnchor}
        onPointerLeave={resetPosition}
        onPointerDown={(event) => {
          const handler =
            (props as AnchorProps).onPointerDown as
              | React.PointerEventHandler<HTMLAnchorElement>
              | undefined;
          handler?.(event);
          if (prefersReducedMotion || !(event.currentTarget instanceof Element))
            return;
          const rect = event.currentTarget.getBoundingClientRect();
          const ripple = document.createElement("span");
          const size = Math.max(rect.width, rect.height);
          ripple.className =
            "pointer-events-none absolute block rounded-full bg-white/25 opacity-70 animate-[pulse_0.6s_ease-out] will-change-transform";
          ripple.style.width = ripple.style.height = `${size}px`;
          ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
          ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
          event.currentTarget.appendChild(ripple);
          setTimeout(() => ripple.remove(), 600);
          play("click");
        }}
        {...(elementProps as AnchorProps)}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-0 transition-opacity"
          animate={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: [0.15, 0.3, 0.15] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }
        />
      </motion.a>
    );
  }

  return (
    <motion.button
      className={cn(
        "btn-focus group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-inner shadow-white/10 transition-colors hover:bg-white/20 focus-visible:ring-white/50",
        className
      )}
      style={{
        translateX: prefersReducedMotion ? 0 : springX,
        translateY: prefersReducedMotion ? 0 : springY
      }}
      onPointerMove={handlePointerMoveButton}
      onPointerLeave={resetPosition}
      onPointerDown={(event) => {
        const handler =
          (props as ButtonProps).onPointerDown as
            | React.PointerEventHandler<HTMLButtonElement>
            | undefined;
        handler?.(event);
        if (prefersReducedMotion || !(event.currentTarget instanceof Element))
          return;
        const rect = event.currentTarget.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height);
        ripple.className =
          "pointer-events-none absolute block rounded-full bg-white/25 opacity-70 animate-[pulse_0.6s_ease-out] will-change-transform";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        event.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
        play("click");
      }}
      {...(elementProps as ButtonProps)}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent opacity-0 transition-opacity"
        animate={
          prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: [0.15, 0.3, 0.15] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }
      />
    </motion.button>
  );
}

