// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/About';
import IndustryDetailPage from './pages/IndustryDetails';
import Hero from './components/Hero';
import Carousel from './components/carousel';
import CompanyMarquee from './components/marquee';
import { IntelliMarkPlatform } from './components/platform';
import IndustryShowcase from './components/showcase';
import StatsSection from './components/StatsSection';
import UpcomingEvents from './components/UpcomingEvents';
import ResourcesHub from './components/ResourceHub';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Products';
import Industries from './pages/Industries';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailsPage from './pages/CaseStudyDetailsPage';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import Forecasting from './pages/Forecasting';
import Recommendation from './pages/Recommendation';

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
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Carousel />
                <CompanyMarquee />
                {/* <IntelliMarkPlatform /> */}
                <IndustryShowcase />
                <StatsSection />
                <UpcomingEvents />
                <ResourcesHub />
              </main>
            }
          />
          <Route path="/products" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-study/:id" element={<CaseStudyDetailsPage />} />

          <Route path="/ExplainableForecastingEngine/" element={<ProductDetail />} />
          <Route path="/Forecasting/" element={<Forecasting />} />
          <Route path="/Recommendation" element={<Recommendation />} />

          <Route path="/industry-details/:industryId" element={<IndustryDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
