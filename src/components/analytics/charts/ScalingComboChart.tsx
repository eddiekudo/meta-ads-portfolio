import React, { useState } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { sprintScalingData } from "@/data/campaignData";
import { TrendingUp, Layers } from "lucide-react";

export const ScalingComboChart: React.FC = () => {
  const [metricMode, setMetricMode] = useState<"revenue" | "roas">("revenue");

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-4 transition-colors">
      {/* Header with Metric Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-notion-primary" />
            Profitable Scaling: Spend vs. Returns
          </h3>
          <p className="text-xs text-notion-steel dark:text-notion-dark-muted mt-0.5">
            Ad spend (bars) scaled from ₹1,500 to ₹3,400 while returns (line) expanded profitably.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-notion-surface dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline p-0.5 rounded-full text-xs self-start sm:self-auto">
          <button
            onClick={() => setMetricMode("revenue")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              metricMode === "revenue"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            Spend vs. Revenue
          </button>
          <button
            onClick={() => setMetricMode("roas")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              metricMode === "roas"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            Spend vs. ROAS
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-64 sm:h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={sprintScalingData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-notion-hairline dark:text-notion-dark-hairline opacity-60"
            />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-sans"
            />
            <YAxis
              yAxisId="spend"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-mono"
            />
            <YAxis
              yAxisId="returns"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) =>
                metricMode === "revenue" ? `₹${(v / 1000).toFixed(0)}k` : `${v}x`
              }
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-mono"
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const spend = payload[0]?.value as number;
                  const lineVal = payload[1]?.value as number;
                  return (
                    <div className="rounded-lg p-3 bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion text-xs space-y-1.5 font-sans">
                      <div className="font-semibold text-notion-ink dark:text-notion-dark-text border-b border-notion-hairline dark:border-notion-dark-hairline pb-1">
                        {label}
                      </div>
                      <div className="flex items-center justify-between gap-4 text-notion-slate dark:text-notion-dark-muted">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-sm bg-notion-primary" />
                          Ad Spend:
                        </span>
                        <span className="font-mono font-bold text-notion-ink dark:text-notion-dark-text">
                          ₹{spend?.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-notion-slate dark:text-notion-dark-muted">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-sm bg-notion-green" />
                          {metricMode === "revenue" ? "Revenue:" : "Blended ROAS:"}
                        </span>
                        <span className="font-mono font-bold text-notion-green dark:text-emerald-400">
                          {metricMode === "revenue"
                            ? `₹${lineVal?.toLocaleString()}`
                            : `${lineVal}x`}
                        </span>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Bar: Spend */}
            <Bar
              yAxisId="spend"
              dataKey="spend"
              name="Ad Spend"
              fill="#5645d4"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            {/* Line: Returns */}
            <Line
              yAxisId="returns"
              type="monotone"
              dataKey={metricMode === "revenue" ? "revenue" : "roas"}
              name={metricMode === "revenue" ? "Revenue" : "ROAS"}
              stroke="#1aae39"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#1aae39", strokeWidth: 1.5, stroke: "#ffffff" }}
              activeDot={{ r: 6, fill: "#1aae39" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend / Key Insight Pill */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-notion-hairline dark:border-notion-dark-hairline text-[11px] text-notion-steel dark:text-notion-dark-muted">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-notion-primary" />
            Ad Spend (Bars)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-notion-green" />
            {metricMode === "revenue" ? "Attributed Revenue (Line)" : "ROAS Trend (Line)"}
          </span>
        </div>
        <span className="font-mono text-notion-green dark:text-emerald-400 font-semibold flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" />
          Revenue scaled 3.7x faster than daily spend
        </span>
      </div>
    </div>
  );
};
