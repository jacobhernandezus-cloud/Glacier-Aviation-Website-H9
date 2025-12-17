import React from 'react';
import { Shield, Sparkles, UserCheck, Star } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Bespoke Mastery",
      desc: "Our curriculum adapts to your pace, ensuring a seamless and luxury learning experience."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Concierge Care",
      desc: "From personalized mission planning to privacy and convenience, we treat every guest like a VIP."
    },
    {
      icon: <Shield size={32} />,
      title: "Unerring Confidence",
      desc: "Our in-house FAA Part 145 repair station ensures every aircraft meets the highest standard of safety."
    },
    {
      icon: <Star size={32} />,
      title: "Luxury Environment",
      desc: "A tranquil atmosphere where guests are treated with the highest level of comfort and dedication."
    }
  ];

  return (
    <section className="py-24 bg-vesper-black relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="text-vesper-blue mb-6 group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-vesper-sandstone mb-3 uppercase tracking-widest">{feature.title}</h3>
              <div className="w-8 h-[1px] bg-vesper-granite/30 mb-4 transition-all group-hover:w-16 group-hover:bg-vesper-blue"></div>
              <p className="text-vesper-granite text-sm font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;