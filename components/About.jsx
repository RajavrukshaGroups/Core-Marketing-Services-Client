
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Target, ShieldCheck } from 'lucide-react';
import ScrubHighlight from './ScrubHighlight';
import gallery8 from '../assets/galler8.jpg';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Ornamental Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
        style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/p6.png')`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-transparent to-white z-0 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-40 z-0" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,51,153,0.1)] border-[12px] border-white group bg-white">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={gallery8} 
                alt="CMS Leadership" 
                className="w-full h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003399]/90 via-[#003399]/20 to-transparent flex flex-col justify-end p-16">
                <span className="text-white font-black text-7xl tracking-tighter mb-2">14+</span>
                <span className="text-blue-200 uppercase tracking-[0.4em] font-black text-xs">Years of Corporate Excellence</span>
              </div>
            </div>
            
            {/* Floating Detail Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -right-12 top-24 glass p-10 rounded-[32px] shadow-2xl border border-white/60 hidden xl:block max-w-[280px]"
            >
              <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-4">Strategic Ethos</h4>
              <p className="text-lg font-bold text-gray-800 leading-tight">Architecture for digital market leadership.</p>
              <div className="w-12 h-1 bg-[#ED1C24] mt-6 rounded-full" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 lg:p-0"
          >
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block text-[#ED1C24] font-black uppercase tracking-[0.5em] mb-6 text-[10px]"
              >
                The Visionaries
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-black text-[#003399] mb-10 tracking-tight leading-[1.1]">
                Elite Strategy <br />
                <span className="serif italic font-normal text-sky-500">For Fast-Paced Markets</span>
              </h2>
              
              <div className="space-y-10">
                <ScrubHighlight 
                  className="text-2xl font-bold text-gray-800 leading-relaxed"
                  text="Marketing is an essential element of business strategy, necessitating ongoing attention in the current fast-paced market environment."
                />
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-500 leading-relaxed font-medium"
                >
                  Effective marketing encompasses maintaining <span className="text-[#003399] font-bold underline decoration-[#ED1C24] decoration-2 underline-offset-4">brand visibility</span>, customer education on new products, and clear communication of promotional offers. Our team is dedicated to supporting your marketing endeavors.
                </motion.p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 group/icon">
                  <div className="w-10 h-10 rounded-xl bg-[#003399]/5 flex items-center justify-center text-[#003399] border border-[#003399]/10 group-hover/icon:bg-[#ED1C24] group-hover/icon:text-white transition-colors">
                     <BarChart3 size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Actionable Insights</span>
                </div>
                <div className="flex items-center gap-4 group/icon">
                  <div className="w-10 h-10 rounded-xl bg-[#ED1C24]/5 flex items-center justify-center text-[#ED1C24] border border-[#ED1C24]/10 group-hover/icon:bg-[#003399] group-hover/icon:text-white transition-colors">
                     <Target size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Business Outcomes</span>
                </div>
                <div className="flex items-center gap-4 group/icon">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/5 flex items-center justify-center text-sky-500 border border-sky-500/10 group-hover/icon:bg-sky-500 group-hover/icon:text-white transition-colors">
                     <ShieldCheck size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Brand Building</span>
                </div>
                <div className="flex items-center gap-4 group/icon">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200 group-hover/icon:bg-[#003399] group-hover/icon:text-white transition-colors">
                     <ArrowRight size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">Professional Reach</span>
                </div>
              </div>

              <motion.button 
                whileHover={{ x: 10 }}
                className="mt-16 flex items-center gap-6 group/btn"
              >
                <span className="text-lg font-black text-[#003399] uppercase tracking-widest border-b-2 border-[#ED1C24]">Discover Our Ethos</span>
                <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-[#003399] group-hover/btn:bg-[#003399] group-hover/btn:text-white group-hover/btn:border-[#003399] transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
