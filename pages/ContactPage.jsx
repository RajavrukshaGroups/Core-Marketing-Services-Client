
import React from 'react';
import { Contact } from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex flex-col">
      <section className="bg-white py-20">
         <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-[#003399] tracking-tighter mb-4">Start Your Elite Journey</h1>
            <p className="text-lg text-gray-500 font-medium tracking-wide">Bengaluru Headquarters & Beyond</p>
         </div>
      </section>
      <div className="flex-1 pb-20">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
