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
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    title: 'B2B Demand Forecasting, Sales Alerts and Profitability Management System',
    description: 'An AI-powered analytics platform leveraging advanced machine learning to drive decision-making for sales prediction, gap analysis, and SKU-level forecasting.',
    industry: 'packaging_material',
    industryLabel: 'Packaging Material',
    metrics: {
      improvement: '100% improvement in forecasting accuracy',
      timeFrame: '6 months'
    },
    problem: 'The client aimed to optimize inventory and working capital, forecast revenue and analyze gaps, and improve margins by tracking high-margin sales drops and optimizing bidding strategies.',
    solution: 'The solution was built on a robust AI-powered analytics platform leveraging advanced machine learning to drive decision-making across three key modules: Sales Prediction and Gap Analysis, and SKU-Level Forecasting.',
    results: [
      '100% Improvement in Forecasting Accuracy: Achieved a 100% increase in SKU-level forecasting accuracy, enabling precise revenue forecasting for upcoming quarters and optimized resource allocation.',
      'Proactive Sales Interventions: Delivered proactive alerts to sales teams, identifying gaps against ambition in specific brand-product combinations and improving order tracking efficiency.',
      'Reduced Working Capital and Wastage: Enhanced forecasting and inventory norms minimized excess stock and raw material costs, improving procurement efficiency and inventory turnover.',
      'Improved Profitability: Data-driven bidding and sales prioritization increased returns on investment, with higher bid success rates and sustainable growth.'
    ],
    technologies: ['Machine Learning', 'Tableau', 'Power BI'],
    challenges: [
      'Optimizing inventory levels and unlocking working capital.',
      'Providing actionable insights to sales teams for timely order tracking and gap closure.',
      'Forecasting revenue for coming quarters.',
      'Tracking drop in high margin sales and alerting sales teams by optimizing bidding strategies and proactive sales interventions.'
    ],
    approach: [
      'Sales Prediction and Gap Analysis: Aggregated historical sales, customer orders, and procurement notes to predict sales orders using machine learning models. Lead scoring prioritized high-impact opportunities. Compared predicted sales with actuals to identify discrepancies and highlight gaps against ambition in specific brand-product combinations. Developed sales dashboards and weekly reports using Tableau/Power BI to provide actionable insights and proactive alerts for sales teams to track upcoming orders.',
      'SKU-Level Forecasting: Forecasted 16,000 SKUs using time-series machine learning models, incorporating seasonality, market trends, and sales order probabilities to achieve a 100% improvement in forecasting accuracy over the baseline. Dynamic inventory norms for depots and finished goods, optimizing raw material procurement and reducing wastage.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '2',
    title: 'Store Recommendation System for Lubricant Brand',
    description: 'An AI-powered analytics platform integrating diverse data sources and advanced models to drive decision-making for store-level inventory recommendations and target scheme/incentive optimization.',
    industry: 'oil_and_lubricants',
    industryLabel: 'Oil and Lubricants',
    metrics: {
      improvement: 'Optimized 50,000 outlets',
      timeFrame: '8 months'
    },
    problem: 'The client aimed to increase market share by boosting incremental sales and optimize store-level inventory and incentives to ensure optimal product availability and align sales incentives with business goals.',
    solution: 'The solution leveraged an AI-powered analytics platform, integrating diverse data sources and advanced models to drive decision-making in store-level inventory recommendations and target scheme and incentive optimization.',
    results: [
      '50,000 Outlets Optimized Across Channels: Sales recommendations for more than 120 products across 50,000 outlets.',
      'Improved ROI on Trade Promotions: Redirected promotional budgets to high-potential stores, enhancing return on investment. Reduced promotional wastage by aligning offers with store-level demand patterns.'
    ],
    technologies: ['AI-powered analytics platform', 'Machine Learning'],
    challenges: [
      'Increase market share by boosting incremental sales and expanding market share in pilot retail and service centre locations.',
      'Optimize store-level inventory and incentives to ensure optimal lubricant product availability at the right time and align sales incentives with business goals.'
    ],
    approach: [
      'Store-Level Inventory Recommendations: Analyzed SKU-level historical sales data and trade targets to forecast demand for lubricant products (e.g., motor oils, industrial lubricants). Factored in seasonal trends (e.g., peak demand during vehicle maintenance seasons), regional vehicle types (VAHAN portal), weather patterns and similar geography sales patterns.',
      'Target Scheme and Incentive Optimization: Segmented stores based on historical sales growth, location type (e.g., urban auto shops vs. rural service centres), and purchasing behaviours. Applied uplift modeling to measure the impact of various incentive schemes and payout structures on sales performance.',
      'Final Target Setting: Aggregated demand forecasts from store-level to regional levels, aligning targets with overarching geographical growth objectives for the lubricant brand.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '3',
    title: 'Price Inflexion Point Study for Large FMCG Brand',
    description: 'A non-linear Marketing Mix Modelling (MMM) engine that helped a leading FMCG brand determine optimal price adjustments, benchmark competitors, and minimize market share erosion.',
    industry: 'consumer_goods',
    industryLabel: 'Consumer Goods',
    metrics: {
      improvement: '5% price increase implemented',
      timeFrame: '3 months'
    },
    problem: 'A leading FMCG brand in South Asia faced significant margin pressures due to rising palm oil prices, necessitating a price increase. Key objectives were to determine optimal price adjustments, benchmark competitors, and minimize market share erosion.',
    solution: 'The brand leveraged a non-linear Marketing Mix Modelling (MMM) engine to address these challenges.',
    results: [
      '5% Price Increase Implemented without significant market share loss.',
      'Competitor-Specific Pricing Strategies ensured optimal relative positioning in high-impact markets.',
      'Enhanced Pricing Agility through real-time tracking and scenario planning.',
      'Successfully navigated inflationary pressures while safeguarding its market position.'
    ],
    technologies: ['Non-linear Marketing Mix Modelling (MMM) engine', 'Price Elasticity Analysis', 'Competitive Price Tracker', 'War Game Simulations'],
    challenges: [
      'Determine Optimal Price Adjustments: Identify geographies where price increases could be implemented with minimal market share loss.',
      'Competitor Benchmarking: Understand key competitors against whom maintaining relative pricing was critical to retaining market share.',
      'Minimize Market Share Erosion: Execute price hikes strategically to protect volume and revenue.'
    ],
    approach: [
      'Price Elasticity Analysis: Evaluated how different price points would impact demand across markets.',
      'Relative Price Sensitivity: Assessed the importance of pricing against specific competitors in each region.',
      'Trade Promotion & Media Impact: Factored in the influence of promotions and advertising on price perception.',
      'Inflection Point Identification: Determined thresholds beyond which price increases would significantly hurt market share.',
      'Competitive Price Tracker: A real-time dashboard to monitor competitor pricing and adjust strategies dynamically.',
      'War Game Simulations: Enabled scenario testing to predict competitor reactions and optimize pricing strategies proactively.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '4',
    title: 'Trade Promotion Scheme design for Large Adhesive Brand',
    description: 'A data-driven solution that analyzed historical sales and promotion data to optimize trade promotion schemes, leading to increased sales uplift and budget efficiency.',
    industry: 'chemicals',
    industryLabel: 'Chemicals',
    metrics: {
      improvement: '3% increase in sales',
      timeFrame: '4 months'
    },
    problem: 'A large adhesive brand in India, operating across over 500,000 stores, faced challenges in understanding the effectiveness of their trade promotions, leading to inefficient budget allocation and suboptimal sales uplift.',
    solution: 'The solution involved data preparation, a promo analytics module to study uplift elasticity patterns, and the creation of optimized incentive slabs.',
    results: [
      'Sales Uplift: Achieved a 3% increase in sales by implementing optimized promotional slabs tailored to retailer and scheme performance.',
      'Budget Efficiency: Maintained promotional budget outflow while enhancing effectiveness, avoiding overspending on saturated markets.',
      'Targeted Strategy: Enabled precise allocation of incentives, improving retailer engagement and sales performance across diverse channels and store sizes.'
    ],
    technologies: ['Promo Analytics Module'],
    challenges: [
      'Promotion Effectiveness: Difficulty in understanding the uplift elasticity patterns across different promo slabs, retailers, and schemes.',
      'Saturation Levels: Identifying the point of diminishing returns for promotional efforts to avoid overspending.',
      'Budget Constraints: Maintaining promotional budgets while ensuring meaningful sales growth across diverse store types and channels.',
      'Scheme Optimization: Lack of data-driven insights to design incentive slabs and targets that align with retailer performance and market dynamics.'
    ],
    approach: [
      'Data Prep: Analyzed historical sales data, promotion details (discounts, points, gifts), retailer performance, and channel-specific trends across the 500,000+ stores.',
      'Promo Analytics Module: Developed a module to study uplift elasticity patterns from various promo slabs and schemes, determining saturation levels for sales uplift across retailers.',
      'Optimized Slabs: Created new, data-driven incentive slabs and targets that maximized uplift while adhering to budget constraints, leading to a refined promotional strategy.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '5',
    title: 'Tea Price Forecasting and Procurement Insights',
    description: 'An ensemble machine learning model that forecasts tea prices 12 months ahead, providing insights for optimal procurement timing and enhanced pricing strategy.',
    industry: 'fmcg',
    industryLabel: 'FMCG',
    metrics: {
      improvement: 'Over 90% accuracy – 1 quarter out',
      timeFrame: '12 months'
    },
    problem: 'A leading FMCG company specializing in tea products faced challenges in optimizing their pricing strategy and procurement processes due to the volatility in tea prices, influenced by seasonal fluctuations, weather patterns, and varying demand-supply trends.',
    solution: 'The solution involved data preparation and an ensemble machine learning model to forecast tea prices.',
    results: [
      'High Accuracy: Identified optimal periods for bulk purchasing, reducing procurement costs.',
      'Enhanced Pricing Strategy: Enabled proactive product pricing adjustments, maintaining competitiveness and improving profit margins.',
      'Demand Forecast: Improved demand forecast by building uplift due to commodity price changes.'
    ],
    technologies: ['Ensemble machine learning model'],
    challenges: [
      'Price Volatility: Significant fluctuations in tea prices influenced by climatic conditions and changes in supply and demand.',
      'Procurement Timing: Difficulty in identifying optimal periods for bulk procurement to minimize costs and ensure consistent supply.',
      'Pricing Strategy: Challenges in developing a product pricing strategy aligned with market conditions to maintain competitiveness and profitability.',
      'Demand Impact: Understanding the impact of tea price changes on the demand for different brands in the client’s portfolio.'
    ],
    approach: [
      'Data Prep: Utilized 5 years of historical daily tea data, integrated Accuweather data for key weather patterns, and developed temporal features.',
      'Ensemble machine learning model to forecast tea prices 12 months ahead, with quarterly updates, and validated using cross-validation and blackout periods, achieving over 90% accuracy – 1 quarter out.',
      'Demand Uplift Patterns: Uplift/downlift rule sets which can be built on top of demand forecast.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '6',
    title: '40% Forecasting Accuracy for a US-Based Car Wash Company using Weather based Seasonal Patterns',
    description: 'A demand forecasting solution incorporating 14 key weather pattern datasets to improve prediction accuracy, planning efficiency, and working capital optimization.',
    industry: 'services',
    industryLabel: 'Services',
    metrics: {
      improvement: '40% improvement in 90-day forecasting accuracy',
      timeFrame: '3 months'
    },
    problem: 'The client faced challenges in accurately forecasting demand due to high dependency on fluctuating weather conditions, leading to inefficiencies in resource allocation, inventory planning, and overall operational performance, impacting working capital optimization.',
    solution: 'The Intellimark Feature Engineering Engine incorporated 14 key weather pattern datasets and enhanced demand forecasting models.',
    results: [
      '40% Improvement in 90-day forecasting accuracy.',
      'Enhanced planning efficiency for manpower and marketing.',
      '15% Unlock in working capital through optimized inventory and resource allocation.',
      'Improved operational responsiveness to changing weather patterns.'
    ],
    technologies: ['Intellimark Feature Engineering Engine', 'Machine Learning'],
    challenges: [
      'Lack of integration with critical weather datasets impacting forecast accuracy.',
      'Inability to manage fluctuations in demand caused by dynamic weather conditions.',
      'Inefficient inventory planning and resource allocation due to inaccurate predictions.',
      'High working capital tied up in excess inventory or under-utilized resources.'
    ],
    approach: [
      'Incorporated 14 key weather pattern datasets, including rain, humidity, temperature, wind, and snow.',
      'Enhanced demand forecasting models by including external weather factors and historical sales data.',
      'Developed dashboards and actionable insights for real-time forecasting and decision-making.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '7',
    title: 'Forecasting for Fortune500 Consumer Appliances Company',
    description: 'A forecasting solution that achieved significant accuracy improvements for SKUs and product-market combinations by focusing on city- and product-level forecasting and dynamic norms for distributors.',
    industry: 'consumer_electronics',
    industryLabel: 'Consumer Electronics',
    metrics: {
      improvement: '80% SKUs gained forecast accuracy',
      timeFrame: '9 months'
    },
    problem: 'The client faced challenges in accurately forecasting demand due to high dependency on fluctuating weather conditions. Traditional forecasting models lacked precision, leading to inefficiencies in resource allocation, inventory planning, and overall operational performance, also impacting working capital optimization. Specific issues included bad forecast accuracy at product levels, challenges with new product launches, high logistics costs, and value loss for unsold products before new versions.',
    solution: 'The Intellimark Feature Engineering Engine provided city x product level forecasting and dynamic norms for distributors.',
    results: [
      '80% SKUs Gained Forecast Accuracy.',
      '30% Average Accuracy Improvement.',
      '300 Product x Market Combinations removed.'
    ],
    technologies: ['Intellimark Feature Engineering Engine'],
    challenges: [
      'Bad forecast accuracy at specific product levels in different markets.',
      'Challenges with forecasting demand for new product launches and complementary brands.',
      'High logistics costs for heavy products due to inaccurate planning.',
      'Significant value loss for products not sold before the launch of the next version.',
      'Lack of integration of color and feature variants influenced by weather patterns, which are crucial for consumer decision-making.'
    ],
    approach: [
      'City x Product level forecasting for maximum accuracy.',
      'Dynamic norms for distributors to reduce unsold inventory.',
      'Recommendations to reduce specific variants from specific geographies.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  },
  {
    id: '8',
    title: 'Forecasting Accuracy and Impact of Pricing and Ad Spends for Popular Skincare Brand',
    description: 'A robust forecasting model that incorporated external data sources like competitor pricing and ad spend to improve e-commerce forecast accuracy and reduce out-of-stock issues.',
    industry: 'beauty_and_wellbeing',
    industryLabel: 'Beauty and Wellbeing',
    metrics: {
      improvement: '25% Improvement in E-commerce Forecast Accuracy (FA)',
      timeFrame: '5 months'
    },
    problem: 'The skincare brand faced volatile e-commerce sales driven by fluctuating ad spends, competitive pricing, and category rankings, leading to inaccurate forecasting and frequent out-of-stock issues. Limited integration of external data further hindered visibility and decision-making.',
    solution: 'The Intellimark Teresa Forecasting Engine scraped data from e-commerce platforms, integrated ad spend data, factored in category rankings, and developed a robust forecasting model.',
    results: [
      '25% Improvement in E-commerce Forecast Accuracy (FA).',
      '200 Pricing and Media Insights Generated.',
      '50% Reduction in Out-of-Stock Issues.'
    ],
    technologies: ['Intellimark Teresa Forecasting Engine', 'E-commerce data scraping', 'Machine Learning'],
    challenges: [
      'E-commerce sales were highly volatile and unpredictable.',
      'Sales depended heavily on ad spend levels and competition product pricing.',
      'Rankings within product categories significantly impacted visibility and sales.',
      'Limited integration of external data for effective forecasting, leading to inefficiencies.'
    ],
    approach: [
      'Scraped data from e-commerce platforms like Amazon to monitor real-time prices for both the brand and competitors.',
      'Integrated ad spend data to analyze the impact of media on sales performance.',
      'Factored in category rankings to capture their influence on product visibility and sales.',
      'Developed a robust forecasting model that incorporated these external data sources for accurate predictions.'
    ],
    testimonial: {
      quote: '',
      author: '',
      position: '',
      company: ''
    }
  }
];