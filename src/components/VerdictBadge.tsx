"use client";

import { getVerdict, getVerdictColor } from "@/lib/types";

interface VerdictBadgeProps {
  verdict: string;
  size?: "sm" | "md";
}

export default function VerdictBadge({ verdict, size = "sm" }: VerdictBadgeProps) {
  const v = getVerdict(verdict);
  const color = getVerdictColor(verdict);
  const padding = size === "sm" ? "px-2.5 py-0.5" : "px-3 py-1";
  const textSize = size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <span
      className={`inline-flex items-center ${padding} rounded-full ${textSize} font-semibold tracking-wide`}
      style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40` }}
    >
      {v}
    </span>
  );
}
