
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-[4px] bg-zinc-950 dark:bg-white z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};
