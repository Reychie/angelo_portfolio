'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor showCursor={true} />
      <Header />

      <main>
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

      <footer className="py-8 text-center border-t" style={{ background: '#060d1f', borderColor: 'rgba(59,130,246,0.15)' }}>
        <p className="text-sm font-medium" style={{ color: '#ffffff' }}>
          &copy; 2026 <span style={{ color: '#d4af37' }}>Angelo Reychie Alejo</span>. Crafted with care and code.
        </p>
      </footer>
    </>
  );
}
