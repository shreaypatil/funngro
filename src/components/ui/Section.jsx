import { motion } from 'framer-motion';

const Section = ({
    children,
    className = '',
    background = 'default',
    id,
    ...props
}) => {
    const backgrounds = {
        default: '',
        'gradient-purple': 'bg-gradient-radial-purple',
        'gradient-blue': 'bg-gradient-radial-blue',
        dark: 'bg-dark-secondary',
    };

    return (
        <section
            id={id}
            className={`section ${backgrounds[background]} ${className}`}
            {...props}
        >
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
};

export const SectionHeader = ({
    title,
    subtitle,
    centered = true,
    className = ''
}) => {
    return (
        <motion.div
            className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {subtitle && (
                <p className="text-accent-purple font-semibold mb-3 uppercase tracking-wider text-sm">
                    {subtitle}
                </p>
            )}
            <h2 className="text-section font-bold text-dark-text">
                {title}
            </h2>
        </motion.div>
    );
};

export default Section;
