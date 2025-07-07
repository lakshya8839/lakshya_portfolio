import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AI for Beginners',
      provider: 'HP LIFE',
      date: 'Completed',
      link: 'https://www.life-global.org/certificate/21430cab-bd31-491b-847f-0d23f25bf320',
      status: 'Verified',
      description: 'Comprehensive introduction to Artificial Intelligence fundamentals and applications.',
    },
    {
      title: 'Red Hat Certification',
      provider: 'Red Hat',
      date: 'Coming Soon',
      link: '#',
      status: 'In Progress',
      description: 'Advanced Linux system administration and enterprise solutions.',
    },
    {
      title: 'GENAI Certification',
      provider: 'Industry Partner',
      date: 'Coming Soon',
      link: '#',
      status: 'In Progress',
      description: 'Generative AI and modern AI operations practices.',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flowing ribbons */}
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/18 to-transparent animate-flow-ribbon"></div>
        <div className="absolute bottom-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/14 to-transparent animate-flow-ribbon" style={{ animationDelay: '5s' }}></div>
        
        {/* Flowing particles */}
        <div className="absolute top-1/5 left-0" style={{ animationDelay: '1.5s' }}>
          <div className="w-2 h-2 bg-teal-400/38 rounded-full animate-flow-particle"></div>
        </div>
        <div className="absolute top-4/5 left-0" style={{ animationDelay: '6.5s' }}>
          <div className="w-3 h-3 bg-teal-300/32 rounded-full animate-flow-particle"></div>
        </div>
        
        {/* Streaming lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/16 to-transparent animate-flow-stream"></div>
        <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-teal-300/12 to-transparent animate-flow-stream" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/4 left-1/3" style={{ animationDelay: '2.5s' }}>
          <div className="w-5 h-5 bg-gradient-to-br from-teal-400/22 to-teal-600/12 animate-flow-energy"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-600 rounded-full text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Verified' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {cert.provider}
              </p>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {cert.date}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                {cert.description}
              </p>

              {cert.status === 'Verified' ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </a>
              ) : (
                <div className="inline-flex items-center px-4 py-2 bg-gray-400 text-white rounded-full cursor-not-allowed">
                  <Award className="w-4 h-4 mr-2" />
                  In Progress
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;