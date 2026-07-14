'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const experiences = [
    {
      id: 0,
      company: 'Tech Company Inc.',
      position: 'Senior Full-Stack Developer',
      period: '2022 - Present',
      description:
        'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led migration from monolithic to microservices architecture',
        'Mentored 3 junior developers',
      ],
    },
    {
      id: 1,
      company: 'Digital Solutions Ltd.',
      position: 'Full-Stack Developer',
      period: '2020 - 2022',
      description:
        'Developed and maintained multiple client projects using modern web technologies. Collaborated with designers and product managers.',
      achievements: [
        'Built 15+ successful web applications',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Improved code quality through comprehensive testing',
      ],
    },
    {
      id: 2,
      company: 'StartUp Ventures',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description:
        'Started my professional journey building frontend components and fixing bugs. Learned best practices and code standards.',
      achievements: [
        'Delivered 5+ successful projects on time',
        'Improved UI component library efficiency',
        'Gained expertise in React ecosystem',
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-primary dark:text-primary-light">Experience</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            A journey of growth, learning, and impactful contributions
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary dark:hover:border-primary-light transition-all duration-300 text-left hover-lift group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-primary dark:text-primary-light font-semibold mt-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {exp.period}
                    </p>
                  </div>

                  <div className="ml-4 flex-shrink-0">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-primary dark:border-primary-light transition-transform duration-300 ${expandedId === exp.id ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === exp.id && (
                <div className="mt-2 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-primary/20 dark:border-primary-light/20 animate-slideInLeft space-y-4">
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 dark:bg-accent-light/20 flex items-center justify-center mt-1">
                            <svg className="w-3 h-3 text-accent dark:text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{achievement}</span>
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
    </section>
  );
}
