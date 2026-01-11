import React from "react";
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react";
import { Tooltip } from "../Common/UI";

export const Footer: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-32 mb-32">
          <div className="space-y-12">
            <a
              href="#"
              className="text-4xl font-black tracking-tighter mono block"
            >
              SABIR<span className="text-zinc-400">_ALI</span>
            </a>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xs">
              Architecting high-concurrency systems and resilient web
              applications for the global market.
            </p>
            <div className="flex gap-6">
              <Tooltip text="GitHub Protocol">
                <a
                  href="https://github.com/sabirsheik"
                  className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all duration-500"
                  target="_blank"
                >
                  <Github size={20} />
                </a>
              </Tooltip>
              <Tooltip text="LinkedIn Node">
                <a
                  href="https://www.linkedin.com/in/sabir-ali-837501340/"
                  className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all duration-500"
                  target="_blank"
                >
                  <Linkedin size={20} />
                </a>
              </Tooltip>
              <Tooltip text="Email Protocol">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=sabirsheik12787@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center
               hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all duration-500"
                >
                  <Mail size={20} />
                </a>
              </Tooltip>
            </div>
          </div>

          <div className="space-y-10">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
              // NAVIGATION
            </h5>
            <ul className="space-y-6">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-xl font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors uppercase tracking-tight"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-10">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">
              // LOCATION
            </h5>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-medium tracking-tight uppercase">
                  Pakistan
                </p>
                <p className="text-zinc-500 font-light italic mt-2">
                  Work
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mt-10 mb-4">
                  Local Time
                </p>
                <p className="text-4xl font-black mono tracking-tighter">
                  {new Date().toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Karachi",
                  })}{" "}
                  PKT
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end gap-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group w-20 h-20 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-950 dark:hover:bg-white hover:text-white dark:hover:text-zinc-950 transition-all duration-700"
            >
              <ChevronUp
                size={28}
                className="group-hover:-translate-y-2 transition-transform"
              />
            </button>
            <div className="text-left md:text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-4">
                Availability
              </p>
              <div className="flex items-center gap-4 justify-start md:justify-end">
                <span className="text-xl font-medium tracking-tight uppercase">
                  Open for new Project
                </span>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="text-[10px] font-black tracking-[0.5em] mono text-zinc-300 dark:text-zinc-800 uppercase italic">
              SABIR_ALI // FULLSTACK_DEV
            </p>
            <p className="text-[9px] text-zinc-400 font-medium tracking-[0.3em] uppercase">
              &copy; {new Date().getFullYear()} ALL NODES OPERATIONAL.
              ENCRYPTED.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-12 text-[9px] font-black uppercase tracking-[0.7em] text-zinc-200 dark:text-zinc-800">
            <span>MERN</span>
            <span>•</span>
            <span>SECURITY</span>
            <span>•</span>
            <span>SCALE</span>
            <span>•</span>
            <span>Developer</span>
          </div>

          <div className="flex gap-4">
            <div className="px-6 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-400">
              SYSTEM_STATUS: STABLE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
