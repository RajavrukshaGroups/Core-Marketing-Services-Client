
import React from 'react';
import { motion } from 'framer-motion';
import * as Lucide from 'lucide-react';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#003399] font-bold uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#003399] tracking-tighter">
              Bespoke Corporate <br /> Capabilities
            </h2>
          </div>
          <div className="hidden lg:block text-right pb-4">
             <p className="text-gray-500 max-w-xs ml-auto font-medium">
               From visibility to on-ground impact, we offer a full-spectrum marketing stack for modern enterprises.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = Lucide[service.icon] || Lucide.Zap;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-white"
              >
                {/* Service Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003399] via-[#003399]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-10 h-full flex flex-col justify-end text-white">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-[#ED1C24] group-hover:border-transparent transition-all duration-500">
                    <IconComponent size={28} className="text-white" />
                  </div>

                  {service.collaborator && (
                    <div className="mb-4 inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-sky-400 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      Partner: {service.collaborator}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-sky-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    {service.url ? (
                      <a 
                        href={service.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ED1C24] hover:text-white transition-colors"
                      >
                        Launch Portal <Lucide.ExternalLink size={14} />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50">
                        CMS Exclusive
                      </div>
                    )}
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform border border-white/20">
                      <Lucide.ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 text-[15vw] font-black text-gray-200/10 leading-none -z-0 pointer-events-none select-none">
        CAPABILITIES
      </div>
    </section>
  );
};

export default Services;
