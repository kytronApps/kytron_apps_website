import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95, color: "neon-cyan" },
  { name: "TypeScript", level: 90, color: "neon-cyan" },
  { name: "Node.js", level: 85, color: "neon-green" },
  { name: "Python", level: 75, color: "neon-green" },
  { name: "Three.js / WebGL", level: 70, color: "neon-magenta" },
  { name: "UI/UX Design", level: 80, color: "neon-magenta" },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const colorClasses = {
    "neon-cyan": "bg-neon-cyan shadow-[0_0_10px_hsl(var(--neon-cyan)/0.5)]",
    "neon-green": "bg-neon-green shadow-[0_0_10px_hsl(var(--neon-green)/0.5)]",
    "neon-magenta": "bg-neon-magenta shadow-[0_0_10px_hsl(var(--neon-magenta)/0.5)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm text-foreground">{skill.name}</span>
        <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClasses[skill.color as keyof typeof colorClasses]}`}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-neon-orange font-mono text-sm mb-2 tracking-widest">
            &gt; HABILIDADES.scan()
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Tech </span>
            <span className="text-neon-magenta">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          <div>
            {skills.slice(0, 3).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
          <div>
            {skills.slice(3).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index + 3} />
            ))}
          </div>
        </div>

        {/* Retro decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 border-neon rounded-lg bg-card/50">
            <span className="text-2xl">🎮</span>
            <span className="font-japanese text-sm text-muted-foreground">
              コードは芸術です
            </span>
            <span className="text-neon-cyan font-mono text-sm">
              // El código es arte
            </span>
            <span className="text-2xl">🎨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
