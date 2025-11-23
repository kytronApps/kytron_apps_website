import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity",
      category: "Diseño Gráfico",
      description: "Sistema de identidad visual con enfoque retro minimalista",
      year: "2024",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop"
    },
    {
      title: "E-commerce Platform",
      category: "Desarrollo Web",
      description: "Tienda online con diseño limpio y experiencia de compra fluida",
      year: "2024",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description: "Aplicación financiera con interfaz intuitiva y segura",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop"
    },
    {
      title: "Restaurant Website",
      category: "Desarrollo Web",
      description: "Sitio web responsive con sistema de reservas integrado",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
    },
    {
      title: "Illustration Series",
      category: "Arte Digital",
      description: "Colección de ilustraciones con estética retro contemporánea",
      year: "2023",
      thumbnail: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop"
    },
    {
      title: "Productivity Dashboard",
      category: "Aplicación Web",
      description: "Panel de control para gestión de proyectos y equipos",
      year: "2024",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que reflejan mi pasión por el diseño atemporal y la funcionalidad moderna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border hover:border-accent-secondary transition-all duration-300 animate-fade-in overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_48px_hsl(var(--foreground)/0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
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
                
                <div className="flex items-center gap-2 text-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-sm">Ver proyecto</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
