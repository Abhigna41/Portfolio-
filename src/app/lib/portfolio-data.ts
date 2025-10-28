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
    title: 'Data Portal',
    slug: 'project-one',
    description: 'The Data Portal is a secure, user-friendly Flask web application designed for managing, submitting, and viewing industrial or organizational data efficiently. It allows users to log in, enter production or operational records, and store them safely in a MySQL database. The portal also provides features to view, filter, and download submitted data for analysis.',
    tech: ['Python', 'SQL', 'HTML'],
    image: 'project-1',
  },
  {
    title: 'Secure Data Sharing',
    slug: 'project-two',
    description: 'Secure Data Sharing System is a Flask web app that secures text and files with attribute-based encryption. It combines AES/RSA hybrid cryptography with policy-driven access, storing encrypted data in Firebase Firestore. The dashboard handles encryption/decryption, policy tests, and user/attribute management. I built the full stack, added automated tests, and hardened the repo for portfolio use.',
    tech: ['Python', 'HTML', 'Firebase','Pychrotodome'],
    image: 'project-2',
  },
  {
    title: 'Project Three',
    slug: 'project-three',
    description: 'A brief description of project three. This project focuses on performance and user experience, built with a mobile-first approach.',
    tech: ['Python', 'Firebase', 'Redux'],
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
