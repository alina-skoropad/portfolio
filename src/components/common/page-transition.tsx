"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25, // Збільшили зсув
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Трохи довше
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}