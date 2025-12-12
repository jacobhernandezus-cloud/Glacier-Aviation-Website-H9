import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-aviation-blue relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-white">What Our Pilots Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-aviation-gray p-8 rounded-xl shadow-lg relative border border-white/5 hover:border-aviation-light/30 transition-colors">
              <Quote size={40} className="text-aviation-light opacity-30 absolute top-6 right-6" />
              <p className="text-gray-300 italic mb-6 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-aviation-light shadow-[0_0_10px_rgba(102,252,241,0.3)]"
                />
                <div>
                    <h5 className="font-bold text-white">{t.name}</h5>
                    <span className="text-sm text-aviation-light uppercase tracking-wide opacity-80">{t.role}</span>
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