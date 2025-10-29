
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
    title: 'Secure Data Sharing',
    slug: 'project-two',
    description: 'Secure Data Sharing System is a Flask web app that secures text and files with attribute-based encryption. It combines AES/RSA hybrid cryptography with policy-driven access, storing encrypted data in Firebase Firestore. The dashboard handles encryption/decryption, policy tests, and user/attribute management. I built the full stack, added automated tests, and hardened the repo for portfolio use.',
    tech: ['Python', 'HTML', 'Firebase','Pychrotodome'],
    image: 'project-2',
    link: '#',
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
  { icon: Mail, text: 'hello@example.com', href: 'mailto:hello@example.com' },
  { icon: Phone, text: '+1 234 567 890', href: 'tel:+1234567890' },
  { icon: MapPin, text: 'San Francisco, CA', href: '#' },
];
