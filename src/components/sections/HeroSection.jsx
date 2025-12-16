import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { sharedContent } from '../../data/sharedContent';

const HeroSection = ({ content }) => {
    const { headline, subtext, primaryCTA, secondaryCTA } = content;
    const stats = sharedContent.stats;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial-purple opacity-50" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial-blue opacity-30" />

            <div className="container-custom px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="gradient-text text-shadow">
                                {headline}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-dark-text-secondary mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {subtext}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button size="lg" href={`#${primaryCTA.action}`}>
                                {primaryCTA.text}
                            </Button>
                            <Button variant="secondary" size="lg" href={`#${secondaryCTA.action}`}>
                                {secondaryCTA.text}
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Illustration Placeholder */}
                    <motion.div
                        className="hidden lg:flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <div className="relative w-full h-96">
                            <motion.div
                                className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.3, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <div className="w-64 h-64 bg-gradient-primary rounded-2xl opacity-30 animate-float" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Strip */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                            {stats.companies}
                        </div>
                        <div className="text-dark-text-secondary text-sm">Companies</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                            {stats.categories}
                        </div>
                        <div className="text-dark-text-secondary text-sm">Categories</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                            {stats.teenlancers}
                        </div>
                        <div className="text-dark-text-secondary text-sm">Teenlancers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                            {stats.projects}
                        </div>
                        <div className="text-dark-text-secondary text-sm">Live Projects</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
