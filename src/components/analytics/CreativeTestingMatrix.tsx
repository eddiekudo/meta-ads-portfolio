import React from "react";
import { abTestingData } from "@/data/campaignData";
import { FlaskConical, Award } from "lucide-react";

export const CreativeTestingMatrix: React.FC = () => {
  const cardTints = [
    "bg-notion-lavender/50 dark:bg-purple-950/30 border-notion-hairline dark:border-purple-800/30",
    "bg-notion-peach/50 dark:bg-amber-950/30 border-notion-hairline dark:border-amber-800/30",
    "bg-notion-mint/50 dark:bg-emerald-950/30 border-notion-hairline dark:border-emerald-800/30",
  ];

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion space-y-4 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-notion-ink dark:text-notion-dark-text flex items-center gap-2">
          <FlaskConical className="w-4 h-4 text-notion-primary" />
          A/B Testing Experiments
        </h3>
        <span className="text-[11px] font-mono text-notion-purple-tag dark:text-purple-300 px-2.5 py-0.5 rounded-full bg-notion-lavender dark:bg-purple-950/60 border border-notion-hairline dark:border-purple-800/40 font-semibold">
          Single Variable Tests
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {abTestingData.map((test, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-4 border flex flex-col justify-between gap-3 text-xs ${cardTints[idx % 3]}`}
          >
            <div className="space-y-2.5">
              <span className="text-[11px] font-bold text-notion-ink dark:text-notion-dark-text block">
                {test.testName}
              </span>

              <div className="space-y-1 text-[11px]">
                <div className="p-2 rounded-md bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline text-notion-ink dark:text-notion-dark-text font-medium shadow-sm">
                  ✓ {test.variantA}
                </div>
                <div className="p-2 rounded-md bg-white/50 dark:bg-notion-dark-surface/50 text-notion-stone dark:text-stone-500 line-through">
                  ✕ {test.variantB}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-notion-hairline dark:border-notion-dark-hairline space-y-1">
              <div className="flex items-center gap-1 text-notion-ink dark:text-notion-dark-text font-semibold text-[11px]">
                <Award className="w-3.5 h-3.5 text-notion-primary" /> {test.metric}
              </div>
              <p className="text-[11px] text-notion-slate dark:text-notion-dark-muted leading-snug">
                {test.insight}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
