import React from 'react';
import { FLEET } from '../constants';

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-32 bg-vesper-black text-vesper-sandstone">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="text-vesper-blue font-bold tracking-[0.4em] uppercase mb-4 text-xs">The Collection</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h3>
            <p className="text-vesper-granite font-light text-lg">We maintain a refined collection of modern aircraft, curated for both fundamental training and turbine transitions.</p>
          </div>
          <button className="hidden md:block border border-vesper-blue text-vesper-blue hover:bg-vesper-blue hover:text-vesper-black font-bold py-4 px-10 rounded-none uppercase text-[10px] tracking-[0.3em] transition-all duration-500">
            View Specifications
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FLEET.map((aircraft, index) => (
            <div key={index} className="bg-vesper-shadow border border-white/5 rounded-none overflow-hidden hover:border-vesper-blue/30 transition-all duration-500 group">
              <div className="h-64 overflow-hidden relative">
                <img
                    src={aircraft.image}
                    alt={aircraft.model}
                    className="w-full h-full object-cover group-hover:scale-110 grayscale opacity-60 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 bg-vesper-blue text-vesper-sandstone text-[8px] font-bold px-4 py-2 rounded-none uppercase tracking-[0.2em]">
                    {aircraft.type}
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{aircraft.model}</h4>
                <p className="text-vesper-granite text-sm font-light mb-10 h-20 italic">"{aircraft.description}"</p>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-vesper-granite/10">
                    <div className="text-center">
                        <span className="block text-vesper-blue font-bold text-lg">{aircraft.specs.speed}</span>
                        <span className="text-[8px] text-vesper-granite uppercase tracking-widest">Cruise</span>
                    </div>
                    <div className="text-center border-l border-vesper-granite/10">
                        <span className="block text-vesper-blue font-bold text-lg">{aircraft.specs.range}</span>
                        <span className="text-[8px] text-vesper-granite uppercase tracking-widest">Range</span>
                    </div>
                    <div className="text-center border-l border-vesper-granite/10">
                        <span className="block text-vesper-blue font-bold text-lg">{aircraft.specs.seats}</span>
                        <span className="text-[8px] text-vesper-granite uppercase tracking-widest">Seats</span>
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