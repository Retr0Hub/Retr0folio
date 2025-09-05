// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-heading mb-12">Message Board</h2>
      <div className="max-w-2xl mx-auto glass-panel p-8">
        <p className="text-text-secondary mb-6">
          Have a quest or wish to collaborate? Send a message via raven post.
        </p>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-dark-bg border border-glow-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-glow-accent" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-dark-bg border border-glow-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-glow-accent" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 bg-dark-bg border border-glow-accent/50 rounded-md focus:outline-none focus:ring-2 focus:ring-glow-accent"></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-6 py-3 bg-glow-accent text-dark-bg font-bold rounded-lg shadow-glow">
            Send Message
          </motion.button>
        </form>
        <div className="mt-8 flex justify-center space-x-6">
          <SocialSigil icon={<FaGithub />} />
          <SocialSigil icon={<FaLinkedin />} />
          <SocialSigil icon={<FaTwitter />} />
        </div>
      </div>
    </section>
  );
};

const SocialSigil = ({ icon }) => (
  <motion.a href="#" className="text-3xl text-glow-accent" whileHover={{ y: -5, scale: 1.2, filter: 'drop-shadow(0 0 10px #7aa2f7)' }}>
    {icon}
  </motion.a>
);

export default Contact;