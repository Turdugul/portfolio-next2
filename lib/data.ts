import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import elite from '@/public/light site.png';
import mediai from '@/public/medi.png';

import exploreImg from '@/public/explore1.png';
import oasisImg from '@/public/oasis-website1.png';
import usePopcornImg from '@/public/usePopcorn.png';
import capitalQuiz from '@/public/capitalQuiz.png';
import blog1 from '@/public/blog1.png';
import goldenyurt from '@/public/golden.png';
import React from 'react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Bishkek, KG',
    description:
      'I graduated from a bootcamp after 6 months of studying and am continuing to deepen my learning online.',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Bishkek, KG',
    description:
      'I upskilled as a frontend developer and gained experience working with teams using Agile methodologies.',
    icon: React.createElement(CgWorkAlt),
    date: '2023-2024',
  },
  {
    title: 'Software Developer',
    location: 'London, UK',
    description: `I'm currently a software developer working as a freelancer. My tech stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities. `,
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Dentist’s Assistant Web App',
    description: `A full-stack app that transcribes dental audio recordings into structured reports using AI.`,
    tags: [
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Whisper API',
      'GPT-4o-mini',
    ],
    imageUrl: mediai,
    demoLink: 'https://medi-ai-frontend.onrender.com/',
    repoLink: 'https://github.com/Turdugul/medi-ai',
  },
  {
    title: 'Elite Electrical Website',
    description:
      'Developed a modern, responsive website for Elite Electrical using Next.js, Tailwind CSS, and TypeScript. Enhanced user interactions with Framer Motion and implemented reusable UI components with shadcn/ui.',
    imageUrl: elite,
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'shadcn/ui',
      'Nodemailer',
    ],
    demoLink: 'https://lightning-fix-electric-ex73.vercel.app/',
    repoLink: 'https://github.com/Turdugul/lightning-fix-electric',
  },
  {
    title: 'The Wild Oasis Website',
    description: `Created a customer website for the boutique hotel, enabling guests to explore cabins, book stays, and manage profiles, all synced with the hotel's internal system.`,
    tags: ['React', 'Next.js', 'Node.js', 'Supabase', 'Tailwind'],
    imageUrl: oasisImg,
    demoLink: 'https://the-wild-oasis-website-virid.vercel.app/',
    repoLink: 'https://github.com/Turdugul/the-wild-oasis-website',
  },
  {
    title: 'Golden Yurt Cafe Website',
    description:
      'Showcasing Central Asian cuisine, this responsive site features a video, testimonials, menu, and Google Maps integration. Built with Next.js, TypeScript, Tailwind CSS, and modern tools like Framer Motion and Nodemailer.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'ShadCN UI',
      'Nodemailer',
      'React Hook Form',
      'React Toast',
    ],
    imageUrl: goldenyurt,
    demoLink: 'https://the-golden-yurt-website.vercel.app/',
    repoLink: 'https://github.com/Turdugul/the-golden-yurt-website',
  },
  {
    title: 'Countries and Capitals Quiz',
    description:
      'React app where users identify country capitals with flags, get instant feedback, track scores, and enjoy a responsive, accessible UI with dark mode.',
    imageUrl: capitalQuiz,
    tags: ['React', 'TypeScript', 'Tailwind'],
    demoLink: 'https://capitals-quiz-language.vercel.app/',
    repoLink: 'https://github.com/Turdugul/capitals-quiz-language',
  },
  {
    title: 'Blog Application with Dashboard',
    description:
      'Built with Next.js for SSR and static generation, using Tailwind CSS for responsive design.',
    imageUrl: blog1,
    tags: ['React', 'Next.js', 'Tailwind', 'MongoDB', 'Clerk', 'FireBase'],
    demoLink: 'https://my-blog-next-js-alpha.vercel.app/',
    repoLink: 'https://github.com/Turdugul/my-blog-next.js',
  },
  {
    title: 'Travel Tracking app',
    description: `This is a Single Page Application (SPA) using React Router for dynamic navigation, with city management through external API data, and geolocation features for an interactive map.`,
    imageUrl: exploreImg,
    tags: ['React Router', 'context API', 'memo', 'useMemo', 'useCallback'],
    demoLink: 'https://world-travel-app.vercel.app/',
    repoLink: 'https://github.com/Turdugul/world-travel-app',
  },
  {
    title: 'The "usePopcorn" App.',
    description:
      'The "usePopcorn" project is a React app that lets users search for movies, view details, rate them, and manage a watchlist. ',
    imageUrl: usePopcornImg,
    tags: ['React', 'API'],
    demoLink: 'https://use-movie-app.vercel.app/',
    repoLink: 'https://github.com/Turdugul/use-movie-app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Bootstrap',
  'MUI',
  'MongoDB',
  'Supabase',
  'Firebase',
  'Redux',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
