'use client';

import { useRouter } from 'next/navigation';
import { projects, FEATURED_COUNT } from '@/lib/projects-data';

const featured = projects.slice(0, FEATURED_COUNT);
const hasMoreThanFeatured = projects.length > FEATURED_COUNT;

export default function ProjectsSection() {
  const router = useRouter();

  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(170deg, #0d1b3e 0%, #0a0f1e 50%, #111827 100%)',
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
        {/* Particle dots */}
        {[
          { top: '10%', left: '5%', size: 3, color: '#d4af37', delay: '0s' },
          { top: '25%', left: '90%', size: 2, color: '#3b82f6', delay: '0.5s' },
          { top: '60%', left: '8%', size: 4, color: '#3b82f6', delay: '1s' },
          { top: '80%', left: '85%', size: 3, color: '#d4af37', delay: '1.5s' },
          { top: '45%', left: '50%', size: 2, color: '#d4af37', delay: '2s' },
          { top: '15%', left: '60%', size: 2, color: '#60a5fa', delay: '0.8s' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: p.top, left: p.left,
              width: p.size, height: p.size,
              background: p.color,
              opacity: 0.4,
              animationDelay: p.delay,
            }}
          />
        ))}
        {/* Corner glows */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '16rem', height: '16rem', opacity: 0.1,
          background: 'radial-gradient(circle at top right, #d4af37, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '16rem', height: '16rem', opacity: 0.1,
          background: 'radial-gradient(circle at bottom left, #1e40af, transparent 70%)',
        }} />
        {/* Subtle horizontal lines */}
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            style={{
              position: 'absolute', left: 0, right: 0,
              top: `${pct}%`, height: '1px', opacity: 0.05,
              background: 'linear-gradient(90deg, transparent, #3b82f6 30%, #d4af37 70%, transparent)',
            }}
          />
        ))}
      </div>

      {/* ═══ CONTENT LAYER ═══ */}
      <div
        className="max-w-6xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>My Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span style={{ color: '#d4af37' }}>Projects</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
            Showcase of recent work demonstrating expertise in full-stack development and design
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#3b82f6' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
          </div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
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
              {/* Top border accent on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #1e40af, #d4af37, #1e40af)' }}
              />
              {/* Icon area */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(30,64,175,0.15), rgba(212,175,55,0.05))' }}
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,27,62,0.6))' }}
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#ffffff' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-semibold rounded"
                      style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.2)' }}
                    >
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

        {/* View All Projects — disabled when ≤ FEATURED_COUNT */}
        <div className="text-center mt-12 animate-fadeInUp">
          <button
            onClick={() => hasMoreThanFeatured && router.push('/projects')}
            disabled={!hasMoreThanFeatured}
            aria-disabled={!hasMoreThanFeatured}
            title={
              hasMoreThanFeatured
                ? 'View all projects'
                : `All ${projects.length} projects are shown above — add more to enable this button`
            }
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-300"
            style={
              hasMoreThanFeatured
                ? {
                    background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                    color: '#ffffff',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(59,130,246,0.3)',
                  }
                : {
                    background: 'rgba(30,64,175,0.15)',
                    color: 'rgba(255,255,255,0.3)',
                    cursor: 'not-allowed',
                    border: '1px solid rgba(59,130,246,0.15)',
                  }
            }
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          {!hasMoreThanFeatured && (
            <p className="mt-2 text-xs" style={{ color: '#ffffff' }}>
              Add more than {FEATURED_COUNT} projects to enable this button
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
