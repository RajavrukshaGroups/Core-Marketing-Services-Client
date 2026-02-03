
import React from 'react';
import Directory from '../components/Directory';
import { motion } from 'framer-motion';
import { ArrowRight, Image as ImageIcon, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const DirectoryPage = () => {
  // SVG Pattern mimicking the sage organic leaf texture provided in the reference image
  const leafPattern = `data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%238ba56f' stroke-width='1.5' stroke-opacity='0.6'%3E%3Cpath d='M60 0c15 30 15 60 0 90-15-30-15-60 0-90zM0 60c30 15 60 15 90 0-30-15-60-15-90 0z'/%3E%3Cpath d='M30 30c10 20 10 40 0 60-10-20-10-40 0-60zM90 90c10-20 10-40 0-60-10 20-10 40 0 60z'/%3E%3Cpath d='M60 15c5 10 5 20 0 30-5-10-5-20 0-30zM15 60c10 5 20 5 30 0-10-5-20-5-30 0z'/%3E%3Cpath d='M120 60c-30 15-60 15-90 0 30-15 60-15 90 0zM60 120c15-30 15-60 0-90-15 30-15 60 0 90z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div className="pt-20">
      <section className="bg-[#7b8e5d] py-32 overflow-hidden text-white relative">
        {/* Exact Leaf Pattern Background matching user image */}
        <div 
          className="absolute inset-0 opacity-100 pointer-events-none z-0"
          style={{ 
            backgroundImage: `url("${leafPattern}")`,
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Soft lighting overlay to enhance premium look */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/5 z-0 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-white/80 font-black uppercase tracking-[0.6em] mb-6 block text-xs drop-shadow-sm">Publishing & Assets</span>
            <h1 className="text-6xl md:text-[6rem] font-black tracking-tighter leading-none mb-10 drop-shadow-2xl">
              Elite  <span className="serif italic font-normal text-[#1b35ac]">Portfolios</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
              We design premium directories and high-impact advertisements that capture the essence of corporate luxury and retail precision.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Directory />

      {/* Visual Showcase Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#ED1C24] font-bold uppercase tracking-[0.3em] mb-4 block">Visual Showcase</span>
              <h2 className="text-5xl md:text-6xl font-black text-[#003399] tracking-tighter">
                Premium Layouts & <br /> High-Impact Print
              </h2>
            </div>
            <div className="pb-4">
               <p className="text-gray-500 max-w-xs font-medium">
                 A curated selection of our most prestigious corporate and retail publication projects.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Corporate Identity", 
                img: "https://image2url.com/r2/default/images/1770031194702-f61d5424-4239-4a5b-8f14-be829d7a478c.png",
                tag: "Brand Book"
              },
              { 
                title: "Product Catalogues", 
                img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
                tag: "B2B Print"
              },
              { 
                title: "Retail Flyers", 
                img: "https://cdn.pixabay.com/photo/2021/11/10/18/52/sale-6784621_1280.jpg",
                tag: "Promotion"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="group relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003399] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sky-400 mb-4 block">{item.tag}</span>
                  <h3 className="text-3xl font-black tracking-tight">{item.title}</h3>
                  <Link to="/services">
                    <button className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      View Project <ArrowRight size={14} className="text-[#ED1C24]" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <Link to="/services" className="block">
               <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-[48px] aspect-[4/3] p-16 flex flex-col justify-between border-8 border-white shadow-2xl cursor-pointer h-full"
               >
                  <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&q=80&w=1000" alt="B2B Directory" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#003399]/90 mix-blend-multiply transition-colors group-hover:bg-[#003399]/80" />
                  </div>
                  <div className="relative z-10 w-16 h-1 bg-sky-400" />
                  <div className="relative z-10">
                     <h3 className="text-5xl font-black text-white mb-4 tracking-tighter">Elite B2B Directory</h3>
                     <p className="text-blue-100/60 font-bold uppercase tracking-widest text-xs mb-8">Publishing Excellence & Industry Insights</p>
                     <div className="flex items-center gap-4 text-white font-black text-sm uppercase tracking-widest group-hover:text-sky-400 transition-colors">
                        Access Database <ArrowRight size={18} />
                     </div>
                  </div>
               </motion.div>
             </Link>

             <Link to="/services" className="block">
               <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-[48px] aspect-[4/3] p-16 flex flex-col justify-between border-8 border-white shadow-2xl cursor-pointer h-full"
               >
                  <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&q=80&w=1000" alt="Retail Catalogs" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#ED1C24]/90 mix-blend-multiply transition-colors group-hover:bg-[#ED1C24]/80" />
                  </div>
                  <div className="relative z-10 w-16 h-1 bg-white" />
                  <div className="relative z-10">
                     <h3 className="text-5xl font-black text-white mb-4 tracking-tighter">Retail Catalogs</h3>
                     <p className="text-red-100/60 font-bold uppercase tracking-widest text-xs mb-8">High Conversion Design & Distribution</p>
                     <div className="flex items-center gap-4 text-white font-black text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                        Download Sample <Download size={18} />
                     </div>
                  </div>
               </motion.div>
             </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
       <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
           <h2 className="text-4xl md:text-6xl font-black text-[#003399] tracking-tighter mb-8 leading-none">
             Ready to showcase your <br /> <span className="serif italic font-normal text-sky-500">Corporate Legacy?</span>
           </h2>
           <div className="flex flex-wrap justify-center gap-6 mt-12">
             <Link to="/contact">
               <button className="px-10 py-5 bg-[#003399] text-white rounded-3xl font-black text-xl shadow-2xl hover:bg-[#ED1C24] transition-all flex items-center gap-4 group">
                 Contact Design Team <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
             </Link>
             <Link to="/contact">
               <button className="px-10 py-5 border-2 border-[#003399] text-[#003399] rounded-3xl font-black text-xl hover:bg-gray-50 transition-all flex items-center gap-4">
                 Request Portfolio <ExternalLink />
               </button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;
