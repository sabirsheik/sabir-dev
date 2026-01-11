
import React, { useState, useEffect } from 'react';

export const SectionNavigator: React.FC = () => {
  const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-6 lg:left-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8">
      {sections.map((s) => (
        <a 
          key={s} 
          href={`#${s}`}
          className="group relative flex items-center justify-center"
        >
          <div className={`w-1 h-1 rounded-full transition-all duration-500 ${active === s ? 'bg-zinc-950 dark:bg-white scale-[3]' : 'bg-zinc-300 dark:bg-zinc-800'}`} />
          <span className="absolute left-8 opacity-0 group-hover:opacity-100 transition-all text-[8px] font-black tracking-widest uppercase text-zinc-400 pointer-events-none whitespace-nowrap">
            {s}
          </span>
        </a>
      ))}
    </div>
  );
};
