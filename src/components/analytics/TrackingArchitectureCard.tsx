import { useState } from "react";
import { trackingArchitecture } from "@/data/campaignData";
import {
  ShieldCheck,
  CheckCircle,
  Copy,
  Check,
  Cpu,
} from "lucide-react";

export const TrackingArchitectureCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyUtm = () => {
    navigator.clipboard.writeText(trackingArchitecture.utmTaxonomy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-6 rounded-lg bg-white border border-notion-hairline shadow-notion space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-notion-ink flex items-center gap-2">
          <Cpu className="w-4 h-4 text-notion-green" />
          Server-Side CAPI & Tracking
        </h3>
        <span className="text-xs font-mono text-notion-green flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-notion-mint border border-notion-hairline font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> EMQ: 8.4 / 10
        </span>
      </div>

      <div className="space-y-3">
        {/* Quick Health Row */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-md bg-notion-surface border border-notion-hairline">
            <span className="text-[10px] text-notion-steel block font-medium">CAPI Gateway</span>
            <span className="text-notion-green font-bold font-mono">Active</span>
          </div>
          <div className="p-2.5 rounded-md bg-notion-surface border border-notion-hairline">
            <span className="text-[10px] text-notion-steel block font-medium">Deduplication</span>
            <span className="text-notion-green font-bold font-mono">99.8%</span>
          </div>
          <div className="p-2.5 rounded-md bg-notion-surface border border-notion-hairline">
            <span className="text-[10px] text-notion-steel block font-medium">Avg. Latency</span>
            <span className="text-notion-primary font-bold font-mono">&lt; 70ms</span>
          </div>
        </div>

        {/* Event List */}
        <div className="space-y-1">
          {trackingArchitecture.eventsTracked.map((ev, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2 rounded-md bg-notion-surface/60 border border-notion-hairline text-xs"
            >
              <span className="font-mono text-notion-charcoal flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-notion-green" />
                {ev.name}
              </span>
              <span className="text-notion-green font-mono text-[11px] font-semibold">
                {ev.matchRate} match
              </span>
            </div>
          ))}
        </div>

        {/* UTM Taxonomy */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-[11px] text-notion-steel mb-1">
            <span className="font-medium">UTM Taxonomy Formula</span>
            <button
              onClick={handleCopyUtm}
              className="flex items-center gap-1 text-notion-primary hover:underline font-medium"
            >
              {copied ? <Check className="w-3 h-3 text-notion-green" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <div className="p-2.5 rounded-md bg-notion-surface border border-notion-hairline font-mono text-[10px] text-notion-charcoal break-all">
            {trackingArchitecture.utmTaxonomy}
          </div>
        </div>
      </div>
    </div>
  );
};
