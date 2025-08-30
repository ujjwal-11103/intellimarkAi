import React from "react";

export const VennDiagram = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Collaboration between Traditional Human Intelligence and AI
          </h2>
        </div>

        {/* Venn Diagram */}
        <div className="relative flex justify-center items-center h-[28rem]">
          {/* Left Circle - Human Intelligence */}
          <div className="absolute left-1/3 transform -translate-x-80 w-96 h-96 
            bg-gradient-to-br from-purple-400 to-purple-500 
            opacity-90 rounded-full flex items-center justify-center 
            text-white shadow-2xl z-0 p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Traditional NRM Expertise</h3>
              <div className="space-y-2 text-lg">
                <p>Price whitespaces</p>
                <p>Portfolio mix</p>
                <p>Trade Promotions</p>
                <p>MS/Competition Analysis</p>
              </div>
            </div>
          </div>

          {/* Center Circle - ProfitPulse */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-96 h-96 
            bg-gradient-to-br from-purple-700 to-purple-800 
            opacity-95 rounded-full flex items-center justify-center 
            text-white shadow-2xl z-10 p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Explainable NRM</h3>
              <div className="space-y-2 text-lg">
                <p>Actionable Insights</p>
                <p>TO Impact</p>
                <p>Simulations and War Games</p>
                <p>Short/Long Term Strategy</p>
                <p>Adoption</p>
              </div>
            </div>
          </div>

          {/* Right Circle - AI */}
          <div className="absolute right-1/3 transform translate-x-80 w-96 h-96 
            bg-gradient-to-br from-purple-500 to-purple-600 
            opacity-90 rounded-full flex items-center justify-center 
            text-white shadow-2xl z-0 p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Next Generation ML</h3>
              <div className="space-y-2 text-lg">
                <p>Non-Linear Uplift Models</p>
                <p>Lever Attribution and Baseline</p>
                <p>Non-Linear Optimization</p>
                <p>Causality and Explainability</p>
                <p>Feedback Auto-tuning</p>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute -top-10 left-1/4 text-gray-700 font-semibold text-lg">
            Human Intelligence
          </div>
          <div className="absolute -top-10 text-gray-700 font-semibold text-lg">
            ProfitPulse
          </div>
          <div className="absolute -top-10 right-1/4 text-gray-700 font-semibold text-lg">
            Artificial Intelligence
          </div>
        </div>
      </div>
    </section>
  );
};
