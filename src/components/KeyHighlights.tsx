import React from 'react';
import { Linkedin, ExternalLink, Star, Users, Trophy, BookOpen } from 'lucide-react';
import iitSureImage from '../assets/iit_sure_selection.png';

const LINKEDIN_POST =
  'https://www.linkedin.com/posts/lakshya-chalana-886306285_iithyderabad-sureinternship-computerscience-activity-7453094920636039168-VYrw?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEVHYWYBuyhNONblNN_cYP0KU9JSzwHJAjE&utm_campaign=copy_link';

const stats = [
  {
    icon: <Users className="w-5 h-5 text-teal-400" />,
    value: '18',
    label: 'Selected Pan-India',
    sub: 'Computer Science branch',
  },
  {
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    value: 'IIT Hyderabad',
    label: 'Prestigious Institution',
    sub: 'Top-tier research campus',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-blue-400" />,
    value: 'SURE 2026',
    label: 'Research Internship',
    sub: 'Summer Undergraduate Research Exposure',
  },
  {
    icon: <Star className="w-5 h-5 text-fuchsia-400" />,
    value: 'SURE2026-0364',
    label: 'Application ID',
    sub: 'Poornima College of Engineering',
  },
];

const KeyHighlights: React.FC = () => {
  return (
    <section
      id="key-highlights"
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Animated background — same pattern as other sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/6 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/25 to-transparent animate-river-flow" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-300/20 to-transparent animate-river-flow-delayed" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/15 to-transparent animate-river-flow-slow" />

        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-teal-400/40 rounded-full animate-float-up" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-yellow-300/30 rounded-full animate-float-up" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-teal-500/30 rounded-full animate-float-up" style={{ animationDelay: '8s' }} />
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-blue-400/25 rounded-full animate-float-up" style={{ animationDelay: '12s' }} />

        <div className="absolute left-0 top-1/3 w-40 h-40 bg-teal-400/15 rounded-full blur-3xl animate-blob-drift" />
        <div className="absolute right-0 bottom-1/4 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl animate-blob-drift2" style={{ animationDelay: '5s' }} />
        <div className="absolute right-8 top-1/4 w-28 h-28 bg-blue-300/15 rounded-full blur-2xl animate-blob-drift" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Golden badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-300 dark:border-yellow-600 mb-5">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-widest">
              Key Highlight
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Got Selected for{' '}
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              IIT Hyderabad SURE
            </span>{' '}
            Internship
          </h2>
          <p className="text-base font-semibold text-teal-600 dark:text-teal-400 mb-2 tracking-wide uppercase">
            Summer Undergraduate Research Exposure — 2026
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selected among just <strong className="text-gray-900 dark:text-white">18 students across India</strong> (Computer Science branch)
            for the prestigious SURE programme at IIT Hyderabad — competing with candidates
            from IITs, NITs, and top institutions nationwide.
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-5xl mx-auto">

          {/* Category title bar — same pattern as LinuxWorldWork */}
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block w-2 h-8 rounded-full bg-gradient-to-b from-yellow-400 to-teal-400" />
            <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-300">
              IIT Hyderabad — SURE Research Internship
            </h3>
            <span className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-gray-300 to-teal-400 dark:from-yellow-700 dark:via-gray-700 dark:to-teal-700 ml-2" />
          </div>

          {/* Two-column: image (left) + detail + CTA (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT — Selection list image */}
            <div className="animate-fade-in bg-white dark:bg-gray-900 rounded-2xl p-4 shadow border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Highlight badge over image */}
              <div className="relative">
                <img
                  src={iitSureImage}
                  alt="IIT Hyderabad SURE 2026 Selection List — Lakshya Chalana at Row 11"
                  className="w-full rounded-xl object-contain"
                  style={{ maxHeight: '480px' }}
                />
                {/* Row-11 callout */}
                <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Row #11 — Lakshya Chalana ✓
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                Official SURE 2026 Selection List — IIT Hyderabad
              </p>
            </div>

            {/* RIGHT — Stats + story + LinkedIn CTA */}
            <div className="flex flex-col gap-5" style={{ animationDelay: '80ms' }}>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="animate-fade-in bg-white dark:bg-gray-900 rounded-2xl p-4 shadow border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {s.icon}
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {s.label}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Story card */}
              <div className="animate-fade-in bg-white dark:bg-gray-900 rounded-2xl p-6 shadow border border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  The Journey
                </h4>
                <ul className="space-y-2">
                  {[
                    'Resume shortlisted from applicants across all of India',
                    'Deep-dive discussion on projects, thinking process & learning',
                    'Selected among only 18 CS students nationwide',
                    'Competing alongside students from IITs, NITs & top institutions',
                    'Research-driven environment at IIT Hyderabad campus',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LinkedIn CTA */}
              <a
                id="iit-sure-linkedin-post-link"
                href={LINKEDIN_POST}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:shadow-xl group"
              >
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
                View Achievement Post on LinkedIn
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
