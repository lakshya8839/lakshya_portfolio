import React from 'react';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import saTaskManagerImg from '../assets/5.png';
import smartReviewImg from '../assets/4.png';
import secureLoginImg from '../assets/3.png';
import devopsProjectImg from '../assets/6.png';
import portfolioImg from '../assets/7.png';
import streamlitConcertImg from '../assets/8.png';
import geminiExpertImg from '../assets/9.png';
import webScrapingImg from '../assets/10.png';

const Projects: React.FC = () => {
  const majorProjects = [
    {
      title: 'Lakshya Chalana Portfolio',
      description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a professional design showcasing my skills and projects.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_lakshya-chalana-portfolio-activity-7348750625595105280-js4s?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      github: 'https://github.com/lakshya8839/lakshya_portfolio',
      features: ['Responsive design', 'Dark mode', 'Smooth animations', 'Professional UI'],
      image: portfolioImg,
      imageAlt: 'Lakshya Chalana Portfolio screenshot',
    },
    {
      title: 'DevOps Project (CI/CD Pipeline)',
      description: 'Implemented a complete CI/CD pipeline using Jenkins, Docker, and GitHub for automated build, test, and deployment processes.',
      technologies: ['Git/Github', 'Jenkins', 'Docker'],
      github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_devops-ciabrcd-jenkins-activity-7348006497106173954-wnHa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: ['Automated CI/CD pipeline', 'Jenkins integration', 'Docker containerization'],
      image: devopsProjectImg,
      imageAlt: 'DevOps CI/CD Pipeline screenshot',
    },
  ];

  const minorProjects = [
    {
      title: 'Streamlit Concert Booking App',
      description: 'A complete Concert/Musical Festival ticket booking application built with Streamlit. Features registration, payment processing with QR codes, and WhatsApp integration for booking confirmations.',
      technologies: ['Streamlit', 'Python', 'PIL', 'Session State'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_streamlit-pythonproject-internshiplearning-activity-7341824533571506176-t82V?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: ['Ticket booking system', 'QR code payments', 'WhatsApp integration', 'No database required'],
      image: streamlitConcertImg,
      imageAlt: 'Streamlit Concert Booking App screenshot',
    },
    {
      title: 'GenAI + Web Scraping: Real-time Medicine Info',
      description: 'A self-use case that pulls real-time medicine info using AI. Scrapes Tata 1mg for salt composition, availability, and price, processes user input with Gemini API, and displays results instantly in a Streamlit UI.',
      technologies: ['Gemini API', 'BeautifulSoup', 'Streamlit', 'Web Scraping', 'Python'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_genai-geminiapi-webscraping-activity-7350052616640356352-igLw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: ['Live data scraping', 'AI-powered input', 'Instant results', 'Clean Streamlit UI'],
      image: webScrapingImg,
      imageAlt: 'GenAI + Web Scraping Medicine Info screenshot',
    },
    {
      title: 'Gemini Expert Advisor',
      description: 'A custom GenAI project built using Gemini 2.5 Flash model via API. Features multi-domain expertise covering tech, business, learning, and creative ideas with a user-friendly Gradio interface.',
      technologies: ['Gemini API', 'Gradio', 'Python', 'Prompt Engineering'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_genai-gemini-gradio-activity-7345145243517800448-rQHZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: ['Multi-domain expertise', 'Gradio interface', 'AI-powered responses', 'Custom use case'],
      image: geminiExpertImg,
      imageAlt: 'Gemini Expert Advisor screenshot',
    },
    {
      title: 'SA Task Manager',
      description: 'Task organizer with categorization, due dates, and secure storage. Built with Flask and MySQL for reliable task management.',
      technologies: ['Flask', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/lakshya8839/sa-task-manager',
      features: ['Task categorization', 'Due date tracking', 'Secure data storage'],
      image: secureLoginImg, // Using different image to avoid reuse
      imageAlt: 'SA Task Manager screenshot',
    },
    {
      title: 'SmartReview – AI Code Review Platform',
      description: 'GPT-powered code review platform that analyzes GitHub repositories and provides intelligent feedback using OpenAI API.',
      technologies: ['Flask', 'OpenAI API', 'GitHub REST API', 'JavaScript'],
      github: 'https://github.com/lakshya8839/SmartReview',
      features: ['AI-powered analysis', 'GitHub integration', 'Automated reviews'],
      image: saTaskManagerImg, // Using different image to avoid reuse
      imageAlt: 'SmartReview screenshot',
    },
    {
      title: 'Secure Login System',
      description: 'Modern desktop application with secure authentication, password recovery, and clean UI built with Python and CustomTkinter.',
      technologies: ['Python', 'CustomTkinter', 'MySQL', 'Security'],
      github: 'https://github.com/lakshya8839/Secure_login_SystemTitle',
      features: ['Secure authentication', 'Password recovery', 'Modern UI'],
      image: smartReviewImg, // Using different image to avoid reuse
      imageAlt: 'Secure Login System screenshot',
    },
  ];

  const ProjectCard: React.FC<{ project: any; index: number; isNew?: boolean }> = ({ project, index, isNew = false }) => (
    <div
      className={`flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:z-10 h-[440px] ${
        isNew 
          ? 'border-teal-500 dark:border-teal-400 shadow-teal-500/20 hover:shadow-teal-500/40 relative' 
          : 'border-gray-200 dark:border-gray-800 opacity-75 hover:opacity-100'
      }`}
    >
      {/* Premium Badge for New Projects */}
      {isNew && (
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            NEW
          </div>
        </div>
      )}
      
      {/* Project Image with Hover Overlay */}
      <div className="relative w-full" style={{ height: '180px' }}>
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`object-cover w-full h-full rounded-t-2xl transition-all duration-300 ${
            isNew ? 'group-hover:scale-105' : ''
          }`}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-4">
            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 whitespace-nowrap"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                View Post
              </a>
            )}
            {/* Only show GitHub button if the link is not a LinkedIn URL */}
            {project.github && !project.github.includes('linkedin.com') && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap ${
                  isNew 
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white focus:ring-teal-400' 
                    : 'bg-teal-600 hover:bg-teal-700 text-white focus:ring-teal-400'
                }`}
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col flex-1 px-4 sm:px-6 py-4 sm:py-5 overflow-y-auto">
        <h3 className={`text-base sm:text-lg font-bold mb-2 ${
          isNew ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600' : 'text-teal-600 dark:text-teal-400'
        }`}>
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
          {project.description}
        </p>
        <div className="mb-3 flex flex-wrap gap-1 sm:gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                isNew 
                  ? 'bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 dark:from-teal-900/30 dark:to-blue-900/30 dark:text-teal-300' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mb-1">
          <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature: string, featureIndex: number) => (
              <li
                key={featureIndex}
                className="text-xs text-gray-600 dark:text-gray-300 flex items-center"
              >
                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                  isNew ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-teal-600'
                }`}></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Premium Glow Effect for New Projects */}
      {isNew && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
        {/* Main Projects Header with Background */}
        <div className="relative mb-16 sm:mb-20">
          {/* Background Section */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-blue-50 to-teal-50 dark:from-teal-900/20 dark:via-blue-900/20 dark:to-teal-900/20 rounded-3xl border border-teal-200/50 dark:border-teal-700/30"></div>
          
          {/* Content */}
          <div className="relative py-12 sm:py-16 px-6 sm:px-8 text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mr-4"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                My Projects
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full ml-4"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
              A showcase of my technical skills and problem-solving abilities through real-world projects, from major deployments to innovative solutions.
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-sm"></div>
            <div className="absolute top-8 right-6 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-teal-500/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-6 left-8 w-4 h-4 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-8 right-4 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Major Projects Section */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Major Projects
              </h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full ml-3"></div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Large-scale projects showcasing advanced technical skills and industry best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 max-w-4xl mx-auto">
            {majorProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                isNew={true} // Major projects are always treated as new/premium
              />
            ))}
          </div>
        </div>

        {/* Minor Projects Section */}
        <div>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mr-3"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Minor Projects
              </h3>
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full ml-3"></div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              Smaller projects demonstrating various programming concepts and technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {minorProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                isNew={index < 3} // First 3 projects (Streamlit, GenAI, Gemini) are new
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;