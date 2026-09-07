'use client';

import { useEffect, useState } from 'react';
import type { Section } from '@/lib/types';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navLinks: { id: Section; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleNavigate = (section: Section) => {
    onSectionChange(section);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-xl shadow-sm transition-all duration-300"
      style={{
        background: 'rgba(6,13,31,0.85)',
        borderBottom: '1px solid rgba(59,130,246,0.15)',
      }}
    >
      <div className="h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-3">
        {/* Logo + theme toggle */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => handleNavigate('home')}
            aria-label="Go to home"
            className="w-10 h-10 flex items-center justify-center rounded-xl font-black text-sm hover-scale transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1e40af, #d4af37)', color: '#ffffff' }}
          >
            AA
          </button>

          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full border transition-all duration-300 hover-scale"
            style={{ borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(30,64,175,0.15)', color: '#ffffff' }}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8-9h1M3 12h1m14.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop pill navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 rounded-full border p-1.5"
          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(59,130,246,0.2)' }}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigate(link.id)}
                aria-current={active ? 'page' : undefined}
                className="relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300"
                style={
                  active
                    ? { background: 'linear-gradient(135deg, #1e40af, #d4af37)', color: '#ffffff' }
                    : { color: '#94a3b8', background: 'transparent' }
                }
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Download CV + mobile menu trigger */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <a
            href="/resume.pdf"
            download
            className="group hidden sm:inline-flex items-center gap-2 px-4 md:px-5 h-10 md:h-11 rounded-full border font-bold text-xs md:text-sm transition-all duration-300 hover-scale"
            style={{ borderColor: 'rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.1)', color: '#ffffff' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#d4af37';
              (e.currentTarget as HTMLAnchorElement).style.color = '#0a0f1e';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(212,175,55,0.1)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
            }}
            aria-label="Download CV"
          >
            Download CV
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <div className="lg:hidden relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
              style={{ color: '#ffffff' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {menuOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="fixed inset-0 z-40 cursor-default"
                  style={{ background: 'transparent' }}
                />
                <div
                  className="absolute top-full right-0 mt-2 w-56 rounded-xl shadow-xl overflow-hidden z-50"
                  style={{ background: 'rgba(6,13,31,0.97)', border: '1px solid rgba(59,130,246,0.2)' }}
                >
                  {navLinks.map((link) => {
                    const active = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => handleNavigate(link.id)}
                        aria-current={active ? 'page' : undefined}
                        className="w-full text-left block px-4 py-3 text-sm font-semibold transition-all duration-200"
                        style={{
                          color: active ? '#d4af37' : '#ffffff',
                          borderLeft: active ? '2px solid #d4af37' : '2px solid transparent',
                          background: active ? 'rgba(212,175,55,0.08)' : 'transparent',
                        }}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-t"
                    style={{ color: '#d4af37', borderColor: 'rgba(59,130,246,0.15)' }}
                  >
                    Download CV
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
