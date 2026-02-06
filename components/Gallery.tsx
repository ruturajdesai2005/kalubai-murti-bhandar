
import React from 'react';

const galleryImages = [
  "https://images.unsplash.com/photo-1590732800685-30df29497e70?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1567591974574-e86263d28170?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1620393470010-fd06936357cc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1622321456515-73f11059f1ca?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?auto=format&fit=crop&q=80&w=600"
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-cinzel font-bold text-saffron tracking-[0.3em] uppercase mb-4">Visual Heritage</h2>
          <h3 className="text-5xl font-playfair font-bold text-maroon mb-4">आमचे कलाविष्कार</h3>
          <p className="text-gray-500 font-mukta text-lg">कुशल कारागिरीचा अजोड नमुना</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <div 
              key={idx} 
              className="group relative h-80 overflow-hidden rounded-[2rem] shadow-lg border-4 border-light transform transition-all duration-500 hover:shadow-2xl"
            >
              <img 
                src={src} 
                alt={`Sculpture ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
