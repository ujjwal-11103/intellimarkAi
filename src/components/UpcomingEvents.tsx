import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin } from 'lucide-react';
import gartner from '../photos/Gartner.jpeg'
import sandeepup from '../photos/Sandeep-upcoming events.jpeg'

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

const items: CarouselItem[] = [
    { id: 1, title: "Gartner List Inclusion", subtitle: "Global Industry Recognition", description: "Intellimark's Profitpulse made it to the prestigious list of Gartner's Recommended Products for Consumer Goods Company.", date: "March 15, 2025", location: "San Francisco, CA", image: gartner, category: "Recognition" },
    { id: 2, title: "Welcome Sandeep Mathews.", subtitle: "RGM Legend joins the Intellimark Board", description: "We welcome the legend Sandeep Mathew to Intellimark's Advisory board. 18 years in RGM expertise is being used to evolve Intellimark products.", date: "March 22, 2025", location: "IntelliMark HQ - Virtual", image: sandeepup , category: "Inclusion" }
];

const UpcomingEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  const goToNext = () => setCurrentIndex((currentIndex + 1) % items.length);

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wide">Upcoming Events</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Join the Conversation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our most impactful events and connect with pioneers shaping the future of AI.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-[700px] sm:h-[600px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-white">
                  <div className="relative h-64 lg:h-full">
                    {item.id === 1 ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain rounded-xl shadow-lg"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      />
                    ) : (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent"></div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full mb-4 self-start">{item.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-600 font-medium mb-4">{item.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                    {/* <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center gap-3"><Calendar className="w-4 h-4" /><span>{item.date}</span></div>
                      <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /><span>{item.location}</span></div>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center transition hover:bg-white">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center transition hover:bg-white">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-gray-900' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default UpcomingEvents;