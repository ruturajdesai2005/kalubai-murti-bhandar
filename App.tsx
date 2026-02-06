import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Heritage } from './components/Heritage';
import { VintageLegacy } from './components/VintageLegacy';
import { MediaHighlight } from './components/MediaHighlight';
import { Collection } from './components/Collection';
import { SocialHub } from './components/SocialHub'; 
import { Artists } from './components/Artists';
import { Footer } from './components/Footer';
import { WhatsAppBtn } from './components/WhatsAppBtn';
import { Preloader } from './components/Preloader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-light dark:bg-[#121212] text-dark dark:text-gray-200 font-mukta selection:bg-saffron selection:text-white antialiased transition-colors duration-500">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {/* १. होम पेज */}
        <Hero />
        
        {/* २. आमच्याबद्दल */}
        <About />
        
        {/* ३. परंपरा/वारसा */}
        <Heritage />
        
        {/* ४. तुमची मागणी: हेरिटेज नंतर लगेच कलेक्शन */}
        <Collection />
        
        {/* ५. जुने अल्बम (फोटो स्क्रोलिंग लाईन - Right to Left) */}
        <VintageLegacy />
        
        {/* ६. इंटरव्यू (Media Highlight) */}
        <MediaHighlight />
        
        {/* ७. सोशल हब (YouTube 140K+, Insta, FB) */}
        <SocialHub />
        
        {/* ८. कलाकार (Master Sculptors) */}
        <Artists />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
};

export default App;