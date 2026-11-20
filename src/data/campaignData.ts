import type { CampaignMetrics, CreativeSlide } from "../types/campaign";

export const campaignCreatives: CreativeSlide[] = [
  {
    id: 1,
    stage: "TOFU",
    title: "Break Knots Hook",
    badge: "Hook Winner",
    src: "/creatives/01-break-knots.jpg",
    alt: "Break Knots in case of tangled hair red emergency box ad",
    hookRate: "38.5%",
    ctr: "2.74%",
    cpc: "₹9.80",
    adFormat: "Feed & Story (1:1)",
    copyAngle: "Pattern Interrupt",
    headline: "Break Knots. In Case of Tangled Hair.",
    primaryText:
      "Tired of shedding hair every morning? Standard plastic combs tear brittle roots. Our Neem detangler glides through without static.",
    ctaText: "Shop Now",
    targeting: {
      audience: "Advantage+ Broad + 1% Lookalike",
      placements: ["IG Feed", "IG Explore", "FB Feed"],
      demographics: "Women 20-35 • Metros",
    },
    whyItWorked:
      "Emergency glass box visual stopped mindless scrolling, outperforming standard product photos by 1.7x.",
  },
  {
    id: 2,
    stage: "MOFU",
    title: "The Shopping Cart",
    badge: "+35% AOV Booster",
    src: "/creatives/02-shopping-cart.jpg",
    alt: "Wire shopping cart with Organic B wooden hair accessories",
    hookRate: "33.1%",
    ctr: "2.60%",
    cpc: "₹10.50",
    adFormat: "Haul / Basket",
    copyAngle: "Bundle & Save",
    headline: "Everything Your Scalp Needs.",
    primaryText:
      "Why buy one when the complete hair kit is on bundle discount? Handcrafted comb, scalp massager, and loofahs in one set.",
    ctaText: "Get The Bundle",
    targeting: {
      audience: "Engaged 30D Shoppers + ViewContent",
      placements: ["IG Stories", "IG Reels", "FB Feed"],
      demographics: "Tier 1 Metros",
    },
    whyItWorked:
      "Showcasing multiple items together in a shopping basket encouraged bundle purchases over single items.",
  },
  {
    id: 3,
    stage: "MOFU",
    title: "Everyday Essentials",
    badge: "Product Guide",
    src: "/creatives/03-everyday-essentials.jpg",
    alt: "Everyday essentials infographic with arrows and tool tips",
    hookRate: "31.4%",
    ctr: "2.25%",
    cpc: "₹11.20",
    adFormat: "Infographic",
    copyAngle: "Product Education",
    headline: "Everyday Essentials, The Organic Way.",
    primaryText:
      "Each tool does one job well: detangle gently without breakage, and stimulate natural scalp roots.",
    ctaText: "Explore Tools",
    targeting: {
      audience: "Ayurveda & Hair Care Interests",
      placements: ["IG Feed", "Reels"],
      demographics: "Age 20-40",
    },
    whyItWorked:
      "Arrow annotations clearly answered product utility before the customer had to ask.",
  },
  {
    id: 4,
    stage: "TOFU",
    title: "Monsoon Sale Meme",
    badge: "-28% Lower CPM",
    src: "/creatives/04-monsoon-meme.jpg",
    alt: "Humorous hamster meme with pink bow and Organic B products",
    hookRate: "39.8%",
    ctr: "2.95%",
    cpc: "₹8.40",
    adFormat: "Meme Creative",
    copyAngle: "Relatable Humor",
    headline: "Monsoon Hair Frizz? Handled.",
    primaryText:
      "'You look happier.' 'Thanks, I just treated my hair to the Organic B Monsoon Sale.' Limited sets available.",
    ctaText: "Claim Offer",
    targeting: {
      audience: "Broad 18-30",
      placements: ["IG Reels", "IG Stories"],
      demographics: "Metros",
    },
    whyItWorked:
      "Lighthearted humor reduced ad fatigue and drove 3x more organic shares than static posts.",
  },
  {
    id: 5,
    stage: "BOFU",
    title: "Bhringraj Oil Hero",
    badge: "4.2x ROAS Closer",
    src: "/creatives/05-bhringraj-oil.jpg",
    alt: "Organic B Pure Bhringraj Hair Oil bottle with warm lighting",
    hookRate: "35.2%",
    ctr: "3.10%",
    cpc: "₹9.20",
    adFormat: "Product Hero",
    copyAngle: "Pure Ingredients",
    headline: "Pure Bhringraj. Zero Mineral Oils.",
    primaryText:
      "Cold-pressed Bhringraj extracts to nourish roots and tackle thinning hair. Dispatched daily.",
    ctaText: "Order Now",
    targeting: {
      audience: "Retargeting: 7D Cart Abandoners",
      placements: ["IG Feed", "IG Stories", "FB Feed"],
      demographics: "Website Visitors",
    },
    whyItWorked:
      "Warm, clean product shot provided the final nudge for cart abandoners to complete checkout.",
  },
  {
    id: 6,
    stage: "FINALE",
    title: "Campaign Data",
    badge: "Sprint Results",
    src: "",
    alt: "Data & Analytics Hub",
    hookRate: "99%",
    ctr: "3.7x ROAS",
    cpc: "₹240 CPA",
    adFormat: "Analytics & Testing",
    copyAngle: "Performance Data",
    headline: "Pilot Results: 3.70x ROAS",
    primaryText:
      "₹18,500 Test Spend → ₹68,450 Revenue. Check out the funnel drop-off and creative A/B test results.",
    ctaText: "See Analytics",
    targeting: {
      audience: "Growth Teams",
      placements: ["Campaign Report"],
      demographics: "E-Commerce",
    },
    whyItWorked:
      "Keeping creative fresh and maintaining tight frequency kept customer acquisition profitable on a test budget.",
    isFinale: true,
  },
];

export const campaignOverview: CampaignMetrics = {
  clientName: "Organic B",
  niche: "Hair & Scalp Care",
  period: "14-Day Pilot Sprint",
  totalSpend: 18500,
  totalRevenue: 68450,
  blendedRoas: 3.7,
  targetRoas: 2.5,
  linkCtr: 2.57,
  industryAvgCtr: 1.1,
  thumbStopRate: 34.2,
  industryAvgThumbStop: 22.0,
  costPerAcquisition: 240,
  targetCpa: 320,
  adFrequency: 1.7,
  fatigueThreshold: 3.5,
  totalImpressions: 48200,
  outboundClicks: 1240,
  purchases: 77,
  aov: 889,
  pixelMatchQuality: 8.4,
};

export const funnelSteps = [
  {
    step: "Impressions",
    count: "48,200",
    rate: "100%",
    subtext: "Feed & Reels reach",
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: "Thumb-Stops (3s)",
    count: "16,480",
    rate: "34.2%",
    subtext: "Hooked attention",
    color: "from-indigo-500 to-purple-600",
  },
  {
    step: "Link Clicks",
    count: "1,240",
    rate: "2.57%",
    subtext: "Store visitors",
    color: "from-purple-500 to-pink-600",
  },
  {
    step: "Add to Cart",
    count: "225",
    rate: "18.1%",
    subtext: "Bundle intent",
    color: "from-pink-500 to-rose-600",
  },
  {
    step: "Checkouts",
    count: "110",
    rate: "48.8%",
    subtext: "Initiated checkout",
    color: "from-amber-500 to-orange-600",
  },
  {
    step: "Purchases",
    count: "77",
    rate: "70.0%",
    subtext: "₹68,450 Total Revenue",
    color: "from-emerald-500 to-teal-600",
  },
];

export const abTestingData = [
  {
    testName: "Hook Angle Test",
    variantA: "Emergency Box (Visual Metaphor)",
    variantB: "Standard Product Photo",
    winner: "Variant A Won",
    metric: "38.5% vs 22.1% Hook Rate • -24% CPC",
    insight: "Curiosity visual stopped thumbs faster than a plain product bottle.",
  },
  {
    testName: "Copy Tone Test",
    variantA: "Meme Humor ('You look happier...')",
    variantB: "Formal Benefit List",
    winner: "Variant A Won",
    metric: "2.95% vs 2.15% CTR • -28% CPM",
    insight: "Relatable humor lowered ad resistance and drove 3x more shares.",
  },
  {
    testName: "Retargeting Offer",
    variantA: "Free Scalp Massager with Bundle",
    variantB: "Flat 15% Discount",
    winner: "Variant A Won",
    metric: "7.8% vs 6.9% CVR • Preserved Margins",
    insight: "A tangible gift converted better than small percentage discounts.",
  },
];

export const trackingArchitecture = {
  capiStatus: "Active",
  matchQualityScore: "8.4 / 10",
  deduplicationScore: "99.4%",
  pixelId: "748921094821034",
  eventsTracked: [
    { name: "PageView", latency: "< 50ms", matchRate: "97%" },
    { name: "ViewContent", latency: "< 80ms", matchRate: "93%" },
    { name: "AddToCart", latency: "< 100ms", matchRate: "90%" },
    { name: "InitiateCheckout", latency: "< 90ms", matchRate: "88%" },
    { name: "Purchase", latency: "< 60ms", matchRate: "95%" },
  ],
  utmTaxonomy:
    "utm_source=meta&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}",
};

// 1. Combo Chart Data: Ad Spend vs. Revenue & ROAS scaling over the 14-day sprint
export const sprintScalingData = [
  { period: "Days 1-2", spend: 1500, revenue: 3600, roas: 2.4 },
  { period: "Days 3-4", spend: 2000, revenue: 5800, roas: 2.9 },
  { period: "Days 5-6", spend: 2400, revenue: 8160, roas: 3.4 },
  { period: "Days 7-8", spend: 2800, revenue: 10920, roas: 3.9 },
  { period: "Days 9-10", spend: 3100, revenue: 12710, roas: 4.1 },
  { period: "Days 11-12", spend: 3300, revenue: 13860, roas: 4.2 },
  { period: "Days 13-14", spend: 3400, revenue: 13400, roas: 3.94 },
];

// 2. Line Graph Data: CPA & CTR improvement over time with campaign action milestones
export const cpaOptimizationTimeline = [
  { day: "Day 1", cpa: 340, ctr: 1.6, action: "Cold Broad Testing" },
  { day: "Day 3", cpa: 310, ctr: 2.1, action: "Launched 'Break Knots' Hook", annotation: "Emergency Box Hook Launched" },
  { day: "Day 5", cpa: 275, ctr: 2.3, action: "Scaled Lookalike 1%" },
  { day: "Day 7", cpa: 245, ctr: 2.75, action: "Cut Fatigue Ad, Scaled Meme", annotation: "Meme Hook Cut CPM by 28%" },
  { day: "Day 9", cpa: 232, ctr: 2.7, action: "Shopping Cart Bundle Active" },
  { day: "Day 11", cpa: 218, ctr: 2.9, action: "Free Massager Offer Live", annotation: "Gift Bundle Surged CVR" },
  { day: "Day 14", cpa: 212, ctr: 2.95, action: "Winning Angle Scaling" },
];

// 3. Funnel Chart Data: Customer Journey & Conversion Step Drop-off
export const funnelChartData = [
  { stage: "Impressions", count: 48200, display: "48.2K", conversionRate: 100, dropoff: "0%", subtext: "Cold reach across Reels & Feed" },
  { stage: "Thumb-Stops (3s)", count: 16480, display: "16.5K", conversionRate: 34.2, dropoff: "-65.8%", subtext: "34.2% Hook Rate (2.1x benchmark)" },
  { stage: "Link Clicks", count: 1240, display: "1,240", conversionRate: 2.57, dropoff: "-92.5%", subtext: "2.57% Outbound CTR to storefront" },
  { stage: "Add to Cart", count: 225, display: "225", conversionRate: 18.1, dropoff: "-81.9%", subtext: "18.1% of visitors added hair bundle" },
  { stage: "Checkouts", count: 110, display: "110", conversionRate: 48.8, dropoff: "-51.1%", subtext: "48.8% checkout initiation rate" },
  { stage: "Purchases", count: 77, display: "77", conversionRate: 70.0, dropoff: "-30.0%", subtext: "77 final orders • ₹68,450 revenue" },
];

// 4. Grouped Bar Chart Data: Creative A/B Test comparisons
export const abGroupedData = [
  {
    testName: "Hook Angle",
    winnerName: "Emergency Box",
    winnerVal: 38.5,
    controlName: "Plain Photo",
    controlVal: 22.1,
    unit: "% Hook Rate",
    lift: "+74.2%",
  },
  {
    testName: "Copy Tone",
    winnerName: "Meme Humor",
    winnerVal: 2.95,
    controlName: "Benefit List",
    controlVal: 2.15,
    unit: "% CTR",
    lift: "+37.2%",
  },
  {
    testName: "Retargeting Offer",
    winnerName: "Free Massager Gift",
    winnerVal: 7.8,
    controlName: "15% Discount",
    controlVal: 6.9,
    unit: "% CVR",
    lift: "+13.0%",
  },
];

// 4b. Before vs After Account Takeover
export const beforeAfterData = [
  { metric: "ROAS (x)", before: 1.8, after: 3.7, change: "+105%" },
  { metric: "Cost/Order (₹)", before: 340, after: 240, change: "-29.4%" },
  { metric: "Outbound CTR (%)", before: 1.1, after: 2.57, change: "+133%" },
  { metric: "Hook Rate (%)", before: 19.5, after: 34.2, change: "+75.3%" },
];

// 5. Donut Chart Data: Budget Allocation across Funnel Stages & Placements
export const funnelBudgetSplitData = [
  { name: "TOFU (Top of Funnel)", value: 55, amount: "₹10,175", color: "#5645d4", role: "Cold pattern interrupts & broad reach" },
  { name: "MOFU (Middle of Funnel)", value: 25, amount: "₹4,625", color: "#388bfd", role: "Product education & bundle consideration" },
  { name: "BOFU (Bottom of Funnel)", value: 20, amount: "₹3,700", color: "#1aae39", role: "Cart abandoners & gift bundle closing" },
];

export const placementSplitData = [
  { name: "Instagram Reels", value: 45, amount: "₹8,325", color: "#e1306c" },
  { name: "Instagram Feed", value: 30, amount: "₹5,550", color: "#833ab4" },
  { name: "Stories & Explore", value: 25, amount: "₹4,625", color: "#f77737" },
];
