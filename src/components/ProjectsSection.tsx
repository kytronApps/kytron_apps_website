import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ExternalLink, Github, Folder } from "lucide-react";

import { db } from "@/lib/firebase"; // ajusta la ruta si es necesario
import type { AppData } from "@/types/App";

/* =========================================================
   PROJECT CARD (NO SE TOCA EL DISEÑO)
   ========================================================= */

const ProjectCard = ({
  project,
  index,
}: {
  project: AppData;
  index: number;
}) => {
  const colorClasses = {
    orange:
      "border-retro-orange/30 hover:border-retro-orange/60 hover:shadow-[0_0_20px_hsl(var(--retro-orange)/0.15)]",
    teal:
      "border-retro-teal/30 hover:border-retro-teal/60 hover:shadow-[0_0_20px_hsl(var(--retro-teal)/0.15)]",
    coral:
      "border-retro-coral/30 hover:border-retro-coral/60 hover:shadow-[0_0_20px_hsl(var(--retro-coral)/0.15)]",
    yellow:
      "border-retro-yellow/30 hover:border-retro-yellow/60 hover:shadow-[0_0_20px_hsl(var(--retro-yellow)/0.15)]",
  };

  const textColors = {
    orange: "text-retro-orange",
    teal: "text-retro-teal",
    coral: "text-retro-coral",
    yellow: "text-retro-yellow",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-card/50 backdrop-blur border rounded-lg p-6 transition-all duration-300 ${
        colorClasses[project.color]
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <Folder className={`w-10 h-10 ${textColors[project.color]}`} />
        <div className="flex gap-3">
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}

          {project.demo && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3
        className={`font-display text-xl font-bold mb-3 group-hover:${
          textColors[project.color]
        } transition-colors`}
      >
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm font-mono leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 bg-muted/50 text-muted-foreground rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECTS SECTION (FIRESTORE)
   ========================================================= */

const ProjectsSection = () => {
  const [projects, setProjects] = useState<AppData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      const ref = collection(db, "apps"); // 👈 tu colección real
      const snapshot = await getDocs(ref);

      const colors: AppData["color"][] = [
        "orange",
        "teal",
        "coral",
        "yellow",
      ];

      const data = snapshot.docs.map((doc, index) => {
        const d = doc.data();

        return {
          id: doc.id,
          title: d.title,
          description: d.Description, // 👈 Firestore usa D mayúscula
          tags: d.dispositivos ?? [],
          demo: d.link ?? undefined,
          github: undefined,
          color: colors[index % colors.length],
        };
      });

      setProjects(data);
      setLoading(false);
    }

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-retro-teal font-mono text-sm mb-2 tracking-widest">
            &gt; PROYECTOS.load()
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-foreground">Mis </span>
            <span className="text-retro-orange">Trabajos</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-mono text-sm">
            Una selección de proyectos donde fusiono mi pasión por la tecnología
            con la estética retro-futurista.
          </p>
        </motion.div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-muted-foreground font-mono">
            Cargando proyectos…
          </p>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
