
import React from 'react';
import { Youtube, Users, ShieldCheck, ArrowRight, Landmark } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const YouTubeBanner: React.FC = () => {
  return (
    <section className="py-16 bg-maroon relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-saffron/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-2/3 text-white space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full text-gold text-xs font-bold tracking-widest uppercase">
              <Landmark size={16} />
              <span className="font-mukta">धर्म आणि संस्कृतीचे जतन</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-white leading-tight">
                140+ <span className="text-gold">Subscribers</span>
              </h3>
              <p className="text-lg md:text-xl font-mukta font-medium text-white/90 max-w-2xl leading-relaxed">
                छत्रपती शिवाजी महाराजांच्या आदर्शांवर प्रेरित होऊन, आम्ही मराठी धर्म आणि संस्कृतीचे जतन व संवर्धन करतो. नवीनतम मूर्ती निर्माण प्रक्रियेचे व्हिडिओसाठी सबस्क्राईब करा. मूर्तींसह मराठी संस्कृती, छत्रपती शिवाजी महाराज, आणि धार्मिक स्थळांचीही माहिती येथे पाहा. धन्यवाद तुमचा वेळ काढून pageला भेट दिल्या बद्दल🙏
              </p>
            </div>

            <div className="flex items-start space-x-4 pt-4 border-t border-white/10">
              <ShieldCheck className="text-saffron shrink-0 mt-1" size={24} />
              <p className="text-sm md:text-base text-white/70 italic font-mukta max-w-xl">
                "We don't just sell idols; we show you how they are made. Follow us for transparent updates on stone selection, carving techniques, and final finishing."
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 w-full flex flex-col items-center">
             <a 
              href={SOCIAL_LINKS.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-full px-10 py-6 bg-[#FF0000] text-white rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Youtube size={32} className="mr-4" />
              <span>Subscribe to Channel</span>
              <ArrowRight size={20} className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </a>
            <div className="mt-6 flex items-center space-x-2 text-gold/60">
                <Users size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Growing Community of Devotees</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
