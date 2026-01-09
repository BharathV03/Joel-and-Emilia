
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Ken Burns Effect Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/Fk0bmfvF/Screenshot-2026-01-09-at-11-31-16.png"
          alt="Joel and Emilia Travel"
          className="w-full h-full object-cover scale-110 animate-[kenburns_20s_ease_infinite_alternate]"
          onError={(e) => {
             // Fallback if the direct ibb link fails
             e.currentTarget.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight animate-fade-in-up">
          Joel and Emilia
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 font-light tracking-wide animate-fade-in-up delay-200">
          Exploring the World, One Adventure at a Time
        </p>
        <div className="mt-10 animate-fade-in-up delay-500">
          <a
            href="https://www.youtube.com/@Joel_Emilia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 inline-block shadow-lg"
          >
            See Our Journey
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes kenburns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
};

export default Hero;
