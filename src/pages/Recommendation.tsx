import SEO from '../components/SEO';
import React from 'react';
import { HeroSection } from '../components/recommendation/HeroSection';
import { ProcessFlow } from '../components/recommendation/ProcessFlow';
import { RecommendationEngine } from '../components/recommendation/RecommendationEngine';
import { PerformanceAnalysis } from '../components/recommendation/PerformanceAnalysis';
import ReccStudyCard from '../components/recommendation/ReccStudyCard';

const Recommendation = () => {
    const title = "Beat Planning Software & Retail Growth Analytics | Intellimark AI";
    const description =
        "AI beat planning software, route optimization for sales teams, and next best action for sales reps. Drive FMCG beat optimization and field sales force optimization across India.";
    const canonicalUrl = "https://www.intellimark.ai/Recommendation";
    const keywords = "beat planning software, beat optimization for FMCG, route optimization for sales teams, field sales force optimization, next best action for sales reps, salesman beat plan India, retail growth analytics, AI recommendation engine, store recommendation algorithm, CPG analytics company India";

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Intellimark Field Sales Force & Beat Optimization Engine",
        "operatingSystem": "Web, Cloud, SaaS, Android, iOS",
        "applicationCategory": "BusinessApplication",
        "description": description,
        "url": canonicalUrl,
        "provider": {
            "@type": "Organization",
            "name": "Intellimark AI",
            "url": "https://www.intellimark.ai"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/OnlineOnly"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "24"
        },
        "featureList": [
            "Beat Planning Software & Territory Mapping",
            "Route Optimization for Sales Teams",
            "Beat Optimization for FMCG Distribution in India",
            "Next Best Action for Sales Reps (NBA)",
            "Suggested Order Quantity (SOQ) Algorithm",
            "Field Sales Force Optimization & Adherence Tracking",
            "Retail Growth Analytics & Store Potential Scoring"
        ]
    };

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
                    schema={schemaData}
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
