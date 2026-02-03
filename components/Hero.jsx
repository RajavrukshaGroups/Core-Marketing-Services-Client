
// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowRight, Play } from 'lucide-react';
// import MagneticButton from './MagneticButton';
// import HeroImg from '../assets/hero-img.png';
// import { useNavigate } from 'react-router-dom';


// export const Hero = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center pt-40 pb-12 overflow-hidden bg-[#FFFFFF]">
//       <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[160px] opacity-40 pointer-events-none" />
//       <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-50 rounded-full blur-[120px] opacity-30 pointer-events-none" />

//       <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="relative z-10"
//         >
//           <motion.div 
//             variants={itemVariants}
//             className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#003399]/5 border border-[#003399]/10 rounded-full text-[#003399] text-[10px] sm:text-sm font-bold mb-8 shadow-sm max-w-full"
//           >
//             <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ED1C24] animate-pulse" />
//             Core Marketing Services: Bengaluru's Elite Agency
//           </motion.div>
          
//           <motion.h1 
//             variants={itemVariants}
//             className="text-6xl md:text-[5.5rem] font-black leading-[1.05] text-[#003399] mb-8 tracking-tighter"
//           >
//             Where Strategy <br />
//             <span className="serif italic font-normal text-sky-500 relative inline-block">
//               Meets Success
//               <motion.svg 
//                 viewBox="0 0 400 20" 
//                 className="absolute -bottom-3 left-0 w-full h-4"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ delay: 1.2, duration: 1.2, ease: "easeInOut" }}
//               >
//                 <path d="M5 15 Q 100 5 200 15 T 395 15" fill="transparent" stroke="#ED1C24" strokeWidth="5" strokeLinecap="round" />
//               </motion.svg>
//             </span>
//           </motion.h1>

//           <motion.p 
//             variants={itemVariants}
//             className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium"
//           >
//             CMS integrates high-performance on-ground campaigns with digital elite networking 
//             to deliver unmatched growth for modern enterprises.
//           </motion.p>

//           {/* <motion.div 
//             variants={itemVariants}
//             className="flex flex-wrap items-center gap-8"
//           >
//             <MagneticButton>
//               <button className="px-10 py-5 bg-[#003399] text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-[#003399]/40 transition-all flex items-center gap-3 group relative overflow-hidden text-nowrap">
//                 <span className="relative z-10">Get Started</span>
//                 <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform" />
//                 <div className="absolute inset-0 bg-[#ED1C24] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
//               </button>
//             </MagneticButton>

//             <button className="flex items-center gap-4 text-[#003399] font-black group px-2 py-1">
//               <div className="w-14 h-14 rounded-full border-2 border-blue-100 flex items-center justify-center group-hover:border-[#003399] group-hover:scale-110 transition-all duration-300">
//                 <Play size={18} fill="#003399" />
//               </div>
//               <span className="uppercase tracking-[0.2em] text-xs">Explore Services</span>
//             </button>
//           </motion.div> */}
//             <motion.div
//   variants={itemVariants}
//   className="flex flex-wrap items-center gap-8"
// >
//   {/* Get Started */}
//   <MagneticButton>
//     <button
//       onClick={() => navigate('/contact')}
//       className="px-10 py-5 bg-[#003399] text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-[#003399]/40 transition-all flex items-center gap-3 group relative overflow-hidden text-nowrap"
//     >
//       <span className="relative z-10">Get Started</span>
//       <ArrowRight
//         size={22}
//         className="relative z-10 group-hover:translate-x-2 transition-transform"
//       />
//       <div className="absolute inset-0 bg-[#ED1C24] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
//     </button>
//   </MagneticButton>

//   {/* Explore Services */}
//   <button
//     onClick={() => navigate('/services')}
//     className="flex items-center gap-4 text-[#003399] font-black group px-2 py-1"
//   >
//     <div className="w-14 h-14 rounded-full border-2 border-blue-100 flex items-center justify-center group-hover:border-[#003399] group-hover:scale-110 transition-all duration-300">
//       <Play size={18} fill="#003399" />
//     </div>
//     <span className="uppercase tracking-[0.2em] text-xs">
//       Explore Services
//     </span>
//   </button>
// </motion.div>

//           <motion.div 
//             variants={itemVariants}
//             className="mt-16 pt-12 border-t border-gray-100 flex items-center gap-12"
//           >
//             <div className="flex flex-col">
//               <span className="text-3xl font-black text-[#003399]">1.2M+</span>
//               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Reach Generated</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-3xl font-black text-[#ED1C24]">14+</span>
//               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Years Experience</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-3xl font-black text-sky-500">250+</span>
//               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Elite Partners</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9, x: 50 }}
//           animate={{ opacity: 1, scale: 1, x: 0 }}
//           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
//           className="relative lg:h-[750px] flex items-center justify-center"
//         >
//           <div className="relative z-10 w-full max-w-lg aspect-square">
//             <motion.div 
//               animate={{ y: [0, -25, 0] }}
//               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
//               className="w-full h-full bg-gradient-to-br from-white to-blue-50/50 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,51,153,0.15)] flex items-center justify-center p-16 border border-white relative overflow-hidden group"
//             >
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,174,239,0.05)_0%,transparent_100%)]" />
              
//               <img 
//                 src={HeroImg}
//                 alt="Core Marketing Services Logo" 
//                 className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,51,153,0.25)] group-hover:scale-105 transition-transform duration-700"
//                 onError={(e) => { e.currentTarget.src = "https://image2url.com/r2/default/images/1770018534258-172ba9ce-c661-452b-87c1-dbf17ae827a3.png" ; }}
//               />
              
//               <motion.div 
//                 animate={{ x: [-5, 5, -5] }}
//                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//                 className="absolute top-12 left-12 glass px-6 py-4 rounded-3xl shadow-xl border border-white/60"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 rounded-full bg-green-500" />
//                   <span className="text-xs font-black text-[#003399] uppercase tracking-widest">Active Growth</span>
//                 </div>
//               </motion.div>

//               <motion.div 
//                 animate={{ y: [5, -5, 5] }}
//                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//                 className="absolute bottom-12 right-12 glass px-6 py-4 rounded-3xl shadow-xl border border-white/60"
//               >
//                 <span className="text-2xl font-black text-[#ED1C24] tracking-tight">98% Success</span>
//               </motion.div>
//             </motion.div>

//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-blue-50 rounded-full opacity-40 -z-10" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-blue-50/50 rounded-full opacity-20 -z-10" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagneticButton from './MagneticButton';
//import HeroImg from '../assets/hero-img.png';
import HeroImg from '../assets/galler7.jpg';

export const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-12 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-red-50 rounded-full blur-[120px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#003399]/5 border border-[#003399]/10 rounded-full text-[#003399] text-sm font-bold mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#ED1C24] animate-pulse" />
            Core Marketing Services: Bengaluru&apos;s Elite Agency
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-[5.5rem] font-black leading-[1.05] text-[#003399] mb-8 tracking-tighter"
          >
            Where Strategy <br />
            <span className="serif italic font-normal text-sky-500 relative inline-block">
              Meets Success
              <motion.svg
                viewBox="0 0 400 20"
                className="absolute -bottom-3 left-0 w-full h-4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1.2 }}
              >
                <path
                  d="M5 15 Q 100 5 200 15 T 395 15"
                  fill="transparent"
                  stroke="#ED1C24"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium"
          >
            CMS integrates high-performance on-ground campaigns with digital elite
            networking to deliver unmatched growth for modern enterprises.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-8"
          >
            {/* Get Started */}
            <MagneticButton>
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-5 bg-[#003399] text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-[#003399]/40 transition-all flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight
                  size={22}
                  className="relative z-10 group-hover:translate-x-2 transition-transform"
                />
                <div className="absolute inset-0 bg-[#ED1C24] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </MagneticButton>

            {/* Explore Services */}
            <button
              onClick={() => navigate('/services')}
              className="flex items-center gap-4 text-[#003399] font-black group px-2 py-1"
            >
              <div className="w-14 h-14 rounded-full border-2 border-blue-100 flex items-center justify-center group-hover:border-[#003399] group-hover:scale-110 transition-all duration-300">
                <Play size={18} fill="#003399" />
              </div>
              <span className="uppercase tracking-[0.2em] text-xs">
                Explore Services
              </span>
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-gray-100 flex items-center gap-12"
          >
            <div>
              <span className="text-3xl font-black text-[#003399]">1.2M+</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Reach Generated
              </span>
            </div>
            <div>
              <span className="text-3xl font-black text-[#ED1C24]">14+</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Years Experience
              </span>
            </div>
            <div>
              <span className="text-3xl font-black text-sky-500">250+</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Elite Partners
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="relative lg:h-[750px] flex items-center justify-center"
        >
          <div className="relative z-10 w-full max-w-lg aspect-square">
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="w-full h-full flex items-center justify-center p-10 border border-white"
            >
              <img
                src={HeroImg}
                alt="Core Marketing Services"
                className="w-[80%] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,51,153,0.25)]"
              />
              {/* <motion.div 
                animate={{ x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-12 left-12 glass px-6 py-4 rounded-3xl shadow-xl border border-white/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-black text-[#003399] uppercase tracking-widest">Active Growth</span>
                </div>
              </motion.div> */}

              {/* <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-12 right-12 glass px-6 py-4 rounded-3xl shadow-xl border border-white/60"
              >
                <span className="text-2xl font-black text-[#ED1C24] tracking-tight">98% Success</span>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
