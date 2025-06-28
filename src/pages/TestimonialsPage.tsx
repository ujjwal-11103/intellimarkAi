import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Crown, Building } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      company: "Microsoft",
      content: "Intellimark's AI platform has revolutionized our enterprise data analytics capabilities. We've achieved a remarkable 340% improvement in processing speed, and our strategic decision-making has become significantly more accurate and data-driven. The ROI has exceeded all expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150&h=150&fit=crop&crop=face",
      value: "$50M+ Value Created",
      industry: "Technology"
    },
    {
      name: "David Rodriguez",
      title: "VP of Global Operations",
      company: "Goldman Sachs",
      content: "The quantum risk assessment AI system has fundamentally transformed how we evaluate complex investments. The precision and speed of analysis have given us an unprecedented competitive edge in volatile markets, while significantly reducing our risk exposure.",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=150&h=150&fit=crop&crop=face",
      value: "$75M+ Risk Mitigation",
      industry: "Financial Services"
    },
    {
      name: "Dr. Emily Watson",
      title: "Chief Medical Officer",
      company: "Johnson & Johnson",
      content: "Intellimark's drug discovery AI has accelerated our research timeline by 60%, enabling us to bring life-saving treatments to market faster. The insights generated have been invaluable in identifying promising compounds and optimizing clinical trials.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150&h=150&fit=crop&crop=face",
      value: "$200M+ R&D Efficiency",
      industry: "Healthcare"
    },
    {
      name: "Michael Park",
      title: "Director of Innovation",
      company: "Tesla",
      content: "The predictive maintenance system has revolutionized our manufacturing operations, reducing equipment downtime by 45%. The proactive approach to maintenance has saved us millions in operational costs while improving our production quality and efficiency.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150&h=150&fit=crop&crop=face",
      value: "$100M+ Cost Savings",
      industry: "Automotive"
    },
    {
      name: "Lisa Thompson",
      title: "Head of Technology",
      company: "Netflix",
      content: "Our content recommendation engine powered by Intellimark's AI has increased user engagement by 25% and significantly improved customer retention. The personalization accuracy is remarkable, creating a truly premium viewing experience for our subscribers.",
      rating: 5,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=150&h=150&fit=crop&crop=face",
      value: "$150M+ Revenue Growth",
      industry: "Entertainment"
    },
    {
      name: "James Wilson",
      title: "Chief Data Officer",
      company: "Amazon",
      content: "The supply chain optimization AI has streamlined our global logistics operations beyond our expectations. We've achieved 30% cost reduction while improving delivery times significantly, setting new industry standards for operational excellence.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face",
      value: "$300M+ Operational Excellence",
      industry: "E-commerce"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Crown className="h-12 w-12 text-amber-600" />
            <Quote className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-stone-800">Client</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h1>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Hear from C-suite executives who have transformed their enterprises with our 
            world-class AI solutions and achieved unprecedented results.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 md:p-16 border border-stone-200/50">
            <div className="absolute top-8 left-8">
              <Quote className="h-16 w-16 text-amber-600/30" />
            </div>
            
            <div className="mb-8">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-amber-600 fill-current" />
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl p-4 border border-amber-200 text-center">
                  <p className="text-amber-700 font-bold text-xl">
                    {testimonials[currentTestimonial].value}
                  </p>
                </div>
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-center">
                  <p className="text-stone-700 font-bold text-xl">
                    {testimonials[currentTestimonial].industry}
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="text-2xl md:text-3xl text-stone-700 leading-relaxed mb-12 text-center font-light">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mr-6 object-cover border-2 border-amber-200"
              />
              <div className="text-center">
                <h4 className="text-2xl font-bold text-stone-800 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-stone-600 text-lg mb-1">
                  {testimonials[currentTestimonial].title}
                </p>
                <p className="text-amber-700 font-bold text-lg">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-stone-200 hover:border-amber-200 group"
          >
            <ChevronLeft className="h-8 w-8 text-amber-600 group-hover:text-amber-700" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-stone-200 hover:border-amber-200 group"
          >
            <ChevronRight className="h-8 w-8 text-amber-600 group-hover:text-amber-700" />
          </button>
        </div>

        <div className="flex justify-center mb-20 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 scale-125' 
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">All Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/50 hover:border-amber-200 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-stone-200 group-hover:border-amber-200 transition-all duration-300"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-stone-600 text-sm">{testimonial.title}</p>
                    <p className="text-amber-600 font-semibold text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-600 fill-current" />
                  ))}
                </div>
                
                <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.content}"
                </p>
                
                <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-xl p-3 border border-amber-200 text-center">
                  <p className="text-amber-700 font-bold text-sm">{testimonial.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg">
            <Building className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-stone-800 mb-6">Ready to Join Our Success Stories?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your enterprise with world-class AI solutions 
              that deliver measurable results and competitive advantage.
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;