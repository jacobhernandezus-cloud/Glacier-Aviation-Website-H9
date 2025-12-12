import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Check } from 'lucide-react';
import { BOOKING_SERVICES } from '../constants';

const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-aviation-gray">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="bg-aviation-blue border border-white/10 p-12 rounded-xl shadow-2xl">
            <div className="w-20 h-20 bg-aviation-light/20 text-aviation-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Booking Request Received!</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Thank you for choosing Glacier Aviation. We have sent a confirmation email to your inbox. 
              Our flight operations team will contact you shortly to finalize your schedule.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-aviation-light text-aviation-blue font-bold py-3 px-8 rounded-sm hover:bg-white transition-colors"
            >
              Book Another Flight
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-aviation-gray relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aviation-light/30 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-2">Schedule Your Flight</h2>
          <h3 className="text-4xl font-bold text-white">Book Online</h3>
        </div>

        <div className="max-w-5xl mx-auto bg-aviation-blue rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/10">
          {/* Service Selection Sidebar */}
          <div className="lg:w-1/3 bg-[#050508] p-8 text-white border-r border-white/10">
            <h4 className="text-xl font-bold mb-6 text-aviation-light">Select a Service</h4>
            <div className="space-y-4">
              {BOOKING_SERVICES.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-lg cursor-pointer border transition-all ${
                    selectedService === service.id 
                      ? 'bg-aviation-light text-aviation-blue border-aviation-light shadow-[0_0_15px_rgba(102,252,241,0.3)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <div className="font-bold">{service.title}</div>
                  <div className="flex justify-between text-sm mt-1 opacity-80">
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h5 className="font-bold mb-2 text-gray-300">Need Help?</h5>
              <p className="text-sm text-gray-500 mb-4">Not sure which flight is right for you? Give us a call.</p>
              <a href="tel:18004522437" className="flex items-center gap-2 font-bold text-aviation-light hover:text-white transition-colors">
                <Phone size={16} /> 1-800-GLACIER
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-2/3 p-8 lg:p-12">
            <form onSubmit={handleSubmit}>
              <h4 className="text-2xl font-bold text-white mb-8">Flight Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-aviation-light" size={20} />
                    <input 
                      type="date" 
                      required
                      className="w-full pl-10 pr-4 py-3 bg-aviation-gray border border-gray-700 text-white rounded-lg focus:outline-none focus:border-aviation-light focus:ring-1 focus:ring-aviation-light transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-aviation-light" size={20} />
                    <select className="w-full pl-10 pr-4 py-3 bg-aviation-gray border border-gray-700 text-white rounded-lg focus:outline-none focus:border-aviation-light focus:ring-1 focus:ring-aviation-light transition-colors appearance-none">
                      <option>Morning (8AM - 12PM)</option>
                      <option>Afternoon (12PM - 4PM)</option>
                      <option>Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-aviation-light" size={20} />
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-aviation-gray border border-gray-700 text-white rounded-lg focus:outline-none focus:border-aviation-light focus:ring-1 focus:ring-aviation-light transition-colors placeholder-gray-600"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-aviation-light" size={20} />
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-aviation-gray border border-gray-700 text-white rounded-lg focus:outline-none focus:border-aviation-light focus:ring-1 focus:ring-aviation-light transition-colors placeholder-gray-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-aviation-light" size={20} />
                      <input 
                        type="tel" 
                        required
                        placeholder="(555) 123-4567"
                        className="w-full pl-10 pr-4 py-3 bg-aviation-gray border border-gray-700 text-white rounded-lg focus:outline-none focus:border-aviation-light focus:ring-1 focus:ring-aviation-light transition-colors placeholder-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={!selectedService}
                className="w-full mt-10 bg-gradient-to-r from-aviation-light to-aviation-accent hover:from-white hover:to-white hover:text-aviation-blue disabled:from-gray-700 disabled:to-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed text-aviation-blue font-bold py-4 rounded-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transform hover:-translate-y-1"
              >
                {selectedService ? 'Confirm Booking Request' : 'Please Select a Service'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;