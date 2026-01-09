
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Triple the partners for smooth infinite loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="py-20 bg-slate-50 overflow-hidden border-y border-slate-200">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Our Trusted Partners</h2>
      </div>
      
      <div className="relative flex whitespace-nowrap overflow-hidden py-10">
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-12 flex flex-col items-center justify-center group transition-all duration-300"
            >
              <div className="h-14 w-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-full w-auto object-contain drop-shadow-sm" 
                />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
