import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const items: CarouselItem[] = [
    {
      id: 1,
      title: "AI Revolution Summit 2025",
      subtitle: "The Future of Artificial Intelligence",
      description: "Join industry leaders as we explore groundbreaking AI technologies and their transformative impact on business and society.",
      date: "March 15, 2025",
      location: "San Francisco Convention Center",
      image: "https://images.pexels.com/photos/2833684/pexels-photo-2833684.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Conference"
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      subtitle: "Advanced Neural Networks",
      description: "Hands-on workshop covering cutting-edge ML techniques, deep learning architectures, and practical implementation strategies.",
      date: "March 22, 2025",
      location: "IntelliMark HQ - Virtual",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Workshop"
    },
    {
      id: 3,
      title: "AI Ethics & Governance",
      subtitle: "Responsible AI Development",
      description: "Critical discussions on ethical AI development, regulatory frameworks, and the future of responsible artificial intelligence.",
      date: "April 5, 2025",
      location: "Stanford University",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Panel"
    },
    {
      id: 4,
      title: "Startup AI Pitch Night",
      subtitle: "Innovation Showcase",
      description: "Emerging AI startups present groundbreaking solutions to investors, industry experts, and technology enthusiasts.",
      date: "April 18, 2025",
      location: "Tech Hub Innovation Center",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "Networking"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">Recent Events</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most impactful events and join the conversation shaping the future of AI
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Main Carousel */}
          <div className="relative h-[600px] lg:h-[500px]">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="grid lg:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-xl text-gray-600 font-medium mb-4">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Event Details */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">{item.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <MapPin className="w-5 h-5" />
                          <span className="font-medium">{item.location}</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
                          <span>Learn More</span>
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 gap-4">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative group transition-all duration-300 ${
                index === currentIndex ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Active Indicator */}
              <div className={`absolute inset-0 rounded-xl border-3 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-gray-900 bg-gray-900/10' 
                  : 'border-transparent group-hover:border-gray-400'
              }`}></div>
              
              {/* Title Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                  {item.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gray-900' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;