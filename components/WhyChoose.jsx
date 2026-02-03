
import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_US } from '../constants';

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 bg-[#003399] relative overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute top-0 right-0 p-20 opacity-10">
        <motion.svg 
          width="400" height="400" viewBox="0 0 400 400"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="2" strokeDasharray="20 10" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sky-400 font-bold uppercase tracking-[0.4em] mb-4 block">Our Legacy</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white">Why Partner with CMS?</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 hidden md:block -translate-x-1/2" />

          <div className="space-y-24">
            {WHY_CHOOSE_US.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                    <span className="text-6xl font-black text-sky-400 mb-2 opacity-50">{item.year}</span>
                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Central Dot */}
                <div className="relative z-10 hidden md:block">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    className="w-8 h-8 rounded-full bg-[#ED1C24] border-4 border-[#003399] shadow-[0_0_20px_rgba(237,28,36,0.6)]"
                  />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
