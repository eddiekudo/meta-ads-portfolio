import React from "react";
import { funnelSteps } from "@/data/campaignData";
import { Filter, Activity } from "lucide-react";

export const FunnelWaterfall: React.FC = () => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-5 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
          <Filter className="w-4 h-4 text-notion-primary" />
          Full-Funnel Drop-Off
        </h3>
        <span className="text-xs font-mono text-notion-green dark:text-emerald-400 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-notion-mint dark:bg-emerald-950/60 border border-notion-hairline dark:border-emerald-800/40 font-semibold">
          <Activity className="w-3.5 h-3.5" /> 77 Purchases
        </span>
      </div>

      {/* Waterfall Steps */}
      <div className="space-y-3.5">
        {funnelSteps.map((step, idx) => {
          const widthPercent = Math.max(20, 100 - idx * 15);

          return (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-notion-surface dark:bg-notion-dark-surface text-notion-steel dark:text-notion-dark-muted font-mono text-[10px] flex items-center justify-center font-bold border border-notion-hairline dark:border-notion-dark-hairline">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-notion-charcoal dark:text-notion-dark-text">
                    {step.step}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-notion-ink dark:text-notion-dark-text">
                    {step.count}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-notion-green dark:text-emerald-400 w-12 text-right">
                    {step.rate}
                  </span>
                </div>
              </div>

              <div className="w-full h-2 rounded-full bg-notion-surface dark:bg-notion-dark-surface border border-notion-hairline-soft dark:border-notion-dark-hairline overflow-hidden">
                <div
                  className="h-full rounded-full bg-notion-primary"
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
