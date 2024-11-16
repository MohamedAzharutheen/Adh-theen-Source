import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
const extrapopins = Poppins({weight:"600", subsets:['latin']});
export default function WordChanging({courseName}) {

    const words = ['A Professional', 'Competitive', 'An Industry Ready'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

     // Cycle through words with an interval

     useEffect (()=>{
const WordInterval = setInterval(()=>{
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
}, 3000); // Change word every 3 seconds

return () => clearInterval(WordInterval);

     },[]);

  return (
    <>
    <div className=''>
    <h4 className={`fs-45 mfs-24 ${extrapopins.className}`}>
        
        
    Become <motion.span
        className='ylw-clr'
        key={currentWordIndex} // Make sure Framer Motion knows it's a new word

        initial={{ opacity: 0, translateY: 30 }} // Start with translateY down
        animate={{ opacity: 1, translateY: 0 }} // Move to original position
        exit={{ opacity: 0, translateY: -30 }} // Move upwards when exiting
        transition={{ duration: 0.8 }} // Animation duration
      >
        {words[currentWordIndex]}<br/>
      </motion.span>
      {courseName}
    </h4>
    </div>
    
    </>
  )
}
