import React from 'react';
import jenkinsScreenshot from '../assets/jenkins_screenshot.png';
import pinterestKubernetes from '../assets/pinterest_kubernetes.png';
import apacheDocker from '../assets/2.jpg';

const LinkedInFeatured: React.FC = () => {
  return (
    <section id="linkedin-featured" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-teal-700 dark:text-teal-300">
          Featured on LinkedIn
        </h2>
        
        <div className="space-y-16 sm:space-y-20">
          {/* First Row: Pinterest x Kubernetes (Left) and Apache Docker (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Pinterest x Kubernetes - Left */}
            <div className="lg:pr-8">
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Pinterest x Kubernetes Case Study
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  How Pinterest scaled with Docker & K8s. Real-world case study insights on microservices, infra, and DevOps transformation.
                </p>
              </div>
              <div className="relative">
                <img
                  src={pinterestKubernetes}
                  alt="Pinterest Kubernetes Case Study"
                  className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 w-full"
                  style={{ background: 'white' }}
                />
                <a
                  href="https://www.linkedin.com/posts/lakshya-chalana-886306285_pinterest-kubernetes-docker-activity-7347302854144991232-pYtH?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE&utm_campaign=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 px-6 py-3 rounded-full font-semibold text-white shadow-lg backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-800/40 transition-all duration-300 hover:bg-white/60 hover:dark:bg-gray-900/60 hover:shadow-teal-400/60 hover:shadow-lg hover:text-teal-700 dark:hover:text-teal-300 focus:outline-none"
                  style={{
                    boxShadow: '0 4px 24px 0 rgba(45,212,191,0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  View on LinkedIn
                </a>
              </div>
            </div>

            {/* Apache Server in Docker - Right */}
            <div className="lg:pl-8 lg:pt-12">
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Apache Server in Docker
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hands-on experience running and configuring Apache inside a Docker container, learning about systemctl, ports, and real-world DevOps deployment.
                </p>
              </div>
              <div className="relative">
                <img
                  src={apacheDocker}
                  alt="Apache Server in Docker"
                  className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 w-full"
                  style={{ background: 'white' }}
                />
                <a
                  href="https://www.linkedin.com/posts/lakshya-chalana-886306285_apacheserver-docker-devops-activity-7348255132142211072-M9sA?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE&utm_campaign=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 px-6 py-3 rounded-full font-semibold text-white shadow-lg backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-800/40 transition-all duration-300 hover:bg-white/60 hover:dark:bg-gray-900/60 hover:shadow-teal-400/60 hover:shadow-lg hover:text-teal-700 dark:hover:text-teal-300 focus:outline-none"
                  style={{
                    boxShadow: '0 4px 24px 0 rgba(45,212,191,0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  View on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Second Row: Jenkins DevOps Project (Left) with balanced spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Jenkins DevOps Project - Left */}
            <div className="lg:pr-8">
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  My First DevOps Project
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  End-to-end CI/CD pipeline with Jenkins, Docker, and GitHub! Complete automation from code to deployment.
                </p>
              </div>
              <div className="relative">
                <img
                  src={jenkinsScreenshot}
                  alt="Jenkins Console Output - DevOps Project"
                  className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 w-full"
                  style={{ background: 'white' }}
                />
                <a
                  href="https://www.linkedin.com/posts/lakshya-chalana-886306285_devops-ciabrcd-jenkins-activity-7348006497106173954-wnHa?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE&utm_campaign=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 px-6 py-3 rounded-full font-semibold text-white shadow-lg backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-800/40 transition-all duration-300 hover:bg-white/60 hover:dark:bg-gray-900/60 hover:shadow-teal-400/60 hover:shadow-lg hover:text-teal-700 dark:hover:text-teal-300 focus:outline-none"
                  style={{
                    boxShadow: '0 4px 24px 0 rgba(45,212,191,0.25)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  View on LinkedIn
                </a>
              </div>
            </div>

            {/* Empty space for balance - Right */}
            <div className="lg:pl-8 lg:pt-12">
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 opacity-0">
                  Placeholder
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed opacity-0">
                  Future featured content will appear here.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <div className="text-center text-gray-400 dark:text-gray-600">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">More Content Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeatured; 