
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiMysql } from 'react-icons/si';

export const SKILLS = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'MYSQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
];

export const PROJECTS = [
  {
    title: 'Project One',
    slug: 'project-one',
    description: 'A brief description of project one. This project showcases my skills in A, B, and C.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    image: 'project-1',
    link: '#',
    overview: 'This is a detailed overview of Project One. It was a challenging but rewarding experience where I learned a lot about modern web development.',
    problem: 'The main problem was to build a highly interactive and performant user interface that works seamlessly across all devices.',
    solution: 'We decided to use a combination of Next.js for server-side rendering and static site generation, along with Tailwind CSS for rapid UI development.',
    features: ['Responsive Design', 'Server-Side Rendering', 'Interactive UI'],
    impact: 'The project was a huge success, leading to a 50% increase in user engagement and a 20% improvement in performance.',
  },
  {
    title: 'Project Two',
    slug: 'project-two',
    description: 'A brief description of project two. This project involved working with X, Y, and Z.',
    tech: ['Python', 'Flask', 'Firebase'],
    image: 'project-2',
    link: '#',
    overview: 'Project Two was a backend-focused project aimed at creating a scalable and secure API.',
    problem: 'The challenge was to handle a large number of concurrent requests while ensuring data integrity and security.',
    solution: 'We used Python with the Flask framework to build a robust API, and Firebase for real-time database and authentication.',
    features: ['RESTful API', 'Real-time database', 'User Authentication'],
    impact: 'The new API improved the overall system performance by 40% and provided a much more secure environment for user data.',
  },
  {
    title: 'Project Three',
    slug: 'project-three',
    description: 'A brief description of project three. This project focuses on performance and user experience, built with a mobile-first approach.',
    tech: ['Python', 'Firebase', 'Redux'],
    image: 'project-3',
    link: '#',
    overview: 'Project Three was a mobile application designed to provide a seamless user experience for a complex task.',
    problem: 'The main problem was to manage a complex application state in a way that was both predictable and easy to debug.',
    solution: 'We used React Native for cross-platform development and Redux for state management, which provided a single source of truth for the application state.',
    features: ['Cross-platform', 'State Management', 'Mobile-first design'],
    impact: 'The app received very positive feedback from users and helped to streamline a previously complicated workflow.',
  },
];

export const PUBLICATIONS = [
  {
    slug: 'efficient-key-update',
    title: 'Efficient Key Update for Secure Data sharing in Industrial Cloud Access Control.',
    authors: 'Naga Abhigna Gunda, et al.',
    journal: '2025 5th International Conference on Intelligent Technologies (CONIT)',
    paperID:'2622',
    link: '#',
    abstract: 'This paper proposes a novel key update mechanism to enhance security in industrial cloud environments. Our method ensures secure data sharing and efficient access control, addressing the vulnerabilities present in current systems. We demonstrate through simulations that our approach significantly reduces overhead while maintaining a high level of security.'
  },
  
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export const CONTACT_DETAILS = [
  { icon: Mail, text: 'abhignagunda1@gmail.com', href: 'mailto:abhignagunda1@gmail.com' },
  { icon: Phone, text: '+91 9347653053', href: 'tel:+919347653053' },
  { icon: MapPin, text: 'Hyderabad, India', href: 'https://maps.app.goo.gl/jEtgFwdjcxDg1yDDA' },
];
