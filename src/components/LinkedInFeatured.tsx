import React from 'react';
import jenkinsScreenshot from '../assets/jenkins_screenshot.png';
import pinterestKubernetes from '../assets/pinterest_kubernetes.png';
import apacheDocker from '../assets/2.jpg';

const LinkedInFeatured: React.FC = () => {
  return (
    <section id="linkedin-featured" className="py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-teal-700 dark:text-teal-300">Featured on LinkedIn</h2>
        <div className="space-y-12">
          {/* Apache Server in Docker Card */}
          <div>
            <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
              Apache Server Setup Inside Docker: Hands-on experience running and configuring Apache inside a Docker container, learning about systemctl, ports, and real-world DevOps deployment. <a href="https://www.linkedin.com/posts/lakshya-chalana-886306285_apacheserver-docker-devops-activity-7348255132142211072-M9sA?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE&utm_campaign=copy_link" target="_blank" rel="noopener noreferrer" className="text-teal-600 underline">Read more on LinkedIn</a>
            </p>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xl">
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

          {/* Jenkins DevOps Project Card */}
          <div>
            <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
              My first DevOps project: End-to-end CI/CD pipeline with Jenkins, Docker, and GitHub! Check out the full story and details on LinkedIn.
            </p>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xl">
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
          </div>

          {/* Pinterest x Kubernetes Case Study Card */}
          <div>
            <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
              Pinterest x Kubernetes: How Pinterest scaled with Docker & K8s. Real-world case study insights on microservices, infra, and DevOps transformation. Read the full breakdown on LinkedIn!
            </p>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeatured; 