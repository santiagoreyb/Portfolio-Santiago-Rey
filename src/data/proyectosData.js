import {
  NeonCat,
  EcoGuardians,
  WhereIsIt,
  UniversityAdmissions,
  Vinos,
  CuantoNecesito,
  MultiActivityApp,
  MedicionAgua,
  Portafolio,
  Kakkuro,
  Tablut,
  Solar,
  FastE,
  FastU,
  SURE
} from "../assets/Proyectos/imagesP.js";

export const proyectos = [
  {
    titulo: { es: "SURE Agent", en: "SURE Agent" },
    descripcion: {
      es: "Agente inteligente y plataforma integral para optimizar la toma de decisiones empresariales.",
      en: "Intelligent agent and comprehensive platform to optimize business decision-making."
    },
    fecha: "2026",
    destacado: true,
    imagenes: [SURE.sure1, SURE.sure2, SURE.sure3, SURE.sure4],
    tecnologias: [
      { name: "Python", logo: "icon-python" },
      { name: "Streamlit", logo: "icon-python" },
      { name: "React", logo: "icon-react" },
      { name: "Node.js", logo: "icon-javascript" },
      { name: "IA", logo: "icon-brain-3" },
      { name: "Azure", logo: "icon-azure-1" },
    ],
    repo: "https://github.com/SURE-Agent/Sure",
    demo: "https://sure-cvabeeb9hugtbtcr.brazilsouth-01.azurewebsites.net/"
  },
  {
    titulo: { es: "NeonCat", en: "NeonCat" },
    descripcion: {
      es: "Videojuego desarrollado en Unity para el GameJam de la Sociedad Colombiana de Ingenieros. Incluye mecánicas de juego innovadoras, diseño de niveles y modelado 3D de personajes con Blender.",
      en: "Video game developed in Unity for the GameJam organized by the Colombian Society of Engineers. Includes innovative gameplay mechanics, level design, and 3D character modeling with Blender."
    },
    fecha: "Dic 2024 - Ene 2025",
    destacado: true,
    imagenes: [NeonCat.neoncat1, NeonCat.neoncat2],
    tecnologias: [
      { name: "C#", logo: "icon-c-sharp-logo" },
      { name: "Unity", logo: "icon-unity" },
      { name: "Blender", logo: "icon-blender-3d" },
      { name: "Illustrator", logo: "icon-adobe-illustrator" },
      { name: "Photoshop", logo: "icon-adobe-photoshop" },
    ],
    repo: "https://github.com/NeonCat-Game/NeonCat",
    demo: "https://santiagoreyb.itch.io/neoncat"
  },
  {
    titulo: { es: "EcoGuardians 2.0", en: "EcoGuardians 2.0" },
    descripcion: {
      es: "Videojuego 3D interactivo que promueve la conservación ambiental, recreando la Estación Biológica del Norte de Caldas. Integración de gráficos realistas, interacciones en tiempo real y despliegue web con React y Azure.",
      en: "Interactive 3D video game promoting environmental conservation, recreating the Northern Caldas Biological Station. Integrates realistic graphics, real-time interactions, and web deployment with React and Azure."
    },
    fecha: "Feb 2024 - Nov 2024",
    destacado: true,
    imagenes: [EcoGuardians.eco1, EcoGuardians.eco2, EcoGuardians.eco3],
    tecnologias: [
      { name: "C#", logo: "icon-c-sharp-logo" },
      { name: "Unity", logo: "icon-unity" },
      { name: "React", logo: "icon-react" },
      { name: "Blender", logo: "icon-blender-3d" },
      { name: "Illustrator", logo: "icon-adobe-illustrator" },
      { name: "Photoshop", logo: "icon-adobe-photoshop" },
      { name: "Azure", logo: "icon-azure-1" },
    ],
    repo: "https://gitlab.com/ecoguardians/Game-EcoGuardians-2.0",
    demo: "https://ecoguardians-kappa.vercel.app/"
  },
  {
    titulo: { es: "CuantoNecesitoPUJ", en: "CuantoNecesitoPUJ" },
    descripcion: {
      es: "Aplicación web que calcula la nota mínima necesaria para aprobar materias, ayudando a estudiantes a planificar su rendimiento académico. Implementa Angular, consumo de REST APIs y diseño de interfaz responsiva.",
      en: "Web application that calculates the minimum grade needed to pass subjects, helping students plan their academic performance. Implements Angular, consumes REST APIs, and features a responsive interface."
    },
    fecha: "Feb 2021 - Jun 2021",
    imagenes: [CuantoNecesito.cuanto1, CuantoNecesito.cuanto2, CuantoNecesito.cuanto3],
    tecnologias: [
      { name: "Angular", logo: "icon-angularjs" },
      { name: "HTML", logo: "icon-html-5" },
      { name: "CSS", logo: "icon-css3" },
      { name: "Typescript", logo: "icon-typescript" },
      { name: "REST API", logo: "icon-api-settings" },
      { name: "Java", logo: "icon-java-coffee-cup-logo" },
      { name: "Spring Boot", logo: "icon-spring-logo" }

    ],
    repo: "https://github.com/CapituloJaverianoACM/cuanto-necesito-PUJ"
  },
  {
    titulo: { es: "Redes Neuronales - Clasificación de Vinos", en: "Neural Networks - Wine Classification" },
    descripcion: {
      es: "Proyecto de machine learning para predecir la calidad del vino utilizando redes neuronales feed-forward y el dataset Wine Quality (UCI). Incluye preprocesamiento de datos con Pandas y NumPy, y entrenamiento de modelos con TensorFlow.",
      en: "Machine learning project to predict wine quality using feed-forward neural networks and the Wine Quality (UCI) dataset. Includes data preprocessing with Pandas and NumPy, and model training with TensorFlow."
    },
    fecha: "2023",
    imagenes: [Vinos.vino1, Vinos.vino2, Vinos.vino3, Vinos.vino4, Vinos.vino5, Vinos.vino6],
    tecnologias: [
      { name: "Python", logo: "icon-python" },
      { name: "Machine Learning", logo: "icon-brain-3" },
      { name: "TensorFlow", logo: "icon-tensorflow" },
      { name: "Pandas", logo: "icon-pandas" },
      { name: "NumPy", logo: "icon-numpy" },
    ],
    repo: "https://github.com/santiagoreyb/Redes_Neuronales"
  },
  {
    titulo: { es: "WhereIsIt", en: "WhereIsIt" },
    descripcion: {
      es: "Aplicación móvil para rastreo de dispositivos en tiempo real, con autenticación de usuarios, roles y geolocalización. Desarrollada en Kotlin y Firebase, integrando Google Maps y OpenStreetMap para visualización interactiva.",
      en: "Mobile application for real-time device tracking, with user authentication, roles, and geolocation. Developed in Kotlin and Firebase, integrating Google Maps and OpenStreetMap for interactive visualization."
    },
    fecha: "2024",
    imagenes: [WhereIsIt.where1, WhereIsIt.where2, WhereIsIt.where3, WhereIsIt.where4],
    tecnologias: [
      { name: "Kotlin", logo: "icon-kotlin" },
      { name: "Android Studio", logo: "icon-android-studio" },
      { name: "XML UI", logo: "icon-xml" },
      { name: "Firebase", logo: "icon-firebase" },
      { name: "Google Maps API", logo: "icon-google-maps-new" },
      { name: "OSM API", logo: "icon-map-marker" },
    ],
    repo: "https://github.com/santiagoreyb/WhereIsIt"
  },
  {
    titulo: { es: "University Admissions", en: "University Admissions" },
    descripcion: {
      es: "Sistema para gestión de aspirantes universitarios, consultas de pagos y verificación de registros. Implementado con .NET y Oracle DB, con interfaz intuitiva y manejo seguro de datos.",
      en: "System for managing university applicants, payment queries, and record verification. Implemented with .NET and Oracle DB, featuring an intuitive interface and secure data handling."
    },
    fecha: "2024",
    imagenes: [UniversityAdmissions.university1, UniversityAdmissions.university2, UniversityAdmissions.university3],
    tecnologias: [
      { name: ".NET 8", logo: "icon-net-framework" },
      { name: "Razor Views", logo: "icon-net-framework" },
      { name: "Oracle DB", logo: "icon-oracle-pl-sql" },
      { name: "PL/SQL", logo: "icon-oracle-pl-sql" },
    ],
    repo: "https://github.com/santiagoreyb/UniversityAdmissions"
  },
  {
    titulo: { es: "MultiActivityApp", en: "MultiActivityApp" },
    descripcion: {
      es: "Aplicación Android con varias actividades para practicar fundamentos de desarrollo móvil, navegación entre pantallas y consumo de APIs geoespaciales usando OpenStreetMap.",
      en: "Android application with multiple activities to practice mobile development fundamentals, screen navigation, and consumption of geospatial APIs using OpenStreetMap."
    },
    fecha: "2022",
    imagenes: [MultiActivityApp.multi1, MultiActivityApp.multi2, MultiActivityApp.multi3, MultiActivityApp.multi4, MultiActivityApp.multi5],
    tecnologias: [
      { name: "Kotlin", logo: "icon-kotlin" },
      { name: "Android Studio", logo: "icon-android-studio" },
      { name: "XML UI", logo: "icon-xml" },
      { name: "OSM API", logo: "icon-map-marker" },
    ],
    repo: "https://github.com/santiagoreyb/MultiActivityApp"
  },
  {
    titulo: { es: "FastEvent", en: "FastEvent" },
    descripcion: {
      es: "Plataforma web para coordinar y gestionar eventos sociales, facilitando la comunicación entre organizadores y proveedores de servicios. Incluye gestión de lugares, catering y otros servicios con interfaz amigable.",
      en: "Web platform to coordinate and manage social events, facilitating communication between organizers and service providers. Includes management of venues, catering, and other services with a friendly interface."
    },
    fecha: "2021",
    imagenes: [FastE.faste1, FastE.faste2, FastE.faste3, FastE.faste4, FastE.faste5, FastE.faste6],
    tecnologias: [
      { name: "JavaFX", logo: "icon-scene-builder" },
      { name: "Scene Builder", logo: "icon-scene-builder" },
      { name: "Java", logo: "icon-java-coffee-cup-logo" },
    ],
    repo: "https://github.com/StiivenOrtiz/FastEvent"
  },
  {
    titulo: { es: "FastU", en: "FastU" },
    descripcion: {
      es: "Plataforma integral de pedidos y entregas dentro del entorno universitario, inspirada en modelos como Rappi. Permite a los estudiantes realizar pedidos, a los domiciliarios gestionarlos en tiempo real y a las empresas registrar sus productos, marcas y promociones.",
      en: "Comprehensive ordering and delivery platform within the university environment, inspired by models like Rappi. Allows students to place orders, couriers to manage them in real-time, and companies to register products, brands, and promotions."
    },
    fecha: "2023",
    imagenes: [FastU.fastu1, FastU.fastu2, FastU.fastu3, FastU.fastu4, FastU.fastu5, FastU.fastu6, FastU.fastu7],
    tecnologias: [
      { name: "JavaFX", logo: "icon-scene-builder" },
      { name: "Scene Builder", logo: "icon-scene-builder" },
      { name: "Java", logo: "icon-java-coffee-cup-logo" },
    ],
    repo: "https://github.com/StiivenOrtiz/Fast-U"
  },
  {
    titulo: { es: "Sistema de Medición de Calidad del Agua", en: "Water Quality Measurement System" },
    descripcion: {
      es: "Proyecto distribuido para monitorear parámetros de calidad del agua como pH, temperatura y turbidez. Implementa comunicación síncrona y asíncrona mediante MQTT y Pub/Sub para sistemas IoT.",
      en: "Distributed project to monitor water quality parameters such as pH, temperature, and turbidity. Implements synchronous and asynchronous communication using MQTT and Pub/Sub for IoT systems."
    },
    fecha: "2024",
    imagenes: [MedicionAgua.agua1, MedicionAgua.agua2],
    tecnologias: [
      { name: "C", logo: "icon-c-programming" },
      { name: "MQTT", logo: "icon-cloud-development" },
      { name: "Pub/Sub", logo: "icon-cloud-firestore" },
      { name: "Ubuntu", logo: "icon-ubuntu" },
    ],
    repo: ""
  },
  {
    titulo: { es: "Kakkuro", en: "Kakkuro" },
    descripcion: {
      es: "Rompecabezas lógico estilo crucigrama numérico desarrollado en Python con Tkinter. Los jugadores pueden completar la cuadrícula manualmente o usar una heurística integrada que resuelve automáticamente el puzzle.",
      en: "Logic puzzle in the style of a numeric crossword developed in Python with Tkinter. Players can manually complete the grid or use an integrated heuristic that automatically solves the puzzle."
    },
    fecha: "2024",
    imagenes: [Kakkuro.kakkuro1, Kakkuro.kakkuro2, Kakkuro.kakkuro3, Kakkuro.kakkuro4, Kakkuro.kakkuro5, Kakkuro.kakkuro6],
    tecnologias: [
      { name: "Python", logo: "icon-python" },
      { name: "Tkinter", logo: "icon-python" },
    ],
    repo: "https://github.com/santiagoreyb/Kakkuro"
  },
  {
    titulo: { es: "Tablut", en: "Tablut" },
    descripcion: {
      es: "Juego de mesa digital basado en TABLUT para dos jugadores, gestionando turnos y movimientos de fichas con reglas clásicas del juego nórdico.",
      en: "Digital board game based on TABLUT for two players, managing turns and piece movements according to classic Nordic game rules."
    },
    fecha: "C++ · 2024",
    imagenes: [Tablut.tablut1],
    tecnologias: [
      { name: "C++", logo: "icon-c-plus-plus-logo" },
    ],
    repo: "https://github.com/santiagoreyb/Tablut"
  },
  {
    titulo: { es: "Sistema Solar", en: "Solar System" },
    descripcion: {
      es: "Simulación interactiva de un sistema solar a escala en Python, incluyendo rotaciones orbitales, satélites, texturas realistas y shaders personalizados. Permite navegación con cámara y control de órbitas. Desarrollado con OpenGL y PyGame.",
      en: "Interactive scaled solar system simulation in Python, including orbital rotations, satellites, realistic textures, and custom shaders. Allows camera navigation and orbit control. Developed with OpenGL and PyGame."
    },
    fecha: "2024",
    imagenes: [Solar.system1, Solar.system2, Solar.system3, Solar.system4],
    tecnologias: [
      { name: "Python", logo: "icon-python" },
    ],
    repo: "https://github.com/KironStylo/SolarSystem"
  },
  {
    titulo: { es: "Portafolio Web", en: "Web Portfolio" },
    descripcion: {
      es: "Portafolio personal desarrollado en React, con modo oscuro, animaciones con Framer Motion y diseño responsive. Presenta proyectos de manera interactiva y moderna.",
      en: "Personal portfolio developed in React, featuring dark mode, animations with Framer Motion, and responsive design. Showcases projects interactively and modernly."
    },
    fecha: "2025",
    imagenes: [Portafolio],
    tecnologias: [
      { name: "React", logo: "icon-react" },
      { name: "TailwindCSS", logo: "icon-tailwind_css" },
      { name: "Framer Motion", logo: "icon-innovation" },
      { name: "Vite", logo: "icon-vite" },
    ],
    repo: "https://github.com/santiagoreyb/Portfolio-Santiago-Rey"
  }
];
