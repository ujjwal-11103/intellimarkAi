import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Shield, Brain } from 'lucide-react';

const StrategicPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-8 pt-24 pb-16">
          <Link
            to="/blogs"
            className="inline-flex items-center mb-8 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          <div className="flex items-center mb-6">
            {/* <Brain className="w-12 h-12 text-white mr-4" /> */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Harnessing AI for Strategic Pricing in Consumer Goods
            </h1>
          </div>

          <p className="text-xl text-blue-100 max-w-3xl">
            Discover how AI-driven pricing strategies help CPG companies optimize profits and adapt to market dynamics.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            In today's volatile economic landscape, consumer packaged goods (CPG) companies face unprecedented
            challenges and opportunities in pricing strategies. Artificial Intelligence (AI) emerges as a pivotal
            tool, offering agility, insight, and precision to navigate these complexities effectively.
          </p>
        </div>

        {/* AI-Powered Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Pricing: A Game Changer for CPG Companies
          </h3>

          <p className="text-gray-700 leading-relaxed mb-6">
            AI-driven pricing strategies enable CPG firms to analyze vast datasets, identifying patterns and insights
            that human analysts might overlook. This allows companies to adopt a granular, targeted approach, optimizing
            prices for each SKU across different markets and channels.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Benefits */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-green-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Key Benefits
              </h4>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Dynamic Pricing:</strong> AI algorithms adjust prices in real-time to maximize margins.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Price Optimization:</strong> Identifies price points maximizing sales volume and profitability.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Cost Absorption:</strong> Insights into absorbing cost changes without hurting market share.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Promotional Effectiveness:</strong> Optimizes promotional spend for best ROI.</span>
                </li>
              </ul>
            </div>

            {/* Watchouts */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Watchouts
              </h4>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Data Quality:</strong> High-quality, integrated data is essential for accurate AI pricing.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Explainability:</strong> Ensure AI models are transparent to gain stakeholder trust.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Regulatory Compliance:</strong> Maintain adherence to antitrust laws and regulations.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SEO Keywords for Enhanced Visibility
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Keywords such as "AI in pricing strategy," "dynamic pricing," "CPG pricing optimization," and
            "promotional effectiveness AI" help improve search engine rankings, making the content more accessible to
            industry professionals.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
          <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
          <p className="leading-relaxed text-blue-50">
            Integrating AI into pricing strategies is transformative for CPG companies, enhancing profitability and market
            responsiveness. By embracing AI, companies unlock new levels of pricing precision and efficiency, driving growth
            and competitive advantage in a dynamic economic environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategicPricing;
