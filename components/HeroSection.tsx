'use client';

import { useEffect, useState } from 'react';
import type { Section } from '@/lib/types';

interface HeroSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-full flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 40%, #0a1628 70%, #0f172a 100%)', isolation: 'isolate' }}>
      {/* ===== ANIMATED BACKGROUND DESIGN ===== */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(30,64,175,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,64,175,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 animate-float" style={{ background: 'radial-gradient(circle, #1e40af 0%, transparent 70%)', animationDuration: '7s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-15 animate-float" style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)', animationDuration: '9s', animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full opacity-10 animate-float" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', animationDuration: '11s', animationDelay: '4s' }} />

        {/* Diagonal gold accent lines */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #d4af37 0px, #d4af37 1px, transparent 0px, transparent 50%)',
          backgroundSize: '80px 80px',
        }} />

        {/* Bottom wave shape */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10" style={{
          background: 'linear-gradient(to top, #d4af37, transparent)',
        }} />
      </div>

      {/* ===== MAIN TWO-COLUMN LAYOUT ===== */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-16" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ===== LEFT COLUMN — PHOTO ===== */}
          <div className={`flex justify-center lg:justify-start order-2 lg:order-1 ${mounted ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'linear-gradient(135deg, #1e40af, #d4af37, #3b82f6)', filter: 'blur(12px)' }} />

              {/* Gold border frame */}
              <div className="relative rounded-3xl p-1" style={{ background: 'linear-gradient(135deg, #d4af37, #1e40af, #d4af37)' }}>
                <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #0d1b3e, #1a2d5a)' }}>
                  {/* Photo placeholder with professional look */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-32 h-32 rounded-full flex items-center justify-center border-4 border-accent/50" style={{ background: 'linear-gradient(135deg, #1e40af40, #d4af3740)' }}>
                      <svg className="w-16 h-16 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium" style={{ color: '#94a3b8' }}>Your Photo Here</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent/70 rounded-tl-md" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent/70 rounded-tr-md" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent/70 rounded-bl-md" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent/70 rounded-br-md" />
                </div>
              </div>

              {/* Floating badge — Years */}
              <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl shadow-xl border border-accent/30" style={{ background: 'linear-gradient(135deg, #0d1b3e, #1a2d5a)' }}>
                <p className="text-2xl font-black text-white leading-none">5+</p>
                <p className="text-xs font-semibold" style={{ color: '#d4af37' }}>Years Exp.</p>
              </div>

              {/* Floating badge — Projects */}
              <div className="absolute -top-4 -left-4 px-4 py-3 rounded-xl shadow-xl border border-primary/30" style={{ background: 'linear-gradient(135deg, #0d1b3e, #1a2d5a)' }}>
                <p className="text-2xl font-black text-white leading-none">50+</p>
                <p className="text-xs font-semibold" style={{ color: '#3b82f6' }}>Projects</p>
              </div>
            </div>
          </div>

          {/* ===== RIGHT COLUMN — TEXT CONTENT ===== */}
          <div className={`order-1 lg:order-2 space-y-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`}>
            {/* Hello greeting */}
            <div>
              <p className="text-base md:text-lg font-semibold tracking-widest uppercase mb-2" style={{ color: '#d4af37' }}>
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-white">
                Angelo
                <span className="block" style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #d4af37' }}>Reychie</span>
              </h1>
            </div>

            {/* Role title */}
            <div>
              <div className="inline-flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-accent" />
                <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#93c5fd' }}>
                  Full-Stack Developer
                </h2>
                <div className="h-px w-8 bg-accent" />
              </div>
              <p className="text-base md:text-lg" style={{ color: '#93c5fd', opacity: 0.8 }}>
                UI/UX Enthusiast &bull; Problem Solver &bull; Innovator
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#cbd5e1' }}>
              I craft beautiful, functional web experiences with modern technologies. Specialized in creating responsive designs and scalable applications that solve real-world problems with elegance and precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                type="button"
                onClick={() => onNavigate?.('projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-base rounded-xl overflow-hidden shadow-lg hover-lift transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', color: '#ffffff' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #3b82f6, #d4af37)' }} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-base rounded-xl border-2 hover-lift transition-all duration-300"
                style={{ borderColor: '#d4af37', color: '#ffffff', background: 'rgba(212,175,55,0.1)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#d4af37';
                  (e.currentTarget as HTMLButtonElement).style.color = '#0a0f1e';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(212,175,55,0.1)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#ffffff';
                }}
              >
                Get In Touch
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 hover-scale overflow-hidden"
                style={{ borderColor: 'rgba(59,130,246,0.4)', background: 'rgba(30,64,175,0.2)', color: '#ffffff' }}
                aria-label="GitHub">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }} />
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C19.138 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 hover-scale overflow-hidden"
                style={{ borderColor: 'rgba(212,175,55,0.4)', background: 'rgba(212,175,55,0.1)', color: '#ffffff' }}
                aria-label="Facebook">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }} />
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300 hover-scale overflow-hidden"
                style={{ borderColor: 'rgba(59,130,246,0.4)', background: 'rgba(30,64,175,0.2)', color: '#ffffff' }}
                aria-label="LinkedIn">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }} />
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
