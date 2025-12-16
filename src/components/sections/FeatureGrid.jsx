import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Card from '../ui/Card';
import Section, { SectionHeader } from '../ui/Section';

const FeatureGrid = ({ content }) => {
    const { title, subtitle, features } = content;

    return (
        <Section background="gradient-purple">
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                    const Icon = Icons[feature.icon];

                    return (
                        <Card key={index} variant="glass">
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                                    {Icon && <Icon className="w-8 h-8 text-white" />}
                                </div>
                                <h3 className="text-xl font-semibold text-dark-text mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-dark-text-secondary leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
};

export default FeatureGrid;
