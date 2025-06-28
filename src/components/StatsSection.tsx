import React from 'react';
import { Award, Zap, Shield } from 'lucide-react';
import StatsCard from "./StatsCard";

const stats = [
  {
    number: '350+',
    label: 'Successful Clients',
    gradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    accentColor: 'bg-blue-500',
  },
  {
    number: '87%',
    label: 'Repeat Business',
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    accentColor: 'bg-emerald-500',
  },
  {
    number: '1000+',
    label: 'Successful Implementations',
    gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    accentColor: 'bg-purple-500',
  },
  {
    number: '20+',
    label: 'Geographies Served',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
    accentColor: 'bg-orange-500',
  },
];

const StatsSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Sophisticated background omitted for brevity */}

      {/* Content */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-white/30 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
                <Award className="w-4 h-4 text-gray-600" />
              </div>
              <span className="text-xs font-bold text-gray-700 tracking-wider uppercase">
                Excellence in Numbers
              </span>
              <Zap className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Proven Excellence
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transforming businesses globally with cutting-edge solutions and unmatched expertise
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <Shield className="w-4 h-4 text-gray-400" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                number={stat.number}
                label={stat.label}
                delay={index * 150}
                gradient={stat.gradient}
                accentColor={stat.accentColor}
              />
            ))}
          </div>

          
        </div>
      </div>

      {/* Additional styles */}
      <style jsx>{`
        @keyframes float-subtle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-4px) translateX(2px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-8px) translateX(-2px);
            opacity: 0.9;
          }
          75% {
            transform: translateY(-4px) translateX(1px);
            opacity: 0.6;
          }
        }
        .animate-float-subtle {
          animation: float-subtle 12s ease-in-out infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
