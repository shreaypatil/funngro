import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = () => {
    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial-purple opacity-50" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-radial-blue opacity-30" />

            <div className="container-custom px-4 md:px-8 relative z-10 py-20">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="gradient-text">Funngro</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-dark-text-secondary mb-12 leading-relaxed">
                        Connecting talented teenagers with innovative companies
                        <br />
                        <span className="text-accent-purple font-semibold">
                            Real Companies. Real Projects. Real Earnings.
                        </span>
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* Teen Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="glass-strong rounded-card p-8 cursor-pointer group"
                        >
                            <Link to="/teen" className="block">
                                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-blue transition-all">
                                    <Users className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-2xl font-bold text-dark-text mb-3">
                                    For Teens
                                </h2>

                                <p className="text-dark-text-secondary mb-6">
                                    Start earning, learning, and building your future today
                                </p>

                                <div className="flex items-center justify-center gap-2 text-accent-purple font-semibold group-hover:gap-4 transition-all">
                                    Explore Opportunities
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </motion.div>

                        {/* Company Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="glass-strong rounded-card p-8 cursor-pointer group"
                        >
                            <Link to="/company" className="block">
                                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-blue transition-all">
                                    <Building2 className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-2xl font-bold text-dark-text mb-3">
                                    For Companies
                                </h2>

                                <p className="text-dark-text-secondary mb-6">
                                    Access innovative, cost-effective youth talent
                                </p>

                                <div className="flex items-center justify-center gap-2 text-accent-purple font-semibold group-hover:gap-4 transition-all">
                                    Hire Teenlancers
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-16 flex flex-wrap justify-center gap-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">4,000+</div>
                            <div className="text-dark-text-secondary text-sm">Companies</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">5M+</div>
                            <div className="text-dark-text-secondary text-sm">Teenlancers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold gradient-text mb-1">1,000+</div>
                            <div className="text-dark-text-secondary text-sm">Live Projects</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
};

export default HomePage;
