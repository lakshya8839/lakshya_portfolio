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

      {/* Thin, modern animated divider at section boundary */}
      <div className="absolute left-0 right-0 bottom-0 w-full flex items-end justify-center pointer-events-none" style={{zIndex: 3, height: '8px'}}>
        <div className="w-full h-px bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 h-0.5 bg-gradient-to-r from-teal-400 via-white to-teal-400 rounded-full animate-divider-bar1" style={{width: '90px'}}></div>
          <div className="absolute top-1 h-0.5 bg-gradient-to-r from-teal-300 via-white to-teal-500 rounded-full animate-divider-bar2" style={{width: '90px'}}></div>
          <div className="absolute top-2 h-0.5 bg-gradient-to-r from-white via-teal-400 to-white rounded-full animate-divider-bar3" style={{width: '90px'}}></div>
        </div>
      </div>

      {/* Professional, dense, faded river lines at the bottom */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none h-24 sm:h-40 md:h-64 lg:h-80" style={{zIndex: 1}}>
        <svg viewBox="0 0 2880 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '200%', height: '100%' }}>
          <defs>
            <linearGradient id="river-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity="0" />
              <stop offset="10%" stopColor="#fff" stopOpacity="0.15" />
              <stop offset="25%" stopColor="#fff" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#fff" stopOpacity="1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="1" />
            </linearGradient>
            <mask id="river-mask">
              <rect x="0" y="0" width="2880" height="320" fill="url(#river-fade)" />
            </mask>
          </defs>
          <g mask="url(#river-mask)" style={{ animation: 'river-path-move 16s linear infinite', willChange: 'transform' }}>
            {Array.from({ length: 28 }).map((_, i) => (
              <path
                key={i}
                d={`M-200 ${300 - i * 10} C 720 ${260 - i * 18}, 2160 ${340 - i * 12}, 3080 ${300 - i * 10}`}
                stroke="#fff"
                strokeWidth={1}
                opacity={0.13}
                fill="none"
              />
            ))}
          </g>
          <g mask="url(#river-mask)" style={{ animation: 'river-path-move 16s linear infinite', animationDelay: '8s', willChange: 'transform' }}>
            {Array.from({ length: 28 }).map((_, i) => (
              <path
                key={`dup-${i}`}
                d={`M-200 ${300 - i * 10} C 720 ${260 - i * 18}, 2160 ${340 - i * 12}, 3080 ${300 - i * 10}`}
                stroke="#fff"
                strokeWidth={1}
                opacity={0.13}
                fill="none"
              />
            ))}
          </g>
        </svg>
      </div>

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
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white p-1 shadow-xl">
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