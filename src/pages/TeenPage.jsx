import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import CategoryGrid from '../components/sections/CategoryGrid';
import LogoGrid from '../components/sections/LogoGrid';
import Timeline from '../components/sections/Timeline';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import FAQSection from '../components/sections/FAQSection';
import MissionFounders from '../components/sections/MissionFounders';
import BlogHighlights from '../components/sections/BlogHighlights';
import { teenContent } from '../data/teenContent';
import { sharedContent } from '../data/sharedContent';

const TeenPage = () => {
    useEffect(() => {
        document.title = 'Funngro - Earn, Learn & Grow as a Teen';

        // SEO meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Join 5M+ teens earning real money from real companies. Work on exciting projects, build skills, and get certified experience—all while you\'re still in your teens.');
        }
    }, []);

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection content={teenContent.hero} />

            {/* Why Work in Your Teens */}
            <FeatureGrid content={teenContent.whyWorkInTeens} />

            {/* Work Categories */}
            <CategoryGrid content={teenContent.workCategories} />

            {/* Trust & Social Proof */}
            <LogoGrid
                logos={sharedContent.trustLogos.companies}
                title="Trusted By Leading Companies"
                subtitle="Work with the best"
            />

            {/* How Teens Earn */}
            <Timeline
                content={teenContent.howToEarn}
                ctaText="Download App"
                ctaHref="#download"
            />

            {/* Testimonials */}
            <TestimonialSlider
                testimonials={teenContent.testimonials}
                title="Success Stories"
                subtitle="Hear from our teenlancers"
            />

            {/* Featured In */}
            <LogoGrid
                logos={sharedContent.trustLogos.media}
                title="Featured In"
                subtitle="As seen on"
            />

            {/* FAQs */}
            <FAQSection faqs={teenContent.faqs} />

            {/* Mission & Founders */}
            <MissionFounders />

            {/* Blog Highlights */}
            <BlogHighlights blogs={teenContent.blogs} />
        </main>
    );
};

export default TeenPage;
