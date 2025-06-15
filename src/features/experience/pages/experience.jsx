import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "GlocalView Infotech",
      period: "June 2023 - Present",
      description: [
        "Developed RESTful APIs with Node.js and Express, enabling seamless communication between frontend and backend systems, resulting in improved data retrieval efficiency",
        "Designed and implemented scalable, responsive web applications using React.js and Vite.js, ensuring optimal user experience",
        "Worked on frontend development and API integration, improving UI responsiveness and ensuring smooth interaction between client-side and server-side components",
        "Optimized database performance by writing efficient SQL queries and managing MySQL/MongoDB databases",
        "Conducted thorough testing and debugging to ensure application stability and reliability"
      ]
    },
    {
      title: "Flutter Development Intern",
      company: "GlocalView Infotech",
      period: "June 2023 - October 2023",
      description: [
        "Gained hands-on experience in mobile app development using Flutter framework",
        "Collaborated with the development team to build and maintain cross-platform mobile applications",
        "Contributed to UI development and feature implementation",
        "Participated in code reviews and testing procedures"
      ]
    }
  ];

  return (
    <div className="py-12">  {/* Reduced from py-20 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold mb-8"> {/* Reduced from mb-12 */}
          <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>

        <div className="space-y-8"> {/* Reduced from space-y-12 */}
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 border-l-2 border-emerald-400/20"
            >
              <div className="absolute -left-[9px] top-0">
                <div className="w-4 h-4 rounded-full bg-emerald-400/20 border-2 border-emerald-400" />
              </div>
              
              <div className="group bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-emerald-400/20 
                            hover:border-emerald-400/40 transition-all duration-300"> {/* Reduced padding from p-6 to p-5 */}
                <h3 className="text-2xl font-semibold text-emerald-400">{exp.title}</h3>
                <p className="text-neutral-400 mt-1">{exp.company}</p>
                <p className="text-sm text-neutral-500 mt-1">{exp.period}</p>
                
                <ul className="mt-3 space-y-2"> {/* Reduced from mt-4 space-y-3 */}
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span className="text-emerald-400 mr-3 mt-1.5">▹</span>
                      <span className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
