
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CMSLogo from '../assets/cms-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strategy', path: '/' },
    { name: 'Legacy', path: '/about' },
    { name: 'Elite Suite', path: '/services' },
    { name: 'Directory', path: '/directory' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isActive = (path) => location.pathname === path;

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled ? 'py-4' : 'py-10'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`glass rounded-[28px] px-10 py-4 flex items-center justify-between shadow-2xl border-white/40 transition-all duration-700 ${
            isScrolled ? 'bg-white/90 scale-[0.98]' : 'bg-white/40 scale-100'
          }`}
        >
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={closeMobileMenu}>
            <div className="w-12 h-12  flex items-center justify-center  transition-transform group-hover:rotate-12 overflow-hidden  ">
               <img 
                 src={CMSLogo}
                 alt="Core Marketing Services" 
                 className="w-full h-full object-contain"
               />
            </div>
            <div>
              <span className="text-[#003399] font-black text-2xl tracking-tighter leading-none block">CMS</span>
              <span className="text-[8px] text-blue-600 uppercase tracking-[0.2em] font-black leading-none"><span className="text-[#ED1C24] text-[10px]">C</span>ore <span className="text-[#ED1C24] text-[10px]">M</span>arketing <span className="text-[#ED1C24] text-[10px]">S</span>ervices</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative group ${
                  isActive(link.path) ? 'text-[#ED1C24]' : 'text-[#003399]/70 hover:text-[#003399]'
                }`}
              >
                {link.name}
                <motion.span 
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[#ED1C24] transition-all ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-[#003399] hover:bg-[#ED1C24] text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all duration-500 shadow-xl transform active:scale-95">
                Consultation
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-[#003399] transition-transform active:scale-90"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Fullscreen Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <img src={CMSLogo} alt="Core Marketing Services" className="w-10 h-10 object-contain" />
                <span className="text-[#003399] font-black text-xl tracking-tighter">CMS</span>
              </div>
              <button onClick={closeMobileMenu} className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center active:scale-90 transition-transform">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={closeMobileMenu}
                    className={`text-xl font-black tracking-tighter transition-colors ${
                      isActive(link.path) ? 'text-[#ED1C24]' : 'text-[#003399] hover:text-[#ED1C24]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className={`text-xl font-black tracking-tighter transition-colors ${isActive('/contact') ? 'text-[#ED1C24]' : 'text-[#003399]'}`}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
            <div className="mt-auto">
              <Link to="/contact" onClick={closeMobileMenu}>
                <button className="w-full bg-[#ED1C24] text-white py-2 mt-8 rounded-[32px] text-xs font-black tracking-tight shadow-2xl active:scale-95 transition-transform">
                  START PROJECT
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
