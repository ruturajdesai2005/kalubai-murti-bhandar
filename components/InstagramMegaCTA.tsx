
import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const InstagramMegaCTA: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden border-y border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f09433]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#bc1888]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 mb-4 animate-bounce">
              <Instagram className="text-white" size={40} />
            </div>
            <h3 className="text-3xl md:text-5xl font-mukta font-bold text-white leading-tight">
              आणखी अप्रतिम मूर्ती पाहण्यासाठी आम्हाला इंस्टाग्रामवर फॉलो करा
            </h3>
            <p className="text-gold font-cinzel tracking-[0.3em] uppercase text-sm font-bold opacity-70">
              Follow us on Instagram to see more divine creations
            </p>
          </div>

          <a 
            href={SOCIAL_LINKS.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-7 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-[2rem] font-bold text-2xl shadow-[0_20px_50px_rgba(220,39,67,0.3)] hover:shadow-[0_30px_60px_rgba(220,39,67,0.5)] transition-all duration-500 hover:-translate-y-2 active:scale-95 animate-[pulse_3s_infinite]"
          >
            <Instagram size={32} className="mr-4 group-hover:rotate-12 transition-transform" />
            <span className="font-mukta">View More Photos on Instagram</span>
            <ArrowRight size={24} className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(220, 39, 67, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(220, 39, 67, 0); }
          100% { box-shadow: 0 0 0 0 rgba(220, 39, 67, 0); }
        }
      `}</style>
    </section>
  );
};
