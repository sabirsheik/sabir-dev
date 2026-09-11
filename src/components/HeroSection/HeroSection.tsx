
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Zap, Brain, Rocket } from 'lucide-react';
import { FloatingChip, Tooltip } from '../Common/UI';

export const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <header id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-24 lg:pt-32">
      <div className="max-w-screen-2xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-6 mb-10"
          >
            <div className="w-16 h-[1px] bg-zinc-900 dark:bg-white" />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-zinc-400">FULLSTACK_DEVELOPER.</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter leading-[0.8] mb-12"
          >
            SABIR <br />
            <span className="text-zinc-200 dark:text-zinc-900 italic underline decoration-1 underline-offset-[20px]">ALI.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-2xl md:text-3xl lg:text-4xl text-zinc-400 font-light leading-snug mb-16"
          >
            Building <span className="text-zinc-950 dark:text-zinc-100 font-bold italic">resilient web applications</span> and high-concurrency systems for the global enterprise.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-8 items-center mb-2"
          >
            <a href="#projects" className="group px-12 py-8 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-2xl active:scale-95">
              VIEW WORK <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-2" />
            </a>
            <a href="/Sabir CV.pdf" download className="group px-12 py-8 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white font-black rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-2xl active:scale-95 border-2 border-zinc-200 dark:border-zinc-800">
              DOWNLOAD RESUME
            </a>
            <div className="flex gap-8">
              <Tooltip text="GitHub Protocol">
                <a href="https://github.com/sabirsheik" className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors" target='_blank'><Github size={24} /></a>
              </Tooltip>
              <Tooltip text="LinkedIn Node">
                <a href="https://www.linkedin.com/in/sabir-ali-700854219/" className="text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors" target='_blank'><Linkedin size={24} /></a>
              </Tooltip>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 relative group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative w-full aspect-[4/5] max-w-[500px] mx-auto lg:ml-auto"
          >
            <FloatingChip icon={<Zap size={16}/>} delay={0.8} x={-10} y={15}>Modern Web Apps</FloatingChip>
            <FloatingChip icon={<Brain size={16}/>} delay={1} x={85} y={20}>MERN Developer</FloatingChip>
            <FloatingChip icon={<Rocket size={16}/>} delay={1.2} x={5} y={85}>Production Ready Application</FloatingChip>
            <div className="reveal-container relative w-full h-full rounded-[5rem] overflow-hidden border-[15px] border-zinc-50 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900 shadow-5xl transition-all duration-700 group-hover:border-zinc-200 dark:group-hover:border-zinc-800">
              <img 
                src="/Sabir.jpg" 
                alt="Sabir Ali Professional" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 scale-[1.1] group-hover:scale-100 group-hover:cursor-pointer"
              />

            </div>
            <div className="absolute -inset-10 -z-10 border-2 border-dashed border-zinc-100 dark:border-zinc-900 rounded-[6rem] opacity-20 group-hover:opacity-60 transition-all duration-1000 group-hover:rotate-3" />
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ y: yParallax }}
        className="absolute -right-40 -bottom-60 -z-0 opacity-[0.02] dark:opacity-[0.04] text-[40rem] font-black tracking-tighter select-none pointer-events-none italic"
      >
        MERN
      </motion.div>
    </header>
  );
};
