import type { CreativeSlide, VariantType } from "@/types/campaign";
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface AdCreativeCardProps {
  creative: CreativeSlide;
  variant: VariantType;
  onInspect: (creative: CreativeSlide) => void;
  onJumpToAnalytics: () => void;
}

export const AdCreativeCard: React.FC<AdCreativeCardProps> = ({
  creative,
  variant,
  onInspect,
  onJumpToAnalytics,
}) => {
  if (creative.isFinale) {
    return (
      <div
        onClick={onJumpToAnalytics}
        className="w-[280px] md:w-[310px] h-[430px] md:h-[460px] rounded-lg bg-notion-yellow-bold p-6 flex flex-col justify-between cursor-pointer border border-notion-hairline dark:border-amber-400/40 hover:shadow-notion-mockup transition-all duration-300 group text-notion-ink"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/80 text-notion-ink border border-notion-hairline flex items-center gap-1 font-mono">
              <TrendingUp className="w-3.5 h-3.5 text-notion-green" /> 3.70x ROAS
            </span>
            <span className="text-xs font-mono text-notion-slate font-medium">FINALE</span>
          </div>

          <h3 className="text-2xl font-bold text-notion-ink tracking-tight">
            The Campaign Breakdown
          </h3>

          <p className="text-xs text-notion-charcoal leading-relaxed font-normal">
            Creative gets attention. Structured hook testing and frequency pacing make it profitable.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-white/90 rounded-md p-2.5 border border-notion-hairline">
              <div className="text-[10px] text-notion-steel">Revenue</div>
              <div className="text-sm font-bold text-notion-ink font-mono">₹68,450</div>
            </div>
            <div className="bg-white/90 rounded-md p-2.5 border border-notion-hairline">
              <div className="text-[10px] text-notion-steel">Purchases</div>
              <div className="text-sm font-bold text-notion-primary font-mono">77 Orders</div>
            </div>
            <div className="bg-white/90 rounded-md p-2.5 border border-notion-hairline">
              <div className="text-[10px] text-notion-steel">Cost / Order</div>
              <div className="text-sm font-bold text-notion-ink font-mono">₹240</div>
            </div>
            <div className="bg-white/90 rounded-md p-2.5 border border-notion-hairline">
              <div className="text-[10px] text-notion-steel">Hook Rate</div>
              <div className="text-sm font-bold text-notion-ink font-mono">34.2%</div>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onJumpToAnalytics();
          }}
          className="w-full py-2.5 px-3 rounded-md bg-notion-ink hover:bg-black text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
        >
          <span>See Campaign Numbers</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  const isPolaroid = variant === "polaroid";

  return (
    <div
      onClick={() => onInspect(creative)}
      className={`relative w-[270px] md:w-[300px] h-[430px] md:h-[460px] flex flex-col justify-between overflow-hidden bg-white dark:bg-notion-dark-card text-notion-ink dark:text-notion-dark-text transition-colors duration-200 ${
        isPolaroid ? "text-notion-ink" : ""
      }`}
    >
      {/* Top Header - Notion Pastel Tags */}
      <div className="p-3.5 flex items-center justify-between z-10">
        <span
          className={`px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase ${
            creative.stage === "TOFU"
              ? "bg-notion-sky dark:bg-sky-950/60 text-notion-ink dark:text-sky-300 border border-notion-hairline dark:border-sky-800/40"
              : creative.stage === "MOFU"
              ? "bg-notion-lavender dark:bg-purple-950/60 text-notion-purple-tag dark:text-purple-300 border border-notion-hairline dark:border-purple-800/40"
              : "bg-notion-mint dark:bg-emerald-950/60 text-notion-green dark:text-emerald-400 border border-notion-hairline dark:border-emerald-800/40"
          }`}
        >
          {creative.stage}
        </span>

        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-notion-surface dark:bg-notion-dark-surface text-notion-steel dark:text-notion-dark-muted border border-notion-hairline dark:border-notion-dark-hairline">
          #{creative.id}
        </span>
      </div>

      {/* Main Creative Image - Borderless */}
      <div className="relative flex-1 mx-3 rounded-md overflow-hidden flex items-center justify-center group/img">
        <img
          src={creative.src}
          alt={creative.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Floating Quick Metric Chip */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2.5 py-1 rounded-md bg-white/95 dark:bg-notion-dark-card/95 backdrop-blur-md border border-notion-hairline dark:border-notion-dark-hairline text-[11px] text-notion-charcoal dark:text-notion-dark-text shadow-sm transition-colors">
          <span className="flex items-center gap-1 font-mono font-medium text-notion-green dark:text-emerald-400">
            <Sparkles className="w-3 h-3 text-notion-primary" /> Hook: {creative.hookRate}
          </span>
          <span className="font-mono text-notion-slate dark:text-notion-dark-muted font-medium">
            CTR: {creative.ctr}
          </span>
        </div>
      </div>

      {/* Card Footer Summary */}
      <div className="p-3.5 space-y-0.5">
        <div className="text-xs font-semibold truncate text-notion-ink dark:text-notion-dark-text">
          {creative.title}
        </div>
        <div className="flex items-center justify-between text-[11px] text-notion-steel dark:text-notion-dark-muted">
          <span>{creative.badge}</span>
          <span className="text-notion-primary flex items-center gap-0.5 font-medium">
            Inspect <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
