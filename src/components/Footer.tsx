import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-900 dark:bg-gray-950 text-gray-300 py-6 mt-8 border-t border-gray-800 dark:border-gray-800">
    <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-4">
      <span className="text-sm font-medium tracking-wide">&copy; {new Date().getFullYear()} Lakshya Chalana. All rights reserved.</span>
      <nav className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-4 md:gap-6 text-sm">
        <a href="#" className="hover:text-teal-400 transition-colors duration-200">Home</a>
        <a href="#about" className="hover:text-teal-400 transition-colors duration-200">About</a>
        <a href="#projects" className="hover:text-teal-400 transition-colors duration-200">Projects</a>
        <a href="#skills" className="hover:text-teal-400 transition-colors duration-200">Skills</a>
        <a href="#certifications" className="hover:text-teal-400 transition-colors duration-200">Certifications</a>
        <a href="#contact" className="hover:text-teal-400 transition-colors duration-200">Contact</a>
      </nav>
    </div>
  </footer>
);

export default Footer; 