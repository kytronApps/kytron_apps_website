import React from "react";
import RainBackground from "@/components/RainBackground";
import Footer from "@/components/Footer";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col font-mono text-[#4a3a2f] bg-[#f5f3f0]">
      <RainBackground />

      <header className="fixed top-0 left-0 w-full z-20 bg-[#f8f5f2]/95 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="font-serif text-lg flex items-center gap-2">
            ☕ <span className="font-bold">mi portfolio</span>
          </h1>
          <div className="flex gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#e7e3df] font-bold text-[#4a3a2f]"
                    : "text-[#4a3a2f]/80 hover:bg-[#e7e3df]"
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#e7e3df] font-bold text-[#4a3a2f]"
                    : "text-[#4a3a2f]/80 hover:bg-[#e7e3df]"
                }`
              }
            >
              Aplicaciones
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#e7e3df] font-bold text-[#4a3a2f]"
                    : "text-[#4a3a2f]/80 hover:bg-[#e7e3df]"
                }`
              }
            >
              Portfolio
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-20 relative z-10">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;