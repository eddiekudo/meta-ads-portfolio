import type { VariantType } from "@/types/campaign";
import {
  Grid,
  Columns,
  Image as ImageIcon,
  BarChart2,
} from "lucide-react";

interface CarouselControlsProps {
  variant: VariantType;
  onVariantChange: (variant: VariantType) => void;
  progress: number;
  onJumpToAnalytics: () => void;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  variant,
  onVariantChange,
  progress,
  onJumpToAnalytics,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
      {/* Notion-Style Pill Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-notion-surface border border-notion-hairline text-xs">
        <span className="text-notion-steel text-[11px] px-2.5 font-medium">Layout:</span>
        <button
          onClick={() => onVariantChange("default")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
            variant === "default"
              ? "bg-notion-ink text-white shadow-sm"
              : "text-notion-slate hover:text-notion-ink"
          }`}
        >
          <Grid className="w-3 h-3" />
          <span>Cards</span>
        </button>

        <button
          onClick={() => onVariantChange("polaroid")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
            variant === "polaroid"
              ? "bg-notion-ink text-white shadow-sm"
              : "text-notion-slate hover:text-notion-ink"
          }`}
        >
          <ImageIcon className="w-3 h-3" />
          <span>Polaroid</span>
        </button>

        <button
          onClick={() => onVariantChange("masonry")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
            variant === "masonry"
              ? "bg-notion-ink text-white shadow-sm"
              : "text-notion-slate hover:text-notion-ink"
          }`}
        >
          <Columns className="w-3 h-3" />
          <span>Staggered</span>
        </button>
      </div>

      {/* Progress & Quick Jump */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-24 md:w-32 h-1.5 rounded-full bg-notion-hairline overflow-hidden">
            <div
              className="h-full bg-notion-primary transition-all duration-150"
              style={{ width: `${Math.max(5, progress)}%` }}
            />
          </div>
          <span className="text-[11px] font-mono text-notion-steel">
            {Math.round(progress)}% Explored
          </span>
        </div>

        <button
          onClick={onJumpToAnalytics}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white hover:bg-notion-surface border border-notion-hairline text-xs font-medium text-notion-charcoal hover:text-notion-ink transition-all shadow-sm"
        >
          <BarChart2 className="w-3.5 h-3.5 text-notion-primary" />
          <span>Jump to Numbers</span>
        </button>
      </div>
    </div>
  );
};
