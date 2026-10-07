import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, ExternalLink } from 'lucide-react';
import Hero from '../components/Hero';
import Carousel from '../components/carousel';
import CompanyMarquee from '../components/marquee';
import IndustryShowcase from '../components/showcase';
import StatsSection from '../components/StatsSection';
import UpcomingEvents from '../components/UpcomingEvents';
import ResourcesHub from '../components/ResourceHub';

const HomePage = () => {
    const title = "Intellimark AI | Revenue Growth Management & AI Demand Forecasting";
    const description =
        "Intellimark AI empowers enterprise FMCG and retail leaders with explainable AI for revenue growth management (RGM), demand forecasting, and predictive recommendation systems.";
    const canonicalUrl = "https://www.intellimark.ai/";
    const keywords = "revenue growth management, AI demand forecasting, trade promotion optimization, RGM AI, explainable AI, FMCG analytics, supply chain forecasting, retail AI";

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Intellimark AI",
            "url": "https://www.intellimark.ai",
            "logo": "https://www.intellimark.ai/src/images/favicon.png",
            "description": description,
            "sameAs": [
                "https://www.linkedin.com/company/intellimark-ai"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Intellimark AI",
            "url": "https://www.intellimark.ai"
        }
    ];

    return (
        <main>
            <SEO
                title={title}
                description={description}
                canonicalUrl={canonicalUrl}
                keywords={keywords}
                ogType="website"
                schema={schemaData}
            />

            {/* Quick Link Banner Below Navbar */}
            <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 border-b border-purple-500/30">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
                <Link 
                  to="/uiux-revamp-strategy"
                  className="group flex items-center gap-3 px-3 py-2 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {/* Icon Badge */}
                  <div className="relative flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/10 rounded-full text-xs font-semibold text-white/90">
                        <span className="relative flex h-1 w-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
                        </span>
                        New Resource
                      </span>
                      <span className="text-white/40 text-xs">|</span>
                      <span className="text-white/60 text-xs font-medium">PDF + Video</span>
                    </div>
                    <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-purple-100 transition-colors">
                      UI/UX Revamp Strategy
                    </h3>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex-shrink-0">
                    <button className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 text-sm">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </Link>
              </div>
            </section>

            <Hero />

            {/* Featured Case Study Highlight */}
            <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-800/20" />
              
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Featured Case Study
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    15% Increase in Trade Promo ROI for One of India&rsquo;s Largest FMCGs
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                    How Intellimark&rsquo;s Prescriptive TPO re-created trade promotion schemes across 4000 market x SKU x slabs in 4 weeks, optimizing budgets to maximize sales.
                  </p>
                  <Link 
                    to="/case-study/trade-promo-roi-fmcg"
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </section>

            <Carousel />
            <CompanyMarquee />
            <IndustryShowcase />
            <StatsSection />
            <UpcomingEvents />
            <ResourcesHub />
        </main>
    );
};

export default HomePage;
