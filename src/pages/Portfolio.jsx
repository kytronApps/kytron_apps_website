import Navigation from "@/components/Navigation";
import RainBackground from "@/components/RainBackground";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <RainBackground />
      <Navigation />
      <div className="relative z-10 pt-16">
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioPage;