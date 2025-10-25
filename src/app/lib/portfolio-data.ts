import { Github, Linkedin, Twitter, Code, Database, Cloud, Paintbrush, Mail, Phone, MapPin } from 'lucide-react';

export const SKILLS = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'Databases', icon: Database },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'UI/UX Design', icon: Paintbrush },
];

export const PROJECTS = [
  {
    title: 'Project One',
    slug: 'project-one',
    description: 'A brief description of project one, highlighting its purpose and key features. This was a challenging yet rewarding project.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    image: 'project-1',
  },
  {
    title: 'Project Two',
    slug: 'project-two',
    description: 'A brief description of project two. It solves a real-world problem by leveraging modern web technologies.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'project-2',
  },
  {
    title: 'Project Three',
    slug: 'project-three',
    description: 'A brief description of project three. This project focuses on performance and user experience, built with a mobile-first approach.',
    tech: ['React Native', 'Firebase', 'Redux'],
    image: 'project-3',
  },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export const CONTACT_DETAILS = [
  { icon: Mail, text: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: Phone, text: '+1 234 567 890', href: 'tel:+1234567890' },
  { icon: MapPin, text: 'San Francisco, CA', href: '#' },
];
