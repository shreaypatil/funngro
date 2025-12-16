import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { sharedContent } from '../data/sharedContent';
import Button from './ui/Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getCTA = () => {
        if (location.pathname === '/teen') {
            return { text: 'Earn Now', href: '#download' };
        } else if (location.pathname === '/company') {
            return { text: 'Hire Teenlancer', href: '#register' };
        }
        return { text: 'Get Started', href: '/teen' };
    };

    const cta = getCTA();

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border/50 shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className="container-custom px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                            F
                        </div>
                        <span className="text-2xl font-bold gradient-text hidden sm:block">
                            {sharedContent.navigation.logo}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {sharedContent.navigation.links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-accent-purple ${location.pathname === link.path
                                        ? 'text-accent-purple'
                                        : 'text-dark-text-secondary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button href={cta.href} size="md">
                            {cta.text}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-dark-text hover:text-accent-purple transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-dark-secondary/95 backdrop-blur-xl border-t border-dark-border/50"
                    >
                        <div className="container-custom px-4 py-6 space-y-4">
                            {sharedContent.navigation.links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-2 text-base font-medium transition-colors ${location.pathname === link.path
                                            ? 'text-accent-purple'
                                            : 'text-dark-text-secondary hover:text-dark-text'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href={cta.href} className="w-full justify-center">
                                {cta.text}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
