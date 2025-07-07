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
        
        {/* River flow animations */}
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent animate-river-flow"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent animate-river-flow-delayed"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/15 to-transparent animate-river-flow-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-yellow-400/40 rounded-full animate-float-up"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-300/35 rounded-full animate-float-up" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-500/30 rounded-full animate-float-up" style={{ animationDelay: '10s' }}></div>
        
        {/* Small box animation (energy flows) */}
        <div className="absolute top-1/4 left-1/5">
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400/25 to-yellow-600/15 animate-flow-energy"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <div className="w-5 h-5 bg-gradient-to-br from-yellow-300/20 to-yellow-500/10 animate-flow-energy"></div>
        </div>
      </div>

      {/* Flowing Lines SVG Background (many smooth, parallel, animated lines with hover effect) */}
      <div className="flowing-lines-bg group" style={{ transform: 'rotate(-15deg)', bottom: 0, top: 'unset', height: '40%', zIndex: 1, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', width: '100%' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={i}
              className={`flowing-line transition-all duration-300 group-hover:opacity-80 group-hover:blur-sm`}
              d={`M0 ${220 + i * 15} Q 360 ${200 + i * 10} 720 ${220 + i * 15} T 1440 ${220 + i * 15}`}
              style={{
                opacity: 0.12 + 0.04 * (i % 3),
                filter: `blur(${0.5 + (i % 3) * 0.7}px)`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </svg>
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
              {/* Revolving circles around profile picture */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400/40 rounded-full animate-circle-revolve"></div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-teal-300/35 rounded-full animate-circle-revolve"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-500/30 rounded-full animate-circle-revolve"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-teal-600/25 rounded-full animate-circle-revolve"></div>
                  
                  {/* Inner revolving circles (reverse direction) */}
                  <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-teal-400/50 rounded-full animate-circle-revolve-reverse"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-teal-300/45 rounded-full animate-circle-revolve-reverse"></div>
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-teal-500/40 rounded-full animate-circle-revolve-reverse"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-teal-600/35 rounded-full animate-circle-revolve-reverse"></div>
                </div>
              </div>
              
              {/* Profile picture (real color, no overlay, clean white border) */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-white p-1 shadow-xl">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
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