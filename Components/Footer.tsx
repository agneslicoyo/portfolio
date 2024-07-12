import 'tailwindcss/tailwind.css';
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <a
            href="mailto:licoyoagnes@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.facebook.com/agnes.licoyo.1"
            className="hover:text-gray-300 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/a_licoyo"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <p className="text-sm">
            &copy; Agnes Licoyo {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
