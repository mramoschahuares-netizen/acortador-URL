
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-orange-600 p-1.5 rounded-lg shadow-inner">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">SHORTY</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors text-sm font-medium">How it Works</a>
            <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors text-sm font-medium">Downloader App</a>
            <a href="#" className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md">
              Get App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
