import { motion } from 'framer-motion';
import { FaFileDownload, FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Resume = () => {
  const resumePath = '/Prabuddh_CV_full_stack_01-06-25.pdf';

  const resumeSections = [
    {
      title: "Work Experience",
      icon: FaBriefcase,
      items: [
        {
          title: "Software Engineer",
          company: "GlocalView Infotech",
          period: "June 2023 - Present",
          points: [
            "Designed and developed event-driven microservices using Node.js and Express.js",
            "Created reusable UI components using React.js and integrated with RESTful APIs",
            "Implemented authentication and authorization using JWT and role-based access control",
            "Managed SQL/NoSQL databases and optimized queries for better performance",
            "Collaborated with cross-functional teams using agile methodologies",
            "Implemented CI/CD pipelines and containerized applications using Docker"
          ]
        },
        {
          title: "Flutter Development Intern",
          company: "GlocalView Infotech",
          period: "June 2023 - October 2023",
          points: [
            "Developed cross-platform mobile applications using Flutter and Dart",
            "Integrated RESTful APIs and implemented state management using Provider",
            "Collaborated with UI/UX designers to implement responsive designs",
            "Participated in code reviews and implemented feedback"
          ]
        }
      ]
    },
    {
      title: "Education",
      icon: FaGraduationCap,
      items: [
        {
          title: "Bachelor of Technology in Computer Science and Engineering",
          company: "Laxmi Narain College Of Technology, Bhopal",
          period: "2019 - 2023",
          points: [
            "Specialized in Computer Science Engineering",
            "Focused on Full Stack Web Development and Project Management",
            "Participated in various technical events and workshops",
            "Developed strong problem-solving and analytical skills"
          ]
        }
      ]
    },
    {
      title: "Technical Skills",
      icon: FaCode,
      items: [
        {
          title: "Languages & Core Technologies",
          points: [
            "Languages: HTML, CSS, JavaScript, TypeScript, SQL",
            "Frontend: React JS, Vue.js, Angular JS, Next JS",
            "Backend: Node.js, Express, Sequelize",
            "Build Tools: ESLint, Vite",
            "Styling: Tailwind CSS, Material UI, Bootstrap"
          ]
        },
        {
          title: "Development Tools & Platforms",
          points: [
            "Version Control: Git, GitHub, GitLab",
            "Databases: MySQL, MongoDB",
            "Development Tools: VSCode, Docker, MySQL Workbench, NPM",
            "Cloud Services: Firebase",
            "State Management: Redux",
            "UI Libraries: PrimeReact"
          ]
        },
        {
          title: "Area of Focus",
          points: [
            "Full Stack Web Development",
            "Project Management",
            "Responsive Web Design",
            "Database Design & Management"
          ]
        }
      ]
    },
    {
      title: "Technology Solutions Delivered",
      icon: FaLaptopCode,
      items: [
        {
          title: "Skingram",
          company: "Full Stack Project",
          points: [
            "A website designed where users can get products and clinical treatments for skin care",
            "Technology Used: React.js, SQL, Node.js, Express, Sequelize, Tailwind CSS, MySQL WorkBench, Google Firebase",
            "Dashboards for maintaining the clinics their therapists and vendors for product sales",
            "Used AI Integration to get skin results and provide treatments and products accordingly",
            "Feature of booking multiple appointments with therapist for services provided by clinics",
            "Integration of Cron scheduler to get notification for appointments"
          ]
        },
        {
          title: "Estimate My App",
          company: "Web Application",
          points: [
            "A web app using React, Vite, and JavaScript to estimate development cost and time for web and mobile application",
            "Leveraged React.js to construct modular components for dynamic cost estimation",
            "Incorporated APIs with JavaScript to retrieve real-time data for accurate cost and time estimates"
          ]
        },
        {
          title: "VisitorBook",
          company: "Full Stack Project",
          points: [
            "Built a web-based system for visitor check-ins, real-time logging, and subscription management",
            "Technology Used: Angular JS, SQL, Node.js, Express, Sequelize, Tailwind CSS, MySQL WorkBench",
            "Implemented payment gateways like Stripe and RazorPay",
            "Implemented a cron job for automated tasks like visitor log cleanup and subscription renewals",
            "Designed three dashboards: Super Admin, Company Admin, and Visitor Check-in Module",
            "Optimized database queries for faster retrieval of visitor data and logs"
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto px-6" // Reduced max-width for better resume look
      >
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>

            <motion.a
              href={resumePath}
              download="Prabuddh_Agarwal_Resume.pdf"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-4 
                       bg-gradient-to-r from-emerald-400/80 to-blue-400/80 
                       rounded-lg font-medium shadow-lg shadow-emerald-400/10 
                       hover:shadow-emerald-400/20 transition-all duration-300"
            >
              <FaFileDownload className="text-xl" />
              <span>Download PDF</span>
            </motion.a>
          </div>

          {/* Resume Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative group"
          >
            {/* Gradient Border Background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-xl blur-md" />

            {/* Main Resume Content */}
            <div className="relative bg-gray-900/90 p-8 rounded-lg border border-emerald-400/20">
              {/* Personal Info Header */}
              <div className="text-center mb-12 pb-8 border-b border-emerald-400/20">
                <h1 className="text-3xl font-bold text-white mb-2">Prabuddh Agarwal</h1>
                <p className="text-emerald-400">Software Engineer</p>
                <div className="mt-4 text-neutral-400 text-sm">
                  <p>pragar9@outlook.com• +91 6393195553</p>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <motion.a
                    href="https://github.com/prabuddh148"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/prabuddh-agarwal-ba7813193/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Resume Sections */}
              <div className="space-y-12">
                {resumeSections.map((section, idx) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <section.icon className="text-2xl text-emerald-400" />
                      <h3 className="text-xl font-semibold text-emerald-400">{section.title}</h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-emerald-400/30 to-transparent" />
                    </div>
                    
                    <div className="space-y-6">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (index * 0.1) }}
                          className="pl-4 border-l-2 border-emerald-400/20"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-lg font-medium text-white">{item.title}</h4>
                              <p className="text-emerald-400/80">{item.company}</p>
                            </div>
                            {item.period && (
                              <span className="text-sm text-neutral-400">{item.period}</span>
                            )}
                          </div>
                          <ul className="mt-2 list-disc list-inside space-y-1">
                            {item.points.map((point, i) => (
                              <li key={i} className="text-neutral-300 text-sm pl-2">{point}</li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

