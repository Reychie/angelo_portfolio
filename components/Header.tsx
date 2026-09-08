'use client';

import { useEffect, useState } from 'react';
import type { Section } from '@/lib/types';
import { site } from '@/lib/site';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navLinks: { id: Section; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C19.138 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleNavigate = (section: Section) => {
    onSectionChange(section);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 border-b border-border bg-[rgba(5,7,11,0.72)] backdrop-blur-xl">
      <div className="h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNavigate('home')}
          className="text-sm md:text-base font-semibold tracking-[0.18em] text-foreground hover-scale"
          aria-label="Go to home"
        >
          {site.shortName}
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const active = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigate(link.id)}
                aria-current={active ? 'page' : undefined}
                className={`px-3 py-2 text-sm interactive-link ${
                  active ? 'text-accent' : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href={site.resumePath}
            download
            className="ml-2 px-3 py-2 text-sm text-muted hover:text-accent interactive-link"
            aria-label="Download resume"
          >
            Resume ↗
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-border-strong interactive-link hover-scale"
          >
            <GitHubIcon />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border text-muted hover:text-foreground hover:border-border-strong interactive-link hover-scale"
          >
            <LinkedInIcon />
          </a>

          <div className="lg:hidden relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border text-foreground"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            {menuOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMenuOpen(false)}
                  className="fixed inset-0 z-40"
                />
                <div className="absolute top-full right-0 mt-2 w-52 rounded-xl border border-border bg-[rgba(8,10,16,0.96)] shadow-2xl overflow-hidden z-50">
                  {navLinks.map((link) => {
                    const active = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        type="button"
                        onClick={() => handleNavigate(link.id)}
                        aria-current={active ? 'page' : undefined}
                        className="w-full text-left px-4 py-3 text-sm interactive-link"
                        style={{ color: active ? 'var(--accent)' : 'var(--foreground)' }}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                  <a
                    href={site.resumePath}
                    download
                    className="block px-4 py-3 text-sm border-t border-border text-accent"
                  >
                    Resume ↗
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
