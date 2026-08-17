import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import { FaCog } from "react-icons/fa";

function Header({ darkMode, setDarkMode, lang, setLang }) {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const links = [
    { id: "home", label: lang === "es" ? "Inicio" : "Home", href: "#perfil" },
    { id: "experiencia", label: lang === "es" ? "Experiencia" : "Experience", href: "#experiencia" },
    { id: "educacion", label: lang === "es" ? "Educación" : "Education", href: "#educacion" },
    { id: "certificaciones", label: lang === "es" ? "Certificaciones" : "Certifications", href: "#cursos-certificados" },
    { id: "reconocimientos", label: lang === "es" ? "Logros" : "Awards", href: "#reconocimientos" },
    { id: "proyectos", label: lang === "es" ? "Proyectos" : "Projects", href: "#proyectos" },
    { id: "habilidades", label: lang === "es" ? "Habilidades" : "Skills", href: "#habilidades" },
    { id: "contacto", label: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  // Ocultar header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowHeader(false);
      else setShowHeader(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Guardar idioma en localStorage (opcional)
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-md border rounded-2xl w-[90%] max-w-6xl transition-all duration-500 shadow-lg
        ${darkMode
          ? "bg-gray-900/90 border-gray-700 text-gray-100"
          : "bg-[#DDE1EC]/90 border-gray-300 text-gray-800"}
        ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-8 w-8 object-contain" alt="Logo" />
          <span className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
            Santiago Rey
          </span>
        </a>

        {/* Menú Desktop */}
        <ul className="hidden lg:flex items-center justify-center gap-6 font-medium text-sm mx-auto">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`block py-2 px-3 rounded-md transition-all duration-200 ${
                  active === link.id
                    ? darkMode
                      ? "text-cyan-300 font-semibold"
                      : "text-blue-600 font-semibold"
                    : darkMode
                      ? "text-gray-200 hover:text-cyan-300"
                      : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botones */}
        <div className="flex items-center gap-4">
          {/* Menú móvil */}
          <button
            className="block lg:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Configuración */}
          <button
            onClick={() => setSettingsOpen(!settingsOpen)}
            className={`flex text-xl p-2 rounded-full transition ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            <FaCog />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center pb-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActive(link.id);
                setMenuOpen(false);
              }}
              className={`block py-2 text-center w-full ${
                darkMode
                  ? "text-gray-200 hover:text-cyan-300"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Drawer configuración */}
      {settingsOpen && (
        <div
          className={`absolute top-full right-4 mt-2 p-4 rounded-xl shadow-xl border
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
        >
          <div className="flex flex-col gap-3 text-sm">
            {/* Toggle idioma */}
            <button
              onClick={() => {
                const newLang = lang === "es" ? "en" : "es";
                setLang(newLang);
                localStorage.setItem("lang", newLang);
                navigate(`/${newLang}`);
              }}
              className={`px-3 py-1 font-semibold rounded-md transition-all duration-300
                ${darkMode
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
            >
              {lang === "es" ? "🌍 Idioma: Español - Nativo" : "🌍 Language: English - B2"}
            </button>

            {/* Toggle dark mode */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div
                className={`w-12 h-6 rounded-full transition-colors duration-500 relative ${
                  darkMode ? "bg-gray-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-500 ${
                    darkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </div>
              <span className="ml-3">{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
            </label>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
