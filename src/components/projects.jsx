// src/components/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  // Example project
  {
    title: "Project Umbra",
    description: "A dark-mode first task management app.",
    image: "/images/project-umbra.png",
    link: "#"
  },
  // ... more projects
];

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div
    className="glass-panel overflow-hidden"
    whileHover="hover"
    initial="rest"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-heading text-xl text-glow-accent">{title}</h3>
      <p className="text-text-secondary mt-2 mb-4">{description}</p>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-glow-accent text-dark-bg font-bold rounded-md shadow-glow"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
      >
        View Quest
      </motion.a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-heading text-center mb-12">Quest Log</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;