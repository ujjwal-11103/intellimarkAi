import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can elite AI solutions be implemented in Fortune 500 environments?",
      answer: "Our premium rapid deployment framework integrates seamlessly with enterprise infrastructure in 2-6 weeks. We leverage proprietary methodologies that minimize disruption while maximizing transformational impact, ensuring your competitive advantage is realized immediately."
    },
    {
      question: "What ROI benchmarks can we expect from premium AI implementation?",
      answer: "Our Fortune 500 clients consistently achieve 300-500% ROI within the first 12 months. This includes substantial cost reductions through intelligent automation, enhanced decision-making capabilities, operational excellence, and new revenue stream generation through AI-driven innovation."
    },
    {
      question: "How do you ensure enterprise-grade security and regulatory compliance?",
      answer: "We implement military-grade security protocols including zero-trust architecture, end-to-end quantum encryption, and compliance with SOC 2 Type II, GDPR, HIPAA, and industry-specific regulations. All processing can be deployed on-premises or in private cloud environments."
    },
    {
      question: "What level of ongoing support and optimization is provided?",
      answer: "Our white-glove service includes 24/7 dedicated support, continuous model optimization, real-time performance monitoring, and quarterly strategic reviews. Your dedicated success team ensures your AI solutions evolve with your business objectives and market dynamics."
    },
    {
      question: "How do AI solutions scale with enterprise growth and complexity?",
      answer: "Our cloud-native architecture is designed for infinite scalability with auto-scaling capabilities. Whether processing millions or billions of data points, our solutions maintain optimal performance while adapting to your enterprise's evolving complexity and global expansion."
    },
    {
      question: "What executive and technical training programs are included?",
      answer: "We provide comprehensive C-suite briefings, hands-on technical workshops, and certification programs. From executive strategy sessions to deep technical training, we ensure your entire organization is equipped to leverage AI capabilities for maximum competitive advantage."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <HelpCircle className="h-16 w-16 text-amber-400" />
              <div className="absolute inset-0 h-16 w-16 bg-amber-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Executive</span>
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent"> Insights</span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Strategic answers to critical questions about implementing enterprise AI solutions
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <button
                className="w-full px-8 py-8 text-left flex justify-between items-center relative z-10"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-xl font-bold text-white pr-6 group-hover:text-amber-300 transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-7 w-7 text-amber-400" />
                  ) : (
                    <ChevronDown className="h-7 w-7 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;