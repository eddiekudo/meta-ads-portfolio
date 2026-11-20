import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { abGroupedData, beforeAfterData } from "@/data/campaignData";
import { FlaskConical, Award } from "lucide-react";

export const CreativeComparisonChart: React.FC = () => {
  const [viewMode, setViewMode] = useState<"abTests" | "beforeAfter">("abTests");

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-4 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-notion-primary" />
            {viewMode === "abTests"
              ? "A/B Creative Test Comparisons"
              : "Before vs. After Account Performance"}
          </h3>
          <p className="text-xs text-notion-steel dark:text-notion-dark-muted mt-0.5">
            {viewMode === "abTests"
              ? "Head-to-head performance of isolated creative angles (Winner vs. Control)."
              : "Historical baseline benchmark compared to Aditya's optimized pilot sprint."}
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-notion-surface dark:bg-notion-dark-surface border border-notion-hairline dark:border-notion-dark-hairline p-0.5 rounded-full text-xs self-start sm:self-auto">
          <button
            onClick={() => setViewMode("abTests")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              viewMode === "abTests"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            A/B Test Lift
          </button>
          <button
            onClick={() => setViewMode("beforeAfter")}
            className={`px-3 py-1 rounded-full font-medium transition-colors ${
              viewMode === "beforeAfter"
                ? "bg-notion-ink dark:bg-white text-white dark:text-notion-ink shadow-sm"
                : "text-notion-steel dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white"
            }`}
          >
            Before vs. After
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="h-64 sm:h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          {viewMode === "abTests" ? (
            <BarChart
              data={abGroupedData}
              margin={{ top: 10, right: 15, left: -15, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="currentColor"
                className="text-notion-hairline dark:text-notion-dark-hairline opacity-60"
              />
              <XAxis
                dataKey="testName"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-notion-charcoal dark:text-notion-dark-text font-medium"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `${v}%`}
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-notion-steel dark:text-notion-dark-muted font-mono"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const d = payload[0].payload;
                    return (
                      <div className="rounded-lg p-3 bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion text-xs space-y-1.5 font-sans min-w-[200px]">
                        <div className="font-semibold text-notion-ink dark:text-notion-dark-text border-b border-notion-hairline dark:border-notion-dark-hairline pb-1">
                          {d.testName} ({d.unit})
                        </div>
                        <div className="flex items-center justify-between text-notion-green dark:text-emerald-400 font-semibold">
                          <span>✓ {d.winnerName}:</span>
                          <span className="font-mono">{d.winnerVal}%</span>
                        </div>
                        <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                          <span>✕ {d.controlName}:</span>
                          <span className="font-mono line-through">{d.controlVal}%</span>
                        </div>
                        <div className="text-[11px] pt-1 text-notion-primary dark:text-sky-400 font-bold border-t border-notion-hairline dark:border-notion-dark-hairline flex items-center justify-between">
                          <span>Performance Lift:</span>
                          <span>{d.lift}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="winnerVal"
                name="Winning Angle"
                fill="#5645d4"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
              <Bar
                dataKey="controlVal"
                name="Control Angle"
                fill="#a4a097"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
            </BarChart>
          ) : (
            <BarChart
              data={beforeAfterData}
              margin={{ top: 10, right: 15, left: -15, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="currentColor"
                className="text-notion-hairline dark:text-notion-dark-hairline opacity-60"
              />
              <XAxis
                dataKey="metric"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-notion-charcoal dark:text-notion-dark-text font-medium"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "currentColor" }}
                className="text-notion-steel dark:text-notion-dark-muted font-mono"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const d = payload[0].payload;
                    return (
                      <div className="rounded-lg p-3 bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion text-xs space-y-1.5 font-sans min-w-[200px]">
                        <div className="font-semibold text-notion-ink dark:text-notion-dark-text border-b border-notion-hairline dark:border-notion-dark-hairline pb-1">
                          {d.metric}
                        </div>
                        <div className="flex items-center justify-between text-notion-slate dark:text-notion-dark-muted">
                          <span>Before (Old Account):</span>
                          <span className="font-mono">{d.before}</span>
                        </div>
                        <div className="flex items-center justify-between text-notion-green dark:text-emerald-400 font-semibold">
                          <span>After (Aditya's Sprint):</span>
                          <span className="font-mono">{d.after}</span>
                        </div>
                        <div className="text-[11px] pt-1 text-notion-primary dark:text-sky-400 font-bold border-t border-notion-hairline dark:border-notion-dark-hairline flex items-center justify-between">
                          <span>Net Shift:</span>
                          <span>{d.change}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="before"
                name="Before (Old Account)"
                fill="#a4a097"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
              <Bar
                dataKey="after"
                name="After (Pilot Sprint)"
                fill="#1aae39"
                radius={[4, 4, 0, 0]}
                maxBarSize={32}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Footer Legend */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-notion-hairline dark:border-notion-dark-hairline text-[11px] text-notion-steel dark:text-notion-dark-muted">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span
              className={`w-2.5 h-2.5 rounded-sm ${
                viewMode === "abTests" ? "bg-notion-primary" : "bg-notion-stone"
              }`}
            />
            {viewMode === "abTests" ? "Winner (Tested Creative)" : "Before (Baseline)"}
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className={`w-2.5 h-2.5 rounded-sm ${
                viewMode === "abTests" ? "bg-notion-stone" : "bg-notion-green"
              }`}
            />
            {viewMode === "abTests" ? "Control (Standard Creative)" : "After (Optimized Sprint)"}
          </span>
        </div>
        <span className="font-mono text-notion-green dark:text-emerald-400 font-semibold flex items-center gap-0.5">
          <Award className="w-3.5 h-3.5" />
          {viewMode === "abTests" ? "All 3 hypothesis tests passed with statistical lift" : "+105% ROAS increase on scaled spend"}
        </span>
      </div>
    </div>
  );
};
