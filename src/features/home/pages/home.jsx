/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect, useRef } from 'react';
import { Skills } from '../../skills/pages/skills';
import { About } from '../../about/pages/about';
import Loader from "../../../components/loader";
import { Connect } from "../../connect/pages/connect";
import { Experience } from "../../experience/pages/experience";
import { Resume } from '../../resume/pages/resume';
import { Projects } from '../../projects/pages/projects';
import { MouseGlow } from "../../../components/mouseGlow";
import { Navigation } from "../../../components/navigation";


export const Home = () => {
  const [codeSnippets] = useState([
    'npm install portfolio@latest',
    'git commit -m "feat: new updates"',
    'docker compose up -d',
    'deploying to production...',
  ]);
  
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false); // Add this state
  const heroRef = useRef(null);

  // Update the loading management useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle loading state changes
  useEffect(() => {
    if (loadingComplete) {
      setIsLoading(false);
    }
  }, [loadingComplete]);

  // Add this useEffect for scroll button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400); // Show after 400px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add this useEffect after the loading state effects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  // Add this effect for mouse move interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty('--x', `${x * 100}%`);
      heroRef.current.style.setProperty('--y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#000913] text-neutral-100 overflow-x-hidden relative">
      <Navigation />
      <MouseGlow />
      
      <AnimatePresence mode="wait">
        {isLoading && <Loader setIsLoading={setIsLoading} />}
      </AnimatePresence>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Terminal Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 w-80 h-32 bg-gray-900 rounded-lg border border-emerald-400/30 
                     overflow-hidden shadow-lg z-50 
                     md:block hidden" // Hide on mobile, show on medium screens and up
        >
          <div className="bg-gray-800 p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-2 text-sm text-gray-400">Terminal</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSnippet}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-emerald-400"
              >
                $ {codeSnippets[currentSnippet]}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  ▋
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile Terminal (Smaller and repositioned) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-2 w-64 h-24 bg-gray-900 rounded-lg border border-emerald-400/30 
                     overflow-hidden shadow-lg z-50 
                     md:hidden block" // Show on mobile, hide on medium screens and up
        >
          <div className="bg-gray-800 p-1 flex items-center">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-2 text-xs text-gray-400">Terminal</span>
          </div>
          <div className="p-2 font-mono text-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSnippet}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-emerald-400"
              >
                $ {codeSnippets[currentSnippet]}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  ▋
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.section
          id="home"
          ref={heroRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden"
        >
          {/* Dynamic Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Orbs */}
            <motion.div
              className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(16, 185, 129, 0.15), transparent 70%)",
                filter: "blur(60px)"
              }}
              animate={{
                x: [-200, 200],
                y: [-100, 100],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 70%)",
                filter: "blur(60px)"
              }}
              animate={{
                x: [200, -200],
                y: [100, -100],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />

            {/* Starry Background */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-emerald-400/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Subtle Moving Lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"
                style={{
                  width: `${Math.random() * 20 + 15}%`,
                  top: `${(i + 1) * 12}%`,
                  left: '-20%',
                }}
                animate={{
                  x: ['0%', '120%'],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 8 + 12,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            ))}

            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#000913]/80" />
          </div>

          {/* Content with existing animations */}
          <div className="relative z-10 text-center space-y-6">
            <motion.p 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="font-mono text-emerald-400"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight font-playfair"
            >
              <motion.span
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3 
                }}
                className="inline-block bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent"
              >
                Prabuddh
              </motion.span>
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: 0.5 
                }}
                className="text-emerald-400"
              >
                .
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-neutral-400 font-mono"
            >
              <TypeAnimation
                sequence={[
                  '> Software Engineer',
                  1000,
                  '> Full Stack Mern/Mean Developer',
                  1000, 
                  '> UI/UX Designer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
                style={{ display: 'inline-block' }}
                className="text-emerald-400" // Add missing class
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6"
            >
              <motion.a
                href="#projects" // Changed from #featured-work to #projects
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 20px 25px -5px rgba(52, 211, 153, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300, // Increased stiffness for faster animation
                    damping: 15,
                    delay: 0.4 // Reduced delay
                  }
                }}
                className="inline-block px-8 py-3 border border-emerald-400/30 
                           bg-emerald-400/10 rounded-md font-medium 
                           hover:bg-emerald-400/20 transition-all duration-300
                           relative overflow-hidden group"
              >
                <motion.span 
                  className="relative z-10 inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  View Work
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ type: "tween", duration: 0.4 }}
                />
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle at center, rgba(52, 211, 153, 0.15) 0%, transparent 70%)"
                  }}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Sections */}
        <div className="space-y-24 mt-40">
          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24 mt-96 sm:mt-64 md:mt-72 lg:mt-32"//bile margin-top
          >
            <About />
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <Experience />
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <Skills />
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <div className="flex flex-col items-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-4"
              >
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Technical Solutions Delivered
                </span>
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-emerald-400/50 to-blue-400/50 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-neutral-400 text-center mt-4 max-w-2xl"
              >
                Explore some of the impactful solutions I've delivered, showcasing my expertise in full-stack development
              </motion.p>
            </div>
            <Projects />
          </motion.section>

          {/* Resume Section */}
          <motion.section
            id="resume"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <Resume />
          </motion.section>

          {/* Connect Section */}
          <motion.section
            id="connect"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-24"
          >
            <Connect />
          </motion.section>
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ 
                scale: 1.1,
                y: -5 
              }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-40 right-8 z-50 p-3 rounded-full bg-emerald-400/10 
                         border border-emerald-400/30 text-emerald-400 shadow-lg 
                         hover:bg-emerald-400/20 transition-all duration-300"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </motion.svg>
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;