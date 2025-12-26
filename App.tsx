
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import ShortenerForm from './components/ShortenerForm';
import URLResult from './components/URLResult';
import History from './components/History';
import InfoSection from './components/InfoSection';
import { ShortenedURL } from './types';
import { geminiService } from './services/gemini';

// Redirect Handler Component
const Redirector: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  useEffect(() => {
    if (code) {
      const history = JSON.parse(localStorage.getItem('short_history') || '[]');
      const found = history.find((u: ShortenedURL) => u.shortCode === code);
      if (found) {
        // Increment clicks
        const updated = history.map((u: ShortenedURL) => 
          u.shortCode === code ? { ...u, clicks: (u.clicks || 0) + 1 } : u
        );
        localStorage.setItem('short_history', JSON.stringify(updated));
        window.location.href = found.originalUrl;
      }
    }
  }, [code]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to your destination...</p>
      </div>
    </div>
  );
};

const MainApp: React.FC = () => {
  const [history, setHistory] = useState<ShortenedURL[]>([]);
  const [currentResult, setCurrentResult] = useState<ShortenedURL | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('short_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const handleShorten = useCallback(async (url: string) => {
    setLoading(true);
    try {
      // 1. Basic URL Cleanup
      let finalUrl = url.trim();
      if (!/^https?:\/\//i.test(finalUrl)) {
        finalUrl = 'https://' + finalUrl;
      }

      // 2. Analyze with Gemini
      const analysis = await geminiService.analyzeUrl(finalUrl);

      // 3. Generate unique numeric code
      let code = '';
      let isUnique = false;
      while (!isUnique) {
        code = Math.floor(10000 + Math.random() * 89999).toString();
        isUnique = !history.some(h => h.shortCode === code);
      }

      const baseUrl = window.location.origin + window.location.pathname + '#/';
      const newEntry: ShortenedURL = {
        id: crypto.randomUUID(),
        originalUrl: finalUrl,
        shortCode: code,
        shortUrl: `${baseUrl}${code}`,
        title: analysis.title,
        createdAt: Date.now(),
        clicks: 0
      };

      const newHistory = [newEntry, ...history].slice(0, 20);
      setHistory(newHistory);
      setCurrentResult(newEntry);
      localStorage.setItem('short_history', JSON.stringify(newHistory));
    } finally {
      setLoading(false);
    }
  }, [history]);

  const removeHistoryItem = (id: string) => {
    const newHistory = history.filter(h => h.id !== id);
    setHistory(newHistory);
    localStorage.setItem('short_history', JSON.stringify(newHistory));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:text-5xl tracking-tight">
            Shorten URLs for <span className="text-orange-600">Downloader</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The fastest way to load URLs into your Fire TV or Android TV device. 
            Get a simple numeric code or a short link instantly.
          </p>
        </div>

        <ShortenerForm onShorten={handleShorten} isLoading={loading} />

        {currentResult && <URLResult result={currentResult} />}

        <div className="mt-16">
          <History items={history} onDelete={removeHistoryItem} />
        </div>

        <InfoSection />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Shorty - A community tool for Downloader users.</p>
        <p className="mt-2">Not affiliated with AFTVnews.com or Amazon.</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/:code" element={<Redirector />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
