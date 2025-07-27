import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, Database, BarChart3, Bot, Brain } from 'lucide-react';

// Interfaces and data remain the same
interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  videoUrl: string;
}

const sections: Section[] = [
  { id: 'data-nexus', title: 'Data Nexus', subtitle: 'AI-enabled data orchestration', icon: Database, color: 'from-blue-600 to-blue-700', videoUrl: '/videos/data-nexus.mp4' },
  { id: 'blogs-portal', title: 'Blogs Portal', subtitle: 'Pre-trained analytics plays', icon: BarChart3, color: 'from-amber-600 to-orange-600', videoUrl: '/videos/blogs-portal.mp4' },
  { id: 'agenthood-ai', title: 'Agenthood AI & P.AI', subtitle: 'Agentic & generative AI assistants', icon: Bot, color: 'from-purple-600 to-pink-600', videoUrl: '/videos/agenthood-ai.mp4' },
  { id: 'ml-orion', title: 'ML Orion', subtitle: 'Pre-loaded ML models', icon: Brain, color: 'from-emerald-600 to-teal-600', videoUrl: '/videos/ml-orion.mp4' }
];

export const IntelliMarkPlatform = () => {
  const [activeSection, setActiveSection] = useState<string>('blogs-portal');
  const [isPlaying, setIsPlaying] = useState(false);
  const currentTime = 2; // Mock data
  const duration = 30; // Mock data

  const activeData = sections.find(s => s.id === activeSection) || sections[1];

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            IntelliMark AI Platform
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Bring Data, Analytics, and AI together in an ecosystem of AI-powered applications for Unified Enterprise Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sections Panel */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Platform Components</h3>
            <div className="space-y-3">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <div
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`group cursor-pointer transition-all duration-300 p-4 rounded-xl border-2 ${
                      isActive 
                        ? 'border-gray-900 bg-gray-50 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2.5 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-br ${section.color} shadow-md` 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                          {section.title}
                        </h4>
                        <p className={`text-xs sm:text-sm transition-colors duration-300 mt-0.5 ${
                          isActive ? 'text-gray-600' : 'text-gray-500'
                        }`}>
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{activeData.title}</h3>
                    <p className="text-sm text-gray-600">{activeData.subtitle}</p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${activeData.color}`}>
                    Live Demo
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 max-w-md">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${activeData.color}`}>
                      <activeData.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{activeData.title}</h4>
                    <p className="text-gray-200 text-sm leading-relaxed hidden sm:block">
                      Interactive demonstration of {activeData.title.toLowerCase()} capabilities and features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white">
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                  <div className={`h-1.5 rounded-full bg-gradient-to-r ${activeData.color}`} style={{ width: `${(currentTime / duration) * 100}%` }} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="text-gray-600 hover:text-gray-900">
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <span className="text-xs sm:text-sm text-gray-600 font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <button className="text-gray-600 hover:text-gray-900"><Volume2 className="w-5 h-5" /></button>
                    <button className="text-gray-600 hover:text-gray-900"><Maximize className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};