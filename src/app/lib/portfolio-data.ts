
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
    title: 'Data Portal for IoT Devices',
    slug: 'data-portal-iot',
    description: 'A web-based portal for visualizing and managing data from IoT sensors, providing real-time insights and control.',
    tech: ['React', 'Next.js', 'Firebase'],
    image: 'project-1',
    link: '#',
    overview: 'Developed a comprehensive data portal to monitor and analyze real-time data streams from a network of IoT devices. The platform provides customizable dashboards, alerting mechanisms, and data export functionalities.',
    problem: 'The client needed a centralized platform to manage thousands of IoT devices and make sense of the vast amount of data being collected, which was previously stored in disparate and inaccessible formats.',
    solution: 'Built a server-rendered application using Next.js for fast initial loads and SEO benefits. We used Firebase Realtime Database to handle the high-velocity data streams from sensors and provided an intuitive user interface built with React and ShadCN components.',
    features: ['Real-time Data Visualization', 'Customizable Dashboards', 'Device Management', 'Alerting System'],
    impact: 'The portal enabled the client to reduce operational response times by 60% and provided critical insights that led to a 15% improvement in device efficiency.',
  },
  {
    title: 'Secure Data Sharing in Cloud',
    slug: 'secure-data-sharing',
    description: 'An advanced system for secure and efficient data sharing in a multi-user cloud environment using cryptographic techniques.',
    tech: ['Python', 'Cryptography', 'Flask', 'Cloud Storage'],
    image: 'project-2',
    link: '#',
    overview: 'This project involved designing and implementing a novel protocol for secure data sharing among multiple parties in a public cloud. The system ensures data confidentiality and integrity while allowing for efficient key management and access control.',
    problem: 'Standard cloud storage solutions lacked the fine-grained access control and cryptographic assurance required for sharing highly sensitive industrial data. There was a high risk of data breaches and unauthorized access.',
    solution: 'We developed a solution using attribute-based encryption (ABE) that allows data owners to define complex access policies. The system was built with a Python backend using Flask, and it integrated with major cloud storage providers. It included an efficient key update mechanism to handle user revocations seamlessly.',
    features: ['Attribute-Based Encryption', 'Fine-grained Access Control', 'Efficient Key Revocation', 'Data Integrity Checks'],
    impact: 'The solution was published in an IEEE conference and provided a provably secure method for data sharing, significantly enhancing the security posture for organizations handling sensitive information in the cloud.',
  },
  {
    title: 'Portfolio',
    slug: 'portfolio-project',
    description: 'A personal portfolio website to showcase my skills, projects, and publications in a clean and modern interface.',
    tech: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'Firebase'],
    image: 'project-3',
    link: '#',
    overview: 'Designed and developed a personal portfolio to serve as a central hub for my professional work. The site is built with modern web technologies to be fast, responsive, and easy to navigate.',
    problem: 'I needed a professional and visually appealing online presence to share with recruiters and colleagues that could effectively showcase my technical skills and project experience.',
    solution: 'I created a fully responsive website using Next.js for its performance and SEO capabilities. Styling was handled with Tailwind CSS for rapid UI development, and ShadCN UI provided a set of accessible and reusable components. Firebase is used for hosting and potential future backend features like a contact form.',
    features: ['Responsive Design', 'Project Detail Pages', 'Skills Showcase', 'Publications Section', 'Dark/Light Mode'],
    impact: 'The portfolio has provided me with a polished and professional platform to present my work, leading to increased visibility and positive feedback from peers and potential employers.',
  }
];

export const PUBLICATIONS = [
  {
    slug: 'efficient-key-update',
    title: 'Efficient Key Update for Secure Data sharing in Industrial Cloud Access Control.',
    authors: 'Naga Abhigna Gunda, et al.',
    journal: '2025 5th International Conference on Intelligent Technologies (CONIT)',
    paperID:'2622',
    link: 'https://ieeexplore.ieee.org/document/11167505',
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
