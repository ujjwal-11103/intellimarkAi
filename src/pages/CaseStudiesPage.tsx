import React, { useState, useEffect } from 'react';
import { Filter, ArrowRight, Brain, Building, ShoppingCart, Factory, Users, TrendingUp, Shield, Zap, Star, Award, ChevronDown, Play, ArrowUpRight, Target, CheckCircle, Clock, BarChart3, Sparkles, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudiesData';
import Header from '../components/Header';

const industries = [
  { id: 'all', name: 'All Industries', icon: Building, count: 12, color: 'from-gray-500 to-gray-600' },
  { id: 'healthcare', name: 'Healthcare', icon: Shield, count: 3, color: 'from-emerald-500 to-emerald-600' },
  { id: 'finance', name: 'Finance', icon: TrendingUp, count: 3, color: 'from-blue-500 to-blue-600' },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: 3, color: 'from-orange-500 to-orange-600' },
  { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: 3, color: 'from-purple-500 to-purple-600' },
];

const stats = [
  { label: 'Success Rate', value: '98%', icon: Award, description: 'Project completion rate' },
  { label: 'Avg. ROI Increase', value: '127%', icon: TrendingUp, description: 'Return on investment' },
  { label: 'Projects Delivered', value: '150+', icon: Star, description: 'Successful implementations' },
  { label: 'Industries Served', value: '12+', icon: Building, description: 'Across multiple sectors' },
];

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
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudiesData 
    : caseStudiesData.filter((study: any) => study.industry === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative container mx-auto px-6 py-20">
          {/* Hero Content */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by Fortune 500 companies worldwide
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

            <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center shadow-2xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105">
                <Play className="w-6 h-6 mr-3" />
                <span className="font-bold text-lg">Watch Demo</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group text-gray-700 hover:text-purple-600 transition-colors flex items-center font-semibold text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Cases
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Floating Stats */}
            
          </div>

          {/* Testimonial Carousel */}
          
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-t border-gray-100 top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Success Stories</h2>
              <p className="text-gray-600 text-lg">Filter by industry to discover relevant transformations</p>
            </div>
            <div className="text-sm text-gray-500 mt-4 lg:mt-0 bg-gray-50 px-4 py-2 rounded-xl">
              <strong>{filteredCaseStudies.length}</strong> of <strong>{caseStudiesData.length}</strong> case studies
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveFilter(industry.id)}
                  className={`group flex items-center px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    activeFilter === industry.id
                      ? `bg-gradient-to-r ${industry.color} text-white shadow-2xl scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg border-2 border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  {industry.name}
                  <span className={`ml-3 px-3 py-1 rounded-full text-xs font-bold ${
                    activeFilter === industry.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-700'
                  }`}>
                    {industry.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study: any, index: number) => (
            <div
              key={study.id}
              className={`group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-purple-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header with Gradient */}
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
                  <div className="text-center">
                    <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {study.metrics.timeFrame}
                    </div>
                    <div className="text-xs text-gray-600 font-bold uppercase tracking-wide">Timeline</div>
                  </div>
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

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-purple-100 text-gray-700 hover:text-purple-600 px-10 py-5 rounded-2xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-200 font-bold text-lg hover:scale-105">
            <Rocket className="w-5 h-5 mr-3 inline" />
            Load More Success Stories
            <ChevronDown className="w-5 h-5 ml-3 inline group-hover:translate-y-1 transition-transform" />
          </button>
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
            <button className="text-white hover:text-purple-200 transition-colors flex items-center font-bold text-lg">
              <Users className="w-6 h-6 mr-3" />
              Book Consultation
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;