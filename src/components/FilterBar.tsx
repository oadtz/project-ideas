"use client";

import { VERDICT_COLORS } from "@/lib/types";

interface FilterBarProps {
  active: string;
  onFilter: (verdict: string) => void;
  counts: Record<string, number>;
}

const FILTERS = [
  { key: "ALL", label: "All" },
  { key: "GO", label: "GO" },
  { key: "MAYBE", label: "MAYBE" },
  { key: "KILL", label: "KILL" },
  { key: "WAIT", label: "WAIT/LATER" },
  { key: "MERGE", label: "MERGE" },
];

export default function FilterBar({ active, onFilter, counts }: FilterBarProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {FILTERS.map(({ key, label }) => {
        const isActive = active === key;
        const color = key === "ALL" ? "#3b82f6" : (VERDICT_COLORS[key] || "#64748b");
        const count = key === "ALL"
          ? Object.values(counts).reduce((a, b) => a + b, 0)
          : (key === "WAIT" ? (counts["WAIT"] || 0) + (counts["LATER"] || 0) : counts[key] || 0);

        return (
          <button
            key={key}
            onClick={() => onFilter(key)}
            className="filter-pill flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer"
            style={{
              backgroundColor: isActive ? `${color}20` : "transparent",
              borderColor: isActive ? color : "#334155",
              color: isActive ? color : "#94a3b8",
            }}
          >
            {label}
            <span
              className="inline-flex items-center justify-center min-w-[18px] h-[18px] rounded-full text-[10px] font-bold"
              style={{
                backgroundColor: isActive ? `${color}30` : "#1e293b",
                color: isActive ? color : "#64748b",
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
