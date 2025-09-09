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

  // Responsive scaling for mobile, but keep arrangement and connections
  const getResponsiveValue = (desktop: number, mobile: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return mobile;
    }
    return desktop;
  };
  const radius = getResponsiveValue(180, 100);
  const centerX = getResponsiveValue(300, 160);
  const centerY = getResponsiveValue(200, 120);

  // Convert outer elements into coordinates for the line
  const polygonPoints = outerElements
    .map((el) => {
      const angle = (el.angle - 90) * (Math.PI / 180); // rotate so 0° is top
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      return `${x},${y}`;
    })
    .join(' ');

  // Use a fixed aspect ratio container to keep the circular layout
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const aspectRatio = isMobile ? 'aspect-[4/3]' : 'aspect-[3/2]';
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Machine Learning Engine for Non-Linear Impact Analysis and Tracking for Pricing
          </h2>
        </div>

        <div className={`relative flex justify-center items-center w-full ${aspectRatio} overflow-visible`}>
          {/* SVG Perforated Circle/Polygon */}
          <svg
            className="absolute w-full h-full"
            viewBox={isMobile ? "0 0 320 240" : "0 0 600 400"}
          >
            <polygon
              points={polygonPoints}
              fill="none"
              stroke="gray"
              strokeDasharray="6,6"
              strokeWidth={isMobile ? "1.2" : "2"}
            />
          </svg>

          {/* Central Revenue Hub */}
          <div className="absolute z-20 left-1/2 top-1/2" style={{transform: 'translate(-50%, -50%)'}}>
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="font-bold text-xs sm:text-sm">Revenue</span>
            </div>
          </div>

          {/* Inner Circle Elements */}
          {centerElements.map((element) => {
            const angle = element.angle * (Math.PI / 180);
            const innerRadius = getResponsiveValue(80, 44);
            const x = Math.cos(angle - Math.PI / 2) * innerRadius;
            const y = Math.sin(angle - Math.PI / 2) * innerRadius;
            return (
              <div
                key={element.name}
                className="absolute z-10 left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                }}
              >
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gray-800 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs font-medium shadow-lg">
                  <span className="text-center px-1 sm:px-2">{element.name}</span>
                </div>
              </div>
            );
          })}

          {/* Yellow Arrows */}
          {centerElements.map((element, index) => {
            const angle = element.angle * (Math.PI / 180);
            const arrowRadius = getResponsiveValue(52, 28);
            const x = Math.cos(angle - Math.PI / 2) * arrowRadius;
            const y = Math.sin(angle - Math.PI / 2) * arrowRadius;
            return (
              <div
                key={`arrow-${index}`}
                className="absolute z-15 left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${element.angle + 45}deg)`,
                  width: isMobile ? '8px' : '16px',
                  height: isMobile ? '8px' : '16px',
                  background: '#FACC15',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              />
            );
          })}

          {/* Outer Elements */}
          {outerElements.map((element) => {
            const angle = element.angle * (Math.PI / 180);
            const x = Math.cos(angle - Math.PI / 2) * radius;
            const y = Math.sin(angle - Math.PI / 2) * radius;
            return (
              <div
                key={element.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                }}
              >
                <div className="w-24 h-10 sm:w-32 sm:h-16 bg-gray-600 rounded-lg flex items-center justify-center text-white text-[10px] sm:text-xs font-medium shadow-lg">
                  <span className="text-center px-1 sm:px-2">{element.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
