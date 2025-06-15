import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

export const MouseGlow = () => {
  const [isMoving, setIsMoving] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Using springs for smoother movement
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    let timeout;
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
      setIsMoving(true);
      
      // Reset moving state after mouse stops
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 100);
    };

    // Use passive listener for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{
        opacity: isMoving ? 1 : 0.5,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute w-[200px] h-[200px]"
        style={{
          x: smoothX,
          y: smoothY,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(10px)',
          willChange: 'transform',
        }}
      />
    </motion.div>
  );
};

