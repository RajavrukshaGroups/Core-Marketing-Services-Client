
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Clock, Globe } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="glass rounded-[48px] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-[#003399] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h2 className="text-5xl font-extrabold mb-10 relative z-10 leading-tight">
              Get In Tuch<br />
            </h2>
            
            <div className="space-y-10 relative z-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-sky-400" />
                </div>
                <div>
                  {/* <h4 className="font-bold text-xl mb-1">Bengaluru Studio</h4> */}
                  <p className="text-blue-100 leading-relaxed text-sm">
                    #62, Parishrama, Shekhar Layout, <br />
                    1st Main, 1st Cross, J.P. Nagar 8th Phase, <br />
                    Near Jubilee Public School, <br />
                    Bengaluru - 560 083
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-sky-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-blue-100 text-sm font-medium">90082 33973</p>
                  <p className="text-blue-100 text-sm font-medium">98451 05338</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-sky-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <p className="text-blue-100 text-sm font-medium">cmsays2025@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-20 relative z-10">
              <div className="w-full p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={16} className="text-sky-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Operating Hours</span>
                </div>
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-white/60">Mon - Fri</span>
                  <span>09:00 AM - 07:00 PM</span>
                </div>
                <div className="flex justify-between text-xs font-bold mt-2">
                  <span className="text-white/60">Saturday</span>
                  <span>10:00 AM - 04:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Showcase Side */}
          <div className="lg:w-3/5 relative min-h-[500px] bg-gray-50 overflow-hidden">
            {/* Stylized Map Visual / Placeholder */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Bengaluru Map View" 
                className="w-full h-full object-cover opacity-20 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/80" />
            </div>

            <div className="relative z-10 p-12 lg:p-20 h-full flex flex-col justify-center">
              <span className="text-[#ED1C24] font-black uppercase tracking-[0.3em] mb-4 block">Connectivity</span>
              <h3 className="text-4xl font-extrabold text-[#003399] mb-8 tracking-tight">Direct Access to <br /> Bengaluru's Growth</h3>
              
              <p className="text-lg text-gray-600 mb-12 max-w-md font-medium leading-relaxed">
                Located in the heart of J.P. Nagar, engineered for high-performance marketing collaboration. 
                Visit us to discuss your brand's next elite move.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003399] flex items-center justify-center mb-4 group-hover:bg-[#003399] group-hover:text-white transition-colors">
                    <Globe size={20} />
                  </div>
                  <h5 className="font-black text-[#003399] text-sm mb-1">Global Standards</h5>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">ISO 9001:2015 Certified</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 group hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ED1C24] flex items-center justify-center mb-4 group-hover:bg-[#ED1C24] group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <h5 className="font-black text-[#003399] text-sm mb-1">Strategic Hub</h5>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">J.P. Nagar 8th Phase</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Core+Marketing+Services+J.P.+Nagar+Bengaluru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#ED1C24] text-white rounded-2xl font-black text-lg flex items-center gap-4 shadow-xl hover:shadow-red-200 transition-all hover:-translate-y-1 active:scale-95"
                >
                  GET DIRECTIONS <ExternalLink size={20} />
                </a>
                <a 
                  href="tel:9008233973"
                  className="px-10 py-5 border-2 border-[#003399] text-[#003399] rounded-2xl font-black text-lg flex items-center gap-4 hover:bg-[#003399] hover:text-white transition-all active:scale-95"
                >
                  CALL NOW <Phone size={20} />
                </a>
              </div>
            </div>

            {/* Decorative Map Pin Animation */}
            <div className="absolute bottom-10 right-10 hidden xl:block">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#ED1C24] border border-gray-100"
              >
                <MapPin size={32} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
