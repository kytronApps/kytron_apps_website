import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

const Portfolio = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      const ref = collection(db, "projects");
      const snapshot = await getDocs(ref);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(data);
      setLoading(false);
    }
    loadProjects();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Una colección de proyectos que fusionan diseño retro–moderno, funcionalidad precisa y una visión creativa que define el estilo de Kytron Apps.
          </p>
          <div className="w-20 h-px bg-border mx-auto mt-8 mb-16 opacity-40"></div>
        </div>

        {loading && (
          <p className="text-center text-muted-foreground mb-12">
            Cargando proyectos…
          </p>
        )}
        <div className="max-w-2xl mx-auto mb-24 text-center animate-fade-in leading-relaxed">
          <h3 className="font-serif text-4xl font-bold text-foreground mb-6 tracking-tight">Sobre mí</h3>
          <p className="font-sans text-muted-foreground leading-relaxed mb-6">
            Soy Emily Herrera, desarrolladora Full Stack con una sensibilidad marcada por el diseño retro–moderno.
            Combino tecnología, estética editorial y creatividad para construir experiencias digitales cálidas,
            intuitivas y llenas de personalidad bajo mi marca personal <strong>Kytron Apps</strong>.
          </p>

          <div className="mt-10 mb-12 text-sm text-muted-foreground/90 font-sans">
            <p className="mb-2">
              📍 Zaragoza, España · 👩‍💻 Full Stack Developer · 🧉 Matcha lover
            </p>
            <p>
              Enfocada en diseño  retro–moderno, mobile development y experiencias digitales cálidas.
            </p>
          </div>

          <h4 className="font-serif text-2xl text-foreground mb-2">Títulos y formación</h4>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Máster en Desarrollo de Aplicaciones Móviles · Especialización en Big Data e Inteligencia Artificial ·
            Formación profesional en desarrollo y sistemas.
          </p>

          <h4 className="font-serif text-2xl text-foreground mb-2">Experiencia</h4>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            He trabajado en ecosistemas corporativos desarrollando aplicaciones, automatizando procesos,
            diseñando interfaces y construyendo herramientas de productividad. Mi enfoque combina precisión técnica,
            diseño minimalista y una identidad visual retro que define cada uno de mis proyectos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border hover:border-primary/40 transition-all duration-500 animate-fade-in overflow-hidden rounded-sm hover:-translate-y-2 hover:shadow-[0_16px_55px_hsl(var(--foreground)/0.08)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              <div className="h-2 bg-gradient-to-r from-primary/30 via-accent-secondary/20 to-primary/30 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="font-geometric text-[10px] uppercase tracking-widest text-muted-foreground">
                    {project.category}
                  </span>
                  <span className="font-geometric text-[10px] text-accent-secondary">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 group-hover:text-accent-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech: string, tIndex: number) => (
                      <span
                        key={tIndex}
                        className="font-geometric text-[10px] bg-retro-light/60 text-foreground/90 px-2 py-0.5 rounded-sm border border-border/40 shadow-[0_1px_2px_rgba(0,0,0,0.06)] group-hover:bg-retro-light/80 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
