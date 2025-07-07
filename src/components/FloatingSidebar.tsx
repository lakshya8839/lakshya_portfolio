import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const FloatingSidebar: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/lakshya8839',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lakshya-chalana-886306285',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Chlakshya_8839?t=nJGw8MQfVUjereLf1oYXCg&s=09',
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:bg-blue-400',
    },
    {
      name: 'Email',
      url: 'mailto:lakshya.chalana@example.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:bg-red-500',
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${link.color}`}
            title={link.name}
          >
            {link.icon}
            <span className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSidebar;