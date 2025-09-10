import { Helmet } from 'react-helmet';
import React from 'react';
import { HeroSection } from '../components/recommendation/HeroSection';
import { ProcessFlow } from '../components/recommendation/ProcessFlow';
import { RecommendationEngine } from '../components/recommendation/RecommendationEngine';
import { PerformanceAnalysis } from '../components/recommendation/PerformanceAnalysis';
import StudyCard from '../components/StudyCard';
import ReccStudyCard from '../components/recommendation/ReccStudyCard';

const Recommendation = () => {
    const title = "Intelligent Recommendation Analytics Platform";
    const description =
        "Transform your business with data-driven insights, smart recommendations, and comprehensive performance tracking across all channels.";

    return (
        <div>
            <div className="min-h-screen bg-white pt-16 pb-24">

                {/* Dynamic SEO meta tags */}
                <Helmet>
                    <title>{title} - Intellimark AI</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={`${title} - Intellimark AI`} />
                    <meta property="og:description" content={description} />
                </Helmet>
                <HeroSection />
                <ProcessFlow />
                <RecommendationEngine />
                <PerformanceAnalysis />
                <ReccStudyCard />
            </div>
        </div>
    )
}

export default Recommendation
