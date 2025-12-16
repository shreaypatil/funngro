import Section, { SectionHeader } from '../ui/Section';
import Accordion from '../ui/Accordion';

const FAQSection = ({ faqs }) => {
    return (
        <Section background="gradient-purple">
            <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Got Questions? We've Got Answers"
            />

            <div className="max-w-3xl mx-auto">
                <Accordion items={faqs} />
            </div>
        </Section>
    );
};

export default FAQSection;
