export type SkillIconKey =
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'php'
  | 'react'
  | 'nextjs'
  | 'reactnative'
  | 'html'
  | 'css'
  | 'tailwind'
  | 'nodejs'
  | 'express'
  | 'rest'
  | 'socketio'
  | 'postgresql'
  | 'supabase'
  | 'mongodb'
  | 'mysql'
  | 'vectordb'
  | 'openai'
  | 'gemini'
  | 'rls'
  | 'git'
  | 'github'
  | 'postman'
  | 'vscode'
  | 'vercel';

export type CategoryIconKey = 'code' | 'window' | 'server' | 'database' | 'spark' | 'shield' | 'tool';

export interface SkillItemData {
  name: string;
  icon: SkillIconKey;
}

export interface SkillCategoryData {
  id: string;
  title: string;
  icon: CategoryIconKey;
  skills: SkillItemData[];
}

export const skillCategories: SkillCategoryData[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'PHP', icon: 'php' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'window',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React Native', icon: 'reactnative' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Socket.IO', icon: 'socketio' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Cloud',
    icon: 'tool',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
];
