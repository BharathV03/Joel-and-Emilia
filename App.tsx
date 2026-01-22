
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
    <div className="min-h-screen w-full relative overflow-x-clip">
      <Navbar />

      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <main className="bg-dots relative w-full overflow-hidden">
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