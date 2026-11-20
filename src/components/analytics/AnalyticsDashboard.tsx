import React from "react";
import { campaignOverview } from "@/data/campaignData";
import { KpiMetricsGrid } from "./KpiMetricsGrid";
import { ScalingComboChart } from "./charts/ScalingComboChart";
import { FunnelStepChart } from "./charts/FunnelStepChart";
import { CpaTimelineChart } from "./charts/CpaTimelineChart";
import { CreativeComparisonChart } from "./charts/CreativeComparisonChart";
import { BudgetDonutChart } from "./charts/BudgetDonutChart";

export const AnalyticsDashboard: React.FC = () => {
  return (
    <section id="analytics-command-center" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-8 scroll-mt-20">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-notion-hairline dark:border-notion-dark-hairline pb-4 transition-colors">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-notion-ink dark:text-notion-dark-text tracking-tight">
            Campaign Performance & Interactive Analytics
          </h2>
          <p className="text-notion-steel dark:text-notion-dark-muted text-xs mt-1">
            Organic B • 14-Day Pilot Sprint • ₹18,500 Spend → ₹68,450 Revenue (3.70x ROAS)
          </p>
        </div>
      </div>

      {/* All Analytics & Graphs Viewable While Scrolling */}
      <div className="space-y-8">
        <KpiMetricsGrid metrics={campaignOverview} />
        <ScalingComboChart />
        <CpaTimelineChart />
        <FunnelStepChart />
        <BudgetDonutChart />
        <CreativeComparisonChart />
      </div>
    </section>
  );
};
