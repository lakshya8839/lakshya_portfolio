import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin } from 'lucide-react';
import saTaskManagerImg from '../assets/5.png';
import smartReviewImg from '../assets/4.png';
import secureLoginImg from '../assets/3.png';
import devopsProjectImg from '../assets/6.png';
import portfolioImg from '../assets/7.png';
import streamlitConcertImg from '../assets/8.png';
import geminiExpertImg from '../assets/9.png';
import webScrapingImg from '../assets/10.png';
import cacheMemoryImg from '../assets/13.jpg';
import kubernetesJenkinsImg from '../assets/14.jpg';
import agenticAIImg from '../assets/15.png';
import commandHubImg from '../assets/16.png';
import kubernetesJenkinsImg2 from '../assets/17.png';
import kubernetesJenkinsImg3 from '../assets/18.png';
import commandHubUpdate1Img from '../assets/20.jpg';

const Projects: React.FC = () => {
  const majorProjects = [
    {
      title: 'Kubernetes with Jenkins (Automation)',
      description: 'Automated the full DevOps workflow: wrote a Flask app, containerized it, built and pushed Docker images with Jenkins, and deployed seamlessly on Kubernetes. This project connected all the DevOps pieces into a real, working pipeline.',
      technologies: ['Kubernetes', 'Jenkins', 'Docker', 'Flask', 'GitHub'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_devops-kubernetes-jenkins-activity-7352753287558803456-lDP0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      github: 'https://github.com/lakshya8839/kubernetes_project_1.git',
      features: [
        'End-to-end CI/CD pipeline with Jenkins',
        'Automated Docker image build and push',
        'Kubernetes deployment',
        'Flask app containerization',
        'Real-world DevOps workflow'
      ],
      image: kubernetesJenkinsImg,
      imageAlt: 'Kubernetes with Jenkins Automation screenshot',
    },
    {
      title: 'Cache Memory Retrieve Data',
      description: 'Designed a microservices backend with two Flask services, PostgreSQL for storage, Redis for caching, and Docker Compose for orchestration. Focused on real-world data flow and service interaction.',
      technologies: ['Flask', 'Docker Compose', 'PostgreSQL', 'Redis', 'Microservices'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_microservicesarchitecture-redis-postgresql-activity-7352934887210864641-hegf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: [
        'Microservices architecture',
        'Independent Flask services',
        'PostgreSQL persistent storage',
        'Redis caching layer',
        'Docker Compose orchestration'
      ],
      image: cacheMemoryImg,
      imageAlt: 'Cache Memory Retrieve Data screenshot',
    },
    {
      title: 'Menu Based Project - CommandHub',
      description: 'A Python menu tool to run Linux commands on a remote RHEL root account via SSH. Built for convenience and learning, with code in Jupyter Notebook and easy expansion for more commands.',
      technologies: ['Python', 'SSH', 'Linux', 'Jupyter Notebook'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_ssh-python-linux-activity-7342597606079897600-zx8y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: [
        'Menu-driven Linux command execution',
        'SSH root access integration',
        'Jupyter Notebook codebase',
        'Expandable command logic'
      ],
      image: commandHubImg,
      imageAlt: 'Menu Based Project CommandHub screenshot',
      updates: [
        {
          date: '2024-06-01',
          title: 'Initial Release',
          description: 'Launched the first version with SSH-based Linux command execution and menu-driven interface.'
        },
        {
          date: '2024-06-10',
          title: 'Added Command Expansion',
          description: 'Introduced support for adding new commands and logic dynamically.'
        },
        {
          date: '2024-06-15',
          title: 'UI/UX Improvements',
          description: 'Enhanced the menu design for better usability and modern look.'
        },
        {
          date: '2024-06-20',
          title: 'Streamlit Integration & Major Expansion',
          description: `Finally brought it all together — my CommandHub Project, now designed on Streamlit.\n\nStarted as a simple menu-based CLI project, now it’s a single-page platform combining: 50+ Linux & Windows Commands, Docker Commands, Gemini Expert Advisor (LLM-based), JavaScript tools (camera, mail), and my Event Pass Project — all in one flow.`,
          linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_commandhub-streamlit-python-activity-7346941722913927168-jefo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
          image: commandHubUpdate1Img
        }
      ]
    },
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
      title: 'Agentic AI Use Case Product - G.O.A.T',
      description: 'GOAT is an Agentic AI product on Solana blockchain that automates tasks, interacts with smart contracts, and handles complex workflows—showcasing GenAI-powered real execution, not just responses.',
      technologies: ['Agentic AI', 'GenAI', 'Solana', 'Automation'],
      linkedin: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_agenticai-genaiops-solana-activity-7349836475871469568-SuaX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
      features: [
        'Solana blockchain integration',
        'Agentic AI automation',
        'Smart contract interaction',
        'Complex workflow handling'
      ],
      image: agenticAIImg,
      imageAlt: 'Agentic AI Use Case Product GOAT screenshot',
    },
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
        {project.title === 'Kubernetes with Jenkins (Automation)' ? (
          <div className="flex flex-row w-full h-full bg-black">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="object-contain w-1/3 h-full rounded-tl-2xl transition-all duration-300"
            />
            <img
              src={kubernetesJenkinsImg2}
              alt="Kubernetes with Jenkins Additional screenshot 1"
              className="object-contain w-1/3 h-full transition-all duration-300"
            />
            <img
              src={kubernetesJenkinsImg3}
              alt="Kubernetes with Jenkins Additional screenshot 2"
              className="object-contain w-1/3 h-full rounded-tr-2xl transition-all duration-300"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.imageAlt}
            className={`w-full h-full rounded-t-2xl transition-all duration-300 ${
              'object-cover'
            } ${isNew ? 'group-hover:scale-105' : ''}`}
          />
        )}
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
        <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
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
        {/* Floating Updates Button for CommandHub */}
        {project.title === 'Menu Based Project - CommandHub' && project.updates && (
          <div className="pointer-events-none">
            <button
              type="button"
              className="pointer-events-auto fixed md:absolute bottom-6 right-6 md:bottom-4 md:right-4 z-30 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{maxWidth: '90vw'}} // Prevents overflow on small screens
              onClick={() => setShowCommandHubModal(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              View Updates
              <span className="ml-1 bg-white text-blue-600 rounded-full px-2 py-0.5 text-xs font-bold">{project.updates.length}</span>
            </button>
          </div>
        )}
      </div>
      
      {/* Premium Glow Effect for New Projects */}
      {isNew && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      )}
    </div>
  );

  // State for expanding CommandHub updates
  const [showCommandHubUpdates, setShowCommandHubUpdates] = useState(false);
  // Add state for CommandHub updates modal
  const [showCommandHubModal, setShowCommandHubModal] = useState(false);

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
                isNew={true}
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
                isNew={![
                  'Secure Login System',
                  'SmartReview – AI Code Review Platform',
                  'SA Task Manager'
                ].includes(project.title)}
              />
            ))}
          </div>
        </div>

        {/* Project Updates Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-8 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full mr-2"></span>
            Project Updates
          </h2>
          <div className="space-y-6">
            {/* CommandHub Updates Card */}
            <div
              className={`transition-all duration-500 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-700 cursor-pointer overflow-hidden ${showCommandHubUpdates ? 'p-6' : 'p-4 hover:shadow-2xl'}`}
              onClick={() => setShowCommandHubUpdates((prev) => !prev)}
            >
              <div className="flex items-center gap-4">
                <img src={commandHubImg} alt="CommandHub" className="w-16 h-16 rounded-xl object-cover border border-blue-300 dark:border-blue-700" />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">Menu Based Project - CommandHub</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Click to {showCommandHubUpdates ? 'collapse' : 'expand'} updates</p>
                  {!showCommandHubUpdates && (
                    <div className="mt-2">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mr-2">Latest Update</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{majorProjects.find(p => p.title === 'Menu Based Project - CommandHub')?.updates?.slice(-1)[0]?.title}</span>
                    </div>
                  )}
                </div>
                <svg className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${showCommandHubUpdates ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
              {showCommandHubUpdates && (
                <div className="mt-8">
                  <h4 className="text-base font-semibold text-blue-700 dark:text-blue-300 mb-4 uppercase tracking-wide">Key Updates Timeline</h4>
                  <ol className="relative border-l-2 border-blue-400 dark:border-blue-600 ml-2">
                    {majorProjects.find(p => p.title === 'Menu Based Project - CommandHub')?.updates?.map((update: {date: string; title: string; description: string; linkedin?: string; image?: string}, idx: number) => (
                      <li key={idx} className="mb-10 ml-4 relative">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border-2 border-white dark:border-gray-900"></div>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          {update.image && (
                            <img src={update.image} alt={update.title + ' update image'} className="rounded-lg shadow-md w-40 h-28 object-cover border border-blue-200 dark:border-blue-700" />
                          )}
                          <div className="flex-1">
                            <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">{update.date}</span>
                            <span className="font-semibold text-base text-blue-700 dark:text-blue-300 block mb-1">{update.title}</span>
                            <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line block mb-2">{update.description}</span>
                            {update.linkedin && (
                              <a
                                href={update.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mt-1 w-fit"
                              >
                                <Linkedin className="w-4 h-4 mr-1" /> View LinkedIn Post
                              </a>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* CommandHub Updates Modal */}
      {showCommandHubModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-blue-200 dark:border-blue-700 max-w-2xl w-full mx-4 p-8 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none"
              onClick={() => setShowCommandHubModal(false)}
              aria-label="Close updates modal"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">Menu Based Project - CommandHub<br/><span className='text-base font-normal text-gray-500 dark:text-gray-400'>Key Updates Timeline</span></h3>
            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <ol className="relative border-l-2 border-blue-400 dark:border-blue-600 ml-2">
                {majorProjects.find(p => p.title === 'Menu Based Project - CommandHub')?.updates?.map((update: {date: string; title: string; description: string; linkedin?: string; image?: string}, idx: number) => (
                  <li key={idx} className="mb-10 ml-4 relative">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border-2 border-white dark:border-gray-900"></div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      {update.image && (
                        <img src={update.image} alt={update.title + ' update image'} className="rounded-lg shadow-md w-36 h-24 md:w-40 md:h-28 object-cover border border-blue-200 dark:border-blue-700 flex-shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <span className="text-xs text-gray-500 dark:text-gray-400 mb-1 block break-words">{update.date}</span>
                        <span className="font-semibold text-base text-blue-700 dark:text-blue-300 block mb-1 break-words">{update.title}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line block mb-2 break-words">{update.description}</span>
                        {update.linkedin && (
                          <a
                            href={update.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mt-1 w-fit"
                          >
                            <Linkedin className="w-4 h-4 mr-1" /> View LinkedIn Post
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;