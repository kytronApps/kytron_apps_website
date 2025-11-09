import Navigation from "@/components/Navigation";
import RainBackground from "@/components/RainBackground";
import AppsSection from "@/components/AppsSection";

const Apps = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <RainBackground />
      <Navigation />
      <div className="relative z-10 pt-16">
        <AppsSection />
      </div>
    </div>
  );
};

export default Apps;
