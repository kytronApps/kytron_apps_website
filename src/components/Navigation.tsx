import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            KytronApps
          </button>
          
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("apps")}
              className="nav-link font-sans text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="nav-link font-sans text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans text-sm uppercase tracking-wider bg-accent-secondary text-accent-secondary-foreground px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
