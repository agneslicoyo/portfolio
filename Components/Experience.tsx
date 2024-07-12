import 'tailwindcss/tailwind.css';
import React from 'react';

interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    company: 'Intern',
    position: 'Central Philippines State University',
    duration: 'October 2023 - December 2023',
    description: 'Human Resource Management Office',
  },
  {
    company: 'Degree',
    position: 'Central Philippines State University',
    duration: '2024',
    description: 'Bachelor of Science in Information Technology',
  },
];

const Experience: React.FC = () => {
  return (
    <div className="h-[100vh] bg-[url('https://img.freepik.com/free-vector/abstract-modern-dark-black-background-design-with-stripes-lines_84443-2775.jpg')] bg-cover bg-center text-white py-12 text-center">
      <h1 className="text-2xl md:text-5xl font-bold text-white mb-10">
        EXPERI<span className="text-yellow-400">ENCE</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-orange-300 p-9 rounded-lg shadow-lg transition-transform duration-200 ease-in-out"
          >
            <p className="text-lg text-black font-semibold mb-2">{experience.company}</p>
            <h3 className="text-xl text-fuchsia-700	 mb-2">{experience.position}</h3>
            <p className="text-fuchsia-700 mb-2">{experience.duration}</p>
            <p className="text-fuchsia-700	">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
