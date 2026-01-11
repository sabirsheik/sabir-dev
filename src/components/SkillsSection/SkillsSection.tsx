
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Binary, Globe, Cpu } from 'lucide-react';
import { SectionHeading } from '../Common/UI';
import { SKILLS } from '../../../data';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-48 lg:py-64 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading label="02. INFRASTRUCTURE" subtitle="Standardizing the selection of technologies for global scale delivery.">
          The Production <br /> Stack.
        </SectionHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 lg:mt-32">
          {SKILLS.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group p-10 rounded-[4rem] bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-700 hover:shadow-4xl"
            >
              <div className="mb-16 flex items-center justify-between">
                <h3 className="font-black text-2xl tracking-tighter uppercase">{cat.title}</h3>
                <div className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 transition-all duration-700 group-hover:bg-zinc-950 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-950">
                  {idx === 0 && <Layers size={22} />}
                  {idx === 1 && <Binary size={22} />}
                  {idx === 2 && <Globe size={22} />}
                  {idx === 3 && <Cpu size={22} />}
                </div>
              </div>
              <ul className="space-y-8">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center text-zinc-500 group/item">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 mr-6 transition-all group-hover/item:w-8 group-hover/item:bg-zinc-950 dark:group-hover/item:bg-zinc-100" />
                    <span className="text-xl font-medium transition-colors group-hover/item:text-zinc-950 dark:group-hover/item:text-zinc-100">{skill}</span>
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
