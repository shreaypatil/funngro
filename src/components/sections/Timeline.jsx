import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import Button from '../ui/Button';

const Timeline = ({ content, ctaText, ctaHref }) => {
    const { title, subtitle, steps } = content;

    return (
        <Section background="dark">
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="relative flex gap-6 pb-12 last:pb-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        {/* Timeline Line */}
                        {index < steps.length - 1 && (
                            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple to-accent-blue" />
                        )}

                        {/* Step Number */}
                        <div className="relative z-10 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-glow">
                            <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 pt-1">
                            <h3 className="text-2xl font-semibold text-dark-text mb-2">
                                {step.title}
                            </h3>
                            <p className="text-dark-text-secondary leading-relaxed">
                                {step.description}
                            </p>
                        </div>

                        {/* Check Icon */}
                        <motion.div
                            className="w-8 h-8 border-2 border-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-2"
                            whileHover={{ scale: 1.2, backgroundColor: 'rgba(0, 230, 118, 0.1)' }}
                        >
                            <Check className="w-5 h-5 text-accent-green" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {ctaText && (
                <div className="text-center mt-12">
                    <Button size="lg" href={ctaHref}>
                        {ctaText}
                    </Button>
                </div>
            )}
        </Section>
    );
};

export default Timeline;
