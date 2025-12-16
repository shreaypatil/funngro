import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';

const CategoryGrid = ({ content }) => {
    const { title, subtitle, topCategories, detailedCategories } = content;

    return (
        <Section>
            <SectionHeader title={title} subtitle={subtitle} />

            {/* Top Categories Pills */}
            {topCategories && (
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {topCategories.map((category, index) => {
                        const Icon = Icons[category.icon];
                        return (
                            <motion.div
                                key={index}
                                className="px-6 py-3 bg-dark-secondary border border-accent-purple/30 rounded-full flex items-center gap-2 hover:bg-accent-purple/10 hover:border-accent-purple transition-all cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {Icon && <Icon className="w-4 h-4 text-accent-purple" />}
                                <span className="text-sm font-medium text-dark-text">{category.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            {/* Detailed Categories Grid */}
            {detailedCategories && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {detailedCategories.map((category, index) => {
                        const Icon = Icons[category.icon];

                        return (
                            <motion.div
                                key={index}
                                className="card-hover"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-card rounded-xl flex items-center justify-center flex-shrink-0">
                                        {Icon && <Icon className="w-6 h-6 text-accent-purple" />}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-dark-text mb-2">
                                            {category.name}
                                        </h3>
                                        <p className="text-dark-text-secondary text-sm leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </Section>
    );
};

export default CategoryGrid;
