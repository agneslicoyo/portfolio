import 'tailwindcss/tailwind.css';
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownCircleIcon, DocumentIcon } from "@heroicons/react/20/solid";
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';



const Hero = () => {
  const viewResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-[88vh] bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtcy04My1wYS0xMTUyMV8xLmpwZw.jpg')] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-yellow-400"> AGNES!</span>
          </h1>
          <TextEffect />
          <p ></p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 mb-20">
            <button onClick={viewResume} className="px-[2rem] hover:bg-yellow-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>MY RESUME</p>
              <DocumentIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button onClick={downloadResume} className="px-[2rem] hover:bg-yellow-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>DOWNLOAD RESUME</p>
              <ArrowDownCircleIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="mailto:licoyoagnes@example.com" className="text-white hover:text-gray-400">
              <FaEnvelope />
            </a>
            <a href="https://www.facebook.com/agnes.licoyo.1" className="text-white hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/a_licoyo" className="text-white hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image src="/images/home.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
