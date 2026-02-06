import React from 'react';
import { BRAND, SOCIAL_LINKS } from '../constants';
import { MapPin, Phone, Mail, Youtube, Instagram, Globe, Facebook, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Section */}
          <div className="space-y-8">
            <h4 className="text-2xl font-cinzel font-bold tracking-wider">
              <span> KALUBAI MURTI BHANDAR</span>
            </h4>
            <p className="text-gray-400 text-sm leading-loose font-light">
              Crafting spiritual masterpieces with traditional wisdom and modern artistic precision. 
              Join us in our journey of faith and artistry.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all transform hover:-translate-y-1">
                <Youtube size={22} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] to-[#bc1888] hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={22} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={22} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                <Globe size={22} />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-8">
            <h5 className="text-lg font-bold text-white uppercase tracking-widest border-l-4 border-saffron pl-4">Navigation</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#home" className="hover:text-saffron transition-colors flex items-center"><span className="w-2 h-[1px] bg-saffron mr-3"></span>Home</a></li>
              <li><a href="#about" className="hover:text-saffron transition-colors flex items-center"><span className="w-2 h-[1px] bg-saffron mr-3"></span>Our Story</a></li>
              <li><a href="#collection" className="hover:text-saffron transition-colors flex items-center"><span className="w-2 h-[1px] bg-saffron mr-3"></span>Collections</a></li>
              <li><a href="#artists" className="hover:text-saffron transition-colors flex items-center"><span className="w-2 h-[1px] bg-saffron mr-3"></span>The Artists</a></li>
            </ul>
          </div>

          {/* Visit Section */}
          <div className="space-y-8 lg:col-span-2">
            <h5 className="text-lg font-bold text-white uppercase tracking-widest border-l-4 border-saffron pl-4">Visit Our Workshop</h5>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 text-gray-400">
                  <MapPin size={22} className="text-saffron shrink-0" />
                  <div className="text-sm">
                    <p className="text-white font-bold mb-1">Kale, Karad</p>
                    <p>{BRAND.location}</p>
                    <p className="font-mukta text-gold mt-2 font-bold">{BRAND.marathiLocation}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Phone size={22} className="text-saffron shrink-0" />
                  <p className="text-sm font-bold">+91 {BRAND.phone1} / {BRAND.phone2}</p>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Mail size={22} className="text-saffron shrink-0" />
                  <a href={`mailto:${BRAND.email}`} className="text-sm font-bold hover:text-white transition-colors">
                    {BRAND.email}
                  </a>
                </div>
              </div>
              
              {/* Map Section */}
              <div className="rounded-3xl overflow-hidden h-40 shadow-2xl border border-white/5 group relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15245.924151147701!2d74.154438!3d17.195438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc19dd22ab2cd75%3A0x560713fa86b05b35!2sKalubai%20Murti%20Bhandar!5e0!3m2!1sen!2sin!4v1770298610286!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-12 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2026 Kalubai Murti Bhandar. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-2 font-mukta text-gold text-base font-bold tracking-[0.2em]">
            <span>।।</span>
            <span>शुभं भवतु</span>
            <span>।।</span>
          </div>

          <p className="flex items-center text-gray-500">
            Designed & Developed with <Heart size={14} className="mx-2 text-saffron fill-saffron animate-pulse" /> by 
            <span className="text-gold font-bold ml-1 hover:text-white transition-all cursor-pointer">
              Ruturaj Mahendra Desai
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};