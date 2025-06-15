/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export const Connect = () => {
  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </span>
        </h2>
        
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
          Ready to transform your ideas into reality? Whether you have a project in mind 
          or just want to explore possibilities, I'm here to help bring your vision to life.
        </p>

        <motion.a
          href="mailto:pragar9@outlook.com"
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-3 px-8 py-4 
                   bg-gradient-to-r from-emerald-400/80 to-blue-400/80 
                   rounded-lg font-medium shadow-lg shadow-emerald-400/10 
                   hover:shadow-emerald-400/20 transition-all duration-300"
        >
          <FaEnvelope className="w-5 h-5" />
          <span>Start a Conversation</span>
        </motion.a>
      </motion.div>
    </div>
  );
};