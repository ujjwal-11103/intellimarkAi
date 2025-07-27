import React from 'react';

const CompanyMarquee: React.FC = () => {
  const companies = [
    { name: 'Virgin Pulse', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'Samsung', logo: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'Sabra', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'Reckitt', logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'Panasonic', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'NewLook', logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'Diageo', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop' },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-slow {
            animation-duration: 40s;
          }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: left center; }
          50% { background-position: right center; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>

      <div className="bg-slate-900 relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_40%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center">
          <div className="text-center mb-16 sm:mb-20 px-4">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 text-blue-300 text-xs sm:text-sm font-semibold rounded-full border border-blue-400/20 backdrop-blur-xl shadow-2xl">
                ✨ Trusted by Global Fortune 500 Companies
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              From hyperscalers to the{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  fortune 1000s
                </span>
                <div className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 to-emerald-400/50 rounded-full blur-sm"></div>
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering organizations worldwide with cutting-edge AI solutions and strategic insights that drive unprecedented growth.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-16 sm:w-32 md:w-48 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 w-16 sm:w-32 md:w-48 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-20"></div>
            
            <div className="flex animate-marquee-slow whitespace-nowrap py-8">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12">
                  <div className="group relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-700 p-6 sm:p-8 group-hover:scale-110 group-hover:-translate-y-2 border border-white/10">
                      <div className="relative w-28 h-14 sm:w-32 sm:h-16 md:w-40 md:h-20 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-w-full max-h-full object-contain filter brightness-90 contrast-110 group-hover:brightness-110 transition-all duration-700 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyMarquee;