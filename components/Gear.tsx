
import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GEAR } from '../constants';

const Gear: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedGear = showAll ? GEAR : GEAR.filter(item => item.featured);

  return (
    <div className="py-24 bg-white/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Want to Film Like Us?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These are the essential tools we use to document our journey across the globe. We only recommend gear we truly use and love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedGear.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/20"
                >
                  Buy Now <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl bg-white/50 backdrop-blur-md"
          >
            {showAll ? (
              <>View Less <ChevronUp size={22} /></>
            ) : (
              <>View Full List <ChevronDown size={22} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gear;