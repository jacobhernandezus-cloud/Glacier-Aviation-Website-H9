import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', program: 'private' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application request simulated. Thank you!");
  };

  return (
    <section id="contact" className="py-24 bg-[#050508] text-white relative overflow-hidden">
       {/* Background graphic */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-aviation-light/5 skew-x-12 transform translate-x-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-2">Get Started</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready for Takeoff?</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Schedule your introductory flight lesson today. Speak with our admissions team to learn about financing options, housing, and upcoming class dates.
            </p>
            
            <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm mb-8">
                <h4 className="font-bold text-xl mb-2 text-aviation-light">Admissions Office</h4>
                <p className="text-gray-400">123 Aviation Way, Suite 100</p>
                <p className="text-gray-400 mb-4">San Diego, CA 92123</p>
                <a href="tel:+18005550199" className="text-2xl font-bold text-white hover:text-aviation-light transition-colors block">
                    1-800-GLACIER
                </a>
            </div>
          </div>

          <div className="lg:w-1/2 bg-aviation-gray rounded-lg p-8 shadow-2xl border border-white/5">
            <h4 className="text-2xl font-bold text-white mb-6">Request Information</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-1">First Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-aviation-blue border border-gray-700 text-white rounded-sm focus:outline-none focus:border-aviation-light transition-colors placeholder-gray-600"
                            placeholder="John"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 mb-1">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-aviation-blue border border-gray-700 text-white rounded-sm focus:outline-none focus:border-aviation-light transition-colors placeholder-gray-600"
                            placeholder="Doe"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Email Address</label>
                    <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-aviation-blue border border-gray-700 text-white rounded-sm focus:outline-none focus:border-aviation-light transition-colors placeholder-gray-600"
                        placeholder="john@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Phone Number</label>
                    <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-aviation-blue border border-gray-700 text-white rounded-sm focus:outline-none focus:border-aviation-light transition-colors placeholder-gray-600"
                        placeholder="(555) 123-4567"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-1">Program of Interest</label>
                    <select className="w-full px-4 py-3 bg-aviation-blue border border-gray-700 text-white rounded-sm focus:outline-none focus:border-aviation-light transition-colors">
                        <option value="intro">Introductory Flight</option>
                        <option value="private">Private Pilot</option>
                        <option value="commercial">Commercial Pilot</option>
                        <option value="cfi">CFI Academy</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-aviation-light hover:bg-white text-aviation-blue font-bold py-4 rounded-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.6)]">
                    Submit Request <Send size={18} />
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;