import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  Users,
  Database,
  Cpu,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { gsap, ScrollTrigger, hasGsap } from "../lib/gsap";
import { profile } from "../data/portfolio";

const services = [
  {
    id: 0,
    icon: Bot,
    title: "Agentes de Llamadas",
    subtitle: "IA conversacional para atención telefónica",
    description:
      "Agentes de IA para consultas, ventas, soporte y atención al cliente con voz natural y contexto de negocio.",
    features: [
      "Síntesis de voz natural",
      "Comprensión de contexto",
      "Gestión de emociones",
      "Integración con CRM",
    ],
  },
  {
    id: 1,
    icon: Users,
    title: "Agentes de Stream Avatar",
    subtitle: "Avatares en tiempo real",
    description:
      "Avatares virtuales en streaming para interacciones visuales inmersivas y personalizadas con tus clientes.",
    features: [
      "Avatares personalizables",
      "Streaming en tiempo real",
      "Expresiones faciales",
      "Sincronización de labios",
    ],
  },
  {
    id: 2,
    icon: Database,
    title: "Scraping y Big Data",
    subtitle: "Extracción y análisis masivo",
    description:
      "Web scraping y pipelines de datos que transforman información dispersa en insights accionables.",
    features: [
      "Web scraping inteligente",
      "Procesamiento de big data",
      "Análisis predictivo",
      "Visualizaciones avanzadas",
    ],
  },
  {
    id: 3,
    icon: Cpu,
    title: "Fine-tuning y Modelos",
    subtitle: "IA adaptada a tu operación",
    description:
      "Modelos entrenados y afinados para las necesidades específicas de tu negocio con precisión medible.",
    features: [
      "Entrenamiento personalizado",
      "Fine-tuning de modelos",
      "Optimización continua",
      "Adaptación por industria",
    ],
  },
];

const stats = [
  { number: "+200", label: "Proyectos entregados" },
  { number: "24/7", label: "Operación continua" },
  { number: "60%", label: "Ahorro operativo" },
  { number: "+1400", label: "Integraciones posibles" },
];

const process = [
  { step: "01", title: "Descubrimiento", desc: "Mapeamos procesos y oportunidades de IA." },
  { step: "02", title: "Diseño", desc: "Arquitectura, flujos y definición funcional." },
  { step: "03", title: "Desarrollo", desc: "Construcción y entrenamiento del agente." },
  { step: "04", title: "Implementación", desc: "Despliegue, métricas y optimización." },
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const pageRef = useRef(null);
  const active = services[activeService];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (!hasGsap()) return;
    const ctx = gsap.context(() => {
      gsap.from(".svc-reveal", {
        scrollTrigger: { trigger: pageRef.current, start: "top 75%" },
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-wrap services-page">
      <section className="container page-inner svc-hero svc-reveal">
        <span className="section-kicker">Servicios IA</span>
        <h1 className="section-title svc-hero-title">
          Agentes que <span className="text-accent">transforman</span> tu
          operación
        </h1>
        <p className="section-sub">
          Soluciones agénticas y automatización inteligente diseñadas para
          escalar sin fricción — desde useTeam y partners como Cognitfy.
        </p>
      </section>

      <section className="container svc-stats svc-reveal">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-number stat-number-text">{s.number}</div>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container svc-panel svc-reveal">
        <div className="svc-tabs">
          <h2 className="svc-tabs-title">Servicios</h2>
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <button
                key={svc.id}
                type="button"
                className={`svc-tab ${activeService === index ? "is-active" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <span className="svc-tab-icon">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <span>
                  <strong>{svc.title}</strong>
                  <small>{svc.subtitle}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="svc-content">
          <div className="svc-content-head">
            <span className="svc-content-icon">
              <ActiveIcon size={28} strokeWidth={1.25} />
            </span>
            <div>
              <h3>{active.title}</h3>
              <p>{active.subtitle}</p>
            </div>
          </div>
          <p className="svc-content-desc">{active.description}</p>
          <ul className="svc-features">
            {active.features.map((f) => (
              <li key={f}>
                <Check size={16} strokeWidth={2} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container svc-process svc-reveal">
        <h2 className="section-title">Proceso</h2>
        <div className="svc-process-grid">
          {process.map((item, i) => (
            <div className="svc-process-card" key={item.step}>
              <span className="svc-process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {i < process.length - 1 && (
                <ArrowRight className="svc-process-arrow" size={18} />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container svc-cta svc-reveal">
        <div className="svc-cta-box">
          <Sparkles size={32} strokeWidth={1.25} className="svc-cta-icon" />
          <h2>¿Listo para automatizar tu negocio?</h2>
          <p>
            Consulta gratuita para analizar tus procesos y definir el primer
            agente con impacto medible.
          </p>
          <div className="svc-cta-actions">
            <button
              type="button"
              className="btn-tech btn-tech-primary"
              onClick={() =>
                window.open(`https://wa.me/${profile.whatsapp}`, "_blank")
              }
            >
              <IoLogoWhatsapp /> WhatsApp
            </button>
            <a
              href={`mailto:${profile.email}?subject=Consulta sobre Agentes de IA`}
              className="btn-tech"
            >
              <MdEmail /> Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
