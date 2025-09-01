export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  industryLabel: string;
  metrics: {
    improvement: string;
    timeFrame: string;
  };
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  challenges: string[];
  approach: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  topics?: string[];
}

export const caseStudiesData: CaseStudy[] = [
  
  {
    id: '1',
      title: 'B2B Demand Forecasting, Sales Alerts and Profitability Management System',
      description:
        'AI-powered analytics platform leveraging machine learning to optimize inventory, forecast revenue, identify sales gaps, and improve margins through SKU-level forecasting and proactive sales interventions.',
      industry: 'manufacturing',
      industryLabel: 'Packaging Material',
      metrics: {
        improvement: '100% improvement in forecasting accuracy',
        timeFrame: '6 months'
      },
      problem:
        'The client aimed to optimize inventory and working capital, forecast revenue and analyze gaps, and improve margins by tracking high-margin sales drops and optimizing bidding strategies.',
      solution:
        'Built on a robust AI-powered analytics platform leveraging advanced machine learning across modules: Sales Prediction and Gap Analysis, and SKU-Level Forecasting.',
      approach: [
        'Sales Prediction and Gap Analysis: Aggregated historical sales, customer orders, and procurement notes to predict sales orders using machine learning models. Lead scoring prioritized high-impact opportunities. Compared predicted sales with actuals to highlight discrepancies. Built dashboards and weekly reports in Tableau/Power BI for proactive sales alerts.',
        'SKU-Level Forecasting: Forecasted 16,000 SKUs with time-series ML models, incorporating seasonality, market trends, and order probabilities to achieve 100% accuracy improvement. Implemented dynamic inventory norms for depots and finished goods to optimize raw material procurement and reduce wastage.'
      ],
      challenges: [
        'Optimizing inventory levels and unlocking working capital.',
        'Providing actionable insights to sales teams for timely order tracking and gap closure.',
        'Forecasting revenue for upcoming quarters.',
        'Tracking drop in high-margin sales and alerting sales teams by optimizing bidding strategies and proactive interventions.'
      ],
      results: [
        '100% Improvement in Forecasting Accuracy: Achieved SKU-level accuracy for precise revenue forecasting and optimized resource allocation.',
        'Proactive Sales Interventions: Proactive alerts helped sales teams identify gaps and improve order tracking efficiency.',
        'Reduced Working Capital and Wastage: Enhanced forecasting and inventory norms minimized excess stock and raw material costs.',
        'Improved Profitability: Data-driven bidding and prioritization increased ROI, improved bid success rates, and delivered sustainable growth.'
      ],
      technologies: ['Machine Learning', 'Time-series Models', 'Tableau', 'Power BI'],
      testimonial: { quote: '', author: '', position: '', company: '' },
      topics: ['Forecasting', 'Packaging Material']
  },
  {
      id: '2',
      title: 'Store Recommendation System for Lubricant Brand',
      description:
        'AI-powered analytics platform integrating diverse data sources and advanced models to drive store-level inventory recommendations, upselling, cross-selling, and incentive optimization.',
      industry: 'oil_lubricants',
      industryLabel: 'Oil and Lubricants',
      metrics: {
        improvement: '50,000 outlets optimized',
        timeFrame: '8 months'
      },
      problem:
        'The client wanted to boost incremental sales, expand market share in pilot retail and service center locations, and ensure optimal lubricant product availability aligned with sales incentives and business goals.',
      solution:
        'Leveraged an AI-powered analytics platform that integrated historical sales data, external data, and advanced modeling techniques to deliver store-level recommendations, optimize incentive schemes, and set final growth targets.',
      approach: [
        'Store-Level Inventory Recommendations: Analysed SKU-level historical sales data and trade targets to forecast demand for lubricant products (e.g., motor oils, industrial lubricants).',
        'External Data Led Cross Selling: Factored in seasonal demand (e.g., vehicle maintenance seasons), regional vehicle types (VAHAN portal), weather patterns, and similar geography sales patterns.',
        'Target Scheme and Incentive Optimization: Segmented stores based on historical growth, location type (urban vs. rural auto shops), and purchasing behaviour. Applied uplift modeling to measure impact of incentive schemes and payout structures.',
        'Final Target Setting: Aggregated demand forecasts from store to regional levels, aligning with overarching geographical growth objectives for the brand.'
      ],
      challenges: [
        'Boosting incremental sales and market share across diverse store formats.',
        'Ensuring lubricant availability at the right time and location.',
        'Aligning trade incentives with sales performance goals.',
        'Factoring seasonal, regional, and behavioural trends into demand forecasting.'
      ],
      results: [
        '50,000 outlets optimized across channels: Sales recommendations for more than 120 products across 50,000 outlets.',
        'Improved ROI on trade promotions: Redirected budgets to high-potential stores, enhancing ROI.',
        'Reduced promotional wastage: Alignment of offers with store-level demand patterns reduced inefficiencies.'
      ],
      technologies: ['AI-powered analytics platform', 'Machine Learning', 'Uplift Modeling'],
      testimonial: { quote: '', author: '', position: '', company: '' },
      topics: ['Recommendation Systems', 'Oil & Lubricants', 'Chemicals']
  },
  {
    id: '3',
    title: 'Price Inflexion Point Study for Large FMCG Brand',
    description:
      'A non-linear Marketing Mix Modelling (MMM) engine was used to identify optimal price adjustments, minimize market share erosion, and enhance pricing agility amid rising input costs.',
    industry: 'consumer_goods',
    industryLabel: 'Consumer Goods',
    metrics: {
      improvement: '5% price increase implemented',
      timeFrame: '4 months'
    },
    problem:
      'A leading FMCG brand in South Asia faced significant margin pressures due to rising palm oil prices, necessitating a price increase. The challenge was to determine where price hikes could be executed with minimal market share loss, benchmark competitors, and safeguard revenue against erosion.',
    solution:
      'Developed a non-linear Marketing Mix Modelling (MMM) engine that incorporated elasticity, competitor benchmarking, trade promotion impact, and scenario simulations to optimize pricing strategies.',
    approach: [
      'Price Elasticity Analysis: Evaluated demand sensitivity to different price points across markets.',
      'Relative Price Sensitivity: Assessed importance of pricing against specific competitors in each region.',
      'Trade Promotion & Media Impact: Incorporated influence of promotions and advertising on price perception.',
      'Inflection Point Identification: Determined thresholds where price increases would significantly impact market share.',
      'Competitive Price Tracker: Built a real-time dashboard to monitor competitor pricing and adjust strategies dynamically.',
      'War Game Simulations: Enabled scenario testing to predict competitor reactions and optimize pricing strategies proactively.'
    ],
    challenges: [
      'Determining optimal price adjustments while minimizing market share loss.',
      'Benchmarking against competitors to maintain relative positioning.',
      'Protecting volume and revenue amidst rising input costs.',
      'Safeguarding brand market share during inflationary pressures.'
    ],
    results: [
      '5% Price Increase Implemented without significant market share loss.',
      'Competitor-Specific Pricing Strategies ensured optimal relative positioning in high-impact markets.',
      'Enhanced Pricing Agility through real-time tracking, competitor monitoring, and scenario simulations.'
    ],
    technologies: ['Marketing Mix Modelling (MMM)', 'Competitive Price Tracker', 'War Game Simulations'],
    testimonial: { quote: '', author: '', position: '', company: '' },
    topics: ['Revenue Growth Management', 'FMCG', 'CPG']
  },
  {
    id: '4',
    title: 'Trade Promotion Scheme Design for Large Adhesive Brand',
    description:
      'Designed a data-driven trade promotion scheme for a large adhesive brand, optimizing incentive slabs and improving budget efficiency across 500,000+ stores with diverse channels and retailer sizes.',
    industry: 'chemicals',
    industryLabel: 'Chemicals',
    metrics: {
      improvement: '3% sales uplift',
      timeFrame: '6 months'
    },
    problem:
      'The client, a large adhesive brand based in India, operated across over 500,000 stores with varying channels and sizes. Existing trade promotions such as discounts, points, and gifts had different incentive slabs and targets, but lack of insights led to inefficient budget allocation, suboptimal sales uplift, and low ROI on promotional spend.',
    challenges: [
      'Promotion Effectiveness: Difficulty in understanding uplift elasticity patterns across different promo slabs, retailers, and schemes.',
      'Saturation Levels: Identifying points of diminishing returns to avoid overspending on promotions.',
      'Budget Constraints: Maintaining budgets while ensuring meaningful sales growth across diverse store types and channels.',
      'Scheme Optimization: Lack of data-driven insights to design slabs and targets aligned with retailer performance and market dynamics.'
    ],
    solution:
      'Analyzed historical sales and promotion data across 500,000+ stores, developed a Promo Analytics Module to evaluate uplift elasticity, and created optimized incentive slabs that maximized sales uplift while adhering to budget constraints.',
    approach: [
      'Data Prep: Processed historical sales data, promotion details (discounts, points, gifts), retailer performance, and channel trends.',
      'Promo Analytics Module: Built module to study uplift elasticity patterns, determining saturation levels for promo slabs and schemes.',
      'Optimized Slabs: Designed data-driven incentive slabs and targets to maximize uplift while respecting budget limitations.'
    ],
    results: [
      'Sales Uplift: Achieved a 3% increase in sales with optimized slabs tailored to retailer and scheme performance.',
      'Budget Efficiency: Maintained budget control while enhancing promotional effectiveness, avoiding overspend on saturated markets.',
      'Targeted Strategy: Improved allocation of incentives across diverse channels and store sizes, boosting retailer engagement and ROI.'
    ],
    technologies: ['Promo Analytics Module', 'Data-driven Incentive Design', 'Elasticity Analysis'],
    testimonial: { quote: '', author: '', position: '', company: '' },
    topics: ['Revenue Growth Management', 'Adhesives', 'Chemicals']
  },
  {
    id: '5',
  title: 'Tea Price Forecasting and Procurement Insights',
  description:
    'Ensemble machine learning–based tea price forecasting with external weather signals to improve procurement timing and pricing strategy.',
  industry: 'fmcg',
  industryLabel: 'FMCG',
  metrics: {
    improvement: '≥90% price forecast accuracy (1 quarter out)',
    timeFrame: '12-month horizon; quarterly updates'
  },
  problem:
    'Volatile tea prices driven by seasonality, weather, and demand–supply shifts made it hard to forecast accurately, affecting procurement timing and pricing strategy.',
  challenges: [
    'Price Volatility due to climatic conditions and supply–demand changes.',
    'Procurement Timing: identifying optimal bulk-buy windows.',
    'Pricing Strategy: aligning with market conditions to protect competitiveness and profitability.',
    'Demand Impact: understanding brand-level demand shifts from tea price changes.'
  ],
  solution:
    'Built an ensemble ML pipeline using 5 years of daily tea data plus AccuWeather signals to forecast prices 12 months ahead and derive demand-uplift rules.',
  approach: [
    'Data Prep: 5 years of historical daily tea; integrated AccuWeather data; engineered temporal features.',
    'Forecasting: Ensemble ML model to predict tea prices 12 months ahead with quarterly refresh; validated via cross-validation and blackout periods, achieving ≥90% accuracy one quarter out.',
    'Demand Uplift Patterns: Uplift/downlift rule sets layered on top of demand forecasts.'
  ],
  results: [
    'High Accuracy: identified optimal bulk purchase periods to reduce procurement costs.',
    'Enhanced Pricing Strategy: proactive price adjustments to maintain competitiveness and margins.',
    'Demand Forecast: better projections by incorporating commodity-price-driven uplift.'
  ],
  technologies: ['Ensemble ML', 'Temporal Feature Engineering', 'AccuWeather Data'],
  testimonial: { quote: '', author: '', position: '', company: '' },
  topics: ['Forecasting', 'FMCG', 'CPG']
  },
  {
      id: '6',
    title: '40% Forecasting Accuracy for US Car Wash Company using Weather-based Seasonal Patterns',
    description:
      'Feature Engineering Engine incorporating 14 weather datasets to boost 90-day demand forecast accuracy and unlock working capital.',
    industry: 'services',
    industryLabel: 'Services',
    metrics: {
      improvement: '40% improvement in 90-day forecasting accuracy',
      timeFrame: '90-day horizon'
    },
    problem:
      'High dependency on fluctuating weather made demand hard to predict, hurting resource allocation, inventory planning, and working-capital optimization.',
    challenges: [
      'No integration with critical weather datasets.',
      'Demand swings from dynamic weather conditions.',
      'Inefficient inventory/planning due to inaccurate predictions.',
      'Working capital tied up in excess or under-utilized resources.'
    ],
    solution:
      'Integrated external weather factors with historical sales and delivered dashboards for real-time forecasting and decisions.',
    approach: [
      'Data Integration: 14 key weather pattern datasets (rain, humidity, temperature, wind, snow).',
      'Modeling: enhanced demand models including external weather factors plus historical sales.',
      'Decisioning: dashboards and actionable insights for real-time planning.'
    ],
    results: [
      '40% improvement in 90-day forecasting accuracy.',
      'Enhanced planning efficiency for manpower and marketing.',
      '15% working-capital unlock via optimized inventory/resource allocation.',
      'Improved operational responsiveness to changing weather.'
    ],
    technologies: ['Intellimark Feature Engineering Engine', 'Weather Data Fusion', 'Forecast Dashboards'],
    testimonial: { quote: '', author: '', position: '', company: '' },
    topics: ['Forecasting', 'Services']
  },
  {
    id: '7',
  title: 'Forecasting Improvement for Fortune 500 Consumer Appliances Company',
  description:
    'City×Product-level forecasting and dynamic distributor norms to cut unsold inventory and rationalize product–market variants.',
  industry: 'consumer_electronics',
  industryLabel: 'Consumer Electronics (Appliances)',
  metrics: {
    improvement: '30% average forecasting accuracy improvement',
    timeFrame: '—'
  },
  problem:
    'Demand forecasting hampered by weather-influenced variation, poor product-level accuracy, new launches, and high logistics costs, leading to value loss if products were unsold before next version.',
  challenges: [
    'Bad forecast accuracy at specific product levels and markets.',
    'Forecasting for new launches and complementary brands.',
    'High logistics costs for heavy products due to poor planning.',
    'Value loss for products not sold before next version.',
    'Lack of integration of color/feature variants affected by weather patterns.'
  ],
  solution:
    'Deployed granular city×product forecasting with dynamic distributor norms and variant rationalization recommendations.',
  approach: [
    'Granular Forecasts: city×product level for maximum accuracy.',
    'Dynamic Norms: distributor norms to reduce unsold inventory.',
    'Variant Actions: recommendations to remove specific variants from specific geographies.'
  ],
  results: [
    '80% SKUs gained forecast accuracy.',
    '30% average accuracy improvement.',
    '300 product×market combinations removed.'
  ],
  technologies: ['Intellimark Feature Engineering Engine', 'Granular City×Product Forecasting', 'Variant Optimization'],
  testimonial: { quote: '', author: '', position: '', company: '' },
  topics: ['Forecasting', 'Electronics']
  },
  {
    id: '8',
  title: 'Forecasting Accuracy and Impact of Pricing and Ad Spends for Popular Skincare Brand',
  description:
    'Teresa Forecasting Engine combining e-commerce scrape (Amazon), ad-spend, competitor prices, and category rankings to stabilize forecasts and cut OOS.',
  industry: 'beauty_wellbeing',
  industryLabel: 'Beauty and Wellbeing',
  metrics: {
    improvement: '25% improvement in e-commerce forecast accuracy',
    timeFrame: '—'
  },
  problem:
    'Volatile e-commerce sales driven by fluctuating ad spends, competitive pricing, and category rankings caused inaccurate forecasts and frequent out-of-stocks; limited external data further reduced visibility.',
  challenges: [
    'Highly volatile and unpredictable e-commerce sales.',
    'Sales heavily dependent on ad spend and competitor pricing.',
    'Category rankings strongly impacting visibility and sales.',
    'Limited integration of external data for effective forecasting.'
  ],
  solution:
    'Scraped real-time marketplace data, integrated ad-spend and rankings, and built a forecasting model that fuses these external sources.',
  approach: [
    'Data Collection: scraped Amazon to monitor brand and competitor prices.',
    'Media Integration: incorporated ad-spend data to analyze impact on sales.',
    'Ranking Signals: factored category rankings for visibility effects.',
    'Modeling: robust forecasting model that ingests external data sources.'
  ],
  results: [
    '25% improvement in e-commerce forecast accuracy (FA).',
    '200 pricing and media insights generated.',
    '50% reduction in out-of-stock issues.'
  ],
  technologies: ['Intellimark Teresa Forecasting Engine', 'E-commerce Scraping (Amazon)', 'Price/Rank/Media Fusion'],
  testimonial: { quote: '', author: '', position: '', company: '' },
  topics: ['Forecasting', 'Revenue Growth Management', 'Beauty & Wellbeing', 'CPG']
  },
  {
    id: '9',
  title: 'Store Recommendation and Incentive for Large Indian Beer Brand',
  description:
    'AI-powered store recommendation and incentive optimization to improve market share, trade promotion effectiveness, and inventory planning for a leading Indian beer brand.',
  industry: 'consumer_goods',
  industryLabel: 'Consumer Goods',
  metrics: {
    improvement: '8% market share gain in pilot stores',
    timeFrame: '—'
  },
  problem:
    'The client wanted to drive incremental sales, improve market share, and maximize the effectiveness of trade promotions, while ensuring optimal inventory and aligning incentives with business goals.',
  challenges: [
    'Increasing market share in pilot stores.',
    'Maximizing trade promotion ROI through better targeting.',
    'Ensuring right product availability at right time.',
    'Aligning sales incentives with business objectives.'
  ],
  solution:
    'Built an AI-powered analytics platform integrating SKU-level sales and trade targets with seasonality, festival periods, and regional preferences to optimize inventory, promotions, and incentives.',
  approach: [
    'Store-Level Brand Inventory Recommendations: leveraged SKU-level sales data and trade targets; incorporated seasonality, festivals, and regional preferences.',
    'Target Scheme and Incentive Optimization: segmented stores by growth, location, purchasing behavior; applied uplift modeling for scheme payout attribution.',
    'Final Target Setting: aggregated demand bottom-up from stores to regions to align with geographical growth targets.'
  ],
  results: [
    '7,000 customers optimized across channels.',
    'Depot × Channel Uplift Analysis: identified most effective levers across 75 depots.',
    '8% market share gain in pilot stores; improved sales velocity and inventory turnover.',
    'Improved ROI: redirected spends to high-potential stores, reduced wastage.'
  ],
  technologies: ['AI-powered analytics platform', 'Uplift Modeling', 'Trade Promotion Optimization'],
  testimonial: { quote: '', author: '', position: '', company: '' },
  topics: ['Recommendation Systems', 'FMCG', 'CPG']
  },
  {
    id: '10',
  title: 'Lever 1 to 5 – Large Dairy and Tuna Brands in SEAA',
  description:
    'Net Revenue Management (NRM) strategy leveraging Nielsen data to set optimal price points, identify whitespace SKU opportunities, and define SPI ranges for profitability.',
  industry: 'consumer_goods',
  industryLabel: 'Consumer Goods',
  metrics: {
    improvement: 'Recommended SPI ranges and new SKU launches',
    timeFrame: '—'
  },
  problem:
    'A leading milk brand in South Asia faced margin pressures from rising costs. Needed to set optimal pricing, benchmark competitors, identify whitespace opportunities, and establish SPI ranges for SKUs.',
  challenges: [
    'Determine optimal price points without losing share.',
    'Benchmark against competitors to maintain positioning.',
    'Explore whitespace for new SKUs by size/variant.',
    'Set SPI ranges by SKU to guide pricing decisions.',
    'Optimize between discount-based vs. absolute price drop mechanisms.'
  ],
  solution:
    'Implemented comprehensive NRM strategy combining SKU mapping, whitespace analysis, SPI range setting, and pricing mechanism optimization using Nielsen and finance insights.',
  approach: [
    'Competitive SKU Mapping: mapped brand SKUs vs. competitors; used elasticity to assess demand sensitivity.',
    'Relative Price Strategy: positioned SKUs at 95–105% of competitor SKUs for balance.',
    'Whitespace Analysis: analyzed Nielsen data to find gaps (e.g., 250ml flavored SKU, 1.5L family pack).',
    'SPI Range Development: recommended SPI ranges (e.g., 90–110 for standard SKUs, 105–120 premium).',
    'Pricing Mechanism Optimization: tested discount vs. absolute drops; recommended hybrid approach.'
  ],
  results: [
    'Tailored pricing strategy balancing affordability and profitability.',
    'New SKUs launched to address unmet demand in urban/semi-urban markets.',
    'SPI ranges set to maintain competitiveness and profitability.',
    'Hybrid pricing mechanism recommended.'
  ],
  technologies: ['Net Revenue Management (NRM)', 'Nielsen Data Analysis', 'Elasticity Modeling'],
  testimonial: { quote: '', author: '', position: '', company: '' },
  topics: ['Forecasting', 'Revenue Growth Management', 'Packaging Material']
  },
  {
    id: '11',
  title: 'Impact of Pricing and Same Page RPI for Popular Skincare Brand',
  description:
    'Teresa Forecasting Engine scraping e-commerce + ad spend + rankings to improve pricing, visibility, and reduce out-of-stocks for skincare brand.',
  industry: 'beauty_wellbeing',
  industryLabel: 'Beauty and Wellbeing',
  metrics: {
    improvement: '25% e-commerce forecast accuracy improvement',
    timeFrame: '—'
  },
  problem:
    'Volatile e-commerce sales driven by ad spend fluctuations, competitive pricing, and category rankings caused inaccurate forecasts and stockouts. Limited external data worsened visibility and decision-making.',
  challenges: [
    'Unpredictable e-commerce sales.',
    'Dependence on ad spend and competitor pricing.',
    'Category rankings strongly impacting visibility/sales.',
    'Limited external integration for forecasting.'
  ],
  solution:
    'Scraped Amazon pricing for brand + competitors, integrated ad spend + rankings, and built forecasting model with these external inputs.',
  approach: [
    'Scraping: gathered competitor + brand real-time prices from Amazon.',
    'Media Integration: added ad spend data to model media impact.',
    'Ranking Integration: factored category ranking into demand forecasts.',
    'Forecasting: robust ML model fusing external signals.'
  ],
  results: [
    '25% improvement in e-commerce forecast accuracy.',
    '200 pricing and media insights generated.',
    '50% reduction in out-of-stock issues.'
  ],
  technologies: ['Intellimark Teresa Forecasting Engine', 'E-commerce Scraping', 'Ad Spend + Ranking Data Integration'],
  testimonial: { quote: '', author: '', position: '', company: '' },
  topics: ['Revenue Growth Management', 'CPG']
  }
];