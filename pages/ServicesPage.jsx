
import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import EliteServices from '../components/EliteServices';
import { SERVICES } from '../constants';
import * as Lucide from 'lucide-react';

const ServicesPage = () => {
  // Botanical line-art pattern mimicking the user's provided cream/green leaf image
  const botanicalPattern = `data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%234b5e3b' stroke-width='0.5' stroke-opacity='0.2'%3E%3Cpath d='M50 100c30-40 70-40 100 0s30 80 0 120-70 40-100 0-30-80 0-120z'/%3E%3Cpath d='M50 100c10 20 20 40 50 40s40-20 50-40'/%3E%3Cpath d='M70 120c5 15 15 25 30 25s25-10 30-25'/%3E%3Cpath d='M150 250c30-40 70-40 100 0s30 80 0 120-70 40-100 0-30-80 0-120z'/%3E%3Cpath d='M150 250c10 20 20 40 50 40s40-20 50-40'/%3E%3Cpath d='M300 50c30-40 70-40 100 0s30 80 0 120-70 40-100 0-30-80 0-120z'/%3E%3Cpath d='M300 50c10 20 20 40 50 40s40-20 50-40'/%3E%3Cpath d='M50 300c15-20 35-20 50 0s15 40 0 60-35 20-50 0-15-40 0-60z'/%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div className="pt-20">
      <section className="bg-[#f2efea] py-32 overflow-hidden border-b border-gray-100 relative">
        {/* The requested leaf background cover */}
        <div 
          className="absolute inset-0 opacity-100 pointer-events-none z-0"
          style={{ 
            backgroundImage: `url("${botanicalPattern}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 400px'
          }}
        />
        
        {/* Soft radial vignette for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(242,239,234,0.4)_100%)] z-0 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <span className="text-[#4b5e3b] font-black uppercase tracking-[0.5em] mb-6 block text-xs drop-shadow-sm">The Suite</span>
              <h1 className="text-5xl md:text-7xl font-black text-[#003399] tracking-tighter leading-none mb-4">
                Elite Marketing <br/> <span className="serif italic font-normal text-[#ED1C24]">Solutions</span>
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl text-gray-700 max-w-sm mb-4 font-medium leading-relaxed drop-shadow-sm"
            >
              Architecting visibility, engagement, and conversion through high-fidelity digital systems and premium on-ground strategies.
            </motion.p>
          </div>
        </div>
      </section>

      <EliteServices />

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 text-center mb-20">
          <h2 className="text-5xl font-black text-[#003399] tracking-tighter">Detailed Capabilities</h2>
          <p className="mt-4 text-gray-500 font-medium">A deep dive into our specialized corporate verticals.</p>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((s, i) => {
            const Icon = Lucide[s.icon] || Lucide.Zap;
            return (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[48px] shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full group"
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#003399]/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white text-[#003399] flex items-center justify-center shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className="p-12 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-[#003399] mb-6">{s.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed flex-grow">{s.description}</p>
                  
                  {s.collaborator && (
                    <div className="mt-6 text-[10px] font-black text-[#ED1C24] uppercase tracking-widest bg-red-50 py-2 px-4 rounded-full inline-block w-fit">
                      In Partnership with {s.collaborator}
                    </div>
                  )}

                  <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-black text-[#003399]/40 uppercase tracking-widest">Vertical {i + 1 < 10 ? `0${i+1}` : i+1}</span>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-blue-100" />
                       <div className="w-2 h-2 rounded-full bg-blue-200" />
                       <div className="w-2 h-2 rounded-full bg-[#ED1C24]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
