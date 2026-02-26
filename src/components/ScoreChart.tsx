"use client";

import { Idea, getVerdict, VERDICT_COLORS } from "@/lib/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";

interface ScoreChartProps {
  ideas: Idea[];
}

export default function ScoreChart({ ideas }: ScoreChartProps) {
  // Score distribution histogram
  const buckets = [
    { range: "45-50", min: 45, max: 50, count: 0 },
    { range: "40-44", min: 40, max: 44, count: 0 },
    { range: "35-39", min: 35, max: 39, count: 0 },
    { range: "30-34", min: 30, max: 34, count: 0 },
    { range: "25-29", min: 25, max: 29, count: 0 },
    { range: "<25", min: 0, max: 24, count: 0 },
  ];
  ideas.forEach((idea) => {
    const bucket = buckets.find((b) => idea.total >= b.min && idea.total <= b.max);
    if (bucket) bucket.count++;
  });

  const bucketColors = ["#22c55e", "#3b82f6", "#eab308", "#f97316", "#ef4444", "#ef4444"];

  // Verdict pie
  const verdictCounts: Record<string, number> = {};
  ideas.forEach((i) => {
    const v = getVerdict(i.verdict);
    verdictCounts[v] = (verdictCounts[v] || 0) + 1;
  });
  const pieData = Object.entries(verdictCounts).map(([name, value]) => ({
    name,
    value,
    fill: VERDICT_COLORS[name] || "#64748b",
  }));

  // Top 10 bar chart
  const top10 = [...ideas].sort((a, b) => b.total - a.total).slice(0, 10);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Score Distribution */}
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
        <h4 className="text-sm font-semibold text-slate-300 mb-4">Score Distribution</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={buckets} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="range" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={50} />
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: "#e2e8f0" }}
              itemStyle={{ color: "#94a3b8" }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {buckets.map((_, idx) => (
                <Cell key={idx} fill={bucketColors[idx]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Verdict Breakdown */}
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
        <h4 className="text-sm font-semibold text-slate-300 mb-4">Verdict Breakdown</h4>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {pieData.map((entry, idx) => (
                <Cell key={idx} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
            />
            <Legend
              verticalAlign="bottom"
              iconSize={8}
              formatter={(value) => <span className="text-xs text-slate-400">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Top 10 */}
      <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
        <h4 className="text-sm font-semibold text-slate-300 mb-4">Top 10 Ideas</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={top10} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" domain={[0, 50]} tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#94a3b8", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={100}
            />
            <Tooltip
              contentStyle={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Bar dataKey="total" radius={[0, 4, 4, 0]}>
              {top10.map((idea, idx) => (
                <Cell
                  key={idx}
                  fill={idea.total >= 44 ? "#22c55e" : idea.total >= 40 ? "#3b82f6" : "#eab308"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
