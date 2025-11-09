// src/routes/app.routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Index from "@/pages/Index";
import Apps from "@/pages/Apps";
import PortfolioPage from "@/pages/Portfolio";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;