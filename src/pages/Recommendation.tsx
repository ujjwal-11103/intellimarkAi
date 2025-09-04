import React from 'react'
import { HeroSection } from '../components/recommendation/HeroSection'
import { ProcessFlow } from '../components/recommendation/ProcessFlow'
import { RecommendationEngine } from '../components/recommendation/RecommendationEngine'
import { PerformanceAnalysis } from '../components/recommendation/PerformanceAnalysis'
import StudyCard from '../components/StudyCard'

const Recommendation = () => {
    return (
        <div>
            <div className="min-h-screen bg-white pt-16 pb-24">
                <HeroSection />
                <ProcessFlow />
                <RecommendationEngine />
                <PerformanceAnalysis />
                <StudyCard />
            </div>
        </div>
    )
}

export default Recommendation
