import './App.css';
import About from './components/About';
import Skills from './components/skills';
import ContactMe from './components/contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, customAnimation }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const defaultAnimation = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const animation = customAnimation || defaultAnimation;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const projectAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 85 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.75, delay: 0.25 }}
      className="App"
    >
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection customAnimation={projectAnimation}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <ContactMe />
      </AnimatedSection>
        <Footer />
    </motion.div>
  );
}

export default App;