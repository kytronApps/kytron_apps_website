import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid scanlines">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-retro-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-retro-teal/5 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-15"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🎮
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-5xl opacity-15"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        📀
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-4xl opacity-15"
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🕹️
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Japanese Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-japanese text-retro-coral text-lg mb-4 tracking-widest"
        >
          ようこそ • BIENVENIDO
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-retro-orange glitch-text">KYTRON</span>
          <br />
          <span className="text-foreground">APPS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-mono"
        >
          Mezclo creatividad{" "}
          <span className="text-retro-teal">ilustración</span>.
          <br />
          funcionalidad y calma para crear experiencias digitales únicas.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-retro">
            Ver Proyectos
          </a>
          <a href="#contact" className="btn-retro btn-retro-teal">
            Contacto
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-retro-orange/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-retro-orange rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;