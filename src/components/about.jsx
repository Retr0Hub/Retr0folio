// src/components/About.jsx
import { motion } from 'framer-motion';

const StatBar = ({ label, value, max, color }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{value} / {max}</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        className={`h-2.5 rounded-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);


const About = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-heading text-center mb-12">Character Profile</h2>
      <div className="glass-panel p-8 grid md:grid-cols-3 gap-8 items-center">
        <motion.div 
            className="md:col-span-1 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
          <img src="/images/your-photo.png" alt="Your Name" className="w-48 h-48 rounded-full border-4 border-glow-accent shadow-glow" />
        </motion.div>
        <div className="md:col-span-2 space-y-6">
          <div className="flex justify-between items-baseline">
            <div>
              <p className="text-text-secondary">CLASS</p>
              <p className="text-2xl font-bold">Software Engineer</p>
            </div>
            <div>
              <p className="text-text-secondary">LEVEL</p>
              <p className="text-2xl font-bold text-right">5</p>
            </div>
          </div>
          <div className="space-y-4">
            <StatBar label="HP (Problem Solving)" value={85} max={100} color="bg-green-500" />
            <StatBar label="MP (Creativity)" value={90} max={100} color="bg-blue-500" />
          </div>
          <div>
            <h3 className="font-heading text-lg text-glow-accent mb-2">Lore</h3>
            <p className="text-text-secondary leading-relaxed">
              Your bio goes here. Tell your story in a few sentences, framed as character lore.
              Detail your passion for coding, your journey, and what drives you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;