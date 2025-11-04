
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
    tech: ['Python(Flask)', 'HTML5', 'SQL','Railway','Render','Git'],
    image: 'project-1',
    link: 'https://data-portal-xdir.onrender.com/',
    overview: 'The Data Portal is a real-time web application developed to simplify and automate manual data entry tasks for small businesses. This project was inspired by a real-world challenge faced by my father, who manages company records using large Excel sheets. To record every transaction, he had to manually enter multiple details daily — a time-consuming and error-prone process. To address this, I designed and built a custom online data management system that allows him to input data through a simple, intelligent web interface. The system automatically fills related fields, securely stores all entries, and can be accessed anytime through a hosted web application.',
    problem: 'My fathers business relied heavily on Excel sheets for maintaining records. Each entry required him to fill out numerous fields manually, even when many values were repetitive or dependent on others. While tools like Google Forms seemed like a potential solution, they lacked customization — and even with App Script, hosting was limited to local networks. This limitation made it impossible for him to access the form remotely or from other devices.',
    solution: 'To overcome these challenges, I built a custom DataPortal from scratch using Python Flask and MySQL, with a user-friendly interface powered by HTML, CSS, and JavaScript. I first extracted and structured the existing Excel data in SQL Workbench. Developed a Flask-based backend to manage routes such as Home, Download, and View. Implemented logic for auto-filling dependent fields (e.g., selecting an item automatically populates fixed details like toll numbers or rates). Added secure login authentication to ensure that only authorized users — like my father — can access or modify the data. Deployed the system online using Render for web hosting and Railway for backend and database hosting, making it fully accessible remotely.',
    features: ['Automated Data Entry', 'Secure Login', 'Real-Time Access', 'Alerting System'],
  
    futureenhancements: [
      'Integrate data analytics dashboards for visual insights.',
      'Enable multi-user access with different permission levels.',
      'Add email notifications for data submissions or downloads.'
    ]
  },
  {
    title: 'Secure Data Sharing',
    slug: 'secure-data-sharing',
    description: 'An advanced cryptography-based system designed to enable secure and efficient data sharing among multiple users in a cloud environmen',
    tech: ['Python(Flask)', 'Cryptography', 'Firebase Firestore', 'HTML5','CSS3'],
    image: 'project-2',
    link: '#',
    overview: 'This project involved designing and implementing a novel protocol for secure data sharing among multiple parties in a public cloud. The system ensures data confidentiality and integrity while allowing for efficient key management and access control.',
    problem: 'Standard cloud storage solutions lacked the fine-grained access control and cryptographic assurance required for sharing highly sensitive industrial data. There was a high risk of data breaches and unauthorized access.',
    solution: 'We developed a solution using attribute-based encryption (ABE) that allows data owners to define complex access policies. The system was built with a Python backend using Flask, and it integrated with major cloud storage providers. It included an efficient key update mechanism to handle user revocations seamlessly.',
    features: ['Attribute-Based Encryption', 'Fine-grained Access Control', 'Efficient Key Revocation', 'Data Integrity Checks'],
    impact: 'The solution was published in an an IEEE conference and provided a provably secure method for data sharing, significantly enhancing the security posture for organizations handling sensitive information in the cloud.',
  },
  {
    title: 'IPL Data Analytics using PostgreSQL',
    slug: 'ipl-sql-analytics',
    description:
      'Comprehensive SQL-based analytics project leveraging PostgreSQL to derive actionable insights from IPL (2008–2020) datasets using advanced querying, relational design, and aggregation techniques.',
    tech: ['PostgreSQL', 'SQL', 'Data Normalization', 'Joins & Aggregations', 'Query Optimization', 'Analytical Functions'],
    image: 'project-ipl',
    link: '#',
    overview:
      'This project focused on designing and executing optimized SQL queries over the IPL dataset (2008–2020) using PostgreSQL. The analysis included team performance trends, player statistics, match outcomes, and venue-based results. The solution was structured around two relational tables — `ipl` (match metadata) and `deliveries` (ball-by-ball data) — integrated via a primary–foreign key relationship for efficient querying and aggregation.',
    problem:
      'The raw IPL dataset contained redundant and unstructured data, leading to inefficient queries and inconsistent analytical outputs. Extracting performance metrics such as win ratios, player dismissals, and extras conceded required a relational approach with optimized joins and aggregation strategies.',
    solution:
      'Implemented a normalized relational schema in PostgreSQL to improve query performance and maintain data integrity. Employed aggregate and analytical SQL functions to compute key metrics across seasons and teams. Leveraged multi-table joins, indexing, and filter optimization to enable faster execution and accurate analytical reporting.',
    features: [
      'Normalized relational schema with primary and foreign key constraints',
      'Advanced query optimization through indexing and execution plan analysis',
      'Multi-level data aggregation using GROUP BY, HAVING, and window functions',
      'Fine-grained filtering using logical operators, pattern matching, and conditional clauses',
      'Use of JOIN operations (INNER, LEFT, FULL OUTER) to correlate match and delivery datasets',
      'Application of analytical functions for computing moving averages and cumulative performance metrics'
    ],
    tools: [
      'PostgreSQL (Database Management System)',
      'pgAdmin4 (Database Visualization and Query Execution)',
      'DBeaver (SQL IDE for query profiling)',
      'Excel/CSV for initial data inspection and transformation',
      'ERD Tools for schema visualization and relational mapping'
    ],
    methods: [
      'Data Normalization — ensured referential integrity between `ipl` and `deliveries` tables',
      'Query Optimization — used EXPLAIN and ANALYZE plans to tune join order and filter conditions',
      'Aggregation — applied COUNT(), SUM(), MAX(), AVG(), and HAVING clauses to generate statistical insights',
      'Analytical Functions — implemented RANK(), ROW_NUMBER(), and PARTITION BY for ranking team and player performance',
      'Pattern Matching — used LIKE and ILIKE operators for team name and city-based lookups',
      'Temporal Analysis — utilized ORDER BY with DATE and SEASON columns for chronological insights',
      'Error Handling — validated NULL, missing, and inconsistent data entries for accurate computation'
    ],
    functionsAndTechniques: [
      'COUNT(), SUM(), MAX(), MIN(), AVG() — for statistical computation',
      'GROUP BY / HAVING — for aggregation and post-aggregation filtering',
      'CASE WHEN — for conditional logic within result sets',
      'JOIN Operations — INNER JOIN, LEFT JOIN, FULL OUTER JOIN for multi-table integration',
      'DISTINCT and LIKE — for duplicate removal and pattern-based filtering',
      'ORDER BY / LIMIT — for sorting and data sampling',
      'WINDOW FUNCTIONS — RANK(), DENSE_RANK(), ROW_NUMBER() for performance ranking'
    ],
    impact:
      'Delivered a robust analytical SQL pipeline that generated actionable cricket insights from large relational datasets. Optimized data retrieval time by 45% through query restructuring and indexing. Provided a scalable SQL foundation for future integration with BI tools like Tableau or Power BI for visual analytics.',
    optimizationHighlights: [
      'Used composite indexing on columns frequently used in WHERE and JOIN conditions (e.g., team1, team2, match_id).',
      'Enforced referential integrity to prevent orphan records across match and delivery datasets.',
      'Applied query execution profiling (EXPLAIN ANALYZE) to minimize nested loop joins and improve cost efficiency.',
      'Simplified repetitive query logic through Common Table Expressions (CTEs).',
      'Reduced data redundancy by enforcing 3NF (Third Normal Form) in database design.'
    ],
    architecture: [
      'Database: PostgreSQL 15+',
      'Tables: `ipl` (match-level data), `deliveries` (ball-by-ball data)',
      'Primary Key: `id` (in ipl table)',
      'Foreign Key: `match_id` (in deliveries table)',
      'Indexes: Created on team, player, and match reference columns for high-performance lookups',
      'Execution Platform: pgAdmin / DBeaver IDE'
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
  { name: 'Mail', icon: 'mail', url: 'mailto:abhignagunda1@gmail.com' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/Abhigna41' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/naga-abhigna-gunda-aa1002247/' },
  { name: 'LeetCode', icon: 'leetcode', url: 'https://leetcode.com/u/NagaAbhignaGunda/' },
];

export const CONTACT_DETAILS = [
  { icon: 'mail', text: 'abhignagunda1@gmail.com', href: 'mailto:abhignagunda1@gmail.com' },
  { icon: 'phone', text: '+91 9347653053', href: 'tel:+919347653053' },
  { icon: 'mapPin', text: 'Hyderabad, India', href: 'https://maps.app.goo.gl/jEtgFwdjcxDg1yDDA' },
];
