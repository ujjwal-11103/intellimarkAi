import React from 'react';
import { ArrowUpRight, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Study {
  id: string;
  type: string;
  title: string;
  description?: string;
  image: string;
}

// Helper functions for type color and icon
function getTypeColor(type: string) {
  switch (type) {
    case 'CASE STUDY':
      return 'bg-purple-600 text-white border-purple-600';
    default:
      return 'bg-gray-200 text-gray-700 border-gray-300';
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case 'CASE STUDY':
      return <BookOpen className="w-4 h-4 mr-1" />;
    default:
      return <FileText className="w-4 h-4 mr-1" />;
  }
}

const StudyCard: React.FC = () => {
  const resources: Study[] = [
    {
      id: 'store-recommendation-lubricant',
      type: 'CASE STUDY',
      title: 'Store Recommendation System for Lubricant Brand',
      description: 'AI-powered analytics platform integrating diverse data sources and advanced models to drive store-level inventory recommendations, upselling, cross-selling, and incentive optimization.',
      image: 'https://images.pexels.com/photos/13065696/pexels-photo-13065696.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'store-recommendation-beer',
      type: 'CASE STUDY',
      title: 'Store Recommendation and Incentive for Large Indian Beer Brand',
      description: 'AI-powered store recommendation and incentive optimization to improve market share, trade promotion effectiveness, and inventory planning for a leading Indian beer brand.',
      image: 'https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=800',
    }
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center py-10">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
          Related Case Studies
        </h1>
        <p className="text-base sm:text-xl text-gray-600">Explore them now</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        {resources.map((resource) => (
          <Link
            key={resource.id}
            to={`/case-study/${resource.id}`}
            className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          >
            <div className="absolute inset-0">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div
                className={`inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border text-xs font-medium mb-3 w-fit ${getTypeColor(
                  resource.type
                )}`}
              >
                {getTypeIcon(resource.type)}
                <span>{resource.type}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight line-clamp-2">
                {resource.title}
              </h3>

              <div className="flex items-center justify-end">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <ArrowUpRight className="w-10 h-4 text-white" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudyCard;
