
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const SKILLS = [
  { name: 'HTML', icon: 'html', color: '#E34F26' },
  { name: 'CSS', icon: 'css', color: '#1572B6' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
  { name: 'React', icon: 'react', color: '#61DAFB' },
  { name: 'Next.js', icon: 'nextjs', color: '#000000' },
  { name: 'Tailwind CSS', icon: 'tailwind', color: '#06B6D4' },
  { name: 'Python', icon: 'python', color: '#3776AB' },
  { name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
  { name: 'MYSQL', icon: 'mysql', color: '#4479A1' },
  { name: 'Git', icon: 'git', color: '#F05032' },
];

export const PROJECTS = [
  {
    title: 'Data Portal',
    slug: 'data-portal-iot',
    description: 'A web-based portal for visualizing and managing data from IoT sensors, providing real-time insights and control.',
    tech: ['React', 'Next.js', 'Firebase'],
    image: 'project-1',
    link: '#',
    overview: 'The Data Portal is a real-time web application developed to simplify and automate manual data entry tasks for small businesses. This project was inspired by a real-world challenge faced by my father, who manages company records using large Excel sheets. To record every transaction, he had to manually enter multiple details daily — a time-consuming and error-prone process. To address this, I designed and built a custom online data management system that allows him to input data through a simple, intelligent web interface. The system automatically fills related fields, securely stores all entries, and can be accessed anytime through a hosted web application.',
    problem: 'My fathers business relied heavily on Excel sheets for maintaining records. Each entry required him to fill out numerous fields manually, even when many values were repetitive or dependent on others. While tools like Google Forms seemed like a potential solution, they lacked customization — and even with App Script, hosting was limited to local networks. This limitation made it impossible for him to access the form remotely or from other devices.',
    solution: 'To overcome these challenges, I built a custom DataPortal from scratch using Python Flask and MySQL, with a user-friendly interface powered by HTML, CSS, and JavaScript. I first extracted and structured the existing Excel data in SQL Workbench. Developed a Flask-based backend to manage routes such as Home, Download, and View. Implemented logic for auto-filling dependent fields (e.g., selecting an item automatically populates fixed details like toll numbers or rates). Added secure login authentication to ensure that only authorized users — like my father — can access or modify the data. Deployed the system online using Render for web hosting and Railway for backend and database hosting, making it fully accessible remotely.',
    features: ['Automated Data Entry', 'Secure Login', 'Real-Time Access', 'Alerting System'],
    impact: 'The portal enabled the client to reduce operational response times by 60% and provided critical insights that led to a 15% improvement in device efficiency.',
    futureenhancements: [
      'Integrate data analytics dashboards for visual insights.',
      'Enable multi-user access with different permission levels.',
      'Add email notifications for data submissions or downloads.'
    ]
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
    impact: 'The solution was published in an an IEEE conference and provided a provably secure method for data sharing, significantly enhancing the security posture for organizations handling sensitive information in the cloud.',
  },
  {
    title: 'Portfolio',
    slug: 'portfolio-project',
    description: 'A personal portfolio website to showcase my skills, projects, and publications in a clean and modern interface.',
    tech: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'Firebase'],
    image: 'project-3',
    link: '#',
    overview: "I developed a personal portfolio website to showcase my skills, projects, and publications through a clean, modern, and responsive interface. The site is built using Next.js for enhanced performance and SEO optimization. Tailwind CSS was used for rapid, consistent styling, while ShadCN UI provided a library of accessible and reusable components. The website is hosted on Firebase, which also supports future backend integrations like a contact form.",
    problem: 'I wanted a professional and visually appealing online presence that would help me effectively present my technical expertise, projects, and accomplishments to recruiters and peers.',
    solution: 'To address this, I designed and developed a fully responsive portfolio website using Next.js, leveraging its speed and SEO benefits. With Tailwind CSS for utility-first styling and ShadCN UI for elegant components, I achieved a sleek, user-friendly interface. Hosting on Firebase ensures scalability and seamless deployment, with scope for adding interactive backend features later.',
    features: [
      'Responsive design for all devices',
      'Dedicated project detail pages',
      'Skills and technology showcase',
      'Publications and achievements section',
      'Dark/Light mode toggle for better user experience'
    ],
    impact: 'This portfolio has become my central professional identity, providing a polished platform to share my work. It has enhanced my online visibility and attracted positive feedback from recruiters, mentors, and peers.',
    futureenhancements: [
      'Integration of a real-time contact form with Firebase',
      'Addition of a blog section for technical writing',
      'Dynamic CMS support for easier content updates'
    ]
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
  { name: 'GitHub', icon: 'github', url: 'https://github.com/Abhigna41' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/naga-abhigna-gunda-aa1002247/' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
];

export const CONTACT_DETAILS = [
  { icon: 'mail', text: 'abhignagunda1@gmail.com', href: 'mailto:abhignagunda1@gmail.com' },
  { icon: 'phone', text: '+91 9347653053', href: 'tel:+919347653053' },
  { icon: 'mapPin', text: 'Hyderabad, India', href: 'https://maps.app.goo.gl/jEtgFwdjcxDg1yDDA' },
];
