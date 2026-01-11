
import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ProgressBar } from './components/Common/ProgressBar';
import { SectionNavigator } from './components/Common/SectionNavigator';
import { Navbar } from './components/Common/Navbar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SkillsSection } from './components/SkillsSection/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ 
      duration: 1.4, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
    });
    function raf(time: number) { 
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-700">
      <ProgressBar />
      <SectionNavigator />
      <Navbar dark={dark} setDark={setDark} />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default App;
