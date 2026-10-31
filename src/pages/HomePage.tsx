import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, BookOpen, Sparkles, Zap, Play, X, Download } from 'lucide-react';
import Hero from '../components/Hero';
import Carousel from '../components/carousel';
import CompanyMarquee from '../components/marquee';
import IndustryShowcase from '../components/showcase';
import StatsSection from '../components/StatsSection';
import UpcomingEvents from '../components/UpcomingEvents';
import ResourcesHub from '../components/ResourceHub';

const HomePage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Close popup on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsPopupOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const title = "Intellimark AI | CPG Analytics Company India - AI Analytics for Consumer Goods Companies";
    const description =
        "Intellimark AI is an enterprise CPG analytics company in India providing explainable AI forecasting, revenue growth management (RGM software), beat planning software, and root cause analysis (RCA) for FMCG leaders.";
    const canonicalUrl = "https://www.intellimark.ai/";
    const keywords = "Intellimark AI, CPG analytics company India, AI analytics for consumer goods companies, beat planning software, beat optimization for FMCG, route optimization for sales teams, field sales force optimization, next best action for sales reps, salesman beat plan India, root cause analysis for sales decline, RCA analytics for FMCG, why did secondary sales drop, sales variance analysis, revenue growth management for CPG, RGM software, explainable AI forecasting, demand forecasting for FMCG, AI sales forecasting India, marketing mix modelling for CPG, marketing investment optimization, retail growth analytics, performance marketing optimization";

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Intellimark AI",
            "alternateName": ["Intellimark Analytics", "Intellimark AI India"],
            "url": "https://www.intellimark.ai",
            "logo": "https://www.intellimark.ai/favicon.png",
            "description": description,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tech Park, Outer Ring Road",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560103",
                "addressCountry": "IN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9140929770",
                "email": "rahul@intellimark.ai",
                "contactType": "sales"
            },
            "sameAs": [
                "https://www.linkedin.com/company/intellimark-analytics/"
            ],
            "knowsAbout": [
                "beat planning software",
                "beat optimization for FMCG",
                "route optimization for sales teams",
                "field sales force optimization",
                "next best action for sales reps",
                "salesman beat plan India",
                "root cause analysis for sales decline",
                "RCA analytics for FMCG",
                "why did secondary sales drop",
                "sales variance analysis",
                "revenue growth management for CPG",
                "RGM software",
                "explainable AI forecasting",
                "demand forecasting for FMCG",
                "AI sales forecasting India",
                "marketing mix modelling for CPG",
                "marketing investment optimization",
                "retail growth analytics",
                "performance marketing optimization"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Intellimark Enterprise AI Analytics Platforms",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "SoftwareApplication",
                            "name": "Revenue Growth Management (RGM) Platform",
                            "url": "https://www.intellimark.ai/RevenueGrowthManagement",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web, Cloud, SaaS",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/OnlineOnly"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": "32"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "SoftwareApplication",
                            "name": "Explainable AI Demand Forecasting & Teresa Engine",
                            "url": "https://www.intellimark.ai/Forecasting",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web, Cloud, SaaS",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/OnlineOnly"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": "28"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "SoftwareApplication",
                            "name": "Assortment Recommendation & Beat Planning Engine",
                            "url": "https://www.intellimark.ai/Recommendation",
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": "Web, Cloud, SaaS, Android, iOS",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD",
                                "availability": "https://schema.org/OnlineOnly"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.8",
                                "reviewCount": "24"
                            }
                        }
                    }
                ]
            }
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

            {/* Quick Link Banner Below Navbar - Slim Narrow Floating Pill */}
            <section className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 py-2 sm:py-2.5 px-3 sm:px-4 border-b border-purple-500/20">
              {/* Subtle background grid pattern */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 36v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 6V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} 
              />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl pointer-events-none" />

              <div className="max-w-4xl mx-auto">
                <div
                  className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-sm transition-all duration-300"
                >
                  {/* Left: New Badge + Presenter + Title (Links directly to the Strategy Page) */}
                  <Link
                    to="/uiux-revamp-strategy"
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      document.documentElement.scrollTop = 0;
                      document.body.scrollTop = 0;
                    }}
                    className="flex items-center gap-2 sm:gap-2.5 min-w-0 hover:opacity-90 transition-opacity"
                  >
                    <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      NEW
                    </span>

                    <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-purple-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10 flex-shrink-0">
                      <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                      Rahul Ranjan Srivastava • Intellimark AI
                    </span>

                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      <span className="text-purple-200 hidden sm:inline">UI/UX Revamp:</span> Field Order Punching Strategy
                    </p>
                  </Link>

                  {/* Right: Two Distinct Action Buttons (Video Modal vs Strategy Page) */}
                  <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2">
                    {/* Button 1: Video */}
                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(true)}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 bg-white/10 hover:bg-white/20 text-purple-100 hover:text-white text-xs font-semibold rounded-full border border-white/20 hover:border-purple-300/40 transition-all cursor-pointer shadow-xs active:scale-95"
                      title="Watch Video Walkthrough"
                    >
                      <Play className="w-3 h-3 fill-amber-300 text-amber-300" />
                      <span><span className="hidden sm:inline">Watch </span>Video</span>
                    </button>

                    {/* Button 2: Quick View (Page) */}
                    <Link
                      to="/uiux-revamp-strategy"
                      onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                        document.documentElement.scrollTop = 0;
                        document.body.scrollTop = 0;
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-purple-50 text-purple-900 text-xs font-bold rounded-full shadow-xs hover:scale-105 transition-all cursor-pointer active:scale-95"
                      title="Open Strategy Page"
                    >
                      <span>Quick View</span>
                      <ArrowRight className="w-3 h-3 text-purple-700 ml-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick View Popup Modal Right There */}
            <AnimatePresence>
              {isPopupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsPopupOpen(false)}
                    className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                  />

                  {/* Modal Container */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-3xl bg-gray-900 text-white rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-950 border-b border-purple-500/30">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Play className="w-4 h-4 text-purple-200 fill-current" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-white truncate">
                            Video Walkthrough: Field-Sales UI/UX Revamp Strategy
                          </h3>
                          <p className="text-xs text-purple-200 truncate">
                            Presenter: Rahul Ranjan Srivastava • Intellimark AI
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setIsPopupOpen(false)}
                        className="p-1.5 rounded-lg text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Close popup"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
                      {/* Video Embed */}
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-gray-800 shadow-inner">
                        <iframe
                          src="https://www.youtube-nocookie.com/embed/mF5nJ7PpQ64?autoplay=1&rel=0"
                          title="Field Sales UI/UX Revamp Strategy Walkthrough"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      {/* Recommendation System Video */}
                      <div className="pt-3 border-t border-gray-800 space-y-2">
                        <p className="text-xs sm:text-sm font-semibold text-purple-200">
                          Please see this, our recommendation system:
                        </p>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-gray-800 shadow-inner">
                          <iframe
                            src="https://www.youtube-nocookie.com/embed/vnEssZQBoOw?rel=0"
                            title="Our Recommendation System"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>

                      {/* Micro-metrics summary */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                          <div className="text-[10px] uppercase font-bold text-amber-300">Order Punching</div>
                          <div className="text-lg font-black text-white">&lt; 1 Min</div>
                          <div className="text-[10px] text-gray-400">Order Velocity</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                          <div className="text-[10px] uppercase font-bold text-emerald-300">Basket SOQ</div>
                          <div className="text-lg font-black text-white">1-Tap</div>
                          <div className="text-[10px] text-gray-400">Prescriptive AI</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                          <div className="text-[10px] uppercase font-bold text-indigo-300">Focus Lines</div>
                          <div className="text-lg font-black text-white">+24%</div>
                          <div className="text-[10px] text-gray-400">Priority Sort</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-center">
                          <div className="text-[10px] uppercase font-bold text-purple-300">Net Scheme</div>
                          <div className="text-lg font-black text-white">100%</div>
                          <div className="text-[10px] text-gray-400">Zero Slab Math</div>
                        </div>
                      </div>

                      {/* Brief Takeaway */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        Consumer e-commerce patterns fail in high-cadence field retail where reps have only 3 to 4 minutes per kirana store. This 13-slide strategy presents a single-screen canvas with one-tap SOQ and transparent net landed rates.
                      </p>
                    </div>

                    {/* Modal Footer Actions */}
                    <div className="px-5 py-3.5 bg-gray-950/80 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3">
                      <a
                        href="/UIUX_Revamp_Strategy.pdf"
                        download="UIUX_Revamp_Strategy.pdf"
                        className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download PDF (13 Slides)
                      </a>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsPopupOpen(false)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          Close
                        </button>
                        <Link
                          to="/uiux-revamp-strategy"
                          onClick={() => {
                            setIsPopupOpen(false);
                            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                            document.documentElement.scrollTop = 0;
                            document.body.scrollTop = 0;
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg shadow-md transition-all"
                        >
                          <span>Open Full Strategy Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

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
