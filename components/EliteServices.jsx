
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TrendingUp, Globe, ShieldCheck, Instagram, Linkedin, Facebook, ExternalLink } from 'lucide-react';

const EliteServices = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const yTranslate = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), springConfig);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const features = [
    { title: "Digital Marketing Elite", val: "Partnership", label: "With Digital Elite Services", icon: <Globe className="text-sky-900" />, isPartner: true },
    { title: "Predictive ROI", val: "4.8x", label: "Industry Benchmark", icon: <TrendingUp className="text-red-500" /> },
    { title: "Cognitive Data", val: "18M+", label: "Insights Per Day", icon: <div className="text-blue-800 font-bold">18M</div> },
  ];

  const socialNodes = [
    { icon: <Instagram size={14} />, color: "#ff3a7b", angle: 0 },
    { icon: <Linkedin size={14} />, color: "#dde6eb", angle: 120 },
    { icon: <Facebook size={14} />, color: "#ffffff", angle: 240 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="elite-experience"
      className="relative py-32 bg-[#fcfcfc] text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="elite-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#elite-grid)" />
        </svg>
      </div>

      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none z-0 mix-blend-screen"
        animate={{
          left: mousePos.x - 400,
          top: mousePos.y - 400,
          background: `radial-gradient(circle, rgba(0, 174, 239, 0.1) 0%, rgba(237, 28, 36, 0.05) 100%)`
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 200, mass: 0.1 }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div style={{ y: yTranslate }}>
            <span className="text-[#0a1114] font-black uppercase tracking-[0.5em] mb-6 block text-xs">Architectural Precision</span>
            <h2 className="text-6xl md:text-[5rem] text-[#062688] font-black mb-10 tracking-tight leading-[1]">Digital Elite Experience</h2>
            <p className="max-w-3xl mx-auto text-xl text-[#0a1114] font-medium leading-relaxed">
              Core Marketing Services collaborates with <span className="text-[#065470] font-bold">Digital Elite Services</span> to engineer multi-layered marketing environments where technology meets strategy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square max-w-[600px] mx-auto w-full group">
            <div className="absolute inset-0 bg-[#002663]/100 rounded-[60px] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
              <svg viewBox="0 0 500 500" className="w-full h-full opacity-80">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00AEEF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00AEEF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[...Array(6)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx="250" cy="250" r={60 + i * 40}
                    fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1"
                    strokeDasharray="5 15"
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ repeat: Infinity, duration: 20 + i * 5, ease: "linear" }}
                  />
                ))}
                <motion.path 
                  d="M250 100 Q 350 250 250 400 T 250 100"
                  fill="none" stroke="url(#lineGrad)" strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
                <circle cx="250" cy="250" r="45" fill="#003399" stroke="#00AEEF" strokeWidth="2" />
                <motion.circle 
                  cx="250" cy="250" r="45" fill="#00AEEF" opacity="0.15"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                {socialNodes.map((node, i) => {
                  const x = 250 + 160 * Math.cos((node.angle * Math.PI) / 180);
                  const y = 250 + 160 * Math.sin((node.angle * Math.PI) / 180);
                  return (
                    <motion.g 
                      key={i}
                      animate={{ 
                        x: [0, Math.random() * 10 - 5, 0],
                        y: [0, Math.random() * 10 - 5, 0]
                      }}
                      transition={{ repeat: Infinity, duration: 3 + i, ease: "easeInOut" }}
                    >
                      <circle cx={x} cy={y} r="25" fill="#003399" stroke={node.color} strokeWidth="2" opacity="0.9" />
                      <foreignObject x={x - 7} y={y - 7} width="14" height="14">
                        <div style={{ color: node.color }}>{node.icon}</div>
                      </foreignObject>
                    </motion.g>
                  );
                })}
              </svg>
              <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl text-[#003399]">
                  <ShieldCheck size={40} />
                </div>
                <span className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-sky-400">CMS x DES JOINT VENTURE</span>
              </motion.div>
            </div>
          </div>

          <div className="space-y-16">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="flex items-start gap-10 group"
              >
                <div className="w-20 h-20 rounded-[24px] bg-white/30 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-white group-hover:text-[#003399] transition-all duration-500">
                  {f.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-5xl font-black text-[#003399] tracking-tighter">{f.val}</span>
                    <span className="text-[#000143] font-black uppercase tracking-widest text-[10px]">{f.label}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-4">{f.title}</h4>
                  {f.isPartner ? (
                    <a 
                      href="https://digitaleliteservices.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#ED1C24] font-black uppercase tracking-widest text-xs hover:underline cursor-pointer"
                    >
                      Visit digitaleliteservices.in <ExternalLink size={12} />
                    </a>
                  ) : (
                    <p className="text-blue-900/100 text-sm leading-relaxed max-w-sm">
                      Our automated intelligence cycles deliver real-time growth indicators 
                      and strategic market positioning.
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://digitaleliteservices.in/", "_blank")}
              className="w-full py-8 bg-[#ED1C24] text-white rounded-[24px] font-black text-2xl tracking-tighter shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10">ACCESS DIGITAL ELITE PORTAL</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteServices;
