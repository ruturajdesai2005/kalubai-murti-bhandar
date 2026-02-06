import React from 'react';
import { Award, ShieldCheck, History, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#121212] relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light/50 dark:bg-dark/20 -z-0 rounded-l-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* ----- डावी बाजू: व्हिडिओ सेक्शन ----- */}
          <div className="lg:w-1/2 group">
            <div className="relative">
              <div className="absolute -inset-4 bg-maroon/5 dark:bg-gold/5 rounded-[2rem] transform group-hover:rotate-2 transition-transform duration-500" />
              
              {/* 👇 इथे इमेज काढून व्हिडिओ टाकला आहे */}
              <div className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  {/* तुमच्या व्हिडिओचे नाव इथे तपासा */}
                  <source src="/intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* व्हिडिओवर थोडा काळसर पट्टा (Optional) */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -z-0" />
              
              {/* Heritage Badge */}
              <div className="absolute top-8 -left-8 p-6 bg-white dark:bg-[#2a2a2a] shadow-2xl rounded-2xl z-20 border-l-4 border-saffron float-animation">
                <p className="text-3xl font-bold text-maroon dark:text-gold">4 Generations</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">चौथी पिढीची अखंड परंपरा</p>
              </div>

              {/* Legacy Badge */}
              <div className="absolute bottom-8 right-8 p-6 bg-maroon dark:bg-[#1a1a1a] shadow-2xl rounded-2xl z-20 border-r-4 border-gold text-white">
                <div className="flex items-center space-x-2 mb-1">
                   <Star size={16} className="text-gold fill-gold" />
                   <p className="text-2xl font-bold">25+ Years</p>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold/80">समृद्ध कला वारसा</p>
              </div>
            </div>
          </div>
          
          {/* ----- उजवी बाजू: माहिती (जशीच्या तशी) ----- */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-cinzel font-bold text-saffron tracking-[0.3em] uppercase">The Legacy</h2>
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-maroon dark:text-gold leading-tight">
                Authentic Sculptures <br /> Since Generations
              </h3>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light font-mukta">
              Located in the heart of Kale, Karad, we take pride in breathing life into stones and clay. 
              Our workshop is more than a business; it's a sanctuary where faith meets skilled craftsmanship across four generations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-light dark:bg-[#1a1a1a] rounded-2xl hover:shadow-md transition-all">
                <div className="p-3 bg-white dark:bg-[#2a2a2a] rounded-xl shadow-sm">
                  <Award className="text-saffron" />
                </div>
                <div>
                  <h4 className="font-bold text-maroon dark:text-gold">Master Artistry</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">A.T.D. certified precision in every detail.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-light dark:bg-[#1a1a1a] rounded-2xl hover:shadow-md transition-all">
                <div className="p-3 bg-white dark:bg-[#2a2a2a] rounded-xl shadow-sm">
                  <ShieldCheck className="text-saffron" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-gray-200">Eco-Friendly</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Committed to sustainable clay traditions.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-maroon dark:bg-[#1a1a1a] text-white rounded-3xl relative overflow-hidden group">
                <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform">
                    <History size={160} />
                </div>
                <p className="text-2xl font-mukta leading-relaxed italic relative z-10">
                "आमच्याकडे कुशल कारागिरांनी घडवलेल्या काळ्या पाषाणातील सुबक, मूर्ती देव-देवतांच्या मुर्ती, स्मृती चिन्हे, पुतळे, समाधी, तुळशीवृंदावन, पींड, नंदी आणि कलात्मक संगमरवर मुर्ती मिळतील. ग्राहकांचे समाधान हेच आमचे ध्येय."
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};