import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import CursosCertificados from "./components/CursosCertificados";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Reconocimientos from "./components/Reconocimientos";

function App({ defaultLang = "es" }) {
  const location = useLocation();

  // 🌙 Modo oscuro por defecto
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
      localStorage.setItem("theme", "dark");
      return true;
    }
    return savedTheme === "dark";
  });

  // 🌍 Idioma: defaultLang viene de la ruta o localStorage
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang || defaultLang;
  });

  // 🔄 Sincronizar lang con la URL al inicio o cambio de ruta
  useEffect(() => {
    const pathLang = location.pathname.split("/")[1]; // 'es' o 'en'
    if (pathLang === "es" || pathLang === "en") {
      setLang(pathLang);
      localStorage.setItem("lang", pathLang);
    }
  }, [location.pathname]);

  // 🌙 Aplicar clases de tema
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      body.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      body.classList.add("light");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Guardar idioma cuando cambia y reflejarlo en el <html lang="">
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} lang={lang} setLang={setLang} />

      <main className="max-w-6xl mx-auto px-4">
        <section id="perfil"><Perfil darkMode={darkMode} lang={lang} /></section>
        <section id="experiencia"><Experiencia darkMode={darkMode} lang={lang} /></section>
        <section id="educacion"><Educacion darkMode={darkMode} lang={lang} /></section>
        <section id="cursos-certificados"><CursosCertificados darkMode={darkMode} lang={lang} /></section>
        <section id="proyectos"><Proyectos darkMode={darkMode} lang={lang} /></section>
        <section id="reconocimientos"><Reconocimientos darkMode={darkMode} lang={lang} /></section>
        <section id="habilidades"><Habilidades darkMode={darkMode} lang={lang} /></section>
        <section id="contacto"><Contacto darkMode={darkMode} lang={lang} /></section>
      </main>

      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}

export default App;
