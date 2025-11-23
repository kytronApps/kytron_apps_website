import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Apps from "@/components/Apps";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Apps />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Index;
