import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section';
import Card from '../ui/Card';

const TestimonialSlider = ({ testimonials, title, subtitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <Section background="gradient-blue">
            <SectionHeader title={title} subtitle={subtitle} />

            <div className="max-w-4xl mx-auto relative">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                    >
                        <Card variant="glass-strong" hover={false} className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                {/* Avatar Placeholder */}
                                <div className="w-20 h-20 bg-gradient-primary rounded-full flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>

                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-lg md:text-xl text-dark-text leading-relaxed mb-6 italic">
                                        "{testimonials[currentIndex].quote}"
                                    </p>

                                    <div>
                                        <p className="font-semibold text-dark-text text-lg">
                                            {testimonials[currentIndex].name}
                                            {testimonials[currentIndex].age && (
                                                <span className="text-dark-text-secondary text-base ml-2">
                                                    ({testimonials[currentIndex].age})
                                                </span>
                                            )}
                                        </p>
                                        {testimonials[currentIndex].role && (
                                            <p className="text-accent-purple text-sm mt-1">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        )}
                                        {testimonials[currentIndex].projectType && (
                                            <p className="text-dark-text-secondary text-sm mt-1">
                                                {testimonials[currentIndex].projectType}
                                                {testimonials[currentIndex].earnings && (
                                                    <span className="text-accent-green font-semibold ml-2">
                                                        • {testimonials[currentIndex].earnings}
                                                    </span>
                                                )}
                                            </p>
                                        )}
                                        {testimonials[currentIndex].company && (
                                            <p className="text-dark-text-secondary text-sm mt-1">
                                                {testimonials[currentIndex].company}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 bg-dark-secondary border border-dark-border rounded-full flex items-center justify-center hover:border-accent-purple hover:bg-accent-purple/10 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5 text-dark-text" />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-accent-purple w-8'
                                        : 'bg-dark-border hover:bg-accent-purple/50'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="w-10 h-10 bg-dark-secondary border border-dark-border rounded-full flex items-center justify-center hover:border-accent-purple hover:bg-accent-purple/10 transition-all"
                    >
                        <ChevronRight className="w-5 h-5 text-dark-text" />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default TestimonialSlider;
