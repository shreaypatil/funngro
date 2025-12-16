import { motion } from 'framer-motion';

const Card = ({
    children,
    variant = 'default',
    hover = true,
    className = '',
    ...props
}) => {
    const variants = {
        default: 'bg-dark-secondary border border-dark-border/30',
        glass: 'glass',
        'glass-strong': 'glass-strong',
        gradient: 'bg-gradient-card border border-dark-border/50',
    };

    const baseClasses = `rounded-card p-6 transition-all duration-300 ${variants[variant]}`;
    const hoverClasses = hover ? 'hover:border-accent-purple/50 hover:shadow-glow cursor-pointer' : '';

    return (
        <motion.div
            className={`${baseClasses} ${hoverClasses} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={hover ? { y: -5 } : {}}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
