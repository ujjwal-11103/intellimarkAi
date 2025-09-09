import { Link } from "react-router-dom";
import { ArrowLeft, Shield, BarChart3, Zap } from "lucide-react";

const UnveilingAI = () => {
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
                            Unveiling AI: A Guide to XAI Technologies
                        </h1>
                    </div>

                    <p className="text-xl text-blue-100 max-w-3xl">
                        Explore leading XAI technologies like LIME and SHAP, and understand how they make AI decisions transparent, interpretable, and ethically aligned.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        This blog compares LIME and SHAP, highlighting their innovative approaches to making AI decision-making transparent and comprehensible.
                    </p>
                </div>

                {/* Key XAI Technologies */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Key XAI Technologies
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>
                            <strong>LIME:</strong> Simplifies complex models via local approximation, improving interpretability of individual predictions.
                        </li>
                        <li>
                            <strong>SHAP:</strong> Uses game-theoretic methods to quantify feature contributions, offering a comprehensive view of model behavior.
                        </li>
                        <li>
                            <strong>Counterfactual Explanations:</strong> Provide actionable insights by showing how changes in inputs affect outcomes.
                        </li>
                        <li>
                            <strong>Feature Importance & Decision Trees:</strong> Offer straightforward interpretability for understanding model decisions.
                        </li>
                    </ul>
                </div>

                {/* Challenges & Selection */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Challenges & Choosing the Right XAI Tool
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        LIME struggles with providing global insights, whereas SHAP can become complex for large models. Selecting the right XAI technology requires balancing technical needs, explanation types, and user expertise.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This ensures AI systems remain transparent, ethical, and user-friendly, creating a future where AI’s power is paired with understandability.
                    </p>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
                    <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
                    <p className="leading-relaxed text-blue-100">
                        Understanding and choosing the right XAI technologies is key to building AI systems that are not only powerful but also transparent, trustworthy, and aligned with human values.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnveilingAI;
