import { 
  Target, 
  Zap, 
  BarChart3, 
  Sparkles,
  Brain,
  LineChart,
  Database,
  Shield,
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  GitCompareArrows,
  Filter
} from 'lucide-react';

export const productDetails = {
  'explainable-forecasting-engine': {
    title: "Explainable Forecasting Engine",
    heroSubtitle: "AI-driven customer behavior prediction",
    heroDescription: "Predict future buying patterns with our transparent AI engine that provides insights you can understand and trust.",
    stats: [
      { value: "25%", label: "Cost Reduction", color: "from-purple-500 to-purple-600" },
      { value: "94%", label: "Forecast Accuracy", color: "from-blue-500 to-blue-600" },
      { value: "80%", label: "Faster Decisions", color: "from-green-500 to-green-600" },
      { value: "50%", label: "Risk Reduction", color: "from-orange-500 to-orange-600" }
    ],
    features: [
      { 
        icon: Brain, 
        title: "Transparent AI Models", 
        description: "Our algorithms explain their decision-making process for complete transparency" 
      },
      { 
        icon: LineChart, 
        title: "Advanced Pattern Recognition", 
        description: "Identify subtle customer behavior trends before they become obvious" 
      },
      { 
        icon: Database, 
        title: "Comprehensive Data Integration", 
        description: "Connect with multiple data sources for a holistic view of customer activities" 
      },
      { 
        icon: Shield, 
        title: "Guaranteed Privacy", 
        description: "GDPR-compliant processing that protects customer information" 
      }
    ],
    testimonials: [
      {
        quote: "The Explainable Forecasting Engine transformed how we understand our customers. We can now predict seasonal trends with remarkable accuracy.",
        author: "Sarah Mitchell",
        position: "Chief Marketing Officer, RetailCorp",
        initials: "SM"
      },
      {
        quote: "What sets this apart is how it explains its predictions. We can actually understand why the AI expects certain customer behaviors.",
        author: "Michael Johnson",
        position: "VP Customer Insights, GlobalBrands",
        initials: "MJ"
      }
    ],
    images: {
    hero: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    valueProp: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonials: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  valueProposition: {
    title: "A Strategic Advantage",
    subtitle: "Turn Data into Decisions",
    description: "We help businesses navigate market volatility and optimize their operations through intelligent, explainable forecasting that builds trust and drives results.",
  },
  process: [
    { title: "Data Integration", description: "Collect and integrate data from multiple sources for comprehensive analysis.", icon: Database },
    { title: "AI Analysis", description: "Apply machine learning algorithms to identify patterns and predict future trends.", icon: Brain },
    { title: "Insight Generation", description: "Generate actionable insights and clear recommendations for optimal decisions.", icon: Zap },
    { title: "Implementation & Monitoring", description: "Deploy solutions and monitor performance with continuous optimization.", icon: Shield },
  ],
  },
  'marketing-investment-planner': {
    title: "Marketing Investment Planner",
    heroSubtitle: "Smart campaign optimization & execution",
    heroDescription: "Allocate your marketing budget with precision using AI-driven insights that maximize ROI across channels.",
    stats: [
      { value: "32%", label: "ROI Increase", color: "from-purple-500 to-purple-600" },
      { value: "85%", label: "Budget Efficiency", color: "from-blue-500 to-blue-600" },
      { value: "70%", label: "Time Saved", color: "from-green-500 to-green-600" },
      { value: "45%", label: "Waste Reduction", color: "from-orange-500 to-orange-600" }
    ],
    features: [
      { 
        icon: Zap, 
        title: "Real-time Budget Allocation", 
        description: "Dynamically shift investments based on performance data" 
      },
      { 
        icon: BarChart3, 
        title: "Channel Performance Analysis", 
        description: "Compare ROI across channels with advanced attribution modeling" 
      },
      { 
        icon: Target, 
        title: "Audience Targeting Optimization", 
        description: "Find your most profitable customer segments automatically" 
      },
      { 
        icon: Sparkles, 
        title: "Creative Performance Testing", 
        description: "A/B test content and automatically scale winners" 
      }
    ],
    testimonials: [
      {
        quote: "We increased our marketing ROI by 40% in the first quarter after implementing the Marketing Investment Planner.",
        author: "Jennifer Lee",
        position: "CMO, FashionRetail Inc",
        initials: "JL"
      },
      {
        quote: "The ability to shift budget in real-time between channels based on performance has transformed our campaign management.",
        author: "David Wilson",
        position: "Digital Marketing Director, TechSolutions",
        initials: "DW"
      }
    ],
    images: {
    hero: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    valueProp: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonials: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  valueProposition: {
    title: "A Strategic Advantage",
    subtitle: "Turn Data into Decisions",
    description: "We help businesses navigate market volatility and optimize their operations through intelligent, explainable forecasting that builds trust and drives results.",
  },
  process: [
    { title: "Data Integration", description: "Collect and integrate data from multiple sources for comprehensive analysis.", icon: Database },
    { title: "AI Analysis", description: "Apply machine learning algorithms to identify patterns and predict future trends.", icon: Brain },
    { title: "Insight Generation", description: "Generate actionable insights and clear recommendations for optimal decisions.", icon: Zap },
    { title: "Implementation & Monitoring", description: "Deploy solutions and monitor performance with continuous optimization.", icon: Shield },
  ],
  },
  'retail-growth-engine': {
    title: "Retail Growth Engine",
    heroSubtitle: "Unlock hyper-local growth opportunities",
    heroDescription: "Leverage advanced geospatial analytics and AI to identify untapped growth pockets, optimize store placement, and drive localized marketing.",
    stats: [
      { value: "15%", label: "Sales Lift", color: "from-purple-500 to-purple-600" },
      { value: "20%", label: "Store Traffic Inc.", color: "from-blue-500 to-blue-600" },
      { value: "30%", label: "Faster Site Selection", color: "from-green-500 to-green-600" },
      { value: "25%", label: "Campaign Efficiency", color: "from-orange-500 to-orange-600" }
    ],
    features: [
      { 
        icon: MapPin, 
        title: "Hyper-local Demand Sensing", 
        description: "Analyze granular geographic data to pinpoint high-potential zones for your retail outlets." 
      },
      { 
        icon: Users, 
        title: "Demographic Targeting", 
        description: "Identify and understand the unique customer profiles within specific micro-geographies." 
      },
      { 
        icon: TrendingUp, 
        title: "Growth Opportunity Mapping", 
        description: "Visualize competitive landscapes and white-space opportunities on an interactive map." 
      },
      { 
        icon: Target, 
        title: "Optimized Store Placement", 
        description: "Use AI-driven recommendations to select the most profitable locations for new stores." 
      }
    ],
    testimonials: [
      {
        quote: "The Growth Engine gave us a new lens on the market. We discovered profitable neighborhoods we had completely overlooked.",
        author: "Carlos Gomez",
        position: "Head of Retail Expansion, UrbanEats",
        initials: "CG"
      },
      {
        quote: "Site selection used to take months of guesswork. Now, it's a data-driven process that's 30% faster and far more accurate.",
        author: "Emily Tran",
        position: "Director of Store Operations, ChicBoutique",
        initials: "ET"
      }
    ],
    images: {
    hero: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    valueProp: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonials: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  valueProposition: {
    title: "A Strategic Advantage",
    subtitle: "Turn Data into Decisions",
    description: "We help businesses navigate market volatility and optimize their operations through intelligent, explainable forecasting that builds trust and drives results.",
  },
  process: [
    { title: "Data Integration", description: "Collect and integrate data from multiple sources for comprehensive analysis.", icon: Database },
    { title: "AI Analysis", description: "Apply machine learning algorithms to identify patterns and predict future trends.", icon: Brain },
    { title: "Insight Generation", description: "Generate actionable insights and clear recommendations for optimal decisions.", icon: Zap },
    { title: "Implementation & Monitoring", description: "Deploy solutions and monitor performance with continuous optimization.", icon: Shield },
  ],
  },
  'performance-marketing-optimization': {
    title: "Performance Marketing Optimization",
    heroSubtitle: "Maximize your ad spend with AI",
    heroDescription: "Automate and enhance your digital advertising campaigns to achieve higher ROAS, lower CPA, and scale your customer acquisition efforts effectively.",
    stats: [
      { value: "40%", label: "Higher ROAS", color: "from-purple-500 to-purple-600" },
      { value: "25%", label: "CPA Reduction", color: "from-blue-500 to-blue-600" },
      { value: "90%", label: "Automated Bidding", color: "from-green-500 to-green-600" },
      { value: "60%", label: "Faster Optimization", color: "from-orange-500 to-orange-600" }
    ],
    features: [
      { 
        icon: DollarSign, 
        title: "Automated Bid & Budget Management", 
        description: "Let our AI automatically allocate your budget to the highest-performing campaigns and keywords." 
      },
      { 
        icon: GitCompareArrows, 
        title: "Cross-Channel Attribution", 
        description: "Understand the complete customer journey and attribute conversions accurately across all touchpoints." 
      },
      { 
        icon: Filter, 
        title: "Advanced Audience Segmentation", 
        description: "Identify and target your most valuable customer segments with precision for higher conversion rates." 
      },
      { 
        icon: Sparkles, 
        title: "Creative A/B Testing", 
        description: "Automatically test ad copy and creatives to find the winning combinations and scale them." 
      }
    ],
    testimonials: [
      {
        quote: "Our ROAS jumped by 40% within two months. This tool is essential for any serious performance marketing team.",
        author: "Priya Sharma",
        position: "Performance Marketing Manager, ScaleUp Co",
        initials: "PS"
      },
      {
        quote: "The cross-channel attribution model fixed our biggest blind spot. We finally know what's truly driving our growth.",
        author: "Mark Robinson",
        position: "Head of Digital Acquisition, GoGlobal",
        initials: "MR"
      }
    ],
    images: {
    hero: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    valueProp: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    testimonials: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  valueProposition: {
    title: "A Strategic Advantage",
    subtitle: "Turn Data into Decisions",
    description: "We help businesses navigate market volatility and optimize their operations through intelligent, explainable forecasting that builds trust and drives results.",
  },
  process: [
    { title: "Data Integration", description: "Collect and integrate data from multiple sources for comprehensive analysis.", icon: Database },
    { title: "AI Analysis", description: "Apply machine learning algorithms to identify patterns and predict future trends.", icon: Brain },
    { title: "Insight Generation", description: "Generate actionable insights and clear recommendations for optimal decisions.", icon: Zap },
    { title: "Implementation & Monitoring", description: "Deploy solutions and monitor performance with continuous optimization.", icon: Shield },
  ],
  }
};