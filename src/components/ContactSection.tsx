import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/kytronApps", color: "hover:text-retro-orange" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/emilyehg/", color: "hover:text-retro-teal" },
  { icon: Mail, label: "Email", href: "mailto:emily.herreragomez@gmail.com", color: "hover:text-retro-yellow" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-retro-teal font-mono text-sm mb-2 tracking-widest">
            &gt; CONEXIÓN.init()
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">¿Hablamos?</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto">
            Siempre estoy abierta a nuevas oportunidades, colaboraciones creativas 
            o simplemente charlar sobre anime y videojuegos retro.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card-retro p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Message Form */}
            <div>
              <h3 className="font-display text-xl font-bold mb-4 text-retro-orange">
                Envía un mensaje
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-muted/50 border border-border focus:border-retro-orange rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-retro-orange/50 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-muted/50 border border-border focus:border-retro-orange rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-retro-orange/50 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tu mensaje..."
                    className="w-full bg-muted/50 border border-border focus:border-retro-orange rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-retro-orange/50 transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-retro w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar
                </motion.button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h3 className="font-display text-xl font-bold mb-4 text-retro-teal">
                Conéctemos
              </h3>
              <p className="text-muted-foreground font-mono text-sm mb-6">
                También puedes encontrarme en estas plataformas:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center gap-3 p-3 bg-muted/30 rounded-lg text-muted-foreground ${social.color} transition-colors group`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-mono text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Fun Easter Egg */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-4 border border-dashed border-muted-foreground/30 rounded-lg text-center"
              >
                <p className="text-japanese text-muted-foreground text-xs mb-1">
                  一緒に何かすごいものを作りましょう
                </p>
                <p className="text-retro-teal font-mono text-xs">
                  // Creemos algo increíble juntos
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;