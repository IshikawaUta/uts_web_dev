import { Github, Linkedin, Mail, Twitter, Code, Database, Wind, Bot } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Mail, href: '#' },
];

export const SKILLS = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Tailwind CSS', icon: Wind },
  { name: 'Figma', icon: 'figma' },
  { name: 'SQL', icon: Database },
  { name: 'GenAI', icon: Bot },
];

export const PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge data visualization platform that turns complex datasets into interactive, understandable graphics.',
    imageId: 'project-1',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'Node.js'],
  },
  {
    title: 'Project Beta',
    description: 'A sleek and modern UI Kit for web applications, built with Tailwind CSS and designed for maximum reusability.',
    imageId: 'project-2',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first social networking app designed to connect like-minded individuals through shared interests and events.',
    imageId: 'project-3',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['React Native', 'Firebase', 'Figma'],
  },
  {
    title: 'Project Delta',
    description: 'An AI-powered e-commerce solution that provides personalized shopping experiences and intelligent product recommendations.',
    imageId: 'project-4',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Python', 'GenAI', 'Stripe'],
  },
];

export const EXPERIENCE = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    duration: '2021 - Present',
    description: [
      'Led the development of a new client-facing dashboard using Next.js, resulting in a 40% increase in user engagement.',
      'Mentored junior developers and established best practices for code quality and testing.',
      'Collaborated with UX/UI designers to translate wireframes into high-quality, responsive code.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Digital Solutions Co.',
    duration: '2019 - 2021',
    description: [
      'Developed and maintained features for a large-scale React application.',
      'Improved application performance by optimizing component rendering and state management.',
      'Participated in an agile team, contributing to sprint planning and code reviews.',
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Technology',
    duration: '2015 - 2019',
  },
  {
    degree: 'Advanced UI/UX Design Certification',
    institution: 'Design Academy',
    duration: '2020',
  },
];
