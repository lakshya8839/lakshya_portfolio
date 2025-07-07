import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImg from '../assets/1.jpg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-gray-900 to-gray-800 dark:from-teal-900 dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,116,117,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(17,116,117,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(17,116,117,0.2),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Hi, I'm{' '}
              <span className="text-teal-400 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Lakshya Chalana
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-delay">
              Tech Intern @ LinuxWorld Informatics Pvt Ltd
            </p>
            <p className="text-lg text-gray-400 mb-8 animate-fade-in-delay-2">
              Turning ideas into execution through code
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-delay-3"
            >
              Contact Me
            </button>
          </div>

          {/* Right side - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 p-1 animate-pulse-slow">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;