import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [active, setActive] = useState("home");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const links = [
    { id: "home", label: "Home", href: "#perfil" },
    { id: "experiencia", label: "Experiencia", href: "#experiencia" },
    { id: "educacion", label: "Educación", href: "#educacion" },
    { id: "certificaciones", label: "Certificaciones", href: "#certificaciones" },
    { id: "proyectos", label: "Proyectos", href: "#proyectos" },
    { id: "habilidades", label: "Habilidades", href: "#habilidades" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ];

  // 🔄 Ocultar header al bajar, mostrar al subir
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowHeader(false);
      else setShowHeader(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🌗 Aplicar tema globalmente
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (darkMode) {
      root.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
        bg-[#E4E7EF]/90 dark:bg-gray-900/90 
        backdrop-blur-md shadow-lg border border-gray-300 dark:border-gray-700 
        rounded-2xl w-[90%] max-w-6xl transition-all duration-500
        ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* 🧿 Logo + Nombre */}
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-8 w-8 object-contain" alt="Logo" />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Santiago Rey
          </span>
        </a>

        {/* 🧭 Menú + Toggle */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex font-medium flex-row space-x-6">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.id)}
                  className={`block py-2 px-3 rounded-md transition-all duration-200 ${
                    active === link.id
                      ? "text-blue-700 dark:text-blue-400 font-semibold"
                      : "text-gray-900 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 🌗 Toggle tipo switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only peer"
            />
            <div
              className={`w-14 h-8 rounded-full transition-colors duration-500 ${
                darkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-500 ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {darkMode ? (
                  // 🌙 Luna
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 116.707 2.707a8 8 0 0010.586 10.586z" />
                  </svg>
                ) : (
                  // ☀️ Sol
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.47a1 1 0 011.42 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM4.22 3.47a1 1 0 00-1.42 1.42l.7.7A1 1 0 005 5.59l-.78-.78zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm6.78-2.53a1 1 0 10-1.42 1.42l.7.7a1 1 0 101.42-1.42l-.7-.7zM3 9a1 1 0 000 2H2a1 1 0 100-2h1zm2.22 4.47a1 1 0 011.42 0l.7.7a1 1 0 01-1.42 1.42l-.7-.7a1 1 0 010-1.42z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Header;
