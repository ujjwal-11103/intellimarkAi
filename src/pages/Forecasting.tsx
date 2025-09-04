import React from 'react'
import TeresaSystem from '../components/forecasting/TeresaSystem'
import NowcastSystem from '../components/forecasting/NowcastSystem'
import FeatureEngineering from '../components/forecasting/FeatureEngineering'
import ComparisonSection from "../components/forecasting/ComparisonSection"
import StudyCard from '../components/StudyCard'
import ForecastingStudyCard from '../components/forecasting/ForecastingStudyCard';

const Forecasting = () => {
    return (
        <div className="min-h-screen bg-white pt-16 pb-24">

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
