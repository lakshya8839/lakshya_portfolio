import React from 'react';
import { Linkedin, ExternalLink, Award, Calendar, MapPin } from 'lucide-react';
import dmvCertificate from '../assets/dmv_certificate.png';

const LINKEDIN_POST =
  'https://www.linkedin.com/posts/lakshya-chalana-886306285_dmv-coretech-internship-certificate-lakshya-activity-7445079918880759808--Vl9?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE&utm_campaign=copy_link';

const Internship: React.FC = () => {
  return (
    <section
      id="internship"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Same animated background as LinuxWorldWork */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/25 to-transparent animate-river-flow" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent animate-river-flow-delayed" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/15 to-transparent animate-river-flow-slow" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-teal-400/40 rounded-full animate-float-up" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-300/35 rounded-full animate-float-up" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-500/30 rounded-full animate-float-up" style={{ animationDelay: '8s' }} />
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-teal-600/25 rounded-full animate-float-up" style={{ animationDelay: '12s' }} />

        {/* Blurred gradient blobs */}
        <div className="absolute left-0 top-1/3 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-blob-drift" />
        <div className="absolute right-0 top-1/4 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-blob-drift" style={{ animationDelay: '4s' }} />
        <div className="absolute right-8 bottom-1/3 w-24 h-24 bg-teal-100/20 rounded-full blur-2xl animate-blob-drift2" style={{ animationDelay: '7s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — same style as LinuxWorldWork */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Internship Experience
          </h2>
          <p className="text-base font-semibold text-teal-600 dark:text-teal-400 mb-2 tracking-wide uppercase">
            Industry Exposure &amp; Certifications
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world internship at DMV CoreTech — gaining hands-on experience
            in Data Science and professional development practices.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-5xl mx-auto">
          {/* Category title bar — same pattern as LinuxWorldWork columns */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-2 h-8 rounded-full border-teal-400 bg-gradient-to-b from-teal-400 to-blue-400" />
            <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
              DMV CoreTech — Data Science Internship
            </h3>
            <span className="flex-1 h-px bg-gradient-to-r from-teal-400 via-gray-300 to-blue-400 dark:from-teal-700 dark:via-gray-700 dark:to-blue-700 ml-2" />
          </div>

          {/* Two-column layout: certificate (left) + LinkedIn CTA (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* LEFT — Certificate Image */}
            <div className="animate-fade-in bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 shadow border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src={dmvCertificate}
                alt="DMV CoreTech Internship Certificate — Lakshya Chalana"
                className="w-full rounded-xl object-contain"
                style={{ maxHeight: '520px' }}
              />
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                Certificate of Internship — DMV CoreTech
              </p>
            </div>

            {/* RIGHT — Internship details + LinkedIn CTA */}
            <div className="animate-fade-in flex flex-col gap-6" style={{ animationDelay: '80ms' }}>
              {/* Highlights */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Internship Details
                  </span>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-teal-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Domain
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Data Science</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Organization
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">DMV CoreTech</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 mt-0.5 text-teal-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Duration
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        11 Nov 2025 — 03 Nov 2026
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 text-teal-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Location
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Silvassa, India
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 mt-2 rounded-full bg-fuchsia-500 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Certificate ID
                      </span>
                      <p className="text-sm font-mono text-gray-600 dark:text-gray-400">
                        DMVCT-INT-3M2512DSDA0011
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Description */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow border border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Successfully completed the <span className="text-teal-600 dark:text-teal-400 font-semibold">Data Science</span> internship
                  program at DMV CoreTech, demonstrating dedication, professionalism, and a strong willingness
                  to learn — gaining valuable exposure to real-world development practices.
                </p>
              </div>

              {/* LinkedIn CTA */}
              <a
                id="dmv-linkedin-post-link"
                href={LINKEDIN_POST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-xl group"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                View Internship Post on LinkedIn
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
