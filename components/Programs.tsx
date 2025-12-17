import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Calendar, DollarSign, Award, BookOpen } from 'lucide-react';
import { PROGRAMS } from '../constants';
import { Program } from '../types';

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>, program: Program) => {
    e.preventDefault();
    setSelectedProgram(program);
    document.body.style.overflow = 'hidden';
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
    <section id="programs" className="py-32 bg-vesper-shadow">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-vesper-blue font-bold tracking-[0.4em] uppercase text-xs mb-4">The Atelier</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-vesper-sandstone mb-6">Bespoke Training Programs</h3>
          <div className="w-16 h-[2px] bg-vesper-blue"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROGRAMS.map((program, index) => (
            <div key={index} className="group bg-vesper-black rounded-none overflow-hidden shadow-2xl transition-all duration-500 flex flex-col md:flex-row h-full border border-white/5 hover:border-vesper-blue/30">
              <div className="md:w-2/5 relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-vesper-black/20"></div>
              </div>
              <div className="p-10 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-vesper-sandstone mb-4 tracking-tight uppercase">{program.title}</h4>
                  <p className="text-vesper-granite font-light text-sm mb-8 leading-relaxed italic">
                    "{program.description}"
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] text-vesper-granite font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 bg-vesper-blue rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => handleOpenModal(e, program)}
                  className="inline-flex items-center gap-3 text-vesper-blue font-bold uppercase text-[10px] tracking-[0.3em] hover:text-vesper-sandstone transition-all cursor-pointer group/link"
                >
                  Explore Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-vesper-black/95 backdrop-blur-md" onClick={handleCloseModal}></div>
          <div className="relative bg-vesper-black w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-none shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-vesper-blue/20 animate-in fade-in zoom-in duration-500">
            
            <div className="relative h-64 md:h-96">
              <img 
                src={selectedProgram.image} 
                alt={selectedProgram.title} 
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vesper-black via-vesper-black/40 to-transparent"></div>
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 bg-vesper-black/50 hover:bg-vesper-blue text-vesper-sandstone p-3 rounded-none transition-all border border-white/10"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-10 left-10 md:left-16">
                <h3 className="text-4xl md:text-6xl font-bold text-vesper-sandstone mb-4 uppercase tracking-tighter">{selectedProgram.title}</h3>
                <div className="flex flex-wrap gap-8 text-[10px] text-vesper-granite font-bold uppercase tracking-[0.3em]">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-vesper-blue"/> {selectedProgram.details.duration}</span>
                    <span className="flex items-center gap-2"><DollarSign size={12} className="text-vesper-blue"/> {selectedProgram.details.pricing}</span>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16 space-y-12">
              <div className="max-w-3xl">
                <h4 className="text-xs font-bold text-vesper-blue mb-6 uppercase tracking-[0.5em]">The Overview</h4>
                <p className="text-vesper-sandstone leading-relaxed text-xl font-light">
                  {selectedProgram.details.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-vesper-granite/10 pt-12">
                <div>
                   <h4 className="text-xs font-bold text-vesper-blue mb-8 uppercase tracking-[0.5em]">Vesper Differentiators</h4>
                   <ul className="space-y-6">
                     {selectedProgram.details.differentiators.map((diff, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <span className="text-vesper-blue font-bold text-xs">0{i+1}</span>
                         <span className="text-vesper-granite text-sm font-light leading-relaxed">{diff}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="space-y-12">
                    <div>
                      <h4 className="text-xs font-bold text-vesper-blue mb-6 uppercase tracking-[0.5em]">Mastery Prerequisites</h4>
                      <ul className="space-y-4">
                        {selectedProgram.details.prerequisites.map((req, i) => (
                            <li key={i} className="text-xs text-vesper-granite font-medium uppercase tracking-widest flex items-center gap-3">
                                <div className="w-1 h-1 bg-vesper-blue"></div> {req}
                            </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      onClick={handleBookNow}
                      className="bg-vesper-blue hover:bg-vesper-sandstone hover:text-vesper-black text-vesper-sandstone font-bold py-5 px-10 rounded-none uppercase text-xs tracking-[0.3em] transition-all duration-500 shadow-2xl w-full"
                    >
                      Inquire About Enrollment
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;