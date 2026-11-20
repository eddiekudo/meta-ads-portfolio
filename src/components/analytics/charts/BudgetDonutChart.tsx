import React, { useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { funnelBudgetSplitData, placementSplitData } from "@/data/campaignData";
import { PieChart as PieIcon } from "lucide-react";

interface BudgetItem {
  name: string;
  value: number;
  amount: string;
  color: string;
  role?: string;
}

export const BudgetDonutChart: React.FC = () => {
  const [splitMode, setSplitMode] = useState<"funnel" | "placement">("funnel");

  const currentData: BudgetItem[] = splitMode === "funnel" ? funnelBudgetSplitData : placementSplitData;

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-4 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
            <PieIcon className="w-4 h-4 text-notion-primary" />
            Budget & Placement Distribution
          </h3>
          <p className="text-xs text-notion-steel dark:text-notion-dark-muted mt-0.5">
            {splitMode === "funnel"
              ? "Healthy 55/25/20 funnel split preventing audience saturation."
              : "Creative placement weighting tuned for high-retention short-form video."}
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-notion-surface dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline p-0.5 rounded-full text-xs self-start sm:self-auto">
          <button
            onClick={() => setSplitMode("funnel")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              splitMode === "funnel"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            Funnel Stage Split
          </button>
          <button
            onClick={() => setSplitMode("placement")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              splitMode === "placement"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            Placement Split
          </button>
        </div>
      </div>

      {/* Donut Chart & Legend Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 pt-2">
        <div className="h-60 w-full md:w-1/2 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const d = payload[0].payload;
                    return (
                      <div className="rounded-lg p-3 bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion text-xs space-y-1 font-sans">
                        <div className="font-semibold text-notion-ink dark:text-notion-dark-text border-b border-notion-hairline dark:border-notion-dark-hairline pb-1">
                          {d.name}
                        </div>
                        <div className="flex items-center justify-between gap-4 text-notion-slate dark:text-notion-dark-muted">
                          <span>Share:</span>
                          <span className="font-mono font-bold text-notion-ink dark:text-notion-dark-text">
                            {d.value}%
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4 text-notion-slate dark:text-notion-dark-muted">
                          <span>Spend:</span>
                          <span className="font-mono font-bold text-notion-primary dark:text-sky-400">
                            {d.amount}
                          </span>
                        </div>
                        {d.role && (
                          <p className="text-[10px] text-notion-steel dark:text-notion-dark-muted pt-1">
                            {d.role}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Pie
                data={currentData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={4}
                dataKey="value"
              >
                {currentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Donut Center Total Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] uppercase tracking-wider text-notion-steel dark:text-notion-dark-muted font-bold font-mono">
              Total Budget
            </span>
            <span className="text-xl font-bold font-mono text-notion-ink dark:text-notion-dark-text">
              ₹18,500
            </span>
            <span className="text-[10px] text-notion-green font-mono font-semibold">
              100% Allocated
            </span>
          </div>
        </div>

        {/* Legend Tiles */}
        <div className="w-full md:w-1/2 space-y-2.5">
          {currentData.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-notion-surface/50 dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <span className="font-semibold text-notion-ink dark:text-notion-dark-text block">
                    {item.name}
                  </span>
                  {item.role && (
                    <span className="text-[10px] text-notion-steel dark:text-notion-dark-muted">
                      {item.role}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="font-mono font-bold text-notion-ink dark:text-notion-dark-text block">
                  {item.value}%
                </span>
                <span className="font-mono text-[11px] text-notion-steel dark:text-notion-dark-muted">
                  {item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
