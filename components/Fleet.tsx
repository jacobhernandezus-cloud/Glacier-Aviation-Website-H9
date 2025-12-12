import React from 'react';
import { FLEET } from '../constants';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-aviation-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-2">The Fleet</h2>
            <h3 className="text-4xl font-bold mb-4">Train in Modern Aircraft</h3>
            <p className="text-gray-300 text-lg">We operate a diverse fleet of well-maintained helicopters, ensuring you get experience in the aircraft most commonly used in the industry.</p>
          </div>
          <button className="hidden md:block border border-white text-white hover:bg-white hover:text-aviation-blue font-bold py-3 px-8 rounded-sm uppercase tracking-wide transition-all duration-300 mt-6 md:mt-0">
            View All Aircraft
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FLEET.map((aircraft, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors duration-300 group">
              <div className="h-48 overflow-hidden relative">
                <img
                    src={aircraft.image}
                    alt={aircraft.model}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-aviation-light text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {aircraft.type}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">{aircraft.model}</h4>
                <p className="text-gray-400 text-sm mb-6 h-20">{aircraft.description}</p>
                <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/10">
                    <div className="text-center">
                        <span className="block text-aviation-light font-bold text-lg">{aircraft.specs.speed}</span>
                        <span className="text-xs text-gray-500 uppercase">Cruise</span>
                    </div>
                    <div className="text-center border-l border-white/10">
                        <span className="block text-aviation-light font-bold text-lg">{aircraft.specs.range}</span>
                        <span className="text-xs text-gray-500 uppercase">Range</span>
                    </div>
                    <div className="text-center border-l border-white/10">
                        <span className="block text-aviation-light font-bold text-lg">{aircraft.specs.seats}</span>
                        <span className="text-xs text-gray-500 uppercase">Seats</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;