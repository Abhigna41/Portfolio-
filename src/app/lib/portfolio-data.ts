
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
    description: 'A brief description of project one. This project showcases my skills in A, B, and C.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    image: 'project-1',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two. This project involved working with X, Y, and Z.',
    tech: ['Python', 'Flask', 'Firebase'],
    image: 'project-2',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three. This project focuses on performance and user experience, built with a mobile-first approach.',
    tech: ['Python', 'Firebase', 'Redux'],
    image: 'project-3',
    link: '#',
  },
];

export const PUBLICATIONS = [
  {
    title: 'Efficient Key Update for Secure Data sharing in Industrial Cloud Access Control.',
    authors: 'Naga Abhigna Gunda, et al.',
    journal: '2025 5th International Conference on Intelligent Technologies (CONIT)',
    paperID:'2622',
    link: '#',
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
