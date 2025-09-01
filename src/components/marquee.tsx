import React from 'react';
import anaplan from "../images/anaplan.png"
const CompanyMarquee: React.FC = () => {
  const companies = [
    // { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'AWS', logo: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Azure', logo: anaplan },
    { name: 'Blue Yonder', logo: 'https://vectorseek.com/wp-content/uploads/2023/08/Blue-Yonder-Logo-Vector.svg-.png' },
    { name: 'Nielsen', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Nielsen_logo.svg' },
    { name: 'Flipkart', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png' },
    { name: 'Zepto', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Logo_of_Zepto.png' },
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
              External data + SOTA Algorithms +{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  Bolt-on Agents
                </span>
                <div className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 to-emerald-400/50 rounded-full blur-sm"></div>
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are not a SaaS, we take data and sit on top of your existing platforms to give maximum ROI for minimum investment.
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-16 sm:w-32 md:w-48 h-full bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 w-16 sm:w-32 md:w-48 h-full bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-20"></div>

            <div className="flex animate-marquee-slow whitespace-nowrap py-8">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0  transition-all duration-700"></div>
                    <div className="relative sm:rounded-3xl transition-all duration-700 p-6 sm:p-8">
                      <div className="relative w-28 h-14 sm:w-32 sm:h-16 md:w-40 md:h-20 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-w-full max-h-full object-contain filter brightness-90 contrast-110  transition-all duration-700 rounded-lg"
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