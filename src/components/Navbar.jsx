import { useState } from "react";
import Search from "./Search";

function Navbar({ terminodeBusqueda, setTerminodeBusqueda }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#030014]/85 backdrop-blur-md border-b border-white/5 text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/logo.png" className="h-12 md:h-16 w-auto" alt="ChillFlix Logo" />
        </a>

        {/* Desktop Menu (Alineado a la derecha) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-sm font-semibold tracking-wide">
            <a href="/" className="text-white/80 hover:text-white transition-colors duration-200">Inicio</a>
            <a href="/peliculas" className="text-white/80 hover:text-white transition-colors duration-200">Películas</a>
          </div>

          <Search
            terminodeBusqueda={terminodeBusqueda}
            setTerminodeBusqueda={setTerminodeBusqueda}
            isNavbar={true}
          />
        </div>

        {/* Botón hamburguesa para Móvil */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/5 bg-[#030014]/95 backdrop-blur-md transition-all duration-300">
          <a href="/" className="text-white/80 hover:text-white py-2 border-b border-white/5 font-semibold text-sm">Inicio</a>
          <a href="/peliculas" className="text-white/80 hover:text-white py-2 border-b border-white/5 font-semibold text-sm">Películas</a>
          <div className="pt-2">
            <Search
              terminodeBusqueda={terminodeBusqueda}
              setTerminodeBusqueda={setTerminodeBusqueda}
              isNavbar={true}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;