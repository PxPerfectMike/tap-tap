import * as React from "react";
import { motion } from "framer-motion";

export const MainButton = () => (
  <motion.div
    className="main-button"
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
  />
);
