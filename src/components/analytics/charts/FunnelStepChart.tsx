import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { funnelChartData } from "@/data/campaignData";
import { Filter, Activity } from "lucide-react";

export const FunnelStepChart: React.FC = () => {
  // Color palette for funnel stages progressing from cool blue to vibrant conversion green
  const stepColors = [
    "#388bfd", // Impressions (Sky Blue)
    "#5645d4", // Thumb-stops (Notion Purple)
    "#7b3ff2", // Link Clicks (Brand Purple)
    "#e1306c", // Add to Cart (Rose/Pink)
    "#f77737", // Checkouts (Orange)
    "#1aae39", // Purchases (Success Green)
  ];

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-4 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
            <Filter className="w-4 h-4 text-notion-primary" />
            Customer Journey & Funnel Drop-off
          </h3>
          <p className="text-xs text-notion-steel dark:text-notion-dark-muted mt-0.5">
            Step-by-step conversion from cold impression down to 77 paid purchases.
          </p>
        </div>
        <span className="text-xs font-mono text-notion-green dark:text-emerald-400 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-notion-mint dark:bg-emerald-950/60 border border-notion-hairline dark:border-emerald-800/40 font-semibold shrink-0">
          <Activity className="w-3.5 h-3.5" /> 70% Checkout CVR
        </span>
      </div>

      {/* Horizontal Bar Funnel Chart */}
      <div className="h-64 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={funnelChartData}
            margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
          >
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-mono"
            />
            <YAxis
              type="category"
              dataKey="stage"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-charcoal dark:text-notion-dark-text font-medium"
              width={110}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg p-3 bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion text-xs space-y-1.5 font-sans min-w-[210px]">
                      <div className="font-semibold text-notion-ink dark:text-notion-dark-text border-b border-notion-hairline dark:border-notion-dark-hairline pb-1">
                        {data.stage}
                      </div>
                      <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                        <span>Event Volume:</span>
                        <span className="font-mono font-bold text-notion-ink dark:text-notion-dark-text">
                          {data.count.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                        <span>Step Conversion:</span>
                        <span className="font-mono font-bold text-notion-green dark:text-emerald-400">
                          {data.conversionRate}%
                        </span>
                      </div>
                      {data.dropoff !== "0%" && (
                        <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                          <span>Drop-off from previous:</span>
                          <span className="font-mono font-semibold text-rose-500">
                            {data.dropoff}
                          </span>
                        </div>
                      )}
                      <p className="text-[11px] text-notion-steel dark:text-notion-dark-muted pt-1 border-t border-notion-hairline dark:border-notion-dark-hairline">
                        {data.subtext}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="conversionRate"
              radius={[0, 4, 4, 0]}
              background={{ fill: "currentColor", className: "text-notion-surface dark:text-notion-dark-surface" }}
              barSize={18}
            >
              {funnelChartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={stepColors[index % stepColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Funnel Stage Metric Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-2 border-t border-notion-hairline dark:border-notion-dark-hairline">
        {funnelChartData.map((step, idx) => (
          <div
            key={idx}
            className="p-2 rounded-md bg-notion-surface/70 dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline text-center text-xs"
          >
            <div className="text-[10px] text-notion-steel dark:text-notion-dark-muted truncate">
              {step.stage}
            </div>
            <div className="font-mono font-bold text-notion-ink dark:text-notion-dark-text text-sm">
              {step.display}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
