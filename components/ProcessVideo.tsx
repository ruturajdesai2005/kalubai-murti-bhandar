
import React from 'react';
import { Play } from 'lucide-react';

export const ProcessVideo: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-cinzel font-bold text-saffron tracking-[0.3em] uppercase mb-4">Behind the Art</h2>
          <h3 className="text-5xl font-playfair font-bold text-maroon mb-4">कलेचा जिवंत अनुभव</h3>
          <p className="text-gray-500 font-mukta text-xl uppercase tracking-widest font-bold">Watch Our Process</p>
        </div>

        <div className="max-w-5xl mx-auto relative group">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gold/10 rounded-[3rem] blur-2xl group-hover:bg-gold/20 transition-all duration-700" />
          
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-light bg-dark">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/j_S6HInwE38" 
              title="Kalubai Murti Bhandar Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Label below video */}
          <div className="mt-8 flex items-center justify-center space-x-3 text-maroon font-bold text-lg">
            <Play size={20} className="fill-maroon" />
            <span className="font-mukta">मूर्ती साकारण्याची आमची अनोखी कला पहा</span>
          </div>
        </div>
      </div>
    </section>
  );
};
