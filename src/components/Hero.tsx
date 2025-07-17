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
        {/* Modern, smooth, multi-line river flow animation */}
        <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none h-32 sm:h-48 md:h-64 lg:h-80" style={{zIndex: 1}}>
          <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="river-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5eead4" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.10" />
              </linearGradient>
            </defs>
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M-100 ${260 - i * 8} Q 360 ${200 - i * 12}, 720 ${260 - i * 8} T 1540 ${260 - i * 8}`}
                stroke="url(#river-gradient)"
                strokeWidth={1.5}
                opacity={0.13 + i * 0.01}
                fill="none"
                style={{
                  animation: `river-path-move 18s linear infinite`,
                  animationDelay: `${i * 0.7}s`,
                  willChange: 'transform',
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Remove heavy SVG river lines and keep only performant div-based lines */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 pb-28">
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
          <div className="relative flex justify-center items-center">
            {/* Modern, animated glowing circles behind profile picture */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="relative w-[28rem] h-[28rem]">
                {/* Outermost glowing, rotating circle */}
                <div className="absolute inset-0 rounded-full border-4 border-teal-400/30 animate-outer-glow-spin"></div>
                {/* Pulsing glow circle */}
                <div className="absolute inset-8 rounded-full bg-teal-400/10 blur-2xl animate-glow-pulse"></div>
                {/* Modern animated circles and 3D-like squares */}
                {/* Circles */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-teal-400/40 rounded-full animate-circle-revolve"></div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-teal-300/35 rounded-full animate-circle-revolve"></div>
                {/* 3D-like squares */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-400 rounded-lg shadow-lg animate-square-revolve"></div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg shadow-md animate-square-revolve-reverse"></div>
                {/* Inner shapes (mix) */}
                <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-teal-400/50 rounded-full animate-circle-revolve-reverse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-gradient-to-br from-blue-300 to-teal-300 rounded-lg shadow animate-square-revolve"></div>
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-500/40 rounded-full animate-circle-revolve-reverse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg shadow animate-square-revolve-reverse"></div>
              </div>
            </div>
            {/* Profile picture (larger, centered, always on top) */}
            <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full bg-white p-1 shadow-2xl flex items-center justify-center">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Smooth, modern animated divider at section boundary */}
      <div className="absolute left-0 right-0 bottom-0 w-full flex items-end justify-center pointer-events-none" style={{zIndex: 3, height: '8px'}}>
        <div className="w-full h-px bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 h-0.5 bg-gradient-to-r from-teal-400 via-white to-teal-400 rounded-full animate-divider-bar1" style={{width: '90px'}}></div>
          <div className="absolute top-1 h-0.5 bg-gradient-to-r from-teal-300 via-white to-teal-500 rounded-full animate-divider-bar2" style={{width: '90px'}}></div>
          <div className="absolute top-2 h-0.5 bg-gradient-to-r from-white via-teal-400 to-white rounded-full animate-divider-bar3" style={{width: '90px'}}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer" onClick={() => scrollToSection('about')}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;