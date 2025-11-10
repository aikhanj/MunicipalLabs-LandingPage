'use client';

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { useMemo } from "react";

const dataPoints = [
  { name: "Mon", incoming: 420, resolved: 280 },
  { name: "Tue", incoming: 510, resolved: 360 },
  { name: "Wed", incoming: 460, resolved: 420 },
  { name: "Thu", incoming: 490, resolved: 470 },
  { name: "Fri", incoming: 520, resolved: 510 }
];

export function InboxTrendChart() {
  const data = useMemo(() => dataPoints, []);

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
        />
        <Area
          type="monotone"
          dataKey="resolved"
          stroke="rgba(90,255,180,1)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorResolved)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

