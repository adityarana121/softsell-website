import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to SoftSell
      </motion.h1>
      <p>Buy and sell your software licenses with ease</p>
      <motion.button 
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ><div class="cta-container">
      <button class="cta-button">Get a Quote</button>
    </div>
      </motion.button>
    </section>
  );
};

export default Hero;
