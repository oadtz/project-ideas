"use client";

import { Merge } from "@/lib/types";

interface MergeCardsProps {
  merges: Merge[];
}

export default function MergeCards({ merges }: MergeCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {merges
        .sort((a, b) => b.combined_score - a.combined_score)
        .map((merge) => (
          <div key={merge.name} className="merge-card rounded-xl p-5 relative overflow-hidden">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-blue-400 font-bold text-base">
                {merge.combined_score >= 42 ? "🔥 " : ""}
                {merge.name}
              </h4>
              <span className="text-blue-300 font-bold text-lg">
                {merge.combined_score}<span className="text-slate-500 text-xs">/50</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-3">{merge.description}</p>
            <div className="flex gap-1.5 flex-wrap mb-3">
              {merge.ids.map((id) => (
                <span
                  key={id}
                  className="text-[11px] px-2 py-0.5 bg-blue-500/15 text-blue-300 rounded-md font-mono border border-blue-500/20"
                >
                  #{id}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              <strong className="text-slate-400">Why merge:</strong> {merge.rationale}
            </p>
          </div>
        ))}
    </div>
  );
}
