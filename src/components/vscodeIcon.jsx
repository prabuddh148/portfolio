import { motion } from "framer-motion";

const VsCodeIcon = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300 group-hover:scale-110"
  >
    <path
      d="M75.4,36.5L61.1,25.8l-27.5,25l-9.1-7.1L16,48.2v3.5l8.5,7.7l-8.5,7.7v3.5l8.5,4.5l9.1-7.1l27.5,25l14.3-10.7 V36.5z M61.1,68.1L37.2,50l23.9-18.1V68.1z"
      fill="#007ACC"
    />
  </motion.svg>
);

export default VsCodeIcon;