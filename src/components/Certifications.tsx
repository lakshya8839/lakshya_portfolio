import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      provider: 'Oracle',
      date: 'Completed',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=A91057E1C723CB6A4185F9C9012B11098BCADED1A4AD36591F2CD99609E3FCC2',
      status: 'Verified',
      description: 'Certified in fundamental concepts of AI and machine learning, focusing on practical applications within Oracle Cloud Infrastructure.',
    },
    {
      title: 'Google Cloud Career Launchpad – Generative AI Leader Track',
      provider: 'Google Cloud',
      date: 'Completed',
      link: 'https://www.linkedin.com/posts/lakshya-chalana-886306285_googlecloudready-googlecloud-generativeai-activity-7391140630845939712-2fzc',
      status: 'Verified',
      description: 'Understanding core concepts of Generative AI, Large Language Models, prompt design, responsible AI practices, and real business use cases.',
    },
    {
      title: 'AI for Beginners',
      provider: 'HP LIFE',
      date: 'Completed',
      link: 'https://www.life-global.org/certificate/21430cab-bd31-491b-847f-0d23f25bf320',
      status: 'Verified',
      description: 'Comprehensive introduction to Artificial Intelligence fundamentals and applications.',
    }
  ];

  const getProviderLogo = (provider: string) => {
    switch (provider) {
      case 'Oracle':
        return (
          <svg viewBox="0 0 24 24" fill="#F80000" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 2.308h-9A7.508 7.508 0 0 0 0 9.816v4.368a7.508 7.508 0 0 0 7.5 7.508h9a7.508 7.508 0 0 0 7.5-7.508V9.816a7.508 7.508 0 0 0-7.5-7.508zm3.81 11.876a3.815 3.815 0 0 1-3.81 3.81h-9a3.814 3.814 0 0 1-3.81-3.81V9.816a3.814 3.814 0 0 1 3.81-3.81h9a3.815 3.815 0 0 1 3.81 3.81z"/>
          </svg>
        );
      case 'Google Cloud':
        return (
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        );
      case 'HP LIFE':
        return (
          <svg viewBox="0 0 24 24" fill="#0096D6" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M5.132 15.684l1.32-6.52a.208.208 0 0 1 .203-.164h1.769a.203.203 0 0 1 .198.16l.334 1.554.437-1.408a1.22 1.22 0 0 1 1.18-.706h2.793a1.432 1.432 0 0 1 1.444 1.467 1.6 1.6 0 0 1-.035.334l-.872 4.283h-1.638l.848-4.22a.49.49 0 0 0 .01-.097.436.436 0 0 0-.46-.358H11.53c-.347.01-.632.227-.728.53l-1.02 5.145H8.16l1.353-6.57h-.166l-1.34 6.57H5.132Zm13.593-3.69c0 1.284-1.287 2.106-2.934 2.106h-1.085l-.547 2.584h-1.616l1.528-7.514h2.528c1.556 0 2.126.963 2.126 2.824M16.92 11.75a1.282 1.282 0 0 0-1.358-1.326h-.971l-.64 3.09h.828c1.378 0 2.141-.453 2.141-1.764" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        );
      default:
        return <Award className="w-8 h-8 text-teal-600" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* River flow animations */}
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/18 to-transparent animate-river-flow"></div>
        <div className="absolute bottom-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/14 to-transparent animate-river-flow-delayed"></div>
        <div className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent animate-river-flow-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/5 left-1/6 w-2 h-2 bg-teal-400/38 rounded-full animate-float-up"></div>
        <div className="absolute top-4/5 right-1/4 w-3 h-3 bg-teal-300/32 rounded-full animate-float-up" style={{ animationDelay: '5.5s' }}></div>
        <div className="absolute bottom-1/5 left-1/3 w-2 h-2 bg-teal-500/28 rounded-full animate-float-up" style={{ animationDelay: '11s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-teal-600/22 rounded-full animate-float-up" style={{ animationDelay: '16.5s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/4 left-1/3">
          <div className="w-5 h-5 bg-gradient-to-br from-teal-400/22 to-teal-600/12 animate-flow-energy"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <div className="w-6 h-6 bg-gradient-to-br from-teal-300/18 to-teal-500/8 animate-flow-energy" style={{ animationDelay: '2.5s' }}></div>
        </div>
        <div className="absolute top-3/4 left-1/5">
          <div className="w-4 h-4 bg-gradient-to-br from-teal-500/16 to-teal-700/10 animate-flow-energy" style={{ animationDelay: '6.5s' }}></div>
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
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100 dark:border-gray-700 shrink-0">
                  {getProviderLogo(cert.provider)}
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