import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import IndustryDetailPage from './pages/IndustryDetails';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Products';
import Industries from './pages/Industries';
import TestimonialsPage from './pages/TestimonialsPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailsPage from './pages/CaseStudyDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import Forecasting from './pages/Forecasting';
import Recommendation from './pages/Recommendation';
import Blogs from './pages/Blogs';
import DecodingAI from './pages/blogs/DecodingAI';
import StrategicPricing from './pages/blogs/StrategicPricing';
import IlluminatingPath from './pages/blogs/IlluminatingPath';
import IntegratingGenAI from './pages/blogs/IntegratingGenAI';
import MarketingMixModeling from './pages/blogs/MarketingMixModeling';
import FutureOfAI from './pages/blogs/FutureOfAI';
import UnveilingAI from './pages/blogs/UnveilingAI';
import HomePage from './pages/HomePage';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.getAttribute?.('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);


  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-study/:id" element={<CaseStudyDetailsPage />} />

          <Route path="/RevenueGrowthManagement" element={<ProductDetail />} />
          <Route path="/Forecasting" element={<Forecasting />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/industry-details/:industryId" element={<IndustryDetailPage />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Decoding-the-Mysteries-of-AI" element={<DecodingAI />} />
          <Route path="/Harnessing-AI-for-Strategic-Pricing-in-Consumer-Goods" element={<StrategicPricing />} />
          <Route path="/Illuminating-the-Path-Forward" element={<IlluminatingPath />} />
          <Route path="/Integrating-GenAI-with-Traditional-Data-Science" element={<IntegratingGenAI />} />
          <Route path="/Marketing-Mix-Modeling" element={<MarketingMixModeling />} />
          <Route path="/The-Future-of-AI" element={<FutureOfAI />} />
          <Route path="/Unveiling-AI" element={<UnveilingAI />} />

        </Routes>
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
