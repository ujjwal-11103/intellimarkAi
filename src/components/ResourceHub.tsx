import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, FileText, TrendingUp, Users, Brain, Lightbulb, ChevronRight } from 'lucide-react';

interface ResourceCard {
  id: string;
  type: 'BLOG' | 'EBOOK' | 'CASE STUDY';
  title: string;
  description?: string;
  image: string;
  readTime?: string;
  category: string;
  featured?: boolean;
}

const ResourcesHub: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const resources: ResourceCard[] = [
    {
      id: '1',
      type: 'BLOG',
      title: 'The Future of AI: Embracing Explainable AI',
      description: 'Explainable AI (XAI) marks a significant evolution towards transparent, trustworthy AI systems.',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      category: 'Artificial Intelligence',
      featured: true
    },
    {
      id: '2',
      type: 'BLOG',
      title: 'Unveiling AI: A Guide to XAI Technologies',
      description: 'Exploring the forefront of Explainable AI (XAI), this blog compares leading technologies like LIME and SHAP, highlighting their innovative contributions towards making AI decisions transparent and comprehensible.',
      image: 'https://images.pexels.com/photos/9783346/pexels-photo-9783346.jpeg',
      readTime: '5 min read',
      category: 'Digital Transformation'
    },
    {
      id: '3',
      type: 'CASE STUDY',
      title: 'B2B Demand Forecasting, Sales Alerts and Profitability Management System',
      description: 'Real-world implementation case study showing 40% improvement in forecast accuracy.',
      image: 'https://images.pexels.com/photos/8353803/pexels-photo-8353803.jpeg',
      readTime: '8 min read',
      category: 'Case Studies'
    },
    {
      id: '4',
      type: 'CASE STUDY',
      title: 'Store Recommendation System for Lubricant Brand',
      description: 'The Agentic AI Implementation Guide - Strategic framework for enterprise AI adoption.',
      image: 'https://images.pexels.com/photos/13065696/pexels-photo-13065696.jpeg',
      readTime: '60 min read',
      category: 'Leadership',
      featured: true
    },
    {
      id: '5',
      type: 'BLOG',
      title: 'Marketing Mix Modeling: Enhancing ROI through Data-Driven Insights',
      description: 'Deep dive into autonomous AI systems and their practical applications in business.',
      image: 'https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg',
      readTime: '15 min read',
      category: 'AI Technology'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'BLOG':
        return <FileText className="w-4 h-4" />;
      case 'CASE STUDIES':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'BLOG':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'cASE STUDIES':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Latest insights & resources</span>
            </div> */}
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-none">
              Resources
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Hub
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Explore expert insights, implementation guides, and success stories to accelerate your AI transformation journey.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {['All Resources', 'Blogs', 'Case Studies'].map((filter) => (
                <button
                  key={filter}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    filter === 'All Resources'
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-8">
              <div 
                className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredCard(resources[0].id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0">
                  <img 
                    src={resources[0].image} 
                    alt={resources[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">
                    <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border text-sm font-medium ${getTypeColor(resources[0].type)}`}>
                      {getTypeIcon(resources[0].type)}
                      <span>{resources[0].type}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {resources[0].title}
                  </h2>
                  
                  <p className="text-gray-200 text-lg mb-6 leading-relaxed max-w-2xl">
                    {resources[0].description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-300">
                      <span className="text-sm">{resources[0].category}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="text-sm">{resources[0].readTime}</span>
                    </div>
                    
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Articles */}
            <div className="lg:col-span-4 space-y-6">
              {resources.slice(1, 3).map((resource) => (
                <div
                  key={resource.id}
                  className="group relative h-[235px] rounded-2xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredCard(resource.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className={`inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border text-xs font-medium mb-3 w-fit ${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                      <span>{resource.type}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">
                      {resource.title}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-xs">{resource.readTime}</span>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {resources.slice(3).map((resource) => (
              <div
                key={resource.id}
                className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border text-sm font-medium mb-4 w-fit ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)}
                    <span>{resource.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <span className="text-xs">{resource.category}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="text-xs">{resource.readTime}</span>
                    </div>
                    
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your business with AI?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join thousands of companies already leveraging IntelliMark's AI solutions to drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office.com/bookwithme/user/e8ee839cd0224fb7bbc88d3de0f0e74a@intellimark.ai/meetingtype/X5VsiCFLD0O0S7V9WOBTyQ2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              <span>Talk to an Expert</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/case-studies"
              className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              <span>View All Resources</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ResourcesHub;