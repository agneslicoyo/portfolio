import 'tailwindcss/tailwind.css';
import React from 'react';
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Licoyo Restaurant',
    description: 'A website that serves as a place to showcase the products and services.',
    technologies: ['HTML', 'CSS'],
    imageUrl: '/images/project1.png',
    link: 'https://agneslicoyowebsite.netlify.app',
  },
  {
    title: 'Tourist Spots in Negros',
    description: 'A website that provides a platform to showcase attractions and destinations.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    imageUrl: '/images/project2.png',
    link: 'https://agneslicoyo.netlify.app',
  },
  {
    title: 'Tourist Spots in Negros Occidental',
    description: 'A website highlighting tourist attractions in Negros Occidental.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: '/images/project3.png',
    link: 'https://agneslicoyo.github.io',
  },
];

const Project: React.FC = () => {
  return (
    <div className="bg-[#02050a] pt-[2rem] md:pt-[4rem] pb-[4rem] text-center">
      <h1 className="text-2xl md:text-5xl font-bold text-white mb-10">
        PRO<span className="text-yellow-400">JECT</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-red-400 p-9 rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:transform hover:-translate-y-2.5 hover:shadow-xl"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl text-black font-semibold mb-2">{project.title}</h3>
            <p className="text-md text-black-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap justify-center mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded m-1">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
