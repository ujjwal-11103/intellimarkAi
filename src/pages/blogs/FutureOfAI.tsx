import { Link } from "react-router-dom";
import { ArrowLeft, Shield, BarChart3, Zap } from "lucide-react";

const FutureOfAI = () => {
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
                            The Future of AI: Embracing Explainable AI
                        </h1>
                    </div>

                    <p className="text-xl text-blue-100 max-w-3xl">
                        Explore how Explainable AI (XAI) is transforming AI into a transparent, ethical, and human-centric technology for the future.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Explainable AI (XAI) bridges complex AI decision-making with human understanding, ensuring AI systems are trustworthy, transparent, and ethically aligned.
                    </p>
                </div>

                {/* Key Points */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Why XAI Matters
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Demystifies AI's "black box" to foster user trust and confidence.</li>
                        <li>Crucial in high-stakes domains like healthcare and finance.</li>
                        <li>Addresses regulatory, ethical, and societal needs.</li>
                        <li>Enhances accountability and human-centric AI decision-making.</li>
                    </ul>
                </div>

                {/* Challenges & Opportunities */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Challenges & Opportunities
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Achieving fully explainable AI involves balancing model complexity with interpretability, and considering diverse stakeholder expectations for what constitutes a satisfactory explanation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Opportunities lie in innovation, developing standardized interpretability techniques, and integrating ethical considerations into AI design, driven by rising public awareness and demand for responsible AI systems.
                    </p>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
                    <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
                    <p className="leading-relaxed text-blue-100">
                        The evolution of XAI is shaping a future where AI is not only powerful but trusted and understood. By emphasizing transparency, ethics, and human-centric design, XAI ensures AI enhances decision-making and positively impacts society.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FutureOfAI;
