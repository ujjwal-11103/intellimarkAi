import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import Carousel from '../components/carousel';
import CompanyMarquee from '../components/marquee';
import IndustryShowcase from '../components/showcase';
import StatsSection from '../components/StatsSection';
import UpcomingEvents from '../components/UpcomingEvents';
import ResourcesHub from '../components/ResourceHub';


const HomePage = () => {
    const title = "Intellimark AI - Revenue growth management and forecasting solutions using explainable ai";
    const description =
        "Discover how Intellimark AI helps businesses transform their marketing strategy with advanced AI-driven insights, intelligent recommendations, and real-time analytics.";

    return (
        <main>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Helmet>

            <Hero />
            <Carousel />
            <CompanyMarquee />
            <IndustryShowcase />
            <StatsSection />
            <UpcomingEvents />
            <ResourcesHub />
        </main>
    );
};

export default HomePage;
