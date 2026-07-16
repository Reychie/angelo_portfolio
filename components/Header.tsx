'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
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
    setActiveLink(href.replace('#', ''));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-sm transition-all duration-300"
      style={{
        background: 'rgba(6,13,31,0.85)',
        borderBottom: '1px solid rgba(59,130,246,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="relative group text-lg md:text-xl font-black cursor-pointer hover-scale transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #60a5fa, #d4af37, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Angelo Reychie Alejo
              <span
                className="absolute -bottom-1 left-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ width: '100%', background: 'linear-gradient(90deg, #60a5fa, #d4af37)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-semibold transition-all duration-300 group"
                style={{
                  color: activeLink === link.href.replace('#', '') ? '#d4af37' : '#ffffff',
                }}
                onMouseEnter={e => {
                  if (activeLink !== link.href.replace('#', '')) {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#d4af37';
                  }
                }}
                onMouseLeave={e => {
                  if (activeLink !== link.href.replace('#', '')) {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                  }
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-4 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: activeLink === link.href.replace('#', '') ? 'calc(100% - 32px)' : '0',
                    background: 'linear-gradient(90deg, #1e40af, #d4af37)',
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <details className="relative group">
              <summary className="list-none cursor-pointer p-2 rounded-lg transition-colors" style={{ color: '#ffffff' }}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div
                className="absolute top-full right-0 mt-2 w-48 rounded-xl shadow-xl overflow-hidden"
                style={{ background: 'rgba(6,13,31,0.97)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block px-4 py-3 text-sm font-semibold transition-all duration-200"
                    style={{
                      color: activeLink === link.href.replace('#', '') ? '#d4af37' : '#ffffff',
                      borderLeft: activeLink === link.href.replace('#', '') ? '2px solid #d4af37' : '2px solid transparent',
                      background: activeLink === link.href.replace('#', '') ? 'rgba(212,175,55,0.08)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>

        {/* Compact mobile tab row */}
        <div className="hidden sm:flex lg:hidden mt-3 overflow-x-auto gap-2 -mx-6 px-6 scrollbar-hide pb-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="whitespace-nowrap px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 flex-shrink-0"
              style={
                activeLink === link.href.replace('#', '')
                  ? { background: 'linear-gradient(135deg, #1e40af, #d4af37)', color: '#ffffff' }
                  : { background: 'rgba(30,64,175,0.15)', color: '#94a3b8', border: '1px solid rgba(59,130,246,0.2)' }
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
