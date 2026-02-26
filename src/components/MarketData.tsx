"use client";

const MARKET_DATA = [
  {
    category: "Thai Digital Economy",
    stats: [
      { label: "Thai SaaS Market", value: "$1.65B", source: "Mordor Intelligence 2025" },
      { label: "PromptPay Transactions", value: "24.3B/yr", source: "Bank of Thailand 2024" },
      { label: "LINE Thailand Users", value: "54M", source: "LINE 2024" },
      { label: "LINE Official Accounts", value: "6M+", source: "LINE for Business 2024" },
      { label: "Thai Developers", value: "550K+", source: "GitHub/Stack Overflow 2024" },
      { label: "Thai E-Commerce GMV", value: "฿1.1T", source: "ETDA 2024" },
    ],
  },
  {
    category: "PDPA / Compliance",
    stats: [
      { label: "PDPA Fines (2025)", value: "฿21.5M+", source: "PDPC Enforcement Actions" },
      { label: "SMEs Needing Compliance", value: "640K+", source: "DBD Registration Data" },
      { label: "Avg SME Compliance Score", value: "6.19/100", source: "PDPA Compliance Survey" },
      { label: "Global Privacy Software", value: "$5.07B", source: "Grand View Research 2025" },
    ],
  },
  {
    category: "AI / Education",
    stats: [
      { label: "AI Skills Demand Increase", value: "+291%", source: "LinkedIn Economic Graph 2024" },
      { label: "AI Upskilling Market (Global)", value: "$9.3B → $97B", source: "Various 2024-2034" },
      { label: "Thai EdTech Market", value: "$1.76B", source: "Statista 2024" },
      { label: "Thais Using AI Regularly", value: "80%+", source: "We Are Social 2025" },
    ],
  },
  {
    category: "E-Commerce / Social Commerce",
    stats: [
      { label: "TikTok Shop Thailand GMV", value: "$5.9B H1", source: "TikTok Commerce 2025" },
      { label: "TikTok Active Stores", value: "470K", source: "TikTok Seller Center" },
      { label: "LINE Chat Commerce", value: "฿1.14T by 2028", source: "LINE Economic Report" },
      { label: "Social Commerce Market", value: "$5.2B", source: "eMarketer 2024" },
    ],
  },
  {
    category: "Blockchain / Crypto",
    stats: [
      { label: "Thai Crypto Accounts", value: "4M+", source: "SEC Thailand 2024" },
      { label: "Smart Contract Audit Market", value: "$500M+", source: "Industry Estimates" },
      { label: "Thai Household Debt", value: "฿16.35T", source: "Bank of Thailand Q4 2024" },
      { label: "Indebted Thais", value: "28M+", source: "National Credit Bureau" },
    ],
  },
  {
    category: "Proven SaaS Benchmarks",
    stats: [
      { label: "Bolt.new ARR", value: "$40M", source: "GetLatka/TechCrunch" },
      { label: "Lovable ARR", value: "$200M", source: "TechCrunch 2025" },
      { label: "Cursor ARR", value: "$1B+", source: "Various Sources" },
      { label: "Senja MRR", value: "$83K", source: "GetLatka" },
    ],
  },
];

export default function MarketData() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {MARKET_DATA.map((section) => (
        <div
          key={section.category}
          className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5"
        >
          <h4 className="text-sm font-semibold text-blue-400 mb-3">{section.category}</h4>
          <div className="space-y-2.5">
            {section.stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{stat.label}</span>
                <div className="text-right">
                  <span className="text-sm font-bold text-slate-200">{stat.value}</span>
                  <div className="text-[10px] text-slate-600">{stat.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
