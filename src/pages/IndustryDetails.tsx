import { ChevronRight, TrendingUp, BarChart3, Users, ShoppingCart, Package, Truck, Brain, ArrowRight, Target, Zap, Shield, Globe, Star, CheckCircle, Play } from 'lucide-react';

const IndustryDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-purple-50/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/40 via-white to-purple-100/20"></div>
          <div className="absolute top-1/4 right-0 w-1/2 h-3/4 bg-gradient-to-l from-purple-600/5 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">


              <div className="space-y-8">
                <h1 className="text-7xl font-extralight text-gray-900 leading-[0.9] tracking-tight">
                  Go beyond
                  <span className="block text-6xl font-light text-purple-600 mt-2">SKU forecasts,</span>
                  <span className="block text-5xl font-light mt-4">dive deeper with</span>
                  <span className="block text-6xl font-medium text-purple-700 mt-2 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">demand shaping</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl mt-8">
                  Weather supply chain storms with dynamic inventory allocation and demand anticipation for resilient consumer durables operations
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 pt-8">
                <button className="group relative bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-5 rounded-full font-light text-lg tracking-wide overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Your Journey
                    <ArrowRight className="ml-4 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
                
                <button className="group border-2 border-purple-200 text-purple-700 px-12 py-5 rounded-full font-light text-lg tracking-wide hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300">
                  <span className="flex items-center">
                    <Play className="mr-3 h-5 w-5" />
                    Watch Demo
                  </span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-purple-400/5 to-transparent rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-purple-500/10 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="FMCG Operations" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white p-4 rounded-2xl shadow-lg">
                  <Star className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-32 bg-gradient-to-b from-white to-purple-50/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-6xl font-extralight text-gray-900 leading-tight tracking-tight">
                Accommodate
                <span className="block text-purple-600 font-light">multi-touch attribution</span>
                <span className="block font-light">to effectively track</span>
                <span className="block text-purple-700 font-medium">promotions impact</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-xl">
                Build lasting loyalty by moving beyond the 'buy' button with progressive & contextual promotions by weaving AI with consumer durables analytics
              </p>
              
              <button className="group border-2 border-purple-200 text-purple-700 px-10 py-4 rounded-full font-light text-lg tracking-wide hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300">
                <span className="flex items-center">
                  Check out more case studies
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </button>
            </div>

            <div className="relative">
              {/* Floating highlight box */}
              <div className="top-10 left-50 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-3xl shadow-2xl z-10 max-w-sm transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/25">
                <p className="font-light text-lg leading-relaxed">
                  Dive into customer behavior, analyzing pricing & promotions, visualizing trends, & more.
                </p>
              </div>

              {/* Statistics grid */}
              <div className="grid grid-cols-2 gap-6 mt-20">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-extralight text-gray-900">20%</div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-light leading-relaxed">Additional improvement on top-level forecast</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-extralight text-gray-900">99.93%</div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Zap className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-light leading-relaxed">Reduction in time taken for report generation</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100/50 col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-extralight text-gray-900">23+</div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Package className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 font-light leading-relaxed">Warehouse Data management system established in just 10 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-6xl font-extralight mb-12 leading-tight tracking-tight max-w-5xl">
              Listen to the warranty whispers, visualize service signals, and analyze peak replacement patterns
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
            {[
              { icon: Package, title: "Inventory & Supply Chain Optimization", active: false },
              { icon: Zap, title: "Predictive Maintenance & Quality Control", active: true },
              { icon: Users, title: "Sales & Customer Service Analysis", active: false },
              { icon: BarChart3, title: "Financial Analysis & planning", active: false },
              { icon: Target, title: "Pricing & Revenue Optimization", active: false },
              { icon: Globe, title: "ICM & Workforce Optimization", active: false }
            ].map((service, index) => (
              <div key={index} className={`${service.active ? 'bg-white text-purple-900' : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'} rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl`}>
                <service.icon className={`h-8 w-8 ${service.active ? 'text-purple-600' : 'text-white'} mb-4`} />
                <h3 className="font-light text-sm leading-relaxed">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <p className="text-xl font-light leading-relaxed opacity-90">
                Predict the machinery downtime to avoid any disruptions and accumulate saved time and effort with planned downtime
              </p>
              
              <ul className="space-y-6">
                {[
                  "Boost OEE and machine utilization with Isolation Forests considering availability, performance, and quality.",
                  "Pinpoint patterns linked to product defects with K-Nearest Neighbours (KNN)",
                  "Optimize your master production scheduling with our Fog computing models"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-white/80 mt-1 mr-4 flex-shrink-0" />
                    <span className="font-light opacity-90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
                <p className="text-xl font-light mb-8 opacity-90">
                  Unraveling the intricate threads that weave AI, Machine Learning, and Data Science together
                </p>
                <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-light text-lg tracking-wide hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <span className="flex items-center">
                    Ignite your AI journey
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-2 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Industrial Analytics" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="relative py-32 bg-gradient-to-b from-white to-purple-50/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-6xl font-extralight text-gray-900 leading-tight tracking-tight">
                How we address specific 
                <span className="text-purple-600 font-light block">FMCG Industry</span>
                <span className="font-medium text-purple-700">challenges</span>
              </h2>
              
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                Addressing challenges in the FMCG industry requires a multifaceted approach that combines technological innovation, strategic planning, and adaptability.
              </p>
              
              <div className="space-y-8">
                <p className="font-medium text-gray-900 text-lg">We helped resolve some of the challenges like:</p>
                
                <div className="space-y-6">
                  {[
                    "Improved financial decisions for strategic payoff",
                    "Increased Employee Satisfaction Level", 
                    "Enhanced customer service and revenue",
                    "100% elimination of manual efforts & errors"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full mr-6 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="font-light text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="group bg-gradient-to-r from-gray-900 to-gray-800 text-white px-10 py-5 rounded-full font-light text-lg tracking-wide hover:from-purple-600 hover:to-purple-700 transition-all duration-500 transform hover:-translate-y-1">
                Book Now
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-2xl shadow-purple-500/10">
                <img 
                  src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="FMCG Analytics" 
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute bottom-8 right-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-purple-500/25">
                <div className="flex items-center mb-3">
                  <div className="text-4xl font-extralight">80%</div>
                  <ArrowRight className="h-8 w-8 ml-4 rotate-[-45deg]" />
                </div>
                <div className="text-sm font-light opacity-90">
                  Reduction in lost opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="relative py-32 bg-gradient-to-b from-purple-50/20 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-6xl font-extralight text-purple-600 mb-6 tracking-tight">
              Latest articles on FMCG Analytics & AI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "CEOs are investing billions in this",
                subtitle: "RGM Technology",
                description: "Are you being left behind?"
              },
              {
                image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Agentic AI in CPG:",
                subtitle: "Real-World Use Cases",
                description: "and What's Next"
              },
              {
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Elevate your use cases with top 15",
                subtitle: "Procurement key performance",
                description: "indicators"
              }
            ].map((article, index) => (
              <article key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-purple-100/50">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="font-light text-xl mb-2 leading-tight">
                      {article.title}
                      <span className="font-medium block">{article.subtitle}</span>
                      {article.description && <span className="font-light text-sm opacity-90 block mt-1">{article.description}</span>}
                    </h3>
                  </div>
                </div>
                <div className="p-8">
                  <button className="group/btn bg-gradient-to-r from-purple-600 to-purple-700 text-white w-14 h-14 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform group-hover:scale-110">
                    <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-purple-800/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-6xl font-extralight mb-12 leading-tight tracking-tight">
            Ready to transform your FMCG operations?
          </h2>
          <p className="text-2xl font-light mb-16 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join leading FMCG brands who are already leveraging AI to drive growth, optimize operations, and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="group bg-white text-purple-600 px-12 py-5 rounded-full font-light text-lg tracking-wide hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              <span className="flex items-center justify-center">
                Book a Demo
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </button>
            <button className="group border-2 border-white/30 text-white px-12 py-5 rounded-full font-light text-lg tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IndustryDetailPage;