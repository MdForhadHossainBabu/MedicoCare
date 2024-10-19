/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Button = ({label}) => {
  const ballRef = useRef(null);

  const handleHover = () => {
    gsap.to(ballRef.current, {
      scale: 25, // Large scale to cover the entire button
      duration: 1, // Smooth scaling over 0.8 seconds
      ease: 'power1.out', // Smooth easing
    });
  };

  const handleHoverEnd = () => {
    gsap.to(ballRef.current, {
      scale: 0, // Shrinks the ball back to original size
      duration: 1, // Match the scale-down duration
      ease: 'power3.out',
    });
  };

  return (
    <motion.button
      className="relative px-6 py-2 overflow-hidden font-bold   border  rounded-full"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }} // Tap effect for feedback
    >
      <motion.span
        ref={ballRef}
        className="absolute w-4 h-4 bg-gradient-to-br from-green-600 to-blue-100 rounded-full -bottom-4 left-1/2"
        style={{ transform: 'translate(-50%, -50%) scale(0)' }} // Center the ball initially, scale 0 hides it
      ></motion.span>
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
};

export default Button;
