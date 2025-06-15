/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import profileImg from '../../../assets/images/profile.jpg';
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi';

export const About = () => {
  const highlights = [
    {
      icon: HiOutlineCode,
      title: "Full Stack Development",
      description: "Specialized in MERN/MEAN stack development"
    },
    {
      icon: HiOutlineLightBulb,
      title: "Problem Solving",
      description: "Turning complex problems into elegant solutions"
    },
    {
      icon: HiOutlineSparkles,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: HiOutlineGlobe,
      title: "Web Solutions",
      description: "Creating responsive and modern web applications"
    }
  ];

  return (
    <section className="relative py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000913] via-emerald-950/10 to-[#000913]" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3 space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold tracking-tight mb-2"
              >
                About <span className="text-emerald-400">Me</span>
              </motion.h2>
              <div className="h-1 w-20 bg-emerald-400 rounded-full mb-6" />
            </div>

            <div className="space-y-4 text-neutral-300">
              <p>
                Passionate Full Stack Developer crafting digital experiences that merge innovation with functionality. 
                With a keen eye for detail and a love for clean code, I transform complex challenges into elegant solutions.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving, ensuring each project 
                not only meets but exceeds expectations.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group flex items-start space-x-4 p-4 rounded-lg 
                           bg-gradient-to-br from-emerald-500/5 to-blue-500/5
                           hover:from-emerald-500/10 hover:to-blue-500/10 
                           border border-emerald-500/10 hover:border-emerald-500/20 
                           transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-emerald-400 transform group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-emerald-400 font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;