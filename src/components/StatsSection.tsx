import React from 'react';
import { Award, Zap, Shield } from 'lucide-react';
// Assuming StatsCard is in a separate file, e.g., './StatsCard.tsx'
// import StatsCard from "./StatsCard"; 

// Mock StatsCard component if not provided
const StatsCard = ({ number, label, delay, gradient, accentColor }: any) => (
  <div style={{ animationDelay: `${delay}ms` }} className={`p-8 rounded-2xl ${gradient} text-white shadow-lg`}>
    <div className="text-5xl font-bold">{number}</div>
    <div className="mt-2 text-lg">{label}</div>
  </div>
);


const stats = [
  { number: '350+', label: 'Successful Clients', gradient: 'bg-gradient-to-br from-blue-500 to-cyan-600', accentColor: 'bg-blue-500' },
  { number: '87%', label: 'Repeat Business', gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600', accentColor: 'bg-emerald-500' },
  { number: '1000+', label: 'Implementations', gradient: 'bg-gradient-to-br from-purple-500 to-indigo-600', accentColor: 'bg-purple-500' },
  { number: '20+', label: 'Geographies Served', gradient: 'bg-gradient-to-br from-orange-500 to-red-600', accentColor: 'bg-orange-500' },
];

const StatsSection = () => {
  return (
    <section className="relative bg-gray-50 py-20 sm:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white to-gray-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white rounded-full shadow-md border">
            <Award className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-bold text-gray-700 tracking-wider uppercase">
              Excellence in Numbers
            </span>
            <Zap className="w-4 h-4 text-yellow-500" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Proven Excellence
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses globally with cutting-edge solutions and unmatched expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 100}
              gradient={stat.gradient}
              accentColor={stat.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;