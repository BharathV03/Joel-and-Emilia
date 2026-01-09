
import React from 'react';
import { Instagram, Play as TikTok } from 'lucide-react';
import { PROFILES } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <div className="py-24 bg-slate-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROFILES.map((profile, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row group border border-white"
            >
              <div className="w-full md:w-2/5 overflow-hidden">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110 min-h-[350px]"
                />
              </div>
              <div className="w-full md:w-3/5 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{profile.name}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {profile.bio}
                </p>
                <div className="flex gap-4">
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-pink-50 text-pink-600 rounded-2xl hover:bg-pink-100 transition-all hover:scale-110"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href={profile.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-100 text-slate-900 rounded-2xl hover:bg-slate-200 transition-all hover:scale-110"
                  >
                    <TikTok size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;