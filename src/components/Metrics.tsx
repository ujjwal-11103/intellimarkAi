import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Globe, DollarSign, Crown } from 'lucide-react';

const Metrics = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0,
    value: 0,
    awards: 0
  });

  const targetCounts = {
    clients: 500,
    projects: 1200,
    countries: 45,
    satisfaction: 99,
    value: 25,
    awards: 150
  };

  useEffect(() => {
    const duration = 3000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        clients: Math.floor(targetCounts.clients * easeOutQuart),
        projects: Math.floor(targetCounts.projects * easeOutQuart),
        countries: Math.floor(targetCounts.countries * easeOutQuart),
        satisfaction: Math.floor(targetCounts.satisfaction * easeOutQuart),
        value: Math.floor(targetCounts.value * easeOutQuart),
        awards: Math.floor(targetCounts.awards * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Fortune 500 Clients',
      description: 'Global enterprises transformed with premium AI solutions',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      value: counts.projects,
      suffix: '+',
      label: 'Elite Projects Delivered',
      description: 'AI implementations across mission-critical operations',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Globe,
      value: counts.countries,
      suffix: '+',
      label: 'Global Presence',
      description: 'Countries where our premium solutions operate',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Average satisfaction rating from enterprise clients',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      icon: DollarSign,
      value: counts.value,
      suffix: 'B+',
      label: 'Value Created',
      description: 'Total value generated for our enterprise clients',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: Crown,
      value: counts.awards,
      suffix: '+',
      label: 'Industry Awards',
      description: 'Recognition for AI innovation and excellence',
      color: 'from-rose-500 to-pink-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/10 via-transparent to-yellow-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_70%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <TrendingUp className="h-12 w-12 text-amber-400" />
            <Crown className="h-12 w-12 text-amber-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Proven Track Record of</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our metrics demonstrate unparalleled success in delivering transformative AI solutions 
            that create billions in value for the world's most prestigious companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-500 hover:transform hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {metric.value}{metric.suffix}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                    {metric.label}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-12 border border-amber-500/30">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your enterprise with world-class AI solutions 
              that deliver measurable results and competitive advantage.
            </p>
            <button className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-900 px-12 py-4 rounded-2xl hover:from-amber-400 hover:via-amber-500 hover:to-yellow-400 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-amber-500/30 transform hover:scale-105">
              Start Your Transformation Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;