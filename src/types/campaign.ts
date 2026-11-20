export type VariantType = "default" | "masonry" | "polaroid";

export interface CreativeSlide {
  id: number;
  stage: "TOFU" | "MOFU" | "BOFU" | "FINALE";
  title: string;
  badge: string;
  src: string;
  alt: string;
  hookRate: string; // Thumb-Stop Rate (3s)
  ctr: string; // Outbound Link CTR
  cpc: string; // Cost per click
  adFormat: string;
  copyAngle: string;
  headline: string;
  primaryText: string;
  ctaText: string;
  targeting: {
    audience: string;
    placements: string[];
    demographics: string;
  };
  whyItWorked: string;
  isFinale?: boolean;
}

export interface CampaignMetrics {
  clientName: string;
  niche: string;
  period: string;
  totalSpend: number;
  totalRevenue: number;
  blendedRoas: number;
  targetRoas: number;
  linkCtr: number;
  industryAvgCtr: number;
  thumbStopRate: number;
  industryAvgThumbStop: number;
  costPerAcquisition: number;
  targetCpa: number;
  adFrequency: number;
  fatigueThreshold: number;
  totalImpressions: number;
  outboundClicks: number;
  purchases: number;
  aov: number;
  pixelMatchQuality: number;
}
