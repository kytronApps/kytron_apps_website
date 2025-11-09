import Navigation from "@/components/Navigation";
import RainBackground from "@/components/RainBackground";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <RainBackground />
      <Navigation />
      <div className="relative z-10 pt-16">
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Index;