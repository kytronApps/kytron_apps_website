import React, { useState } from "react";
import RainBackground from "@/components/RainBackground";
import Footer from "@/components/Footer";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative min-h-screen flex flex-col font-mono text-[#4a3a2f] bg-[#f5f3f0]">
      <RainBackground />

      {/* 🔹 Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-[#f8f5f2]/95 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="font-serif text-lg flex items-center gap-2">
            ☕ <span className="font-bold">Kytron Apps</span>
          </h1>

          {/* 🔹 Menú desktop */}
          <div className="hidden md:flex gap-3">
            {["/", "/apps", "/portfolio"].map((path, i) => {
              const labels = ["Inicio", "Aplicaciones", "Portfolio"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[#e7e3df] font-bold text-[#4a3a2f]"
                        : "text-[#4a3a2f]/80 hover:bg-[#e7e3df]"
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </div>

          {/* 🔹 Botón menú móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-[#e7e3df]/60 transition-all"
          >
            <span
              className={`w-6 h-[2px] bg-[#4a3a2f] transition-all ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#4a3a2f] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-[#4a3a2f] transition-all ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </nav>

        {/*  Menú móvil desplegable */}
        <div
          className={`md:hidden fixed top-[60px] left-0 w-full bg-[#f8f5f2] border-t border-gray-200 shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-5 py-4 space-y-2">
            {[
              { path: "/", label: "Inicio" },
              { path: "/apps", label: "Aplicaciones" },
              { path: "/portfolio", label: "Portfolio" },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#e7e3df] font-bold text-[#4a3a2f]"
                      : "text-[#4a3a2f]/80 hover:bg-[#e7e3df]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      {/* 🔹 Contenido principal */}
      <main className="flex-1 pt-20 relative z-10">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;