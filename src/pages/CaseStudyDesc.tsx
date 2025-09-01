// src/components/CaseStudyPage.tsx
import React, { useEffect, useState } from "react";
import { Target, Lightbulb, CheckCircle } from "lucide-react";
import { CaseStudyDesc } from "../data/CaseStudyDesc";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedSection: React.FC<SectionProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function CaseStudyPage({ data }: { data: CaseStudyDesc }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">{data.headerTitle}</h1>
          <div className="inline-flex items-center px-4 py-2 mt-3 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {data.industryLabel ?? data.badgeText}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Problem */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{data.problem.text}</p>
          </div>
        </AnimatedSection>

        {/* Challenges */}
        {data.challenges?.length > 0 && (
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Challenges</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {data.challenges.map((c, i) => (
                  <div key={i} className="border-l-4 border-purple-200 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{c.title}</h3>
                    <p className="text-gray-700">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Solution */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Our Solution</h2>
            </div>
            <p className="text-purple-100 leading-relaxed mb-8 text-lg">{data.solution.intro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.solution.blocks.map((b, i) => (
                <div key={i} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-semibold mb-3 text-lg">{b.title}</h3>
                  <p className="text-sm text-purple-100">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Approach */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Approach</h2>
            <div className="space-y-8">
              {data.approach.map((s, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Results */}
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.results.map((r, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
