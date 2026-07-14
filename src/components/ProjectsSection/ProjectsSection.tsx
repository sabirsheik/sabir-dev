import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "../Common/UI";
import { PROJECTS } from "../../../data";

export const ProjectsSection: React.FC = () => {
  // Production-ready high-quality images from public folder
  const projectImages = [
    "/Ecommerce.png", // E-commerce
    "/AIworldTech.png", // AI / Crypto
  ];

  return (
    <section
      id="projects"
      className="py-48 lg:py-64 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading
          label="04. CASE STUDIES"
          subtitle="Deep-dives into high-performance web applications and software solutions."
        >
          Selected <br /> Works.
        </SectionHeading>

        <div className="mt-20 lg:mt-32 space-y-48 lg:space-y-64">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex-1 w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem]">
                <motion.div
                  className="relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 p-2 overflow-hidden"
                >
                  <img
                    src={projectImages[idx] || projectImages[0]}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-[2.5rem] lg:rounded-[3.5rem]"
                  />
                  {project.links?.live && (
                    <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 lg:p-6 bg-white text-black rounded-2xl lg:rounded-3xl shadow-3xl flex items-center justify-center"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  )}
                </motion.div>
              </div>
              <div className="flex-1 space-y-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-black tracking-[0.4em] text-zinc-400 uppercase">
                    CASE_0{idx + 1}
                  </span>
                  <h3 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-zinc-100 dark:border-zinc-900 pt-10">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                      Architecture
                    </h4>
                    <p className="text-zinc-500 text-lg lg:text-xl leading-relaxed font-light">
                      {project.architecture}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
                      Solution
                    </h4>
                    <p className="text-zinc-500 text-lg lg:text-xl leading-relaxed font-light">
                      {project.solution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-5 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-[9px] font-bold tracking-widest uppercase text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* More Projects Button */}
        <div className="mt-20 flex justify-end">
          <a
            href="https://github.com/sabirsheik" // replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-bold uppercase tracking-wider rounded-3xl shadow-lg hover:bg-zinc-900 hover:scale-105 transition-transform duration-300"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};
