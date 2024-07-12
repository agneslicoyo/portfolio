import 'tailwindcss/tailwind.css';
import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <div className="pdf-container">
        <iframe
          src="/path_to_your_resume.pdf" 
          width="100%"
          height="600px"
          className="border-0"
        />
      </div>
    </div>
  );
};

export default Resume;
