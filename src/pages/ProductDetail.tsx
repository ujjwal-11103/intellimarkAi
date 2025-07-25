// src/components/ProductDetails.js
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { productDetails } from '../data/productData';

import { 
  TrendingUp, 
  Target, 
  BarChart3,  
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  Shield,
  Zap,
  TrendingDown,
  Star,
  Play,
  Database,
  Brain,
  LineChart,
  PieChart,
  Activity,
  Layers,
} from 'lucide-react';

const ProductDetail = () => {
    const { productId } = useParams();
  const navigate = useNavigate();
  
  // Get product data or default to a fallback for unknown products
  type ProductKey = keyof typeof productDetails;
  const isValidProductId = (id: string): id is ProductKey => id in productDetails;
  const productData = productId && isValidProductId(productId)
    ? productDetails[productId]
    : null;
  
  // Redirect to 404 or products page if product not found
  useEffect(() => {
    if (!productData) {
      navigate('/products');
    }
    
    // Scroll to top when product page loads
    window.scrollTo(0, 0);
  }, [productData, navigate]);

  if (!productData) {
    return null; // Or a loading state
  }
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-white">
      {/* Hero Section - Inspired by Aine's layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-purple-100/80 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
               
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {productData.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    {productData.heroSubtitle}
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  {productData.heroDescription}
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-semibold text-gray-900">AI Forecast Dashboard</h3>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">+12.5%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="text-xl font-bold">94%</div>
                    <div className="text-purple-100 text-xs">Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div className="text-xl font-bold">25%</div>
                    <div className="text-blue-100 text-xs">Savings</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Steel Prices</span>
                    <span className="text-purple-700 font-semibold text-sm">$850/ton ↓ 5%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Aluminum</span>
                    <span className="text-blue-700 font-semibold text-sm">$2,100/ton ↑ 3%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-gray-700 text-sm font-medium">Copper</span>
                    <span className="text-green-700 font-semibold text-sm">$8,500/ton ↓ 8%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating AI Icons - Inspired by Aine */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div className="absolute top-8 -left-6 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery - Inspired by Aine's image gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productData.stats.map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white relative overflow-hidden aspect-square`}>
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-purple-100 text-sm">{stat.label }</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Inspired by Aine's centered layout */}

      {/* Business Problem Section - Inspired by Digital Agency layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  We're Strategic Digital
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    Procurement Agency
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A truly effective solution to generate powerful AI price and procurement insights. What will you create? We help businesses navigate market volatility and optimize their procurement operations through intelligent forecasting.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">94%</div>
                  <div className="text-gray-600 text-sm font-medium">Forecast Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">65%</div>
                  <div className="text-gray-600 text-sm font-medium">Cost Optimization</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    +5
                  </div>
                </div>
                <div className="text-gray-600 text-sm">
                  <span className="font-semibold">500+</span> Happy Clients
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-6">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Professional woman with laptop" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating cards - Inspired by AppTek */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Market Trend</div>
                    <div className="text-xs text-gray-500">+12.5% accuracy</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Cost Savings</div>
                    <div className="text-xs text-gray-500">$2.5M saved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Working Process - Inspired by Digital Agency */}
      <section className="py-20 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-600 font-semibold text-xs tracking-wide uppercase mb-3">
              OUR PROCESS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our Working Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-purple-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Database className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data Integration</h3>
              <p className="text-gray-600 text-sm">
                Collect and integrate procurement data from multiple sources for comprehensive analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-blue-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">
                Apply machine learning algorithms to identify patterns and predict market trends
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-green-100">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Insight Generation</h3>
              <p className="text-gray-600 text-sm">
                Generate actionable insights and recommendations for optimal procurement decisions
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border border-orange-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Deploy solutions and monitor performance with continuous optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section - Inspired by AppTek's feature layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Procurement Challenges We Solve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern procurement faces complex challenges that require intelligent solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Business challenges" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                
                {/* Floating challenge indicators */}
                <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-medium text-gray-900">Price Volatility</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium text-gray-900">Cost Overruns</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Manage All Data Through This
                <br />
                Dashboard Based App
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Stop guessing about market trends and start making data-driven procurement decisions. 
                Our platform integrates with your existing systems to provide real-time insights and predictive analytics.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Well Organized Interface</h4>
                    <p className="text-gray-600 text-sm">Clean and intuitive dashboard design that makes complex data accessible and actionable for procurement teams.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Completely Bug Free</h4>
                    <p className="text-gray-600 text-sm">Rigorously tested platform ensuring reliable performance for critical procurement decisions and operations.</p>
                  </div>
                </div>
              </div>

              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all font-medium text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Features - Inspired by AppTek's feature presentation */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Features Smartly Presented Graphical Form Quickly
            </h2>
          </div>

          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Custom Edit Tool Application</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our powerful editing tools allow you to customize forecasting models, adjust parameters, 
                  and fine-tune predictions based on your specific industry requirements and market conditions.
                </p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-all font-medium text-sm">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 relative overflow-hidden">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Forecast Model</h4>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Accuracy</span>
                        <span className="text-sm font-semibold">94%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '94%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Built-in Safety Chat Mode</h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure communication channels for procurement teams with built-in compliance monitoring, 
                  audit trails, and encrypted messaging for sensitive supplier negotiations.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all font-medium text-sm">
                  Learn More
                </button>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 relative overflow-hidden">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Supplier Network</div>
                        <div className="text-xs text-gray-500">Active Communication</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-blue-50 rounded-lg p-2">
                        <div className="text-xs text-gray-700">Price update received</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs text-gray-700">Forecast adjusted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Faster Trust Builds</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build stronger supplier relationships through transparent forecasting, reliable predictions, 
                  and consistent communication that creates mutual trust and long-term partnerships.
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all font-medium text-sm">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 relative overflow-hidden">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Supplier Satisfaction</div>
                    </div>
                    <div className="mt-4 flex justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Create Auto Layout</h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically generate optimized procurement layouts and workflows based on your data patterns, 
                  supplier relationships, and market conditions for maximum efficiency.
                </p>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all font-medium text-sm">
                  Learn More
                </button>
              </div>
              <div className="lg:order-1 relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 relative overflow-hidden">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-purple-100 rounded-lg p-2 text-center">
                        <Layers className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                        <div className="text-xs text-gray-700">Auto</div>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-2 text-center">
                        <Activity className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                        <div className="text-xs text-gray-700">Layout</div>
                      </div>
                      <div className="bg-green-100 rounded-lg p-2 text-center">
                        <Target className="w-4 h-4 text-green-600 mx-auto mb-1" />
                        <div className="text-xs text-gray-700">Optimize</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Results - Inspired by Digital Agency testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-purple-600 font-semibold text-xs tracking-wide uppercase mb-3">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              People Say About Us
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Happy client testimonial" 
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                  "IntelliMark AI has revolutionized our procurement process. The accuracy of their price forecasting is incredible, and we've saved over $2M in the first year alone."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    SM
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Sarah Mitchell</div>
                    <div className="text-gray-600 text-xs">Chief Procurement Officer, TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                  "The predictive capabilities are game-changing. We can now anticipate market fluctuations weeks ahead of our competitors."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    MJ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Michael Johnson</div>
                    <div className="text-gray-600 text-xs">VP Supply Chain, GlobalManufacturing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Inspired by Aine's gradient style */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Marketing with {productData.title}?
          </h2>
          <p className="text-lg text-purple-100 mb-8 leading-relaxed">
            Join leading organizations using our AI solutions to optimize their marketing operations and drive unprecedented growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 font-medium text-sm flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border-2 border-purple-300 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors font-medium text-sm flex items-center justify-center">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full"></div>
      </section>

      {/* Footer */}
    </div>
    </>
  );
};

export default ProductDetail;