import * as React from "react";
import { motion } from "framer-motion";

const progressBar = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const progressDot = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const ProgressBar = () => (
    <motion.ul
        className="progressBar"
        variants={progressBar}
        initial="hidden"
        animate="visible"
    >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <motion.li key={index} className="progressDot" variants={progressDot} />
        ))}
    </motion.ul>
);
