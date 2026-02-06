
import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

export const InstagramBanner: React.FC = () => {
  return (
    <section className="py-20 bg-light border-y border-maroon/5">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-mukta font-bold text-maroon leading-relaxed">
              आमच्या हजारो समाधानी ग्राहकांचे फोटोज आणि डेली अपडेट्स पाहण्यासाठी इन्स्टाग्रामला भेट द्या
            </h3>
            <p className="text-gray-500 text-lg uppercase tracking-widest font-bold font-cinzel">Stay Connected with Our Art</p>
          </div>

          <a 
            href="https://www.instagram.com/kalubai_murti_bhandar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-6 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-3xl font-bold text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Instagram size={32} className="mr-4 group-hover:rotate-12 transition-transform" />
            <span className="font-mukta">View More Photos on Instagram</span>
            <ArrowRight size={24} className="ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};
