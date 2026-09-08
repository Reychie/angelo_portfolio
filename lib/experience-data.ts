export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'ne-attend',
    company: 'NE-Attend',
    position: 'Full Stack Developer',
    period: '2024 – Present',
    description:
      'Designed and shipped a real-time attendance platform with live presence, role-based access, and operational dashboards.',
    achievements: [
      'Built Socket.IO presence channels for live check-in status',
      'Modeled MongoDB schemas for sessions, users, and audit history',
      'Delivered responsive admin views for monitoring and reporting',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.IO'],
  },
  {
    id: 'product-engineering',
    company: 'Independent Product Work',
    position: 'Full Stack Developer',
    period: '2022 – 2024',
    description:
      'Built and maintained production web applications across dashboards, APIs, and client-facing interfaces.',
    achievements: [
      'Shipped multi-page Next.js apps with authenticated workflows',
      'Implemented REST APIs and data models for operational tools',
      'Improved UI consistency and accessibility across product surfaces',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'frontend-foundation',
    company: 'Client & Academic Projects',
    position: 'Frontend Developer',
    period: '2020 – 2022',
    description:
      'Focused on interface implementation, component systems, and integrating frontend clients with backend services.',
    achievements: [
      'Delivered responsive interfaces across desktop and mobile breakpoints',
      'Collaborated on API contracts and form-heavy workflows',
      'Established reusable UI patterns for faster iteration',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Node.js'],
  },
];
