import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProjectIdeas from '../components/sections/ProjectIdeas';
import TestimonialSlider from '../components/sections/TestimonialSlider';
import CategoryGrid from '../components/sections/CategoryGrid';
import FeatureGrid from '../components/sections/FeatureGrid';
import Timeline from '../components/sections/Timeline';
import FAQSection from '../components/sections/FAQSection';
import MissionFounders from '../components/sections/MissionFounders';
import BlogHighlights from '../components/sections/BlogHighlights';
import { companyContent } from '../data/companyContent';

const CompanyPage = () => {
    useEffect(() => {
        document.title = 'Funngro - Hire Smart Teen Talent for Your Business';

        // SEO meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Access innovative, cost-effective teen talent for your business. Get fresh perspectives, quality work, and connect with Gen Z—all at 40-60% lower costs than traditional freelancers.');
        }
    }, []);

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection content={companyContent.hero} />

            {/* Project Ideas */}
            <ProjectIdeas content={companyContent.projectIdeas} />

            {/* Why Work With Teens */}
            <FeatureGrid content={companyContent.whyTeens} />

            {/* Company Testimonials */}
            <TestimonialSlider
                testimonials={companyContent.testimonials}
                title="What Companies Say"
                subtitle="Trusted by businesses"
            />

            {/* Talent Categories */}
            <CategoryGrid content={companyContent.talentCategories} />

            {/* Company Workflow */}
            <Timeline
                content={companyContent.workflow}
                ctaText="Start Hiring"
                ctaHref="#register"
            />

            {/* FAQs */}
            <FAQSection faqs={companyContent.faqs} />

            {/* Mission & Founders */}
            <MissionFounders />

            {/* Blog Highlights */}
            <BlogHighlights blogs={companyContent.blogs} />
        </main>
    );
};

export default CompanyPage;
