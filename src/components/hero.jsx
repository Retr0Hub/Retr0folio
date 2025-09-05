// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="font-heading text-6xl md:text-8xl text-glow-accent drop-shadow-glow">
        Your Name
      </h1>
      <p className="text-xl md:text-2xl text-text-secondary mt-4">
        The Full-Stack Alchemist
      </p>
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(122, 162, 247, 0.8)" }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-8 py-3 bg-glow-accent text-dark-bg font-bold rounded-lg shadow-glow transition-all"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        Enter World
      </motion.button>
    </motion.section>
  );
};

export default Hero;