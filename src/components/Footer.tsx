import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-retro-orange/5 to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🎮</span>
            <span className="font-display text-lg font-bold text-retro-orange">
              PORTFOLIO
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {["Inicio", "Sobre mí", "Proyectos", "Contacto"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item === "Inicio" ? "" : item.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-muted-foreground hover:text-retro-orange font-mono text-xs transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground font-mono text-xs"
          >
            <span className="text-japanese">作成</span>
            <span>•</span>
            <span>{currentYear}</span>
            <span>•</span>
            <span className="text-retro-coral">♥</span>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-retro-orange/50 to-transparent"
        />

        {/* Fun retro message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-4 text-muted-foreground/50 font-mono text-xs"
        >
          &lt;/&gt; Diseñado con amor y mucho café ☕ en un universo retro-futurista
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;