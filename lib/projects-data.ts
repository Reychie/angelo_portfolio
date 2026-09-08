export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  caseStudyUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'ne-attend',
    title: 'NE-Attend',
    description: 'Real-time attendance monitoring with live presence updates and admin dashboards.',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.IO'],
    image: '/projects/ne-attend.svg',
    imageAlt: 'NE-Attend attendance dashboard screenshot',
    caseStudyUrl: '#case-ne-attend',
    githubUrl: 'https://github.com',
    liveUrl: undefined,
  },
  {
    id: 'orbit-desk',
    title: 'Orbit Desk',
    description: 'Operations console for tracking tickets, SLA timers, and team workload in one view.',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    image: '/projects/orbit-desk.svg',
    imageAlt: 'Orbit Desk operations console screenshot',
    caseStudyUrl: '#case-orbit-desk',
    githubUrl: 'https://github.com',
    liveUrl: undefined,
  },
  {
    id: 'signal-board',
    title: 'Signal Board',
    description: 'Live metrics board for API health, deploy status, and incident awareness.',
    role: 'Frontend Lead',
    technologies: ['React', 'Node.js', 'WebSocket', 'Tailwind CSS'],
    image: '/projects/signal-board.svg',
    imageAlt: 'Signal Board metrics dashboard screenshot',
    caseStudyUrl: '#case-signal-board',
    githubUrl: 'https://github.com',
    liveUrl: undefined,
  },
];
