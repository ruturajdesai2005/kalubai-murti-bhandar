import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-12 md:py-24 bg-light dark:bg-[#1a1a1a] transition-colors duration-500">
      <div className="container mx-auto px-2 md:px-6 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[10px] md:text-sm font-cinzel font-bold text-saffron tracking-[0.3em] uppercase mb-2 md:mb-4">Masterpieces</h2>
          <h3 className="text-3xl md:text-5xl font-playfair font-bold text-maroon dark:text-gold mb-4 md:mb-6">Our Divine Collection</h3>
          <p className="text-gray-500 dark:text-gray-400 font-mukta text-sm md:text-lg uppercase tracking-widest font-bold">आमची उत्कृष्ट उत्पादने</p>
        </div>
        
        {/* --- GRID CHANGE HERE --- */}
        {/* grid-cols-2 (Mobile) -> grid-cols-2 (Tablet) -> grid-cols-3 (Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          
          {PRODUCTS.map((product, idx) => (
            <div 
              key={idx} 
              // मोबाईलवर border-radius कमी (rounded-2xl) आणि लॅपटॉपवर जास्त (rounded-[2.5rem])
              className="group bg-white dark:bg-[#2a2a2a] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-transparent dark:border-white/5"
            >
              
              {/* Image Section - उंची मोबाईलवर कमी (h-48) आणि लॅपटॉपवर (h-80) */}
              <div className="h-48 md:h-80 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* --- HOVER EFFECT (Marathi Title) --- */}
                {/* हे मोबाईलवर पण दिसेल आणि लॅपटॉपवर पण */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 dark:from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4 md:pb-12">
                   <span className="text-white font-mukta text-lg md:text-3xl font-bold tracking-wider text-center px-2">
                     {product.marathiTitle}
                   </span>
                </div>

                {/* ICON (Top Right) */}
                <div className="absolute top-2 right-2 md:top-6 md:right-6 bg-white/90 dark:bg-black/60 backdrop-blur-md p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl">
                  {React.cloneElement(product.icon as React.ReactElement<any>, { className: 'w-4 h-4 md:w-8 md:h-8 text-maroon dark:text-gold' })}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 md:p-10 flex flex-col flex-grow items-center text-center">
                
                {/* Title */}
                <h4 className="text-sm md:text-2xl font-playfair font-bold text-maroon dark:text-gold mb-2 md:mb-3 leading-tight">
                  {product.title}
                </h4>

                {/* Description (आता हे लपवले नाही, पूर्ण दिसेल) */}
                <p className="text-gray-500 dark:text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8 flex-grow line-clamp-4 md:line-clamp-none">
                  {product.description}
                </p>

                {/* Button */}
                <a 
                  href={`https://wa.me/917558671061?text=Inquiry about ${product.title}`}
                  className="inline-flex items-center space-x-1 md:space-x-2 text-maroon dark:text-gold font-bold text-[10px] md:text-sm uppercase tracking-widest hover:text-saffron transition-colors group/link bg-maroon/5 md:bg-transparent px-3 py-2 md:p-0 rounded-full md:rounded-none"
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={14} className="md:w-4 md:h-4 group-hover/link:translate-x-2 transition-transform" />
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};