import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Brain, ChevronDown, Menu, X, ArrowRight,
  Sparkles, Zap, Target, Users, BarChart3,
  Globe, Lightbulb, TrendingUp, Shield
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileDropdown = (item: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  const closeMobileMenu = () =>{
    setIsMobileMenuOpen(false);
  }

  const dropdownContent = {
    Products: {
      featured: {
        title: "AI Marketing Suite",
        description: "Complete AI-powered marketing automation platform",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
        badge: "Most Popular"
      },
      items: [
        { icon: Target, title: "Explainable Forecasting Engine", description: "AI-driven customer behavior prediction", path: "/product-detail/explainable-forecasting-engine" },
        { icon: Zap, title: "Marketing Investment Planner", description: "Smart campaign optimization & execution", path: "/product-detail/marketing-investment-planner" },
        { icon: BarChart3, title: "Retail Growth Engine", description: "Live performance tracking & analytics", path: "/product-detail/retail-growth-engine" },
        { icon: Sparkles, title: "Performance Marketing Optimization", description: "AI-powered content creation at scale", path: "/product-detail/performance-marketing-optimization" }
      ]
    },
    Industries: {
      featured: {
        title: "Enterprise AI Consulting",
        description: "Strategic AI implementation for enterprise growth",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
        badge: "Premium"
      },
      items: [
        { icon: Users, title: "FMGC", description: "Custom AI roadmap development", path: "/industry-details/fmgc" },
        { icon: Shield, title: "Alcohol", description: "End-to-end AI deployment assistance", path: "/industry-details/alcohol" },
        { icon: TrendingUp, title: "Oil and Lubricants", description: "Continuous AI model improvement", path: "/industry-details/oil-and-lubricants" },
        { icon: Lightbulb, title: "Chemicals", description: "Cutting-edge AI research & development", path: "/industry-details/chemicals" }
      ]
    },
    CaseStudy: {
      featured: {
        title: "Retail & E-commerce",
        description: "AI solutions driving retail transformation",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
        badge: "Trending"
      },
      items: [
        { icon: Globe, title: "Financial Services", description: "AI-powered fintech solutions", path: "/industries/financial-services" },
        { icon: Target, title: "Healthcare", description: "Medical AI & patient analytics", path: "/industries/healthcare" },
        { icon: Zap, title: "Manufacturing", description: "Industrial AI & automation", path: "/industries/manufacturing" },
        { icon: Users, title: "SaaS & Tech", description: "AI integration for tech companies", path: "/industries/saas-tech" }
      ]
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-200' : 'bg-white/70 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 scale-110" />
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl">
                <Brain className="h-7 w-7 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                IntelliMark
              </span>
              <span className="text-xs font-medium text-blue-600 -mt-1">AI</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {Object.entries(dropdownContent).map(([item, content]) => (
              <div key={item} className="relative group" onMouseEnter={() => setActiveDropdown(item)} onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center px-5 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-xl hover:bg-gray-50/80 group">
                  <span className="relative">
                    {item}
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  </span>
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* Mega Dropdown */}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ${activeDropdown === item ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4 pointer-events-none'}`}>
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border p-8 w-[800px]">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Featured */}
                      <div className="col-span-1">
                        <Link to={`/${item.toLowerCase() === 'casestudy' ? 'case-studies' : item.toLowerCase()}`} className="relative group block">
                          <div className="relative overflow-hidden rounded-xl">
                            <img src={content.featured.image} alt={content.featured.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">{content.featured.badge}</span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white font-bold text-lg mb-1">{content.featured.title}</h3>
                              <p className="text-white/80 text-sm">{content.featured.description}</p>
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* Items */}
                      <div className="col-span-2 grid grid-cols-2 gap-4">
                        {(content.items as any[]).map((subItem, idx) => (
                          <Link
                            to={subItem.path}
                            key={idx}
                            className="group p-4 rounded-xl hover:bg-gray-50/80 transition-all duration-300 block"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <subItem.icon className="w-6 h-6 text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-1">{subItem.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{subItem.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Ready to Book Now?</h4>
                          <p className="text-sm text-gray-600">Explore our {item.toLowerCase()} in detail</p>
                        </div>
                        <Link to={item.toLowerCase() === 'casestudy' ? '/case-studies' : `/${item.toLowerCase()}`} className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg group transition-all duration-300">
                          <span>View All {item}</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link to="/blogs" className="px-5 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gray-50/80">Blogs</Link>
            <Link to="/about" className="px-5 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gray-50/80">About</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-5 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all rounded-xl hover:bg-gray-50/80">Sign In</button>
            <button className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span className="relative z-10 flex items-center">Book Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" /></span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50/80">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="lg:hidden transition-all duration-500 pt-4 space-y-4">
          {Object.entries(dropdownContent).map(([item, content]) => (
            <div key={item}>
              <button onClick={() => toggleMobileDropdown(item)} className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/80 rounded-xl transition-all duration-300">
                <span className="font-medium">{item}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdowns[item] ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns[item] && (
                <div className="pl-6 pt-2 space-y-2">
                  {content.items.map((subItem, idx) => (
                    <Link 
                      key={idx} 
                      to={subItem.path} 
                      className="block text-gray-600 hover:text-blue-600 text-sm"
                      onClick={closeMobileMenu}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-gray-100 pt-4 space-y-3">
            <Link 
              to="/blogs" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/80 rounded-xl"
              onClick={closeMobileMenu}
            >
              Blogs
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/80 rounded-xl"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <button className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50/80 rounded-xl">Sign In</button>
            <button className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">Book Now</button>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
