'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import SectionTransition from '@/components/SectionTransition';
import type { Section } from '@/lib/types';
import { resolveSection } from '@/lib/types';

const SpaceBackground = dynamic(() => import('@/components/space/SpaceBackground'), {
  ssr: false,
  loading: () => <div className="space-background" aria-hidden="true" />,
});

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '');
      const next = resolveSection(hash);
      if (next) setActiveSection(next);
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    window.addEventListener('popstate', applyHash);
    return () => {
      window.removeEventListener('hashchange', applyHash);
      window.removeEventListener('popstate', applyHash);
    };
  }, []);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    const nextUrl = section === 'home' ? window.location.pathname : `${window.location.pathname}#${section}`;
    const currentUrl = `${window.location.pathname}${window.location.hash}`;
    if (currentUrl !== nextUrl) {
      window.history.pushState(null, '', nextUrl);
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavigate={handleSectionChange} />;
      case 'about':
        return <AboutSection onNavigate={handleSectionChange} />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
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
      <SpaceBackground activeSection={activeSection} />
      <CustomCursor />
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main className="fixed inset-0 overflow-hidden">
        <SectionTransition sectionKey={activeSection}>{renderSection()}</SectionTransition>
      </main>
    </>
  );
}
