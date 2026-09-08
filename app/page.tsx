'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import SectionTransition from '@/components/SectionTransition';
import type { Section } from '@/lib/types';

const BlackHoleBackground = dynamic(() => import('@/components/BlackHoleBackground'), {
  ssr: false,
});

const VALID_SECTIONS: Section[] = ['home', 'work', 'experience', 'about', 'contact'];

function isSection(value: string): value is Section {
  return VALID_SECTIONS.includes(value as Section);
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'projects') {
      setActiveSection('work');
      return;
    }
    if (isSection(hash)) {
      setActiveSection(hash);
    }
  }, []);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    window.history.replaceState(null, '', section === 'home' ? '/' : `#${section}`);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavigate={handleSectionChange} />;
      case 'work':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'about':
        return <AboutSection onNavigate={handleSectionChange} />;
      case 'contact':
        return (
          <>
            <ContactSection />
            <Footer />
          </>
        );
      default:
        return <HeroSection onNavigate={handleSectionChange} />;
    }
  };

  return (
    <>
      <BlackHoleBackground activeSection={activeSection} />
      <CustomCursor />
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main className="fixed inset-x-0 bottom-0 top-16 md:top-20 overflow-hidden">
        <SectionTransition sectionKey={activeSection}>{renderSection()}</SectionTransition>
      </main>
    </>
  );
}
