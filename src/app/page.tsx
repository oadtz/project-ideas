"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import data from "@/data/ideas.json";
import { Idea, Merge, getVerdict } from "@/lib/types";
import StatsGrid from "@/components/StatsGrid";
import ScoringFramework from "@/components/ScoringFramework";
import ScoreChart from "@/components/ScoreChart";
import MergeCards from "@/components/MergeCards";
import IdeasTable from "@/components/IdeasTable";
import LensesView from "@/components/LensesView";
import Timeline from "@/components/Timeline";
import MarketData from "@/components/MarketData";
import { BarChart3, Target, Layers, Table2, Rocket, Database, Eye, ChevronRight } from "lucide-react";

const ideas = data.ideas as Idea[];
const merges = data.merges as Merge[];

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Icon size={16} className="text-blue-400" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-slate-100">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const stats = useMemo(() => {
    const counts: Record<string, number> = {};
    ideas.forEach((i) => {
      const v = getVerdict(i.verdict);
      counts[v] = (counts[v] || 0) + 1;
    });
    return {
      go: counts["GO"] || 0,
      maybe: counts["MAYBE"] || 0,
      kill: counts["KILL"] || 0,
      wait: (counts["WAIT"] || 0) + (counts["LATER"] || 0),
      merge: counts["MERGE"] || 0,
      highest: Math.max(...ideas.map((i) => i.total)),
      total: ideas.length,
    };
  }, []);

  const NAV_ITEMS = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "lenses", label: "3 Lenses", icon: Eye },
    { id: "scoring", label: "Scoring", icon: Target },
    { id: "merges", label: "Merges", icon: Layers },
    { id: "portfolio", label: "Portfolio", icon: Table2 },
    { id: "roadmap", label: "Roadmap", icon: Rocket },
    { id: "market", label: "Market Data", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      {/* Header */}
      <header className="border-b border-[#1e1e2e] sticky top-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div>
                <span className="text-sm font-bold text-slate-100">MuteLab</span>
                <span className="text-xs text-slate-500 ml-2 hidden sm:inline">Decision Dashboard</span>
              </div>
            </div>
            <div className="text-xs text-slate-600">
              Feb 2026 &middot; {ideas.length} Ideas Analyzed
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-1 -mb-px overflow-x-auto pb-px">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeSection === id
                    ? "border-blue-500 text-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                <Icon size={13} />
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 relative z-10">
        {/* Overview */}
        {activeSection === "overview" && (
          <div className="space-y-8 animate-in">
            {/* Stats */}
            <StatsGrid
              goCount={stats.go}
              maybeCount={stats.maybe}
              killCount={stats.kill}
              waitCount={stats.wait}
              mergeCount={stats.merge}
              highestScore={stats.highest}
              totalIdeas={stats.total}
            />

            {/* Context box */}
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider mb-2">Context</div>
                  <p className="text-sm text-slate-400">
                    A portfolio of AI-powered products for the Thai market, built by a CTO
                    (fullstack + blockchain + AI/ML) working part-time (20hr/week) with AI coding agents.
                    MutePDPA has a working prototype.
                  </p>
                </div>
                <div>
                  <div className="text-[10px] text-green-400 font-semibold uppercase tracking-wider mb-2">Scoring</div>
                  <p className="text-sm text-slate-400">
                    8 dimensions, /50 total. All scores are brutally honest with real market data,
                    named competitors, and actual pricing research.
                  </p>
                </div>
                <div>
                  <div className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider mb-2">Key Insight</div>
                  <p className="text-sm text-slate-400">
                    119 individual ideas consolidate into <strong className="text-blue-400">10 mega-products</strong> through
                    strategic merging. Three-lane strategy: Quick Money + Long-term Moats + AI Wave Riders.
                  </p>
                </div>
              </div>
            </div>

            {/* Charts */}
            <ScoreChart ideas={ideas} />

            {/* Quick Top 5 */}
            <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
              <h3 className="text-sm font-semibold text-slate-300 mb-4">Top 5 — Build These First</h3>
              <div className="space-y-2">
                {[...ideas]
                  .sort((a, b) => b.total - a.total)
                  .slice(0, 5)
                  .map((idea, idx) => (
                    <Link
                      key={idea.id}
                      href={`/idea/${idea.id}`}
                      className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-[#1e1e2e] transition-colors text-left"
                    >
                      <span className="text-lg font-bold text-slate-600 min-w-[24px]">{idx + 1}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-200">{idea.name}</div>
                        <div className="text-xs text-slate-500 truncate">{idea.tagline}</div>
                      </div>
                      <span className="text-lg font-bold text-blue-400">{idea.total}</span>
                      <ChevronRight size={14} className="text-slate-600" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* 3 Lenses */}
        {activeSection === "lenses" && (
          <div className="animate-in">
            <SectionHeader
              icon={Eye}
              title="Three Strategic Lenses"
              subtitle="Quick Money + Long-term Survivors + AI Wave Riders — run in parallel"
            />
            <LensesView ideas={ideas} />
          </div>
        )}

        {/* Scoring Framework */}
        {activeSection === "scoring" && (
          <div className="animate-in">
            <SectionHeader icon={Target} title="Scoring Framework" subtitle="8 dimensions, /50 total — brutally honest" />
            <ScoringFramework />
          </div>
        )}

        {/* Merges */}
        {activeSection === "merges" && (
          <div className="animate-in">
            <SectionHeader
              icon={Layers}
              title="Strategic Merges"
              subtitle="119 Ideas → 10 Mega-Products"
            />
            <p className="text-sm text-slate-500 mb-6">
              Many ideas are stronger combined. These merges consolidate overlapping products into defensible suites.
            </p>
            <MergeCards merges={merges} />
          </div>
        )}

        {/* Portfolio Table */}
        {activeSection === "portfolio" && (
          <div className="animate-in">
            <SectionHeader
              icon={Table2}
              title="Full Portfolio"
              subtitle={`${ideas.length} ideas ranked by score — click any row for details`}
            />
            <IdeasTable ideas={ideas} />
          </div>
        )}

        {/* Roadmap */}
        {activeSection === "roadmap" && (
          <div className="animate-in">
            <SectionHeader
              icon={Rocket}
              title="Recommended Launch Sequence"
              subtitle="4 phases over 12 months"
            />
            <Timeline />
          </div>
        )}

        {/* Market Data */}
        {activeSection === "market" && (
          <div className="animate-in">
            <SectionHeader
              icon={Database}
              title="Key Market Data"
              subtitle="Real data with sources — researched Feb 2026"
            />
            <MarketData />
          </div>
        )}
      </main>
    </div>
  );
}
