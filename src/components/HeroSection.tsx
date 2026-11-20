import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onScrollToAnalytics: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToAnalytics,
}) => {
  return (
    <section className="relative w-full bg-notion-navy text-white pt-16 pb-12 overflow-hidden border-b border-notion-navy-mid">
      {/* Decorative Notion Sticky-Note Dots */}
      <div className="absolute top-10 left-[12%] w-3 h-3 rounded-full bg-notion-peach opacity-80 pointer-events-none" />
      <div className="absolute top-20 right-[15%] w-3.5 h-3.5 rounded-full bg-notion-mint opacity-80 pointer-events-none" />
      <div className="absolute bottom-12 left-[18%] w-2.5 h-2.5 rounded-full bg-notion-yellow opacity-75 pointer-events-none" />
      <div className="absolute bottom-16 right-[22%] w-3 h-3 rounded-full bg-notion-rose opacity-80 pointer-events-none" />

      {/* Decorative Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a2a52_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-notion-navy-mid border border-notion-navy-mid/80 text-notion-sky">
          <Sparkles className="w-3.5 h-3.5 text-notion-yellow" />
          <span>Organic B Campaign • 3.70x ROAS Pilot Sprint</span>
        </div>

        {/* Hero Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-1.5px] leading-[1.08] text-white">
          Meet the performance shift.
        </h1>

        <p className="text-notion-stone text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Creative testing & Meta Ads pilot for Organic B. The carousel slides automatically — hover to inspect or drag, then explore the campaign numbers below.
        </p>

        {/* Action Button Row */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onScrollToAnalytics}
            className="px-5 py-2.5 rounded-md bg-notion-primary hover:bg-notion-primary-pressed text-white font-medium text-sm transition-all shadow-sm"
          >
            See Campaign Analytics
          </button>

          <button
            onClick={() => {
              const el = document.getElementById("creative-showcase");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2.5 rounded-md bg-transparent hover:bg-white/10 text-white border border-notion-stone/40 font-medium text-sm flex items-center gap-1.5 transition-all"
          >
            <span>Explore Creatives</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
