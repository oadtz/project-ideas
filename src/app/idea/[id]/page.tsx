import Link from "next/link";
import data from "@/data/ideas.json";
import { Idea, Scores, DIMENSION_LABELS, LENS_CONFIG, Lens, getVerdict, getVerdictColor } from "@/lib/types";
import ScoreBar from "@/components/ScoreBar";
import { ArrowLeft, ChevronRight } from "lucide-react";

const ideas = data.ideas as Idea[];

export function generateStaticParams() {
  return ideas.map((idea) => ({ id: String(idea.id) }));
}

function getScoreColor(score: number, max: number): string {
  const pct = (score / max) * 100;
  if (pct >= 80) return "#22c55e";
  if (pct >= 60) return "#eab308";
  if (pct >= 40) return "#f97316";
  return "#ef4444";
}

export default async function IdeaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const idea = ideas.find((i) => i.id === id);

  if (!idea) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-xl font-bold text-slate-200 mb-2">Idea #{id} not found</h1>
          <Link href="/" className="text-blue-400 text-sm hover:underline">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  const verdict = getVerdict(idea.verdict);
  const verdictColor = getVerdictColor(idea.verdict);
  const lens = LENS_CONFIG[idea.lens as Lens];
  const dims = Object.entries(DIMENSION_LABELS) as [keyof Scores, (typeof DIMENSION_LABELS)[keyof Scores]][];
  const relatedIdeas = idea.merge_with
    ? ideas.filter((i) => idea.merge_with!.includes(i.id))
    : [];

  // Find rank
  const sorted = [...ideas].sort((a, b) => b.total - a.total);
  const rank = sorted.findIndex((i) => i.id === idea.id) + 1;

  // Prev/Next by score order
  const prevIdea = rank > 1 ? sorted[rank - 2] : null;
  const nextIdea = rank < sorted.length ? sorted[rank] : null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e1e2e]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm">
            <ArrowLeft size={14} /> Dashboard
          </Link>
          <div className="flex items-center gap-3">
            {prevIdea && (
              <Link href={`/idea/${prevIdea.id}`} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                ← #{prevIdea.id}
              </Link>
            )}
            <span className="text-xs text-slate-600 font-mono">#{idea.id}</span>
            {nextIdea && (
              <Link href={`/idea/${nextIdea.id}`} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                #{nextIdea.id} →
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 relative z-10">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
              style={{ color: lens.color, borderColor: `${lens.color}40`, backgroundColor: `${lens.color}10` }}>
              {lens.icon} {lens.label}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
              style={{ color: verdictColor, borderColor: `${verdictColor}40`, backgroundColor: `${verdictColor}10` }}>
              {verdict}
            </span>
            <span className="text-[10px] text-slate-500 px-2 py-1 bg-slate-800/50 rounded-full">{idea.category}</span>
            <span className="text-[10px] text-slate-500 px-2 py-1 bg-slate-800/50 rounded-full">{idea.type}</span>
            {idea.status === "prototype" && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                Prototype Ready
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2 tracking-tight">{idea.name}</h1>
          <p className="text-lg text-slate-400 mb-6">{idea.tagline}</p>

          {/* Score banner */}
          <div className="inline-flex items-center gap-6 bg-[#111118] border border-[#1e1e2e] rounded-xl px-6 py-4 mb-6">
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Score</div>
              <div className="text-3xl font-bold text-blue-400">
                {idea.total}<span className="text-slate-500 text-base">/50</span>
              </div>
            </div>
            <div className="h-10 w-px bg-[#1e1e2e]" />
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Rank</div>
              <div className="text-3xl font-bold text-slate-200">
                #{rank}<span className="text-slate-500 text-base">/{ideas.length}</span>
              </div>
            </div>
            <div className="h-10 w-px bg-[#1e1e2e]" />
            <div className="w-36">
              <ScoreBar score={idea.total} max={50} size="md" showLabel={false} />
            </div>
          </div>

          {/* Key stats from TAM/SAM/SOM */}
          {idea.tam && (
            <div className="flex gap-6 flex-wrap">
              {idea.tam && <Stat label="TAM" value={idea.tam.split(".")[0]} />}
              {idea.sam && <Stat label="SAM" value={idea.sam.split(".")[0].split("—")[0]} />}
              {idea.som && <Stat label="SOM" value={idea.som.split(".")[0]} />}
            </div>
          )}
        </section>

        {/* 8 Dimension Breakdown */}
        <Section label="Score Breakdown" title="8-Dimension Analysis">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {dims.map(([key, dim]) => {
              const score = idea.scores[key] || 0;
              const color = getScoreColor(score, dim.max);
              return (
                <div key={key} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{dim.short}</span>
                    <span className="text-lg font-bold" style={{ color }}>{score}<span className="text-slate-600 text-xs">/{dim.max}</span></span>
                  </div>
                  <ScoreBar score={score} max={dim.max} size="md" />
                  <div className="text-[10px] text-slate-500 mt-2">{dim.full}</div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Market & Competition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Market Size */}
          {idea.tam && (
            <DetailCard color="#3b82f6" label="Market Size (TAM / SAM / SOM)">
              <div className="space-y-3">
                {idea.tam && <DataRow label="TAM" value={idea.tam} />}
                {idea.sam && <DataRow label="SAM" value={idea.sam} />}
                {idea.som && <DataRow label="SOM" value={idea.som} />}
              </div>
            </DetailCard>
          )}

          {/* Competition */}
          <DetailCard color="#ef4444" label="Competitive Landscape">
            <p className="text-sm text-slate-300 leading-relaxed">{idea.competitors}</p>
          </DetailCard>
        </div>

        {/* Solution Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {idea.monetization_detail && (
            <DetailCard color="#22c55e" label="Monetization — Who Pays & How Much">
              <p className="text-sm text-slate-300 leading-relaxed">{idea.monetization_detail}</p>
            </DetailCard>
          )}

          {idea.distribution_detail && (
            <DetailCard color="#eab308" label="Distribution — How to Reach Customers">
              <p className="text-sm text-slate-300 leading-relaxed">{idea.distribution_detail}</p>
              {idea.first_100 && (
                <div className="mt-4 pt-4 border-t border-[#1e1e2e]">
                  <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">First 100 Users</div>
                  <p className="text-sm text-slate-400">{idea.first_100}</p>
                </div>
              )}
            </DetailCard>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {idea.technical_detail && (
            <DetailCard color="#8b5cf6" label="Technical Feasibility">
              <p className="text-sm text-slate-300 leading-relaxed">{idea.technical_detail}</p>
            </DetailCard>
          )}

          {idea.timing_detail && (
            <DetailCard color="#06b6d4" label="Timing — Why Now?">
              <p className="text-sm text-slate-300 leading-relaxed">{idea.timing_detail}</p>
            </DetailCard>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {idea.founder_fit_detail && (
            <DetailCard color="#f97316" label="Founder-Market Fit">
              <p className="text-sm text-slate-300 leading-relaxed">{idea.founder_fit_detail}</p>
            </DetailCard>
          )}

          {/* Merge Strategy */}
          {idea.merge_note && (
            <DetailCard color="#60a5fa" label="Merge Strategy">
              <p className="text-sm text-slate-300 leading-relaxed mb-3">{idea.merge_note}</p>
              {relatedIdeas.length > 0 && (
                <div className="space-y-2">
                  {relatedIdeas.map((ri) => (
                    <Link
                      key={ri.id}
                      href={`/idea/${ri.id}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-[#0a0a0f] hover:bg-[#1e1e2e] transition-colors"
                    >
                      <span className="text-xs text-blue-400 font-mono min-w-[32px]">#{ri.id}</span>
                      <span className="text-sm text-slate-300 flex-1">{ri.name}</span>
                      <span className="text-xs font-bold text-slate-500">{ri.total}/50</span>
                      <ChevronRight size={12} className="text-slate-600" />
                    </Link>
                  ))}
                </div>
              )}
            </DetailCard>
          )}
        </div>

        {/* Verdict */}
        <section className="mb-10">
          <div className="bg-[#111118] border-2 rounded-2xl p-6" style={{ borderColor: `${verdictColor}30` }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl font-bold" style={{ color: verdictColor }}>{verdict}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ color: lens.color, backgroundColor: `${lens.color}15` }}>
                {lens.icon} {lens.label}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">{idea.verdict}</p>
          </div>
        </section>

        {/* Back to dashboard */}
        <div className="text-center py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111118] border border-[#1e1e2e] text-sm text-slate-400 hover:text-slate-200 hover:border-[#334155] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{label}</span>
      <span className="text-sm text-slate-300 font-medium">{value}</span>
    </div>
  );
}

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-1">{label}</div>
      <h2 className="text-lg font-bold text-slate-100 mb-4">{title}</h2>
      {children}
    </section>
  );
}

function DetailCard({ color, label, children }: { color: string; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5" style={{ borderLeftColor: color, borderLeftWidth: 3 }}>
      <div className="text-[10px] font-bold uppercase tracking-wider mb-3" style={{ color }}>{label}</div>
      {children}
    </div>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{label}: </span>
      <span className="text-sm text-slate-300">{value}</span>
    </div>
  );
}
