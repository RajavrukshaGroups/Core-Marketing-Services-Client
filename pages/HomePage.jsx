
import React from 'react';
import { Hero } from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import EliteServices from '../components/EliteServices';
import WhyChoose from '../components/WhyChoose';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
          <Services />
          <Link to="/services">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="mt-12 flex items-center gap-3 text-[#003399] font-black uppercase tracking-widest group"
            >
              View Detailed Service Suite
              <div className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center group-hover:bg-[#003399] group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </motion.button>
          </Link>
        </div>
      </div>
      <EliteServices />
      <WhyChoose />
      
      {/* Final Home CTA */}
      <section className="py-32 bg-white flex justify-center items-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#003399] mb-8 tracking-tighter">Ready to redefine your <br/> digital footprint?</h2>
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-[#ED1C24] text-white rounded-3xl font-black text-xl shadow-2xl shadow-red-200"
            >
              Get Started with CMS Elite
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
