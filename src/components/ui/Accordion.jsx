import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-dark-border/30 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-dark-card/30 transition-colors duration-200"
            >
                <span className="font-semibold text-dark-text pr-4">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-accent-purple flex-shrink-0" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 text-dark-text-secondary leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items, allowMultiple = false, className = '' }) => {
    const [openItems, setOpenItems] = useState([]);

    const handleToggle = (index) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(index)
                    ? prev.filter(i => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className={`bg-dark-secondary rounded-card border border-dark-border/30 overflow-hidden ${className}`}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems.includes(index)}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
