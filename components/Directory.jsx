
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Check, Layers, Image as ImageIcon, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const DirectorySVG = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 text-sky-400 mb-4">
    <motion.path
      d="M20 80 Q 20 20 50 20 Q 80 20 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {[25, 35, 45, 55].map((y, i) => (
      <motion.line
        key={i}
        x1="35" y1={y} x2="65" y2={y}
        stroke="currentColor"
        strokeWidth="1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: i * 0.2, duration: 1, repeat: Infinity, repeatDelay: 1 }}
      />
    ))}
    <motion.rect
      x="25" y="75" width="50" height="5"
      fill="currentColor"
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
);

const LaunchSVG = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 text-white mb-4">
    {[10, 20, 30].map((r, i) => (
      <motion.circle
        key={i}
        cx="50" cy="50" r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
    <motion.path
      d="M50 20 L80 80 L50 70 L20 80 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.svg>
);

const AdSVG = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 text-[#003399] mb-4">
    <motion.rect
      x="10" y="10" width="80" height="80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="5 5"
    />
    <motion.path
      d="M20 30 H80 M20 45 H60 M20 60 H70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.rect
      x="15" y="15" width="20" height="10"
      fill="currentColor"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.svg>
);

const DigitalSVG = () => (
  <motion.svg viewBox="0 0 100 100" className="w-16 h-16 text-white mb-4">
    <motion.circle
      cx="50" cy="50" r="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    {[0, 120, 240].map((angle, i) => {
      const x = 50 + 30 * Math.cos((angle * Math.PI) / 180);
      const y = 50 + 30 * Math.sin((angle * Math.PI) / 180);
      return (
        <motion.g key={i}>
          <motion.line
            x1="50" y1="50" x2={x} y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
          <motion.circle
            cx={x} cy={y} r="5"
            fill="currentColor"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          />
        </motion.g>
      );
    })}
  </motion.svg>
);

const Directory = () => {
  return (
    <section id="directory" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sky-500 font-bold uppercase tracking-[0.3em] mb-4 block">Physical & Digital Assets</span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#003399] mb-8 tracking-tighter">
              Directory & <br /> Advertisement
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              We create high-impact corporate directories and advertising brochures that resonate with premium audiences. 
              Our design team ensures your brand is presented with absolute prestige and technical precision.
            </p>

            <div className="space-y-6">
              {[
                "Custom Corporate Directories",
                "High-End Product Launch Materials",
                "Digital Interactive Catalogues",
                "Pan-India Distribution Support"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-[#003399] font-bold"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-sky-500">
                    <Check size={14} />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-blue-50/50 rounded-[60px] blur-3xl opacity-50 -z-10" />
            
            <motion.div 
              whileHover={{ rotateY: 10, scale: 1.05, y: -10 }}
              className="col-span-1 h-[320px] bg-[#003399] rounded-[40px] p-10 flex flex-col justify-between shadow-2xl border border-white/10 group cursor-default"
            >
              <DirectorySVG />
              <div>
                <h4 className="text-white font-black text-2xl tracking-tight">Elite Directory</h4>
                <p className="text-blue-200/60 font-bold uppercase tracking-widest text-[10px] mt-1">2024 Edition Portfolio</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ rotateY: -10, scale: 1.05, y: -10 }}
              className="col-span-1 h-[320px] mt-12 bg-[#ED1C24] rounded-[40px] p-10 flex flex-col justify-between shadow-2xl border border-white/10 group cursor-default"
            >
              <LaunchSVG />
              <div>
                <h4 className="text-white font-black text-2xl tracking-tight">Product Launch</h4>
                <p className="text-red-200/60 font-bold uppercase tracking-widest text-[10px] mt-1">Visual Storytelling</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ rotateY: 10, scale: 1.05, y: -10 }}
              className="col-span-1 h-[320px] -mt-12 bg-white rounded-[40px] p-10 flex flex-col justify-between shadow-2xl border border-gray-100 group cursor-default"
            >
              <AdSVG />
              <div>
                <h4 className="text-[#003399] font-black text-2xl tracking-tight">Premium Ads</h4>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mt-1">High Fidelity Layouts</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ rotateY: -10, scale: 1.05, y: -10 }}
              className="col-span-1 h-[320px] bg-sky-500 rounded-[40px] p-10 flex flex-col justify-between shadow-2xl border border-white/10 group cursor-default"
            >
              <DigitalSVG />
              <div>
                <h4 className="text-white font-black text-2xl tracking-tight">Digital Copy</h4>
                <p className="text-white/70 font-bold uppercase tracking-widest text-[10px] mt-1">Real-time Cloud Access</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;
