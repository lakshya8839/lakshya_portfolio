import React from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';

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

const LinuxWorldWork: React.FC = () => {
  return (
    <section id="linuxworld-work" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Live Work @ LinuxWorld
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ongoing tasks and projects from my internship at LinuxWorld Informatics Pvt Ltd. This section is updated regularly with my latest work and learning outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {linuxWorldTasks.map((task, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium mr-2 ${statusColors[task.status] || 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200'}`}>{task.status}</div>
                  <span className="flex items-center text-xs text-gray-500 dark:text-gray-400"><Clock className="w-4 h-4 mr-1" />{task.updated}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {task.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {task.description}
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <a
                  href={task.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinuxWorldWork; 