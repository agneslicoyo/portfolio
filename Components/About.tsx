import 'tailwindcss/tailwind.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from "react";
import { BriefcaseIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const About = () => {
  const viewContact = () => {
    window.open('/contact.pdf', '_blank');
  };

  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
              <h1 className="text-5xl font-bold mb-8">
                ABOUT <span className="text-yellow-400">ME</span>
              </h1>
              <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-[#55e6a5]">
                So, Who am I?
              </h2>
              <div className="mb-[3rem] flex items-center md:space-x-10">
                <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                <p className="text-[19px] text-slate-300 w-[80%]">
                  I'm Agnes D. Licoyo, 22 years old, a resident of Sitio Piliopiliohan Brgy. Inapoy, Kabankalan City Negros Occidental. Single, currently studying Bachelor of Science in Information Technology at Central Philippines State University. I am a dedicated, hardworking individual, open-minded and willing to learn. 
                </p>
              </div>
              <button
                onClick={viewContact}
                className="px-[2rem] hover:bg-yellow-500 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
              >
                <p> HIRE ME</p>
                <BriefcaseIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </div>
            <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
              <Image
                src="/images/about.jpg"
                alt="user"
                layout="fill"
                objectFit="contain"
                className="relative z-[11] w-[100%] h-[100%] object-contain"
              />
            </div>
          </div>
        </div>
    
  );
};

export default About;
