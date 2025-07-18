import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
      {/* Improved backdrop: more opaque, visible border, subtle shadow */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-md"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              LC
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out ${
                    activeSection === item.id
                      ? 'bg-teal-500/20 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300 shadow-lg backdrop-blur-sm border border-teal-500/30 dark:border-teal-400/30'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-md backdrop-blur-sm border border-transparent hover:border-teal-500/20 dark:hover:border-teal-400/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* AI Mode Banner */}
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <div className="relative flex items-center px-6 py-2 rounded-2xl bg-gray-900/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-md border border-gray-700/30 z-10 overflow-hidden">
                  <span className="text-base font-semibold text-white mr-2 whitespace-nowrap select-none">
                    Dive deeper in AI Mode
                  </span>
                  <button className="ml-1 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center" style={{ minWidth: '32px', minHeight: '32px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white opacity-70 group-hover:opacity-100">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 10.5V6.75A2.25 2.25 0 0011.75 4.5h-6.5A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5h6.5A2.25 2.25 0 0014 17.25v-3.75m5.25-2.25H9.75m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                  {/* Animated gradient border overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl z-20 animate-animated-gradient-border" />
                </div>
              </div>
            </div>
            {/* End AI Mode Banner */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out backdrop-blur-sm border border-transparent hover:border-teal-500/20 dark:hover:border-teal-400/20 hover:shadow-md"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 ease-in-out backdrop-blur-sm border border-transparent hover:border-teal-500/20 dark:hover:border-teal-400/20 hover:shadow-md"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden relative">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-white/20 dark:border-gray-700/20 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out ${
                  activeSection === item.id
                    ? 'bg-teal-500/20 dark:bg-teal-400/20 text-teal-700 dark:text-teal-300 shadow-md backdrop-blur-sm border border-teal-500/30 dark:border-teal-400/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:text-teal-600 dark:hover:text-teal-400 hover:shadow-md backdrop-blur-sm border border-transparent hover:border-teal-500/20 dark:hover:border-teal-400/20'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;