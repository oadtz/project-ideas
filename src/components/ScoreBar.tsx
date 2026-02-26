"use client";

interface ScoreBarProps {
  score: number;
  max: number;
  showLabel?: boolean;
  size?: "sm" | "md";
}

export function getScoreColor(score: number, max: number): string {
  const pct = (score / max) * 100;
  if (pct >= 80) return "#22c55e";
  if (pct >= 60) return "#eab308";
  if (pct >= 40) return "#f97316";
  return "#ef4444";
}

export default function ScoreBar({ score, max, showLabel = false, size = "sm" }: ScoreBarProps) {
  const pct = (score / max) * 100;
  const color = getScoreColor(score, max);
  const height = size === "sm" ? "h-1.5" : "h-2.5";

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 bg-slate-800 rounded-full ${height} overflow-hidden`}>
        <div
          className={`${height} rounded-full transition-all duration-500`}
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-bold min-w-[24px] text-right" style={{ color }}>
          {score}
        </span>
      )}
    </div>
  );
}
