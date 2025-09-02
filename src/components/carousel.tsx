import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Brain, Zap, TrendingUp, Users, Award, MapPin, ArrowRight } from 'lucide-react';

// Interfaces remain the same
interface Card {
  id: number;
  type: 'hero' | 'feature' | 'success' | 'location';
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  badge?: string;
  stats?: string;
  icon?: React.ReactNode;
}

interface Slide {
  id: number;
  cards: Card[];
}

// Data remains the same
const slides: Slide[] = [
  // {
  //   id: 1,
  //   cards: [
  //     { id: 1, type: 'hero', title: 'Marketing Investment Planner', subtitle: 'Dallas Innovates 2025', description: 'Top AI Innovator in Dallas-Fort Worth', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> },
  //     { id: 2, type: 'feature', title: 'Explainable Forecasting Engine', subtitle: 'Advanced ML Platform', description: 'Deep learning infrastructure for enterprise AI', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800', icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" /> },
  //     { id: 3, type: 'success', title: 'Performance Marketing Optimization', badge: 'Success Story', stats: '78% Improved Accuracy', description: 'ML pipeline transforming enterprise decisions', image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800', icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
  //     { id: 4, type: 'location', title: 'Retail Growth Engine', subtitle: 'Innovation Center', description: 'Where AI research meets application', image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800', icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" /> }
  //   ]
  // },
  {
    id: 2,
    cards: [
      { id: 5, type: 'feature', title: 'Revenue Growth Management', subtitle: 'Real-time Recognition', description: 'Ready to deploy AI to unlock growth, profitability and sales efficiency', image: 'https://images.pexels.com/photos/7947758/pexels-photo-7947758.jpeg?auto=compress&cs=tinysrgb&w=800', icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
      { id: 6, type: 'location', title: 'Forecasting Page', subtitle: 'Insightful Planning', description: 'Analyze trends, predict outcomes, and drive smarter decisions with clarity.', image: 'https://images.pexels.com/photos/7054417/pexels-photo-7054417.jpeg?auto=compress&cs=tinysrgb&w=800', icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" /> },
      { id: 7, type: 'success', title: 'Recommendation Page', stats: 'Fortune 500 Ready', description: 'Automated AI deployment pipelines', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', icon: <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" /> },
      { id: 8, type: 'hero', title: 'Explore our Case Studies', description: 'Dive in to see how we turn ideas into real-world solutions.', image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200'}
    ]
  }
];


export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        handleSlideChange((prev) => (prev + 1) % slides.length);
      }, 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const handleSlideChange = (newSlideOrFn: number | ((prev: number) => number)) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newSlide = typeof newSlideOrFn === 'function' ? newSlideOrFn(currentSlide) : newSlideOrFn;
    setCurrentSlide(newSlide);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
      setIsAutoPlaying(false);
    }
  };

  const renderCard = (card: Card) => {
    const baseClasses = "relative rounded-2xl overflow-hidden text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer w-full";
    const overlayMap = {
      hero: 'bg-gradient-to-br from-black/80 via-black/60 to-black/40',
      feature: 'bg-gradient-to-br from-blue-900/85 via-blue-800/65 to-blue-700/45',
      success: 'bg-gradient-to-br from-emerald-900/85 via-emerald-800/65 to-emerald-700/45',
      location: 'bg-gradient-to-br from-purple-900/85 via-purple-800/65 to-purple-700/45'
    };

    const getLayoutClasses = () => {
        // All cards will now take up lg:col-span-2 to fit 4 cards in a 4-column grid (2 per row)
        return 'lg:col-span-2 min-h-[220px] sm:min-h-[200px]'; // Standardize height for consistent layout
    }

    return (
      <div className={`${baseClasses} ${getLayoutClasses()}`}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${card.image})` }} />
        <div className={`absolute inset-0 ${overlayMap[card.type]}`} />
        <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between">
          {/* Card content adjusted for better scaling */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2.5 transition-all duration-300 group-hover:bg-white/30">
              {card.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium opacity-90">{card.subtitle}</span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">{card.title}</h3>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{card.description}</p>
          </div>
          {card.badge && (
            <div className="absolute top-6 right-6 bg-white/25 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-semibold">
              {card.badge}
            </div>
          )}
          {card.stats && (
              <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 self-start">
                <p className="text-sm sm:text-lg font-bold">{card.stats}</p>
              </div>
          )}
        </div>
      </div>
    );
  };
  

  return (
    <section className="bg-white py-16 sm:py-5">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            IntelliMark AI Showcase
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Re-engineering revenue growth using cutting-edge patented machine learning coupled with the best of industry nuances.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-8 sm:mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 p-1">
                  {/* Grid for Mobile (stacked) and Desktop */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 gap-4 sm:gap-6 lg:h-[500px]">
                    {slide.cards.map((card) => renderCard(card))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-600 hover:bg-gray-50 transition-all duration-300 group disabled:opacity-50 absolute left-4 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-600 hover:bg-gray-50 transition-all duration-300 group disabled:opacity-50 absolute right-4 top-1/2 -translate-y-1/2 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
          </button>
        </div>
        
        {/* Indicators */}
        {/* <div className="flex gap-3 sm:gap-4 justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? 'bg-gray-800 scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}