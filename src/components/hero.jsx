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
      <div className="glass-panel p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-text-secondary">Avatar</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-heading text-5xl md:text-7xl text-glow-accent drop-shadow-glow">
              Ayush
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mt-4">
              The Full-Stack Alchemist
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-text-main">Level: 25</p>
              </div>
              <div>
                <p className="text-text-main">Class: Full-Stack Developer</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
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