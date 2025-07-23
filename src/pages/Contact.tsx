import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building, Users, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "enterprise@intellimark.ai",
      description: "Get in touch for enterprise inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) AI-ELITE",
      description: "Speak with our solutions experts"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      description: "Global headquarters and innovation center"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Support",
      description: "Enterprise support around the clock"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      type: "Global Headquarters"
    },
    {
      city: "New York",
      address: "456 Enterprise Plaza, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      type: "East Coast Operations"
    },
    {
      city: "London",
      address: "789 Tech Square, London EC2A 4DP, UK",
      phone: "+44 20 7123 4567",
      type: "European Headquarters"
    },
    {
      city: "Singapore",
      address: "321 Business Hub, Singapore 018989",
      phone: "+65 6123 4567",
      type: "Asia-Pacific Operations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <MessageSquare className="h-12 w-12 text-amber-600" />
            <Building className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-stone-800">Get In</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your enterprise with world-class AI solutions? 
            Let's discuss how we can drive unprecedented results for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/50 shadow-lg">
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-stone-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-stone-700 mb-2">
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80"
                    placeholder="Your job title"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-stone-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80"
                >
                  <option value="general">General Inquiry</option>
                  <option value="demo">Request Demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Technical Support</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 bg-white/80 resize-none"
                  placeholder="Tell us about your AI needs and how we can help transform your enterprise..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/50 shadow-lg">
              <h2 className="text-3xl font-bold text-stone-800 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-3 rounded-xl border border-amber-200 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-amber-700 font-semibold mb-1">{info.details}</p>
                        <p className="text-stone-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-8 border border-amber-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Enterprise Priority Support</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                As an enterprise client, you'll receive dedicated support from our expert team, 
                ensuring your AI solutions deliver maximum value and performance.
              </p>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-amber-600" />
                <span className="text-stone-700 font-semibold">Dedicated Success Manager</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-stone-200/50 hover:border-amber-200 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-amber-200">
                  <MapPin className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {office.city}
                </h4>
                <p className="text-amber-600 font-semibold text-sm mb-3">{office.type}</p>
                <p className="text-stone-600 text-sm mb-2">{office.address}</p>
                <p className="text-stone-700 font-medium text-sm">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg">
            <Building className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-stone-800 mb-6">Ready to Book Now?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our AI experts to discuss your specific needs 
              and discover how we can transform your enterprise.
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;