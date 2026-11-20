import { useState } from "react";
import type { CampaignMetrics } from "@/types/campaign";
import {
  TrendingUp,
  DollarSign,
  Eye,
  MousePointer,
  ShoppingBag,
  Zap,
  ShieldCheck,
} from "lucide-react";

interface KpiMetricsGridProps {
  metrics: CampaignMetrics;
}

export const KpiMetricsGrid: React.FC<KpiMetricsGridProps> = ({ metrics }) => {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const exchangeRate = 83.2;
  const formatMoney = (val: number) => {
    if (currency === "USD") {
      return `$${Math.round(val / exchangeRate).toLocaleString()}`;
    }
    return `₹${val.toLocaleString()}`;
  };

  const cards = [
    {
      title: "Blended ROAS",
      value: `${metrics.blendedRoas}x`,
      badge: "+36% vs Target",
      badgeClass: "bg-notion-mint dark:bg-emerald-950/60 text-notion-green dark:text-emerald-400 border border-notion-hairline dark:border-emerald-800/40",
      sub: `Target: ${metrics.targetRoas}x`,
      icon: TrendingUp,
      iconClass: "text-notion-green dark:text-emerald-400 bg-notion-mint/40 dark:bg-emerald-950/40",
    },
    {
      title: "Attributed Revenue",
      value: formatMoney(metrics.totalRevenue),
      badge: `From ${formatMoney(metrics.totalSpend)} spend`,
      badgeClass: "bg-notion-sky dark:bg-sky-950/60 text-notion-ink dark:text-sky-300 border border-notion-hairline dark:border-sky-800/40",
      sub: "7-day click attribution",
      icon: DollarSign,
      iconClass: "text-notion-primary dark:text-sky-400 bg-notion-sky/40 dark:bg-sky-950/40",
    },
    {
      title: "3s Hook Rate",
      value: `${metrics.thumbStopRate}%`,
      badge: "2.1x Industry Avg",
      badgeClass: "bg-notion-yellow dark:bg-amber-950/60 text-notion-charcoal dark:text-amber-300 border border-notion-hairline dark:border-amber-800/40",
      sub: `Avg benchmark: ${metrics.industryAvgThumbStop}%`,
      icon: Eye,
      iconClass: "text-notion-orange dark:text-amber-400 bg-notion-yellow/40 dark:bg-amber-950/40",
    },
    {
      title: "Outbound Link CTR",
      value: `${metrics.linkCtr}%`,
      badge: "Top 5% Benchmark",
      badgeClass: "bg-notion-lavender dark:bg-purple-950/60 text-notion-purple-tag dark:text-purple-300 border border-notion-hairline dark:border-purple-800/40",
      sub: `Industry avg: ${metrics.industryAvgCtr}%`,
      icon: MousePointer,
      iconClass: "text-notion-primary dark:text-purple-400 bg-notion-lavender/40 dark:bg-purple-950/40",
    },
    {
      title: "Cost Per Order (CPA)",
      value: formatMoney(metrics.costPerAcquisition),
      badge: "-30% vs Target",
      badgeClass: "bg-notion-peach dark:bg-orange-950/60 text-notion-orange-deep dark:text-orange-300 border border-notion-hairline dark:border-orange-800/40",
      sub: `Target was ${formatMoney(metrics.targetCpa)}`,
      icon: ShoppingBag,
      iconClass: "text-notion-orange-deep dark:text-orange-400 bg-notion-peach/40 dark:bg-orange-950/40",
    },
    {
      title: "Ad Frequency",
      value: `${metrics.adFrequency}`,
      badge: "Fatigue Protected",
      badgeClass: "bg-notion-gray dark:bg-zinc-800 text-notion-slate dark:text-zinc-300 border border-notion-hairline dark:border-zinc-700",
      sub: `Cap: ${metrics.fatigueThreshold}`,
      icon: ShieldCheck,
      iconClass: "text-notion-slate dark:text-zinc-300 bg-notion-gray dark:bg-zinc-800",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header with Currency Switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-notion-hairline dark:border-notion-dark-hairline transition-colors">
        <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
          <Zap className="w-4 h-4 text-notion-primary" />
          Key Campaign Numbers
        </h3>

        <div className="flex items-center gap-1 bg-notion-surface dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline p-0.5 rounded-full text-xs">
          <button
            onClick={() => setCurrency("INR")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              currency === "INR"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            ₹ INR
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              currency === "USD"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            $ USD
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline flex flex-col justify-between gap-3 shadow-notion hover:border-notion-hairline-strong dark:hover:border-notion-steel transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-notion-steel dark:text-notion-dark-muted block font-medium">
                    {card.title}
                  </span>
                  <span className="text-2xl font-bold text-notion-ink dark:text-notion-dark-text font-mono mt-0.5 block tracking-tight">
                    {card.value}
                  </span>
                </div>
                <div className={`p-2 rounded-md ${card.iconClass}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-notion-hairline-soft dark:border-notion-dark-hairline">
                <span className={`px-2 py-0.5 rounded font-semibold ${card.badgeClass}`}>
                  {card.badge}
                </span>
                <span className="text-notion-stone dark:text-notion-dark-muted font-mono text-[10px]">
                  {card.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
