import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Calendar, DollarSign, Award, BookOpen } from 'lucide-react';
import { PROGRAMS } from '../constants';
import { Program } from '../types';

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>, program: Program) => {
    e.preventDefault();
    setSelectedProgram(program);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookNow = () => {
    handleCloseModal();
    const element = document.getElementById('booking');
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
                <a 
                  href="#" 
                  onClick={(e) => handleOpenModal(e, program)}
                  className="inline-flex items-center gap-2 text-aviation-light font-bold uppercase tracking-wide hover:text-white transition-colors cursor-pointer"
                >
                  Inquire About Course <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleCloseModal}></div>
          <div className="relative bg-aviation-gray w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-aviation-light/30 animate-in fade-in zoom-in duration-300">
            
            {/* Modal Header with Image */}
            <div className="relative h-48 md:h-64">
              <img 
                src={selectedProgram.image} 
                alt={selectedProgram.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aviation-gray via-aviation-gray/60 to-transparent"></div>
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-black/50 hover:bg-aviation-light hover:text-aviation-blue text-white p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-6 left-6 md:left-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProgram.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-aviation-light"/> {selectedProgram.details.duration}</span>
                    <span className="flex items-center gap-1"><DollarSign size={14} className="text-aviation-light"/> Investment Required</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              
              {/* Description */}
              <div>
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <BookOpen className="text-aviation-light" size={20}/> Course Overview
                </h4>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProgram.details.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Differentiators */}
                <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                   <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="text-aviation-light" size={20}/> Why Glacier Aviation?
                   </h4>
                   <ul className="space-y-3">
                     {selectedProgram.details.differentiators.map((diff, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <div className="mt-1 min-w-[6px] min-h-[6px] rounded-full bg-aviation-light"></div>
                         <span className="text-gray-300 text-sm">{diff}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Pricing & Prerequisites */}
                <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <DollarSign className="text-aviation-light" size={20}/> Estimated Cost
                      </h4>
                      <p className="text-2xl font-bold text-white mb-1">{selectedProgram.details.pricing}</p>
                      <p className="text-xs text-gray-500 italic">*Prices are estimates based on average student completion times. Individual results may vary.</p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/5">
                      <h4 className="text-lg font-bold text-white mb-2">Prerequisites</h4>
                      <ul className="space-y-2">
                        {selectedProgram.details.prerequisites.map((req, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-aviation-light/50" /> {req}
                            </li>
                        ))}
                      </ul>
                    </div>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-center md:text-left text-sm">
                  Ready to start your training? Schedule your discovery flight or consultation today.
                </p>
                <button 
                  onClick={handleBookNow}
                  className="bg-aviation-light hover:bg-white text-aviation-blue font-bold py-3 px-8 rounded-sm uppercase tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.6)] whitespace-nowrap w-full md:w-auto"
                >
                  Book Lessons Now
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;