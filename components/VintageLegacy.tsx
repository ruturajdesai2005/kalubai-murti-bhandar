import React, { useEffect, useRef, useState } from 'react';
import { VINTAGE_PHOTOS } from '../constants';
import { Camera } from 'lucide-react';

export const VintageLegacy: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // States
  const [isPaused, setIsPaused] = useState(false); 
  const [isDragging, setIsDragging] = useState(false); 
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // फोटोची यादी (Infinite Loop)
  const scrollPhotos = [...VINTAGE_PHOTOS, ...VINTAGE_PHOTOS, ...VINTAGE_PHOTOS];

  // --- ऑटो स्क्रोल लॉजिक ---
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = 0.5; 

    const step = () => {
      if (!isDragging && !isPaused && scrollContainer) {
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3) * 2) {
           scrollContainer.scrollLeft = 0; 
        } else {
           scrollContainer.scrollLeft += speed;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, isDragging]);

  // --- माऊसने ओढण्याचे लॉजिक ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeftState(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="gallery" className="py-24 bg-[#fdfaf3] dark:bg-[#0f0f0f] relative overflow-hidden transition-colors duration-1000">
      
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-[1px] w-12 bg-maroon/20 dark:bg-gold/20" />
            <Camera className="text-maroon/40 dark:text-gold/40" size={24} />
            <div className="h-[1px] w-12 bg-maroon/20 dark:bg-gold/20" />
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-maroon dark:text-gold mb-4">
            जुने अल्बम: एक अनमोल ठेवा
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-mukta leading-relaxed mb-4">
            आमच्या पूर्वजांच्या कलेचा आणि आठवणींचा साक्षीदार
          </p>
          <p className="text-xs font-cinzel tracking-[0.4em] uppercase text-maroon/40 dark:text-gold/40 font-bold">
            A Timeless Journey: Generations of Art
          </p>
        </div>
      </div>

      {/* --- SCROLL CONTAINER --- */}
      <div className="relative w-full border-y border-maroon/5 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-sm py-10">
        
        <div 
          ref={scrollRef}
          className="flex items-center overflow-x-auto space-x-8 px-6 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {scrollPhotos.map((photo, idx) => {
            const isPortrait = idx % 2 === 0;
            
            return (
              <div key={idx} className="flex-shrink-0">
                <div 
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  // 👇 बदल: duration-1000 (1 सेकंद) आणि ease-out
                  // यामुळे फोटो 'झटक्यात' फिरणार नाही, तर एकदम 'रॉयल' हळू फिरल.
                  className={`bg-white dark:bg-[#1a1a1a] p-3 shadow-xl border border-black/5 
                    transform transition-all duration-1000 ease-out hover:scale-105 hover:-rotate-1 group select-none
                    ${isPortrait ? 'w-64' : 'w-[400px]'}
                  `}
                >
                  <div className={`overflow-hidden relative ${isPortrait ? 'aspect-[3/4]' : 'aspect-[16/9]'}`}>
                    {/* इमेजसाठी सुद्धा duration-1000 लावला आहे */}
                    <img 
                      src={photo.image} 
                      alt={photo.caption} 
                      className="w-full h-full object-cover filter sepia-[0.3] grayscale-[0.1] contrast-110 group-hover:sepia-0 group-hover:grayscale-0 transition-all duration-1000 ease-out pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-maroon/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-800" />
                    
                    {/* Pin Effect */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-md border border-gray-500/30 opacity-80" />
                  </div>
                  
                  <div className="pt-4 text-center">
                    <p className="font-playfair font-bold text-maroon/80 dark:text-gold/80 italic text-sm md:text-base">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 flex flex-col items-center">
         <div className="px-8 py-3 border border-maroon/10 dark:border-gold/10 rounded-full flex items-center space-x-4 text-maroon/50 dark:text-gold/50 bg-white/50 dark:bg-black/50">
             <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-ping" />
             <span className="font-cinzel text-[9px] font-bold tracking-[0.2em] uppercase">Historical Archive • Est. 1970</span>
         </div>
      </div>
    </section>
  );
};