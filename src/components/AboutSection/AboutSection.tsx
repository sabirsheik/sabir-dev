
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../Common/UI';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-48 lg:py-64 px-6 md:px-12 lg:px-24 bg-zinc-50/50 dark:bg-zinc-900/10">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading label="01. About" subtitle="Focusing on sub-millisecond efficiency and structural integrity for full-stack web applications.">
          Systems-First <br /> Engineering.
        </SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 mt-20 lg:mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 text-2xl md:text-3xl lg:text-4xl text-zinc-500 font-light leading-snug"
          >
            <p>
               I design systems with a focus on <span className="text-zinc-950 dark:text-zinc-100 font-bold underline decoration-zinc-300 underline-offset-4">data integrity</span>, long-term stability, and scalable architecture, ensuring applications stay reliable as they grow.
            </p>
            <p>
              As a developer, I have standardized zero-trust security and high-uptime architectures across 20+ projects.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-16 border-t border-zinc-200 dark:border-zinc-800">
              <div className="space-y-2">
                <p className="text-5xl md:text-7xl font-black tracking-tighter">02+</p>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Total_Years</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl md:text-7xl font-black tracking-tighter">20+</p>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Deployments</p>
              </div>
              <div className="space-y-2">
                <p className="text-5xl md:text-7xl font-black tracking-tighter">90+</p>
                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">Stability%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[4rem] lg:rounded-[6rem] overflow-hidden bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 group"
          >
            <div className="absolute inset-0 p-3">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=85&w=1400" 
                alt="Infrastructure" 
                className="w-full h-full object-cover rounded-[3.5rem] lg:rounded-[5.5rem] group-hover:grayscale-0 transition-all duration-1000 group-hover:opacity-100"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-12 left-12 flex items-center gap-6">
              <div className="p-4 bg-white text-black rounded-2xl shadow-xl">
                 <ShieldCheck size={32} />
              </div>
              <h4 className="text-3xl font-black text-white tracking-tight uppercase">Enterprise <br /> Security</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
