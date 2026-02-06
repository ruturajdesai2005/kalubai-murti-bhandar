import React from 'react';
import { Award } from 'lucide-react';

export const MediaHighlight: React.FC = () => {
  return (
    <section id="media" className="py-24 bg-white dark:bg-[#121212] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 bg-light dark:bg-[#1a1a1a] rounded-[3rem] p-8 md:p-12 shadow-xl border border-maroon/5 dark:border-white/5 relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            {/* -------------------------------------------------- */}
            {/* LEFT SIDE: VIDEO PLAYER (येथे बदल केला आहे) */}
            {/* -------------------------------------------------- */}
            <div className="lg:w-1/2 w-full group relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#2a2a2a] bg-black">
                
                {/* 👇 Video Tag with Controls */}
              <video 
                controls        // 👈 यामुळे Play, Pause, Unmute, Seek ही बटणे येतील
                autoPlay         // 👈 यामुळे व्हिडिओ पेज उघडल्याबरोबर आपोआप सुरू होईल
                muted           // 👈 हे महत्त्वाचे! ऑटो-प्ले होण्यासाठी सुरुवातीला आवाज बंद (Mute) ठेवावा लागतो
                playsInline     // 👈 मोबाईलवर फुल-स्क्रीन न होता तिथेच प्ले होण्यासाठी
                loop            // 👈 (ऑप्शनल) व्हिडिओ संपल्यावर पुन्हा पहिल्यापासून सुरू व्हावा का? नको असेल तर ही ओळ काढा.
                className="w-full h-full object-contain"
                poster="/heritage/sc5_maharaj.jpeg"
                >
                <source src="/interview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> 

                {/* News Badge (व्हिडिओच्या वर कोपऱ्यात) */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center space-x-2 pointer-events-none">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span>Maharashtra Express News</span>
                </div>

              </div>

              {/* Stats Badge (खाली उजव्या कोपऱ्यात) */}
              <div className="absolute -bottom-9 -right-6 bg-white dark:bg-[#2a2a2a] p-4 rounded-2xl shadow-xl border border-maroon/5 dark:border-white/5 flex items-center space-x-3 z-10">
                 <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <Award className="text-gold" size={20} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-maroon dark:text-gold uppercase tracking-wider">Popular</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 font-mukta">लोकप्रिय मुलाखत</p>
                 </div>
              </div>
            </div>

            {/* -------------------------------------------------- */}
            {/* RIGHT SIDE: CONTENT (जसाच्या तसा ठेवला आहे) */}
            {/* -------------------------------------------------- */}
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm font-cinzel font-bold text-saffron tracking-[0.2em] uppercase">
                  प्रसारमाध्यमांची दखल (Media Spotlight)
                </h2>
                <h3 className="text-4xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold leading-tight">
                  Interview on Maharashtra Express News
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400 font-mukta leading-relaxed">
                  शिल्पकलेचा वारसा आणि परंपरेबद्दल मूर्तिकार महेंद्र देसाई यांची विशेष मुलाखत. 
                  कलेचा प्रवास आणि भाविकांची श्रद्धा यावर टाकलेला हा एक विशेष प्रकाशझोत.
                </p>
                <p className="text-base text-gray-500 dark:text-gray-500 font-light italic">
                  "Watch the exclusive interview of Murtikar Mahendra Desai, discussing the art of sculpture and tradition. Viewed by thousands of art lovers across Maharashtra!"
                </p>
              </div>

              {/* इथे खाली "Watch Full Interview" चे जुने बटण काढून टाकले आहे, 
                  कारण आता व्हिडिओ तिथेच प्ले होणार आहे. */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};