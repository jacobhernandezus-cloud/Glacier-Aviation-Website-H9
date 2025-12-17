import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Check, ChevronRight } from 'lucide-react';
import { BOOKING_SERVICES } from '../constants';

const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-32 bg-vesper-shadow">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-vesper-black border border-vesper-blue/20 p-20 shadow-2xl">
            <div className="w-16 h-16 border border-vesper-blue text-vesper-blue rounded-none flex items-center justify-center mx-auto mb-10">
              <Check size={32} />
            </div>
            <h3 className="text-3xl font-bold text-vesper-sandstone mb-6 uppercase tracking-widest">Inquiry Received</h3>
            <p className="text-vesper-granite mb-12 text-lg font-light leading-relaxed">
              A dedicated Vesper concierge has been assigned to your request. <br/> 
              We will reach out shortly to arrange your bespoke aviation experience.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-vesper-sandstone text-vesper-black font-bold py-4 px-12 rounded-none hover:bg-vesper-blue hover:text-vesper-sandstone transition-all duration-500 uppercase text-[10px] tracking-[0.3em]"
            >
              Return to Experience
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-32 bg-vesper-shadow relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-vesper-blue font-bold tracking-[0.5em] uppercase mb-4 text-xs">The Concierge</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-vesper-sandstone">Request Engagement</h3>
        </div>

        <div className="max-w-6xl mx-auto bg-vesper-black shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row border border-vesper-granite/10">
          {/* Service Selection Sidebar */}
          <div className="lg:w-2/5 bg-vesper-black p-12 text-vesper-sandstone border-r border-vesper-granite/10">
            <h4 className="text-xs font-bold mb-10 text-vesper-blue uppercase tracking-[0.4em]">Select Your Interest</h4>
            <div className="space-y-6">
              {BOOKING_SERVICES.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 cursor-pointer border transition-all duration-500 group relative ${
                    selectedService === service.id 
                      ? 'bg-vesper-blue/10 border-vesper-blue' 
                      : 'bg-transparent border-vesper-granite/10 hover:border-vesper-blue/30'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold uppercase text-[11px] tracking-widest">{service.title}</span>
                    <ChevronRight size={14} className={`text-vesper-blue transition-transform ${selectedService === service.id ? 'translate-x-1' : ''}`} />
                  </div>
                  <div className="flex justify-between text-[10px] font-medium text-vesper-granite uppercase tracking-wider">
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-vesper-granite/10">
                <p className="text-[10px] font-bold text-vesper-blue uppercase tracking-[0.3em] mb-4 italic">Direct Concierge</p>
                <a href="tel:1800VESPER" className="text-xl font-bold text-vesper-sandstone hover:text-vesper-blue transition-colors">
                    1-800-VESPER
                </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-3/5 p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-bold text-vesper-blue uppercase tracking-[0.4em] mb-4">Preferred Window</label>
                  <div className="relative">
                    <Calendar className="absolute left-0 top-3 text-vesper-blue/50" size={16} />
                    <input 
                      type="date" 
                      required
                      className="w-full pl-8 py-3 bg-transparent border-b border-vesper-granite/30 text-vesper-sandstone focus:outline-none focus:border-vesper-blue transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-vesper-blue uppercase tracking-[0.4em] mb-4">Atmospheric Window</label>
                  <div className="relative">
                    <Clock className="absolute left-0 top-3 text-vesper-blue/50" size={16} />
                    <select className="w-full pl-8 py-3 bg-vesper-black border-b border-vesper-granite/30 text-vesper-sandstone focus:outline-none focus:border-vesper-blue transition-all appearance-none uppercase text-xs font-bold tracking-widest">
                      <option>Morning (Tranquil)</option>
                      <option>Afternoon (Golden)</option>
                      <option>Evening (Twilight)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-10">
                <div className="relative">
                  <User className="absolute left-0 top-3 text-vesper-blue/50" size={16} />
                  <input 
                    type="text" 
                    required
                    placeholder="FULL NAME"
                    className="w-full pl-8 py-4 bg-transparent border-b border-vesper-granite/30 text-vesper-sandstone focus:outline-none focus:border-vesper-blue transition-all uppercase text-[10px] tracking-[0.3em] placeholder:text-vesper-granite/30 font-bold"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <Mail className="absolute left-0 top-3 text-vesper-blue/50" size={16} />
                    <input 
                      type="email" 
                      required
                      placeholder="EMAIL ADDRESS"
                      className="w-full pl-8 py-4 bg-transparent border-b border-vesper-granite/30 text-vesper-sandstone focus:outline-none focus:border-vesper-blue transition-all uppercase text-[10px] tracking-[0.3em] placeholder:text-vesper-granite/30 font-bold"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-0 top-3 text-vesper-blue/50" size={16} />
                    <input 
                      type="tel" 
                      required
                      placeholder="PHONE NUMBER"
                      className="w-full pl-8 py-4 bg-transparent border-b border-vesper-granite/30 text-vesper-sandstone focus:outline-none focus:border-vesper-blue transition-all uppercase text-[10px] tracking-[0.3em] placeholder:text-vesper-granite/30 font-bold"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={!selectedService}
                className="w-full bg-vesper-blue hover:bg-vesper-sandstone hover:text-vesper-black disabled:bg-vesper-granite/20 disabled:text-vesper-granite/40 disabled:cursor-not-allowed text-vesper-sandstone font-bold py-6 rounded-none uppercase text-xs tracking-[0.4em] transition-all duration-500 shadow-2xl"
              >
                {selectedService ? 'Initiate Inquiry' : 'Select Experience'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;