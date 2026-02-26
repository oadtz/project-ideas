"use client";

import { DIMENSION_LABELS, Scores } from "@/lib/types";

const DIM_DETAILS: Record<keyof Scores, string> = {
  market: "TAM/SAM/SOM with real data. Distribution + monetization > TAM.",
  competition: "Real competitors with names, funding, pricing. English AND Thai research. Higher = less competition.",
  monetization: "Who pays, how much, evidence of willingness. Revenue model clarity.",
  distribution: "Channels to reach paying customers. CAC estimate. Path to first 100 users.",
  technical: "AI coding agents = 10-50x faster. 8-10/10 unless physical work, heavy regulation, or partnerships needed.",
  founder_fit: "Solo CTO (Thai-English, 20hr/week) + AI coding agents. Weak: in-person BD/sales.",
  timing: "Why now? Regulatory tailwinds, market gaps, technology readiness.",
  ai_era: "Is this a new category enabled by AI? Or existing market with AI enhancement?",
};

const DIM_COLORS: Record<keyof Scores, string> = {
  market: "#3b82f6",
  competition: "#ef4444",
  monetization: "#22c55e",
  distribution: "#eab308",
  technical: "#8b5cf6",
  founder_fit: "#f97316",
  timing: "#06b6d4",
  ai_era: "#ec4899",
};

export default function ScoringFramework() {
  const dims = Object.entries(DIMENSION_LABELS) as [keyof Scores, typeof DIMENSION_LABELS[keyof Scores]][];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {dims.map(([key, dim]) => (
        <div
          key={key}
          className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-4 hover:border-[#334155] transition-colors"
          style={{ borderTopColor: DIM_COLORS[key], borderTopWidth: 2 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: DIM_COLORS[key] }}>
              {dim.short}
            </span>
            <span className="text-xs text-slate-500">/{dim.max}</span>
          </div>
          <div className="text-sm font-medium text-slate-300 mb-1">{dim.full}</div>
          <p className="text-xs text-slate-500">{DIM_DETAILS[key]}</p>
        </div>
      ))}
    </div>
  );
}
