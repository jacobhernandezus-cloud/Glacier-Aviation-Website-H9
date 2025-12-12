import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fleet' | 'training' | 'aerial'>('all');

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'training', label: 'Training' },
    { id: 'aerial', label: 'Aerial Views' },
  ];

  return (
    <section id="gallery" className="py-24 bg-aviation-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-aviation-light font-bold tracking-widest uppercase mb-2">Gallery</h2>
          <h3 className="text-4xl font-bold text-white mb-8">Life at Glacier Aviation</h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-aviation-light text-aviation-blue shadow-[0_0_15px_rgba(102,252,241,0.4)]'
                    : 'bg-aviation-gray text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer border border-white/5">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-aviation-blue/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium drop-shadow-lg">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;