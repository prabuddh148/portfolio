import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Loader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShowLoader(false);
        setIsLoading(false);
      }, 1000);
    }
  }, [progress, setIsLoading]);

  // Hexagon points
  const hexagonPoints = "50,5 95,25 95,75 50,95 5,75 5,25";

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#000913] z-50 flex items-center justify-center"
        >
          <div className="relative w-48 h-48">
            {/* Animated Hexagon */}
            <motion.svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full"
            >
              <motion.polygon
                points={hexagonPoints}
                stroke="#10b981"
                strokeWidth="2"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
              />
            </motion.svg>

            {/* Centered P letter */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full"
            >
              {/* Vertical line */}
              <path
                d="M40,30 L40,70"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                fill="transparent"
              />
              {/* Improved curve for P */}
              <path
                d="M40,30 L55,30 Q70,30 70,40 Q70,50 55,50 L40,50"
                stroke="#10b981"
                strokeWidth="4"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Terminal progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 left-0 right-0 text-center font-mono text-emerald-400 text-sm"
            >
              <span className="text-gray-400">$</span> loading: {progress}%
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block ml-1"
              >
                ▋
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Add PropTypes validation
Loader.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
};

export default Loader;