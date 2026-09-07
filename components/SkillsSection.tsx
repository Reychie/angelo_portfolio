'use client';

export default function SkillsSection() {
  const skillCategories = [
    { category: 'Frontend', icon: '◈', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', icon: '◉', skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools & Platforms', icon: '◫', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'] },
    { category: 'Design', icon: '◬', skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Animation'] },
  ];

  return (
    <section
      className="relative min-h-full py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0f1e 0%, #0e1a35 50%, #0d1b3e 100%)',
        isolation: 'isolate',
      }}
    >
      {/* ═══ BACKGROUND LAYER — must be first in DOM and z-index: 0 ═══ */}
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
        {/* Animated vertical lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${(i + 1) * 14}%`,
              width: '1px',
              opacity: 0.05,
              background: i % 2 === 0
                ? 'linear-gradient(to bottom, transparent, #d4af37, transparent)'
                : 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
              animationDelay: `${i * 0.4}s`,
              animationDuration: '3s',
            }}
          />
        ))}
        {/* Floating diamond border accents */}
        <div
          className="animate-pulse"
          style={{
            position: 'absolute',
            top: '4rem',
            right: '4rem',
            width: '3rem',
            height: '3rem',
            border: '2px solid #d4af37',
            opacity: 0.15,
            transform: 'rotate(45deg)',
            animationDuration: '12s',
          }}
        />
        <div
          className="animate-pulse"
          style={{
            position: 'absolute',
            bottom: '4rem',
            left: '4rem',
            width: '2rem',
            height: '2rem',
            border: '1px solid #3b82f6',
            opacity: 0.15,
            transform: 'rotate(45deg)',
            animationDuration: '8s',
          }}
        />
        {/* Large glow bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '66%',
          height: '10rem',
          opacity: 0.1,
          filter: 'blur(48px)',
          background: 'radial-gradient(ellipse, #d4af37, transparent 70%)',
        }} />
      </div>

      {/* ═══ CONTENT LAYER — always above background ═══ */}
      <div
        className="max-w-6xl mx-auto"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>What I Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills &amp; <span style={{ color: '#d4af37' }}>Expertise</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #d4af37)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#3b82f6' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
          </div>
        </div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="group p-6 rounded-2xl border hover-lift transition-all duration-300 animate-fadeInUp"
              style={{
                background: 'rgba(30,64,175,0.08)',
                borderColor: 'rgba(59,130,246,0.2)',
                animationDelay: `${i * 100}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.5)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(212,175,55,0.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,0.2)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(30,64,175,0.08)';
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" style={{ color: '#d4af37' }}>{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold border hover-scale cursor-default transition-all duration-200"
                    style={{
                      background: 'rgba(30,64,175,0.2)',
                      borderColor: 'rgba(59,130,246,0.3)',
                      color: '#93c5fd',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
