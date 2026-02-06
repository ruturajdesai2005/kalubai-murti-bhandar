import React from 'react';
import { BRAND } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] ease-linear hover:scale-110"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0)), url("/collection/heroimage.png")` 
        }}
      />
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <p className="text-gold font-cinzel tracking-[0.4em] mb-6 opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
          ।। श्री गणेशाय नमः ।।
        </p>
        <h1 className="text-5xl md:text-9xl font-playfair font-bold mb-8 drop-shadow-2xl opacity-0 animate-[fadeUp_1s_ease-out_0.2s_forwards]">
          Divine <span className="text-saffron italic">Craftsmanship</span>
        </h1>
        <div className="mb-10 opacity-0 animate-[fadeUp_1s_ease-out_0.4s_forwards]">
            <p className="text-2xl md:text-3xl font-light mb-2 max-w-2xl mx-auto opacity-90 leading-relaxed font-mukta">
            {BRAND.marathiName} - काले
            </p>
            <p className="text-gold italic font-mukta text-lg tracking-wide uppercase">
            {BRAND.marathiTagline}
            </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[fadeUp_1s_ease-out_0.6s_forwards]">
          <a 
            href="#collection" 
            className="px-12 py-5 bg-saffron text-white rounded-full font-bold shadow-2xl hover:bg-maroon hover:shadow-saffron/20 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Explore Collection
          </a>
          <a 
            href="#contact" 
            className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-maroon transition-all transform hover:-translate-y-1"
          >
            Visit Workshop
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};