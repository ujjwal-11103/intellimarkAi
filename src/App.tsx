import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import ClientShowcase from './components/ClientShowcase';
import AIEcosystem from './components/AIEcosystem';
import IndustrySolutions from './components/IndustrySolutions';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import JoinTeam from './components/JoinTeam';
import Footer from './components/Footer';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Carousel from './components/carousel';
import CompanyMarquee from './components/marquee';
import { IntelliMarkPlatform } from './components/platform';
import IndustryShowcase from './components/showcase';
import StatsSection from './components/StatsSection';
import UpcomingEvents from './components/UpcomingEvents';
import ResourcesHub from './components/ResourceHub';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return <Solutions />;
      case 'industries':
        return <Industries />;
      case 'about':
        return <About />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <main>
            <Hero />
            <Carousel />
            <CompanyMarquee />
            <IntelliMarkPlatform />
            <IndustryShowcase />
            <StatsSection />
            <UpcomingEvents />
            <ResourcesHub />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;