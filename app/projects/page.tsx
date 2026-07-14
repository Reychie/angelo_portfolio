'use client';

import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects-data';

export default function AllProjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #060d1f 0%, #0a0f1e 50%, #0d1b3e 100%)' }}>
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        {/* Radial glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle at top right, #d4af37, transparent 70%)' }} />
        {/* Radial glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle at bottom left, #1e40af, transparent 70%)' }} />
        {/* Scattered particles */}
        {[
          { top: '5%',  left: '10%', s: 4, c: '#d4af37', d: '0s' },
          { top: '15%', left: '80%', s: 3, c: '#3b82f6', d: '0.4s' },
          { top: '35%', left: '3%',  s: 2, c: '#60a5fa', d: '0.9s' },
          { top: '55%', left: '92%', s: 4, c: '#d4af37', d: '1.3s' },
          { top: '75%', left: '15%', s: 3, c: '#3b82f6', d: '1.8s' },
          { top: '88%', left: '70%', s: 2, c: '#d4af37', d: '2.1s' },
          { top: '45%', left: '50%', s: 2, c: '#60a5fa', d: '0.6s' },
          { top: '65%', left: '38%', s: 3, c: '#d4af37', d: '1.1s' },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full animate-pulse" style={{
            top: p.top, left: p.left, width: p.s, height: p.s,
            background: p.c, opacity: 0.5, animationDelay: p.d,
          }} />
        ))}
        {/* Horizontal accent lines */}
        {[15, 35, 55, 75].map((pct) => (
          <div key={pct} className="absolute left-0 right-0 h-px opacity-5" style={{
            top: `${pct}%`,
            background: 'linear-gradient(90deg, transparent, #3b82f6 30%, #d4af37 70%, transparent)',
          }} />
        ))}
        {/* Gold corner frame — top-left */}
        <div className="absolute top-6 left-6 w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-0.5 opacity-20" style={{ background: '#d4af37' }} />
          <div className="absolute top-0 left-0 w-0.5 h-full opacity-20" style={{ background: '#d4af37' }} />
        </div>
        {/* Gold corner frame — bottom-right */}
        <div className="absolute bottom-6 right-6 w-16 h-16">
          <div className="absolute bottom-0 right-0 w-full h-0.5 opacity-20" style={{ background: '#d4af37' }} />
          <div className="absolute bottom-0 right-0 w-0.5 h-full opacity-20" style={{ background: '#d4af37' }} />
        </div>
      </div>

      {/* ===== PAGE CONTENT ===== */}
      <div className="relative px-6 py-12 max-w-7xl mx-auto" style={{ zIndex: 1 }}>

        {/* Top bar — back button + heading */}
        <div className="flex items-center justify-between mb-14">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl border font-semibold text-sm transition-all duration-300 hover-scale"
            style={{
              background: 'rgba(30,64,175,0.12)',
              borderColor: 'rgba(59,130,246,0.3)',
              color: '#93c5fd',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(212,175,55,0.5)';
              (e.currentTarget as HTMLButtonElement).style.color = '#d4af37';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(59,130,246,0.3)';
              (e.currentTarget as HTMLButtonElement).style.color = '#93c5fd';
            }}
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>

          {/* Project count badge */}
          <span className="px-3 py-1 rounded-full text-xs font-bold border" style={{
            background: 'rgba(212,175,55,0.1)',
            borderColor: 'rgba(212,175,55,0.3)',
            color: '#d4af37',
          }}>
            {projects.length} Projects
          </span>
        </div>

        {/* Page heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            All <span style={{ color: '#d4af37' }}>Projects</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Every project built with passion, precision, and purpose — from concept to production.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#3b82f6' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
          </div>
        </div>

        {/* All project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className="group relative rounded-2xl overflow-hidden border hover-lift transition-all duration-300 animate-fadeInUp"
              style={{
                background: 'rgba(13,27,62,0.8)',
                borderColor: 'rgba(59,130,246,0.2)',
                animationDelay: `${index * 60}ms`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(212,175,55,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(59,130,246,0.2)'; }}
            >
              {/* Animated gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(90deg, #1e40af, #d4af37, #1e40af)' }} />

              {/* Icon area */}
              <div className="relative h-36 flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(30,64,175,0.15), rgba(212,175,55,0.05))' }}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,27,62,0.6))' }} />
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors" style={{ '--tw-text-opacity': 1 } as React.CSSProperties}>
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs font-semibold rounded" style={{
                      background: 'rgba(59,130,246,0.15)',
                      color: '#93c5fd',
                      border: '1px solid rgba(59,130,246,0.2)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: '#d4af37' }}>
                  View Project
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom — back to portfolio */}
        <div className="text-center mt-16">
          <button
            onClick={() => router.push('/')}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white hover-lift transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', boxShadow: '0 4px 20px rgba(59,130,246,0.25)' }}
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 text-center border-t" style={{ borderColor: 'rgba(59,130,246,0.1)' }}>
          <p className="text-xs font-medium" style={{ color: '#334155' }}>
            &copy; 2026 <span style={{ color: '#d4af37' }}>Angelo Reychie Alejo</span>. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
