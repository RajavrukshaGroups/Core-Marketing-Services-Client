
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Instagram, Linkedin, Twitter, ArrowUpCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import CMSLogo from '../assets/cms-logo.png';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const footerLinks = [
//     { name: 'About CMS', path: '/about' },
//     { name: 'Elite Services', path: '/services' },
//     { name: 'Directory Suite', path: '/directory' },
//     { name: 'Showcase Gallery', path: '/gallery' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <footer className="bg-white pt-24 pb-12 overflow-hidden border-t border-gray-50">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
//           <div className="col-span-1">
//             <Link to="/" className="flex items-center gap-2 mb-8 group">
//               <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
//                 <img src={CMSLogo} alt="Core Marketing Services" className="w-full h-full object-contain" />
//               </div>
//               <span className="text-[#003399] font-extrabold text-xl tracking-tighter">Core Marketing <span className="text-[#e10404] font-extrabold text-xl tracking-tighter">Services</span></span>
//             </Link>
//             <p className="text-gray-500 leading-relaxed mb-8 font-medium">
//               Core Marketing Services (CMS) pioneers high-performance marketing and digital elite solutions for Bengaluru's most ambitious brands since 2010.
//             </p>
//             {/* <div className="flex gap-4">
//               {[Instagram, Linkedin, Twitter].map((Icon, i) => (
//                 <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#003399] hover:bg-[#003399] hover:text-white transition-all">
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div> */}
//           </div>

//           <div>
//             <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
//             <ul className="space-y-4">
//               {footerLinks.map(link => (
//                 <li key={link.name}>
//                   <Link to={link.path} className="text-gray-500 hover:text-[#ED1C24] transition-colors font-bold text-sm uppercase tracking-wide">{link.name}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* <div>
//             <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">Newsletter</h4>
//             <p className="text-sm text-gray-500 mb-6 font-medium">Stay ahead with Core Marketing Services insights.</p>
//             <div className="flex gap-2">
//               <input 
//                 type="email" 
//                 placeholder="Email address" 
//                 className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-200 flex-1 text-sm font-medium"
//               />
//               <button className="w-12 h-12 bg-[#003399] text-white rounded-xl flex items-center justify-center hover:bg-[#ED1C24] transition-colors">
//                 &rarr;
//               </button>
//             </div>
//           </div> */}
//         </div>

//         <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
//           <p className="text-sm text-gray-400 font-medium">
//             &copy; {new Date().getFullYear()} Core Marketing Services (CMS). All rights reserved by <a
//             href="https://digitaleliteservices.in/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm text-blue-900 font-medium hover:text-blue-600 hover:underline transition"
//           >
//             Digital Elite service
//           </a>
//           </p>
//           {/* <div className="flex items-center gap-2 text-[#003399] font-bold uppercase tracking-widest text-[10px]">
//             Designed for Elite Brands <span className="text-[#ED1C24]">❤</span> Bengaluru
//           </div> */}
//           <button 
//             onClick={scrollToTop}
//             className="group flex items-center gap-2 text-gray-400 hover:text-[#003399] transition-colors"
//           >
//             <span className="text-xs font-bold uppercase tracking-widest">Back to Top</span>
//             <ArrowUpCircle size={24} className="group-hover:-translate-y-1 transition-transform" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpCircle } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import CMSLogo from '../assets/cms-logo.png';

// const Footer = () => {
//   // Smooth scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Navigation links
//   const footerLinks = [
//     { name: 'About CMS', path: '/about' },
//     { name: 'Elite Services', path: '/services' },
//     { name: 'Directory Suite', path: '/directory' },
//     { name: 'Showcase Gallery', path: '/gallery' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
//       <div className="container mx-auto px-6 lg:px-12">

//         {/* Top Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20"
//         >
//           {/* Brand */}
//           <div>
//             <Link to="/" className="flex items-center gap-3 mb-8 group">
//               <div className="w-11 h-11 transition-transform group-hover:scale-110">
//                 <img
//                   src={CMSLogo}
//                   alt="Core Marketing Services Logo"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <span className="text-[#003399] font-extrabold text-xl tracking-tight">
//                 Core Marketing <span className="text-[#e10404]">Services</span>
//               </span>
//             </Link>

//             <p className="text-gray-500 leading-relaxed font-medium max-w-md">
//               Core Marketing Services (CMS) delivers high-performance marketing and
//               elite digital solutions for Bengaluru&apos;s most ambitious brands
//               since 2010.
//             </p>

//             {/* Social Icons */}
//             {/*
//             <div className="flex gap-4 mt-8">
//               {[Instagram, Linkedin, Twitter].map((Icon, i) => (
//                 <a
//                   key={i}
//                   href="#"
//                   className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#003399] hover:bg-[#003399] hover:text-white transition-all"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//             */}
//           </div>

//           {/* Navigation */}
//           <div>
//             <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">
//               Navigation
//             </h4>

//             <ul className="space-y-4">
//               {footerLinks.map(({ name, path }) => (
//                 <li key={name}>
//                   <Link
//                     to={path}
//                     className="text-gray-500 hover:text-[#ED1C24] transition-colors font-bold text-sm uppercase tracking-wide"
//                   >
//                     {name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">
//               Contact
//             </h4>

//             <ul className="space-y-4 text-sm text-gray-500 font-medium">
//               <li>
//                 <span className="block font-bold text-gray-600">Head Office</span>
//                 Bengaluru, Karnataka, India
//               </li>

//               <li>
//                 <span className="block font-bold text-gray-600">Email</span>
//                 <a
//                   href="mailto:info@coremarketingservices.in"
//                   className="hover:text-[#ED1C24] transition"
//                 >
//                   info@coremarketingservices.in
//                 </a>
//               </li>

//               <li>
//                 <span className="block font-bold text-gray-600">Phone</span>
//                 <a
//                   href="tel:+919999999999"
//                   className="hover:text-[#ED1C24] transition"
//                 >
//                   +91 99999 99999
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           {/*
//           <div>
//             <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">
//               Newsletter
//             </h4>
//             <p className="text-sm text-gray-500 mb-6 font-medium">
//               Stay ahead with Core Marketing Services insights.
//             </p>
//             <div className="flex gap-2">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-blue-200 flex-1 text-sm font-medium"
//               />
//               <button className="w-12 h-12 bg-[#003399] text-white rounded-xl flex items-center justify-center hover:bg-[#ED1C24] transition-colors">
//                 &rarr;
//               </button>
//             </div>
//           </div>
//           */}
//         </motion.div>

//         {/* Bottom Footer */}
//         <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
//           <p className="text-sm text-gray-400 font-medium text-center md:text-left">
//             &copy; {new Date().getFullYear()} Core Marketing Services (CMS). All rights
//             reserved by{' '}
//             <a
//               href="https://digitaleliteservices.in/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-900 hover:text-blue-600 hover:underline transition"
//             >
//               Digital Elite Service
//             </a>
//           </p>

//           {/* Back to Top */}
//           <button
//             onClick={scrollToTop}
//             className="group flex items-center gap-2 text-gray-400 hover:text-[#003399] transition-colors"
//           >
//             <span className="text-xs font-bold uppercase tracking-widest">
//               Back to Top
//             </span>
//             <ArrowUpCircle
//               size={24}
//               className="transition-transform group-hover:-translate-y-1"
//             />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CMSLogo from '../assets/cms-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'About CMS', path: '/about' },
    { name: 'Elite Services', path: '/services' },
    { name: 'Directory Suite', path: '/directory' },
    { name: 'Showcase Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Top Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20"
        >
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-11 h-11 transition-transform group-hover:scale-110">
                <img
                  src={CMSLogo}
                  alt="Core Marketing Services Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[#003399] font-extrabold text-xl tracking-tight">
                Core Marketing <span className="text-[#e10404]">Services</span>
              </span>
            </Link>

            <p className="text-gray-500 leading-relaxed font-medium max-w-md">
              Core Marketing Services (CMS) delivers high-performance marketing,
              directory management, events, exhibitions, and elite brand solutions
              for Bengaluru&apos;s growing businesses since 2010.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">
              Navigation
            </h4>

            <ul className="space-y-4">
              {footerLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-[#ED1C24] transition-colors font-bold text-sm uppercase tracking-wide"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#003399] font-black uppercase tracking-widest text-[10px] mb-8">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <span className="block font-bold text-gray-600">Address</span>
                #62, Parishrama, Shekhar Layout, 1 Main, 1 Cross,<br />
                JP Nagar 8th Phase, Near Jubilee Public School,<br />
                Bengaluru – 560 083
              </li>

              <li>
                <span className="block font-bold text-gray-600">Email</span>
                <a
                  href="mailto:cmsays2025@gmail.com"
                  className="hover:text-[#ED1C24] transition"
                >
                  cmsays2025@gmail.com
                </a>
              </li>

              <li>
                <span className="block font-bold text-gray-600">Phone</span>
                <a
                  href="tel:9008233973"
                  className="hover:text-[#ED1C24] transition block"
                >
                  90082 33973
                </a>
                <a
                  href="tel:9845105338"
                  className="hover:text-[#ED1C24] transition block"
                >
                  98451 05338
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-gray-400 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Core Marketing Services (CMS). All rights
            reserved by{' '}
            <a
              href="https://digitaleliteservices.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:text-blue-600 hover:underline transition"
            >
              Digital Elite Service
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-[#003399] transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Back to Top
            </span>
            <ArrowUpCircle
              size={24}
              className="transition-transform group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
