
import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Support Our Journey</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
          Love our content? Your support helps us continue exploring the world and bringing you authentic travel experiences from the most remote corners of the Earth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="https://www.paypal.com/paypalme/joelfriendy?loc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-xl transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/40"
          >
            <Heart fill="currentColor" size={24} /> Donate via PayPal
          </a>
          <a
            href="https://buymeacoffee.com/joelfriendy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 bg-[#FFDD00] hover:bg-[#FFEA00] text-slate-900 rounded-2xl font-bold text-xl transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-yellow-500/40"
          >
            <Coffee size={24} /> Buy us a coffee
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
