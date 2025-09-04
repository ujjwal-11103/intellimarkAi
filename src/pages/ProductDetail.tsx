import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import {
  ArrowRight,
  Brain,
  Database,
  LineChart,
  Play,
  Shield,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import NrmLevers from '../components/explainable/Levers';
import { VennDiagram } from '../components/explainable/VennDiagram';
import { ProcessFlow } from '../components/explainable/ProcessFlow';
import { MLEngine } from '../components/explainable/MLEngine';
import StudyCard from '../components/StudyCard';
import RGMStudyCard from '../components/explainable/RGMStudyCard';

const ProductDetail = () => {
  // const { productId } = useParams();
  // const navigate = useNavigate();

  // // ✅ Only allow this productId
  // useEffect(() => {
  //   if (productId !== "explainable-forecasting-engine") {
  //     navigate('/products'); // Redirect if product doesn't exist
  //   }
  //   window.scrollTo(0, 0);
  // }, [productId, navigate]);

  // if (productId !== "explainable-forecasting-engine") {
  //   return null;
  // }

  // ✅ Hardcoded product data inline
  const title = "Revenue Growth Management";
  const heroSubtitle = "Re-engineered with Artificial Intelligence";
  const heroDescription =
    "Ready to deploy AI to unlock growth, profitability and sales efficiency across price, promotions, media and supply chain";

  const stats = [
    { value: "60%", label: "ROI Increase", color: "from-purple-500 to-purple-600" },
    { value: "50M+", label: "Dollars Unlocked", color: "from-blue-500 to-blue-600" },
    { value: "80%", label: "Faster Decisions", color: "from-green-500 to-green-600" },
    { value: "50%", label: "Risk Reduction", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20 pt-20 pb-24">
        <div className="max-w-7xl pt-6 mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {heroSubtitle}
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {heroDescription}
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-gray-900">{title} Dashboard</h3>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">High Impact</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white`}
                    >
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Floating Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-8 -left-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Gallery Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {safeProductData.stats.map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white relative overflow-hidden aspect-square flex flex-col justify-end`}>
                <div className="relative z-10">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-base opacity-90">{stat.label}</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Value Proposition Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {safeProductData.valueProposition.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {safeProductData.valueProposition.subtitle}
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {safeProductData.valueProposition.description}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                {safeProductData.stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6">
                <img 
                  src={safeProductData.images.valueProp || 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'} 
                  alt={safeProductData.valueProposition.title}
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      {/* <section className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Working Process
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We follow a structured approach to deliver exceptional results and ensure your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeProductData.process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-purple-100">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Core Features & Capabilities</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Explore the powerful features designed to solve your most complex challenges and drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {safeProductData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mt-1">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">People Say About Us</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hidden lg:block">
              <img 
                src={safeProductData.images.testimonials || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'}
                alt="Client testimonials" 
                className="w-full h-[36rem] object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              {safeProductData.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Explainable Components */}
      <div className="min-h-screen bg-gray-50">
        <NrmLevers />
        <VennDiagram />
        <ProcessFlow />
        <MLEngine />
        <RGMStudyCard />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Strategy with {title}?
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Join leading organizations using our AI solutions to optimize operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office.com/bookwithme/user/e8ee839cd0224fb7bbc88d3de0f0e74a@intellimark.ai/meetingtype/X5VsiCFLD0O0S7V9WOBTyQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 font-medium flex items-center justify-center"
            >
              Talk to an Expert
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            {/* <button className="border-2 border-purple-300 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium flex items-center justify-center">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </button> */}
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full"></div>
      </section>
    </div>
  );
};

export default ProductDetail;