import React from 'react';

export const MLEngine = () => {
  const centerElements = [
    { name: 'Baseline', angle: 0 },
    { name: 'Price', angle: 72 },
    { name: 'Competition', angle: 144 },
    { name: 'Trade Incentive', angle: 216 },
    { name: 'External and Media', angle: 288 }
  ];

  const outerElements = [
    { name: 'Causal Feature Engineering and Selection', angle: 30 },
    { name: 'Non-Linear Attribution Impact of Levers', angle: 90 },
    { name: 'Uplift Explainability Charts', angle: 150 },
    { name: 'Optimize for Budget and other constraints', angle: 210 },
    { name: 'Price, Incentive, Discount Designs', angle: 270 },
    { name: 'Tracking and Feedback', angle: 330 }
  ];

  const outcomes = [
    'High Growth Room Pockets Identification',
    'Growth Principles and Constraints',
    'Budget Constraints'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Machine Learning Engine for Non-Linear Impact Analysis and Tracking for Pricing
          </h2>
        </div>

        <div className="relative flex justify-center items-center h-96">
          {/* Central Revenue Hub */}
          <div className="relative z-20 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="font-bold text-sm">Revenue</span>
          </div>

          {/* Inner Circle Elements */}
          {centerElements.map((element, index) => {
            const angle = (element.angle) * (Math.PI / 180);
            const radius = 80;
            const x = Math.cos(angle - Math.PI/2) * radius;
            const y = Math.sin(angle - Math.PI/2) * radius;
            
            return (
              <div
                key={element.name}
                className="absolute z-10 w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <span className="text-center px-2">{element.name}</span>
              </div>
            );
          })}

          {/* Yellow Arrows */}
          {centerElements.map((element, index) => {
            const angle = (element.angle) * (Math.PI / 180);
            const radius = 52;
            const x = Math.cos(angle - Math.PI/2) * radius;
            const y = Math.sin(angle - Math.PI/2) * radius;
            
            return (
              <div
                key={`arrow-${index}`}
                className="absolute z-15 w-4 h-4 bg-yellow-400"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${element.angle + 45}deg)`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              />
            );
          })}

          {/* Outer Elements */}
          {outerElements.map((element, index) => {
            const angle = (element.angle) * (Math.PI / 180);
            const radius = 180;
            const x = Math.cos(angle - Math.PI/2) * radius;
            const y = Math.sin(angle - Math.PI/2) * radius;
            
            return (
              <div
                key={element.name}
                className="absolute w-32 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-white text-xs font-medium shadow-lg"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                <span className="text-center px-2">{element.name}</span>
              </div>
            );
          })}
        </div>

        {/* Outcomes */}
        {/* <div className="flex justify-center space-x-8 mt-16">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white shadow-lg max-w-xs">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-sm">{outcome}</h3>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};