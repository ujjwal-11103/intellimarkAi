import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { caseStudiesData } from "../data/caseStudiesData";

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`transition-all duration-700 ease-out opacity-100 translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
};

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
}> = ({ icon, value, label }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
    <div className="flex items-center space-x-3 mb-2">
      <div className="text-purple-600">{icon}</div>
      <span className="text-2xl font-bold text-gray-900">{value}</span>
    </div>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudiesData.find((c) => c.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Case Study Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-6 pt-28 pb-4">
        <div className=" flex justify-between items-center">
          <Link to="/case-studies" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cases
          </Link>
          {/* View Full Case Study Button */}
          {/* <Link
            to={`/case-study-desc/${caseStudy.id}`}
            className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-purple-700 transition-colors shadow-lg"
          >
            View Full Case Study
          </Link> */}
        </div>
      </div>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            {caseStudy.industryLabel}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {caseStudy.description}
          </p>
        </AnimatedSection>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            value={caseStudy.metrics.improvement}
            label="Improvement"
          />
          <StatCard
            icon={<Users className="w-5 h-5" />}
            value={caseStudy.metrics.timeFrame}
            label="Time Frame"
          />
        </div>

        <div className="space-y-12">
          {/* Problem */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Problem</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {caseStudy.problem}
              </p>
            </div>
          </AnimatedSection>

          {/* Challenges */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Key Challenges</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {caseStudy.challenges.map((ch, idx) => (
                  <li key={idx}>{ch}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Our Solution</h2>
              </div>
              <p className="text-purple-100 leading-relaxed mb-6 text-lg">
                {caseStudy.solution}
              </p>
              <ul className="list-disc list-inside space-y-2 text-purple-100">
                {caseStudy.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Approach */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Implementation Approach
              </h2>
              <div className="space-y-5">
                {caseStudy.approach.map((step, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Results */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Results & Impact
              </h2>
              <ul className="space-y-3">
                {caseStudy.results.map((r, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>

              {caseStudy.testimonial.quote && (
                <div className="p-6 mt-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    “{caseStudy.testimonial.quote}”
                  </blockquote>
                  <cite className="block mt-4 text-purple-700 font-semibold">
                    — {caseStudy.testimonial.author},{" "}
                    {caseStudy.testimonial.position},{" "}
                    {caseStudy.testimonial.company}
                  </cite>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
};

export default CaseStudyDetail;
