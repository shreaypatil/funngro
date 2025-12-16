import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, MessageCircle, MessageSquare } from 'lucide-react';
import { sharedContent } from '../data/sharedContent';

const Footer = () => {
    const iconMap = {
        Instagram,
        Linkedin,
        Youtube,
        MessageCircle,
        MessageSquare,
    };

    return (
        <footer className="bg-dark-secondary border-t border-dark-border/30">
            <div className="container-custom px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-white">
                                F
                            </div>
                            <span className="text-2xl font-bold gradient-text">
                                {sharedContent.navigation.logo}
                            </span>
                        </div>
                        <p className="text-dark-text-secondary text-sm leading-relaxed mb-6">
                            {sharedContent.footer.about.description}
                        </p>
                        <p className="text-accent-purple font-semibold text-sm">
                            {sharedContent.footer.tagline}
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-dark-text mb-4">Company</h3>
                        <ul className="space-y-3">
                            {sharedContent.footer.links.company.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-dark-text-secondary hover:text-accent-purple transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold text-dark-text mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {sharedContent.footer.links.resources.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-dark-text-secondary hover:text-accent-purple transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & App Stores */}
                    <div>
                        <h3 className="font-semibold text-dark-text mb-4">Connect With Us</h3>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-6">
                            {sharedContent.footer.social.map((social) => {
                                const Icon = iconMap[social.icon];
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-dark-card border border-dark-border rounded-lg flex items-center justify-center text-dark-text-secondary hover:text-accent-purple hover:border-accent-purple transition-all"
                                        aria-label={social.name}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* App Store Badges */}
                        <div className="space-y-3">
                            <a
                                href={sharedContent.footer.appStores.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 hover:border-accent-purple transition-colors">
                                    <p className="text-xs text-dark-text-secondary">GET IT ON</p>
                                    <p className="text-sm font-semibold text-dark-text">Google Play</p>
                                </div>
                            </a>
                            <a
                                href={sharedContent.footer.appStores.appStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="bg-dark-card border border-dark-border rounded-lg px-4 py-2 hover:border-accent-purple transition-colors">
                                    <p className="text-xs text-dark-text-secondary">Download on the</p>
                                    <p className="text-sm font-semibold text-dark-text">App Store</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-dark-border/30">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-dark-text-secondary text-sm">
                            © {new Date().getFullYear()} Funngro. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            {sharedContent.footer.links.legal.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-dark-text-secondary hover:text-accent-purple transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
