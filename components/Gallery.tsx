import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fleet' | 'training' | 'aerial'>('all');

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'fleet', label: 'The Fleet' },
    { id: 'training', label: 'The Process' },
    { id: 'aerial', label: 'Perspectives' },
  ];

  return (
    <section id="gallery" className="py-32 bg-vesper-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-vesper-blue font-bold tracking-[0.5em] uppercase mb-4 text-xs">Vesper Atelier</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-vesper-sandstone mb-10">Visual Heritage</h3>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 pb-2 border-b-2 ${
                  filter === cat.id
                    ? 'border-vesper-blue text-vesper-sandstone'
                    : 'border-transparent text-vesper-granite hover:text-vesper-sandstone'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-none cursor-pointer border border-white/5 bg-vesper-shadow">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vesper-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <span className="text-vesper-sandstone text-xs font-bold uppercase tracking-[0.3em]">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;