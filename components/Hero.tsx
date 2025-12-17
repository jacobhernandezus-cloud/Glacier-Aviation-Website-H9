import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* High-end cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
          alt="Luxury helicopter flight"
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vesper-black via-transparent to-transparent"></div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="mb-8 overflow-hidden">
            <span className="inline-block text-vesper-blue font-bold tracking-[0.5em] text-xs uppercase animate-in slide-in-from-bottom-2 duration-700">
              EST. 2024 • BESPOKE AVIATION
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-vesper-sandstone mb-8 leading-[1.1] animate-in slide-in-from-bottom-4 duration-1000">
            A TRANQUIL <br/> 
            <span className="text-vesper-blue italic">ELEVATION</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-vesper-granite mb-12 max-w-2xl font-light leading-relaxed animate-in slide-in-from-bottom-6 duration-1000">
            Vesper is a bespoke aviation experience, from our visual brand to our FBO locations. Designed for those who expect the highest level of comfort and service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom-8 duration-1000">
            <a 
              href="#booking"
              onClick={(e) => handleScrollToSection(e, 'booking')}
              className="bg-vesper-sandstone hover:bg-vesper-blue text-vesper-black hover:text-vesper-sandstone font-bold py-5 px-12 rounded-none text-xs uppercase tracking-[0.3em] transition-all duration-500 text-center shadow-2xl"
            >
              Start Journey
            </a>
            <a 
              href="#programs"
              onClick={(e) => handleScrollToSection(e, 'programs')}
              className="border border-vesper-granite/50 text-vesper-sandstone hover:bg-vesper-sandstone hover:text-vesper-black font-bold py-5 px-12 rounded-none text-xs uppercase tracking-[0.3em] transition-all duration-500 text-center backdrop-blur-sm"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      {/* Minimalist scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-40">
        <div className="w-[1px] h-16 bg-gradient-to-b from-vesper-blue to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;