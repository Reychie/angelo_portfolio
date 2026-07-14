'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-6 md:px-12">
      {/* Background gradient with blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-neutral-100 dark:via-neutral-900 to-neutral-50 dark:to-neutral-800" />
        {/* Animated gradient blobs */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 dark:bg-primary-light/10 rounded-full blur-3xl opacity-60"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/15 dark:bg-accent-light/10 rounded-full blur-3xl opacity-60"
          style={{
            transform: `translateY(${scrollY * -0.3}px)`,
            animation: 'float 8s ease-in-out infinite 2s',
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
      `}</style>

      {/* Main content container */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fadeInUp space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary-light/10 border border-primary/20 dark:border-primary-light/20 text-xs md:text-sm font-semibold text-primary dark:text-primary-light uppercase tracking-wide hover-scale cursor-pointer transition-all duration-300">
              <span className="inline-block w-2 h-2 rounded-full bg-primary dark:bg-primary-light animate-pulse" />
              Welcome to my portfolio
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base font-medium tracking-wide">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight md:leading-tight text-balance bg-gradient-to-b from-neutral-900 via-primary dark:from-neutral-50 dark:via-primary-light to-accent dark:to-accent-light bg-clip-text text-transparent drop-shadow-2xl">
              Your Name
            </h1>
          </div>

          {/* Subtitle with animated underline */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 leading-relaxed relative inline-block">
              Full-Stack Developer
              <span className="block h-1 bg-gradient-to-r from-primary via-primary-light to-accent dark:from-primary-light dark:via-primary dark:to-accent-light rounded-full mt-2" style={{ width: '100%', opacity: 0.7 }} />
            </h2>
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium">
              UI/UX Enthusiast • Problem Solver • Innovator
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-2 md:px-0">
            I craft beautiful, functional web experiences with modern technologies. Specialized in creating responsive designs and scalable applications that solve real-world problems with elegance and precision.
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-8">
            <a
              href="#projects"
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary text-neutral-50 dark:text-neutral-900 font-bold text-base md:text-lg rounded-xl hover-lift transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>

            <a
              href="#contact"
              className="group px-8 md:px-10 py-4 md:py-5 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light font-bold text-base md:text-lg rounded-xl hover:bg-primary/5 dark:hover:bg-primary-light/5 hover-lift transition-all duration-300 bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex gap-4 justify-center pt-4 md:pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 text-neutral-900 dark:text-neutral-50 hover-scale transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
              aria-label="GitHub"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-7 h-7 md:w-8 md:h-8 relative z-10 group-hover:text-neutral-50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C19.138 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 text-neutral-900 dark:text-neutral-50 hover-scale transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
              aria-label="Facebook"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-7 h-7 md:w-8 md:h-8 relative z-10 group-hover:text-neutral-50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 text-neutral-900 dark:text-neutral-50 hover-scale transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-7 h-7 md:w-8 md:h-8 relative z-10 group-hover:text-neutral-50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator - enhanced */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-medium">Scroll to explore</p>
            <svg className="w-6 h-6 text-primary dark:text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
