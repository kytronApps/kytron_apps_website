import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="mb-6 text-6xl">☕</div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight leading-tight">
          apps & proyectos
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
          descarga mis aplicaciones móviles y explora mi trabajo en un ambiente relajado
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            onClick={() => navigate('/apps')}
            className="font-mono"
          >
            → ver apps
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => navigate('/portfolio')}
            className="font-mono"
          >
            → mi portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
