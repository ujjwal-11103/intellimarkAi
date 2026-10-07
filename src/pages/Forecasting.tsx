import React from 'react';
import SEO from '../components/SEO';
import ComparisonSection from "../components/forecasting/ComparisonSection";
import FeatureEngineering from '../components/forecasting/FeatureEngineering';
import ForecastingStudyCard from '../components/forecasting/ForecastingStudyCard';
import CompanyMarquee from '../components/marquee';
import NowcastSystem from '../components/forecasting/NowcastSystem';
import TeresaSystem from '../components/forecasting/TeresaSystem';

const Forecasting = () => {
    const title = "Advanced AI Demand Forecasting & Planning Platform | Intellimark AI";
    const description =
        "Unlock the power of AI-driven demand forecasting with Intellimark's Teresa and Nowcasting engines. Achieve up to 30% higher forecast accuracy, eliminate out-of-stocks, and optimize enterprise supply chain operations.";
    const canonicalUrl = "https://www.intellimark.ai/Forecasting";
    const keywords = "AI demand forecasting, enterprise forecasting software, Teresa forecasting engine, nowcasting system, SKU level forecasting, supply chain planning, demand shaping, FMCG forecasting AI, trade promotion forecasting";

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Intellimark AI Demand Forecasting & Planning System",
        "operatingSystem": "Cloud",
        "applicationCategory": "BusinessApplication",
        "description": description,
        "url": canonicalUrl,
        "provider": {
            "@type": "Organization",
            "name": "Intellimark AI",
            "url": "https://www.intellimark.ai"
        },
        "featureList": [
            "Teresa Forecasting Engine",
            "Real-time Nowcast System",
            "Automated Feature Engineering",
            "Granular SKU x Market Forecasting",
            "Supply Chain Demand Shaping"
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
