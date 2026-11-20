import { useState } from "react";
import type { CreativeSlide } from "@/types/campaign";
import {
  X,
  Copy,
  Check,
  Target,
  Layers,
  Sparkles,
} from "lucide-react";

interface AdInspectorModalProps {
  creative: CreativeSlide | null;
  onClose: () => void;
}

export const AdInspectorModal: React.FC<AdInspectorModalProps> = ({
  creative,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!creative || creative.isFinale) return null;

  const handleCopy = () => {
    const textToCopy = `${creative.headline}\n\n${creative.primaryText}\n\nCTA: ${creative.ctaText}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-white dark:bg-notion-dark-card border border-notion-hairline dark:border-notion-dark-hairline shadow-notion-mockup text-notion-ink dark:text-notion-dark-text flex flex-col md:flex-row gap-6 p-6 md:p-7 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md bg-notion-surface dark:bg-notion-dark-surface hover:bg-notion-hairline dark:hover:bg-notion-dark-hairline text-notion-charcoal dark:text-notion-dark-text transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Image + Quick Stats */}
        <div className="w-full md:w-[45%] flex flex-col gap-3">
          <div className="rounded-md overflow-hidden aspect-square flex items-center justify-center bg-notion-surface dark:bg-notion-dark-surface">
            <img
              src={creative.src}
              alt={creative.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-notion-mint/40 dark:bg-emerald-950/40 rounded-md p-2 border border-notion-hairline dark:border-emerald-800/40">
              <span className="text-[10px] text-notion-steel dark:text-notion-dark-muted block">Hook Rate</span>
              <span className="font-bold text-notion-green dark:text-emerald-400 font-mono">{creative.hookRate}</span>
            </div>
            <div className="bg-notion-sky/40 dark:bg-sky-950/40 rounded-md p-2 border border-notion-hairline dark:border-sky-800/40">
              <span className="text-[10px] text-notion-steel dark:text-notion-dark-muted block">CTR</span>
              <span className="font-bold text-notion-primary dark:text-sky-400 font-mono">{creative.ctr}</span>
            </div>
            <div className="bg-notion-peach/40 dark:bg-amber-950/40 rounded-md p-2 border border-notion-hairline dark:border-amber-800/40">
              <span className="text-[10px] text-notion-steel dark:text-notion-dark-muted block">Avg. CPC</span>
              <span className="font-bold text-notion-orange-deep dark:text-amber-400 font-mono">{creative.cpc}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Setup */}
        <div className="w-full md:w-[55%] flex flex-col justify-between gap-4 text-xs">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-notion-lavender dark:bg-purple-950/60 text-notion-purple-tag dark:text-purple-300 border border-notion-hairline dark:border-purple-800/40">
                {creative.stage}
              </span>
              <span className="text-notion-steel dark:text-notion-dark-muted text-[11px] font-medium">{creative.adFormat}</span>
            </div>
            <h2 className="text-xl font-semibold text-notion-ink dark:text-notion-dark-text tracking-tight">
              {creative.title}
            </h2>
          </div>

          {/* Ad Copy Box */}
          <div className="bg-notion-surface dark:bg-notion-dark-surface rounded-md p-4 border border-notion-hairline dark:border-notion-dark-hairline space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-notion-charcoal dark:text-notion-dark-text">Ad Copy</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-[11px] text-notion-slate dark:text-notion-dark-muted hover:text-notion-ink dark:hover:text-white px-2 py-0.5 rounded border border-notion-hairline dark:border-notion-dark-hairline bg-white dark:bg-notion-dark-card transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-notion-green" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <p className="text-notion-charcoal dark:text-notion-dark-text text-xs leading-relaxed font-normal">
              {creative.primaryText}
            </p>

            <div className="pt-2.5 border-t border-notion-hairline dark:border-notion-dark-hairline flex items-center justify-between">
              <span className="font-semibold text-notion-ink dark:text-notion-dark-text">{creative.headline}</span>
              <span className="px-3 py-1 rounded-md bg-notion-primary text-white font-medium text-[11px] shadow-sm">
                {creative.ctaText}
              </span>
            </div>
          </div>

          {/* Targeting & Placements */}
          <div className="space-y-1.5 text-[11px] text-notion-charcoal dark:text-notion-dark-text">
            <div className="flex items-center gap-1.5 text-notion-slate dark:text-notion-dark-muted">
              <Target className="w-3.5 h-3.5 text-notion-green" />
              <span>Targeting:</span>
              <span className="text-notion-ink dark:text-notion-dark-text font-medium">{creative.targeting.audience}</span>
            </div>
            <div className="flex items-center gap-1.5 text-notion-slate dark:text-notion-dark-muted">
              <Layers className="w-3.5 h-3.5 text-notion-primary" />
              <span>Placements:</span>
              <span className="text-notion-ink dark:text-notion-dark-text font-medium">{creative.targeting.placements.join(", ")}</span>
            </div>
          </div>

          {/* Takeaway */}
          <div className="p-3 rounded-md bg-notion-yellow/60 dark:bg-amber-950/30 border border-notion-hairline dark:border-amber-800/30 text-[11px] text-notion-charcoal dark:text-amber-200 flex items-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-notion-orange shrink-0 mt-0.5" />
            <span>{creative.whyItWorked}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
