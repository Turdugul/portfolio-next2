'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After gaining 4 years of educational experience, I changed my career to
        follow my passion for programming. I enrolled in a coding bootcamp,
        where I learned{' '}
        <span className="font-medium">frontend web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect, especially in UI/UX design. I have worked with
        frameworks like Bootstrap, Tailwind, and Styled Components. I{' '}
        <span className="underline">love</span> the feeling of finally solving a
        problem after tackling a complex challenge.
        <br />
        My core stack includes{' '}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I also have experience with Agile methodologies and Git. I am an
        effective communicator and team player. Continuously learning and quick
        to adopt new tools and frameworks.
        <br />I am currently seeking a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
