'use client';

const projects = [
  { id: 1, title: 'E-Commerce Platform', description: 'Full-featured platform with payment integration, inventory management, and real-time notifications.', icon: '🛍', technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], link: '#' },
  { id: 2, title: 'Social Media Dashboard', description: 'Analytics dashboard for multiple social accounts with real-time data visualization.', icon: '📊', technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'], link: '#' },
  { id: 3, title: 'Project Management Tool', description: 'Collaborative tool with team features, task tracking, and reporting capabilities.', icon: '📋', technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'], link: '#' },
  { id: 4, title: 'AI Content Generator', description: 'AI-powered platform using machine learning to create personalized content at scale.', icon: '🤖', technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Stripe'], link: '#' },
  { id: 5, title: 'Mobile Fitness App', description: 'Cross-platform fitness tracking with workout plans, progress tracking, and community.', icon: '💪', technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit'], link: '#' },
  { id: 6, title: 'Learning Management System', description: 'Comprehensive LMS for online courses with video streaming, quizzes, and progress.', icon: '📚', technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSocket'], link: '#' },
];

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(170deg, #0d1b3e 0%, #0a0f1e 50%, #111827 100%)' }}>
      {/* ===== UNIQUE BG — scattered particles + gold frame corners ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Particle dots scattered */}
        {[
          { top: '10%', left: '5%', size: 3, color: '#d4af37', delay: '0s' },
          { top: '25%', left: '90%', size: 2, color: '#3b82f6', delay: '0.5s' },
          { top: '60%', left: '8%', size: 4, color: '#3b82f6', delay: '1s' },
          { top: '80%', left: '85%', size: 3, color: '#d4af37', delay: '1.5s' },
          { top: '45%', left: '50%', size: 2, color: '#d4af37', delay: '2s' },
          { top: '15%', left: '60%', size: 2, color: '#60a5fa', delay: '0.8s' },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full animate-pulse" style={{
            top: p.top, left: p.left, width: p.size, height: p.size,
            background: p.color, opacity: 0.4, animationDelay: p.delay,
          }} />
        ))}
        {/* Top-right & bottom-left gold gradient corners */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle at top right, #d4af37, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10" style={{ background: 'radial-gradient(circle at bottom left, #1e40af, transparent 70%)' }} />
        {/* Subtle horizontal lines */}
        {[20, 40, 60, 80].map((pct) => (
          <div key={pct} className="absolute left-0 right-0 h-px opacity-5" style={{ top: `${pct}%`, background: 'linear-gradient(90deg, transparent, #3b82f6 30%, #d4af37 70%, transparent)' }} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>My Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span style={{ color: '#d4af37' }}>Projects</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Showcase of recent work demonstrating expertise in full-stack development and design
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#3b82f6' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
          </div>
        </div>

        {/* Project cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {/* Gold top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(90deg, #1e40af, #d4af37, #1e40af)' }} />

              {/* Icon area */}
              <div className="relative h-36 flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(30,64,175,0.15), rgba(212,175,55,0.05))' }}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to bottom, transparent, rgba(13,27,62,0.6))' }} />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs font-semibold rounded" style={{ background: 'rgba(59,130,246,0.15)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.2)' }}>
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

        {/* CTA */}
        <div className="text-center mt-12 animate-fadeInUp">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm hover-lift transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)', color: '#ffffff' }}>
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
