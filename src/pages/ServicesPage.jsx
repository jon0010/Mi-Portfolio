import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaCode,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdAutoAwesome } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

const ServicesPage = () => {
  const { isDark } = useTheme();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: <FaRobot />,
      title: "Agentes de Llamadas",
      subtitle: "IA conversacional para atención telefónica",
      description:
        "Desarrollo de agentes de IA especializados en llamadas telefónicas que pueden manejar consultas, ventas, soporte técnico y atención al cliente con naturalidad y eficiencia.",
      features: [
        "Síntesis de voz natural",
        "Comprensión de contexto",
        "Gestión de emociones",
        "Integración con CRM",
      ],
      color: "#06b6d4",
    },
    {
      id: 1,
      icon: <FaUsers />,
      title: "Agentes de Stream Avatar",
      subtitle: "Avatares en tiempo real para interacciones",
      description:
        "Creación de avatares virtuales que interactúan en tiempo real con tus clientes a través de streaming, proporcionando una experiencia visual inmersiva y personalizada.",
      features: [
        "Avatares personalizables",
        "Streaming en tiempo real",
        "Expresiones faciales",
        "Sincronización de labios",
      ],
      color: "#8b5cf6",
    },
    {
      id: 2,
      icon: <FaChartLine />,
      title: "Scraping y Análisis de Big Data",
      subtitle: "Extracción y análisis masivo de datos",
      description:
        "Sistemas avanzados de web scraping y análisis de big data que extraen información valiosa de múltiples fuentes y la procesan para generar insights accionables.",
      features: [
        "Web scraping inteligente",
        "Procesamiento de big data",
        "Análisis predictivo",
        "Visualizaciones avanzadas",
      ],
      color: "#10b981",
    },
    {
      id: 3,
      icon: <MdAutoAwesome />,
      title: "Fine Tuning y Modelos Personalizados",
      subtitle: "Modelos de IA adaptados a cada caso de uso",
      description:
        "Desarrollo y fine-tuning de modelos de IA personalizados específicamente entrenados para las necesidades únicas de tu negocio, garantizando máxima precisión y relevancia.",
      features: [
        "Entrenamiento personalizado",
        "Fine-tuning de modelos",
        "Optimización continua",
        "Adaptación específica",
      ],
      color: "#f59e0b",
    },
  ];

  const stats = [
    { number: "+20", label: "Países que usan nuestros agentes" },
    { number: "24/7", label: "Disponibilidad continua" },
    { number: "60%", label: "Ahorro en costes" },
    { number: "+100", label: "Integraciones disponibles" },
  ];

  const process = [
    {
      step: "01",
      title: "Descubrimiento",
      desc: "Analizamos tu negocio y identificamos oportunidades de IA",
    },
    {
      step: "02",
      title: "Diseño",
      desc: "Creamos la arquitectura y definimos las funcionalidades",
    },
    {
      step: "03",
      title: "Desarrollo",
      desc: "Construimos y entrenamos tu agente de IA personalizado",
    },
    {
      step: "04",
      title: "Implementación",
      desc: "Desplegamos y optimizamos la solución en tu entorno",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-vh-100"
      style={{ paddingTop: "2rem" }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container-fluid px-4 mb-5"
      >
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <BsStars
                size={60}
                style={{
                  color: "var(--useteam-accent)",
                  marginBottom: "1rem",
                }}
              />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="PORTFOLIO_FONT_3 mb-4"
              style={{
                fontSize: "3.5rem",
                background: "var(--useteam-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "700",
                letterSpacing: "-0.02em",
              }}
            >
              Agentes de IA que Transforman Negocios
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="PORTFOLIO_FONT_4 fs-5 mb-5"
              style={{
                color: isDark ? "#cbd5e1" : "#64748b",
                lineHeight: "1.7",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Desarrollo soluciones de inteligencia artificial personalizadas
              que automatizan procesos, analizan datos y mejoran la experiencia
              de tus clientes. Cada agente está diseñado específicamente para
              las necesidades de tu negocio.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mb-5"
      >
        <div className="row g-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="col-md-3 text-center"
            >
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  background: isDark
                    ? "rgba(248, 250, 252, 0.05)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(30, 58, 138, 0.2)"
                      : "rgba(59, 130, 246, 0.2)"
                  }`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <h2
                  className="fw-bold mb-2 PORTFOLIO_FONT_3"
                  style={{
                    fontSize: "2.5rem",
                    background: "var(--useteam-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </h2>
                <p
                  className="mb-0 fw-semibold PORTFOLIO_FONT_4"
                  style={{
                    color: isDark ? "#cbd5e1" : "#64748b",
                    fontSize: "1rem",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Services Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mb-5"
      >
        <div className="row">
          {/* Service Tabs */}
          <div className="col-lg-4 mb-4">
            <h3
              className="mb-4 fw-bold PORTFOLIO_FONT_3"
              style={{
                color: isDark ? "#f8fafc" : "#0f172a",
                fontSize: "1.8rem",
              }}
            >
              Nuestros Servicios
            </h3>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveService(index)}
                className={`p-4 mb-3 rounded-4 cursor-pointer transition-all position-relative overflow-hidden`}
                style={{
                  background:
                    activeService === index
                      ? "var(--useteam-gradient)"
                      : isDark
                      ? "rgba(248, 250, 252, 0.08)"
                      : "rgba(15, 23, 42, 0.08)",
                  border: `2px solid ${
                    activeService === index
                      ? "transparent"
                      : isDark
                      ? "rgba(30, 58, 138, 0.3)"
                      : "rgba(59, 130, 246, 0.3)"
                  }`,
                  cursor: "pointer",
                  transform:
                    activeService === index ? "translateX(8px)" : "none",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s ease",
                  }}
                  whileHover={{
                    transform: "translateX(100%)",
                  }}
                />

                <div className="d-flex align-items-center position-relative">
                  <motion.div
                    className="me-3 p-3 rounded-3"
                    style={{
                      background:
                        activeService === index
                          ? "rgba(255, 255, 255, 0.25)"
                          : service.color,
                      color: "white",
                      fontSize: "1.3rem",
                      boxShadow:
                        activeService === index
                          ? "0 8px 20px rgba(0, 0, 0, 0.2)"
                          : "0 4px 15px rgba(0, 0, 0, 0.1)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex-grow-1">
                    <h6
                      className="mb-1 fw-bold PORTFOLIO_FONT_4"
                      style={{
                        color:
                          activeService === index
                            ? "white"
                            : isDark
                            ? "#f8fafc"
                            : "#0f172a",
                        fontSize: "1.1rem",
                      }}
                    >
                      {service.title}
                    </h6>
                    <small
                      className="PORTFOLIO_FONT_4"
                      style={{
                        color:
                          activeService === index
                            ? "rgba(255, 255, 255, 0.85)"
                            : isDark
                            ? "#cbd5e1"
                            : "#64748b",
                        fontSize: "0.9rem",
                      }}
                    >
                      {service.subtitle}
                    </small>
                  </div>

                  {/* Indicador de selección */}
                  {activeService === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ms-2"
                      style={{
                        width: "8px",
                        height: "8px",
                        background: "white",
                        borderRadius: "50%",
                        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Content */}
          <div className="col-lg-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-5 rounded-4"
                style={{
                  background: isDark
                    ? "rgba(248, 250, 252, 0.05)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(30, 58, 138, 0.2)"
                      : "rgba(59, 130, 246, 0.2)"
                  }`,
                  backdropFilter: "blur(10px)",
                  minHeight: "400px",
                }}
              >
                <div className="d-flex align-items-center mb-4">
                  <motion.div
                    className="me-4 p-4 rounded-4"
                    style={{
                      background: services[activeService].color,
                      color: "white",
                      fontSize: "2.2rem",
                      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 5,
                    }}
                  >
                    {services[activeService].icon}
                  </motion.div>
                  <div>
                    <h3
                      className="mb-1 fw-bold PORTFOLIO_FONT_3"
                      style={{
                        color: isDark ? "#f8fafc" : "#0f172a",
                        fontSize: "1.8rem",
                      }}
                    >
                      {services[activeService].title}
                    </h3>
                    <p
                      className="mb-0 PORTFOLIO_FONT_4"
                      style={{
                        color: isDark ? "#cbd5e1" : "#64748b",
                        fontSize: "1.1rem",
                      }}
                    >
                      {services[activeService].subtitle}
                    </p>
                  </div>
                </div>

                <p
                  className="mb-4 fs-5 PORTFOLIO_FONT_4"
                  style={{
                    color: isDark ? "#cbd5e1" : "#64748b",
                    lineHeight: "1.7",
                  }}
                >
                  {services[activeService].description}
                </p>

                <h6
                  className="mb-3 fw-bold PORTFOLIO_FONT_4"
                  style={{
                    color: isDark ? "#f8fafc" : "#0f172a",
                    fontSize: "1.1rem",
                  }}
                >
                  Características principales:
                </h6>
                <div className="row">
                  {services[activeService].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="col-md-6 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="d-flex align-items-center">
                        <motion.div
                          className="me-3 p-2 rounded-2"
                          style={{
                            background: services[activeService].color,
                            color: "white",
                            fontSize: "0.9rem",
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <FaCheck />
                        </motion.div>
                        <span
                          className="PORTFOLIO_FONT_4"
                          style={{
                            color: isDark ? "#cbd5e1" : "#64748b",
                            fontSize: "1rem",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mb-5"
      >
        <div className="text-center mb-5">
          <h3
            className="fw-bold mb-3 PORTFOLIO_FONT_3"
            style={{
              color: isDark ? "#f8fafc" : "#0f172a",
              fontSize: "2.5rem",
            }}
          >
            Nuestro Proceso
          </h3>
          <p
            className="fs-5 PORTFOLIO_FONT_4"
            style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
          >
            Un enfoque estructurado para crear la solución perfecta
          </p>
        </div>

        <div className="row g-4">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              className="col-md-3"
            >
              <div
                className="text-center p-4 rounded-4 h-100"
                style={{
                  background: isDark
                    ? "rgba(248, 250, 252, 0.05)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(30, 58, 138, 0.2)"
                      : "rgba(59, 130, 246, 0.2)"
                  }`,
                  position: "relative",
                }}
              >
                <div
                  className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center fw-bold"
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "var(--useteam-gradient)",
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.step}
                </div>
                <h5
                  className="mb-3 fw-bold PORTFOLIO_FONT_3"
                  style={{ color: isDark ? "#f8fafc" : "#0f172a" }}
                >
                  {item.title}
                </h5>
                <p
                  className="small mb-0 PORTFOLIO_FONT_4"
                  style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
                >
                  {item.desc}
                </p>

                {index < process.length - 1 && (
                  <FaArrowRight
                    className="position-absolute d-none d-md-block"
                    style={{
                      right: "-15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--useteam-accent)",
                      fontSize: "1.5rem",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container mb-5"
      >
        <div
          className="p-5 rounded-4 text-center position-relative overflow-hidden"
          style={{
            background: "var(--useteam-gradient)",
            color: "white",
          }}
        >
          {/* Partículas de ceniza cayendo */}
          <div
            className="position-absolute w-100 h-100"
            style={{ zIndex: 0, overflow: "hidden" }}
          >
            {[...Array(50)].map((_, i) => {
              const size = 2 + Math.random() * 6; // Tamaños variables entre 2px y 8px
              const startX = Math.random() * 100;
              const drift = (Math.random() - 0.5) * 40; // Deriva horizontal
              const duration = 3 + Math.random() * 5; // Duración variable
              const delay = Math.random() * 6; // Delay variable

              return (
                <motion.div
                  key={i}
                  className="position-absolute"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `rgba(255, 255, 255, ${
                      0.4 + Math.random() * 0.5
                    })`,
                    borderRadius: "50%",
                    left: `${startX}%`,
                    top: "-30px",
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
                  }}
                  animate={{
                    y: [0, window.innerHeight + 300],
                    x: [0, drift],
                    opacity: [0, 0.8 + Math.random() * 0.2, 0],
                    scale: [0.5, 1 + Math.random() * 0.5, 0.3],
                    rotate: [0, Math.random() * 360],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "linear",
                  }}
                />
              );
            })}
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <FaLightbulb size={60} className="mb-4" />
            <h2
              className="mb-4 fw-bold PORTFOLIO_FONT_3"
              style={{ fontSize: "2.2rem" }}
            >
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="fs-5 mb-4 col-lg-8 mx-auto PORTFOLIO_FONT_4">
              Conversemos sobre cómo los agentes inteligentes a medida pueden
              transformar tu empresa. Te ofrezco una consulta gratuita para
              analizar tus necesidades específicas.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-light btn-lg rounded-pill px-5 fw-bold PORTFOLIO_FONT_4"
                style={{ color: "#000000", fontSize: "0.9rem" }}
                onClick={() => {
                  const phoneNumber = "+5491154819253";
                  window.open(`https://wa.me/${phoneNumber}`, "_blank");
                }}
              >
                <IoLogoWhatsapp className="me-2" style={{ color: "#000000" }} />
                Contactar por whatsapp
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:jonnahuel78@gmail.com?subject=Consulta sobre Agentes de IA"
                className="btn btn-outline-light btn-lg rounded-pill px-5 fw-bold PORTFOLIO_FONT_4 text-decoration-none"
                style={{ fontSize: "0.9rem" }}
              >
                <MdEmail className="me-2" />
                Contactar por email
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
