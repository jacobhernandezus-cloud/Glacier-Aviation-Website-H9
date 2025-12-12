import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-aviation-light rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(102,252,241,0.3)]">
                        <svg className="w-5 h-5 text-aviation-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                </div>
                <span className="font-bold text-lg uppercase tracking-wide">Glacier <span className="text-aviation-light">Aviation</span></span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               The premier destination for professional helicopter pilot training and scenic tours. FAA Part 141 approved.
             </p>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aviation-light hover:text-aviation-blue transition-colors">
                    <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aviation-light hover:text-aviation-blue transition-colors">
                    <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aviation-light hover:text-aviation-blue transition-colors">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-aviation-light hover:text-aviation-blue transition-colors">
                    <Linkedin size={18} />
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-aviation-light">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-aviation-light transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Book a Flight</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Housing</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-aviation-light">Programs</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-aviation-light transition-colors">Private Pilot (PPL-H)</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Commercial Pilot (CPL-H)</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Instrument Rating</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Certified Flight Instructor</a></li>
                <li><a href="#" className="hover:text-aviation-light transition-colors">Turbine Transition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-aviation-light">Certifications</h4>
             <div className="flex gap-4 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                    <span className="text-[10px] text-black font-bold text-center leading-none">FAA<br/>Approved</span>
                </div>
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                    <span className="text-[10px] text-black font-bold text-center leading-none">VA<br/>Benefits</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden p-1">
                    <span className="text-[10px] text-black font-bold text-center leading-none">M-1<br/>Visa</span>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Glacier Aviation. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;