import React from 'react';
import { Sun, Wrench, GraduationCap, Mountain, ShieldCheck, MapPin, Calendar, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-aviation-blue relative">
       {/* Decorative subtle grid background */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2833_1px,transparent_1px),linear-gradient(to_bottom,#1F2833_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-aviation-gray pb-8">
            <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-3 text-sm">General Information</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">About Glacier Aviation</h3>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                Setting the standard in helicopter flight training. We combine a rigorous FAA Part 141 curriculum with real-world operational environments to produce the industry's most competent pilots.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Quick Facts / Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-aviation-gray rounded-lg p-6 border border-white/5 shadow-lg">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <MapPin className="text-aviation-light" size={20} /> At a Glance
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-gray-400 text-sm">Established</span>
                            <span className="text-white font-medium text-sm">2005</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-gray-400 text-sm">Location</span>
                            <span className="text-white font-medium text-sm">Olympia, WA (KOLM)</span>
                        </li>
                        <li className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-gray-400 text-sm">Certification</span>
                            <span className="text-white font-medium text-sm">FAA Part 141</span>
                        </li>
                         <li className="flex justify-between border-b border-white/5 pb-2">
                            <span className="text-gray-400 text-sm">Fleet Size</span>
                            <span className="text-white font-medium text-sm">12 Aircraft</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-aviation-gray rounded-lg p-6 border border-white/5 shadow-lg">
                     <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                        <Users className="text-aviation-light" size={20} /> Student Services
                    </h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-aviation-light rounded-full"></div>
                            M-1 Visa Authorization
                        </li>
                        <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-aviation-light rounded-full"></div>
                            VA Benefits Approved
                        </li>
                         <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-aviation-light rounded-full"></div>
                            Student Housing Available
                        </li>
                         <li className="flex items-center gap-3 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-aviation-light rounded-full"></div>
                            Career Placement Assistance
                        </li>
                    </ul>
                </div>
                
                 <div className="bg-gradient-to-br from-aviation-light/10 to-transparent rounded-lg p-6 border border-aviation-light/20">
                    <h4 className="text-white font-bold text-lg mb-2">Ready to Fly?</h4>
                    <p className="text-gray-400 text-sm mb-4">Schedule your discovery flight today and experience the thrill of vertical flight.</p>
                    <a href="#booking" className="block text-center bg-aviation-light text-aviation-blue font-bold py-3 rounded-sm uppercase tracking-wider text-sm hover:bg-white transition-colors">
                        Book Now
                    </a>
                </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Introduction */}
                <section>
                    <h3 className="text-2xl font-bold text-white mb-4">The Glacier Difference</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        We are a dedicated helicopter flight training academy. Unlike flight schools that treat training as a side business to charter operations, our primary focus is <strong>you</strong>—the student pilot. Our philosophy is simple: complete transparency, uncompromising safety, and efficient training.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        We don't believe in "building time" aimlessly. Every flight hour at Glacier Aviation is structured to make you a better pilot. From your first hover to your Certified Flight Instructor checkride, our syllabus is designed to maximize your learning and minimize wasted cost.
                    </p>
                </section>

                {/* Training Environment */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-aviation-light/10 rounded-lg text-aviation-light">
                                <Mountain size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Diverse Terrain</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Training in a flat environment leaves pilots unprepared for the real world. Our location offers immediate access to mountains, coastal lines, and complex airspace. You will learn density altitude operations, confined area landings, and off-airport procedures in the actual environments where you will work.
                        </p>
                    </div>
                    <div>
                         <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-aviation-light/10 rounded-lg text-aviation-light">
                                <Sun size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Weather Experience</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pilots trained in constant sunshine often struggle when the weather turns. Our Pacific Northwest location provides a safe yet challenging variety of weather conditions, ensuring you graduate with the decision-making skills required for commercial operations.
                        </p>
                    </div>
                </section>

                {/* Maintenance */}
                <section className="bg-aviation-gray p-8 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Wrench size={120} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">In-House Maintenance</h3>
                    <p className="text-gray-400 leading-relaxed relative z-10 mb-6">
                        Safety is not just a slogan; it's an operational requirement. Glacier Aviation operates its own <strong>FAA Part 145 Repair Station</strong>. This means our aircraft are maintained to the highest regulatory standards by our own dedicated team of mechanics. 
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                        <li className="flex items-center gap-2 text-white font-medium">
                            <ShieldCheck className="text-aviation-light" size={18} /> Daily Inspections
                        </li>
                        <li className="flex items-center gap-2 text-white font-medium">
                            <ShieldCheck className="text-aviation-light" size={18} /> Factory Trained Techs
                        </li>
                         <li className="flex items-center gap-2 text-white font-medium">
                            <ShieldCheck className="text-aviation-light" size={18} /> Minimized Downtime
                        </li>
                         <li className="flex items-center gap-2 text-white font-medium">
                            <ShieldCheck className="text-aviation-light" size={18} /> Proactive Safety Culture
                        </li>
                    </ul>
                </section>

            </div>
        </div>
      </div>
    </section>
  );
};

export default About;