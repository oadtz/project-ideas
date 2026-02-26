"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Idea, getVerdict, DIMENSION_LABELS, Scores, LENS_CONFIG, Lens } from "@/lib/types";
import VerdictBadge from "./VerdictBadge";
import { getScoreColor } from "./ScoreBar";
import { ChevronUp, ChevronDown, Search } from "lucide-react";
import FilterBar from "./FilterBar";

interface IdeasTableProps {
  ideas: Idea[];
}

type SortKey = "id" | "name" | "total" | "category" | keyof Scores;
type SortDir = "asc" | "desc";

export default function IdeasTable({ ideas }: IdeasTableProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [sortKey, setSortKey] = useState<SortKey>("total");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    ideas.forEach((idea) => {
      const v = getVerdict(idea.verdict);
      c[v] = (c[v] || 0) + 1;
    });
    return c;
  }, [ideas]);

  const filtered = useMemo(() => {
    let list = [...ideas];

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.tagline.toLowerCase().includes(q) ||
          i.category.toLowerCase().includes(q) ||
          i.verdict.toLowerCase().includes(q) ||
          String(i.id).includes(q)
      );
    }

    if (filter !== "ALL") {
      list = list.filter((i) => {
        const v = getVerdict(i.verdict);
        if (filter === "WAIT") return v === "WAIT" || v === "LATER";
        return v === filter;
      });
    }

    list.sort((a, b) => {
      let av: string | number, bv: string | number;
      if (sortKey === "id") { av = a.id; bv = b.id; }
      else if (sortKey === "name") { av = a.name.toLowerCase(); bv = b.name.toLowerCase(); }
      else if (sortKey === "total") { av = a.total; bv = b.total; }
      else if (sortKey === "category") { av = a.category.toLowerCase(); bv = b.category.toLowerCase(); }
      else { av = a.scores[sortKey as keyof Scores] || 0; bv = b.scores[sortKey as keyof Scores] || 0; }
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [ideas, search, filter, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("desc"); }
  }

  function SortIcon({ column }: { column: SortKey }) {
    if (sortKey !== column) return null;
    return sortDir === "desc" ? <ChevronDown size={12} className="inline ml-0.5" /> : <ChevronUp size={12} className="inline ml-0.5" />;
  }

  const dimKeys = Object.keys(DIMENSION_LABELS) as (keyof Scores)[];

  return (
    <div>
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search ideas by name, category, or verdict..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-[#111118] border border-[#1e1e2e] rounded-lg text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
        />
        {search && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500">
            {filtered.length} results
          </span>
        )}
      </div>

      <div className="mb-4">
        <FilterBar active={filter} onFilter={setFilter} counts={counts} />
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#1e1e2e]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#111118]">
              <th onClick={() => handleSort("id")} className="px-3 py-3 text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-300 transition-colors">
                # <SortIcon column="id" />
              </th>
              <th onClick={() => handleSort("name")} className="px-3 py-3 text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-300 transition-colors min-w-[200px]">
                Name <SortIcon column="name" />
              </th>
              <th className="px-2 py-3 text-center text-[10px] font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">
                Lens
              </th>
              <th onClick={() => handleSort("category")} className="px-3 py-3 text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-300 transition-colors hidden lg:table-cell">
                Category <SortIcon column="category" />
              </th>
              {dimKeys.map((key) => (
                <th key={key} onClick={() => handleSort(key)} className="px-2 py-3 text-center text-[10px] font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-300 transition-colors hidden md:table-cell" title={DIMENSION_LABELS[key].full}>
                  {DIMENSION_LABELS[key].short} <SortIcon column={key} />
                </th>
              ))}
              <th onClick={() => handleSort("total")} className="px-3 py-3 text-center text-[10px] font-semibold text-slate-200 uppercase tracking-wider cursor-pointer hover:text-white transition-colors">
                Total <SortIcon column="total" />
              </th>
              <th className="px-3 py-3 text-center text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((idea) => {
              const lensConfig = LENS_CONFIG[idea.lens as Lens];
              return (
                <tr
                  key={idea.id}
                  onClick={() => router.push(`/idea/${idea.id}`)}
                  className="idea-row border-b border-[#1e1e2e] cursor-pointer"
                >
                  <td className="px-3 py-2.5 text-xs text-slate-500 font-mono">{idea.id}</td>
                  <td className="px-3 py-2.5">
                    <div className="text-sm font-medium text-slate-200">{idea.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{idea.tagline}</div>
                  </td>
                  <td className="px-2 py-2.5 text-center hidden lg:table-cell">
                    {lensConfig && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ color: lensConfig.color, backgroundColor: `${lensConfig.color}15` }}>
                        {lensConfig.icon}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-slate-500 hidden lg:table-cell">{idea.category}</td>
                  {dimKeys.map((key) => {
                    const score = idea.scores[key] || 0;
                    const max = DIMENSION_LABELS[key].max;
                    const color = getScoreColor(score, max);
                    return (
                      <td key={key} className="px-2 py-2.5 text-center hidden md:table-cell">
                        <span className="score-cell text-xs font-bold" style={{ color }}>{score}</span>
                      </td>
                    );
                  })}
                  <td className="px-3 py-2.5 text-center">
                    <span className="text-sm font-bold" style={{ color: idea.total >= 42 ? "#22c55e" : idea.total >= 36 ? "#eab308" : "#ef4444" }}>
                      {idea.total}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-center">
                    <VerdictBadge verdict={idea.verdict} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">No ideas match your search.</div>
        )}
      </div>
    </div>
  );
}
