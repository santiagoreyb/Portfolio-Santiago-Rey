import { useState } from "react";
import { motion } from "framer-motion";
import javeriana from "../assets/pictures/javeriana.png";

function Educacion({ darkMode, lang }) {
  const [isOpen, setIsOpen] = useState(true);

  const translations = {
    es: {
      title: "👨‍🎓 Educación",
      toggleClose: "Cerrar sección",
      toggleOpen: "Abrir sección",
      role: "Ingeniería de Sistemas",
      company: "Pontificia Universidad Javeriana",
      date: "Bogotá, Colombia · Ene 2021 - Mar 2025",
      recognitions: [
        "Beca por Excelencia Académica.",
        "Mención de Proyecto de Grado.",
        "Puesto sobresaliente en la carrera.",
      ],
      badge: "🏅 Ver insignia",
    },
    en: {
      title: "👨‍🎓 Education",
      toggleClose: "Close section",
      toggleOpen: "Open section",
      role: "Systems Engineering",
      company: "Pontifical Xavierian University",
      date: "Bogotá, Colombia · Jan 2021 - Mar 2025",
      recognitions: [
        "Academic Excellence Scholarship.",
        "Honorable Mention for Graduation Project.",
        "Outstanding ranking in the program.",
      ],
      badge: "🏅 View badge",
    },
  };

  const t = translations[lang];

  const experiences = [
    {
      company: t.company,
      role: t.role,
      date: t.date,
      logo: javeriana,
      recognitions: t.recognitions,
      insignia: "https://wallet.xertify.co/certificates/FB4B8666A002",
    },
  ];

  return (
    <div className="w-[90%] max-w-6xl mx-auto pt-5 transition-all duration-300 h-auto">
      {/* Encabezado */}
      <div className="relative mb-6 text-center">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {t.title}
        </h2>

        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className={`absolute right-2 top-0 text-2xl sm:text-3xl font-bold transition px-2 rounded-md ${
            darkMode
              ? "text-white hover:bg-white/10"
              : "text-gray-700 hover:bg-gray-200/50"
          }`}
          title={isOpen ? t.toggleClose : t.toggleOpen}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {/* Línea decorativa */}
      <div
        className={`mx-auto h-[2px] w-full rounded-full ${
          darkMode ? "bg-cyan-300/50" : "bg-gray-600/40"
        }`}
      ></div>

      {/* Contenido */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[1500px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-start">
          {/* Línea vertical centrada */}
          <div className="absolute left-5 top-0 bottom-10 w-[3px] bg-gradient-to-b from-cyan-300/50 to-blue-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex items-start mb-16 sm:mb-20 w-full"
            >
              {/* Círculo */}
              <div className="ml-[4px] w-8 h-8 rounded-full bg-[#0f172a] border-4 border-cyan-400 shadow-[0_0_20px_#22d3ee] z-10"></div>

              {/* Tarjeta principal */}
              <div className="ml-8 sm:ml-12 flex-1">
                <div
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 ${
                    darkMode
                      ? "bg-[#0f172a] border-cyan-500/30 hover:border-cyan-400/60"
                      : "bg-[#D9DFEE] border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {/* Encabezado con logo */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-md"
                      />
                      <div>
                        <h3
                          className={`text-lg sm:text-xl font-semibold ${
                            darkMode ? "text-cyan-300" : "text-[#2B4162]"
                          }`}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-[#C4D7E9]" : "text-gray-700"
                          }`}
                        >
                          {exp.company}
                        </p>
                        <p
                          className={`text-xs ${
                            darkMode ? "text-[#C4D7E9]" : "text-gray-600"
                          }`}
                        >
                          {exp.date}
                        </p>
                      </div>
                    </div>

                    <a
                      href={exp.insignia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sm:ml-auto px-3 sm:px-4 py-1 rounded-2xl shadow-lg backdrop-blur-md border text-xs sm:text-sm text-center ${
                        darkMode
                          ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                          : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                      }`}
                    >
                      {t.badge}
                    </a>
                  </div>

                  {/* Lista de reconocimientos */}
                  <ul
                    className={`flex flex-col gap-1 sm:gap-2 list-disc list-inside ${
                      darkMode ? "text-[#C4D7E9]" : "text-gray-700"
                    }`}
                  >
                    {exp.recognitions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Educacion;
