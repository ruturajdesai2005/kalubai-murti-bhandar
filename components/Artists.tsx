import React from 'react';
import { ARTISTS } from '../constants';
import { Phone, MessageSquare } from 'lucide-react';

export const Artists: React.FC = () => {
  return (
    <section id="artists" className="py-24 bg-white dark:bg-[#121212] relative transition-colors duration-500">
      <div className="absolute left-0 top-0 w-full h-1/2 bg-maroon/5 dark:bg-gold/5 -z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-cinzel font-bold text-saffron tracking-[0.3em] uppercase mb-4">The Visionaries</h2>
          <h3 className="text-5xl font-playfair font-bold text-maroon dark:text-gold">Master Sculptors</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-400 font-mukta text-lg">देवत्वाला आकार देणारे हात</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {ARTISTS.map((artist, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#2a2a2a] p-10 rounded-[3rem] shadow-xl border border-maroon/5 dark:border-white/5 flex flex-col md:flex-row gap-10 hover:shadow-2xl transition-all duration-500 group"
            >
              {/* --- PHOTO SECTION (UPDATED) --- */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-lg border-2 border-maroon/10 dark:border-gold/20 group-hover:border-saffron/40 transition-all relative">
                  {/* इथे आपण आयकॉन काढून इमेज टॅग लावला आहे */}
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* ------------------------------- */}
              
              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h4 className="text-2xl font-bold text-maroon dark:text-gold mb-1">{artist.name}</h4>
                  <p className="text-saffron font-bold text-xs tracking-[0.2em] uppercase">{artist.role}</p>
                  <p className="font-mukta text-lg text-maroon/60 dark:text-gold/60 font-medium mt-1">{artist.marathiName}</p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {artist.description}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
                  {artist.contact.map(num => (
                    <a 
                      key={num}
                      href={`tel:+91${num}`}
                      className="flex items-center space-x-2 px-5 py-2.5 bg-maroon dark:bg-gold text-white dark:text-dark rounded-2xl text-xs font-bold hover:bg-saffron dark:hover:bg-saffron dark:hover:text-white transition-all transform active:scale-95"
                    >
                      <Phone size={14} />
                      <span>{num}</span>
                    </a>
                  ))}
                  <a 
                    href={`https://wa.me/91${artist.contact[0]}`}
                    className="flex items-center space-x-2 px-5 py-2.5 bg-light dark:bg-[#1a1a1a] text-maroon dark:text-gold rounded-2xl text-xs font-bold hover:bg-saffron dark:hover:bg-saffron hover:text-white transition-all transform active:scale-95 border border-maroon/10 dark:border-gold/10"
                  >
                    <MessageSquare size={14} />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};