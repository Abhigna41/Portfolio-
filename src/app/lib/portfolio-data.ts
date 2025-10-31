
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaPython, FaReact, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiFirebase, SiMysql } from 'react-icons/si';

export const SKILLS = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'MYSQL', icon: SiMysql },
  { name: 'Python', icon: FaPython },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Git', icon: FaGitAlt },
];

export const PROJECTS = [
  {
    title: 'Data Portal',
    slug: 'project-one',
    description: 'A real-time web application to simplify and automate manual data entry tasks for small businesses, inspired by a real-world challenge.',
    image: 'project-1',
    link: '#',
    projectOverview: 'The Data Portal is a real-time web application developed to simplify and automate manual data entry tasks for small businesses. This project was inspired by a real-world challenge faced by my father, who manages company records using large Excel sheets. To record every transaction, he had to manually enter multiple details daily — a time-consuming and error-prone process. To address this, I designed and built a custom online data management system that allows him to input data through a simple, intelligent web interface. The system automatically fills related fields, securely stores all entries, and can be accessed anytime through a hosted web application.',
    problemStatement: {
      title: 'Problem Statement (Real-World Context)',
      content: "My father’s business relied heavily on Excel sheets for maintaining records. Each entry required him to fill out numerous fields manually, even when many values were repetitive or dependent on others. While tools like Google Forms seemed like a potential solution, they lacked customization — and even with App Script, hosting was limited to local networks. This limitation made it impossible for him to access the form remotely or from other devices."
    },
    solutionDeveloped: {
      title: 'Solution Developed',
      content: "To overcome these challenges, I built a custom Data Portal from scratch using Python Flask and MySQL, with a user-friendly interface powered by HTML, CSS, and JavaScript. I first extracted and structured the existing Excel data in SQL Workbench. Developed a Flask-based backend to manage routes such as Home, Download, and View. Implemented logic for auto-filling dependent fields (e.g., selecting an item automatically populates fixed details like toll numbers or rates). Added secure login authentication to ensure that only authorized users — like my father — can access or modify the data. Deployed the system online using Render for web hosting and Railway for backend and database hosting, making it fully accessible remotely."
    },
    keyFeatures: [
      'Automated Data Entry: Dependent fields auto-fill based on selection, minimizing manual input.',
      'Secure Login: Only authorized users can access or edit records.',
      'Real-Time Access: Data instantly updates and syncs across the cloud.',
      'Attractive UI: Clean and responsive web design using HTML, CSS, and JS.',
      'Free Cloud Hosting: Hosted using Render (Frontend & App) and Railway (Database).',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Python (Flask)', 'MySQL', 'Render', 'Railway', 'Git & GitHub'],
    impact: [
      'Reduced manual effort by more than 70%.',
      'Ensured data consistency and eliminated repetitive entry errors.',
      'Made business data securely accessible from any location.',
      'Simplified daily operations for a non-technical user (my father), improving efficiency and accuracy.',
    ],
    futureEnhancements: [
      'Integrate data analytics dashboards for visual insights.',
      'Enable multi-user access with different permission levels.',
      'Add email notifications for data submissions or downloads.',
    ]
  },
  {
    title: 'Secure Data Sharing System',
    slug: 'project-two',
    description: 'A Python Flask web app that enables secure text and file sharing through policy-based access control and hybrid cryptography.',
    tech: ['Python', 'Flask', 'Jinja2', 'Bootstrap', 'PyCryptodome', 'Charm CP-ABE', 'Firebase Admin SDK', 'Git & GitHub'],
    image: 'project-2',
    link: '#',
    projectOverview: 'Developed a Python Flask web application that enables secure text and file sharing through policy-based access control, enforced using hybrid cryptography and Firebase-backed storage. The system ensures that only authorized users, defined by specific attributes or roles, can access sensitive data while maintaining end-to-end confidentiality.',
    problemStatement: {
      title: 'Problem Statement (Real-World Context)',
      content: 'In many organizations, sharing confidential information securely is challenging, especially when user access must depend on dynamic roles or attributes rather than fixed permissions. Traditional trust-based or manual sharing methods often expose sensitive data to unauthorized users or create operational bottlenecks in managing access control.'
    },
    solutionDeveloped: {
      title: 'Solution Developed',
      content: 'Designed and implemented a Ciphertext-Policy Attribute-Based Encryption (CP-ABE)–inspired architecture that combines AES and RSA encryption to protect data. The encrypted files and associated metadata are stored in Firebase Firestore, and decryption is permitted only after validating attribute-based access policies. The system also features a responsive dashboard for users and administrators to manage data, keys, and access efficiently.'
    },
    keyFeatures: [
      'Dashboard for encrypting/decrypting text and files with attribute-based policies',
      'User & Attribute Management with delegated key update functionality',
      'Admin Tools for activity logging and real-time policy verification',
      'Automated Testing & Health Checks for reliability',
      'Clean and Responsive UI built using Bootstrap and Jinja2 templates',
    ],
    impact: [
      'This project demonstrates a production-grade workflow for fine-grained, cryptographically enforced data sharing, strengthening my expertise in cryptographic engineering, secure coding practices, and deployment automation. It showcases the application of hybrid encryption and dynamic policy management in real-world data protection scenarios.',
    ],
    futureEnhancements: [
      'Integrate full CP-ABE key generation and delegation in production environments',
      'Implement role-based analytics dashboards and automated notifications',
      'Enhance security and scalability through containerization and CI/CD pipelines',
    ]
  },
  {
    title: 'Project Three',
    slug: 'project-three',
    description: 'A brief description of project three. This project focuses on performance and user experience, built with a mobile-first approach.',
    tech: ['Python', 'Firebase', 'Redux'],
    image: 'project-3',
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
  { icon: MapPin, text: 'Hyderabad, India', href: '#' },
];
