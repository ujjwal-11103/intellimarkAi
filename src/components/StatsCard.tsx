import React, { useEffect, useState } from 'react';

const AnimatedCounter = ({ target, duration = 2000, delay = 0 }: { target: string; duration?: number; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      const numericTarget = parseInt(target.replace(/\D/g, ''));
      const increment = numericTarget / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= numericTarget) {
          setCount(numericTarget);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  const formatNumber = (num: number) => {
    if (target.includes('%')) return `${num}%`;
    if (target.includes('+')) return `${num}+`;
    return num.toString();
  };

  return (
    <span className={`transition-all duration-1000 ${hasStarted ? 'opacity-100' : 'opacity-0'}`}>
      {formatNumber(count)}
    </span>
  );
};

const StatsCard = ({
  number,
  label,
  delay,
  gradient,
  accentColor,
}: {
  number: string;
  label: string;
  delay: number;
  gradient: string;
  accentColor: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`group relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${accentColor} rounded-full animate-pulse`}
            style={{
              left: `${25 + i * 20}%`,
              top: `${15 + (i % 2) * 70}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Card container */}
      <div className="relative group">
        <div className={`absolute -inset-1 ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-all duration-700 group-hover:scale-105`} />
        <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-700 group-hover:scale-[1.02] border border-white/20">
          <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
          <div className="relative p-8 text-center">
            <div className="mb-4 relative">
              <div className="text-4xl font-black bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:via-gray-600 group-hover:to-gray-800 transition-all duration-500 tracking-tight">
                <AnimatedCounter target={number} delay={delay + 300} />
              </div>
              <div className={`absolute inset-0 text-4xl font-black opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${accentColor.replace('bg-', 'text-')} blur-sm`}>
                {number}
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-all duration-300 tracking-wide">
              {label}
            </div>
            <div className="mt-6 h-0.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${gradient} rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: isVisible ? '100%' : '0%',
                  transitionDelay: `${delay + 600}ms`,
                }}
              />
            </div>
          </div>
          <div className={`absolute top-4 right-4 w-1.5 h-1.5 ${accentColor} rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
          <div className={`absolute bottom-4 left-4 w-1.5 h-1.5 ${accentColor} rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
