export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured platform with payment integration, inventory management, and real-time notifications.',
    icon: '🛍',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for multiple social accounts with real-time data visualization.',
    icon: '📊',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Management Tool',
    description: 'Collaborative tool with team features, task tracking, and reporting capabilities.',
    icon: '📋',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    link: '#',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    description: 'AI-powered platform using machine learning to create personalized content at scale.',
    icon: '🤖',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Stripe'],
    link: '#',
  },
  {
    id: 5,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking with workout plans, progress tracking, and community.',
    icon: '💪',
    technologies: ['React Native', 'Firebase', 'Redux', 'Google Fit'],
    link: '#',
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Comprehensive LMS for online courses with video streaming, quizzes, and progress.',
    icon: '📚',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    link: '#',
  },
];

/** Number of projects to show on the home page featured section */
export const FEATURED_COUNT = 6;
