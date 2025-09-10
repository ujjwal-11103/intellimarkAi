import { Helmet } from 'react-helmet';
import React from 'react';
import TeresaSystem from '../components/forecasting/TeresaSystem';
import NowcastSystem from '../components/forecasting/NowcastSystem';
import FeatureEngineering from '../components/forecasting/FeatureEngineering';
import ComparisonSection from "../components/forecasting/ComparisonSection";
import StudyCard from '../components/StudyCard';
import ForecastingStudyCard from '../components/forecasting/ForecastingStudyCard';

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

            {/* Main Content */}
            <div id="teresa">
                <TeresaSystem />
            </div>
            <div id="nowcast">
                <NowcastSystem />
            </div>
            <ComparisonSection />
            <div id="features">
                <FeatureEngineering />
            </div>
            <div id="cards">
                <ForecastingStudyCard />
            </div>

        </div>
    )
}

export default Forecasting
