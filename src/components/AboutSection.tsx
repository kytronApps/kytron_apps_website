import { motion } from "framer-motion";
import { Gamepad2, Music, Film, Code2 } from "lucide-react";

const interests = [
  { icon: Gamepad2, label: "Gaming", color: "text-retro-teal" },
  { icon: Music, label: "Vinilos", color: "text-retro-coral" },
  { icon: Film, label: "Anime & Films", color: "text-retro-orange" },
  { icon: Code2, label: "Código", color: "text-retro-yellow" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="card-retro p-2 rounded-lg">
              <div className="aspect-square bg-muted rounded overflow-hidden relative">
                {/* Placeholder Avatar with retro effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-retro-orange/20 via-transparent to-retro-teal/20" />


                <div className="absolute inset-0 flex flex-col items-center justify-center">
  <img
    src="/avatar.jpeg"   
    alt="Avatar"
    className="
      w-40 h-40
      object-contain
      drop-shadow-[0_0_20px_rgba(255,140,0,0.35)]
      select-none
    "
  />

  <p className="text-japanese text-retro-orange mt-4 text-sm">
    開発者
  </p>
</div>



                {/* Scanlines */}
                <div className="absolute inset-0 scanlines opacity-30" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 border border-retro-orange/30 rounded-full"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-retro-teal/20 rounded-lg rotate-12" />
          </div>

          {/* Text Side */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-retro-coral font-mono text-sm mb-2 tracking-widest"
            >
              &gt; SOBRE_MÍ.exe
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Hola, soy </span>
              <span className="text-retro-orange">[EMILY]</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-muted-foreground font-mono text-sm leading-relaxed"
            >
              <p>
                desarrolladora Full Stack . Combino tecnología, mi pasión por la ilustración  y creatividad para construir experiencias digitales cálidas, intuitivas y llenas de personalidad bajo mi marca personal Kytron Apps.
                
              </p>
              <p>
                He trabajado en ecosistemas corporativos desarrollando aplicaciones, automatizando procesos, diseñando interfaces y construyendo herramientas de productividad. Mi enfoque combina precisión técnica, diseño minimalista y una identidad visual retro que define cada uno de mis proyectos.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-4 gap-4 mt-8"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2 p-3 card-retro rounded-lg cursor-default"
                >
                  <interest.icon className={`w-6 h-6 ${interest.color}`} />
                  <span className="text-xs font-mono text-muted-foreground">
                    {interest.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;