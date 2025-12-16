import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    onClick,
    href,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-button';

    const variants = {
        primary: 'bg-gradient-primary text-white hover:shadow-glow hover:scale-105',
        secondary: 'border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10 hover:shadow-glow',
        ghost: 'text-dark-text-secondary hover:text-dark-text hover:bg-dark-secondary',
        outline: 'border border-dark-border text-dark-text hover:border-accent-blue hover:text-accent-blue',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {children}
            {Icon && <Icon className="w-5 h-5" />}
            {!Icon && variant === 'primary' && <ArrowRight className="w-5 h-5" />}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={classes}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
