"use client";

import { Idea, Lens, LENS_CONFIG, getVerdict, getVerdictColor } from "@/lib/types";
import VerdictBadge from "./VerdictBadge";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface LensesViewProps {
  ideas: Idea[];
}

function LensColumn({ lens, ideas }: { lens: Lens; ideas: Idea[] }) {
  const config = LENS_CONFIG[lens];
  const lensIdeas = ideas
    .filter((i) => i.lens === lens)
    .sort((a, b) => b.total - a.total);

  const goIdeas = lensIdeas.filter((i) => getVerdict(i.verdict) === "GO");
  const maybeIdeas = lensIdeas.filter((i) => getVerdict(i.verdict) === "MAYBE");
  const otherIdeas = lensIdeas.filter((i) => !["GO", "MAYBE"].includes(getVerdict(i.verdict)));

  return (
    <div className="flex flex-col">
      {/* Lens header */}
      <div className="rounded-xl p-5 mb-4" style={{ backgroundColor: `${config.color}08`, border: `1px solid ${config.color}25` }}>
        <div className="text-2xl mb-2">{config.icon}</div>
        <h3 className="text-base font-bold text-slate-100 mb-1">{config.label}</h3>
        <p className="text-xs text-slate-500 mb-3">{config.description}</p>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold" style={{ color: config.color }}>{lensIdeas.length}</span>
          <span className="text-xs text-slate-500">ideas</span>
          <span className="text-xs text-slate-600">|</span>
          <span className="text-sm font-bold text-green-400">{goIdeas.length} GO</span>
          <span className="text-xs text-slate-600">|</span>
          <span className="text-sm font-bold text-yellow-400">{maybeIdeas.length} MAYBE</span>
        </div>
      </div>

      {/* Recommended picks */}
      {goIdeas.length > 0 && (
        <div className="mb-3">
          <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider mb-2 px-1">
            Recommended — Build These
          </div>
          <div className="space-y-1.5">
            {goIdeas.map((idea) => (
              <IdeaCard key={idea.id} idea={idea} lensColor={config.color} />
            ))}
          </div>
        </div>
      )}

      {/* Maybe */}
      {maybeIdeas.length > 0 && (
        <div className="mb-3">
          <div className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider mb-2 px-1">
            Conditional — If Resources Allow
          </div>
          <div className="space-y-1.5">
            {maybeIdeas.slice(0, 5).map((idea) => (
              <IdeaCard key={idea.id} idea={idea} lensColor={config.color} compact />
            ))}
            {maybeIdeas.length > 5 && (
              <div className="text-xs text-slate-600 px-3 py-1">+{maybeIdeas.length - 5} more</div>
            )}
          </div>
        </div>
      )}

      {/* Others collapsed */}
      {otherIdeas.length > 0 && (
        <div className="text-xs text-slate-600 px-1 mt-1">
          +{otherIdeas.length} others (KILL/WAIT/MERGE)
        </div>
      )}
    </div>
  );
}

function IdeaCard({ idea, lensColor, compact = false }: { idea: Idea; lensColor: string; compact?: boolean }) {
  return (
    <Link
      href={`/idea/${idea.id}`}
      className="flex items-center gap-3 p-3 rounded-lg bg-[#111118] border border-[#1e1e2e] hover:border-[#334155] transition-colors group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] text-slate-600 font-mono">#{idea.id}</span>
          <span className={`font-medium text-slate-200 ${compact ? "text-xs" : "text-sm"}`}>{idea.name}</span>
        </div>
        {!compact && <div className="text-[11px] text-slate-500 truncate">{idea.tagline}</div>}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold" style={{ color: lensColor }}>{idea.total}</span>
        <VerdictBadge verdict={idea.verdict} />
        <ChevronRight size={12} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
      </div>
    </Link>
  );
}

export default function LensesView({ ideas }: LensesViewProps) {
  const lenses: Lens[] = ["quickwin", "longterm", "aiwave"];

  return (
    <div>
      {/* Intro */}
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5 mb-8">
        <h3 className="text-sm font-bold text-slate-200 mb-2">Three-Lane Strategy</h3>
        <p className="text-sm text-slate-400">
          Run all three lanes in parallel. Quick Money funds the operation. Long-term Survivors build the moat.
          AI Wave Riders position us where the market is heading. Each lane should have at least 1-2 active products.
        </p>
      </div>

      {/* Three columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {lenses.map((lens) => (
          <LensColumn key={lens} lens={lens} ideas={ideas} />
        ))}
      </div>

      {/* Parallel launch recommendation */}
      <div className="mt-8 bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
        <h3 className="text-sm font-bold text-slate-200 mb-3">Recommended Parallel Launch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-lg p-4" style={{ backgroundColor: "#22c55e08", border: "1px solid #22c55e25" }}>
            <div className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-2">⚡ Quick Money Lane</div>
            <div className="text-sm font-medium text-slate-200 mb-1">MutePDPA + MuteLearn content</div>
            <div className="text-xs text-slate-500">Prototype exists + content product = fastest to ฿. Ship month 1.</div>
          </div>
          <div className="rounded-lg p-4" style={{ backgroundColor: "#3b82f608", border: "1px solid #3b82f625" }}>
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2">🏰 Long-term Lane</div>
            <div className="text-sm font-medium text-slate-200 mb-1">MuteCommerce or MuteMINI+</div>
            <div className="text-xs text-slate-500">Platform play with moat. Start building month 2-3, launch month 4-6.</div>
          </div>
          <div className="rounded-lg p-4" style={{ backgroundColor: "#a855f708", border: "1px solid #a855f725" }}>
            <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-2">🌊 AI Wave Lane</div>
            <div className="text-sm font-medium text-slate-200 mb-1">MuteData (ThaiLaw MCP)</div>
            <div className="text-xs text-slate-500">Data for AI agents. First-mover in Thai data APIs. Build month 1-2.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
