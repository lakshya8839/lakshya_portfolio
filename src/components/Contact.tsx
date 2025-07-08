import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Download, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

// IMPORTANT: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS values.
// To send to chalanalakshya5@gmail.com, set the recipient in your EmailJS template settings.

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_g70yav5',
        'template_c56uq5k',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'n7xso1J9Viazz_HGh'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Optionally handle error
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/lakshya8839',
      icon: <Github className="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors duration-300" />, // dark, white on hover
      color: 'hover:bg-teal-600 dark:hover:bg-teal-700',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lakshya-chalana-886306285',
      icon: <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />, // white on hover
      color: 'hover:bg-teal-600 dark:hover:bg-teal-700',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Chlakshya_8839?t=nJGw8MQfVUjereLf1oYXCg&s=09',
      icon: <Twitter className="w-5 h-5 text-sky-500 dark:text-sky-400 group-hover:text-white transition-colors duration-300" />, // white on hover
      color: 'hover:bg-teal-600 dark:hover:bg-teal-700',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* River flow animations */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/25 to-transparent animate-river-flow"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent animate-river-flow-delayed"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/15 to-transparent animate-river-flow-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/5 left-1/6 w-2 h-2 bg-teal-400/42 rounded-full animate-float-up"></div>
        <div className="absolute top-4/5 right-1/4 w-3 h-3 bg-teal-300/36 rounded-full animate-float-up" style={{ animationDelay: '7s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-teal-500/32 rounded-full animate-float-up" style={{ animationDelay: '14s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-teal-600/28 rounded-full animate-float-up" style={{ animationDelay: '21s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/6 right-1/4">
          <div className="w-6 h-6 bg-gradient-to-br from-teal-400/28 to-teal-600/18 animate-flow-energy"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <div className="w-5 h-5 bg-gradient-to-br from-teal-300/24 to-teal-500/14 animate-flow-energy" style={{ animationDelay: '6s' }}></div>
        </div>
        <div className="absolute top-3/4 right-1/5">
          <div className="w-4 h-4 bg-gradient-to-br from-teal-500/20 to-teal-700/12 animate-flow-energy" style={{ animationDelay: '12s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out through any of these platforms. I typically respond within 24 hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${link.color} border border-gray-200 dark:border-gray-700`}
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full mr-4 group-hover:bg-teal-500/80 dark:group-hover:bg-teal-800/80 transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-white">
                      {link.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-100">
                      Connect with me on {link.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 border-2 border-teal-200 dark:border-teal-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Download My Resume
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <a
                href="https://drive.google.com/file/d/1xzQfiS-rr9XINBH2Tl6vmdo2hHwXN_3D/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-300"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-teal-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;