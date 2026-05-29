import jonAvatar from "../assets/jonwik.png";

// Datos centralizados del portfolio. Editar aquí los copys.

export const profile = {
  name: "Jon Nahuel Pereyra",
  role: "COO & Co-fundador de useTeam",
  location: "Buenos Aires, Argentina · Canarias, España",
  avatar: jonAvatar,
  typewriterPhrases: [
    "innovation",
    "teamwork",
    "collaboration",
    "creativity",
    "leadership",
    "technology",
    "passion",
    "growth",
    "impact",
  ],
  intro:
    "Lidero la operación de useTeam: soluciones agénticas avanzadas y experiencias inmersivas para clientes de toda España, Portugal y la Unión Europea.",
  tagline: "Soluciones agénticas · Experiencias inmersivas",
  heroMetrics: [
    { value: "200+", label: "Proyectos entregados" },
    { value: "40+", label: "Talentos en el equipo" },
    { value: "24/7", label: "Agentes en operación" },
    { value: "6", label: "Países activos" },
  ],
  heroTags: ["Gravitad", "Cognitfy", "Diseño de procesos", "Canarias", "IA B2B"],
  whatsapp: "+5491154819253",
  email: "jonnahuel78@gmail.com",
  linkedin: "https://www.linkedin.com/in/jon-nahuel-pereyra/",
  github: "https://github.com/jon0010",
};

export const IMAGES = {
  gravitad:
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1780043302/Captura_de_pantalla_2026-05-29_052733_tfw06h.png",
  cognitfy:
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1780043302/Captura_de_pantalla_2026-05-29_052652_beguy1.png",
  convocatoria:
    "https://res.cloudinary.com/dkpotpaaf/image/upload/v1780043302/Captura_de_pantalla_2026-05-29_052709_x5wmnj.png",
};

// Hitos del más reciente al más antiguo
export const milestones = [
  {
    date: "2026",
    title: "Web Convocatoria Gravitad × SIDECA",
    place: "Tenerife · Gran Canaria",
    text: "Desarrollo de la web de la Convocatoria de emprendedores Gravitad 2026 con SIDECA Robótica y Tecnología: hasta 30.000€, mentoría y clientes piloto.",
  },
  {
    date: "2025 — actualidad",
    title: "Partner de Cognitfy",
    place: "IA empresarial B2B",
    text: "Partners en Cognitfy: automatización inteligente B2B con agentes que ejecutan procesos completos 24/7.",
  },
  {
    date: "2025 — actualidad",
    title: "+200 proyectos entregados",
    place: "España · Portugal",
    text: "Desde la alianza hemos entregado con éxito más de 200 proyectos, con clientes en múltiples regiones de España y Portugal.",
  },
  {
    date: "21 ABR 2025 — actualidad",
    title: "COO de useTeam",
    place: "Canarias, España",
    text: "Asumí como COO de useTeam. Viajamos a España para formalizar la alianza con Gravitad como partner tecnológico —y el de otras empresas de la UE—, consolidando la operación con sede en Canarias.",
  },
  {
    date: "FEB 2024 — MAR 2025",
    title: "Team Leader Back-end · Gravitad",
    place: "Las Palmas, España",
    text: "Lideré técnica y personalmente a un equipo de 24 personas. Microservicios y APIs para múltiples proyectos: backend para videojuegos en Unity, frontends en React, APKs, revisión de código y documentación.",
  },
  {
    date: "ENE 2024 — MAY 2024",
    title: "Desarrollador Back-end · Gravitad",
    place: "Las Palmas, España",
    text: "Aceleradora con financiamiento de la Unión Europea y el gobierno de España. Desarrollo de sistemas multiplataforma y software innovador de uso interno.",
  },
  {
    date: "OCT 2023 — ENE 2024",
    title: "Full Stack · ClinicalTech SRL",
    place: "Buenos Aires, Argentina",
    text: "Asesoría, planificación, diseño y desarrollo de un sitio web autogestionable para venta de insumos hospitalarios.",
  },
  {
    date: "JUN 2023 — OCT 2023",
    title: "Docente de Diseño Gráfico Digital",
    place: "Buenos Aires, Argentina",
    text: "Instruí a +100 alumnos en diseño gráfico digital y gestión de proyectos, programa del gobierno de la Ciudad de Buenos Aires y la UTN.",
  },
];

export const experiences = [
  {
    id: "gravitad",
    brand: "Gravitad",
    image: IMAGES.gravitad,
    tag: "Partner tecnológico",
    title: "Aceleradora de proyectos",
    text: "Partner tecnológico de Gravitad (Las Palmas de Gran Canaria). Desarrollo de plataformas, microservicios y productos digitales para su ecosistema y empresas de la Unión Europea.",
    link: "https://gravitad.com/",
  },
  {
    id: "cognitfy",
    brand: "Cognitfy",
    image: IMAGES.cognitfy,
    tag: "IA agéntica B2B",
    title: "Automatización inteligente",
    text: "Partners en soluciones agénticas de IA empresarial. Agentes que ejecutan procesos completos 24/7 integrándose con +1.400 herramientas.",
    link: "https://cognitfy.com/",
  },
  {
    id: "convocatoria",
    brand: "Gravitad × SIDECA",
    image: IMAGES.convocatoria,
    tag: "Convocatoria 2026",
    title: "Web de emprendedores",
    text: "Web de la Convocatoria Gravitad 2026 junto a SIDECA Robótica y Tecnología (Tenerife): hasta 30.000€ de financiación, mentoría y clientes piloto.",
    link: "https://convocatoria2026.gravitad.com/",
  },
];

// icon: nombre del componente Lucide
export const sliderItems = [
  { label: "Soluciones agénticas", icon: "Bot" },
  { label: "Experiencias inmersivas", icon: "Globe" },
  { label: "Agentes de IA B2B", icon: "BrainCircuit" },
  { label: "Web & Mobile", icon: "MonitorSmartphone" },
  { label: "Scraping & Big Data", icon: "Database" },
  { label: "RPA", icon: "Workflow" },
  { label: "Gestión de equipos multidisciplinarios", icon: "UsersRound" },
  { label: "Consultoría técnica", icon: "MessageSquareCode" },
  { label: "Mitigación de riesgos", icon: "ShieldCheck" },
  { label: "Diseño de flujos de trabajo", icon: "GitBranch" },
  { label: "Capacidad creativa", icon: "Sparkles" },
  { label: "Diseño de procesos", icon: "Layers" },
  { label: "Fine-tuning de modelos", icon: "Cpu" },
  { label: "España & Portugal", icon: "MapPin" },
];

export const partners = [
  { name: "Gravitad", url: "https://gravitad.com/" },
  { name: "Cognitfy", url: "https://cognitfy.com/" },
  { name: "SIDECA Robótica", url: "#" },
  { name: "useTeam", url: "#" },
];
