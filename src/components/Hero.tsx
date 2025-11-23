import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-6">
            Código.
            <br />
            <span className="text-primary">Matcha.</span>
            <br />
            Buen diseño.
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mezclo creatividad, funcionalidad y calma para crear experiencias digitales únicas.

          </p>
          
          <div className="flex gap-4 justify-center mt-12">
            <a
              href="#apps"
              className="px-8 py-3 bg-primary text-primary-foreground font-sans text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Ver Apps
            </a>
            <a
              href="#portfolio"
              className="px-8 py-3 border-2 border-primary text-primary font-sans text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#apps"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </section>
  );
};

export default Hero;
