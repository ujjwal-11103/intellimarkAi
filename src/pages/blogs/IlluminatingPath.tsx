import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, Brain, Shield, Zap } from "lucide-react";

const IlluminatingPath = () => {
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
                        {/* <Lightbulb className="w-12 h-12 text-white mr-4" /> */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Illuminating the Path Forward: The Evolution and Impact of Explainable AI
                        </h1>
                    </div>

                    <p className="text-xl text-blue-100 max-w-3xl">
                        Explore the rise of Explainable AI (XAI) and its crucial role in making AI systems transparent, trustworthy, and human-centric.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In the rapidly evolving landscape of artificial intelligence (AI), explainable AI (XAI) marks a pivotal shift towards transparency, trust, and understanding. XAI ensures AI-driven decisions are comprehensible, accountable, and ethically aligned.
                    </p>
                </div>

                {/* Essence of XAI */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        The Essence of Explainable AI
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        XAI bridges the gap between complex AI decision-making and human understanding. It demystifies the "black box" nature of AI, fostering confidence, reliability, and trust—especially in critical domains like healthcare, finance, and autonomous systems.
                    </p>
                </div>

                {/* Growing Imperative */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        The Growing Imperative for Explainability
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        As AI becomes more integrated into daily life, demand for explainability rises. XAI ensures compliance, fairness, and user trust while addressing societal and ethical challenges.
                    </p>
                </div>

                {/* Challenges and Opportunities */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Challenges and Opportunities Ahead
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Challenges */}
                        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                                <Shield className="w-5 h-5 mr-2" />
                                Challenges
                            </h4>
                            <ul className="space-y-2 text-amber-700">
                                <li>Balancing model complexity with interpretability.</li>
                                <li>Subjective nature of "satisfactory" explanations.</li>
                                <li>Developing universally accepted XAI standards.</li>
                            </ul>
                        </div>

                        {/* Opportunities */}
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                <Zap className="w-5 h-5 mr-2" />
                                Opportunities
                            </h4>
                            <ul className="space-y-2 text-green-700">
                                <li>Advancements in interpretability techniques.</li>
                                <li>Standardized frameworks for explainability.</li>
                                <li>Integrating ethics into AI design from the ground up.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Road Ahead */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        The Road Ahead
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        XAI's future is human-centric, combining technical advances with ethical and cultural considerations. Collaboration between researchers, ethicists, policymakers, and the public will shape AI that enhances human decision-making.
                    </p>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
                    <h3 className="text-2xl font-bold mb-6">Conclusion</h3>
                    <p className="leading-relaxed text-blue-50">
                        The evolution of XAI is crucial for ethical and effective AI adoption. By emphasizing transparency and accountability, XAI ensures AI systems are trusted, comprehensible, and aligned with human values.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IlluminatingPath;
