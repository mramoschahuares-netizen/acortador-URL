
import React, { useState } from 'react';
import { ShortenedURL } from '../types';

interface Props {
  result: ShortenedURL;
}

const URLResult: React.FC<Props> = ({ result }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const copyToClipboard = async (text: string, setCopied: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100 max-w-3xl mx-auto">
        <div className="bg-orange-50 px-6 py-4 flex justify-between items-center border-b border-orange-100">
          <span className="text-orange-800 font-semibold flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Ready to use!
          </span>
          <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">New Shortcut</span>
        </div>

        <div className="p-6">
          <h3 className="text-gray-900 font-bold text-xl mb-6 truncate">{result.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Numeric Code Block */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 group">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Downloader Code</p>
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-orange-600 tracking-tight">{result.shortCode}</span>
                <button 
                  onClick={() => copyToClipboard(result.shortCode, setCopiedCode)}
                  className={`p-2 rounded-lg transition-all ${copiedCode ? 'bg-green-100 text-green-600' : 'bg-white text-gray-500 hover:text-orange-600 shadow-sm'}`}
                >
                  {copiedCode ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  )}
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-500">Enter this code in the Downloader app URL field.</p>
            </div>

            {/* Short Link Block */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Short Link</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-900 truncate mr-2">shorty.link/{result.shortCode}</span>
                <button 
                  onClick={() => copyToClipboard(result.shortUrl, setCopiedLink)}
                  className={`p-2 rounded-lg transition-all ${copiedLink ? 'bg-green-100 text-green-600' : 'bg-white text-gray-500 hover:text-orange-600 shadow-sm'}`}
                >
                  {copiedLink ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  )}
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500">Share this link anywhere to redirect users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLResult;
