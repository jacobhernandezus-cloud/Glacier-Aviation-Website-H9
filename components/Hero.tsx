import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=99" // Fallback placeholder
          alt="Helicopter flying over coast"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-blue/90 via-aviation-blue/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-aviation-light/20 backdrop-blur-sm border border-aviation-light/30 rounded-full px-4 py-1 mb-6">
            <span className="text-white font-semibold tracking-wider text-sm uppercase">FAA Part 141 Approved Academy</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            LAUNCH YOUR CAREER IN <span className="text-aviation-light">VERTICAL FLIGHT</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Train with the industry leaders. Our professional helicopter flight training programs are designed to take you from zero hours to a professional pilot career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-aviation-light hover:bg-white hover:text-aviation-blue text-white font-bold py-4 px-8 rounded-sm text-lg uppercase tracking-wide transition-all duration-300">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-aviation-blue font-bold py-4 px-8 rounded-sm text-lg uppercase tracking-wide transition-all duration-300">
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;