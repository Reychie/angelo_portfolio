'use client';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="animate-slideInLeft">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary-light dark:from-primary-light dark:via-accent-light dark:to-primary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-lg p-8 h-80 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-neutral-600 dark:text-neutral-400">Your Photo Here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slideInRight">
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-primary dark:text-primary-light">Me</span>
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-4 leading-relaxed">
              I&apos;m a passionate full-stack developer with over 5 years of experience building web applications. My journey started with a curiosity about how things work, which evolved into a career dedicated to creating elegant solutions for complex problems.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6 leading-relaxed">
              I specialize in modern web technologies and love working with React, Node.js, and cloud platforms. When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring junior developers.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover-lift transition-all duration-300">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Experience</p>
                <p className="text-2xl font-bold text-primary dark:text-primary-light">5+</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Years</p>
              </div>

              <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover-lift transition-all duration-300">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Projects</p>
                <p className="text-2xl font-bold text-accent dark:text-accent-light">50+</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Completed</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-neutral-50 dark:text-neutral-900 font-semibold rounded-lg hover-scale transition-all duration-300"
            >
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
