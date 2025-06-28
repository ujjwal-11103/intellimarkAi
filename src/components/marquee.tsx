import React from 'react';

const CompanyMarquee: React.FC = () => {
  const companies = [
    {
      name: 'Virgin Pulse',
      logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Samsung',
      logo: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Sabra',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Reckitt',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Panasonic',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'NewLook',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Diageo',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Microsoft',
      logo: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Apple',
      logo: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    },
    {
      name: 'Google',
      logo: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=300&h=120&fit=crop'
    }
  ];

  return (
    <>
      {/* Inline CSS for animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-500/20 rounded-full animate-float blur-sm"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-emerald-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/6 right-1/3 w-5 h-5 bg-indigo-500/20 rounded-full animate-float blur-sm" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen py-20">
          {/* Premium Header Section */}
          <div className="text-center mb-20 px-4">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 text-blue-300 text-sm font-semibold rounded-full border border-blue-400/20 backdrop-blur-xl shadow-2xl">
                ✨ Trusted by Global Fortune 500 Companies
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-7xl xl:text-5xl font-bold text-white leading-[0.9] tracking-tight mb-8">
              From hyperscalers to the{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  fortune 1000s
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-emerald-400/50 rounded-full blur-sm"></div>
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                IntelliMark AI accelerates AI expertise
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Empowering organizations worldwide with cutting-edge AI solutions and strategic insights that drive unprecedented growth
            </p>
          </div>

          {/* Full-Width Premium Marquee */}
          <div className="relative w-full">
            {/* Main Marquee Container - Full Screen Width */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
              <div className="flex animate-marquee-slow whitespace-nowrap py-12">
                {/* First set of logos */}
                {companies.concat(companies).map((company, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex items-center justify-center mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
                  >
                    <div className="group relative">
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                      
                      {/* Main Logo Container */}
                      <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-700 p-8 md:p-10 lg:p-12 group-hover:scale-110 group-hover:-translate-y-3 border border-white/10 hover:border-white/20">
                        {/* Inner Glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        
                        {/* Logo Image Container */}
                        <div className="relative w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-56 xl:h-28 flex items-center justify-center">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            className="max-w-full max-h-full object-contain filter brightness-90 contrast-110 group-hover:brightness-110 group-hover:contrast-125 transition-all duration-700 rounded-xl shadow-lg"
                          />
                          
                          {/* Overlay for better logo visibility */}
                          <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
                        </div>
                        
                        {/* Subtle Company Name */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <span className="text-xs text-white/60 font-medium px-3 py-1 bg-black/20 rounded-full backdrop-blur-sm">
                            {company.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Edge Gradients - Full Screen */}
            <div className="absolute left-0 top-0 w-32 md:w-48 lg:w-64 h-full bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 w-32 md:w-48 lg:w-64 h-full bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent pointer-events-none z-20"></div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default CompanyMarquee;