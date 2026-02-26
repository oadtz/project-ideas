"use client";

interface StatCardProps {
  value: number;
  label: string;
  color: string;
}

function StatCard({ value, label, color }: StatCardProps) {
  return (
    <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5 text-center hover:border-[#334155] transition-colors">
      <div className="text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-slate-400 text-xs mt-1">{label}</div>
    </div>
  );
}

interface StatsGridProps {
  goCount: number;
  maybeCount: number;
  killCount: number;
  waitCount: number;
  mergeCount: number;
  highestScore: number;
  totalIdeas: number;
}

export default function StatsGrid({
  goCount,
  maybeCount,
  killCount,
  waitCount,
  mergeCount,
  highestScore,
  totalIdeas,
}: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
      <StatCard value={totalIdeas} label="Ideas Analyzed" color="#f8fafc" />
      <StatCard value={goCount} label="GO — Build Now" color="#22c55e" />
      <StatCard value={maybeCount} label="MAYBE — Conditional" color="#eab308" />
      <StatCard value={killCount} label="KILL — Don't Build" color="#ef4444" />
      <StatCard value={waitCount} label="WAIT / LATER" color="#8b5cf6" />
      <StatCard value={mergeCount} label="MERGE into Suites" color="#06b6d4" />
      <StatCard value={highestScore} label="Highest Score /50" color="#3b82f6" />
    </div>
  );
}
