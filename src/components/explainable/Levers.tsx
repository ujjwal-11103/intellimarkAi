import React from 'react';

const NrmLevers = () => {
  const levers = [
    {
      level: 'LEVER 1',
      title: 'Brand portfolio pricing',
      description: 'Strategic pricing across brand portfolio'
    },
    {
      level: 'LEVER 2', 
      title: 'Pack price architecture',
      description: 'Optimized pack size and price structure'
    },
    {
      level: 'LEVER 3',
      title: 'Active mix management', 
      description: 'Strategic product mix optimization'
    },
    {
      level: 'LEVER 4',
      title: 'Promotion management & Trade spend translation',
      description: 'Effective promotional strategies and converting trade investments to growth'
    }
  ];

  return (
  <div className="max-w-6xl mx-auto p-4 sm:p-8 bg-white">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2">
            Net Revenue Management
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Strategic levers for sustainable growth
          </p>
        </div>
      {/* Header Triangle */}
      <div className="relative mb-8 sm:mb-12">
        <div className="mx-auto w-full max-w-4xl px-2">
          {/* Triangle shape */}
          <div 
            className="relative bg-gradient-to-b from-purple-100 to-purple-50 mx-auto"
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              height: '120px',
              width: '100%'
            }}
          >
            {/* Content inside triangle */}
            <div className="absolute inset-0 flex items-center justify-center pt-4 sm:pt-8">
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                  Up to 2/3<sup className="text-xs sm:text-lg">rd</sup> topline
                </h2>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
                  growth for CPG
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Levers Chain */}
      <div className="relative">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-0">
          {levers.map((lever, index) => (
            <div key={index} className="relative group mb-4 sm:mb-0">
              {/* Lever Container */}
              <div 
                className="relative bg-white border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 w-64 h-28 sm:w-60 sm:h-28"
                style={{
                  clipPath: index === levers.length - 1 
                    ? 'polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)'
                    : 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
                  marginRight: index === levers.length - 1 ? '0px' : '-15px'
                }}
              >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center pl-4 pr-2 sm:pl-8 sm:pr-6">
                  <div className="text-xs sm:text-xs font-semibold text-purple-600 uppercase tracking-wide mb-1">
                    {lever.level}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">
                    {lever.title}
                  </div>
                </div>

                {/* Hover tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 w-40 sm:w-auto">
                  <div className="bg-purple-600 text-white text-xs rounded-lg py-2 px-3 shadow-lg whitespace-normal">
                    {lever.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-purple-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom description */}
      <div className="text-center mt-6 sm:mt-8 px-2">
        <p className="text-gray-600 text-xs sm:text-sm max-w-3xl mx-auto">
          Each lever represents a strategic opportunity to optimize revenue management, 
          working together to deliver substantial topline growth for Consumer Packaged Goods companies.
        </p>
      </div>
    </div>
  );
};

export default NrmLevers;