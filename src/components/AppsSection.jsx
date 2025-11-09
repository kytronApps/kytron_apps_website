import AppCard from "./AppCard";

const AppsSection = () => {
  // Datos de ejemplo - puedes reemplazarlos con tus apps reales
  const apps = [
    {
      title: "Mi App Android",
      description:
        "Una aplicación móvil innovadora para Android con características únicas.",
      platform: "android",
      downloadUrl: "#",
      version: "1.0.0",
      icon: "📱",
    },
    {
      title: "Mi App iOS",
      description:
        "Experiencia nativa para dispositivos Apple con diseño elegante.",
      platform: "ios",
      downloadUrl: "#",
      version: "1.0.0",
      icon: "🍎",
    },
    {
      title: "Mi Web App",
      description:
        "Aplicación web progresiva accesible desde cualquier navegador.",
      platform: "web",
      webUrl: "#",
      icon: "🌐",
    },
    {
      title: "Otra App Android",
      description:
        "Segunda aplicación para Android con funcionalidades avanzadas.",
      platform: "android",
      downloadUrl: "#",
      version: "2.1.0",
      icon: "🚀",
    },
  ];

  return (
    <section id="apps" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-4xl mb-4">📱</div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            aplicaciones
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-mono">
            descarga mis apps móviles o accede a las versiones web
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsSection;