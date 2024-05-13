import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }} // Początkowe style animacji
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Końcowe style animacji
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
            }} // Czas trwania animacji
            style={{ width: '100%' }} // Ustawienie na 100% szerokości
        >
            {children}
        </motion.div>
    );
}

export default AnimatedComponent;