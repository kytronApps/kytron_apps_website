import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import TattooBookerPage from "../pages/TattooBookerPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Index />} />

      {/* FORM TATTOOBOOKER */}
      <Route path="/tattoobooker" element={<TattooBookerPage />} />

      {/* CATCH-ALL */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;