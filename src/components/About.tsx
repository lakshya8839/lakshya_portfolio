import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science Engineering',
      institution: 'Poornima College of Engineering, Jaipur',
      year: '2027',
      icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
      status: 'Expected',
    },
    {
      degree: 'Class XII',
      institution: 'Sacred Heart Convent School, Suratgarh',
      year: '2022',
      icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
      status: 'Completed',
    },
    {
      degree: 'Class X',
      institution: 'Blossom Academy School, Suratgarh',
      year: '2020',
      icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
      status: 'Completed',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Flowing wave lines */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/25 to-transparent rounded-full animate-flow-wave"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-300/20 to-transparent rounded-full animate-flow-wave-delayed"></div>
        
        {/* Flowing particles */}
        <div className="absolute top-1/6 left-0">
          <div className="w-2 h-2 bg-teal-400/40 rounded-full animate-flow-particle"></div>
        </div>
        <div className="absolute top-2/3 left-0" style={{ animationDelay: '3s' }}>
          <div className="w-3 h-3 bg-teal-300/35 rounded-full animate-flow-particle"></div>
        </div>
        
        {/* Streaming lines */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-teal-400/20 to-transparent animate-flow-stream"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-300/15 to-transparent animate-flow-stream" style={{ animationDelay: '2s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/5 right-1/6" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-gradient-to-br from-teal-400/20 to-teal-600/10 animate-flow-energy"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate tech intern with a strong foundation in computer science and hands-on experience in full-stack development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
            Education Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-600 via-teal-500 to-teal-600 rounded-full shadow-lg"></div>
            
            {education.map((item, index) => (
              <div key={index} className="relative flex items-center mb-20 last:mb-0">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      {index % 2 === 0 ? (
                        <>
                          <div className="flex-1">
                            <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                              {item.status}
                            </span>
                          </div>
                          <div className="ml-4">
                            {item.icon}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mr-4">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                              {item.status}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {item.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {item.institution}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{item.year}</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;