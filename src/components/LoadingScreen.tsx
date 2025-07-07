import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 loading-gradient-bg flex items-center justify-center z-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-gray-300/30 rounded-full animate-float-up"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-400/25 rounded-full animate-float-up" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gray-500/20 rounded-full animate-float-up" style={{ animationDelay: '6s' }}></div>
        {/* River flow lines */}
        <div className="absolute top-1/5 left-0 w-full h-px bg-gray-400/10 animate-river-flow"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gray-500/8 animate-river-flow-delayed"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gray-600/6 animate-river-flow-slow"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 animate-loading-fade-in">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-widest leading-tight text-center">
            Lakshya Chalana's
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-widest leading-tight text-center">
            Portfolio
          </h2>
        </div>
        {/* Loading indicator */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <div className="w-3 h-3 rounded-full silver-dot animate-loading-dots"></div>
          <div className="w-3 h-3 rounded-full silver-dot animate-loading-dots" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full silver-dot animate-loading-dots" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 