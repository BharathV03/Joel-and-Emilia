
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WorldMap from './components/WorldMap';
import AboutUs from './components/AboutUs';
import Gear from './components/Gear';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Support from './components/Support';
import Footer from './components/Footer';

const DecorativePath: React.FC<{ top: string; left: string; flip?: boolean }> = ({ top, left, flip }) => (
  <div 
    className="absolute pointer-events-none z-0 opacity-20 animate-float" 
    style={{ top, left, transform: flip ? 'scaleX(-1)' : 'none' }}
  >
    <svg width="450" height="300" viewBox="0 0 450 300" fill="none">
      <path 
        d="M20 280 Q 150 280, 225 150 T 430 20" 
        stroke="#3b82f6" 
        strokeWidth="2" 
        strokeDasharray="10 10" 
        strokeLinecap="round"
      />
      <circle cx="20" cy="280" r="4" fill="#3b82f6" />
      <circle cx="430" cy="20" r="4" fill="#3b82f6" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <main className="bg-dots relative">
        {/* Decorative paths that weave through the content */}
        <DecorativePath top="10%" left="-100px" />
        <DecorativePath top="35%" left="80%" flip />
        <DecorativePath top="60%" left="5%" />
        <DecorativePath top="85%" left="75%" flip />

        <section id="stats" className="scroll-mt-20 relative z-10">
          <Stats />
        </section>
        
        <section id="map" className="scroll-mt-20 relative z-10">
          <WorldMap />
        </section>
        
        <section id="about" className="scroll-mt-20 relative z-10">
          <AboutUs />
        </section>
        
        <section id="gear" className="scroll-mt-20 relative z-10">
          <Gear />
        </section>
        
        <section id="partners" className="scroll-mt-20 relative z-10">
          <Partners />
        </section>
        
        <section id="contact" className="scroll-mt-20 relative z-10">
          <Contact />
        </section>
        
        <section id="support" className="scroll-mt-20 relative z-10">
          <Support />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;