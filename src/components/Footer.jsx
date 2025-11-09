const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground font-mono text-sm">
          © {new Date().getFullYear()} • hecho con ☕ y cariño
        </p>
      </div>
    </footer>
  );
};

export default Footer;
