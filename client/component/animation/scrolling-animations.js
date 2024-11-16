// components/ScrollAnimation.js
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { duration } from 'moment';

const ScrollAnimation = ({ children, direction = 'left', delay = 0 ,duration=0.5}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // triggers animation when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      // y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration:duration, delay: delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
