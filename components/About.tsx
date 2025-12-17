import React from 'react';
import { MapPin, Users, Award, Shield, Compass } from 'lucide-react';

const About: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
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
    <section id="about" className="py-32 bg-vesper-black relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Defining Vesper Header */}
        <div className="mb-24 flex flex-col md:flex-row gap-12 items-end">
            <div className="md:w-1/2">
                <h2 className="text-vesper-blue font-bold tracking-[0.5em] uppercase mb-4 text-xs">Our Heritage</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-vesper-sandstone leading-tight">Defining <br/> Vesper Aviation</h3>
            </div>
            <div className="md:w-1/2">
                <p className="text-xl text-vesper-granite font-light leading-relaxed italic">
                    "Designed for those who expect the highest level of comfort and service, our brand represents the seamless and luxurious travel experience."
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar / Concierge Facts */}
            <div className="lg:col-span-4 space-y-12">
                <div className="bg-vesper-shadow p-10 border border-white/5">
                    <h4 className="text-vesper-sandstone font-bold text-xs uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                        <Compass className="text-vesper-blue" size={16} /> The Destination
                    </h4>
                    <ul className="space-y-6">
                        <li className="flex flex-col gap-1">
                            <span className="text-vesper-granite text-[10px] uppercase tracking-widest">Global Base</span>
                            <span className="text-vesper-sandstone font-medium">San Diego Executive (KMYF)</span>
                        </li>
                        <li className="flex flex-col gap-1">
                            <span className="text-vesper-granite text-[10px] uppercase tracking-widest">Operational Status</span>
                            <span className="text-vesper-sandstone font-medium">FAA Part 141 Accredited</span>
                        </li>
                         <li className="flex flex-col gap-1">
                            <span className="text-vesper-granite text-[10px] uppercase tracking-widest">Concierge Access</span>
                            <span className="text-vesper-sandstone font-medium">24/7 Priority Member Line</span>
                        </li>
                    </ul>
                </div>

                <div className="border border-vesper-blue/30 p-10 flex flex-col items-center text-center">
                    <h4 className="text-vesper-sandstone font-bold text-xs uppercase tracking-[0.4em] mb-4">The Invitation</h4>
                    <p className="text-vesper-granite text-sm font-light mb-8">Every interaction with Vesper sets an exceptional tone for your journey.</p>
                    <a 
                        href="#booking" 
                        onClick={handleScrollToBooking}
                        className="w-full text-center bg-vesper-blue text-vesper-sandstone font-bold py-4 uppercase tracking-[0.3em] text-[10px] hover:bg-vesper-sandstone hover:text-vesper-black transition-all duration-500"
                    >
                        Inquire Privately
                    </a>
                </div>
            </div>

            {/* Main Content - Minimalist & Bold Typography */}
            <div className="lg:col-span-8 space-y-20">
                <section>
                    <h3 className="text-xs font-bold text-vesper-blue mb-8 uppercase tracking-[0.6em]">The Vesper Themes</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                        {['Inviting', 'Simplicity', 'Confidence', 'Bespoke', 'Concierge', 'Luxury'].map((theme) => (
                            <div key={theme} className="flex flex-col gap-2">
                                <span className="text-3xl font-bold text-vesper-sandstone tracking-tighter">{theme}</span>
                                <div className="w-6 h-[1px] bg-vesper-blue"></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="prose prose-invert max-w-none">
                    <p className="text-2xl text-vesper-granite font-light leading-relaxed">
                        From personalized service to privacy and convenience, we create a tranquil atmosphere where guests are treated like VIPs. Our attention to detail and dedication to service guarantee that every interaction you have with Vesper is exceptional.
                    </p>
                    <p className="text-vesper-granite/70 font-light mt-8">
                        Unlike traditional flight academies, Vesper operates as a private boutique. We limit our enrollment to ensure each student receives the full bandwidth of our faculty and fleet. This is the luxury of focus.
                    </p>
                </section>

                {/* Repair Station Section */}
                <section className="bg-vesper-shadow/50 p-12 border-l-2 border-vesper-blue">
                    <h3 className="text-lg font-bold text-vesper-sandstone mb-6 uppercase tracking-widest">Uncompromising Maintenance</h3>
                    <p className="text-vesper-granite text-sm font-light leading-relaxed mb-8">
                        Our in-house FAA Part 145 Repair Station is the cornerstone of our safety philosophy. By maintaining our own fleet, we ensure that no flight is compromised by technical delay.
                    </p>
                    <div className="flex flex-wrap gap-8">
                         <div className="flex items-center gap-3">
                            <Shield className="text-vesper-blue" size={16} />
                            <span className="text-[10px] font-bold text-vesper-sandstone uppercase tracking-widest">Zero Compromise</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Shield className="text-vesper-blue" size={16} />
                            <span className="text-[10px] font-bold text-vesper-sandstone uppercase tracking-widest">Part 145 Certified</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;