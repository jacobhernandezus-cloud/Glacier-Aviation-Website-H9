import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vesper-black text-vesper-sandstone pt-24 pb-12 border-t border-vesper-granite/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-vesper-blue fill-none stroke-current" strokeWidth="4">
                        <path d="M20,20 L45,80 L70,20" />
                        <path d="M40,20 L90,20 L65,80" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-xl uppercase tracking-widest">Vesper</span>
                    <span className="text-vesper-blue text-[8px] font-bold uppercase tracking-[0.5em]">Aviation</span>
                </div>
             </div>
             <p className="text-vesper-granite text-sm font-light leading-relaxed">
               A bespoke aviation experience designed for those who expect the highest level of comfort and service.
             </p>
             <div className="flex gap-6">
                <a href="#" className="text-vesper-granite hover:text-vesper-blue transition-colors">
                    <Instagram size={18} />
                </a>
                <a href="#" className="text-vesper-granite hover:text-vesper-blue transition-colors">
                    <Linkedin size={18} />
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] mb-8 uppercase tracking-[0.4em] text-vesper-blue">The Experience</h4>
            <ul className="space-y-4 text-vesper-granite text-xs font-medium uppercase tracking-widest">
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">The Atelier</a></li>
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">The Fleet</a></li>
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">Our Philosophy</a></li>
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] mb-8 uppercase tracking-[0.4em] text-vesper-blue">Legal</h4>
            <ul className="space-y-4 text-vesper-granite text-xs font-medium uppercase tracking-widest">
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-vesper-sandstone transition-colors">FAAs Credentials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] mb-8 uppercase tracking-[0.4em] text-vesper-blue">Contact</h4>
            <div className="space-y-4 text-vesper-granite text-xs font-medium uppercase tracking-widest">
                <p>hello@vesper.aero</p>
                <p>123 Bespoke Lane</p>
                <p>San Diego, CA 92123</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-vesper-granite/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-vesper-granite/50 uppercase tracking-[0.3em] font-bold">
            <p>&copy; {new Date().getFullYear()} Vesper Aviation. Brand by Riff_ Agency.</p>
            <div className="mt-6 md:mt-0 flex gap-8">
                <span>Version 1.0</span>
                <span>November 2024</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;