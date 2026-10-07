import SEO from '../components/SEO';
import React from 'react';
import { HeroSection } from '../components/recommendation/HeroSection';
import { ProcessFlow } from '../components/recommendation/ProcessFlow';
import { RecommendationEngine } from '../components/recommendation/RecommendationEngine';
import { PerformanceAnalysis } from '../components/recommendation/PerformanceAnalysis';
import ReccStudyCard from '../components/recommendation/ReccStudyCard';

const Recommendation = () => {
    const title = "Intelligent AI Recommendation & Retail Analytics Platform | Intellimark AI";
    const description =
        "Transform retail execution and sales velocity with store-level AI recommendations, personalized promotions, upselling algorithms, and incentive scheme optimization.";
    const canonicalUrl = "https://www.intellimark.ai/Recommendation";
    const keywords = "AI recommendation engine, store recommendation algorithm, retail incentive optimization, upselling and cross-selling AI, FMCG store recommendations";

    return (
        <div>
            <div className="min-h-screen bg-white pt-16 pb-24">
                {/* Dynamic SEO meta tags */}
                <SEO
                    title={title}
                    description={description}
                    canonicalUrl={canonicalUrl}
                    keywords={keywords}
                    ogType="website"
                />
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
