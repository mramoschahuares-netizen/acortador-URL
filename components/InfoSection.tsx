
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">How it Works</h2>
        <div className="h-1 w-20 bg-orange-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826L10.242 9.172a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102 1.102" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Paste URL</h3>
          <p className="text-gray-500 leading-relaxed">
            Enter any direct download link or webpage URL into the shortener. Our AI will analyze it to ensure it's ready.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">2. Get 5-Digit Code</h3>
          <p className="text-gray-500 leading-relaxed">
            Instantly receive a unique 5-digit numeric code. This code is optimized specifically for remote control input.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">3. Load into Downloader</h3>
          <p className="text-gray-500 leading-relaxed">
            Open the Downloader app on your device, type the 5-digit code in the URL box, and press 'Go' to start.
          </p>
        </div>
      </div>

      <div className="mt-20 bg-gray-900 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-4">Why use Shorty?</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Typing long URLs with a TV remote is frustrating and prone to errors. 
              Our service converts those long strings into 5 simple numbers, making it 10x faster to load apps, 
              APKs, and files onto your media player.
            </p>
            <ul className="space-y-3 text-white">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                100% Free to use
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Privacy focused (No tracking)
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Smart URL title extraction
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="text-orange-500 font-bold mb-2">Example:</div>
            <div className="bg-black/50 p-4 rounded text-xs font-mono text-gray-300 break-all mb-4 max-w-[250px]">
              https://example.com/files/v1/apps/installer.apk
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-white transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            <div className="mt-4 bg-orange-600 p-4 rounded text-center">
              <div className="text-2xl font-black text-white">48291</div>
              <div className="text-[10px] text-orange-200 uppercase font-bold tracking-widest mt-1">Short Code</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>
    </div>
  );
};

export default InfoSection;
