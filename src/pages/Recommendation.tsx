import React from 'react'
import { HeroSection } from '../components/recommendation/HeroSection'
import { ProcessFlow } from '../components/recommendation/ProcessFlow'
import { RecommendationEngine } from '../components/recommendation/RecommendationEngine'
import { PerformanceAnalysis } from '../components/recommendation/PerformanceAnalysis'
import StudyCard from '../components/StudyCard'
import ReccStudyCard from '../components/recommendation/ReccStudyCard'

const Recommendation = () => {
    return (
        <div>
            <div className="min-h-screen bg-white pt-16 pb-24">
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
