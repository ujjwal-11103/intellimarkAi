import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Shield, Zap } from "lucide-react";

const MarketingMixModeling = () => {
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
            {/* <BarChart3 className="w-12 h-12 text-white mr-4" /> */}
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Marketing Mix Modeling: Enhancing ROI through Data-Driven Insights
            </h1>
          </div>

          <p className="text-xl text-blue-100 max-w-3xl">
            Learn how Marketing Mix Modeling helps growth marketers measure marketing effectiveness, optimize budgets, and forecast outcomes in a cookie-less digital landscape.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            Marketing Mix Modeling (MMM) is a statistical technique that evaluates the impact of marketing tactics on sales and ROI, helping marketers make informed decisions in a privacy-compliant and data-driven manner.
          </p>
        </div>

        {/* Shift Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            The Shift to Marketing Mix Modeling
          </h3>
          <p className="text-gray-700 leading-relaxed">
            As third-party cookies are phased out, marketers need aggregated, privacy-friendly methods for measuring campaign impact. MMM evaluates marketing performance holistically, without relying on individual-level tracking.
          </p>
        </div>

        {/* How MMM Aids in Attribution */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How MMM Aids in Attribution
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-green-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Core Advantages
              </h4>
              <ul className="space-y-2 text-green-700">
                <li><strong>Holistic View:</strong> Analyze how channels, campaigns, and external factors contribute to KPIs.</li>
                <li><strong>Privacy-Compliant:</strong> Operates on aggregated data, aligning with privacy regulations.</li>
                <li><strong>Offline & External Factors:</strong> Includes economic conditions, seasonality, and competitive actions for accurate attribution.</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Benefits for Growth Marketers
              </h4>
              <ul className="space-y-2 text-amber-700">
                <li><strong>Strategic Budget Allocation:</strong> Optimize spend across marketing components.</li>
                <li><strong>Adaptability:</strong> Adjust strategies based on evolving trends and regulations.</li>
                <li><strong>Forecasting & Planning:</strong> Predict outcomes and support strategic decisions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Watchouts Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Watchouts in Implementing MMM
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc pl-6">
            <li><strong>Data Quality & Integration:</strong> Ensure reliable, comprehensive data across all channels.</li>
            <li><strong>Model Complexity & Expertise:</strong> Requires statistical expertise and understanding of business context.</li>
            <li><strong>Dynamic Market Conditions:</strong> Regularly update models to stay relevant.</li>
            <li><strong>Complement with Other Approaches:</strong> Combine with Multi-Touch Attribution for more granular insights.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
          <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
          <p className="leading-relaxed text-blue-50">
            MMM provides a strategic, privacy-compliant way for growth marketers to measure marketing effectiveness and optimize ROI. By combining data-driven insights with careful attention to data quality and market dynamics, marketers can make informed decisions and drive sustainable growth in a cookie-less digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingMixModeling;
