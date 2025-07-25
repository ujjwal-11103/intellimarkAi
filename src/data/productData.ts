import { 
  Target, 
  Zap, 
  BarChart3, 
  Sparkles,
  Brain,
  LineChart,
  Database,
  Shield
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
    ]
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
    ]
  },
  // Add other products here...
};