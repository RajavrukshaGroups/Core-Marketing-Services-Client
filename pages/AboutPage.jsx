
import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';

const InteractiveSVG = ({ type }) => {
  const containerVariants = {
    initial: { opacity: 0.8 },
    hover: { opacity: 1 }
  };

  if (type === 'visibility') {
    return (
      <motion.svg viewBox="0 0 100 100" className="w-full h-full" variants={containerVariants}>
        <motion.circle 
          cx="50" cy="50" r="10" fill="currentColor" 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path 
          d="M20 50 Q 50 20 80 50 Q 50 80 20 50" 
          fill="none" stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {[1, 2, 3].map((i) => (
          <motion.circle
            key={i}
            cx="50" cy="50" r={15 + i * 10}
            fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.svg>
    );
  }

  if (type === 'education') {
    return (
      <motion.svg viewBox="0 0 100 100" className="w-full h-full" variants={containerVariants}>
        <motion.path 
          d="M30 70 L30 40 L50 20 L70 40 L70 70 Z" 
          fill="none" stroke="currentColor" strokeWidth="2" 
        />
        <motion.path 
          d="M30 40 L70 40 M50 20 L50 70" 
          stroke="currentColor" strokeWidth="1" opacity="0.3"
        />
        <motion.circle 
          cx="50" cy="35" r="5" fill="currentColor"
          animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.rect 
          x="35" y="75" width="30" height="2" fill="currentColor"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>
    );
  }

  if (type === 'communication') {
    return (
      <motion.svg viewBox="0 0 100 100" className="w-full h-full" variants={containerVariants}>
        <circle cx="20" cy="50" r="4" fill="currentColor" />
        {[1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M${25 + i * 8} ${50 - i * 10} Q ${35 + i * 12} 50 ${25 + i * 8} ${50 + i * 10}`}
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 2, 
              delay: i * 0.2, 
              repeat: Infinity 
            }}
          />
        ))}
      </motion.svg>
    );
  }

  if (type === 'efficiency') {
    return (
      <motion.svg viewBox="0 0 100 100" className="w-full h-full" variants={containerVariants}>
        <motion.circle 
          cx="50" cy="50" r="40" 
          fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M50 25 L50 75 M25 50 L75 50" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          cx="50" cy="50" r="15" fill="currentColor" opacity="0.1"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path 
          d="M40 50 L48 58 L60 42" 
          fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />
      </motion.svg>
    );
  }

  return null;
};

const PhilosophyCard = ({ type, title, description, colorClass, iconBg }) => {
  return (
    <motion.div 
      whileHover="hover"
      initial="initial"
      className="relative overflow-hidden p-12 rounded-[48px] border border-white group transition-all duration-700 cursor-default shadow-xl bg-white"
    >
      {/* Background Cover Layer */}
      <div className="absolute inset-0 z-0 elite-banner-bg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100">
        <div className="absolute inset-0 elite-halftone opacity-30" />
        <div className="absolute left-[-20%] top-0 bottom-0 w-[50%] bg-[#ED1C24] opacity-90 transition-transform duration-700 delay-100" style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }} />
      </div>

      <div className="relative z-10">
        <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-[#003399] transition-all duration-500 p-4`}>
          <InteractiveSVG type={type} />
        </div>
        <h3 className="text-3xl font-black text-[#003399] mb-6 group-hover:text-white transition-colors duration-500">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed font-medium group-hover:text-blue-100/80 transition-colors duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-blue-50 py-32 overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-[#ED1C24] font-black uppercase tracking-[0.5em] mb-6 block text-xs">Our Legacy</span>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-[#003399] tracking-tighter leading-none mb-10">
              Where Strategy <br/> <span className="serif italic font-normal text-sky-500">Meets Success</span>
            </h1>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed">
              Based in Bengaluru, Core Marketing Services (CMS) provides elite support for marketing endeavors in fast-paced market environments, prioritizing business outcomes and brand equity.
            </p>
          </motion.div>
        </div>
        
        {/* Abstract background text */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 text-[25vw] font-black text-white leading-none -z-0 pointer-events-none select-none">
          CMS
        </div>
      </section>

      <About />
      
      {/* Philosophy Section using User Provided Text */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#003399] tracking-tighter uppercase">Our Strategic Philosophy</h2>
            <p className="mt-4 text-gray-500 font-medium max-w-2xl mx-auto">Enhancing business outcomes, building your brand, and broadening your professional reach.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <PhilosophyCard 
                type="visibility"
                title="Brand Visibility"
                iconBg="bg-[#ED1C24]"
                colorClass="text-[#003399]"
                description="Effective marketing encompasses maintaining consistent brand visibility. We ensure your brand remains top-of-mind through high-impact physical campaigns and digital elite networking."
             />

             <PhilosophyCard 
                type="education"
                title="Customer Education"
                iconBg="bg-[#003399]"
                colorClass="text-[#003399]"
                description="We prioritize education on new products, ensuring your customers understand the unique value your brand brings to the market through targeted product launches and retail meets."
             />

             <PhilosophyCard 
                type="communication"
                title="Clear Communication"
                iconBg="bg-sky-500"
                colorClass="text-[#003399]"
                description="Clear communication of promotional offers is vital. We architect messaging that resonates, ensuring your value propositions are never lost in the fast-paced market noise."
             />

             <PhilosophyCard 
                type="efficiency"
                title="Resource Efficiency"
                iconBg="bg-gray-800"
                colorClass="text-[#003399]"
                description="We address the challenge of executing marketing functions within budgetary and resource constraints. Our team offers budget-friendly solutions customized to your specific requirements."
             />
          </div>
        </div>
      </section>

      <WhyChoose />
    </div>
  );
};

export default AboutPage;
