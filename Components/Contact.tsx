import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

  };

  return (
    <div className="bg-red-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-5xl font-bold text-center text-white mb-10">CON<span className="text-yellow-300">TACT</span></h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mx-auto">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3 className="mt-4 text-lg leading-6 font-bold text-gray-900">Address</h3>
            <p className="mt-2 text-base text-blue-900">Brgy. Inapoy<br />Kabankalan City, Negros Occidental, 6111</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mx-auto">
            <FontAwesomeIcon icon={faPhone} />
            </div>
            <h3 className="mt-4 text-lg leading-6 font-bold text-gray-900">Phone</h3>
            <p className="mt-2 text-base text-blue-950">09063763271</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white mx-auto">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3 className="mt-4 text-lg leading-6 font-bold text-gray-900">Email</h3>
            <p className="mt-2 text-base text-blue-900">licoyoagnes@gmail.com</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center">Message Me</h3>
          {isSubmitted ? (
            <p className="text-purple-800 text-center mt-4">Message successfully submitted!</p>
          ) : (
            <form className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
