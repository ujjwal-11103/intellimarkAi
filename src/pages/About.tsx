import React from 'react';
import { Users, Award, Globe, Target, Heart, Zap, Crown, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation Excellence",
      description: "We push the boundaries of what's possible with AI, delivering cutting-edge solutions that transform industries."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our mission. We're committed to delivering measurable results and long-term value."
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, bringing expertise and dedication to every project."
    },
    {
      icon: Zap,
      title: "Rapid Innovation",
      description: "Speed to market matters. We deliver enterprise-grade solutions with unprecedented velocity."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      background: "Former VP of AI at Google, PhD in Computer Science from Stanford",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      background: "Ex-Microsoft Principal Architect, 15+ years in enterprise AI",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      background: "Former MIT Professor, 50+ published papers in machine learning",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "VP of Enterprise Solutions",
      background: "Ex-IBM Global Services Director, MBA from Wharton",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with $10M Series A funding" },
    { year: "2019", event: "First Fortune 500 client deployment" },
    { year: "2020", event: "Reached $50M ARR milestone" },
    { year: "2021", event: "Expanded to 25+ countries globally" },
    { year: "2022", event: "Achieved unicorn status with $1B valuation" },
    { year: "2023", event: "Launched next-gen AI platform" },
    { year: "2024", event: "500+ enterprise clients worldwide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Crown className="h-12 w-12 text-amber-600" />
            <Users className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-stone-800">About</span>
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent">
              Intellimark
            </span>
          </h1>
          <p className="text-2xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
            We're pioneering the future of enterprise AI, transforming how the world's most prestigious 
            companies operate, innovate, and achieve unprecedented success.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg mb-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-stone-800 mb-8">Our Mission</h2>
            <p className="text-xl text-stone-600 leading-relaxed max-w-4xl mx-auto">
              To democratize artificial intelligence for enterprise success. We believe every organization 
              deserves access to world-class AI solutions that drive measurable results, competitive advantage, 
              and sustainable growth in an increasingly digital world.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-white/80 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-stone-200/50 group-hover:border-amber-200 shadow-lg">
                    <IconComponent className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4 group-hover:text-amber-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/50 hover:border-amber-200 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-stone-200 group-hover:border-amber-200 transition-all duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-amber-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-stone-800 text-center mb-12">Our Journey</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-stone-200/50 shadow-lg">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center group">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg mr-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-xl text-stone-700 group-hover:text-amber-700 transition-colors duration-300 font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-12 border border-amber-200/50 shadow-lg">
            <Crown className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-stone-800 mb-6">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Join the hundreds of Fortune 500 companies that trust Intellimark to deliver 
              world-class AI solutions and drive unprecedented business results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-12 py-4 rounded-2xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-amber-600/30 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-stone-300 text-stone-700 px-12 py-4 rounded-2xl hover:bg-stone-50 hover:border-amber-600 hover:text-amber-700 transition-all duration-300 font-bold text-lg">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;