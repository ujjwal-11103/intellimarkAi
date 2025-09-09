import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Lightbulb, Shield, Zap } from "lucide-react";

const IntegratingGenAI = () => {
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
                            Integrating GenAI with Traditional Data Science: A New Frontier for Forecast Accuracy in CPG Companies
                        </h1>
                    </div>

                    <p className="text-xl text-blue-100 max-w-3xl">
                        Discover how combining Generative AI with traditional data science enhances demand forecasting and operational efficiency in the consumer packaged goods industry.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In the rapidly evolving CPG industry, accurate demand forecasting is critical. Integrating Generative AI (GenAI) with traditional data science opens new avenues for innovation, improving forecast precision and operational decision-making.
                    </p>
                </div>

                {/* Synergy Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        The Synergy of GenAI and Traditional Data Science
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Traditional data science relies on historical data and statistical models, while GenAI generates new data points and simulates scenarios, providing a nuanced understanding of potential future outcomes. Together, they create more accurate and dynamic forecasts.
                    </p>
                </div>

                {/* Enhancing Forecast Accuracy */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Enhancing Forecast Accuracy with GenAI
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                <Zap className="w-5 h-5 mr-2" />
                                Key Capabilities
                            </h4>
                            <ul className="space-y-2 text-green-700">
                                <li><strong>Scenario Simulation:</strong> Explore various market conditions and consumer behaviors to adjust forecasts dynamically.</li>
                                <li><strong>Data Augmentation:</strong> Generate synthetic data to enhance predictive model accuracy, especially for new products.</li>
                                <li><strong>Predictive Analytics:</strong> Integrate GenAI insights with traditional models for granular, precise forecasts.</li>
                            </ul>
                        </div>

                        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                                <Shield className="w-5 h-5 mr-2" />
                                Benefits for Growth Marketers
                            </h4>
                            <ul className="space-y-2 text-amber-700">
                                <li><strong>Improved Product Launches:</strong> Better forecasts enable optimized launch strategies and marketing spend.</li>
                                <li><strong>Dynamic Market Response:</strong> Quickly adjust campaigns to meet evolving consumer demands.</li>
                                <li><strong>Efficient Inventory Management:</strong> Reduce stockouts and overstocking by aligning inventory with accurate forecasts.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Watchouts Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Watchouts in Integrating GenAI with Traditional Data Science
                    </h3>
                    <ul className="space-y-2 text-gray-700 list-disc pl-6">
                        <li><strong>Data Privacy and Ethics:</strong> Ensure synthetic data complies with privacy laws and ethical standards.</li>
                        <li><strong>Model Complexity:</strong> Integration requires advanced skills and robust systems to manage effectively.</li>
                        <li><strong>Overreliance on Technology:</strong> Balance AI insights with human expertise and market knowledge.</li>
                    </ul>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
                    <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
                    <p className="leading-relaxed text-blue-50">
                        Integrating GenAI with traditional data science elevates forecasting precision and operational efficiency in the CPG industry. Leveraging the strengths of both approaches enables agile, informed decision-making and drives competitive advantage in a dynamic market.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IntegratingGenAI;
