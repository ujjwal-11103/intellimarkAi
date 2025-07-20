import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Target, Users, Lightbulb, Wrench, Quote, Brain, Star, TrendingUp, Clock, Award, Play, Download, Share2, Bookmark, ArrowRight, ChevronRight, Zap, Shield, BarChart3, User, Calendar, MapPin, Building, Globe, Rocket, Eye, Heart, MessageCircle, ThumbsUp, AlertCircle, Layers, Code, Database, Cpu, Network, Sparkles } from 'lucide-react';
import { caseStudiesData } from '../data/caseStudiesData';
import Header from '../components/Header';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const caseStudy = caseStudiesData.find((study: any) => study.id === id);

  useEffect(() => {
    setIsLoaded(true);
    
    // Simulate progress animation
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-purple-600 hover:text-purple-700">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3, description: 'Project summary & goals' },
    { id: 'problem', label: 'Problem', icon: AlertCircle, description: 'Challenge identification' },
    { id: 'solution', label: 'Solution', icon: Lightbulb, description: 'Our approach & methodology' },
    { id: 'process', label: 'Process', icon: Layers, description: 'Implementation timeline' },
    { id: 'results', label: 'Results', icon: TrendingUp, description: 'Measurable outcomes' },
    { id: 'testimonial', label: 'Testimonial', icon: Quote, description: 'Client feedback' },
  ];

  const relatedCases = caseStudiesData.filter((study: any) => 
    study.industry === caseStudy.industry && study.id !== caseStudy.id
  ).slice(0, 3);

  const processSteps = [
    { title: 'Discovery & Analysis', icon: Eye, description: 'Deep dive into current systems and pain points', duration: '2 weeks' },
    { title: 'Strategy Development', icon: Target, description: 'Custom AI strategy aligned with business goals', duration: '1 week' },
    { title: 'Solution Design', icon: Code, description: 'Technical architecture and system design', duration: '3 weeks' },
    { title: 'Development & Testing', icon: Cpu, description: 'Agile development with continuous testing', duration: '8 weeks' },
    { title: 'Deployment & Training', icon: Rocket, description: 'Go-live support and team training', duration: '2 weeks' },
    { title: 'Optimization', icon: TrendingUp, description: 'Performance monitoring and improvements', duration: 'Ongoing' },
  ];

  const techStack = [
    { name: 'Machine Learning', icon: Brain, color: 'from-purple-500 to-purple-600' },
    { name: 'Cloud Computing', icon: Globe, color: 'from-blue-500 to-blue-600' },
    { name: 'Data Analytics', icon: BarChart3, color: 'from-green-500 to-green-600' },
    { name: 'API Integration', icon: Network, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-6 pt-28 pb-4">
        <div className="mb-6">
          <Link to="/case-studies" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cases
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-16 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb & Meta */}
            <div className={`flex flex-wrap items-center gap-4 mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25">
                <Building className="w-4 h-4 mr-2" />
                {caseStudy.industryLabel}
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-gray-200/50 shadow-sm">
                <Clock className="w-4 h-4 mr-2" />
                {caseStudy.metrics.timeFrame} implementation
              </div>
              <div className="flex items-center text-sm text-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 px-5 py-3 rounded-2xl border border-amber-200/50">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Featured Case Study
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-gray-200/50 shadow-sm">
                <Eye className="w-4 h-4 mr-2" />
                2.4k views
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h1 className={`text-6xl md:text-8xl font-black bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {caseStudy.title}
                </h1>
                
                <p className={`text-2xl text-gray-700 leading-relaxed mb-10 font-medium transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {caseStudy.description}
                </p>

                <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <button className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white px-10 py-5 rounded-2xl hover:shadow-2xl hover:shadow-purple-600/40 transition-all duration-300 flex items-center font-bold text-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                    <Play className="w-6 h-6 mr-3" />
                    Watch Case Study
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-semibold text-lg bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200/50 hover:border-purple-200 hover:bg-purple-50/50">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <button className="flex items-center hover:text-purple-600 transition-colors bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 hover:border-purple-200">
                      <ThumbsUp className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">24</span>
                    </button>
                    <button className="flex items-center hover:text-purple-600 transition-colors bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200/50 hover:border-purple-200">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">8</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info Card */}
              <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-600"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-8">Project Overview</h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-purple-500/25">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 text-lg">{caseStudy.testimonial.company}</div>
                        <div className="text-gray-600 text-sm font-medium">Client Partner</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-blue-500/25">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 text-lg">{caseStudy.metrics.timeFrame}</div>
                        <div className="text-gray-600 text-sm font-medium">Project Duration</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg shadow-green-500/25">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-black text-gray-900 text-lg">{caseStudy.metrics.improvement}</div>
                        <div className="text-gray-600 text-sm font-medium">Performance Boost</div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200/50">
                      <div className="text-sm font-bold text-gray-800 mb-4">Core Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.slice(0, 4).map((tech: string, index: number) => (
                          <span key={index} className="px-3 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-xl text-xs font-bold border border-purple-200/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Dashboard */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="group relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-green-500/25">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative">
                  <TrendingUp className="w-14 h-14 mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-black mb-3">{caseStudy.metrics.improvement}</div>
                  <div className="text-green-100 font-bold text-lg">Performance Boost</div>
                  <div className="text-green-200/80 text-sm mt-1">Above industry average</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative">
                  <Clock className="w-14 h-14 mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-black mb-3">{caseStudy.metrics.timeFrame}</div>
                  <div className="text-blue-100 font-bold text-lg">Implementation</div>
                  <div className="text-blue-200/80 text-sm mt-1">Ahead of schedule</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-purple-500 via-purple-600 to-violet-600 rounded-3xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative">
                  <Zap className="w-14 h-14 mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-black mb-3">{caseStudy.technologies.length}</div>
                  <div className="text-purple-100 font-bold text-lg">AI Technologies</div>
                  <div className="text-purple-200/80 text-sm mt-1">Cutting-edge stack</div>
                </div>
              </div>
              
              <div className="group relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-3xl p-8 text-white overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
                <div className="relative">
                  <Award className="w-14 h-14 mb-6 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-5xl font-black mb-3">A+</div>
                  <div className="text-orange-100 font-bold text-lg">Success Rating</div>
                  <div className="text-orange-200/80 text-sm mt-1">Exceptional results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200/50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group flex items-center px-8 py-5 text-sm font-bold border-b-4 transition-all whitespace-nowrap relative ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600 bg-gradient-to-t from-purple-50/80 to-transparent'
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50/50'
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-50 to-transparent opacity-50"></div>
                  )}
                  <div className="relative flex items-center">
                  <IconComponent className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-bold">{tab.label}</div>
                    <div className="text-xs opacity-75 font-medium">{tab.description}</div>
                  </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-20">
              {/* Project Summary */}
              <div className="text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-2xl text-sm font-bold mb-8">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Executive Summary
                </div>
                <h2 className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8">Project Impact Overview</h2>
                <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                  This case study showcases how we transformed {caseStudy.testimonial.company}'s operations 
                  through <span className="text-purple-600 font-bold">innovative AI solutions</span>, achieving remarkable results in just {caseStudy.metrics.timeFrame}.
                </p>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-4xl font-black text-gray-900 mb-16 text-center">Technology Ecosystem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={index} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                        <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-black text-gray-900 text-center">{tech.name}</h4>
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl p-16 border border-purple-100/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                
                <div className="relative">
                <h3 className="text-4xl font-black text-gray-900 mb-12 text-center">Project Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/25">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl font-black text-purple-600 mb-3">{caseStudy.results.length}</div>
                    <div className="text-gray-800 font-bold text-xl">Key Results</div>
                    <div className="text-gray-600 text-sm mt-2">Measurable outcomes achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/25">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl font-black text-blue-600 mb-3">{caseStudy.challenges.length}</div>
                    <div className="text-gray-800 font-bold text-xl">Challenges</div>
                    <div className="text-gray-600 text-sm mt-2">Complex problems solved</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/25">
                      <Cpu className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-6xl font-black text-green-600 mb-3">{caseStudy.technologies.length}</div>
                    <div className="text-gray-800 font-bold text-xl">Technologies</div>
                    <div className="text-gray-600 text-sm mt-2">Advanced AI solutions deployed</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          )}

          {activeTab === 'problem' && (
            <div className="space-y-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-10 h-10 text-red-600" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-6">The Challenge</h2>
                  <p className="text-xl text-gray-600">Understanding the core problems that needed solving</p>
                </div>

                <div className="bg-white rounded-3xl p-12 shadow-2xl border border-red-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{caseStudy.problem}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mb-4">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed font-medium">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="space-y-16">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-6">Our Solution</h2>
                  <p className="text-xl text-gray-600">How we approached and solved the challenges</p>
                </div>

                <div className="bg-white rounded-3xl p-12 shadow-2xl border border-green-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">{caseStudy.solution}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudy.approach.map((step: string, index: number) => (
                      <div key={index} className="flex items-start group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold mr-4 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">Phase {index + 1}</h4>
                          <p className="text-gray-700 leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">Implementation Process</h2>
                <p className="text-xl text-gray-600">Step-by-step breakdown of our methodology</p>
              </div>

              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-8 top-16 bottom-16 w-1 bg-gray-200 rounded-full">
                  <div 
                    className="w-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full transition-all duration-2000 ease-out"
                    style={{ height: `${progress}%` }}
                  ></div>
                </div>

                <div className="space-y-12">
                  {processSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="relative flex items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-8 z-10 shadow-lg">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-bold">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-16">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">Measurable Impact</h2>
                <p className="text-xl text-gray-600">Quantifiable results that speak for themselves</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {caseStudy.results.map((result: string, index: number) => (
                  <div key={index} className="group flex items-start p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Key Result #{index + 1}</h4>
                      <p className="text-gray-700 leading-relaxed">{result}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Results Dashboard */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-100">
                <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Performance Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-5xl font-black text-purple-600 mb-2">{caseStudy.metrics.improvement}</div>
                    <div className="text-gray-600 font-bold text-lg">Overall Improvement</div>
                    <div className="text-gray-500 text-sm mt-2">Exceeded expectations by 23%</div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-5xl font-black text-blue-600 mb-2">{caseStudy.metrics.timeFrame}</div>
                    <div className="text-gray-600 font-bold text-lg">Implementation Time</div>
                    <div className="text-gray-500 text-sm mt-2">2 weeks ahead of schedule</div>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-5xl font-black text-green-600 mb-2">98%</div>
                    <div className="text-gray-600 font-bold text-lg">Success Rate</div>
                    <div className="text-gray-500 text-sm mt-2">Industry leading performance</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonial' && (
            <div className="space-y-16">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 rounded-3xl p-16 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative text-center">
                    <Quote className="w-20 h-20 text-white/30 mx-auto mb-8" />
                    <blockquote className="text-3xl md:text-4xl font-black leading-relaxed mb-12">
                      "{caseStudy.testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mr-8">
                        <span className="text-white font-bold text-2xl">
                          {caseStudy.testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-black text-2xl text-white">{caseStudy.testimonial.author}</div>
                        <div className="text-purple-200 text-lg">{caseStudy.testimonial.position}</div>
                        <div className="text-white font-bold text-xl">{caseStudy.testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Client Feedback */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Project Satisfaction</h4>
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-1 mr-4">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-gray-900">5.0/5</span>
                    </div>
                    <p className="text-gray-600">"Exceptional delivery quality and professional service throughout the entire project."</p>
                  </div>
                  
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Would Recommend</h4>
                    <div className="text-4xl font-black text-green-600 mb-2">100%</div>
                    <p className="text-gray-600">"Would definitely work with Intellimark AI again and recommend to other companies."</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-black text-gray-900 mb-4 text-center">Related Success Stories</h2>
              <p className="text-xl text-gray-600 mb-16 text-center">Explore more transformations in {caseStudy.industryLabel}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedCases.map((study: any) => (
                  <Link
                    key={study.id}
                    to={`/case-study/${study.id}`}
                    className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl text-sm font-bold">
                        {study.industryLabel}
                      </span>
                      <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{study.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-black text-purple-600">{study.metrics.improvement}</div>
                        <div className="text-sm text-gray-500 font-medium">improvement achieved</div>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready for Similar
            <span className="block bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Results?
            </span>
          </h2>
          <p className="text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can transform your business with AI solutions tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-50 transition-colors shadow-2xl hover:scale-105">
              <Rocket className="w-6 h-6 mr-3 inline" />
              Start Your Project
            </button>
            <button className="text-white hover:text-purple-200 transition-colors flex items-center font-bold text-lg">
              <Users className="w-6 h-6 mr-3" />
              Schedule Consultation
              <ArrowRight className="w-6 h-6 ml-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;