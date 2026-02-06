
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppBtn: React.FC = () => {
  return (
    <a 
      href="https://wa.me/917558671061?text=Namaskar,%20I%20am%20interested%20in%20your%20idols." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center space-x-2 overflow-hidden"
    >
      <div className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 whitespace-nowrap">
        <span className="pr-4 font-bold text-sm uppercase tracking-widest">Connect Now</span>
      </div>
      <MessageCircle size={28} />
    </a>
  );
};
