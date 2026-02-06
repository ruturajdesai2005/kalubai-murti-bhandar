import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Youtube, Instagram, Facebook, ArrowRight, Users } from 'lucide-react';

export const SocialHub: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-light dark:bg-[#121212] transition-colors duration-500 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header - Premium Animated */}
        <div className="text-center mb-8 space-y-3">
           <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-maroon dark:text-white transition-colors drop-shadow-sm">
             Join Our Community
           </h2>
           <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto rounded-full animate-pulse" />
           <p className="text-gray-600 dark:text-gray-400 font-mukta text-sm md:text-lg tracking-wide font-medium">
             हजारो कलाप्रेमींच्या परिवारात सामील व्हा
           </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4 md:space-y-8">
          
          {/* -------------------------------------------------- */}
          {/* 1. YOUTUBE CARD (PREMIUM & ANIMATED) */}
          {/* -------------------------------------------------- */}
          <a 
            href={SOCIAL_LINKS.youtube} 
            target="_blank"
            className="group block relative overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-gradient-to-r from-[#D92323] to-[#FF0000] shadow-xl md:shadow-2xl hover:shadow-[0_10px_40px_rgba(217,35,35,0.5)] transition-all duration-500 hover:-translate-y-1"
          >
            {/* Background Pattern & Glow Effects */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
            <div className="absolute -right-20 -top-20 w-64 h-64 md:w-96 md:h-96 bg-white/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10 p-5 md:p-12 flex flex-row items-center justify-between gap-4 md:gap-8">
                
                {/* Left Content */}
                <div className="space-y-2 md:space-y-6 flex-1">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/30 shadow-sm">
                        <Users size={14} className="text-white md:w-5 md:h-5" />
                        <span className="text-white font-bold tracking-wider text-[10px] md:text-sm uppercase">Largest Community</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-6xl font-cinzel font-bold text-white leading-tight drop-shadow-md">
                        140K+ <span className="text-white/90 text-sm md:text-4xl font-mukta block md:inline">Subscribers</span>
                    </h3>
                    
                    <p className="text-white/90 font-mukta text-xs md:text-xl leading-relaxed max-w-2xl hidden md:block">
                        आमची कला आणि संस्कृती जगभरात पोहोचवणारे आमचे YouTube चॅनेल. 
                        मूर्ती घडवतानाचे व्हिडिओ आणि माहितीपूर्ण व्लॉग्स पाहण्यासाठी नक्की सबस्क्राईब करा.
                    </p>
                    {/* Mobile Only Short Text */}
                    <p className="text-white/90 font-mukta text-xs leading-tight md:hidden">
                       मूर्ती कलेचे व्हिडिओ पाहण्यासाठी सबस्क्राईब करा.
                    </p>
                </div>

                {/* Right Action Button (Animated Icon) */}
                <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/30">
                        <Youtube className="text-[#FF0000] ml-1 w-6 h-6 md:w-10 md:h-10 fill-current" />
                    </div>
                    <div className="hidden md:inline-flex items-center text-white font-bold uppercase tracking-widest text-sm bg-black/20 px-6 py-2 rounded-full border border-white/20 group-hover:bg-white group-hover:text-[#FF0000] transition-colors">
                        Subscribe Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
          </a>

          {/* -------------------------------------------------- */}
          {/* 2. INSTAGRAM & FACEBOOK (SIDE-BY-SIDE MOBILE GRID) */}
          {/* -------------------------------------------------- */}
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            
            {/* INSTAGRAM CARD */}
            <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank"
                className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/5 border border-maroon/10 dark:border-white/10 p-4 md:p-8 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl dark:shadow-none"
            >
                {/* Insta Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-2 md:space-y-4 group-hover:text-white transition-colors">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-[#dc2743] group-hover:bg-none transition-all duration-500 group-hover:scale-110">
                        <Instagram className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                    <h4 className="text-sm md:text-2xl font-cinzel font-bold text-maroon dark:text-white group-hover:text-white">Instagram</h4>
                    <p className="hidden md:block text-gray-600 dark:text-gray-400 font-mukta text-sm group-hover:text-white/90">
                        रोजचे नवीन फोटो आणि रील्स पाहण्यासाठी फॉलो करा.
                    </p>
                    <span className="text-[10px] md:text-sm text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-white group-hover:gap-2 transition-all">
                        View Photos <ArrowRight size={12} className="md:w-4 md:h-4" />
                    </span>
                </div>
            </a>

            {/* FACEBOOK CARD */}
            <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank"
                className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-white dark:bg-white/5 border border-maroon/10 dark:border-white/10 p-4 md:p-8 hover:border-blue-600/50 transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl dark:shadow-none"
            >
                 {/* Facebook Blue Background on Hover */}
                 <div className="absolute inset-0 bg-[#1877F2] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-2 md:space-y-4 group-hover:text-white transition-colors">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-[#1877F2] transition-all duration-500 group-hover:scale-110">
                        <Facebook className="w-5 h-5 md:w-8 md:h-8" fill="white" />
                    </div>
                    <h4 className="text-sm md:text-2xl font-cinzel font-bold text-maroon dark:text-white group-hover:text-white">Facebook</h4>
                    <p className="hidden md:block text-gray-600 dark:text-gray-400 font-mukta text-sm group-hover:text-white/90">
                        आमच्या अधिकृत फेसबुक पेजला भेट द्या.
                    </p>
                    <span className="text-[10px] md:text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-white group-hover:gap-2 transition-all">
                        Connect Now <ArrowRight size={12} className="md:w-4 md:h-4" />
                    </span>
                </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};