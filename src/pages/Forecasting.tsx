import React from 'react';
import { Helmet } from 'react-helmet';
import ComparisonSection from "../components/forecasting/ComparisonSection";
import FeatureEngineering from '../components/forecasting/FeatureEngineering';
import ForecastingStudyCard from '../components/forecasting/ForecastingStudyCard';
import CompanyMarquee from '../components/marquee';
import NowcastSystem from '../components/forecasting/NowcastSystem';
import TeresaSystem from '../components/forecasting/TeresaSystem';
import StudyCard from '../components/StudyCard';

const Forecasting = () => {
    const title = "Advanced Forecasting and Planning";
    const description =
        "Unlock the power of AI-driven forecasting and planning with Intellimark’s advanced systems, designed to improve accuracy, reduce risk, and optimize decision-making.";

    return (
        <div className="min-h-screen bg-white pt-16 pb-24">
            {/* Dynamic SEO meta tags */}
            <Helmet>
                <title>{title} - Intellimark AI</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={`${title} - Intellimark AI`} />
                <meta property="og:description" content={description} />
            </Helmet>

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
