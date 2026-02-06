import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // मोबाईल मेनू ओपन असताना मागची स्क्रीन स्क्रोल होऊ नये म्हणून
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Collection', href: '#collection' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled ? 'bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex flex-col group">
            <span className={`text-xl md:text-2xl font-cinzel font-bold leading-none transition-colors ${isScrolled ? 'text-maroon dark:text-gold' : 'text-white'}`}>
              KALUBAI <span className="text-saffron">MURTI</span> BHANDAR
            </span>
            <span className={`text-[10px] font-bold tracking-[0.3em] mt-1 transition-colors ${isScrolled ? 'text-maroon/70 dark:text-gold/70' : 'text-white/70'}`}>
                  KALE • KARAD • SATARA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className={`font-semibold hover:text-saffron transition-all relative group text-sm uppercase tracking-wider ${
                    isScrolled ? 'text-dark dark:text-gray-200' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-saffron transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>
            
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${
                isScrolled ? 'text-maroon dark:text-gold' : 'text-white'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Toggle Group */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? 'text-maroon dark:text-gold' : 'text-white'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'hover:bg-gray-100 dark:hover:bg-gray-800' : 'hover:bg-white/10'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className={isScrolled ? 'text-maroon dark:text-gold' : 'text-white'} />
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------ */}
      {/* MOBILE SIDE DRAWER MENU (UPDATED) */}
      {/* ------------------------------------------------------ */}
      
      {/* 1. Black Overlay (Background) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[105] backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* 2. Side Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white dark:bg-[#1a1a1a] z-[110] shadow-2xl transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
             <span className="font-cinzel font-bold text-lg text-maroon dark:text-gold">
               Menu
             </span>
             <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-maroon dark:text-gold hover:rotate-90 transition-transform duration-300"
             >
               <X size={24} />
             </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-mukta font-bold text-gray-800 dark:text-gray-200 hover:text-saffron dark:hover:text-saffron hover:translate-x-2 transition-all duration-300 flex items-center justify-between group border-b border-gray-50 dark:border-white/5 pb-2"
              >
                {link.label}
                <span className="opacity-0 group-hover:opacity-100 text-saffron text-sm">→</span>
              </a>
            ))}
          </nav>

          {/* Menu Footer */}
          <div className="mt-auto pt-6 text-center">
             <p className="text-maroon/50 dark:text-gold/50 font-bold uppercase tracking-widest text-[10px]">
               Kale • Karad • Satara
             </p>
          </div>

        </div>
      </div>
    </>
  );
};