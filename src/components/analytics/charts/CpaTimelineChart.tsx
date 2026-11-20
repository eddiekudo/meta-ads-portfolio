import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceDot,
} from "recharts";
import { cpaOptimizationTimeline } from "@/data/campaignData";
import { Activity, Sparkles, CheckCircle2 } from "lucide-react";

export const CpaTimelineChart: React.FC = () => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-4 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
            <Activity className="w-4 h-4 text-notion-green" />
            CPA Compression & Creative Milestones
          </h3>
          <p className="text-xs text-notion-steel dark:text-notion-dark-muted mt-0.5">
            Cost Per Order dropped 37.6% (₹340 → ₹212) as test winners were isolated and scaled.
          </p>
        </div>
        <span className="text-xs font-mono text-notion-primary dark:text-sky-400 flex items-center gap-1 px-2.5 py-1 rounded-full bg-notion-sky/40 dark:bg-sky-950/60 border border-notion-hairline dark:border-sky-800/40 font-semibold self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5" /> -37.6% CPA Reduction
        </span>
      </div>

      {/* Chart Canvas */}
      <div className="h-64 sm:h-72 w-full pt-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={cpaOptimizationTimeline}
            margin={{ top: 15, right: 15, left: -10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-notion-hairline dark:text-notion-dark-hairline opacity-60"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-sans"
            />
            <YAxis
              yAxisId="cpa"
              domain={[180, 360]}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `₹${v}`}
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-mono"
            />
            <YAxis
              yAxisId="ctr"
              orientation="right"
              domain={[1.0, 3.5]}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 11, fill: "currentColor" }}
              className="text-notion-steel dark:text-notion-dark-muted font-mono"
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-lg p-3 bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion text-xs space-y-2 font-sans min-w-[210px]">
                      <div className="flex items-center justify-between border-b border-notion-hairline dark:border-notion-dark-hairline pb-1">
                        <span className="font-semibold text-notion-ink dark:text-notion-dark-text">
                          {label}
                        </span>
                        {data.annotation && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-notion-yellow text-notion-charcoal">
                            Milestone
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                          Cost Per Order (CPA):
                        </span>
                        <span className="font-mono font-bold text-notion-green dark:text-emerald-400">
                          ₹{data.cpa}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-notion-primary" />
                          Outbound CTR:
                        </span>
                        <span className="font-mono font-bold text-notion-primary dark:text-sky-400">
                          {data.ctr}%
                        </span>
                      </div>
                      <div className="pt-1.5 border-t border-notion-hairline dark:border-notion-dark-hairline text-[11px] text-notion-steel dark:text-notion-dark-muted">
                        <span className="font-semibold text-notion-charcoal dark:text-notion-dark-text">Action: </span>
                        {data.action}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            {/* Annotated Milestone Dots */}
            <ReferenceDot
              yAxisId="cpa"
              x="Day 3"
              y={310}
              r={6}
              fill="#5645d4"
              stroke="#ffffff"
              strokeWidth={2}
            />
            <ReferenceDot
              yAxisId="cpa"
              x="Day 7"
              y={245}
              r={6}
              fill="#e1306c"
              stroke="#ffffff"
              strokeWidth={2}
            />
            <ReferenceDot
              yAxisId="cpa"
              x="Day 11"
              y={218}
              r={6}
              fill="#1aae39"
              stroke="#ffffff"
              strokeWidth={2}
            />
            {/* Line: CPA */}
            <Line
              yAxisId="cpa"
              type="monotone"
              dataKey="cpa"
              name="CPA"
              stroke="#1aae39"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "#1aae39" }}
              activeDot={{ r: 6, fill: "#1aae39" }}
            />
            {/* Line: CTR */}
            <Line
              yAxisId="ctr"
              type="monotone"
              dataKey="ctr"
              name="CTR"
              stroke="#5645d4"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={{ r: 3, fill: "#5645d4" }}
              activeDot={{ r: 5, fill: "#5645d4" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Action Milestone Timeline Chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-notion-hairline dark:border-notion-dark-hairline text-xs">
        <div className="p-2.5 rounded-md bg-notion-surface/60 dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline">
          <div className="flex items-center gap-1.5 font-semibold text-notion-ink dark:text-notion-dark-text text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-notion-primary" />
            Day 3: Emergency Box Launch
          </div>
          <p className="text-[11px] text-notion-steel dark:text-notion-dark-muted mt-0.5">
            Novel visual hook interrupted scrolling; lowered cold CPA to ₹310.
          </p>
        </div>

        <div className="p-2.5 rounded-md bg-notion-surface/60 dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline">
          <div className="flex items-center gap-1.5 font-semibold text-notion-ink dark:text-notion-dark-text text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
            Day 7: Meme Reel Scaling
          </div>
          <p className="text-[11px] text-notion-steel dark:text-notion-dark-muted mt-0.5">
            Viral humor cut CPM by 28% and pushed outbound CTR above 2.7%.
          </p>
        </div>

        <div className="p-2.5 rounded-md bg-notion-surface/60 dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline">
          <div className="flex items-center gap-1.5 font-semibold text-notion-ink dark:text-notion-dark-text text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-notion-green" />
            Day 11: Scalp Massager Gift
          </div>
          <p className="text-[11px] text-notion-steel dark:text-notion-dark-muted mt-0.5">
            Tangible bundle gift converted cart abandoners, bringing CPA to ₹212.
          </p>
        </div>
      </div>
    </div>
  );
};
