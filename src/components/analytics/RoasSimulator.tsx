import { useState } from "react";
import { Calculator } from "lucide-react";

export const RoasSimulator: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(20000);
  const [aov, setAov] = useState<number>(890);
  const [conversionRate, setConversionRate] = useState<number>(3.2);
  const cpc = 10.2;

  const estimatedClicks = Math.round(monthlySpend / cpc);
  const estimatedPurchases = Math.round(estimatedClicks * (conversionRate / 100));
  const estimatedRevenue = Math.round(estimatedPurchases * aov);
  const projectedRoas = monthlySpend > 0 ? (estimatedRevenue / monthlySpend).toFixed(2) : "0.00";
  const estimatedNetGmv = estimatedRevenue - monthlySpend;

  return (
    <div className="p-6 rounded-lg bg-white border border-notion-hairline shadow-notion space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-notion-ink flex items-center gap-2">
          <Calculator className="w-4 h-4 text-notion-primary" />
          Interactive ROAS Calculator
        </h3>
        <span className="text-[11px] font-mono text-notion-steel">
          Modeled at ₹10.20 CPC
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Sliders */}
        <div className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-notion-steel font-medium">Monthly Ad Budget:</span>
              <span className="font-mono font-bold text-notion-ink">₹{monthlySpend.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="100000"
              step="2500"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg bg-notion-surface accent-notion-primary cursor-pointer border border-notion-hairline"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-notion-steel font-medium">Avg. Order Value (AOV):</span>
              <span className="font-mono font-bold text-notion-ink">₹{aov.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="400"
              max="4000"
              step="50"
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg bg-notion-surface accent-notion-purple cursor-pointer border border-notion-hairline"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-notion-steel font-medium">Store Conversion Rate:</span>
              <span className="font-mono font-bold text-notion-ink">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="6.0"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg bg-notion-surface accent-notion-green cursor-pointer border border-notion-hairline"
            />
          </div>
        </div>

        {/* Results */}
        <div className="p-4 rounded-lg bg-notion-surface border border-notion-hairline grid grid-cols-2 gap-3 text-center">
          <div className="p-3 rounded-md bg-white border border-notion-hairline shadow-sm">
            <span className="text-[10px] text-notion-steel block font-medium">Projected ROAS</span>
            <span className="text-2xl font-black text-notion-green font-mono">{projectedRoas}x</span>
          </div>

          <div className="p-3 rounded-md bg-white border border-notion-hairline shadow-sm">
            <span className="text-[10px] text-notion-steel block font-medium">Projected Revenue</span>
            <span className="text-xl font-bold text-notion-ink font-mono">₹{estimatedRevenue.toLocaleString()}</span>
          </div>

          <div className="p-3 rounded-md bg-white border border-notion-hairline shadow-sm">
            <span className="text-[10px] text-notion-steel block font-medium">Est. Profit After Ads</span>
            <span className="text-lg font-bold text-notion-primary font-mono">₹{estimatedNetGmv.toLocaleString()}</span>
          </div>

          <div className="p-3 rounded-md bg-white border border-notion-hairline shadow-sm">
            <span className="text-[10px] text-notion-steel block font-medium">Est. Paid Orders</span>
            <span className="text-lg font-bold text-notion-charcoal font-mono">{estimatedPurchases.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
