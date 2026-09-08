export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    approach: string;
    outcome: string;
  };
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
    githubUrl: 'https://github.com',
    caseStudy: {
      problem:
        'Attendance was tracked after the fact, so admins could not see who was present during a live session.',
      approach:
        'Built a Next.js admin console and Node.js Socket.IO channels over MongoDB session records so check-ins update without a page refresh.',
      outcome:
        'Operators can monitor present, late, and absent counts in one live view, with a device-aware check-in history.',
    },
  },
  {
    id: 'orbit-desk',
    title: 'Orbit Desk',
    description: 'Operations console for tracking tickets, SLA timers, and team workload in one view.',
    role: 'Full Stack Developer',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    image: '/projects/orbit-desk.svg',
    imageAlt: 'Orbit Desk operations console screenshot',
    githubUrl: 'https://github.com',
    caseStudy: {
      problem:
        'Support work was split across queues, so SLA risk was hard to see until a ticket was already late.',
      approach:
        'Designed a single console with a live queue, workload bars, and ticket detail, backed by PostgreSQL records and Redis-backed timers.',
      outcome:
        'Owners can scan SLA remaining time, assignment, and impact without leaving the operations view.',
    },
  },
  {
    id: 'signal-board',
    title: 'Signal Board',
    description: 'Live metrics board for API health, deploy status, and incident awareness.',
    role: 'Frontend Lead',
    technologies: ['React', 'Node.js', 'WebSocket', 'Tailwind CSS'],
    image: '/projects/signal-board.svg',
    imageAlt: 'Signal Board metrics dashboard screenshot',
    githubUrl: 'https://github.com',
    caseStudy: {
      problem:
        'Uptime, latency, and incidents lived in separate tools, which slowed response during deploys.',
      approach:
        'Led a React board that streams API health, deploy counts, and incident state over WebSockets with a restrained dark operational UI.',
      outcome:
        'The board makes uptime, p95 latency, error rate, and recent incidents readable in a single pass.',
    },
  },
];
