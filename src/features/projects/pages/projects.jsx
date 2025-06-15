import { motion } from 'framer-motion';
import { FaTools, FaDatabase, FaCode } from 'react-icons/fa';

export const Projects = () => {
  const projects = [
    {
      title: "Skingram",
      description: "A comprehensive skincare platform offering products and clinical treatments with AI-powered recommendations.",
      tech: ["React.js", "Node.js", "Express", "SQL", "Sequelize", "Tailwind CSS", "Firebase"],
      icon: FaCode,
      highlights: [
        {
          title: "Key Features",
          points: [
            "Multi-role dashboards for clinics, therapists, and vendors",
            "AI-powered skin analysis and treatment recommendations",
            "Appointment booking system with automated notifications",
            "Real-time inventory management and product sales"
          ]
        },
        {
          title: "Technical Implementation",
          points: [
            "Integrated AI models for personalized skincare analysis",
            "Implemented Cron scheduler for appointment notifications",
            "Built secure authentication and role-based access",
            "Optimized database queries for large-scale data handling"
          ]
        }
      ]
    },
    {
      title: "Estimate My App",
      description: "Cost and time estimation tool for web and mobile application development projects.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      icon: FaTools,
      highlights: [
        {
          title: "Core Features",
          points: [
            "Dynamic cost calculation based on project requirements",
            "Real-time timeline estimation",
            "Interactive component selection interface",
            "Detailed breakdown of development phases"
          ]
        },
        {
          title: "Technical Details",
          points: [
            "Built modular components for dynamic cost estimation",
            "Implemented real-time updates using React state management",
            "Created responsive and intuitive user interface",
            "Optimized performance for smooth user experience"
          ]
        }
      ]
    },
    {
      title: "VisitorBook",
      description: "Web-based visitor management system with subscription model and role-based access.",
      tech: ["Angular", "Node.js", "Express", "SQL", "Sequelize", "Tailwind CSS"],
      icon: FaDatabase,
      highlights: [
        {
          title: "System Architecture",
          points: [
            "Role-based access control with three-tier architecture",
            "Integrated payment processing with Stripe and RazorPay",
            "Automated task management using Cron jobs",
            "Real-time visitor logging and tracking"
          ]
        },
        {
          title: "Dashboard Features",
          points: [
            "Super Admin: System-wide management and analytics",
            "Company Admin: Visitor logs and employee management",
            "Visitor Module: Quick check-in and real-time notifications",
            "Advanced reporting and data visualization"
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gray-900/90 p-8 rounded-xl border border-emerald-400/20">
                <div className="flex items-start gap-6">
                  <project.icon className="text-4xl text-emerald-400 mt-1" />
                  <div className="space-y-6 flex-1">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-neutral-400">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-emerald-400/10 text-emerald-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="space-y-3">
                          <h4 className="text-lg font-semibold text-emerald-400">
                            {highlight.title}
                          </h4>
                          <ul className="space-y-2">
                            {highlight.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-2 text-neutral-300">
                                <span className="text-emerald-400 mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

