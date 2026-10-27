import { Course, CareerRoadmap, Mentor, StudentReview, Assignment, QuizResult, LiveClass, Certificate } from '../types';

import heroImg from '../assets/images/coding_vidya_hero_1791009108075.jpg';
import courseFullstackImg from '../assets/images/course_fullstack_1791009120393.jpg';
import courseDatascienceImg from '../assets/images/course_datascience_1791009133875.jpg';
import courseDsaImg from '../assets/images/course_dsa_bootcamp_1791096191028.jpg';
import mentorShowcaseImg from '../assets/images/mentor_showcase_1791009145206.jpg';

export const HERO_IMAGE = heroImg;
export const COURSE_FULLSTACK_IMAGE = courseFullstackImg;
export const COURSE_DATASCIENCE_IMAGE = courseDatascienceImg;
export const COURSE_DSA_IMAGE = courseDsaImg;
export const MENTOR_SHOWCASE_IMAGE = mentorShowcaseImg;

export const COURSES: Course[] = [
  {
    id: 'course-fullstack',
    title: 'Full Stack Web Development (MERN & Next.js)',
    slug: 'full-stack-web-development',
    shortDescription: 'Master modern frontend and backend development with React, Node.js, Express, MongoDB, and Next.js from scratch.',
    description: 'A comprehensive, zero-to-hero career program that prepares you for high-paying software engineering roles. Build 6 production-grade full stack applications, learn state management, REST & GraphQL APIs, authentication, Docker containerization, and AWS cloud deployment.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    duration: '16 Weeks · 120 Hours',
    lessonsCount: 84,
    rating: 4.9,
    reviewsCount: 1420,
    price: 3499,
    originalPrice: 8999,
    badge: 'Bestseller',
    thumbnail: COURSE_FULLSTACK_IMAGE,
    instructor: {
      id: 'mentor-1',
      name: 'Rohan Mehta',
      title: 'Principal Engineer',
      company: 'Ex-Google',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Next.js 14', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker', 'REST APIs'],
    requirements: [
      'Basic computer literacy and dedication of 8-10 hours per week',
      'No prior programming experience required; we start from core basics',
      'A computer with at least 8GB RAM running Windows, macOS, or Linux'
    ],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Introduction to Web Architecture & Modern HTML5',
        description: 'Understand client-server architecture, semantic HTML, accessibility (a11y), and web fundamentals.',
        lessons: [
          { id: 'l1-1', title: 'How the Web Works: DNS, HTTP/HTTPS & Browsers', duration: '24 mins', type: 'video' },
          { id: 'l1-2', title: 'Semantic HTML5 Elements & SEO Best Practices', duration: '35 mins', type: 'video' },
          { id: 'l1-3', title: 'Forms, Validations & Accessible Design (WCAG)', duration: '40 mins', type: 'code' },
          { id: 'l1-4', title: 'Module 1 Assessment: Interactive Knowledge Check', duration: '15 mins', type: 'quiz' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Modern CSS3, Flexbox, Grid & Responsive Design',
        description: 'Build responsive, fluid multi-screen layouts with pure CSS, modern Grid, and Tailwind CSS.',
        lessons: [
          { id: 'l2-1', title: 'CSS Box Model, Specificity & Cascade Rules', duration: '30 mins', type: 'video' },
          { id: 'l2-2', title: 'Mastering Flexbox & 2D Grid Systems', duration: '45 mins', type: 'code' },
          { id: 'l2-3', title: 'Tailwind CSS Essentials & Modern Utility Styling', duration: '50 mins', type: 'code' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: JavaScript Core Fundamentals to Modern ES6+',
        description: 'Variables, closures, prototypes, asynchronous JavaScript, Promises, and DOM manipulation.',
        lessons: [
          { id: 'l3-1', title: 'Data Types, Scope, Closures & Execution Context', duration: '55 mins', type: 'video' },
          { id: 'l3-2', title: 'DOM Events, Event Bubbling & Dynamic UIs', duration: '42 mins', type: 'code' },
          { id: 'l3-3', title: 'Async/Await, Fetch API, and Promise Chaining', duration: '60 mins', type: 'code' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: React 19 Essentials, Hooks & State Architecture',
        description: 'Component architecture, custom hooks, React context, and performance optimization.',
        lessons: [
          { id: 'l4-1', title: 'React JSX, Virtual DOM & Lifecycle Mechanisms', duration: '45 mins', type: 'video' },
          { id: 'l4-2', title: 'Mastering useState, useEffect, useRef & useMemo', duration: '65 mins', type: 'code' },
          { id: 'l4-3', title: 'Building Custom Reusable React Hooks', duration: '40 mins', type: 'code' }
        ]
      },
      {
        id: 'm5',
        title: 'Module 5: Backend Engineering with Node.js & Express',
        description: 'RESTful API construction, Express middleware, routing, and token authentication.',
        lessons: [
          { id: 'l5-1', title: 'Node.js Event Loop, Streams & File System', duration: '50 mins', type: 'video' },
          { id: 'l5-2', title: 'Building RESTful APIs with Express.js', duration: '60 mins', type: 'code' },
          { id: 'l5-3', title: 'JWT Authentication & Role-Based Authorization', duration: '55 mins', type: 'code' }
        ]
      },
      {
        id: 'm6',
        title: 'Module 6: Capstone Projects & Production Deployment',
        description: 'Deploy production full stack apps to cloud with CI/CD and containerization.',
        lessons: [
          { id: 'l6-1', title: 'Full Stack E-Commerce Platform Architecture', duration: '85 mins', type: 'code' },
          { id: 'l6-2', title: 'Dockerizing Full Stack Apps & Cloud Hosting', duration: '50 mins', type: 'video' }
        ]
      },
      {
        id: 'm7',
        title: 'Module 7: Technical Interview Preparation & System Design',
        description: 'Mock tech interviews, resume reviews, salary negotiation, and portfolio presentation.',
        lessons: [
          { id: 'l7-1', title: 'High-Level System Design for Web Engineers', duration: '70 mins', type: 'video' },
          { id: 'l7-2', title: 'Top 50 Full Stack Coding Interview Challenges', duration: '90 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'DevConnect Social Network', description: 'Real-time collaborative developer platform with messaging, profiles, and post feeds.', techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'] },
      { id: 'p2', title: 'E-Commerce Marketplace with Payments', description: 'Full checkout flow with Stripe, order management, inventory tracking, and admin CMS.', techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe'] },
      { id: 'p3', title: 'SaaS Project Management Kanban Tool', description: 'Drag-and-drop workspace with team workspaces, activity logs, and real-time updates.', techStack: ['TypeScript', 'React', 'Tailwind', 'Express'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Vikas Sharma', rating: 5, comment: 'Coding Vidya transformed my career! Rohan sir explains complex topics with such intuitive visual analogies. Got hired as SDE-1 at Razorpay.', date: '2 weeks ago' },
      { id: 'r2', studentName: 'Priya Iyer', rating: 5, comment: 'The curriculum is super practical. Instead of just boring syntax, every module culminates in a real product you can showcase.', date: '1 month ago' }
    ],
    featured: true
  },
  {
    id: 'course-datascience',
    title: 'Data Science & Machine Learning Bootcamp',
    slug: 'data-science-machine-learning',
    shortDescription: 'From Python and statistics to deep learning neural networks, scikit-learn, and real-world ML pipelines.',
    description: 'Learn to extract insights, train predictive models, and deploy AI solutions. Master Python, NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow, and SQL. Work with real datasets from Kaggle, build recommender engines, and analyze financial models.',
    category: 'Data Science',
    difficulty: 'Intermediate',
    duration: '14 Weeks · 100 Hours',
    lessonsCount: 72,
    rating: 4.85,
    reviewsCount: 980,
    price: 3799,
    originalPrice: 9499,
    badge: 'Popular',
    thumbnail: COURSE_DATASCIENCE_IMAGE,
    instructor: {
      id: 'mentor-2',
      name: 'Dr. Neha Verma',
      title: 'Lead AI Scientist',
      company: 'Ex-Microsoft Research',
      avatar: MENTOR_SHOWCASE_IMAGE,
    },
    skills: ['Python', 'Pandas & NumPy', 'Data Visualization', 'Scikit-Learn', 'Linear Regression', 'Neural Networks', 'SQL & BigQuery', 'MLOps'],
    requirements: ['High school level mathematics (basics of algebra)', 'Curiosity to work with data', 'Computer with Python 3.10+'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Python for Data Analysis & Mathematical Foundations',
        lessons: [
          { id: 'l1', title: 'Python Syntax, List Comprehensions & Generators', duration: '40 mins', type: 'video' },
          { id: 'l2', title: 'Linear Algebra & Probability for Machine Learning', duration: '55 mins', type: 'video' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Data Wrangling with Pandas & Vectorized NumPy',
        lessons: [
          { id: 'l3', title: 'Cleaning Messy Data, Missing Values & Imputation', duration: '50 mins', type: 'code' },
          { id: 'l4', title: 'Multi-Index GroupBy Operations & Pivots', duration: '45 mins', type: 'code' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Supervised & Unsupervised Machine Learning Models',
        lessons: [
          { id: 'l5', title: 'Classification & Regression with Scikit-Learn', duration: '60 mins', type: 'code' },
          { id: 'l6', title: 'Random Forests, XGBoost & Hyperparameter Tuning', duration: '65 mins', type: 'code' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 4: Deep Learning with TensorFlow & Keras',
        lessons: [
          { id: 'l7', title: 'Feedforward Neural Networks & Backpropagation', duration: '60 mins', type: 'video' },
          { id: 'l8', title: 'Computer Vision with Convolutional Networks (CNN)', duration: '70 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Customer Churn Predictor', description: 'Predict churn with 93% accuracy on telecommunications dataset using XGBoost.', techStack: ['Python', 'XGBoost', 'Streamlit'] },
      { id: 'p2', title: 'AI Medical Diagnosis Classifier', description: 'Deep learning CNN model for pneumonia detection from chest X-rays.', techStack: ['TensorFlow', 'OpenCV', 'FastAPI'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Aditya Kulkarni', rating: 5, comment: 'Dr. Neha explains mathematical intuition before jumping into code. Exactly what I needed to switch from QA to Data Analyst.', date: '3 weeks ago' }
    ],
    featured: true
  },
  {
    id: 'course-python',
    title: 'Python Programming: Zero to Master',
    slug: 'python-programming-zero-to-master',
    shortDescription: 'Master modern Python 3.12, OOP, data structures, automation scripting, and API development.',
    description: 'The most comprehensive Python course designed for absolute beginners and aspiring developers. Learn clean coding, object-oriented design, file I/O, error handling, web scraping, and building REST APIs with FastAPI.',
    category: 'Programming',
    difficulty: 'Beginner',
    duration: '8 Weeks · 60 Hours',
    lessonsCount: 56,
    rating: 4.92,
    reviewsCount: 2150,
    price: 1999,
    originalPrice: 4999,
    badge: 'Beginner Choice',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-3',
      name: 'Ananya Deshmukh',
      title: 'Senior Backend Engineer',
      company: 'Amazon',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['Python 3.12', 'Object Oriented Programming', 'Data Structures', 'Web Scraping', 'FastAPI', 'Automation', 'Unit Testing'],
    requirements: ['No prior programming background required', 'A computer connected to the internet'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Introduction to Python & Core Syntax',
        lessons: [
          { id: 'l1', title: 'Setting up VS Code, Virtual Environments & Pip', duration: '20 mins', type: 'video' },
          { id: 'l2', title: 'Variables, Data Types, Strings & Type Hints', duration: '35 mins', type: 'code' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Control Flow, Loops & Functions',
        lessons: [
          { id: 'l3', title: 'Conditional Logic, Match Statements & Iterations', duration: '40 mins', type: 'code' },
          { id: 'l4', title: 'Functions, *args, **kwargs & Scope', duration: '45 mins', type: 'code' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Object-Oriented Programming (OOP) in Python',
        lessons: [
          { id: 'l5', title: 'Classes, Objects, Inheritance & Polymorphism', duration: '55 mins', type: 'code' },
          { id: 'l6', title: 'Dunder Magic Methods & Encapsulation', duration: '40 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Automated Job Application & Scraper Bot', description: 'Automate search and extraction of remote developer listings.', techStack: ['Python', 'BeautifulSoup', 'Selenium'] },
      { id: 'p2', title: 'FastAPI Microservice with SQLite', description: 'High-speed REST API with CRUD operations and Swagger documentation.', techStack: ['FastAPI', 'Pydantic', 'SQLAlchemy'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Kunal Sen', rating: 5, comment: 'Hands down the best beginner coding course in India. Clear explanations and no fluff.', date: '2 weeks ago' }
    ],
    featured: true
  },
  {
    id: 'course-dsa',
    title: 'Data Structures & Algorithms (DSA) Bootcamp',
    slug: 'data-structures-and-algorithms-bootcamp',
    shortDescription: 'Ace FAANG & Tier-1 product company interviews with 250+ solved algorithm challenges in C++ & Java.',
    description: 'Master time and space complexity, arrays, linked lists, trees, graphs, dynamic programming, backtracking, and competitive programming patterns. Taught by instructors who cleared Google, Microsoft, and Uber interviews.',
    category: 'DSA',
    difficulty: 'Advanced',
    duration: '12 Weeks · 90 Hours',
    lessonsCount: 68,
    rating: 4.95,
    reviewsCount: 1840,
    price: 2999,
    originalPrice: 7999,
    badge: 'Interview Prep',
    thumbnail: COURSE_DSA_IMAGE,
    instructor: {
      id: 'mentor-4',
      name: 'Aman Singhania',
      title: 'Staff Software Engineer',
      company: 'Uber',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['Big-O Analysis', 'Recursion & Backtracking', 'Binary Search Trees', 'Graph Algorithms (BFS/DFS, Dijkstra)', 'Dynamic Programming', 'Trie & Segment Trees'],
    requirements: ['Comfortable in either C++, Java, or Python', 'Basic familiarity with loops and functions'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Asymptotic Analysis & Two-Pointer Patterns',
        lessons: [
          { id: 'l1', title: 'Big-O, Omega & Theta Complexity Breakdown', duration: '30 mins', type: 'video' },
          { id: 'l2', title: 'Sliding Window & Two-Pointer Algorithmic Patterns', duration: '60 mins', type: 'code' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Trees, BSTs & Binary Heaps',
        lessons: [
          { id: 'l3', title: 'Tree Traversals (Inorder, Preorder, Level-Order)', duration: '50 mins', type: 'code' },
          { id: 'l4', title: 'Lowest Common Ancestor & Diameter of Tree', duration: '45 mins', type: 'code' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 3: Dynamic Programming (DP) Demystified',
        lessons: [
          { id: 'l5', title: 'Top-Down Memoization vs Bottom-Up Tabulation', duration: '70 mins', type: 'code' },
          { id: 'l6', title: '0/1 Knapsack, Coin Change & Edit Distance', duration: '80 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Shortest Path Route Navigator', description: 'Interactive visualizer using Dijkstra and A* algorithms on real graph maps.', techStack: ['C++', 'Graph Theory', 'Algorithms'] },
      { id: 'p2', title: 'Sudoku Solver & N-Queens Visualizer', description: 'High-performance backtracking engine solving complex constraint problems.', techStack: ['Java', 'Backtracking'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Tanvi Agarwal', rating: 5, comment: 'Cleared my SDE-2 interview at Amazon thanks to Aman sir’s DP mental models!', date: '3 days ago' }
    ],
    featured: true
  },
  {
    id: 'course-react',
    title: 'React.js & Next.js: Modern Frontend Architecture',
    slug: 'react-nextjs-modern-frontend',
    shortDescription: 'Build ultra-fast, responsive web apps with React 19, Server Components, TypeScript, and Tailwind.',
    description: 'Learn modern React patterns: React Server Components, Server Actions, TanStack Query, Zustand, optimistic UI, server-side rendering, and production web performance.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    duration: '10 Weeks · 70 Hours',
    lessonsCount: 52,
    rating: 4.88,
    reviewsCount: 890,
    price: 2499,
    originalPrice: 5999,
    badge: 'Hot & Trending',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-1',
      name: 'Rohan Mehta',
      title: 'Principal Engineer',
      company: 'Ex-Google',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['React 19', 'Next.js App Router', 'TypeScript', 'Zustand State Management', 'Tailwind CSS', 'TanStack Query', 'Optimistic UI'],
    requirements: ['Good understanding of modern JavaScript (ES6+)', 'HTML & CSS fundamentals'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: React 19 Core & Component Lifecycle',
        lessons: [
          { id: 'l1', title: 'Virtual DOM, Reconciliation & React Compiler', duration: '40 mins', type: 'video' },
          { id: 'l2', title: 'Custom Hooks Architecture & Clean Reusability', duration: '50 mins', type: 'code' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Next.js 14/15 App Router & Server Components',
        lessons: [
          { id: 'l3', title: 'Server Components vs Client Components', duration: '45 mins', type: 'video' },
          { id: 'l4', title: 'Server Actions, Form Mutations & Streaming SSR', duration: '60 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Real-time Notion-style Collaborative Editor', description: 'Rich text block editor with multi-user presence and local-first offline syncing.', techStack: ['Next.js', 'TypeScript', 'Tailwind', 'TipTap'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Mayank Joshi', rating: 5, comment: 'The section on React 19 and Next.js App Router is the most up-to-date content anywhere.', date: '1 week ago' }
    ]
  },
  {
    id: 'course-java',
    title: 'Java Programming & Spring Boot Enterprise Masterclass',
    slug: 'java-programming-spring-boot',
    shortDescription: 'Enterprise software development with Java 21, Spring Boot 3, Microservices, Hibernate, and Kafka.',
    description: 'Become a high-demand Java enterprise engineer. Master Java OOP, Collections framework, Multi-threading, JVM internals, Spring Data JPA, Microservice architectures, and secure REST APIs.',
    category: 'Programming',
    difficulty: 'Intermediate',
    duration: '12 Weeks · 85 Hours',
    lessonsCount: 64,
    rating: 4.82,
    reviewsCount: 760,
    price: 2799,
    originalPrice: 6999,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-5',
      name: 'Rajesh Kulkarni',
      title: 'Enterprise Architect',
      company: 'Oracle',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['Java 21', 'Spring Boot 3', 'Spring Security', 'Microservices', 'PostgreSQL', 'Docker', 'Apache Kafka'],
    requirements: ['Basic computer science fundamentals', 'Willingness to master object-oriented principles'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Modern Java Fundamentals & Collections',
        lessons: [
          { id: 'l1', title: 'Java 21 Records, Pattern Matching & Virtual Threads', duration: '45 mins', type: 'video' },
          { id: 'l2', title: 'Deep Dive: HashMap, ArrayList & Concurrent Collections', duration: '55 mins', type: 'code' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 2: Spring Boot 3 & Microservice REST Architecture',
        lessons: [
          { id: 'l3', title: 'Dependency Injection, Spring Beans & Configuration', duration: '50 mins', type: 'video' },
          { id: 'l4', title: 'Building Scalable Microservices with Spring Cloud', duration: '75 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Banking Ledger & Transaction Engine', description: 'Double-entry ACID-compliant fintech microservice handling 10,000 tx/sec.', techStack: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Sameer Khan', rating: 5, comment: 'Rajesh sir has 18+ years of industry experience and it shows in every single design pattern discussion.', date: '3 weeks ago' }
    ]
  },
  {
    id: 'course-cpp',
    title: 'C++ Systems Programming & Competitive Coding',
    slug: 'cpp-systems-programming',
    shortDescription: 'Modern C++20, pointers, low-level memory management, STL mastery, and high-performance engineering.',
    description: 'Learn C++ from the ground up: pointers, memory layout, RAII, templates, STL containers, move semantics, and fast I/O algorithms used by high-frequency trading (HFT) and game development teams.',
    category: 'Programming',
    difficulty: 'Advanced',
    duration: '10 Weeks · 75 Hours',
    lessonsCount: 58,
    rating: 4.9,
    reviewsCount: 620,
    price: 2499,
    originalPrice: 5999,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-4',
      name: 'Aman Singhania',
      title: 'Staff Software Engineer',
      company: 'Uber',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['Modern C++20', 'Memory Management & Pointers', 'STL Algorithms', 'Template Metaprogramming', 'Multithreading'],
    requirements: ['Basic understanding of logic building'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Low-Level Foundations & Memory Architecture',
        lessons: [
          { id: 'l1', title: 'Stack vs Heap, Raw Pointers & Address Sanitizers', duration: '50 mins', type: 'video' },
          { id: 'l2', title: 'Smart Pointers: unique_ptr, shared_ptr & RAII', duration: '45 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'High-Frequency Order Book Simulation', description: 'Ultra-low latency limit order book with sub-microsecond execution time.', techStack: ['C++20', 'Memory Arenas', 'Multithreading'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Gaurav Rao', rating: 5, comment: 'Crucial for passing systems engineering rounds.', date: '2 months ago' }
    ]
  },
  {
    id: 'course-c',
    title: 'C Programming & Hardware Memory Fundamentals',
    slug: 'c-programming-memory-fundamentals',
    shortDescription: 'Build an unbreakable foundation in computer science with C programming, pointers, and memory layout.',
    description: 'Every great software engineer understands how computers execute instructions. Learn CPU registers, stack/heap frames, memory allocation with malloc/free, bitwise manipulation, and custom data structures.',
    category: 'Programming',
    difficulty: 'Beginner',
    duration: '6 Weeks · 45 Hours',
    lessonsCount: 38,
    rating: 4.87,
    reviewsCount: 1100,
    price: 1499,
    originalPrice: 3999,
    isFree: false,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-5',
      name: 'Rajesh Kulkarni',
      title: 'Enterprise Architect',
      company: 'Oracle',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['C Standards', 'Pointers & Dereferencing', 'Dynamic Memory (malloc/free)', 'Structures & Unions', 'File I/O'],
    requirements: ['No prerequisites; perfect for college first-year students'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: The Machine Model & C Syntax',
        lessons: [
          { id: 'l1', title: 'Compilers, Assemblers & Memory Addressing', duration: '35 mins', type: 'video' },
          { id: 'l2', title: 'Pointers, Arrays and Pointer Arithmetic', duration: '50 mins', type: 'code' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Custom Memory Allocator (MyMalloc)', description: 'Implement your own heap allocator with free list and coalescing.', techStack: ['C', 'Memory Management'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Akash Gupta', rating: 5, comment: 'Helped me top my university exams and actually understand pointers for real.', date: '1 month ago' }
    ]
  },
  {
    id: 'course-html-css',
    title: 'HTML5, Modern CSS3 & Tailwind Masterclass',
    slug: 'html-css-tailwind-masterclass',
    shortDescription: 'Design visually stunning, responsive, and accessible web interfaces with clean modern CSS.',
    description: 'Learn modern responsive UI development: CSS Grid, Flexbox, transitions, typography hierarchies, mobile-first layouts, and the full power of Tailwind CSS.',
    category: 'Web Development',
    difficulty: 'Beginner',
    duration: '4 Weeks · 30 Hours',
    lessonsCount: 32,
    rating: 4.91,
    reviewsCount: 1540,
    price: 0,
    isFree: true,
    badge: '100% Free',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-1',
      name: 'Rohan Mehta',
      title: 'Principal Engineer',
      company: 'Ex-Google',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['Semantic HTML5', 'CSS Flexbox', 'CSS Grid', 'Tailwind CSS', 'Responsive Design', 'Web Accessibility (a11y)'],
    requirements: ['Any computer, no software fees needed'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: HTML5 Foundations & Accessibility',
        lessons: [
          { id: 'l1', title: 'Semantic Tags, Forms & Screen Readers', duration: '25 mins', type: 'video' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Responsive SaaS Landing Page', description: 'Pixel-perfect mobile/desktop landing page matching modern Figma specs.', techStack: ['HTML5', 'CSS3', 'Tailwind'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Simran Kaur', rating: 5, comment: 'Incredible that this high-quality course is completely free. Thank you Coding Vidya!', date: '2 weeks ago' }
    ]
  },
  {
    id: 'course-nodejs',
    title: 'Node.js, Express & Microservices Architecture',
    slug: 'nodejs-express-microservices',
    shortDescription: 'Scalable backend engineering, asynchronous I/O, Redis caching, message queues, and API gateways.',
    description: 'Dive into high-performance backend systems with Node.js. Build production APIs, handle websockets for real-time messaging, implement Redis caching, and design event-driven microservices.',
    category: 'Web Development',
    difficulty: 'Intermediate',
    duration: '8 Weeks · 55 Hours',
    lessonsCount: 44,
    rating: 4.86,
    reviewsCount: 710,
    price: 2299,
    originalPrice: 4999,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-3',
      name: 'Ananya Deshmukh',
      title: 'Senior Backend Engineer',
      company: 'Amazon',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['Node.js Runtime', 'Express.js', 'Redis Caching', 'PostgreSQL & MongoDB', 'WebSocket', 'Authentication', 'Microservices'],
    requirements: ['JavaScript knowledge required'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Asynchronous Architecture & Event Loop',
        lessons: [
          { id: 'l1', title: 'Libuv, Worker Threads & Event Loop Phases', duration: '40 mins', type: 'video' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Real-Time Notification & Chat Engine', description: 'High-throughput websocket messaging engine with Redis pub/sub.', techStack: ['Node.js', 'Socket.io', 'Redis'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Arjun Das', rating: 5, comment: 'The Redis caching and websocket modules were top tier.', date: '1 month ago' }
    ]
  },
  {
    id: 'course-database',
    title: 'Database Engineering: SQL, PostgreSQL & MongoDB',
    slug: 'database-engineering-sql-nosql',
    shortDescription: 'Master relational and NoSQL databases, query optimization, indexing, ACID transactions, and sharding.',
    description: 'Become a database pro. Master complex SQL queries, query execution plans (EXPLAIN ANALYZE), B-Tree indexing, normalization, partitioning, and schema design for high-scale applications.',
    category: 'Database',
    difficulty: 'Intermediate',
    duration: '6 Weeks · 40 Hours',
    lessonsCount: 36,
    rating: 4.89,
    reviewsCount: 540,
    price: 1899,
    originalPrice: 4499,
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-5',
      name: 'Rajesh Kulkarni',
      title: 'Enterprise Architect',
      company: 'Oracle',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['PostgreSQL', 'Complex SQL Joins', 'B-Tree & GIN Indexing', 'MongoDB Aggregations', 'ACID Transactions', 'Sharding'],
    requirements: ['Basic computer knowledge'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: Relational Schema Modeling & SQL',
        lessons: [
          { id: 'l1', title: 'ER Diagrams, 3NF Normalization & Constraints', duration: '35 mins', type: 'video' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'Analytics Warehouse Query Optimizer', description: 'Optimizing slow multi-table joins from 12s down to 85ms using compound indexes.', techStack: ['PostgreSQL', 'SQL'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Kavita Sen', rating: 5, comment: 'Essential knowledge every software engineer must know before interviews.', date: '3 weeks ago' }
    ]
  },
  {
    id: 'course-interview-prep',
    title: 'FAANG & Product Company Tech Interview Mastery',
    slug: 'tech-interview-mastery',
    shortDescription: 'Comprehensive system design, live coding patterns, behavioral STAR frameworks, and resume review.',
    description: 'The ultimate launchpad for landing SDE-1 and SDE-2 positions. Real interview case studies from Google, Amazon, Microsoft, and Uber. Master high-level and low-level system design, coding rounds, and leadership behavioral questions.',
    category: 'Interview Preparation',
    difficulty: 'Advanced',
    duration: '8 Weeks · 50 Hours',
    lessonsCount: 42,
    rating: 4.96,
    reviewsCount: 1290,
    price: 2999,
    originalPrice: 6999,
    badge: 'Career Accelerator',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    instructor: {
      id: 'mentor-4',
      name: 'Aman Singhania',
      title: 'Staff Software Engineer',
      company: 'Uber',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
    skills: ['System Design (HLD & LLD)', 'Live Coding Best Practices', 'Behavioral STAR Method', 'Resume Optimization', 'Offer Negotiation'],
    requirements: ['Knowledge of at least one programming language and core data structures'],
    curriculum: [
      {
        id: 'm1',
        title: 'Module 1: System Design Principles',
        lessons: [
          { id: 'l1', title: 'Designing TinyURL & Distributed Rate Limiters', duration: '60 mins', type: 'video' },
          { id: 'l2', title: 'Designing WhatsApp / Real-time Messaging System', duration: '75 mins', type: 'video' }
        ]
      }
    ],
    projects: [
      { id: 'p1', title: 'End-to-End System Design Portfolio', description: 'Design documents and diagrams for 5 high-scale distributed systems.', techStack: ['Distributed Systems', 'Load Balancers', 'CAP Theorem'] }
    ],
    reviews: [
      { id: 'r1', studentName: 'Ritesh Varma', rating: 5, comment: 'I got offers from both Microsoft and Swiggy! The mock interviews gave me immense confidence.', date: '1 month ago' }
    ]
  }
];

export const ROADMAPS: CareerRoadmap[] = [
  {
    id: 'web-developer',
    title: 'Web Developer Roadmap',
    slug: 'web-developer-roadmap',
    description: 'The definitive path to becoming a professional Web Developer in 2026, starting from web fundamentals to responsive production applications.',
    iconName: 'Globe',
    estimatedTime: '5-6 Months',
    averageSalary: '₹6 - 15 LPA',
    level: 'Beginner to Intermediate',
    steps: [
      {
        stepNumber: 1,
        title: 'HTML & Semantic Web',
        description: 'Understand the skeleton of the internet, semantic tags, accessibility (WCAG), SEO metadata, forms, and browser rendering.',
        keySkills: ['Semantic HTML5', 'Forms & Validations', 'SEO & OpenGraph', 'Accessibility'],
        recommendedCourseId: 'course-html-css',
        recommendedCourseTitle: 'HTML5, Modern CSS3 & Tailwind Masterclass',
        projectIdea: 'Build a fully accessible, semantic multi-page portfolio website.',
        level: 'Beginner',
        estimatedHours: '25 Hours'
      },
      {
        stepNumber: 2,
        title: 'Modern CSS3 & Styling Systems',
        description: 'Master CSS cascade, Flexbox, 2D CSS Grid, animations, mobile-first responsive media queries, and Tailwind CSS utility classes.',
        keySkills: ['CSS Flexbox', 'CSS Grid', 'Tailwind CSS', 'Responsive Design', 'CSS Variables'],
        recommendedCourseId: 'course-html-css',
        recommendedCourseTitle: 'HTML5, Modern CSS3 & Tailwind Masterclass',
        projectIdea: 'Create an e-commerce product catalog with interactive filters and mobile drawers.',
        level: 'Beginner',
        estimatedHours: '35 Hours'
      },
      {
        stepNumber: 3,
        title: 'JavaScript Fundamentals to ES6+',
        description: 'Learn variables, data types, closures, array methods, DOM manipulation, asynchronous programming (promises, async/await), and Fetch API.',
        keySkills: ['ES6+ Syntax', 'DOM Manipulation', 'Async/Await', 'Event Loop', 'Fetch API'],
        recommendedCourseId: 'course-fullstack',
        recommendedCourseTitle: 'Full Stack Web Development (MERN & Next.js)',
        projectIdea: 'Interactive Weather & Currency Dashboard consuming public REST APIs.',
        level: 'Beginner',
        estimatedHours: '50 Hours'
      },
      {
        stepNumber: 4,
        title: 'Git & Version Control Collaboration',
        description: 'Version control your projects with Git branches, pull requests, resolving merge conflicts, and GitHub workflows.',
        keySkills: ['Git CLI', 'GitHub Pull Requests', 'Branching Strategies', 'Markdown Documentation'],
        recommendedCourseId: 'course-fullstack',
        recommendedCourseTitle: 'Full Stack Web Development (MERN & Next.js)',
        projectIdea: 'Collaborate on an open-source tool with pull requests and release tags.',
        level: 'Beginner',
        estimatedHours: '15 Hours'
      },
      {
        stepNumber: 5,
        title: 'React.js & Component Architecture',
        description: 'Component lifecycles, hooks (useState, useEffect, useMemo), state management with Zustand/Redux, and client-side routing.',
        keySkills: ['React 19', 'Hooks', 'Component Design', 'Zustand', 'React Router'],
        recommendedCourseId: 'course-react',
        recommendedCourseTitle: 'React.js & Next.js: Modern Frontend Architecture',
        projectIdea: 'Kanban project management board with drag-and-drop state synchronization.',
        level: 'Intermediate',
        estimatedHours: '60 Hours'
      },
      {
        stepNumber: 6,
        title: 'Backend with Node.js & Express',
        description: 'Build robust REST APIs, handle requests/responses, middleware authentication, JWT tokens, and rate limiting.',
        keySkills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware'],
        recommendedCourseId: 'course-nodejs',
        recommendedCourseTitle: 'Node.js, Express & Microservices Architecture',
        projectIdea: 'User authentication and role-based authorization service with email verification.',
        level: 'Intermediate',
        estimatedHours: '45 Hours'
      },
      {
        stepNumber: 7,
        title: 'Databases: Relational & NoSQL',
        description: 'Store and query application data with PostgreSQL and MongoDB, write complex joins, and optimize schema indexing.',
        keySkills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Mongoose', 'Query Indexing'],
        recommendedCourseId: 'course-database',
        recommendedCourseTitle: 'Database Engineering: SQL, PostgreSQL & MongoDB',
        projectIdea: 'E-commerce database schema handling inventory, carts, and order checkout transactions.',
        level: 'Intermediate',
        estimatedHours: '40 Hours'
      },
      {
        stepNumber: 8,
        title: 'Full Stack Integration & Production Projects',
        description: 'Unify frontend and backend into a cohesive product with secure payment gateways, websockets, and file storage.',
        keySkills: ['Full Stack Integration', 'Stripe Payments', 'WebSockets', 'Cloudinary / S3'],
        recommendedCourseId: 'course-fullstack',
        recommendedCourseTitle: 'Full Stack Web Development (MERN & Next.js)',
        projectIdea: 'Full-featured SaaS learning platform with payments and certificate generation.',
        level: 'Advanced',
        estimatedHours: '70 Hours'
      },
      {
        stepNumber: 9,
        title: 'Technical Interview Preparation',
        description: 'System design basics, web performance (Core Web Vitals), frontend coding challenges, and mock interview practice.',
        keySkills: ['System Design Basics', 'Web Performance', 'LeetCode Easy/Medium', 'STAR Behavioral'],
        recommendedCourseId: 'course-interview-prep',
        recommendedCourseTitle: 'FAANG & Product Company Tech Interview Mastery',
        projectIdea: 'Complete 30 live coding challenges and conduct 2 peer mock interviews.',
        level: 'Advanced',
        estimatedHours: '40 Hours'
      }
    ]
  },
  {
    id: 'python-developer',
    title: 'Python Developer Roadmap',
    slug: 'python-developer-roadmap',
    description: 'Step-by-step pathway from Python fundamentals to backend frameworks, asynchronous APIs, database integrations, and deployment.',
    iconName: 'Code',
    estimatedTime: '4-5 Months',
    averageSalary: '₹7 - 18 LPA',
    level: 'Beginner to Advanced',
    steps: [
      {
        stepNumber: 1,
        title: 'Python Basics & Standard Library',
        description: 'Syntax, variables, conditionals, loops, functions, lists, dictionaries, tuples, and file handling.',
        keySkills: ['Python 3.12', 'Data Types', 'File I/O', 'Virtual Environments'],
        recommendedCourseId: 'course-python',
        recommendedCourseTitle: 'Python Programming: Zero to Master',
        projectIdea: 'CLI Expense Tracker with file persistence and CSV exports.',
        level: 'Beginner',
        estimatedHours: '30 Hours'
      },
      {
        stepNumber: 2,
        title: 'Object-Oriented Programming (OOP)',
        description: 'Classes, objects, inheritance, polymorphism, encapsulation, dunder methods, and dataclasses.',
        keySkills: ['OOP Principles', 'Dunder Methods', 'Dataclasses', 'Exceptions'],
        recommendedCourseId: 'course-python',
        recommendedCourseTitle: 'Python Programming: Zero to Master',
        projectIdea: 'Bank account and transaction management simulation engine.',
        level: 'Beginner',
        estimatedHours: '35 Hours'
      },
      {
        stepNumber: 3,
        title: 'Data Structures & Algorithms in Python',
        description: 'Recursion, stacks, queues, hash maps, sorting, binary search, and Big-O efficiency.',
        keySkills: ['Big-O', 'Hash Tables', 'Binary Search', 'Collections Module'],
        recommendedCourseId: 'course-dsa',
        recommendedCourseTitle: 'Data Structures & Algorithms (DSA) Bootcamp',
        projectIdea: 'Maze pathfinder visualizer using BFS/DFS search algorithms.',
        level: 'Intermediate',
        estimatedHours: '45 Hours'
      },
      {
        stepNumber: 4,
        title: 'APIs & Web Frameworks (FastAPI / Django)',
        description: 'Build fast asynchronous REST APIs with FastAPI, Pydantic type validation, and Swagger UI.',
        keySkills: ['FastAPI', 'Pydantic', 'Asyncio', 'JWT Authentication', 'Swagger UI'],
        recommendedCourseId: 'course-python',
        recommendedCourseTitle: 'Python Programming: Zero to Master',
        projectIdea: 'Production Book Review & Rating REST API with authentication.',
        level: 'Intermediate',
        estimatedHours: '50 Hours'
      },
      {
        stepNumber: 5,
        title: 'Databases & ORM (SQLAlchemy / PostgreSQL)',
        description: 'Connect Python to databases, write migrations with Alembic, and perform ACID transactions.',
        keySkills: ['SQLAlchemy', 'PostgreSQL', 'Alembic Migrations', 'Redis'],
        recommendedCourseId: 'course-database',
        recommendedCourseTitle: 'Database Engineering: SQL, PostgreSQL & MongoDB',
        projectIdea: 'Inventory management database service with relationship queries.',
        level: 'Intermediate',
        estimatedHours: '35 Hours'
      },
      {
        stepNumber: 6,
        title: 'Testing, Docker & Cloud Deployment',
        description: 'Write unit tests with pytest, containerize with Docker, and deploy to AWS/GCP.',
        keySkills: ['Pytest', 'Docker', 'CI/CD GitHub Actions', 'Cloud Run / AWS'],
        recommendedCourseId: 'course-interview-prep',
        recommendedCourseTitle: 'FAANG & Product Company Tech Interview Mastery',
        projectIdea: 'Dockerized microservice deployed with automated GitHub CI/CD test runs.',
        level: 'Advanced',
        estimatedHours: '40 Hours'
      }
    ]
  },
  {
    id: 'java-developer',
    title: 'Java Developer Roadmap',
    slug: 'java-developer-roadmap',
    description: 'Enterprise backend roadmap: Java 21, OOP, Collections, Spring Boot 3, Microservices, and Kafka.',
    iconName: 'Coffee',
    estimatedTime: '5-6 Months',
    averageSalary: '₹8 - 20 LPA',
    level: 'Beginner to Advanced',
    steps: [
      {
        stepNumber: 1,
        title: 'Java Core & Modern Syntax',
        description: 'JVM architecture, data types, control flow, methods, packages, and Java 21 features.',
        keySkills: ['Java 21', 'JVM Internals', 'Type Safety', 'Exception Handling'],
        recommendedCourseId: 'course-java',
        recommendedCourseTitle: 'Java Programming & Spring Boot Enterprise Masterclass',
        projectIdea: 'Student grading and report card generation system in console.',
        level: 'Beginner',
        estimatedHours: '30 Hours'
      },
      {
        stepNumber: 2,
        title: 'OOP & Collections Framework',
        description: 'Interfaces, abstract classes, generics, ArrayList, LinkedList, HashMap, HashSet, and Streams API.',
        keySkills: ['Collections Framework', 'Generics', 'Java Streams & Lambdas', 'Comparator'],
        recommendedCourseId: 'course-java',
        recommendedCourseTitle: 'Java Programming & Spring Boot Enterprise Masterclass',
        projectIdea: 'In-memory supermarket inventory and billing engine using Streams.',
        level: 'Beginner',
        estimatedHours: '40 Hours'
      },
      {
        stepNumber: 3,
        title: 'Data Structures & Algorithms in Java',
        description: 'Master arrays, trees, graphs, sorting, searching, and recursion for technical interviews.',
        keySkills: ['DSA in Java', 'Recursion', 'Trees', 'Graphs', 'Dynamic Programming'],
        recommendedCourseId: 'course-dsa',
        recommendedCourseTitle: 'Data Structures & Algorithms (DSA) Bootcamp',
        projectIdea: 'Top 100 LeetCode patterns solved with clean Java idiomatic code.',
        level: 'Intermediate',
        estimatedHours: '60 Hours'
      },
      {
        stepNumber: 4,
        title: 'Relational SQL & Hibernate ORM',
        description: 'Database design, JDBC, Hibernate, JPA annotations, entity relationships, and lazy loading.',
        keySkills: ['SQL', 'JPA / Hibernate', 'Spring Data JPA', 'PostgreSQL'],
        recommendedCourseId: 'course-database',
        recommendedCourseTitle: 'Database Engineering: SQL, PostgreSQL & MongoDB',
        projectIdea: 'Library book reservation database service with JPA relationships.',
        level: 'Intermediate',
        estimatedHours: '35 Hours'
      },
      {
        stepNumber: 5,
        title: 'Spring Boot 3 & REST APIs',
        description: 'Dependency Injection, Spring MVC, REST controllers, Spring Security, JWT, and validation.',
        keySkills: ['Spring Boot 3', 'Spring Security', 'REST APIs', 'JWT Tokens', 'Swagger'],
        recommendedCourseId: 'course-java',
        recommendedCourseTitle: 'Java Programming & Spring Boot Enterprise Masterclass',
        projectIdea: 'Hotel reservation booking engine with payment integration.',
        level: 'Intermediate',
        estimatedHours: '55 Hours'
      },
      {
        stepNumber: 6,
        title: 'Microservices & Enterprise Messaging (Kafka)',
        description: 'Service discovery with Eureka, API Gateway, event-driven messaging with Apache Kafka, and Docker.',
        keySkills: ['Microservices', 'Apache Kafka', 'API Gateway', 'Docker', 'Resilience4j'],
        recommendedCourseId: 'course-java',
        recommendedCourseTitle: 'Java Programming & Spring Boot Enterprise Masterclass',
        projectIdea: 'Distributed e-commerce order processing microservices with Kafka message queue.',
        level: 'Advanced',
        estimatedHours: '65 Hours'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist Roadmap',
    slug: 'data-scientist-roadmap',
    description: 'Master mathematics, statistics, Python data engineering, visualization, machine learning, and predictive modeling.',
    iconName: 'BarChart2',
    estimatedTime: '6 Months',
    averageSalary: '₹9 - 22 LPA',
    level: 'Intermediate to Advanced',
    steps: [
      {
        stepNumber: 1,
        title: 'Python for Data Analysis',
        description: 'Python programming, NumPy vectorization, Pandas DataFrames, and Jupyter notebooks.',
        keySkills: ['Python', 'NumPy', 'Pandas', 'Jupyter Lab'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Exploratory data analysis on 100,000 Spotify tracks dataset.',
        level: 'Beginner',
        estimatedHours: '35 Hours'
      },
      {
        stepNumber: 2,
        title: 'Mathematics & Applied Statistics',
        description: 'Descriptive & inferential statistics, probability distributions, hypothesis testing (p-values), and linear algebra.',
        keySkills: ['Probability', 'Hypothesis Testing', 'A/B Testing', 'Linear Algebra'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'A/B testing analysis on marketing conversion rates with statistical significance.',
        level: 'Intermediate',
        estimatedHours: '40 Hours'
      },
      {
        stepNumber: 3,
        title: 'Data Visualization & Storytelling',
        description: 'Visualizing patterns using Matplotlib, Seaborn, Plotly interactive charts, and dashboard creation.',
        keySkills: ['Matplotlib', 'Seaborn', 'Plotly', 'Data Storytelling'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Interactive COVID/healthcare trends analytics dashboard in Streamlit.',
        level: 'Intermediate',
        estimatedHours: '25 Hours'
      },
      {
        stepNumber: 4,
        title: 'SQL & Data Warehousing',
        description: 'Aggregations, window functions (ROW_NUMBER, RANK), CTEs, and BigQuery analytics.',
        keySkills: ['Advanced SQL', 'Window Functions', 'Data Warehousing', 'BigQuery'],
        recommendedCourseId: 'course-database',
        recommendedCourseTitle: 'Database Engineering: SQL, PostgreSQL & MongoDB',
        projectIdea: 'Customer lifetime value (LTV) and cohort retention analysis with SQL.',
        level: 'Intermediate',
        estimatedHours: '30 Hours'
      },
      {
        stepNumber: 5,
        title: 'Supervised & Unsupervised Machine Learning',
        description: 'Linear & logistic regression, decision trees, random forests, XGBoost, k-means clustering, and PCA.',
        keySkills: ['Scikit-Learn', 'Classification', 'Regression', 'Cross-Validation', 'XGBoost'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Real estate price prediction model with feature engineering and 92% R².',
        level: 'Advanced',
        estimatedHours: '60 Hours'
      },
      {
        stepNumber: 6,
        title: 'Deep Learning & Neural Networks',
        description: 'TensorFlow, Keras, multilayer perceptrons, convolutional neural networks, and model deployment.',
        keySkills: ['TensorFlow', 'Neural Networks', 'Computer Vision Basics', 'FastAPI Serving'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Image recognition classifier deployed via FastAPI web endpoint.',
        level: 'Advanced',
        estimatedHours: '50 Hours'
      }
    ]
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer Roadmap',
    slug: 'ai-ml-engineer-roadmap',
    description: 'Path from deep learning to NLP, Large Language Models (LLMs), Computer Vision, and MLOps deployment.',
    iconName: 'Cpu',
    estimatedTime: '6-8 Months',
    averageSalary: '₹12 - 28 LPA',
    level: 'Advanced',
    steps: [
      {
        stepNumber: 1,
        title: 'Advanced Mathematics & Calculus',
        description: 'Multivariate calculus, gradient descent, matrix decompositions, and optimization algorithms.',
        keySkills: ['Calculus', 'Gradient Descent', 'Eigenvectors', 'Optimization'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Implement neural network backpropagation from scratch with pure NumPy.',
        level: 'Intermediate',
        estimatedHours: '40 Hours'
      },
      {
        stepNumber: 2,
        title: 'Deep Learning Architectures',
        description: 'PyTorch, transformers, self-attention mechanisms, ResNets, and recurrent architectures.',
        keySkills: ['PyTorch', 'Transformers', 'Self-Attention', 'GPU Training'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Train an attention-based sequence-to-sequence language translator.',
        level: 'Advanced',
        estimatedHours: '65 Hours'
      },
      {
        stepNumber: 3,
        title: 'Natural Language Processing & Generative AI',
        description: 'Tokenization, embeddings, fine-tuning LLMs, prompt engineering, RAG (Retrieval-Augmented Generation), and LangChain.',
        keySkills: ['LLM Fine-tuning', 'Vector Databases (Pinecone/Chroma)', 'RAG Pipelines', 'LangChain'],
        recommendedCourseId: 'course-datascience',
        recommendedCourseTitle: 'Data Science & Machine Learning Bootcamp',
        projectIdea: 'Enterprise AI document question-answering assistant using RAG and vector search.',
        level: 'Advanced',
        estimatedHours: '55 Hours'
      },
      {
        stepNumber: 4,
        title: 'MLOps & Model Serving',
        description: 'Model packaging, Docker, Triton/TorchServe, CI/CD for ML, experiment tracking with MLflow, and monitoring.',
        keySkills: ['MLOps', 'Docker', 'MLflow', 'Triton Server', 'Model Drift Monitoring'],
        recommendedCourseId: 'course-interview-prep',
        recommendedCourseTitle: 'FAANG & Product Company Tech Interview Mastery',
        projectIdea: 'End-to-end automated ML pipeline with automated retraining triggers and drift detection.',
        level: 'Advanced',
        estimatedHours: '50 Hours'
      }
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer Roadmap',
    slug: 'fullstack-developer-roadmap',
    description: 'Complete end-to-end software engineering: HTML, CSS, JavaScript, React, Node.js, Express, Databases, Auth & Cloud.',
    iconName: 'Layers',
    estimatedTime: '6 Months',
    averageSalary: '₹8 - 20 LPA',
    level: 'Beginner to Advanced',
    steps: [
      {
        stepNumber: 1,
        title: 'Web Foundations (HTML, CSS, Modern JS)',
        description: 'Semantic markup, styling responsive grids with Tailwind, ES6+ JavaScript, closures, and async events.',
        keySkills: ['HTML5', 'Tailwind CSS', 'ES6+ JS', 'DOM'],
        recommendedCourseId: 'course-html-css',
        recommendedCourseTitle: 'HTML5, Modern CSS3 & Tailwind Masterclass',
        projectIdea: 'High-converting interactive product landing page.',
        level: 'Beginner',
        estimatedHours: '40 Hours'
      },
      {
        stepNumber: 2,
        title: 'Frontend Mastery: React & Next.js',
        description: 'State management, React Server Components, client-side routing, and responsive web components.',
        keySkills: ['React 19', 'Next.js 14', 'TypeScript', 'Zustand'],
        recommendedCourseId: 'course-react',
        recommendedCourseTitle: 'React.js & Next.js: Modern Frontend Architecture',
        projectIdea: 'Notion/Trello hybrid with drag-and-drop boards.',
        level: 'Intermediate',
        estimatedHours: '60 Hours'
      },
      {
        stepNumber: 3,
        title: 'Backend Engineering: Node, Express & APIs',
        description: 'REST and GraphQL APIs, asynchronous event loops, request validation, and rate limiting.',
        keySkills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
        recommendedCourseId: 'course-nodejs',
        recommendedCourseTitle: 'Node.js, Express & Microservices Architecture',
        projectIdea: 'Headless CMS API with granular permissions.',
        level: 'Intermediate',
        estimatedHours: '45 Hours'
      },
      {
        stepNumber: 4,
        title: 'Databases: SQL & NoSQL Mastery',
        description: 'PostgreSQL relational schemas, MongoDB document collections, indexes, and migrations with Prisma.',
        keySkills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Redis Caching'],
        recommendedCourseId: 'course-database',
        recommendedCourseTitle: 'Database Engineering: SQL, PostgreSQL & MongoDB',
        projectIdea: 'Multi-tenant database schema with role isolation.',
        level: 'Intermediate',
        estimatedHours: '40 Hours'
      },
      {
        stepNumber: 5,
        title: 'Security, Authentication & Cloud Deployment',
        description: 'JWT tokens, OAuth 2.0, SSL/TLS, Docker containers, CI/CD pipelines, and cloud hosting.',
        keySkills: ['OAuth 2.0', 'Docker', 'AWS / Vercel', 'CI/CD Pipelines'],
        recommendedCourseId: 'course-fullstack',
        recommendedCourseTitle: 'Full Stack Web Development (MERN & Next.js)',
        projectIdea: 'Production full stack social platform deployed with custom domain and SSL.',
        level: 'Advanced',
        estimatedHours: '50 Hours'
      }
    ]
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Rohan Mehta',
    title: 'Principal Software Engineer',
    company: 'Ex-Google · Tech Lead',
    expertise: ['React', 'Next.js', 'System Design', 'Cloud Architecture'],
    experienceYears: 11,
    bio: 'Led core web platform teams at Google and top tech unicorns. Passionate about empowering students to write clean, production-grade frontend architecture.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    rating: 4.95,
    studentsCount: 3400,
    coursesCount: 3,
    coursesTaught: ['Full Stack Web Development', 'React.js & Next.js', 'HTML5 & CSS3 Masterclass']
  },
  {
    id: 'mentor-2',
    name: 'Dr. Neha Verma',
    title: 'Lead AI & Machine Learning Scientist',
    company: 'Ex-Microsoft Research · PhD IIT Delhi',
    expertise: ['Python', 'Deep Learning', 'PyTorch', 'Data Science'],
    experienceYears: 9,
    bio: 'Published 14+ IEEE papers in Computer Vision and Neural Networks. Mentored over 2,000 students into high-paying data science and ML engineering roles.',
    avatar: MENTOR_SHOWCASE_IMAGE,
    rating: 4.92,
    studentsCount: 2800,
    coursesCount: 2,
    coursesTaught: ['Data Science & Machine Learning Bootcamp']
  },
  {
    id: 'mentor-3',
    name: 'Ananya Deshmukh',
    title: 'Senior Backend Engineer',
    company: 'Amazon Web Services',
    expertise: ['Python', 'Node.js', 'Microservices', 'Distributed Systems'],
    experienceYears: 8,
    bio: 'Designs scalable distributed systems handling billions of events daily. Specializes in helping students master Python, backend async programming, and APIs.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    rating: 4.88,
    studentsCount: 2100,
    coursesCount: 2,
    coursesTaught: ['Python Programming: Zero to Master', 'Node.js, Express & Microservices']
  },
  {
    id: 'mentor-4',
    name: 'Aman Singhania',
    title: 'Staff Software Engineer',
    company: 'Uber · Ex-Flipkart',
    expertise: ['DSA', 'C++', 'System Design', 'FAANG Interviews'],
    experienceYears: 10,
    bio: 'Competitive programmer (Codeforces Candidate Master) and experienced interviewer. Has conducted 400+ technical interviews for top Tier-1 tech companies.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    rating: 4.97,
    studentsCount: 4200,
    coursesCount: 3,
    coursesTaught: ['Data Structures & Algorithms (DSA)', 'C++ Systems Programming', 'Tech Interview Mastery']
  },
  {
    id: 'mentor-5',
    name: 'Rajesh Kulkarni',
    title: 'Enterprise Software Architect',
    company: 'Oracle · Ex-Infosys Principal',
    expertise: ['Java', 'Spring Boot', 'Database Engineering', 'Enterprise Systems'],
    experienceYears: 16,
    bio: 'Architected mission-critical banking and telecommunications software. Teaches Java enterprise patterns and database indexing with uncompromising rigor.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
    rating: 4.85,
    studentsCount: 1900,
    coursesCount: 3,
    coursesTaught: ['Java Programming & Spring Boot', 'C Programming Fundamentals', 'Database Engineering']
  }
];

export const STUDENT_REVIEWS: StudentReview[] = [
  {
    id: 'rev-1',
    studentName: 'Harsh Vardhan',
    role: 'Frontend Engineer',
    company: 'Razorpay',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    course: 'Full Stack Web Development',
    rating: 5,
    review: 'Coding Vidya changed my life completely. I came from a non-CS mechanical engineering branch with zero coding knowledge. The mentors guided me through every bug and project review. Received 3 job offers!',
    placedPackage: '14.5 LPA'
  },
  {
    id: 'rev-2',
    studentName: 'Sneha Patel',
    role: 'Data Analyst',
    company: 'Deloitte Tech',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    course: 'Data Science & Machine Learning',
    rating: 5,
    review: 'Dr. Neha’s hands-on approach to Pandas and real-world Kaggle datasets gave me actual portfolio projects that interviewers spent 25 minutes discussing during my interview round.',
    placedPackage: '11 LPA'
  },
  {
    id: 'rev-3',
    studentName: 'Arjun Nambiar',
    role: 'SDE-1',
    company: 'Amazon India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    course: 'Data Structures & Algorithms (DSA)',
    rating: 5,
    review: 'The structured roadmap and 250+ curated problem sets in the DSA bootcamp gave me clarity. Aman sir’s intuition for dynamic programming is unmatched across any platform.',
    placedPackage: '28 LPA'
  },
  {
    id: 'rev-4',
    studentName: 'Divya Krishnan',
    role: 'Full Stack Developer',
    company: 'Paytm',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    course: 'React.js & Next.js Modern Frontend',
    rating: 5,
    review: 'The curriculum is continuously updated with the latest industry patterns (Next.js 14, React 19). The code reviews from Rohan sir taught me true software craftsmanship.',
    placedPackage: '12 LPA'
  }
];

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg-1',
    title: 'Build a Responsive E-Commerce Product Card & Cart Drawer',
    courseId: 'course-fullstack',
    courseName: 'Full Stack Web Development (MERN & Next.js)',
    deadline: 'Tomorrow, 11:59 PM',
    status: 'pending'
  },
  {
    id: 'asg-2',
    title: 'Customer Churn Exploratory Data Analysis & Visualization',
    courseId: 'course-datascience',
    courseName: 'Data Science & Machine Learning Bootcamp',
    deadline: 'Completed on Oct 1',
    status: 'graded',
    score: 95,
    feedback: 'Excellent feature correlation matrix and clean visualizations with Seaborn. Well done!'
  },
  {
    id: 'asg-3',
    title: 'Implement Custom Doubly Linked List with Iterator Pattern',
    courseId: 'course-dsa',
    courseName: 'Data Structures & Algorithms (DSA) Bootcamp',
    deadline: 'Submitted Oct 2',
    status: 'submitted',
    studentSubmission: 'https://github.com/student/dsa-doubly-linked-list'
  }
];

export const INITIAL_QUIZ_RESULTS: QuizResult[] = [
  {
    id: 'quiz-1',
    courseId: 'course-fullstack',
    courseName: 'Full Stack Web Development',
    quizTitle: 'HTML5 Semantics & Web Standards',
    score: 10,
    totalQuestions: 10,
    passed: true,
    date: 'Oct 1, 2026'
  },
  {
    id: 'quiz-2',
    courseId: 'course-fullstack',
    courseName: 'Full Stack Web Development',
    quizTitle: 'JavaScript Event Loop & Asynchronous Promises',
    score: 8,
    totalQuestions: 10,
    passed: true,
    date: 'Sep 28, 2026'
  },
  {
    id: 'quiz-3',
    courseId: 'course-datascience',
    courseName: 'Data Science & Machine Learning',
    quizTitle: 'Probability & Matrix Vectorization',
    score: 9,
    totalQuestions: 10,
    passed: true,
    date: 'Sep 24, 2026'
  }
];

export const UPCOMING_LIVE_CLASSES: LiveClass[] = [
  {
    id: 'live-1',
    title: 'Live Workshop: Building Real-Time WebSocket Microservices',
    courseName: 'Full Stack Web Development',
    mentorName: 'Rohan Mehta',
    date: 'Tomorrow, Saturday',
    time: '6:00 PM - 7:30 PM IST',
    duration: '90 Mins',
    status: 'upcoming',
    meetingUrl: 'https://meet.google.com/demo-codingvidya'
  },
  {
    id: 'live-2',
    title: 'Office Hours: Dynamic Programming Intuition & Graphs Q&A',
    courseName: 'Data Structures & Algorithms',
    mentorName: 'Aman Singhania',
    date: 'Sunday, Oct 4',
    time: '11:00 AM - 12:30 PM IST',
    duration: '90 Mins',
    status: 'upcoming',
    meetingUrl: 'https://meet.google.com/demo-codingvidya'
  }
];

export const INITIAL_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    certificateId: 'CV-2026-9842-PYTH',
    studentName: 'Aarav Sharma',
    studentId: 'student-aarav',
    courseId: 'course-python',
    courseName: 'Python Programming: Zero to Master',
    mentorName: 'Ananya Deshmukh',
    issueDate: 'September 20, 2026',
    grade: 'Grade A+ (Distinction)',
    credentialUrl: 'https://codingvidya.com/verify/CV-2026-9842-PYTH'
  }
];
