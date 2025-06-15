import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiMysql,
  SiReact, SiVuedotjs, SiNodedotjs, SiAngular, SiNextdotjs,
  SiSequelize, SiExpress, SiEslint, SiVite, SiTailwindcss,
  SiDocker, SiNpm,SiSpringboot,
  SiGit, SiGithub, SiGitlab, SiRedux,
  SiBootstrap, SiFirebase, SiMongodb,
  SiPython
} from "react-icons/si";
import JavaIcon from "../../../components/javaIcon";
import VsCodeIcon from "../../../components/vscodeIcon";
import AwsIcon from "../../../components/awsIcon";
import AzureIcon from "../../../components/azureIcon";



export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
     { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: JavaIcon, color: "#007396" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React JS", icon: SiReact, color: "#61DAFB" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Angular JS", icon: SiAngular, color: "#DD0031" },
        { name: "Next JS", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
        { name: "Express", icon: SiExpress, color: "#ffffff" },
        { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },

      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "VS Code", icon: VsCodeIcon, color: "#007ACC" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "MySQL Workbench", icon: SiMysql, color: "#4479A1" },
        { name: "NPM", icon: SiNpm, color: "#CB3837" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "GitLab", icon: SiGitlab, color: "#FC6D26" }
      ]
    },
    {
      title: "Libraries",
      skills: [
  // { name: "Material UI", icon: SiReact, color: "#007FFF" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "PrimeReact", icon: SiReact, color: "#61DAFB" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ]
    },
      {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: AwsIcon, color: "#FF9900" },
        { name: "Azure", icon: AzureIcon, color: "#0078D4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" }
    ]
  }
  ];

  const areaOfFocus = [
    "Full Stack Web Development",
    "Project Management",
    "UI/UX Design",
    "Responsive Design",
    "Performance Optimization",
    "RESTful APIs",
    "Database Design",
    "Version Control",
    "Agile Development",
    "Team Leadership"
  ];

  return (
    <div className="min-h-screen bg-[#000913] text-neutral-100 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-emerald-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">

Technical Arsenal              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h1>
          </motion.div>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-6">
            Crafting digital experiences with cutting-edge technologies and innovative solutions
          </p>
        </motion.div>

        {/* Updated Skills grid with 3 items per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative flex flex-col h-full"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-emerald-400/20 
                            hover:border-emerald-400/40 transition-all duration-300 
                            shadow-lg hover:shadow-emerald-400/10"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h2>

                {/* Updated grid to show 3 items per row */}
                <div className="grid grid-cols-3 gap-3 auto-rows-fr">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + skillIdx * 0.1 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="relative flex flex-col items-center justify-center p-3 rounded-lg
                               bg-gradient-to-br from-gray-800/50 to-gray-900/50
                               border border-gray-700/50 hover:border-emerald-400/30
                               transition-all duration-300 group/skill
                               min-h-[100px] aspect-square"
                    >
                      <skill.icon 
                        className="w-8 h-8 mb-2 transition-all duration-300 group-hover/skill:scale-110" 
                        style={{ color: skill.color }} 
                      />
                      <span className="text-xs font-medium text-center text-neutral-300 
                                     group-hover/skill:text-emerald-400 transition-colors duration-300
                                     line-clamp-2"
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Area of Focus section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-32 text-center"
        >
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Areas of Focus
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {areaOfFocus.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 
                         border border-emerald-400/30 rounded-full text-sm font-medium
                         text-emerald-400 hover:border-emerald-400/50 transition-all
                         duration-300 shadow-lg hover:shadow-emerald-400/20
                         backdrop-blur-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;