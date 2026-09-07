'use client';

import { useState } from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import type { Section } from '@/lib/types';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <>
      <CustomCursor showCursor={true} />

      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="fixed inset-x-0 bottom-0 top-20 overflow-hidden">
        <div key={activeSection} className="h-full w-full overflow-y-auto animate-page-enter">
          {activeSection === 'home' && <HeroSection onNavigate={setActiveSection} />}

          {activeSection === 'about' && <AboutSection onNavigate={setActiveSection} />}

          {activeSection === 'skills' && <SkillsSection />}

          {activeSection === 'experience' && <ExperienceSection />}

          {activeSection === 'projects' && <ProjectsSection />}

          {activeSection === 'contact' && (
            <>
              <ContactSection />
              <Footer />
            </>
          )}
        </div>
      </main>
    </>
  );
}
