
import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/xdakqbnk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', brand: '', message: '' });
        // Reset to idle after a few seconds to allow another message
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50";
  const labelClasses = "block text-sm font-semibold text-slate-300 mb-2";

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Let's Collaborate</h2>
          <p className="text-slate-600">Interested in partnering with us? Get in touch!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className={labelClasses}>Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                disabled={status === 'sending'}
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                disabled={status === 'sending'}
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="brand" className={labelClasses}>Company / Brand Name</label>
            <input
              id="brand"
              type="text"
              name="brand"
              disabled={status === 'sending'}
              value={formData.brand}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your Company"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className={labelClasses}>Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={status === 'sending'}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              placeholder="How can we work together?"
            ></textarea>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 active:scale-[0.98]'
              }`}
            >
              {status === 'sending' ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : status === 'success' ? (
                <>Message Sent! <CheckCircle2 size={18} /></>
              ) : status === 'error' ? (
                <>Error Sending Message <AlertCircle size={18} /></>
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            
            {status === 'success' && (
              <p className="text-green-400 text-center text-sm font-medium animate-fade-in">
                Thank you! We'll get back to you as soon as possible.
              </p>
            )}
            
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm font-medium animate-fade-in">
                Something went wrong. Please try again or reach out via socials.
              </p>
            )}
          </div>
        </form>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
