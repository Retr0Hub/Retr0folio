// src/components/Skills.jsx
import { motion } from 'framer-motion';
// Import your icons from 'react-icons' or as SVG files from /assets/icons
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';

const skills = {
  "Frontend": [ { icon: <FaReact />, name: "React" }, /* ...more */ ],
  "Backend": [ { icon: <FaNodeJs />, name: "Node.js" }, /* ...more */ ],
  "Tools": [ { icon: <FaDocker />, name: "Docker" }, /* ...more */ ],
};

const SkillIcon = ({ icon, name }) => (
  <motion.div
    className="flex flex-col items-center p-4 glass-panel rounded-lg"
    whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(122, 162, 247, 0.8)", y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="text-4xl text-glow-accent mb-2">{icon}</div>
    <span className="text-sm">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-heading text-center mb-12">Talent Tree</h2>
      <div className="space-y-12">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-2xl font-heading text-glow-accent mb-6">{category}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {skillList.map(skill => <SkillIcon key={skill.name} {...skill} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;