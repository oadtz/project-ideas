"use client";

const PHASES = [
  {
    label: "Phase 1: Immediate (Month 1-2)",
    color: "#22c55e",
    items: [
      { name: "MutePDPA", note: "Prototype exists. Ship free scanner → paid tiers. Fear-driven purchase." },
      { name: "MuteLearn", note: "Content product. '7 AI Tools Every Thai Professional Needs' guide → paid toolkit → community." },
    ],
  },
  {
    label: "Phase 2: Fast Follow (Month 2-4)",
    color: "#3b82f6",
    items: [
      { name: "MuteData", note: "Start structuring Thai legal + business data. MCP servers for Claude/GPT. API-first." },
      { name: "MuteChain", note: "Crypto tax season tool → January 2027. Build audit pipeline." },
    ],
  },
  {
    label: "Phase 3: Growth (Month 4-8)",
    color: "#eab308",
    items: [
      { name: "MuteCommerce", note: "E-commerce seller suite. Start with TikTok Spy → add live coach → listing optimizer." },
      { name: "MuteMINI+", note: "LINE MINI App builder. High retention platform play. Start with restaurant template." },
    ],
  },
  {
    label: "Phase 4: Scale (Month 8-12+)",
    color: "#8b5cf6",
    items: [
      { name: "MuteGreen+", note: "ESG reporting for 2027 Climate Act. Enterprise sales when MuteLab has revenue." },
      { name: "x402 / MuteProtocol", note: "Agent-to-agent payments. Build in background, launch when market exists." },
    ],
  },
];

export default function Timeline() {
  return (
    <div className="relative pl-6">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 via-yellow-500 to-purple-500" />

      <div className="space-y-8">
        {PHASES.map((phase) => (
          <div key={phase.label} className="relative">
            {/* Dot */}
            <div
              className="absolute -left-[15px] top-1 w-3 h-3 rounded-full border-2 border-[#0a0a0f]"
              style={{ backgroundColor: phase.color }}
            />
            <div className="mb-3">
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: phase.color }}
              >
                {phase.label}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {phase.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#111118] border border-[#1e1e2e] rounded-lg p-4 hover:border-[#334155] transition-colors"
                >
                  <div className="font-semibold text-slate-200 text-sm mb-1">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
