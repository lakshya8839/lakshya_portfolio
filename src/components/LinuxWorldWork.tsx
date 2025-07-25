import React, { useState } from 'react';
import { ExternalLink, Github, Clock, Linkedin } from 'lucide-react';

const linuxWorldTasks = [
  {
    title: 'Web Scraping using Python',
    description: 'Automated data extraction from websites using Python scripts.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/web_scrapping.py',
    updated: '2024-07-07',
  },
  {
    title: 'Send an Email with Python',
    description: 'Use Python to successfully send an email programmatically.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/send_email.py',
    updated: '2024-07-07',
  },
  {
    title: 'Send an SMS with Python',
    description: 'Send a text message using Python and an SMS gateway/API.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/sms.py',
    updated: '2024-07-07',
  },
  {
    title: 'Make a Phone Call with Python',
    description: 'Use Python to make a phone call using a text-to-voice API.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/text_to_voice_call.py',
    updated: '2024-07-07',
  },
  {
    title: 'Post on Instagram with Python',
    description: 'Post a message and images on Instagram using Python automation.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/insta_multi_image.py',
    updated: '2024-07-07',
  },
  {
    title: 'Menu-Driven Python Project',
    description: 'A menu-driven Python program that combines all automation tasks into a single interface.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/menu.py',
    updated: '2024-07-07',
  },
  {
    title: 'Take Photo Using JavaScript',
    description: 'Create a JavaScript function to access the webcam and capture a photo.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/Fullstack/menu_project_JS.html',
    updated: '2024-07-07',
  },
  {
    title: 'Send Email Using JavaScript or API',
    description: 'Use EmailJS or a backend API to send email through a JavaScript-based interface.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/Fullstack/menu_project_JS.html',
    updated: '2024-07-07',
  },
  {
    title: 'Send WhatsApp Message Using JavaScript',
    description: 'Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/Fullstack/menu_project_JS.html',
    updated: '2024-07-07',
  },
  // Add more tasks/projects here as you progress
];

const statusColors: Record<string, string> = {
  'Completed': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  'In Progress': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  'Demo': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
};

const pythonTasks = linuxWorldTasks.filter(task => task.title.toLowerCase().includes('python'));
// Update JavaScript Automation tasks with user-provided list and LinkedIn link
const jsTasks: Task[] = [
  {
    title: 'Take Photo Using JavaScript',
    description: 'Create a JavaScript function to access the webcam and capture a photo.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/Fullstack/menu_project_JS.html',
    updated: '2024-07-07',
  },
  {
    title: 'Send Email Using JavaScript or API',
    description: 'Use EmailJS or a backend API to send email through a JavaScript-based interface.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/Fullstack/menu_project_JS.html',
    updated: '2024-07-07',
  },
  {
    title: 'Send WhatsApp Message Using JavaScript',
    description: 'Use WhatsApp web URL scheme or API to initiate a WhatsApp message from JS.',
    status: 'Completed',
    github: 'https://github.com/lakshya8839/internship-tasks/blob/main/Fullstack/menu_project_JS.html',
    updated: '2024-07-07',
  },
  // New LinkedIn tasks below
  {
    title: 'Open the camera, click a photo & download it',
    description: 'A JavaScript project to access the camera, capture a photo, and enable download.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_linuxworld-week2-javascript-activity-7344779299679293440-BbIT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Send mails using JS',
    description: 'Send emails programmatically using JavaScript.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_linuxworld-week2-javascript-activity-7344779299679293440-BbIT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Check nearest grocery stores',
    description: 'A JavaScript feature to find and display the nearest grocery stores.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_linuxworld-week2-javascript-activity-7344779299679293440-BbIT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Run Google Maps inside the project',
    description: 'Integrate Google Maps into a JavaScript project for enhanced location features.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_linuxworld-week2-javascript-activity-7344779299679293440-BbIT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Fetch and show current location (lat-long)',
    description: 'Use JavaScript to fetch and display the user\'s current latitude and longitude.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_linuxworld-week2-javascript-activity-7344779299679293440-BbIT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Browser activity tracker',
    description: 'A browser activity tracker that monitors user behavior and recommends content.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_linuxworld-week2-javascript-activity-7344779299679293440-BbIT?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];
// Docker Section
const dockerTasks: Task[] = [
  {
    title: 'Docker in Docker',
    description: 'Experimented with running Docker inside Docker and creating custom images.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_vimaldaga-linuxworld-constantefforts-activity-7345048117857218560-QCH3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Apache Server Setup',
    description: 'Set up Apache server inside Docker for DevOps automation.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_apacheserver-docker-devops-activity-7348255132142211072-M9sA?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Vlc in Docker',
    description: 'Deployed VLC media player in a Docker container with GUI support.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_docker-vlc-guiindocker-activity-7350209251950157824-iwKi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];
// GEN AI Section
const genAITasks: Task[] = [
  {
    title: 'Gemini Expert Advisor',
    description: 'Built a custom GenAI project using Gemini 2.5 Flash model and Gradio for multi-domain advice.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_genai-gemini-gradio-activity-7345145243517800448-rQHZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
  {
    title: 'Medicini info Gemini (Made with GenAI + Web Scrapping)',
    description: 'A GenAI-powered project for medical information using Gemini API and web scraping.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_genai-geminiapi-webscraping-activity-7350052616640356352-igLw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];
// Jenkins Section
const jenkinsTasks: Task[] = [
  {
    title: 'Pulled code using GitHub auto-download – Ran Docker commands directly through automation',
    description: 'Automated pipeline: pulled code from GitHub and ran Docker commands using Jenkins.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_automationtask-github-docker-activity-7347143901184446464-UAQp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];
// DevOps Section
const devopsTasks: Task[] = [
  {
    title: 'Devops project 1',
    description: 'A CI/CD pipeline project using Jenkins, Docker, and GitHub.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_devops-ciabrcd-jenkins-activity-7348006497106173954-wnHa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];
// Cloud Section
const awsTasks: Task[] = [
  {
    title: 'Launcing instances from python code',
    description: 'Automated cloud instance launch using Python.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_cloudops-cloudcomputing-pythonautomation-activity-7349493851738296320-XS4s?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];
// Agentic AI Section
const agenticAITasks: Task[] = [
  {
    title: 'Used GOAT Tool (langchain)',
    description: 'Explored Agentic AI using the GOAT Tool and Langchain for advanced automation.',
    status: 'Completed',
    github: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_agenticai-genaiops-solana-activity-7349836475871469568-SuaX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE',
    updated: '2024-07-07',
  },
];

interface Task {
  title: string;
  description: string;
  status: string;
  github: string;
  updated: string;
}

interface TechColumn {
  key: string;
  title: string;
  color: string;
  tasks: Task[];
}

const techColumns: TechColumn[] = [
  { key: 'python', title: 'Python Automation', color: 'border-teal-400', tasks: pythonTasks },
  { key: 'js', title: 'JavaScript Automation', color: 'border-blue-400', tasks: jsTasks },
  { key: 'devops', title: 'DevOps (CI/CD Pipeline)', color: 'border-orange-400', tasks: devopsTasks },
  { key: 'jenkins', title: 'Jenkins Automation', color: 'border-gray-400', tasks: jenkinsTasks },
  { key: 'docker', title: 'Docker Specific', color: 'border-cyan-400', tasks: dockerTasks },
  { key: 'genai', title: 'GEN AI', color: 'border-fuchsia-400', tasks: genAITasks },
  { key: 'agentic', title: 'Agentic AI', color: 'border-pink-400', tasks: agenticAITasks },
  { key: 'aws', title: 'Cloud Automation', color: 'border-yellow-400', tasks: awsTasks },
];

// Flatten all tasks with category info
const allTasks: (Task & { category: string; color: string })[] = [];
techColumns.forEach(col => {
  col.tasks.forEach(task => {
    allTasks.push({ ...task, category: col.title, color: col.color });
  });
});

const LinuxWorldWork: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  return (
    <section id="linuxworld-work" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live Work @ LinuxWorld
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ongoing tasks and projects from my internship at LinuxWorld Informatics Pvt Ltd. This section is updated regularly with my latest work and learning outcomes.
          </p>
        </div>
        <div className="w-full space-y-16">
          {techColumns.map((col) => {
            const showAll = expandedCategories[col.key];
            const visibleTasks = showAll ? col.tasks : col.tasks.slice(0, 6);
            return (
              <div key={col.key} className="">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-block w-2 h-8 rounded-full ${col.color} bg-gradient-to-b from-teal-400 to-blue-400`}></span>
                  <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-300">{col.title}</h3>
                  <span className="flex-1 h-px bg-gradient-to-r from-teal-400 via-gray-300 to-blue-400 dark:from-teal-700 dark:via-gray-700 dark:to-blue-700 ml-2"></span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleTasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="animate-fade-in bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-lg"
                      style={{ animationDelay: `${idx * 40}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[task.status] || 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'}`}>{task.status}</span>
                        <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 ml-auto"><Clock className="w-4 h-4 mr-1" />{task.updated}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-teal-600 transition-colors duration-300">{task.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">{task.description}</p>
                      {task.github.includes('github.com') ? (
                        <a
                          href={task.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 hover:scale-105 text-xs"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      ) : task.github.includes('linkedin.com') ? (
                        <a
                          href={task.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 text-xs"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          View on LinkedIn
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
                {col.tasks.length > 6 && (
                  <div className="flex justify-center mt-6">
                    <button
                      className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow hover:from-blue-600 hover:to-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      onClick={() => setExpandedCategories((prev) => ({ ...prev, [col.key]: !showAll }))}
                    >
                      {showAll ? 'Show Less' : `Show More (${col.tasks.length - 6})`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LinuxWorldWork; 