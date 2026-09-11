
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../Common/UI';
import { EXPERIENCES } from '../../../data';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 lg:py-64 px-6 md:px-12 lg:px-24 bg-zinc-50/50 dark:bg-zinc-900/10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="03. Experience" subtitle="Professional trajectory defined by technical impact and rapid delivery.">
          Professional <br /> History.
        </SectionHeading>
        
        <div className="mt-20 lg:mt-32">
          {EXPERIENCES.map((exp) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-12 pb-24 last:pb-0 border-l border-zinc-200 dark:border-zinc-900"
            >
              <div className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent opacity-20" />
              <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-zinc-950 dark:bg-white shadow-xl" />
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-2">{exp.role}</h3>
                  <p className="text-zinc-500 font-medium text-xl italic tracking-tight">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-[10px] font-black tracking-[0.3em] mono text-zinc-400 px-6 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full">{exp.period}</span>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-500 dark:text-zinc-400 leading-relaxed text-lg font-light">
                    <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 mt-2 mr-5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
