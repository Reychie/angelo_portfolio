'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveLink(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-700/50 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="relative group text-2xl md:text-3xl font-black bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent hover:from-primary-light hover:to-accent-light transition-all duration-300 hover-scale cursor-pointer"
            >
              {'<Dev />'}
              <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ width: '100%' }} />
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                  activeLink === link.href.replace('#', '')
                    ? 'text-primary dark:text-primary-light'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 ${
                  activeLink === link.href.replace('#', '') ? 'w-[calc(100%-32px)]' : 'w-0 group-hover:w-[calc(100%-32px)]'
                }`} />
              </a>
            ))}
          </nav>

          {/* Right section - Dark Mode & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative p-2.5 rounded-lg bg-neutral-100/50 dark:bg-neutral-800/50 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 hover-scale border border-neutral-200/50 dark:border-neutral-700/50 group"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity" />
              {isDark ? (
                <svg className="w-5 h-5 text-accent relative z-10 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.122a4 4 0 005.656-5.656l2.12 2.122a6 6 0 01-5.656 5.656zM9 16a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary relative z-10 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button - shown only on smaller screens */}
            <div className="lg:hidden flex items-center">
              <details className="group">
                <summary className="flex items-center cursor-pointer">
                  <button className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors" aria-label="Toggle menu">
                    <svg className="w-6 h-6 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </summary>
                
                {/* Mobile Menu Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 dark:bg-background/95 backdrop-blur-md rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-xl overflow-hidden">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`block px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        activeLink === link.href.replace('#', '')
                          ? 'bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light border-l-2 border-primary dark:border-primary-light'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 hover:text-primary dark:hover:text-primary-light'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Tabs - Alternative compact view */}
        <div className="hidden sm:flex lg:hidden mt-3 pb-2 overflow-x-auto gap-2 -mx-6 px-6 scrollbar-hide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 flex-shrink-0 ${
                activeLink === link.href.replace('#', '')
                  ? 'bg-gradient-to-r from-primary to-accent text-neutral-50 dark:text-neutral-900 shadow-md'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
