import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SA Task Manager',
      description: 'Task organizer with categorization, due dates, and secure storage. Built with Flask and MySQL for reliable task management.',
      technologies: ['Flask', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/lakshya8839/sa-task-manager',
      features: ['Task categorization', 'Due date tracking', 'Secure data storage'],
    },
    {
      title: 'SmartReview – AI Code Review Platform',
      description: 'GPT-powered code review platform that analyzes GitHub repositories and provides intelligent feedback using OpenAI API.',
      technologies: ['Flask', 'OpenAI API', 'GitHub REST API', 'JavaScript'],
      github: 'https://github.com/lakshya8839/SmartReview',
      features: ['AI-powered analysis', 'GitHub integration', 'Automated reviews'],
    },
    {
      title: 'Secure Login System',
      description: 'Modern desktop application with secure authentication, password recovery, and clean UI built with Python and CustomTkinter.',
      technologies: ['Python', 'CustomTkinter', 'MySQL', 'Security'],
      github: 'https://github.com/lakshya8839/Secure_login_SystemTitle',
      features: ['Secure authentication', 'Password recovery', 'Modern UI'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flowing ribbons */}
        <div className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-flow-ribbon"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/15 to-transparent animate-flow-ribbon" style={{ animationDelay: '4s' }}></div>
        
        {/* Flowing particles */}
        <div className="absolute top-1/3 left-0" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-teal-400/35 rounded-full animate-flow-particle"></div>
        </div>
        <div className="absolute top-2/3 left-0" style={{ animationDelay: '5s' }}>
          <div className="w-3 h-3 bg-teal-300/30 rounded-full animate-flow-particle"></div>
        </div>
        
        {/* Streaming lines */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-teal-400/18 to-transparent animate-flow-stream"></div>
        <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-teal-300/12 to-transparent animate-flow-stream" style={{ animationDelay: '3s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/4 right-1/3" style={{ animationDelay: '2s' }}>
          <div className="w-5 h-5 bg-gradient-to-br from-teal-400/25 to-teal-600/15 animate-flow-energy"></div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-colors duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;