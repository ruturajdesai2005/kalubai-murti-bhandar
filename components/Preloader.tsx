
import React from 'react';

export const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-light flex flex-col items-center justify-center z-[9999]">
      <div className="text-8xl text-maroon animate-pulse mb-6 font-cinzel">ॐ</div>
      <div className="w-48 h-[2px] bg-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-saffron animate-[loading_2s_ease-in-out_infinite]" />
      </div>
      <p className="mt-8 font-cinzel tracking-[0.3em] text-xs font-bold text-maroon/60 uppercase">
        Loading Art & Divinity...
      </p>
      
      <style>{`
        @keyframes loading {
          0% { left: -100%; width: 100%; }
          100% { left: 100%; width: 100%; }
        }
      `}</style>
    </div>
  );
};
