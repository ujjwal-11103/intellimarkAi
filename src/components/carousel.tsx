import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Brain, Zap, TrendingUp, Users, Award, Calendar, ArrowRight, MapPin, Play } from 'lucide-react';

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

const slides: Slide[] = [
  {
    id: 1,
    cards: [
      {
        id: 1,
        type: 'hero',
        title: 'Marketing Investment Planner',
        subtitle: 'Dallas Innovates 2025',
        description: 'Top AI Innovator in Dallas-Fort Worth',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Award className="w-6 h-6" />
      },
      {
        id: 2,
        type: 'feature',
        title: 'Explainable Forecasting Engine',
        subtitle: 'Advanced ML Platform',
        description: 'Deep learning infrastructure for enterprise AI',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: <Brain className="w-6 h-6" />
      },
      {
        id: 3,
        type: 'success',
        title: 'Performance Marketing Optimization',
        badge: 'Success Story',
        stats: '78% Improved Accuracy',
        description: 'ML pipeline transforming enterprise decisions',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        id: 4,
        type: 'location',
        title: 'Retail Growth Engine',
        subtitle: 'Innovation Center',
        description: 'Where AI research meets application',
        image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: <MapPin className="w-6 h-6" />
      }
    ]
  },
  {
    id: 2,
    cards: [
      {
        id: 5,
        type: 'feature',
        title: 'Explainable Forecasting Engine',
        subtitle: 'Real-time Recognition',
        description: 'Enterprise-scale object detection and analysis',
        image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: <Zap className="w-6 h-6" />
      },
      {
        id: 6,
        type: 'location',
        title: 'Marketing Investment Planner',
        subtitle: 'West Coast Operations',
        description: 'Silicon Valley innovation meets Texas execution',
        image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: <MapPin className="w-6 h-6" />
      },
      {
        id: 7,
        type: 'success',
        title: 'Retail Growth Engines',
        badge: 'Webinar',
        stats: 'Fortune 500 Ready',
        description: 'Automated AI deployment pipelines',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
        icon: <ArrowRight className="w-6 h-6" />
      },
      {
        id: 8,
        type: 'hero',
        title: 'Performance Marketing Optimization',
        subtitle: 'April 15, 2025',
        description: 'Industry pioneers networking event',
        image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
        icon: <Users className="w-6 h-6" />
      }
    ]
  }
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        handleSlideChange((prev) => (prev + 1) % slides.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleSlideChange = (newSlideOrFunction: number | ((prev: number) => number)) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newSlide = typeof newSlideOrFunction === 'function' ? newSlideOrFunction(currentSlide) : newSlideOrFunction;
    setCurrentSlide(newSlide);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
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

  const renderCard = (card: Card, index: number) => {
    const baseClasses = "relative rounded-2xl overflow-hidden text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer";
    const animationDelay = `${index * 80}ms`;
    
    const overlayMap = {
      hero: 'bg-gradient-to-br from-black/80 via-black/60 to-black/40',
      feature: 'bg-gradient-to-br from-blue-900/85 via-blue-800/65 to-blue-700/45',
      success: 'bg-gradient-to-br from-emerald-900/85 via-emerald-800/65 to-emerald-700/45',
      location: 'bg-gradient-to-br from-purple-900/85 via-purple-800/65 to-purple-700/45'
    };
    
    switch (card.type) {
      case 'hero':
        return (
          <div 
            className={`${baseClasses} col-span-2 row-span-2`}
            style={{ animationDelay }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className={`absolute inset-0 ${overlayMap[card.type]}`} />
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2.5 transition-all duration-300 group-hover:bg-white/30">
                  {card.icon}
                </div>
                <span className="text-sm font-medium opacity-90">{card.subtitle}</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3 leading-tight">{card.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{card.description}</p>
              </div>
            </div>
          </div>
        );
      
      case 'feature':
        return (
          <div 
            className={`${baseClasses} col-span-2`}
            style={{ animationDelay }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className={`absolute inset-0 ${overlayMap[card.type]}`} />
            <div className="relative h-full p-6 flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0 transition-all duration-300 group-hover:bg-white/30">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                <p className="text-sm opacity-90 mb-2">{card.subtitle}</p>
                <p className="text-xs opacity-75 leading-relaxed">{card.description}</p>
              </div>
            </div>
          </div>
        );
      
      case 'success':
        return (
          <div 
            className={`${baseClasses} col-span-2 row-span-2`}
            style={{ animationDelay }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className={`absolute inset-0 ${overlayMap[card.type]}`} />
            <div className="relative h-full p-8 flex flex-col">
              {card.badge && (
                <div className="bg-white/25 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-semibold mb-6 self-start">
                  {card.badge}
                </div>
              )}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm opacity-80 mb-6 leading-relaxed">{card.description}</p>
                {card.stats && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-lg font-bold">{card.stats}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      case 'location':
        return (
          <div 
            className={`${baseClasses} col-span-2`}
            style={{ animationDelay }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <div className={`absolute inset-0 ${overlayMap[card.type]}`} />
            <div className="relative h-full p-6 flex items-center justify-center text-center">
              <div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-4 inline-block">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90 mb-2">{card.subtitle}</p>
                <p className="text-xs opacity-75 leading-relaxed">{card.description}</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Intellimark AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Re-engineering revenue growth using cutting edge patented machine learning coupled with best of industry nuances.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden rounded-2xl mb-12">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            willChange: 'transform'
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[500px]">
                {slide.cards.map((card, index) => renderCard(card, index))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex items-center justify-center gap-12">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-600 hover:bg-gray-50 transition-all duration-300 group disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
        </button>
        
        <div className="flex gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 group ${
                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-150" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-6 bg-gray-600 opacity-0 group-hover:opacity-30 transition-all duration-300" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-px bg-gray-600 opacity-0 group-hover:opacity-30 transition-all duration-300" />
            </button>
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-600 hover:bg-gray-50 transition-all duration-300 group disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
        </button>
      </div>
    </div>
  );
}