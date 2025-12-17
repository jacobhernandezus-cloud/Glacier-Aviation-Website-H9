import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-vesper-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-vesper-blue font-bold tracking-[0.5em] uppercase mb-4 text-xs">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-vesper-sandstone">Voices of the Sky</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-vesper-shadow p-12 rounded-none border border-white/5 hover:border-vesper-blue/20 transition-all duration-500 flex flex-col justify-between group">
              <div>
                <Quote size={32} className="text-vesper-blue opacity-20 mb-10 group-hover:opacity-40 transition-opacity" />
                <p className="text-vesper-sandstone font-light italic mb-10 text-lg leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-6 pt-8 border-t border-vesper-granite/10">
                <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-none object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div>
                    <h5 className="font-bold text-vesper-sandstone uppercase text-xs tracking-widest mb-1">{t.name}</h5>
                    <span className="text-[10px] text-vesper-blue font-bold uppercase tracking-[0.3em]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;