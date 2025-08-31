import React from 'react';
import { Database, Cloud, Activity, Target } from 'lucide-react';

const FeatureEngineering = () => {
    const dataCategories = [
        {
            title: 'Sales Variables',
            icon: <Database className="w-6 h-6" />,
            source: 'Primary & Offtake Data',
            processing: 'Temporal analysis, smoothening, outlier detection',
            color: 'from-purple-500 to-violet-500',
            bgColor: 'bg-purple-50'
        },
        {
            title: 'Market Intelligence',
            icon: <Cloud className="w-6 h-6" />,
            source: 'Web Scraping & APIs',
            processing: 'KPI encoding, competitive analysis',
            color: 'from-violet-500 to-indigo-500',
            bgColor: 'bg-violet-50'
        },
        {
            title: 'Campaign Data',
            icon: <Activity className="w-6 h-6" />,
            source: 'Ads APIs & Event Data',
            processing: 'Adstock modeling, categorical encoding',
            color: 'from-indigo-500 to-purple-500',
            bgColor: 'bg-indigo-50'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Feature Engineering Pipeline
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Advanced data processing and feature selection for optimal forecasting performance
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                        <div className="text-gray-600 font-medium">Data Sources</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-violet-600 mb-2">100+</div>
                        <div className="text-gray-600 font-medium">Features Generated</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">SOTA</div>
                        <div className="text-gray-600 font-medium">Selection Algorithms</div>
                    </div>
                </div>

                {/* Data Processing Pipeline */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                        {/* Data Categories */}
                        {dataCategories.map((category, index) => (
                            <div key={index} className="p-8 hover:bg-gray-50 transition-colors">
                                <div className="text-center mb-6">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Data Source */}
                                    <div className={`p-4 ${category.bgColor} rounded-lg border border-gray-200`}>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Source</div>
                                        <div className="text-sm font-medium text-gray-900">{category.source}</div>
                                    </div>

                                    {/* Processing */}
                                    <div className={`p-4 ${category.bgColor} rounded-lg border border-gray-200`}>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Processing</div>
                                        <div className="text-sm font-medium text-gray-900">{category.processing}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Process Steps */}
                        <div className="p-8 bg-gradient-to-br from-purple-50 to-violet-50">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Pipeline Steps</h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { step: 'Acquisition', desc: 'Multi-source data integration' },
                                    { step: 'Processing', desc: 'Advanced feature engineering' },
                                    { step: 'Selection', desc: 'Optimal feature selection' },
                                    { step: 'Output', desc: 'Model-ready datasets' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-purple-200">
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 text-sm">{item.step}</div>
                                            <div className="text-xs text-gray-600">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-6 text-center">
                        <h4 className="text-lg font-bold text-white mb-2">Strategic Feature Selection</h4>
                        <p className="text-purple-100 text-sm max-w-4xl mx-auto">
                            Cross-validated algorithms optimized for every unique SKU-market-period combination,
                            delivering trend analysis and non-linear impact insights for superior forecasting accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureEngineering;