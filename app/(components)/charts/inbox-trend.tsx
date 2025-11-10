'use client';

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { useEffect, useRef, useState } from "react";

const dataPoints = [
  { name: "Mon", incoming: 420, resolved: 280 },
  { name: "Tue", incoming: 510, resolved: 360 },
  { name: "Wed", incoming: 460, resolved: 420 },
  { name: "Thu", incoming: 490, resolved: 470 },
  { name: "Fri", incoming: 520, resolved: 510 }
];

export function InboxTrendChart() {
  const [data, setData] = useState(dataPoints);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const tickRef = useRef(0);

  useEffect(() => {
    // Helper to keep values in-range
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    timerRef.current = setInterval(() => {
      tickRef.current += 1;
      const t = tickRef.current;

      setData(prev =>
        prev.map((point, idx) => {
          // Strong, visible wave with jitter to ensure up-and-down variability
          const phase = t * 0.5 + idx * 0.9;
          const wavePrimary = Math.sin(phase) * 120;      // big swings
          const waveSecondary = Math.sin(phase * 0.5) * 60; // slower modulation
          const jitterIncoming = (Math.random() * 40) - 20; // [-20, 20]

          const rawIncoming = 480 + wavePrimary + waveSecondary + jitterIncoming;
          const nextIncoming = Math.round(clamp(rawIncoming, 180, 650));

          // Resolved trails incoming with its own wave and jitter
          const resolvedPhase = phase + Math.PI / 4;
          const resolvedWave = Math.sin(resolvedPhase) * 90;
          const jitterResolved = (Math.random() * 30) - 15; // [-15, 15]
          const targetResolved = nextIncoming - 60 + resolvedWave + jitterResolved;
          const blendedResolved = point.resolved * 0.4 + targetResolved * 0.6;
          const nextResolved = Math.round(clamp(blendedResolved, 120, 640));

          return {
            ...point,
            incoming: nextIncoming,
            resolved: Math.min(nextResolved, nextIncoming - 10)
          };
        })
      );
    }, 1500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorIncoming" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgba(93,214,255,0.9)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="rgba(93,214,255,0.1)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="rgba(90,255,180,0.9)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="rgba(90,255,180,0.1)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          stroke="rgba(255,255,255,0.3)"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
        />
        <YAxis
          stroke="rgba(255,255,255,0.3)"
          tickLine={false}
          axisLine={false}
          tickMargin={12}
        />
        <Tooltip
          contentStyle={{
            background: "rgba(11, 14, 24, 0.9)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "white"
          }}
        />
        <Area
          type="monotone"
          dataKey="incoming"
          stroke="rgba(93,214,255,1)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorIncoming)"
          isAnimationActive
          animationDuration={700}
          animationEasing="ease-in-out"
          dot={false}
        />
        <Area
          type="monotone"
          dataKey="resolved"
          stroke="rgba(90,255,180,1)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorResolved)"
          isAnimationActive
          animationDuration={700}
          animationEasing="ease-in-out"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

