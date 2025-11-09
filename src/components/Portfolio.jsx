import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Proyecto E-commerce",
      description: "Plataforma completa de comercio electrónico con React y Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Dashboard Analytics",
      description: "Panel de control para análisis de datos en tiempo real",
      technologies: ["Vue.js", "Firebase", "Chart.js"],
    },
    {
      title: "App de Gestión",
      description: "Sistema de gestión empresarial con múltiples módulos",
      technologies: ["Angular", "PostgreSQL", "Docker"],
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            portfolio
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 font-mono">
            desarrollador full stack • soluciones tecnológicas innovadoras
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:tu@email.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
            sobre mí
          </h3>
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                desarrollador con experiencia en apps móviles y web • 
                especializado en crear soluciones eficientes y escalables • 
                mi objetivo es desarrollar software que mejore la vida de las personas 
                de manera elegante y efectiva
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
            proyectos destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
