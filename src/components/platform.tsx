import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, Database, BarChart3, Bot, Brain } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  videoUrl: string;
}

const sections: Section[] = [
  {
    id: 'data-nexus',
    title: 'Data Nexus',
    subtitle: 'AI-enabled data orchestration',
    icon: Database,
    color: 'from-blue-600 to-blue-700',
    videoUrl: '/videos/data-nexus.mp4'
  },
  {
    id: 'insights-portal',
    title: 'Insights Portal',
    subtitle: 'Pre-trained analytics plays',
    icon: BarChart3,
    color: 'from-amber-600 to-orange-600',
    videoUrl: '/videos/insights-portal.mp4'
  },
  {
    id: 'agenthood-ai',
    title: 'Agenthood AI & P.AI',
    subtitle: 'Agentic & generative AI assistants',
    icon: Bot,
    color: 'from-purple-600 to-pink-600',
    videoUrl: '/videos/agenthood-ai.mp4'
  },
  {
    id: 'ml-orion',
    title: 'ML Orion',
    subtitle: 'Pre-loaded ML models',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    videoUrl: '/videos/ml-orion.mp4'
  }
];

export const IntelliMarkPlatform = () => {
  const [activeSection, setActiveSection] = useState<string>('insights-portal');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(2);
  const [duration, setDuration] = useState(30);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const activeData = sections.find(s => s.id === activeSection) || sections[1];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            IntelliMark AI Platform
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Bring Data, Analytics, and AI together
          </p>
          <p className="text-gray-500">
            Ecosystem of AI-powered applications for Unified Enterprise Intelligence
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sections Panel */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Platform Components</h3>
            
            <div className="space-y-3">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                
                return (
                  <div
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`
                      group cursor-pointer transition-all duration-300 p-4 rounded-xl border-2
                      ${isActive 
                        ? 'border-gray-900 bg-gray-50 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`
                        p-2.5 rounded-lg transition-all duration-300
                        ${isActive 
                          ? `bg-gradient-to-br ${section.color} shadow-md` 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                        }
                      `}>
                        <Icon className={`
                          w-5 h-5 transition-colors duration-300
                          ${isActive ? 'text-white' : 'text-gray-600'}
                        `} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`
                          font-semibold text-sm transition-colors duration-300
                          ${isActive ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'}
                        `}>
                          {section.title}
                        </h4>
                        <p className={`
                          text-xs transition-colors duration-300 mt-0.5
                          ${isActive ? 'text-gray-600' : 'text-gray-500'}
                        `}>
                          {section.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Features */}
            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-sm text-gray-900 mb-3">Key Features</h4>
              <div className="space-y-2">
                {['Real-time Processing', 'Enterprise Security', 'Scalable Architecture', 'API Integration'].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeData.color}`}></div>
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              {/* Video Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {activeData.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {activeData.subtitle}
                    </p>
                  </div>
                  <div className={`
                    px-3 py-1.5 rounded-full text-xs font-semibold text-white
                    bg-gradient-to-r ${activeData.color}
                  `}>
                    Live Demo
                  </div>
                </div>
              </div>

              {/* Video Area */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-md">
                    <div className={`
                      w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center
                      bg-gradient-to-br ${activeData.color}
                    `}>
                      <activeData.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {activeData.title}
                    </h4>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Interactive demonstration of {activeData.title.toLowerCase()} capabilities and features
                    </p>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Video Controls */}
              <div className="px-6 py-4 bg-white">
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full bg-gradient-to-r ${activeData.color} transition-all duration-300`}
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <span className="text-sm text-gray-600 font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
