import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              KytronApps
            </h3>
            <p className="font-sans text-sm text-muted-foreground">
              Diseño retro, soluciones modernas
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
