import { Link } from "react-router-dom"
import { ArrowLeft, Brain, Lightbulb, Shield, Zap } from "lucide-react"

const DecodingAI = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section with Gradient Background */}
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
                        <Brain className="w-12 h-12 text-white mr-4" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Decoding the Mysteries of AI</h1>
                    </div>

                    <p className="text-xl text-blue-100 max-w-3xl">
                        Exploring LIME, SHAP, and other explainable AI technologies that make machine learning transparent and
                        trustworthy.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-8 -mt-8 relative z-10">
                {/* Introduction Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In the quest to make artificial intelligence (AI) more transparent and understandable, several technologies
                        have emerged as frontrunners. Among these, Local Interpretable Model-agnostic Explanations (LIME) and
                        SHapley Additive exPlanations (SHAP) stand out for their innovative approaches to explainable AI (XAI). This
                        blog delves into the intricacies of LIME, SHAP, and other notable XAI technologies, comparing their benefits
                        and potential pitfalls.
                    </p>
                </div>

                {/* LIME Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                            <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            LIME: Simplifying Complexity
                        </h3>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-blue-700">What is LIME?</strong> LIME is an XAI technique designed to explain the
                            predictions of any machine learning model in an interpretable and faithful manner. It works by
                            approximating the model locally around the prediction. LIME generates new samples around the input, gets
                            predictions for these samples from the model, and then trains a simpler, interpretable model (like a
                            linear model or decision tree) on this new dataset.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Benefits */}
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                <Zap className="w-5 h-5 mr-2" />
                                Benefits
                            </h4>
                            <ul className="space-y-2 text-green-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>
                                        <strong>Model Agnosticism:</strong> LIME can be applied to any machine learning model, providing
                                        flexibility across various applications.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>
                                        <strong>Local Interpretability:</strong> By focusing on local approximation, LIME offers precise
                                        explanations for individual predictions, making it easier to understand specific decisions.
                                    </span>
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
                                    <span>
                                        <strong>Local vs. Global Interpretability:</strong> LIME's explanations are local to each
                                        prediction, which might not provide insight into the model's overall behavior.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>
                                        <strong>Complexity and Stability:</strong> The explanations generated by LIME can sometimes be
                                        unstable, changing significantly with slight variations in the input data.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SHAP Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            SHAP: Offering Deep Insights
                        </h3>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                        <p className="text-gray-700 leading-relaxed">
                            <strong className="text-purple-700">What is SHAP?</strong> SHAP leverages game theory, particularly the
                            concept of Shapley values, to explain the output of machine learning models. It assigns each feature an
                            importance value for a particular prediction, considering all possible combinations of features. This
                            approach ensures that SHAP values are consistent and fairly allocated according to each feature's
                            contribution to the prediction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Benefits */}
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                <Zap className="w-5 h-5 mr-2" />
                                Benefits
                            </h4>
                            <ul className="space-y-2 text-green-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>
                                        <strong>Consistency and Fairness:</strong> SHAP ensures that features are fairly credited for their
                                        contribution to the model's output, providing consistent and reliable explanations.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>
                                        <strong>Global Interpretability:</strong> Beyond explaining individual predictions, SHAP can offer
                                        insights into the model's overall behavior by aggregating SHAP values across the dataset.
                                    </span>
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
                                    <span>
                                        <strong>Computational Complexity:</strong> Calculating SHAP values, especially for models with a
                                        large number of features, can be computationally intensive.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>
                                        <strong>Interpretation Challenges:</strong> While SHAP provides detailed explanations, interpreting
                                        these explanations, especially in complex models, can be challenging for non-experts.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Other Technologies Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Other Notable XAI Technologies
                    </h3>

                    <div className="space-y-6">
                        <div className="border-l-4 border-blue-500 pl-6 py-2">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-blue-700">Counterfactual Explanations:</strong> These explanations describe how
                                altering certain inputs can change the prediction to a desired outcome. They are intuitive and
                                actionable but can be challenging to generate for complex models.
                            </p>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-6 py-2">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-purple-700">Feature Importance:</strong> Simple yet effective, this technique
                                ranks features based on their importance to the model's predictions. While it offers a high-level view,
                                it may overlook interactions between features.
                            </p>
                        </div>

                        <div className="border-l-4 border-indigo-500 pl-6 py-2">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-indigo-700">Decision Trees:</strong> As inherently interpretable models,
                                decision trees can serve as both predictive models and explanation tools. However, their simplicity
                                might limit their accuracy for complex tasks.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conclusion Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-14 text-white">
                    <h3 className="text-2xl font-bold mb-6">Conclusion: Navigating the Landscape of XAI Technologies</h3>

                    <div className="space-y-4 text-blue-50">
                        <p className="leading-relaxed">
                            Each XAI technology brings its unique strengths and challenges to the table. LIME excels in providing
                            local explanations for any model, making it versatile and user-friendly. SHAP, on the other hand, offers
                            deep insights based on game theory, ensuring fairness and consistency in its explanations. Other
                            technologies, like counterfactual explanations and feature importance, complement these tools by offering
                            alternative perspectives on model behavior.
                        </p>

                        <p className="leading-relaxed">
                            When choosing an XAI technique, it's crucial to consider the specific needs of your project, including the
                            complexity of the model, the type of explanations required, and the technical expertise of the end-users.
                            By carefully weighing the benefits and watchouts of each approach, developers and data scientists can
                            select the most appropriate technology to make their AI models as transparent, understandable, and
                            trustworthy as possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DecodingAI
