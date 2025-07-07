import React from 'react';
import { Code2, Database, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['Python', 'C', 'C++', 'JavaScript'],
      color: 'bg-blue-500',
    },
    {
      title: 'Web Development',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['HTML5', 'CSS3', 'Flask', 'React'],
      color: 'bg-green-500',
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'Database Design', 'Query Optimization'],
      color: 'bg-purple-500',
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins'],
      color: 'bg-orange-500',
    },
    {
      title: 'APIs & Integration',
      icon: <Brain className="w-6 h-6" />,
      skills: ['OpenAI API', 'GitHub REST API', 'RESTful Services'],
      color: 'bg-red-500',
    },
    {
      title: 'Currently Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Machine Learning', 'GENAI', 'GENAIops', 'Python for Data Science'],
      color: 'bg-teal-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Flowing Lines Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* River flow animations */}
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/22 to-transparent animate-river-flow"></div>
        <div className="absolute bottom-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/18 to-transparent animate-river-flow-delayed"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/12 to-transparent animate-river-flow-slow"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-teal-400/40 rounded-full animate-float-up"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-300/35 rounded-full animate-float-up" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-500/30 rounded-full animate-float-up" style={{ animationDelay: '10s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-teal-600/25 rounded-full animate-float-up" style={{ animationDelay: '15s' }}></div>
        
        {/* Energy flows */}
        <div className="absolute top-1/3 left-1/5">
          <div className="w-6 h-6 bg-gradient-to-br from-teal-400/25 to-teal-600/15 animate-flow-energy"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <div className="w-5 h-5 bg-gradient-to-br from-teal-300/20 to-teal-500/10 animate-flow-energy" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="absolute top-2/3 right-1/3">
          <div className="w-4 h-4 bg-gradient-to-br from-teal-500/18 to-teal-700/12 animate-flow-energy" style={{ animationDelay: '8s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-300 group/skill"
                  >
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-3 group-hover/skill:animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-teal-600 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills proficiency bars */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: 'Python', level: 85 },
              { skill: 'JavaScript', level: 75 },
              { skill: 'Flask', level: 80 },
              { skill: 'MySQL', level: 70 },
              { skill: 'Git/GitHub', level: 85 },
              { skill: 'Docker', level: 65 },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.skill}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;