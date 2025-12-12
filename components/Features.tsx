import React from 'react';
import { ShieldCheck, Globe, Clock, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Safety First",
      desc: "Impeccable safety record with rigorous maintenance standards."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Students",
      desc: "Authorized to issue M-1 visas for international flight students."
    },
    {
      icon: <Clock size={40} />,
      title: "Efficient Training",
      desc: "Structured syllabus to help you reach your goals on time and budget."
    },
    {
      icon: <Award size={40} />,
      title: "Accredited",
      desc: "FAA Part 141 approved courses for professional career paths."
    }
  ];

  return (
    <section className="py-20 relative -mt-10 z-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-aviation-gray p-8 rounded-lg shadow-xl border-t-4 border-aviation-light hover:-translate-y-2 transition-transform duration-300">
            <div className="text-aviation-light mb-4 drop-shadow-[0_0_8px_rgba(102,252,241,0.5)]">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;