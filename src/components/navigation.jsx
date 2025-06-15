import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'connect', label: 'Connect' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            offset: Math.abs(element.getBoundingClientRect().top)
          };
        }
        return { id: item.id, offset: Infinity };
      });

      const closest = sections.reduce((acc, curr) => 
        acc.offset < curr.offset ? acc : curr
      );

      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    ${activeSection === item.id 
                      ? 'text-emerald-400 bg-emerald-400/10' 
                      : 'text-neutral-400 hover:text-emerald-400 hover:bg-emerald-400/5'
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};