
import React, { useState } from 'react';
import { Instagram, Youtube, Play as TikTok, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showDisclosure, setShowDisclosure] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-slate-950 text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">JOEL <span className="text-blue-500">&</span> EMILIA</h2>
            <p className="text-slate-500 max-w-xs">Documenting the beauty of our planet through cinematography and storytelling.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Connect with us</h3>
            <div className="flex gap-6">
              <a href="https://www.youtube.com/@Joel_Emilia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors"><Youtube size={28} /></a>
              <a href="https://instagram.com/joelfriendy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={28} /></a>
              <a href="https://tiktok.com/@joelfriendy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><TikTok size={28} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>© 2026 Joel and Emilia. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <button 
              onClick={() => setShowPrivacy(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setShowDisclosure(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Affiliate Disclosure
            </button>
          </div>
        </div>
      </div>

      {/* Affiliate Disclosure Modal */}
      {showDisclosure && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
            onClick={() => setShowDisclosure(false)}
          ></div>
          <div className="relative bg-white text-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 sm:p-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Affiliate Disclosure</h2>
                <button 
                  onClick={() => setShowDisclosure(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed overflow-y-auto max-h-[60vh] pr-2">
                <p>
                  Joel & Emilia participates in affiliate marketing programs. When you 
                  purchase products through our links, we may earn a commission at no 
                  extra cost to you.
                </p>
                <p>
                  We only recommend gear we personally use and genuinely love. Our 
                  opinions are honest and not influenced by affiliate commissions.
                </p>
                <p>
                  Products with affiliate links are primarily found in our "Our Gear" 
                  section and include links to Amazon and other retailers.
                </p>
                <p>
                  For questions, contact us via our contact form above or reach out on our social channels.
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-sm font-medium">
                    <strong className="text-slate-900 uppercase tracking-wide text-xs">FTC Compliance:</strong> We are participants in the Amazon Services LLC 
                    Associates Program and other affiliate programs.
                  </p>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-slate-400 italic">Last Updated: January 2026</p>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => setShowDisclosure(false)}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
            onClick={() => setShowPrivacy(false)}
          ></div>
          <div className="relative bg-white text-slate-900 w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 sm:p-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Privacy Policy</h2>
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                <p className="text-sm text-slate-400 italic font-medium">Last Updated: January 2026</p>
                
                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Introduction</h3>
                  <p>
                    Joel & Emilia ("we," "us," "our") operates joelandemilia.com. This page 
                    informs you of our policies regarding the collection, use, and disclosure 
                    of personal data when you use our website.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Information We Collect</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">Contact Form</h4>
                      <p>When you submit our contact form, we collect: Name, Email address, Company name (optional), and Message content. This information is processed through Formspree and sent to our email. We use it solely to respond to your inquiry.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">Analytics</h4>
                      <p>We use Google Analytics to understand how visitors use our site. This collects: IP address (anonymized), Browser type, Pages visited, and Time spent on site.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">Cookies</h4>
                      <p>Our site uses cookies for Analytics (Google Analytics) and remembering your preferences. You can disable cookies in your browser settings.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">How We Use Your Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Respond to contact form inquiries</li>
                    <li>Improve website performance</li>
                    <li>Understand user behaviour</li>
                    <li>Send newsletters (if you opt-in)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Third-Party Services</h3>
                  <p>We use: <strong>Formspree</strong> (Contact form processing), <strong>Google Analytics</strong> (Site analytics), and <strong>YouTube</strong> (Video embeds). Each service has its own privacy policy.</p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Your Rights</h3>
                  <p>You have the right to access your data, request deletion, opt-out of analytics, and unsubscribe from emails.</p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Data Security</h3>
                  <p>We take reasonable measures to protect your data but cannot guarantee absolute security.</p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Children's Privacy</h3>
                  <p>Our site is not intended for children under 13. We do not knowingly collect data from children.</p>
                </section>

                <section>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Changes to This Policy</h3>
                  <p>We may update this policy. Changes will be posted on this page.</p>
                </section>

                <section className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Contact Us</h3>
                  <p>Questions? Email us at email@joelandemilia.com</p>
                </section>
              </div>

              <div className="mt-10">
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
