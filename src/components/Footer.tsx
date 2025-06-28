import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Crown } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Premium Solutions",
      links: [
        "Neural Intelligence Platform",
        "Computer Vision Excellence",
        "Conversational AI Suite",
        "Predictive Analytics Engine",
        "Business Intelligence AI",
        "Process Automation Suite"
      ]
    },
    {
      title: "Elite Industries",
      links: [
        "Healthcare & Life Sciences",
        "Financial Services",
        "Manufacturing Excellence",
        "Retail & E-commerce",
        "Automotive Innovation",
        "Aerospace & Defense"
      ]
    },
    {
      title: "Company",
      links: [
        "About Intellimark",
        "Leadership Team",
        "Press & Media",
        "Strategic Partners",
        "Innovation Blog",
        "Success Stories"
      ]
    },
    {
      title: "Enterprise Support",
      links: [
        "Technical Documentation",
        "Enterprise Help Center",
        "API Reference",
        "Executive Training",
        "Developer Community",
        "System Status"
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Brain className="h-12 w-12 text-amber-400" />
                <div className="absolute inset-0 h-12 w-12 bg-amber-400/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Intellimark
              </span>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              Transforming enterprises worldwide with cutting-edge AI solutions. 
              Join the future of intelligent business technology and unlock unprecedented growth.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300">
                  <Mail className="h-6 w-6 text-amber-400" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-lg">
                  enterprise@intellimark.ai
                </span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300">
                  <Phone className="h-6 w-6 text-amber-400" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-lg">
                  +1 (555) AI-ELITE
                </span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-amber-400" />
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-lg">
                  San Francisco, CA • Global Presence
                </span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-300 text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700/50 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 group">
                <Linkedin className="h-6 w-6 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
              </a>
              <a href="#" className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 group">
                <Twitter className="h-6 w-6 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
              </a>
              <a href="#" className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 group">
                <Github className="h-6 w-6 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
              </a>
              <a href="#" className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm p-3 rounded-xl border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 group">
                <Facebook className="h-6 w-6 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-amber-400" />
                <span className="text-lg">© 2024 Intellimark. All rights reserved.</span>
              </div>
              <div className="flex space-x-6 text-base">
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Enterprise Agreement</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;