import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Experience from '@/Components/Experience';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Project from '@/Components/Project';

import 'tailwindcss/tailwind.css';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';

const Homepage: React.FC = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
  <div className="overflow-x-hidden">
  <div>
    <MobileNav nav={nav} closeNav={closeNav} />
    <Nav openNav={openNav} />
    <Hero />
    <div className="relative z-[30]">
    <About />
    <Project />
    <Experience />
    <Contact />
    <Footer />
    </div>
  </div>
  </div>
  );
};

export default Homepage;