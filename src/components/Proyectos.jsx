import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { proyectos as proyectosData } from "../data/proyectosData"; // JSON multilenguaje
import {
  Portafolio,

} from "../assets/Proyectos/imagesP.js";

function Proyectos({ darkMode, lang}) {
  const [isOpen, setIsOpen] = useState(true);
  const [globalFullImage, setGlobalFullImage] = useState(null);

  // Los proyectos destacados se muestran primero
  const proyectosOrdenados = [...proyectosData].sort(
    (a, b) => Number(Boolean(b.destacado)) - Number(Boolean(a.destacado))
  );

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-5 transition-all duration-300 ${
        isOpen ? "min-h-screen" : "h-auto"
      }`}
    >
      {/* Encabezado */}
      <div className="relative mb-6">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-wide text-center ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          🧩 {lang === "es" ? "Proyectos" : "Projects"}
        </h2>

        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className={`absolute right-2 top-0 text-3xl md:text-4xl font-bold ${
            darkMode
              ? "text-white hover:bg-white/10"
              : "text-gray-700 hover:bg-gray-300/50"
          } transition px-2 rounded-md`}
          title={isOpen ? (lang === "es" ? "Cerrar sección" : "Close section") : (lang === "es" ? "Abrir sección" : "Open section")}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      <div
        className={`mx-auto h-[2px] w-full rounded-full ${
          darkMode ? "bg-cyan-300/50" : "bg-gray-500/40"
        }`}
      ></div>

      {/* Contenido */}
      <div
        className={`transition-all duration-700 ease-in-out ${
          isOpen
            ? "max-h-none mt-6 opacity-100 overflow-visible"
            : "max-h-0 mt-0 opacity-0 overflow-hidden"
        }`}
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {proyectosOrdenados.map((proyecto, idx) => (
            <ProyectoCard
              key={idx}
              proyecto={proyecto}
              darkMode={darkMode}
              lang={lang}
              delay={idx * 0.1}
              setGlobalFullImage={setGlobalFullImage}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {globalFullImage && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setGlobalFullImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGlobalFullImage(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-red-500 hover:text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-[10000] flex items-center justify-center"
              title={lang === "es" ? "Cerrar" : "Close"}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <AnimatePresence mode="wait">
              <motion.img
                key={globalFullImage.index}
                src={globalFullImage.imgs[globalFullImage.index]}
                alt="Vista ampliada"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain relative z-[9999]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()} 
              />
            </AnimatePresence>

            {globalFullImage.imgs.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setGlobalFullImage(prev => ({ ...prev, index: (prev.index - 1 + prev.imgs.length) % prev.imgs.length }));
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full text-white bg-white/10 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 z-[10000] font-bold text-2xl"
                  title={lang === "es" ? "Anterior" : "Previous"}
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setGlobalFullImage(prev => ({ ...prev, index: (prev.index + 1) % prev.imgs.length }));
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full text-white bg-white/10 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 z-[10000] font-bold text-2xl"
                  title={lang === "es" ? "Siguiente" : "Next"}
                >
                  ›
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProyectoCard({ proyecto, darkMode, lang, delay, setGlobalFullImage }) {
  const [index, setIndex] = useState(0);

  const imgs = proyecto.imagenes && proyecto.imagenes.length ? proyecto.imagenes : [Portafolio.portfolio];

  const nextImage = () => setIndex((prev) => (prev + 1) % imgs.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + imgs.length) % imgs.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 ${
        proyecto.destacado
          ? darkMode
            ? "bg-[#0f172a] border-2 border-amber-400/60 hover:border-amber-300 shadow-amber-500/10"
            : "bg-[#d7dae4] border-2 border-amber-500/70 hover:border-amber-600"
          : darkMode
            ? "bg-[#0f172a] border border-cyan-500/30 hover:border-cyan-400/60"
            : "bg-[#d7dae4] border border-gray-300 hover:border-gray-400"
      }`}
    >
      {/* Slider */}
      <div className="relative h-64 overflow-hidden group bg-black/5">
        {proyecto.destacado && (
          <span
            className={`absolute top-2 left-2 z-20 px-2 py-1 rounded-md text-xs font-bold shadow-md ${
              darkMode
                ? "bg-amber-400 text-gray-900"
                : "bg-amber-500 text-white"
            }`}
          >
            ⭐ {lang === "es" ? "Destacado" : "Featured"}
          </span>
        )}
        <AnimatePresence>
          <motion.img
            key={index}
            src={imgs[index]}
            alt={`${proyecto.titulo[lang]} ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setGlobalFullImage({ imgs, index })}
            className="w-full h-full object-contain absolute inset-0 cursor-pointer"
            title={lang === "es" ? "Clic para ampliar" : "Click to enlarge"}
          />
        </AnimatePresence>

        <button
          onClick={() => setGlobalFullImage({ imgs, index })}
          className={`absolute top-2 right-2 p-2 rounded-lg text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            darkMode
              ? "bg-black/50 hover:bg-black/70 text-white"
              : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
          }`}
          title={lang === "es" ? "Ampliar imagen" : "Enlarge image"}
        >
          🔳
        </button>

        {imgs.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition font-bold text-xl ${
                darkMode
                  ? "bg-black/50 hover:bg-black/70 text-white"
                  : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
              }`}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition font-bold text-xl ${
                darkMode
                  ? "bg-black/50 hover:bg-black/70 text-white"
                  : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
              }`}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-cyan-300" : "text-gray-800"}`}>
            {proyecto.titulo[lang]}
          </h3>

          <div className="flex gap-2">
            {proyecto.repo && (
              <a
                href={proyecto.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 transition-transform hover:scale-105 ${
                  darkMode ? "bg-cyan-600 hover:bg-cyan-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                💻 Repo
              </a>
            )}
            {proyecto.demo && (
              <a
                href={proyecto.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1 transition-transform hover:scale-105 ${
                  darkMode ? "bg-cyan-600 hover:bg-cyan-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                🚀 Demo
              </a>
            )}
          </div>
        </div>

        <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          {proyecto.descripcion[lang]}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-3">
          {proyecto.tecnologias.map((tec, i) => (
            <div key={i} className="flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-md bg-white/10">
              <svg className="w-5 h-5" fill="currentColor">
                <use href={`/portfolio.min.svg#${tec.logo}`} />
              </svg>
              <span>{tec.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Proyectos;
