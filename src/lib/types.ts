export interface Scores {
  market: number;
  competition: number;
  monetization: number;
  distribution: number;
  technical: number;
  founder_fit: number;
  timing: number;
  ai_era: number;
}

export type Lens = "quickwin" | "longterm" | "aiwave";

export interface Idea {
  id: number;
  name: string;
  tagline: string;
  category: string;
  type: string;
  status: string;
  scores: Scores;
  total: number;
  lens: Lens;
  tam?: string;
  sam?: string;
  som?: string;
  competitors: string;
  monetization_detail?: string;
  distribution_detail?: string;
  technical_detail?: string;
  timing_detail?: string;
  founder_fit_detail?: string;
  first_100?: string;
  merge_with?: number[];
  merge_note?: string;
  verdict: string;
}

export const LENS_CONFIG: Record<Lens, { label: string; icon: string; color: string; description: string }> = {
  quickwin: {
    label: "Quick Money",
    icon: "⚡",
    color: "#22c55e",
    description: "Revenue within 3-6 months. Content products, templates, prototypes, seasonal tools.",
  },
  longterm: {
    label: "Long-term Survivors",
    icon: "🏰",
    color: "#3b82f6",
    description: "Defensible moats that survive the AI era. Platform plays, data moats, network effects.",
  },
  aiwave: {
    label: "AI Wave Riders",
    icon: "🌊",
    color: "#a855f7",
    description: "Products needed BY the AI economy. Data for agents, AI upskilling, MCP infrastructure.",
  },
};

export interface Merge {
  name: string;
  ids: number[];
  description: string;
  combined_score: number;
  rationale: string;
}

export type Verdict = "GO" | "MAYBE" | "KILL" | "WAIT" | "LATER" | "MERGE" | "ALL";

export interface DataStore {
  ideas: Idea[];
  merges: Merge[];
}

export const VERDICT_COLORS: Record<string, string> = {
  GO: "#22c55e",
  MAYBE: "#eab308",
  KILL: "#ef4444",
  WAIT: "#8b5cf6",
  LATER: "#8b5cf6",
  MERGE: "#06b6d4",
};

export const DIMENSION_LABELS: Record<keyof Scores, { short: string; full: string; max: number }> = {
  market: { short: "MKT", full: "Market Size", max: 7 },
  competition: { short: "CMP", full: "Competition (less=better)", max: 7 },
  monetization: { short: "MON", full: "Monetization", max: 6 },
  distribution: { short: "DST", full: "Distribution", max: 6 },
  technical: { short: "TEC", full: "Technical Feasibility", max: 7 },
  founder_fit: { short: "FIT", full: "Founder-Market Fit", max: 7 },
  timing: { short: "TMG", full: "Timing (Why Now?)", max: 5 },
  ai_era: { short: "AI", full: "AI-Era Opportunity", max: 5 },
};

export function getVerdict(verdict: string): string {
  return verdict.split("—")[0].split(" ")[0].trim().toUpperCase();
}

export function getVerdictColor(verdict: string): string {
  const v = getVerdict(verdict);
  return VERDICT_COLORS[v] || "#64748b";
}
