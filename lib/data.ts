import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import pizzaImg from '@/public/pizza11.png';
import oasisAppImg from '@/public/oasisApp1.png';
import googleImg from '@/public/google-next1.png';
import exploreImg from '@/public/explore1.png';
import oasisImg from '@/public/oasis-website1.png';
import usePopcornImg from '@/public/usePopcorn.png';
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
    title: 'The Wild Oasis Website',
    description: `Created a customer website for the boutique hotel, enabling guests to explore cabins, book stays, and manage profiles, all synced with the hotel's internal system.`,
    tags: ['React', 'Next.js', 'Node.js', 'Supabase', 'Tailwind'],
    imageUrl: oasisImg,
    demoLink: 'https://the-wild-oasis-website-virid.vercel.app/',
    repoLink: 'https://github.com/Turdugul/the-wild-oasis-website',
  },
  {
    title: 'Google Search Clone',
    description:
      'This project integrates the Google Search API to offer both web and image search functionalities, delivering a responsive and modern user experience.',
    imageUrl: googleImg,
    tags: ['React', 'Next.js', 'Node.js', 'API', 'Tailwind'],
    demoLink: 'https://google-search-next-js.vercel.app/',
    repoLink: 'https://github.com/Turdugul/google-search-next.js',
  },
  {
    title: 'The Wild Oasis App',
    description:
      'The boutique hotel with cabins, handling bookings, cabins, guests, and check-ins/check-outs, with a dashboard and potential future expansion to a customer-facing site.',
    imageUrl: oasisAppImg,
    tags: ['React', 'React Query', 'Supabase', 'Styled-components'],
    demoLink: 'https://the-willd-oasis-app.vercel.app/dashboard',
    repoLink: 'https://github.com/Turdugul/the-willd-oasis-app',
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
    title: 'Fast Pizza Ordering App',
    description:
      'This project allows users to browse the menu, add pizzas to their cart, and place orders by providing their name, phone number, address, and an optional GPS location for delivery',
    imageUrl: pizzaImg,
    tags: ['React router', 'Node.js', 'Tailwind'],
    demoLink: 'https://fast-pizza-sandy.vercel.app/',
    repoLink: 'https://github.com/Turdugul/fast-pizza',
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
  'Redux',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Framer Motion',
] as const;
