'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'],
    },
    {
      category: 'Design',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Animation'],
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-primary dark:text-primary-light">Expertise</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 hover-lift transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-light">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary-light/10 dark:to-accent-light/10 border border-primary/20 dark:border-primary-light/20 text-neutral-800 dark:text-neutral-100 rounded-full text-sm font-medium hover:border-primary dark:hover:border-primary-light hover:shadow-lg transition-all duration-300 hover-scale cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="mt-16 space-y-8 animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
          
          {[
            { skill: 'Frontend Development', percentage: 95 },
            { skill: 'Full-Stack Development', percentage: 85 },
            { skill: 'UI/UX Design', percentage: 80 },
            { skill: 'Backend Development', percentage: 90 },
          ].map((item) => (
            <div key={item.skill} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-neutral-800 dark:text-neutral-100">{item.skill}</span>
                <span className="text-primary dark:text-primary-light font-semibold">{item.percentage}%</span>
              </div>
              <div className="h-2 bg-neutral-300 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent dark:from-primary-light dark:to-accent-light transition-all duration-1000 ease-out"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
