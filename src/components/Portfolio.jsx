import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { kytronDb } from "@/lib/firebaseKytron";
import { collection, getDocs } from "firebase/firestore";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(kytronDb, "projects"));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("📦 Datos obtenidos desde Firestore:", projectsData);
      setProjects(projectsData);
    } catch (error) {
      console.error("❌ Error al obtener los proyectos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProjects();
}, []);

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">✨</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            portfolio
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 font-mono">
            desarrolladora full stack con especialización en apps móviles e inteligencia artificial.
            Me apasiona crear soluciones tecnológicas que sean útiles, humanas y bien hechas.
            Disfruto del proceso de aprender, construir y mejorar, tanto en equipo como por mi cuenta.
            <br />
            Más allá del código, me encantan las plantas, los viajes, los libros y los videojuegos que me hacen desconectar.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/kytronApps" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/emilyehg/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:emily.herrera@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
            proyectos destacados
          </h3>

          {loading ? (
            <p className="text-center text-muted-foreground font-mono">Cargando proyectos...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="transition-all duration-300 hover:shadow-lg border-border/50 bg-card/80 backdrop-blur-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-serif">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-mono">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.technologies) &&
                        project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="font-mono text-xs">
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;