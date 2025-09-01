// src/data/CaseStudyDesc.ts

export type Challenge = {
  title: string;
  description: string;
};

export type SolutionItem = {
  title: string;
  description: string;
};

export type ApproachStep = {
  step: number;
  title: string;
  description: string;
};

export type ResultItem = {
  text: string;
};

export interface CaseStudyDesc {
  id: number;
  slug: string;

  /** Header + hero */
  headerTitle: string;
  badgeText: string;
  heroTitlePrefix: string;
  heroTitleEmphasis: string;
  heroSubtext: string;

  /** Problem */
  problem: {
    companyName: string;
    text: string;
  };

  /** Challenges */
  challenges: Challenge[];

  /** Solution */
  solution: {
    intro: string;
    blocks: SolutionItem[];
  };

  /** Approach / steps */
  approach: ApproachStep[];

  /** Results */
  results: ResultItem[];

  /** Optional categorisation */
  industry?: string;
  industryLabel?: string;
}

// Example: first 3 case studies filled in (from your slides)
export const caseStudies: CaseStudyDesc[] = [
  {
    id: 1,
    slug: "b2b-demand-forecasting-packaging",
    headerTitle: "B2B Demand Forecasting, Sales Alerts & Profitability",
    badgeText: "Packaging Material",
    heroTitlePrefix: "AI-Powered",
    heroTitleEmphasis: " Forecasting & Sales Intelligence",
    heroSubtext:
      "Optimize inventory & working capital, forecast revenue, and improve margins with SKU-level predictions and proactive sales interventions.",

    problem: {
      companyName: "Packaging Material Enterprise",
      text:
        "Need to ensure optimal inventory levels, unlock working capital, close gaps vs. targets, plan revenue for coming quarters, and improve margins via smarter bidding and sales prioritization.",
    },

    challenges: [
      { title: "Legacy & Silos", description: "Fragmented data across sales, orders, and procurement notes." },
      { title: "Forecasting Gaps", description: "Baseline models missed seasonality and market signals at SKU level." },
      { title: "Capital Locked", description: "Excess stock & raw material buffers increased working capital." },
      { title: "Reactive Sales", description: "Teams lacked proactive alerts for closing order gaps." },
    ],

    solution: {
      intro:
        "A robust analytics platform leveraging advanced ML to centralize data and drive decisions across sales prediction, gap analysis, and profitability.",
      blocks: [
        { title: "Predictive Modeling", description: "Aggregate sales/orders; time-series ML for SKU demand." },
        { title: "Gap Analysis & Alerts", description: "Compare predicted vs actuals; proactive alerts for gaps." },
        { title: "Visualization", description: "Dashboards & weekly reports for timely insights." },
        { title: "Inventory Optimization", description: "Dynamic norms for depots & finished goods to reduce wastage." },
      ],
    },

    approach: [
      { step: 1, title: "Sales Prediction & Gap Analysis", description: "Time-series ML with seasonal & market signals." },
      { step: 2, title: "SKU-Level Forecasting", description: "16k SKUs forecasted with probability bands." },
      { step: 3, title: "Analytics Ops", description: "Regular refresh, QC checks, stakeholder reviews." },
    ],

    results: [
      { text: "100% improvement in SKU-level forecasting accuracy" },
      { text: "Proactive sales interventions to close trade gaps" },
      { text: "Reduced working capital and raw material wastage" },
      { text: "Improved profitability through data-driven bidding" },
    ],
    industry: "packaging_material",
    industryLabel: "Packaging Material",
  },
  {
    id: 2,
    slug: "store-reco-lubricants",
    headerTitle: "Store Recommendation System for Lubricant Brand",
    badgeText: "Oil & Lubricants",
    heroTitlePrefix: "Store-Level",
    heroTitleEmphasis: " Recommendations & Target Setting",
    heroSubtext:
        "Boost incremental sales via optimized assortment, incentives, and geographic targeting across retail & service centers.",

    problem: {
        companyName: "Leading Lubricant Brand",
        text:
        "Needed to expand market share, ensure lubricant product availability at the right stores/times, and align sales incentives with business goals.",
    },

    challenges: [
        { title: "Inventory & Incentives", description: "Ensuring right SKUs at right outlets, aligning incentives to sales goals." },
        { title: "Store Variability", description: "Differences in location type (urban vs rural), sales growth, and purchasing behavior." },
        { title: "Signal Integration", description: "Factoring seasonal demand (maintenance peaks), vehicle types, weather, and geography." },
    ],

    solution: {
        intro:
        "AI-powered analytics platform integrating sales, geography, and external signals to generate store-level recommendations and optimize incentives.",
        blocks: [
        { title: "Upselling & Cross-Selling", description: "SKU-level forecasts; demand signals from historical sales and trade targets." },
        { title: "External Data Fusion", description: "Seasonality, vehicle types (VAHAN), weather, and regional patterns." },
        { title: "Scheme Optimization", description: "Segment stores by type/behavior; uplift modeling to test scheme impact." },
        { title: "Target Setting", description: "Roll up forecasts from store → region → national to meet brand goals." },
        ],
    },

    approach: [
        { step: 1, title: "Data Onboarding", description: "Integrated historical sales, trade targets, outlet attributes, geo-signals." },
        { step: 2, title: "Modeling", description: "Propensity + uplift models to score outlets and simulate scheme impact." },
        { step: 3, title: "Deployment", description: "Recommendations distributed to sales teams; monitored and refreshed." },
    ],

    results: [
        { text: "50,000 outlets optimized across channels for 120+ products" },
        { text: "Improved ROI on trade promotions" },
        { text: "Reduced promotional wastage with store-level alignment" },
    ],

    industry: "oil_lubricants",
    industryLabel: "Oil & Lubricants",
  },
  {
            id: 3,
            slug: "price-inflexion-fmcg",
            headerTitle: "Price Inflexion Point Study for Large FMCG Brand",
            badgeText: "Consumer Goods",
            heroTitlePrefix: "Non-linear MMM",
            heroTitleEmphasis: " for Pricing Decisions",
            heroSubtext:
                "Identify price thresholds, competitor sensitivity, and promo/media effects to raise prices without losing share.",

            problem: {
                companyName: "Large FMCG Brand (South Asia)",
                text:
                "Margin pressures from rising palm oil costs required price increases, but risked market share erosion if poorly executed.",
            },

            challenges: [
                { title: "Price Adjustment", description: "Needed to determine optimal geographies where price increases would minimize share loss." },
                { title: "Competitor Benchmarking", description: "Understanding relative pricing against rivals was critical." },
                { title: "Market Share Risk", description: "Price hikes had to be staged carefully to avoid erosion." },
            ],

            solution: {
                intro:
                "Non-linear Marketing Mix Modelling (MMM) engine assessing elasticity, competitive sensitivity, and media/promotional impact.",
                blocks: [
                { title: "Elasticity Analysis", description: "Measured demand response to different price points across markets." },
                { title: "Relative Sensitivity", description: "Assessed competitor-driven reactions and share trade-offs." },
                { title: "Promo & Media Impact", description: "Controlled for promotions and advertising effects on price perception." },
                { title: "Inflection & Scenario Planning", description: "Identified thresholds; war-game simulations and competitor price tracker." },
                ],
            },

            approach: [
                { step: 1, title: "Data Assembly", description: "Integrated prices, volumes, promos, media, and competitor price scans." },
                { step: 2, title: "Modeling", description: "Non-linear MMM with cross-elasticities, back-testing on holdout data." },
                { step: 3, title: "Scenario Planning", description: "Playbooks for where/how to hike prices safely." },
            ],

            results: [
                { text: "5% price increase implemented without significant share loss" },
                { text: "Competitor-specific pricing strategies across high-impact markets" },
                { text: "Enhanced agility with real-time competitor price tracker & scenarios" },
            ],

            industry: "consumer_goods",
            industryLabel: "Consumer Goods",
            },
            {
        id: 4,
        slug: "trade-promo-adhesive",
        headerTitle: "Trade Promotion Scheme Design for Large Adhesive Brand",
        badgeText: "Chemicals",
        heroTitlePrefix: "Promotion",
        heroTitleEmphasis: " Scheme Optimization",
        heroSubtext:
            "Maximized promotional ROI across 500,000+ outlets by designing optimized slabs and uplift-focused schemes.",

        problem: {
            companyName: "Large Adhesive Brand (India)",
            text:
            "Trade promos lacked insight into effectiveness, causing inefficient budget allocation, suboptimal sales uplift, and low ROI.",
        },

        challenges: [
            { title: "Promotion Effectiveness", description: "Hard to quantify elasticity of different promo slabs." },
            { title: "Saturation Levels", description: "No visibility into diminishing returns from extra spend." },
            { title: "Budget Constraints", description: "Tight budgets across varied outlets." },
            { title: "Scheme Optimization", description: "Needed data-driven slabs/targets aligned to retailer performance." },
        ],

        solution: {
            intro:
            "Promo analytics module built on historical data to evaluate uplift, saturation, and optimized slab design.",
            blocks: [
            { title: "Data Prep", description: "Analyzed sales, discounts, points, gifts, retailer/channel trends across 500k+ stores." },
            { title: "Promo Analytics", description: "Studied uplift elasticity; saturation levels for schemes." },
            { title: "Optimized Slabs", description: "Designed new slabs maximizing uplift while adhering to budget." },
            ],
        },

        approach: [
            { step: 1, title: "Data Preparation", description: "Collected & standardized promotion/sales/retailer data." },
            { step: 2, title: "Module Development", description: "Built uplift elasticity & slab analytics engine." },
            { step: 3, title: "Optimization", description: "Refined incentive design, balancing uplift vs spend." },
        ],

        results: [
            { text: "3% increase in sales uplift via optimized slabs" },
            { text: "Budget efficiency maintained despite constraints" },
            { text: "Targeted strategy improved retailer engagement & sales performance" },
        ],

        industry: "chemicals",
        industryLabel: "Chemicals",
    },
    {
        id: 5,
  slug: "tea-price-forecasting",
  headerTitle: "Tea Price Forecasting and Procurement Insights",
  badgeText: "FMCG",
  heroTitlePrefix: "Tea Price",
  heroTitleEmphasis: " Forecasting & Procurement",
  heroSubtext:
    "Improved procurement efficiency and pricing decisions for a leading FMCG tea brand using ML forecasts and weather signals.",

  problem: {
    companyName: "Leading FMCG Tea Brand",
    text:
      "Volatility in tea prices made it hard to forecast costs, plan procurement, and align pricing strategies to maintain competitiveness.",
  },

  challenges: [
    { title: "Price Volatility", description: "Significant fluctuations from climate, supply-demand imbalances." },
    { title: "Procurement Timing", description: "Difficult to identify best bulk purchase windows." },
    { title: "Pricing Strategy", description: "Needed alignment with market conditions to remain profitable." },
    { title: "Demand Impact", description: "Tea price changes impacted demand across portfolio brands." },
  ],

  solution: {
    intro:
      "ML-driven forecasting system combining 5 years of tea price data, weather patterns, and demand-supply signals.",
    blocks: [
      { title: "Data Prep", description: "Integrated daily tea prices with Accuweather and temporal features." },
      { title: "Forecasting Model", description: "12-month ahead ensemble model validated quarterly, >90% accuracy 1 quarter out." },
      { title: "Demand Uplift Patterns", description: "Uplift/downlift rules layered on top of forecasts for demand impact." },
    ],
  },

  approach: [
    { step: 1, title: "Data Integration", description: "Merged 5y daily prices + weather, engineered seasonal features." },
    { step: 2, title: "Modeling", description: "Ensemble ML with cross-validation and blackout tests." },
    { step: 3, title: "Deployment", description: "Quarterly refresh and integration with procurement planning." },
  ],

  results: [
    { text: "High accuracy: optimal bulk procurement periods identified" },
    { text: "Enhanced pricing strategy: better competitiveness & profitability" },
    { text: "Improved demand forecasts tied to commodity price changes" },
  ],

  industry: "fmcg",
  industryLabel: "FMCG",
    },
    {
  id: 6,
  slug: "car-wash-weather-forecasting",
  headerTitle: "40% Forecasting Accuracy for US Car Wash Company",
  badgeText: "Services",
  heroTitlePrefix: "Weather-based",
  heroTitleEmphasis: " Seasonal Forecasting",
  heroSubtext:
    "Enhanced demand forecasting with external weather signals to optimize resources and reduce working capital wastage.",

  problem: {
    companyName: "US Car Wash Chain",
    text:
      "High dependency on weather made demand volatile and forecasts imprecise. This led to inefficient resource allocation, inventory planning issues, and excess working capital tied up.",
  },

  challenges: [
    { title: "Weather Integration", description: "Lack of integration with weather datasets reduced accuracy." },
    { title: "Demand Fluctuation", description: "Hard to capture volatility from rain, snow, temperature swings." },
    { title: "Inventory Inefficiency", description: "Poor planning tied up resources in excess/under-utilized inventory." },
    { title: "Capital Locked", description: "High working capital blocked due to inaccurate forecasts." },
  ],

  solution: {
    intro:
      "Feature-engineered forecasting using 14 weather variables combined with sales data, delivering better precision.",
    blocks: [
      { title: "Weather Data Fusion", description: "Rain, humidity, temp, wind, snow integrated with sales." },
      { title: "Forecast Model", description: "Enhanced demand models with external + historical signals." },
      { title: "Dashboards", description: "Real-time insights to support planning & decision-making." },
    ],
  },

  approach: [
    { step: 1, title: "Data Integration", description: "Merged weather + sales history." },
    { step: 2, title: "Feature Engineering", description: "14 climate variables used for ML features." },
    { step: 3, title: "Deployment", description: "Dashboards and alerts for ops teams." },
  ],

  results: [
    { text: "40% improvement in 90-day forecast accuracy" },
    { text: "Enhanced manpower & marketing planning efficiency" },
    { text: "15% working capital unlocked via optimized planning" },
    { text: "Better responsiveness to dynamic weather" },
  ],

  industry: "services",
  industryLabel: "Services",
},

// 7) Fortune 500 Appliances Forecasting
{
  id: 7,
  slug: "fortune500-appliances-forecasting",
  headerTitle: "Forecasting Improvement for Fortune500 Consumer Appliances",
  badgeText: "Consumer Electronics",
  heroTitlePrefix: "Intellimark",
  heroTitleEmphasis: " Feature Engine Forecasting",
  heroSubtext:
    "City × Product-level forecasting to optimize inventory, logistics, and SKU planning for a Fortune500 brand.",

  problem: {
    companyName: "Fortune500 Appliance Company",
    text:
      "Forecasting accuracy was poor across products and geographies, causing logistics costs, inventory losses, and wasted capital on unsold products.",
  },

  challenges: [
    { title: "Bad Forecast Accuracy", description: "Especially weak at product-level in markets." },
    { title: "New Launches", description: "Uncertainty in forecasting new and complementary products." },
    { title: "High Logistics Costs", description: "Poor planning for heavy SKUs drove up costs." },
    { title: "Value Loss", description: "Unsold SKUs lost value when new versions launched." },
  ],

  solution: {
    intro: "Granular demand forecasting by product × city × color × feature variants.",
    blocks: [
      { title: "City x Product Forecasting", description: "Improved SKU-level precision." },
      { title: "Dynamic Inventory Norms", description: "Distributor rules optimized for inventory." },
      { title: "SKU Reduction", description: "Rationalized SKUs to cut waste in slow regions." },
    ],
  },

  approach: [
    { step: 1, title: "Granular Forecasting", description: "City × Product demand models trained." },
    { step: 2, title: "Inventory Rules", description: "Dynamic norms by distributor to avoid stockouts/overstocking." },
    { step: 3, title: "SKU Rationalization", description: "Removed unprofitable product × market combos." },
  ],

  results: [
    { text: "80% SKUs gained forecast accuracy" },
    { text: "30% average accuracy improvement" },
    { text: "300 product × market combos rationalized" },
  ],

  industry: "consumer_electronics",
  industryLabel: "Consumer Electronics",
},

// 8) Skincare Brand Forecasting (Pricing + Ads)
{
  id: 8,
  slug: "skincare-pricing-ads",
  headerTitle: "Forecasting Accuracy & Impact of Pricing & Ads for Skincare Brand",
  badgeText: "Beauty & Wellbeing",
  heroTitlePrefix: "E-commerce",
  heroTitleEmphasis: " Forecasting & Pricing Insights",
  heroSubtext:
    "Scraped competitor + ad spend data to build accurate forecasts and reduce stockouts for a skincare brand.",

  problem: {
    companyName: "Popular Skincare Brand",
    text:
      "Volatile e-commerce sales driven by ads, pricing, and rankings caused inaccurate forecasts, frequent stockouts, and poor planning.",
  },

  challenges: [
    { title: "Volatile Sales", description: "Highly dependent on ad spend and competition." },
    { title: "Ranking Dependence", description: "Category rankings dictated visibility & sales." },
    { title: "Data Gaps", description: "Limited use of external competitor/ad data." },
  ],

  solution: {
    intro:
      "Integrated e-commerce scrapes, competitor pricing, and ad spend data into a forecasting engine.",
    blocks: [
      { title: "E-com Data Scraping", description: "Real-time competitor + own SKU monitoring." },
      { title: "Ad Spend Integration", description: "Linked ad budgets with sales lift impact." },
      { title: "Ranking Features", description: "Modeled category rank → demand." },
    ],
  },

  approach: [
    { step: 1, title: "Data Scraping", description: "Amazon + competitors price/rank monitoring." },
    { step: 2, title: "Ad Spend Linkage", description: "Correlated marketing budgets with demand." },
    { step: 3, title: "Forecast Model", description: "Hybrid ML including ads, price, and rank signals." },
  ],

  results: [
    { text: "25% improvement in forecast accuracy" },
    { text: "200 pricing & media insights generated" },
    { text: "50% reduction in stockouts" },
  ],

  industry: "beauty",
  industryLabel: "Beauty & Wellbeing",
},

// 9) Beer Brand Store Recommendations
{
  id: 9,
  slug: "beer-brand-store-incentives",
  headerTitle: "Store Recommendation & Incentives for Indian Beer Brand",
  badgeText: "Consumer Goods",
  heroTitlePrefix: "Store-Level",
  heroTitleEmphasis: " Optimization & Incentives",
  heroSubtext:
    "Improved trade promotion ROI and market share via SKU-level forecasting and uplift modeling for beer retail.",

  problem: {
    companyName: "Large Indian Beer Brand",
    text:
      "Needed to grow market share while improving efficiency of trade promotions and ensuring store-level availability.",
  },

  challenges: [
    { title: "Trade Promo Impact", description: "Difficulty measuring uplift of promotions." },
    { title: "Store Segmentation", description: "Different location types had different growth." },
    { title: "Incentive Alignment", description: "Schemes not linked to store-level growth potential." },
  ],

  solution: {
    intro:
      "AI-driven analytics integrating sales + trade targets to optimize store-level recommendations and incentives.",
    blocks: [
      { title: "SKU-Level Forecasting", description: "Included seasonality, festivals, region prefs." },
      { title: "Segmentation", description: "Clustered stores by growth & type." },
      { title: "Uplift Modeling", description: "Estimated scheme impact on sales." },
    ],
  },

  approach: [
    { step: 1, title: "Data Integration", description: "Trade targets + sales + seasonality." },
    { step: 2, title: "Store Segmentation", description: "Clusters by urban/rural + growth trajectory." },
    { step: 3, title: "Target Setting", description: "Aggregated forecasts rolled up store → region → national." },
  ],

  results: [
    { text: "7,000 customers optimized across channels" },
    { text: "8% market share gain in pilot stores" },
    { text: "Improved ROI on trade promotions" },
  ],

  industry: "consumer_goods",
  industryLabel: "Consumer Goods",
},

// 10) Dairy + Tuna SEAA Pricing Strategy
{
  id: 10,
  slug: "dairy-tuna-seaa-pricing",
  headerTitle: "Lever 1 to 5 – Dairy & Tuna Brands in SEAA",
  badgeText: "Consumer Goods",
  heroTitlePrefix: "Net Revenue",
  heroTitleEmphasis: " Management Strategy",
  heroSubtext:
    "SKU mapping, SPI range development, and pricing simulations for milk & tuna brands to manage margin pressures.",

  problem: {
    companyName: "SEAA Dairy & Tuna Brands",
    text:
      "Rising production costs required strategic pricing adjustments to retain competitiveness while protecting margins.",
  },

  challenges: [
    { title: "Optimal Price Setting", description: "Needed right SKU price points to minimize share loss." },
    { title: "Competitor Benchmarking", description: "Compare SKUs against rivals." },
    { title: "Whitespace", description: "Identify new SKU opportunities (pack size, variants)." },
    { title: "SPI Range", description: "Needed strategic SPI benchmarks per pack." },
  ],

  solution: {
    intro:
      "Comprehensive NRM strategy: competitor mapping, elasticity analysis, whitespace opportunities, SPI dev, pricing mechanism.",
    blocks: [
      { title: "SKU Mapping & Pricing", description: "Mapped SKUs vs competitors, ran elasticity tests." },
      { title: "Whitespace Analysis", description: "Found new pack opportunities (e.g. 200ml, 1.5L)." },
      { title: "SPI Range Dev", description: "Developed index ranges by SKU type." },
      { title: "Pricing Mechanism", description: "Hybrid of discounts vs absolute drops tested with simulations." },
    ],
  },

  approach: [
    { step: 1, title: "Competitive Mapping", description: "Nielsen + finance data analysis." },
    { step: 2, title: "Elasticity Modeling", description: "Relative price sensitivity benchmarking." },
    { step: 3, title: "SPI & Pricing", description: "Recommended SPI + hybrid pricing strategy." },
  ],

  results: [
    { text: "Tailored pricing strategies by SKU" },
    { text: "New SKU launches identified (200ml milk, 1.5L family pack)" },
    { text: "Recommended SPI ranges by SKU type" },
    { text: "Hybrid approach to balance affordability & margins" },
  ],

  industry: "consumer_goods",
  industryLabel: "Consumer Goods",
},

// 11) Skincare Brand RPI Study
{
  id: 11,
  slug: "skincare-rpi-study",
  headerTitle: "Impact of Pricing & Same Page RPI for Skincare Brand",
  badgeText: "Beauty & Wellbeing",
  heroTitlePrefix: "E-commerce",
  heroTitleEmphasis: " RPI & Pricing Forecasting",
  heroSubtext:
    "Factored in competitor prices, ranks, and ad spends to improve forecast accuracy and reduce stockouts.",

  problem: {
    companyName: "Popular Skincare Brand",
    text:
      "Volatile sales due to ad spends, competitor pricing, and rankings caused inaccurate forecasts and frequent stockouts.",
  },

  challenges: [
    { title: "Volatile Sales", description: "Unpredictable due to e-com dynamics." },
    { title: "Ad Spend Dependence", description: "Sales tied to budget size." },
    { title: "Ranking-Driven", description: "Category ranks heavily influenced sales." },
  ],

  solution: {
    intro:
      "Forecasting model enhanced with Amazon scrapes, ad spend data, and ranking features.",
    blocks: [
      { title: "Data Scraping", description: "Collected real-time SKU + competitor prices & ranks." },
      { title: "Ad Spend Integration", description: "Analyzed media spend → sales lift." },
      { title: "Ranking Factorization", description: "Modeled rankings into forecast accuracy." },
    ],
  },

  approach: [
    { step: 1, title: "Data Integration", description: "Amazon + ad + rank signals combined." },
    { step: 2, title: "Modeling", description: "Forecast engine built with multi-signal features." },
    { step: 3, title: "Deployment", description: "Insights delivered to sales & inventory planning." },
  ],

  results: [
    { text: "25% improvement in forecast accuracy" },
    { text: "200 pricing & media insights" },
    { text: "50% fewer stockouts" },
  ],

  industry: "beauty",
  industryLabel: "Beauty & Wellbeing",
}
];
