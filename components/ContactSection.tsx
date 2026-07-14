'use client';

import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #060d1f 0%, #0a0f1e 60%, #0d1423 100%)' }}>
      {/* ===== UNIQUE BG — radial burst + gold border frame ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(30,64,175,0.3), transparent 70%)' }} />
        {/* Gold corner frames */}
        <div className="absolute top-8 left-8">
          <div className="w-12 h-12 border-t-2 border-l-2 rounded-tl-lg opacity-20" style={{ borderColor: '#d4af37' }} />
        </div>
        <div className="absolute top-8 right-8">
          <div className="w-12 h-12 border-t-2 border-r-2 rounded-tr-lg opacity-20" style={{ borderColor: '#d4af37' }} />
        </div>
        <div className="absolute bottom-8 left-8">
          <div className="w-12 h-12 border-b-2 border-l-2 rounded-bl-lg opacity-20" style={{ borderColor: '#d4af37' }} />
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="w-12 h-12 border-b-2 border-r-2 rounded-br-lg opacity-20" style={{ borderColor: '#d4af37' }} />
        </div>
        {/* Animated rings */}
        {[200, 380, 560].map((size, i) => (
          <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-5 animate-pulse" style={{
            width: size, height: size,
            borderColor: i % 2 === 0 ? '#d4af37' : '#3b82f6',
            animationDelay: `${i * 0.6}s`, animationDuration: '3s',
          }} />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#d4af37' }}>Say Hello</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let&apos;s <span style={{ color: '#d4af37' }}>Connect</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6)' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#d4af37' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #3b82f6, transparent)' }} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Form */}
          <div className="animate-slideInLeft">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Angelo Reychie' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'hello@example.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-semibold mb-2 text-white">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border text-white text-sm font-medium placeholder-neutral-600 outline-none transition-all duration-300"
                    style={{ background: 'rgba(30,64,175,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#ffffff' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#d4af37'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.1)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.boxShadow = 'none'; }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border text-sm font-medium placeholder-neutral-600 outline-none transition-all duration-300 resize-none"
                  style={{ background: 'rgba(30,64,175,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#ffffff' }}
                  onFocus={e => { e.currentTarget.style.borderColor = '#d4af37'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(212,175,55,0.1)'; }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm text-white hover-lift transition-all duration-300"
                style={{ background: submitted ? 'linear-gradient(135deg, #16a34a, #22c55e)' : 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right — Info */}
          <div className="animate-slideInRight space-y-5">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                label: 'Email', value: 'hello@angeloreychie.com', color: '#3b82f6',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                label: 'Phone', value: '+1 (555) 123-4567', color: '#d4af37',
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                label: 'Location', value: 'San Francisco, USA', color: '#3b82f6',
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl border hover-lift transition-all duration-300" style={{ background: 'rgba(30,64,175,0.08)', borderColor: 'rgba(59,130,246,0.2)' }}>
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ background: `${item.color}20` }}>
                  <svg className="w-5 h-5" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#64748b' }}>{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social row */}
            <div className="pt-4 border-t" style={{ borderColor: 'rgba(59,130,246,0.15)' }}>
              <p className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: '#94a3b8' }}>Follow Me</p>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', href: 'https://github.com', icon: <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C19.138 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />, fill: true },
                  { label: 'Facebook', href: 'https://facebook.com', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />, fill: true },
                  { label: 'LinkedIn', href: 'https://linkedin.com', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />, fill: true },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="group relative w-10 h-10 flex items-center justify-center rounded-lg border hover-scale transition-all duration-300 overflow-hidden"
                    style={{ borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(30,64,175,0.1)', color: '#ffffff' }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, #1e40af, #d4af37)' }} />
                    <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
