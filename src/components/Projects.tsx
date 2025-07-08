import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import saTaskManagerImg from '../assets/5.png';
import smartReviewImg from '../assets/4.png';
import secureLoginImg from '../assets/3.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SA Task Manager',
      description: 'Task organizer with categorization, due dates, and secure storage. Built with Flask and MySQL for reliable task management.',
      technologies: ['Flask', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/lakshya8839/sa-task-manager',
      features: ['Task categorization', 'Due date tracking', 'Secure data storage'],
      image: saTaskManagerImg,
      imageAlt: 'SA Task Manager screenshot',
    },
    {
      title: 'SmartReview – AI Code Review Platform',
      description: 'GPT-powered code review platform that analyzes GitHub repositories and provides intelligent feedback using OpenAI API.',
      technologies: ['Flask', 'OpenAI API', 'GitHub REST API', 'JavaScript'],
      github: 'https://github.com/lakshya8839/SmartReview',
      features: ['AI-powered analysis', 'GitHub integration', 'Automated reviews'],
      image: smartReviewImg,
      imageAlt: 'SmartReview screenshot',
    },
    {
      title: 'Secure Login System',
      description: 'Modern desktop application with secure authentication, password recovery, and clean UI built with Python and CustomTkinter.',
      technologies: ['Python', 'CustomTkinter', 'MySQL', 'Security'],
      github: 'https://github.com/lakshya8839/Secure_login_SystemTitle',
      features: ['Secure authentication', 'Password recovery', 'Modern UI'],
      image: secureLoginImg,
      imageAlt: 'Secure Login System screenshot',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* River flow animations */}
        <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-river-flow"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/15 to-transparent animate-river-flow-delayed"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent animate-river-flow-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-teal-400/40 rounded-full animate-float-up"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-teal-300/35 rounded-full animate-float-up" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-teal-500/30 rounded-full animate-float-up" style={{ animationDelay: '12s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-teal-600/25 rounded-full animate-float-up" style={{ animationDelay: '18s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/4 right-1/3">
          <div className="w-5 h-5 bg-gradient-to-br from-teal-400/25 to-teal-600/15 animate-flow-energy"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4">
          <div className="w-6 h-6 bg-gradient-to-br from-teal-300/20 to-teal-500/10 animate-flow-energy" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="absolute top-3/4 right-1/5">
          <div className="w-4 h-4 bg-gradient-to-br from-teal-500/18 to-teal-700/12 animate-flow-energy" style={{ animationDelay: '7s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:border-teal-500 dark:hover:border-teal-400 hover:z-10 h-[440px]"
            >
              {/* Project Image with Hover Overlay */}
              <div className="relative w-full" style={{ height: '180px' }}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="object-cover w-full h-full rounded-t-2xl"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
              {/* Content Area */}
              <div className="flex flex-col flex-1 px-6 py-5 overflow-y-auto">
                <h3 className="text-lg font-bold mb-2 text-teal-600 dark:text-teal-400">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-base line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-1">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-xs text-gray-600 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;