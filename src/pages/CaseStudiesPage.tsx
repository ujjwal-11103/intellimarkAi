import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, ArrowUpRight, Target, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudiesData';
import Header from '../components/Header';


// Collect all unique topics from the data
const allTopicsSet = new Set<string>();
caseStudiesData.forEach(study => {
  if (Array.isArray(study.topics)) {
    study.topics.forEach(topic => allTopicsSet.add(topic));
  }
});
const allTopics = Array.from(allTopicsSet).sort();

const testimonials = [
  {
    quote: "Intellimark's AI solutions transformed our entire operation. The results exceeded all expectations.",
    author: "Sarah Chen",
    position: "CTO",
    company: "TechCorp",
    avatar: "SC"
  },
  {
    quote: "The predictive analytics platform saved us millions and revolutionized our decision-making process.",
    author: "Michael Rodriguez",
    position: "VP Operations",
    company: "DataFlow Inc",
    avatar: "MR"
  }
];

const CaseStudiesPage: React.FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // Removed unused currentTestimonial state

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter case studies by selected topics (must match all selected)
  const filteredCaseStudies = selectedTopics.length === 0
    ? caseStudiesData
    : caseStudiesData.filter((study: any) =>
        Array.isArray(study.topics) && selectedTopics.every(topic => study.topics.includes(topic))
      );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by World's biggest brands.
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-black text-gray-900 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              AI Success
              <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            
            <p className={`text-2xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Discover how industry leaders achieve extraordinary results with our cutting-edge AI solutions. 
              <span className="text-purple-600 font-semibold">Real impact, measurable outcomes.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-t border-gray-100 top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Success Stories</h2>
              <p className="text-gray-600 text-lg">Filter by topic to discover relevant transformations</p>
            </div>
            <div className="text-sm text-gray-500 mt-4 lg:mt-0 bg-gray-50 px-4 py-2 rounded-xl">
              <strong>{filteredCaseStudies.length}</strong> of <strong>{caseStudiesData.length}</strong> case studies
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTopics.map(topic => {
              const isActive = selectedTopics.includes(topic);
              return (
                <button
                  key={topic}
                  onClick={() => {
                    setSelectedTopics(prev =>
                      isActive ? prev.filter(t => t !== topic) : [...prev, topic]
                    );
                  }}
                  className={`px-5 py-2 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-600 scale-105 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-purple-50 hover:border-purple-300'
                  }`}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCaseStudies.slice(0, 12).map((study: any, index: number) => (
            <div
              key={study.id}
              className={`group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-purple-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative p-8 pb-6">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700">
                    {study.industryLabel}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-6 h-6 text-purple-600 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">
                  {study.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-base">
                  {study.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 gap-4 mb-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {study.metrics.improvement}
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase tracking-wide">Improvement</div>
                  </div>
                  {/* <div className="text-center">
                    <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {study.metrics.timeFrame}
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase tracking-wide">Timeline</div>
                  </div> */}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                    <span key={techIndex} className="px-3 py-1.5 bg-white border-2 border-gray-200 rounded-xl text-xs text-gray-700 font-bold hover:border-purple-200 hover:text-purple-600 transition-colors">
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl text-xs text-purple-700 font-bold">
                      +{study.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Results Preview */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Key Results:</span>
                  </div>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result: string, resultIndex: number) => (
                      <li key={resultIndex} className="text-sm text-gray-600 flex items-start">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/case-study/${study.id}`}
                  className="group/btn flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-xl shadow-purple-600/25 hover:shadow-2xl hover:shadow-purple-600/40 font-bold"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Write Your
            <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Success Story?
            </span>
          </h2>
          <p className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the ranks of industry leaders who've transformed their business with our AI solutions. 
            <span className="text-white font-bold">Your transformation starts here.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-colors shadow-2xl hover:scale-105">
              <Target className="w-6 h-6 mr-3 inline" />
              Start Your Project
            </button>
            <a
              href="https://outlook.office.com/bookwithme/user/e8ee839cd0224fb7bbc88d3de0f0e74a@intellimark.ai/meetingtype/X5VsiCFLD0O0S7V9WOBTyQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-200 transition-colors flex items-center font-bold text-lg"
            >
              <Users className="w-6 h-6 mr-3" />
              Talk to an Expert
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
