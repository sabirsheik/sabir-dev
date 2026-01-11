
import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading: React.FC<{ children: React.ReactNode; subtitle?: string; label?: string }> = ({ children, subtitle, label }) => (
  <div className="mb-20 lg:mb-32">
    {label && (
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="inline-block text-[10px] font-black tracking-[0.5em] text-zinc-400 uppercase mb-8"
      >
        // {label}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tighter leading-[0.8] mb-10"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-zinc-500 max-w-3xl text-lg md:text-2xl font-light italic"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const FloatingChip: React.FC<{ children: React.ReactNode; icon?: React.ReactNode; delay?: number; x?: number; y?: number }> = ({ children, icon, delay = 0, x = 0, y = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
    transition={{ 
      opacity: { delay, duration: 0.8 },
      scale: { delay, duration: 0.8 },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 } 
    }}
    className="absolute z-20 hidden lg:flex items-center gap-3 px-5 py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className="p-1.5 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-lg">
      {icon}
    </div>
    <span className="text-[9px] font-black tracking-widest uppercase whitespace-nowrap">{children}</span>
  </motion.div>
);

export const Tooltip: React.FC<{ children: React.ReactNode; text: string }> = ({ children, text }) => (
  <div className="group relative">
    {children}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[8px] font-black tracking-widest uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900 dark:border-t-white" />
    </div>
  </div>
);
