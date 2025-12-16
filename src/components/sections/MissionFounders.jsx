import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import Card from '../ui/Card';
import { sharedContent } from '../../data/sharedContent';

const MissionFounders = () => {
    const { mission, founders } = sharedContent;

    return (
        <Section>
            <SectionHeader title={mission.title} />

            <motion.p
                className="text-center text-lg text-dark-text-secondary max-w-3xl mx-auto mb-16 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {mission.description}
            </motion.p>

            <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-dark-text mb-2">Meet Our Founders</h3>
                <p className="text-dark-text-secondary">The team behind Funngro</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {founders.map((founder, index) => (
                    <Card key={index} variant="glass">
                        <div className="text-center">
                            {/* Avatar Placeholder */}
                            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                                {founder.name.charAt(0)}
                            </div>

                            <h4 className="text-xl font-semibold text-dark-text mb-1">
                                {founder.name}
                            </h4>

                            <p className="text-accent-purple text-sm mb-4">
                                {founder.role}
                            </p>

                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-dark-text-secondary hover:text-accent-blue transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="text-sm">Connect on LinkedIn</span>
                            </a>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default MissionFounders;
