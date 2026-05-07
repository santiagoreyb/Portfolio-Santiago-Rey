import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Habilidades({ darkMode, lang }) {
  const [isOpen, setIsOpen] = useState(true);

  // Traducciones de textos
  const textos = {
    es: {
      tituloGeneral: "🧠 Habilidades Técnicas",
      cerrar: "Cerrar sección",
      abrir: "Abrir sección",
      categorias: {
        frontend: "💻 Frontend",
        backend: "⚙️ Backend",
        ia: "🤖 Inteligencia Artificial",
        cloud: "☁️ Cloud y DevOps",
        db: "🗄️ Bases de Datos",
        mobile: "📱 Desarrollo Móvil",
        so: "🖥️ Sistemas Operativos",
        sap: "📊 SAP (básico)",
        tools: "🛠️ Herramientas y Diseño",
      },
    },
    en: {
      tituloGeneral: "🧠 Technical Skills",
      cerrar: "Close section",
      abrir: "Open section",
      categorias: {
        frontend: "💻 Frontend",
        backend: "⚙️ Backend",
        ia: "🤖 Artificial Intelligence",
        cloud: "☁️ Cloud and DevOps",
        db: "🗄️ Databases",
        mobile: "📱 Mobile Development",
        so: "🖥️ Operating Systems",
        sap: "📊 SAP (basic)",
        tools: "🛠️ Tools and Design",
      },
    },
  };

  const t = textos[lang];

  const categorias = [
    {
      titulo: t.categorias.frontend,
      tecnologias: [
        { nombre: "React", logo: "icon-react" },
        { nombre: "Angular", logo: "icon-angularjs" },
        { nombre: "JavaScript", logo: "icon-javascript" },
        { nombre: "TypeScript", logo: "icon-typescript" },
        { nombre: "HTML5", logo: "icon-html-5" },
        { nombre: "CSS3", logo: "icon-css3" },
        { nombre: "Tailwind CSS", logo: "icon-tailwind_css" },
        { nombre: "Bootstrap", logo: "icon-bootstrap" },
        { nombre: "Vite", logo: "icon-vite" },
        { nombre: "JavaFX", logo: "icon-scene-builder" },
        { nombre: "Razor Views", logo: "icon-net-framework" },
      ],
    },
    {
      titulo: t.categorias.backend,
      tecnologias: [
        { nombre: "C#", logo: "icon-c-sharp-logo" },
        { nombre: ".NET", logo: "icon-net-framework" },
        { nombre: "Java", logo: "icon-java-coffee-cup-logo" },
        { nombre: "Spring Boot (Básico)", logo: "icon-spring-logo" },
        { nombre: "Python", logo: "icon-python" },
        { nombre: "C++", logo: "icon-c-plus-plus-logo" },
        { nombre: "C", logo: "icon-c-programming" },
        { nombre: "Apache", logo: "icon-external-apache-a-free-and-open-source-cross-platform-web-server-software-logo-shadow-tal-revivo" },
      ],
    },
    {
      titulo: t.categorias.ia,
      tecnologias: [
        { nombre: "TensorFlow", logo: "icon-tensorflow" },
        { nombre: "PyTorch", logo: "icon-pytorch" },
        { nombre: "Keras", logo: "icon-keras" },
        { nombre: "Pandas", logo: "icon-pandas" },
        { nombre: "NumPy", logo: "icon-numpy" },
        { nombre: lang === "es" ? "IA Generativa" : "Generative AI", logo: "icon-ai-generated-code" },
        { nombre: "Machine Learning", logo: "icon-brain-3" },
        { nombre: "Codex, Gemini, Cursor, Copilot", logo: "icon-ai-generated-code" },
        { nombre: "Arquitecturas RAG", logo: "icon-brain-3" },
        { nombre: "NLP", logo: "icon-brain-3" },
        { nombre: "LangChain", logo: "icon-python" },
        { nombre: "LangGraph", logo: "icon-python" },
        { nombre: lang === "es" ? "Agentes Autónomos" : "Autonomous Agents", logo: "icon-brain-3" },
      ],
    },
    {
      titulo: t.categorias.cloud,
      tecnologias: [
        { nombre: "Google Cloud", logo: "icon-google-cloud" },
        { nombre: "Microsoft Azure", logo: "icon-azure-1" },
        { nombre: "Amazon Web Services", logo: "icon-amazon-web-services" },
        { nombre: "Firebase", logo: "icon-firebase" },
        { nombre: "Docker", logo: "icon-docker" },
        { nombre: "Kubernetes", logo: "icon-kubernetes" },
        { nombre: "Git", logo: "icon-git" },
        { nombre: "GitHub", logo: "icon-github" },
      ],
    },
    {
      titulo: t.categorias.db,
      tecnologias: [
        { nombre: "PostgreSQL", logo: "icon-postgreesql" },
        { nombre: "MySQL", logo: "icon-external-mysql-an-open-source-relational-database-management-system-logo-color-tal-revivo" },
        { nombre: "MongoDB", logo: "icon-external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo" },
        { nombre: "SQL Server", logo: "icon-microsoft-sql-server" },
        { nombre: "Oracle", logo: "icon-oracle-pl-sql" },
        { nombre: "Firebase DB", logo: "icon-firebase" },
      ],
    },
    {
      titulo: t.categorias.mobile,
      tecnologias: [
        { nombre: "Android", logo: "icon-android-os" },
        { nombre: "Kotlin", logo: "icon-kotlin" },
        { nombre: "Dart (básico)", logo: "icon-dart" },
        { nombre: "Flutter (básico)", logo: "icon-flutter" },
        { nombre: "Android Studio", logo: "icon-android-studio" },
      ],
    },
    {
      titulo: t.categorias.so,
      tecnologias: [
        { nombre: "Linux", logo: "icon-linux" },
        { nombre: "Ubuntu", logo: "icon-ubuntu" },
        { nombre: "Windows Server", logo: "icon-server-windows" },
        { nombre: "Windows", logo: "icon-windows-11" },
        { nombre: "MacOS", logo: "icon-mac-os" },
      ],
    },
    {
      titulo: t.categorias.sap,
      tecnologias: [{ nombre: "SAP Fiori / SAP BTP", logo: "icon-sap" }],
    },
    {
      titulo: t.categorias.tools,
      tecnologias: [
        { nombre: "Figma", logo: "icon-figma" },
        { nombre: "Adobe Illustrator", logo: "icon-adobe-illustrator" },
        { nombre: "Adobe Photoshop", logo: "icon-adobe-photoshop" },
        { nombre: "Unity", logo: "icon-unity" },
        { nombre: "IntelliJ IDEA", logo: "icon-intellij-idea" },
        { nombre: "VS Code", logo: "icon-visual-studio-code-2019" },
        { nombre: "Visual Studio", logo: "icon-visual-studio" },
        { nombre: "Office 365", logo: "icon-office-365" },
        { nombre: "Jira", logo: "icon-jira" },
        { nombre: "Trello", logo: "icon-external-trello-a-web-based-list-making-application-for-multi-platform-logo-color-tal-revivo" },
        { nombre: "Vercel", logo: "icon-vercel" },
      ],
    },
  ];

  return (
    <div
      className={`w-[90%] max-w-6xl mx-auto pt-10 transition-all duration-300 ${isOpen ? "min-h-screen" : "h-auto"
        }`}
    >
      <div className="relative mb-6">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-wide text-center ${darkMode ? "text-white" : "text-gray-800"
            }`}
        >
          {t.tituloGeneral}
        </h2>

        <button
          onClick={() => setIsOpen((s) => !s)}
          aria-expanded={isOpen}
          className={`absolute right-2 top-0 text-3xl md:text-4xl font-bold ${darkMode
              ? "text-white hover:bg-white/10"
              : "text-gray-700 hover:bg-gray-300/50"
            } transition px-2 rounded-md`}
          title={isOpen ? t.cerrar : t.abrir}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      <div
        className={`mx-auto h-[2px] w-full rounded-full ${darkMode ? "bg-cyan-300/50" : "bg-gray-500/40"
          }`}
      ></div>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-[5000px] mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-4 mt-10">
          {categorias.map((cat, idx) => (
            <Categoria
              key={idx}
              categoria={cat}
              darkMode={darkMode}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Categoria({ categoria, darkMode, delay }) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = containerRef.current;
    el.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl shadow-md border pt-5 transition-all duration-300 backdrop-blur-md ${darkMode
          ? "bg-[#0f172a]/80 border-cyan-500/30 hover:border-cyan-400/60"
          : "bg-[#cdd3e1] border-gray-300 hover:border-gray-400"
        }`}
    >
      <h3
        className={`text-xl font-semibold mb-3 ${darkMode ? "text-cyan-300" : "text-gray-800"
          }`}
      >
        {categoria.titulo}
      </h3>

      <div className="relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full font-bold text-xl ${darkMode
                ? "bg-black/50 hover:bg-black/70 text-white"
                : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
              }`}
          >
            ‹
          </button>
        )}

        <div
          ref={containerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth px-15"
        >
          {categoria.tecnologias.map((tech, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center min-w-[90px] px-3 py-2 rounded-xl border transition-all duration-300 ${darkMode
                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/20"
                  : "bg-cyan-100 border-cyan-300 text-cyan-700 hover:bg-cyan-200"
                }`}
            >
              <svg className="w-9 h-9 mb-1" aria-hidden="true">
                <use href={`/portfolio.min.svg#${tech.logo}`} />
              </svg>
              <span className="text-xs font-medium text-center">
                {tech.nombre}
              </span>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full font-bold text-xl ${darkMode
                ? "bg-black/50 hover:bg-black/70 text-white"
                : "bg-gray-400/60 hover:bg-gray-500 text-gray-900"
              }`}
          >
            ›
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default Habilidades;
