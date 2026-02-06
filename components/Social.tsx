
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Youtube, Instagram, Play, ArrowUpRight } from 'lucide-react';

export const Social: React.FC = () => {
  return (
    <section id="social" className="py-24 bg-maroon text-white overflow-hidden relative">
      {/* Decorative texture or glow */}
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-saffron/20 rounded-full blur-[100px]" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-sm font-cinzel font-bold text-gold tracking-widest uppercase mb-4">Join Our Community</h2>
        <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-16">
          Follow Our Process
        </h3>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* YouTube Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl group">
            <div className="w-20 h-20 bg-[#FF0000] rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-6 transition-transform">
              <Youtube size={40} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-2">YouTube Official</h4>
            <p className="text-white/70 mb-8">Murtikar Mahendra Desai Official - Watch the live making process and shorts.</p>
            <a 
              href={SOCIAL_LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-maroon rounded-full font-bold hover:bg-gold hover:text-white transition-all"
            >
              <span>Subscribe Now</span>
              <Play size={16} fill="currentColor" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl group">
            <div className="w-20 h-20 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-2xl flex items-center justify-center mx-auto mb-8 transform group-hover:-rotate-6 transition-transform">
              <Instagram size={40} className="text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Instagram Feed</h4>
            <p className="text-white/70 mb-8">@kalubai_murti_bhandar - Daily updates, photos, and festival specials.</p>
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-maroon rounded-full font-bold hover:bg-gold hover:text-white transition-all"
            >
              <span>Follow Us</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
