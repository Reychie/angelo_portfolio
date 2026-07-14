'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Check for system dark mode preference
    if (typeof window !== 'undefined') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedDarkMode = localStorage.getItem('darkMode');
      
      if (savedDarkMode !== null) {
        setIsDark(JSON.parse(savedDarkMode));
      } else {
        setIsDark(isDarkMode);
      }
    }
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <CustomCursor showCursor={showCursor} />
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      <main className="bg-background text-foreground transition-colors duration-300">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 py-8 text-center border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm">© 2024 Your Portfolio. Crafted with care and code.</p>
      </footer>
    </div>
  );
}
