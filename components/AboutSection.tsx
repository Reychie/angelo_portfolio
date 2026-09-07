'use client';

import type { Section } from '@/lib/types';

interface AboutSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <section
      className="relative min-h-full py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0f172a 0%, #1a2d5a 50%, #0f172a 100%)',
        isolation: 'isolate',
      }}
    >
      {/* ═══ BACKGROUND LAYER ═══ */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Large blue circle left */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            left: '-8rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '24rem',
            height: '24rem',
            borderRadius: '9999px',
            opacity: 0.1,
            background: 'radial-gradient(circle, #1e40af, transparent 70%)',
            animationDuration: '8s',
          }}
        />
        {/* Dashed rotating arc top-right */}
        <div
          className="animate-rotate-slow"
          style={{
            position: 'absolute',
            top: '-5rem',
            right: '-5rem',
            width: '20rem',
            height: '20rem',
            borderRadius: '9999px',
            border: '2px dashed #d4af37',
            opacity: 0.1,
            animationDuration: '20s',
          }}
        />
        {/* Dashed rotating arc bottom-left */}
        <div
          className="animate-rotate-slow"
          style={{
            position: 'absolute',
            bottom: '-5rem',
            left: '-5rem',
            width: '15rem',
            height: '15rem',
            borderRadius: '9999px',
            border: '1px dashed #3b82f6',
            opacity: 0.1,
            animationDuration: '15s',
            animationDirection: 'reverse',
          }}
        />
        {/* Horizontal glow line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '1px',
          opacity: 0.1,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
        }} />
      </div>

      {/* ═══ CONTENT LAYER ═══ */}
      <div
        className="max-w-6xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Section heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            About{' '}
            <span style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px #d4af37' }}>Me</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#d4af37' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #3b82f6, transparent)' }} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Photo placeholder */}
          <div className="animate-slideInLeft flex justify-center">
            <div className="relative group">
              <div
                className="absolute -inset-3 rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                style={{ background: 'linear-gradient(135deg, #1e40af, #d4af37)', filter: 'blur(16px)' }}
              />
              <div
                className="relative rounded-2xl p-1"
                style={{ background: 'linear-gradient(135deg, #d4af37, #1e40af, #d4af37)' }}
              >
                <div
                  className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: 'linear-gradient(145deg, #0d1b3e, #1a2d5a)' }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="w-28 h-28 rounded-full border-4 flex items-center justify-center"
                      style={{ borderColor: 'rgba(212,175,55,0.5)', background: 'rgba(30,64,175,0.3)' }}
                    >
                      <svg className="w-14 h-14" style={{ color: '#93c5fd' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium" style={{ color: '#64748b' }}>Your Photo Here</p>
                  </div>
                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 rounded-tl" style={{ borderColor: '#d4af37' }} />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 rounded-br" style={{ borderColor: '#d4af37' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="animate-slideInRight space-y-6">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#ffffff' }}>
              I&apos;m a passionate full-stack developer with over 5 years of experience building web applications. My journey started with a curiosity about how things work, which evolved into a career dedicated to creating elegant solutions for complex problems.
            </p>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#ffffff' }}>
              I specialize in modern web technologies and love working with React, Node.js, and cloud platforms. When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { label: 'Years Exp.', value: '5+', color: '#3b82f6' },
                { label: 'Projects', value: '50+', color: '#d4af37' },
                { label: 'Clients', value: '20+', color: '#3b82f6' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl border hover-lift transition-all duration-300"
                  style={{ background: 'rgba(30,64,175,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}
                >
                  <p className="text-2xl md:text-3xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs mt-1 font-medium" style={{ color: '#94a3b8' }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onNavigate?.('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm hover-scale transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', color: '#ffffff' }}
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
