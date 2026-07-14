'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const experiences = [
    {
      id: 0,
      company: 'Tech Company Inc.',
      position: 'Senior Full-Stack Developer',
      period: '2022 – Present',
      description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led migration from monolithic to microservices architecture',
        'Mentored 3 junior developers to mid-level proficiency',
      ],
    },
    {
      id: 1,
      company: 'Digital Solutions Ltd.',
      position: 'Full-Stack Developer',
      period: '2020 – 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers.',
      achievements: [
        'Built 15+ successful web applications on time and budget',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Improved code quality through comprehensive testing suites',
      ],
    },
    {
      id: 2,
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      period: '2019 – 2020',
      description: 'Started my professional journey building frontend components and fixing bugs. Learned best practices and code standards.',
      achievements: [
        'Delivered 5+ successful projects on time',
        'Improved UI component library efficiency by 30%',
        'Gained expertise in the full React ecosystem',
      ],
    },
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #060d1f 0%, #0d1b3e 40%, #111827 100%)' }}>
      {/* ===== UNIQUE BG — timeline flow / wave pattern ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* Concentric rings */}
        {[300, 450, 600].map((size, i) => (
          <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-5 animate-pulse" style={{
            width: size, height: size,
            borderColor: i % 2 === 0 ? '#d4af37' : '#3b82f6',
            animationDelay: `${i * 0.8}s`,
            animationDuration: '4s',
          }} />
        ))}
        {/* Diagonal scan lines top-left */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(135deg, #d4af37 0px, #d4af37 1px, transparent 0px, transparent 12px)',
        }} />
        {/* Gold glow — right side */}
        <div className="absolute right-0 top-1/4 w-48 h-96 opacity-10 blur-3xl" style={{ background: 'radial-gradient(ellipse, #d4af37, transparent 70%)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto" style={{ zIndex: 1 }}>
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>My Journey</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Professional <span style={{ color: '#d4af37' }}>Experience</span>
          </h2>
          <p className="text-base" style={{ color: '#94a3b8' }}>A journey of growth, learning, and impactful contributions</p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6)' }} />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #3b82f6, transparent)' }} />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'linear-gradient(to bottom, #1e40af, #d4af37, #1e40af)' }} />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="animate-fadeInUp md:pl-16 relative" style={{ animationDelay: `${index * 120}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center" style={{
                  borderColor: '#d4af37',
                  background: expandedId === exp.id ? '#d4af37' : '#060d1f',
                  boxShadow: expandedId === exp.id ? '0 0 10px rgba(212,175,55,0.6)' : 'none',
                  transition: 'all 0.3s ease',
                }} />

                {/* Card */}
                <button
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  className="w-full p-5 rounded-2xl border text-left hover-lift transition-all duration-300 group"
                  style={{
                    background: expandedId === exp.id ? 'rgba(212,175,55,0.07)' : 'rgba(30,64,175,0.08)',
                    borderColor: expandedId === exp.id ? 'rgba(212,175,55,0.4)' : 'rgba(59,130,246,0.2)',
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors truncate">{exp.position}</h3>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: '#60a5fa' }}>{exp.company}</p>
                      <p className="text-xs mt-1 font-medium" style={{ color: '#64748b' }}>{exp.period}</p>
                    </div>
                    <div className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${expandedId === exp.id ? 'rotate-180' : ''}`} style={{ borderColor: '#d4af37' }}>
                      <svg className="w-3.5 h-3.5" style={{ color: '#d4af37' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded */}
                {expandedId === exp.id && (
                  <div className="mt-2 p-5 rounded-2xl border animate-slideInLeft space-y-4" style={{ background: 'rgba(30,64,175,0.06)', borderColor: 'rgba(212,175,55,0.2)' }}>
                    <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{exp.description}</p>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#94a3b8' }}>
                            <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5" style={{ background: 'rgba(212,175,55,0.2)' }}>
                              <svg className="w-2.5 h-2.5" style={{ color: '#d4af37' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
