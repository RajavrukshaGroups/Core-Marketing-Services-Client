
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="mr-[0.25em] inline-block"
    >
      {children}
    </motion.span>
  );
};

const ScrubHighlight = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[0.3 + start * 0.4, 0.3 + end * 0.4]}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
};

export default ScrubHighlight;
