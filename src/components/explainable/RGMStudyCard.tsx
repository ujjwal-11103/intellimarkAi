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
      id: 'price-inflexion-point-fmcg',
      type: 'CASE STUDY',
      title: 'Price Inflexion Point Study for Large FMCG Brand',
      description: 'Analysis of price inflexion points for a major FMCG brand to optimize revenue growth.',
      image: 'https://images.pexels.com/photos/7567222/pexels-photo-7567222.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'trade-promotion-adhesive',
      type: 'CASE STUDY',
      title: 'Trade Promotion Scheme Design for Large Adhesive Brand',
      description: 'Designing effective trade promotion schemes for a leading adhesive brand.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'impact-pricing-skincare',
      type: 'CASE STUDY',
      title: 'Impact of Pricing and Same Page RPI for Popular Skincare Brand',
      description: 'Evaluating pricing strategies and RPI impact for a popular skincare brand.',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'lever-1-5-dairy-tuna-seaa',
      type: 'CASE STUDY',
      title: 'Lever 1 to 5 – Large Dairy and Tuna Brands in SEAA',
      description: 'Lever analysis for large dairy and tuna brands in Southeast Asia.',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800',
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
