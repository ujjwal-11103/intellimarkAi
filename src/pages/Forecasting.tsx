import React from 'react';
import SEO from '../components/SEO';
import ComparisonSection from "../components/forecasting/ComparisonSection";
import FeatureEngineering from '../components/forecasting/FeatureEngineering';
import ForecastingStudyCard from '../components/forecasting/ForecastingStudyCard';
import CompanyMarquee from '../components/marquee';
import NowcastSystem from '../components/forecasting/NowcastSystem';
import TeresaSystem from '../components/forecasting/TeresaSystem';

const Forecasting = () => {
    const title = "Explainable AI Forecasting & Demand Forecasting for FMCG | Intellimark AI";
    const description =
        "Achieve up to 30% higher forecast accuracy with Intellimark's explainable AI forecasting and real-time nowcasting engine. Built for CPG & FMCG enterprise sales forecasting in India and globally.";
    const canonicalUrl = "https://www.intellimark.ai/Forecasting";
    const keywords = "explainable AI forecasting, demand forecasting for FMCG, AI sales forecasting India, sales variance analysis, Teresa forecasting engine, nowcasting system, SKU level forecasting, supply chain planning, CPG analytics company India, AI analytics for consumer goods companies";

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Intellimark Teresa - Explainable AI Forecasting Engine",
        "operatingSystem": "Web, Cloud, SaaS",
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
            "ratingValue": "4.9",
            "reviewCount": "28"
        },
        "featureList": [
            "Explainable AI Forecasting (XAI)",
            "Real-time Nowcast System for FMCG",
            "SKU x Market Demand Forecasting",
            "Sales Variance Analysis & Attribution",
            "Supply Chain Demand Shaping for Indian Festivals & Macro Signals"
        ]
    };

    return (
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

            {/* Main Content - sorted by section */}
            <div id="teresa">
                <TeresaSystem />
            </div>
            <div id="marquee">
                <CompanyMarquee />
            </div>
            <div id="nowcast">
                <NowcastSystem />
            </div>
            <div id="features">
                <FeatureEngineering />
            </div>
            <ComparisonSection />
            <div id="cards">
                <ForecastingStudyCard />
            </div>
        </div>
    )
}

export default Forecasting
