'use client';

export default function SkillsSection() {
  const skillCategories = [
    { category: 'Frontend', icon: '◈', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', icon: '◉', skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools & Platforms', icon: '◫', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'] },
    { category: 'Design', icon: '◬', skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Animation'] },
  ];

  const proficiencies = [
    { skill: 'Frontend Development', pct: 95, color: '#3b82f6' },
    { skill: 'Full-Stack Development', pct: 85, color: '#d4af37' },
    { skill: 'UI/UX Design', pct: 80, color: '#60a5fa' },
    { skill: 'Backend Development', pct: 90, color: '#d4af37' },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0e1a35 50%, #0d1b3e 100%)' }}>
      {/* ===== UNIQUE BG — hexagon/circuit pattern ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Animated vertical lines */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px opacity-5 animate-pulse" style={{
            left: `${(i + 1) * 14}%`,
            background: i % 2 === 0 ? 'linear-gradient(to bottom, transparent, #d4af37, transparent)' : 'linear-gradient(to bottom, transparent, #3b82f6, transparent)',
            animationDelay: `${i * 0.4}s`,
            animationDuration: '3s',
          }} />
        ))}
        {/* Floating gold diamond accents */}
        <div className="absolute top-16 right-16 w-12 h-12 border-2 opacity-15 animate-rotate-slow" style={{ borderColor: '#d4af37', transform: 'rotate(45deg)', animationDuration: '12s' }} />
        <div className="absolute bottom-16 left-16 w-8 h-8 border opacity-15 animate-rotate-slow" style={{ borderColor: '#3b82f6', transform: 'rotate(45deg)', animationDuration: '8s', animationDirection: 'reverse' }} />
        {/* Large glow bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 opacity-10 blur-3xl" style={{ background: 'radial-gradient(ellipse, #d4af37, transparent 70%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 1 }}>
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>What I Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills &amp; <span style={{ color: '#d4af37' }}>Expertise</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
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
            <div key={cat.category} className="group p-6 rounded-2xl border hover-lift transition-all duration-300 animate-fadeInUp" style={{
              background: 'rgba(30,64,175,0.08)',
              borderColor: 'rgba(59,130,246,0.2)',
              animationDelay: `${i * 100}ms`,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(212,175,55,0.5)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(212,175,55,0.05)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(59,130,246,0.2)'; (e.currentTarget as HTMLDivElement).style.background = 'rgba(30,64,175,0.08)'; }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" style={{ color: '#d4af37' }}>{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full text-sm font-semibold border hover-scale cursor-default transition-all duration-200" style={{ background: 'rgba(30,64,175,0.2)', borderColor: 'rgba(59,130,246,0.3)', color: '#93c5fd' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="space-y-6 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Proficiency Levels</h3>
          {proficiencies.map((item) => (
            <div key={item.skill} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm md:text-base font-semibold text-white">{item.skill}</span>
                <span className="text-sm font-bold" style={{ color: item.color }}>{item.pct}%</span>
              </div>
              <div className="h-2.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full transition-all duration-1000 ease-out animate-shimmer" style={{
                  width: `${item.pct}%`,
                  background: `linear-gradient(90deg, #1e40af, ${item.color})`,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
