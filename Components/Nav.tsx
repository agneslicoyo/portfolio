import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/20/solid';

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-gray-800 shadow-md">
    <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
      <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
        AGNES
        <span className="text-yellow-300">LICOYO</span>
      </h1>
      <div className="nav-link">HOME</div>
      <div className="nav-link">ABOUT</div>
      <div className="nav-link">PROJECT</div>
      <div className="nav-link">EXPERIENCE</div>
      <div className="nav-link">CONTACT</div>
      <div onClick={openNav}>
        <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
      </div>
      </div>
    </div>
  );
};

export default Nav;