
import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const botanicalPattern = `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23003399' stroke-width='1' stroke-opacity='0.05'%3E%3Cpath d='M60 0c15 30 15 60 0 90-15-30-15-60 0-90zM0 60c30 15 60 15 90 0-30-15-60-15-90 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Minimal Header Section */}
      <section className="bg-[#f8faff] py-24 overflow-hidden relative border-b border-gray-50">
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none z-0"
          style={{ backgroundImage: `url("${botanicalPattern}")`, backgroundRepeat: 'repeat' }}
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.5em] mb-4 block text-[10px]">Visual Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#003399] tracking-tighter leading-none">
              Project <span className="serif italic font-normal text-sky-500">Showcase</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Pure Image Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-[32px] shadow-lg hover:shadow-2xl border-4 border-white group cursor-pointer"
              >
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle protective overlay on hover just for depth, no text */}
                <div className="absolute inset-0 bg-[#003399]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Minimalist Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#ED1C24]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Business CTA */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="glass rounded-[64px] p-16 lg:p-24 border border-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-[#003399] tracking-tighter mb-8 leading-tight">
                Architecting <br /> <span className="text-[#ED1C24]">Elite Results.</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">
                Our visual record speaks for itself. Ready to discuss how we can execute your brand's next major vision?
              </p>
            </div>

            <div className="relative z-10">
              <Link to="/contact">
                <button className="px-12 py-6 bg-[#003399] text-white rounded-3xl font-black text-xl shadow-2xl hover:bg-[#ED1C24] transition-all hover:scale-105 active:scale-95">
                  START COLLABORATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
