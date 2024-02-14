"use client"
import { motion } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
}

const AnimatedDiv = ({
    className,
    delay=1,
    duration=1,
    children,
    y,
    x,
}: Props) => {

    return (
        <motion.div
            initial={{ y: y, x: x, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ delay: delay, duration: duration, ease:"easeInOut" }}
            viewport={{ once: true }}
            className={`${className}`}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv;