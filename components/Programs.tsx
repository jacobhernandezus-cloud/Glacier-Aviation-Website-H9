import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-aviation-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-2">Our Courses</h2>
          <h3 className="text-4xl font-bold text-white mb-4">Professional Pilot Programs</h3>
          <div className="w-24 h-1 bg-aviation-light mx-auto shadow-[0_0_10px_rgba(102,252,241,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="group bg-aviation-gray rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full border border-white/5 hover:border-aviation-light/30">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-aviation-blue/40 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">{program.title}</h4>
                  <p className="text-gray-400 mb-6">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                        <CheckCircle2 size={16} className="text-aviation-light" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-aviation-light font-bold uppercase tracking-wide hover:text-white transition-colors">
                  View Course Details <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;