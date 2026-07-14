'use client';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time notifications.',
      image: '🛍️',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with real-time data visualization.',
      image: '📊',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Management Tool',
      description: 'Collaborative project management tool with team collaboration features, task tracking, and reporting.',
      image: '📋',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      link: '#',
    },
    {
      id: 4,
      title: 'AI Content Generator',
      description: 'AI-powered content generation platform that uses machine learning to create personalized content.',
      image: '🤖',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Stripe'],
      link: '#',
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking application with workout plans, progress tracking, and community features.',
      image: '💪',
      technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit API'],
      link: '#',
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Comprehensive LMS platform for online courses with video streaming, quizzes, and progress tracking.',
      image: '📚',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
      link: '#',
    },
  ];

  return (
    <section className="py-20 px-6 bg-neutral-100 dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary dark:text-primary-light">Projects</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            Showcase of recent work demonstrating expertise in full-stack development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className="group bg-neutral-50 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary dark:hover:border-primary-light transition-all duration-300 hover-lift animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary-light/5 dark:to-accent-light/5 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-primary dark:text-primary-light font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12 animate-fadeInUp">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-neutral-50 dark:text-neutral-900 font-semibold rounded-lg hover-scale transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
