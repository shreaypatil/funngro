import { motion } from 'framer-motion';
import Section, { SectionHeader } from '../ui/Section';

const LogoGrid = ({ logos, title, subtitle }) => {
    return (
        <Section>
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {logos.map((logo, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center justify-center p-6 bg-dark-secondary rounded-lg border border-dark-border/30 hover:border-accent-purple/50 transition-all grayscale hover:grayscale-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        {/* Logo placeholder - in production, use actual logo images */}
                        <div className="text-dark-text-secondary font-semibold text-sm text-center">
                            {logo.name}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default LogoGrid;
