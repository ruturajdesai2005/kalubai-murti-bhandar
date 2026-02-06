import React from 'react';

// डेटा जसा होता तसाच
const lineageRow1 = [
  {
    title: "Founder (Great Grandfather)",
    marathiTitle: "संस्थापक (पणजोबा)",
    name: "Shri. Vitthu Desai",
    era: "The Beginning",
    img: "" 
  },
  {
    title: "Successor (Grandfather)",
    marathiTitle: "वारसदार (आजोबा)",
    name: "Shri. Anna Vitthu Desai",
    era: "Expanding Roots",
    img:"" 
  },
  {
    title: "Director (Father)",
    marathiTitle: "संचालक (वडील)",
    name: "Shri. Balkrishna Anna Desai",
    era: "The Foundation",
    img: "/heritage/balkrishanadesai.jpeg" 
  }
];

const lineageRow2 = [
  {
    title: "Director & Sculptor",
    marathiTitle: "मूर्तिकार व संचालक",
    name: "Shri. Mahendra Balkrishana Desai",
    era: "Current Generation",
    img: "/heritage/mahendradesai.png"
  },
  {
    title: "Director & Management",
    marathiTitle: "सह-संचालक व व्यवस्थापन",
    name: "Shri. Anil Balkrishana Desai",
    era: "Current Generation",
    img: "/heritage/anildesai.jpg"
  }
];

export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="py-24 bg-[#f4f1ea] dark:bg-[#1a1a1a] overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-2 md:px-6">
        
        {/* हेडिंग - ओरिजनल */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[10px] md:text-sm font-cinzel font-bold text-saffron tracking-[0.3em] uppercase mb-4">The Lineage</h2>
          <h3 className="text-3xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-4">Our Heritage</h3>
          <p className="text-gray-600 dark:text-gray-400 font-mukta text-lg md:text-xl font-bold">चौथी पिढीची अखंड परंपरा</p>
          <div className="w-24 h-1 bg-saffron mx-auto mt-6"></div>
        </div>

        {/* ----------------------------------------------- */}
        {/* ROW 1: 3 ANCESTORS (वरचे ३ - एका लाईनमध्ये)    */}
        {/* ----------------------------------------------- */}
        
        {/* max-w-6xl आणि mx-auto मुळे लॅपटॉपवर फोटो पसरणार नाहीत */}
        <div className="grid grid-cols-3 gap-2 md:gap-12 mb-12 max-w-6xl mx-auto">
          {lineageRow1.map((item, idx) => (
            <div key={idx} className="relative group flex flex-col items-center">
              
              {/* फोटो फ्रेम */}
              <div className="relative w-full aspect-[4/5] mb-2 md:mb-6 overflow-hidden rounded-lg md:rounded-2xl shadow-xl border-2 md:border-8 border-white dark:border-[#2a2a2a] group-hover:shadow-2xl transition-all duration-500">
                
                {/* फोटो (Sepia & Grayscale) */}
                {item.img ? (
                   <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover filter sepia contrast-125 grayscale-[50%] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : (
                   <div className="w-full h-full bg-[#dcdcdc] dark:bg-[#333] flex items-center justify-center">
                      <span className="text-[8px] md:text-sm text-gray-400 font-bold">No Photo</span>
                   </div>
                )}
               
                <div className="absolute inset-0 bg-maroon/10 dark:bg-black/20 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                
                {/* कॉर्नर बॉर्डर (Decorations) */}
                <div className="absolute top-1 left-1 md:top-2 md:left-2 w-3 h-3 md:w-8 md:h-8 border-t-2 border-l-2 border-gold opacity-50"></div>
                <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-3 h-3 md:w-8 md:h-8 border-b-2 border-r-2 border-gold opacity-50"></div>
              </div>

              {/* टेक्स्ट आणि Era बॅज */}
              <div className="text-center space-y-1 md:space-y-2 w-full px-1">
                <p className="text-[7px] md:text-xs font-cinzel font-bold text-saffron tracking-widest uppercase truncate">{item.title}</p>
                
                {/* नावाची साईज कंट्रोल केली आहे */}
                <h4 className="text-[9px] md:text-xl font-playfair font-bold text-maroon dark:text-gold leading-tight line-clamp-2 min-h-[2em] md:min-h-0">
                    {item.name}
                </h4>
                
                <p className="text-[8px] md:text-base font-mukta text-maroon/60 dark:text-gold/60 font-bold truncate">
                    {item.marathiTitle}
                </p>
                
                {/* बॅज */}
                <div className="pt-1 md:pt-2">
                  <span className="text-[6px] md:text-[10px] bg-maroon/5 dark:bg-white/5 text-maroon/60 dark:text-gold/60 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold uppercase tracking-widest whitespace-nowrap">
                    {item.era}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------------------------------------------- */}
        {/* ROW 2: 2 SUCCESSORS (खालचे २ - सेंटर आणि नॉर्मल साईज) */}
        {/* ---------------------------------------------------- */}
        
        {/* max-w-4xl मुळे लॅपटॉपवर हे दोन फोटो बरोबर मध्यभागी आणि मापाचे दिसतील */}
        <div className="flex justify-center gap-3 md:gap-16 max-w-4xl mx-auto">
          {lineageRow2.map((item, idx) => (
            // w-[45%]: मोबाईलवर अर्धे | md:w-[300px]: लॅपटॉपवर फिक्स साईज (मोठे होणार नाही)
            <div key={idx} className="relative group w-[45%] md:w-[300px] flex flex-col items-center">
              
              {/* फोटो फ्रेम */}
              <div className="relative w-full aspect-[4/5] mb-2 md:mb-6 overflow-hidden rounded-lg md:rounded-2xl shadow-xl border-2 md:border-8 border-white dark:border-[#2a2a2a] group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                
                {/* कॉर्नर बॉर्डर */}
                <div className="absolute top-1 left-1 md:top-2 md:left-2 w-3 h-3 md:w-8 md:h-8 border-t-2 border-l-2 border-gold opacity-50"></div>
                <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 w-3 h-3 md:w-8 md:h-8 border-b-2 border-r-2 border-gold opacity-50"></div>
              </div>

              {/* टेक्स्ट आणि Era बॅज */}
              <div className="text-center space-y-1 md:space-y-2 w-full px-1">
                <p className="text-[7px] md:text-xs font-cinzel font-bold text-saffron tracking-widest uppercase truncate">{item.title}</p>
                <h4 className="text-[9px] md:text-xl font-playfair font-bold text-maroon dark:text-gold leading-tight line-clamp-2 min-h-[2em] md:min-h-0">
                    {item.name}
                </h4>
                <p className="text-[8px] md:text-base font-mukta text-maroon/60 dark:text-gold/60 font-bold truncate">
                    {item.marathiTitle}
                </p>
                
                {/* बॅज */}
                <div className="pt-1 md:pt-2">
                  <span className="text-[6px] md:text-[10px] bg-maroon/5 dark:bg-white/5 text-maroon/60 dark:text-gold/60 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold uppercase tracking-widest whitespace-nowrap">
                    {item.era}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* खालचा कोट (Quote) */}
        <div className="mt-12 md:mt-20 p-6 md:p-10 bg-white/50 dark:bg-[#2a2a2a]/50 border-2 border-dashed border-maroon/10 dark:border-gold/10 rounded-3xl text-center max-w-4xl mx-auto">
          <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-light italic leading-relaxed font-mukta">
            "आमचा वारसा केवळ मूर्ती घडवणे नाही, तर श्रद्धेला मूर्तिमंत रूप देणे हा आहे. चार पिढ्यांचा हा अनुभव आम्ही प्रत्येक कामात समर्पित करतो."
          </p>
        </div>

      </div>
    </section>
  );
};