import React from "react";
import { motion } from "framer-motion";
import { FaRegSmileWink } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const AboutPage = () => {
  const { isDark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mx-auto min-vh-100"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-12 col-md-8 px-4 mx-auto PORTFOLIO_FONT_4 mb-5 pt-5"
        style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
      >
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="PORTFOLIO_FONT_3 mb-5"
          style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
        >
          <FaRegSmileWink
            className="me-3 mb-2"
            style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
          />
          Sobre mi
        </motion.h1>

        <div className="row text-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-sm-12 col-md-8 text-start d-flex align-items-center justify-content-center"
            style={{ lineHeight: "32px" }}
          >
            <div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-4"
                style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
              >
                Me llamo Jon Nahuel Pereyra. Empecé en la programación hace poco
                más de cuatro años y actualmente soy{" "}
                <span className="useteam-gradient-text">
                  Co-Fundador & Head of Technology de useTeam
                </span>
                , donde desarrollamos soluciones de IA, desarrollo web,
                desarollo mobile, ads y scraping que transforman la manera en
                que las empresas operan.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-4"
                style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
              >
                También trabaje en{" "}
                <span className="useteam-gradient-text">Gravitad</span>,
                aceleradora de startups, como director del departamento de
                backend. En estos años he aprendido que el verdadero poder de la
                tecnología no está solo en el código, sino en las personas que
                lo crean y en cómo trabajamos juntos para hacer posible lo
                imposible.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="useteam-card mb-4"
                style={{
                  background: isDark
                    ? "rgba(248, 250, 252, 0.05)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: isDark
                    ? "1px solid rgba(30, 58, 138, 0.2)"
                    : "1px solid rgba(59, 130, 246, 0.2)",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <h4
                  className="useteam-primary-text mb-3"
                  style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
                >
                  Algunos de mis logros:
                </h4>
                <ul
                  className="PORTFOLIO_FONT_4"
                  style={{
                    listStyle: "none",
                    padding: 0,
                    color: isDark ? "#cbd5e1" : "#64748b",
                  }}
                >
                  <li className="mb-2">
                    {" "}
                    <strong>
                      Ser responsable y socio fundador de useTeam:
                    </strong>{" "}
                    Una startup con +40 desarrolladores, diseñadores y presencia
                    en varios paises, trabajando en soluciones de inteligencia
                    artificial, desarrollo web, desarollo mobile, ads y scraping
                    entre otras.
                  </li>
                  <li className="mb-2">
                    <strong>Crear herramientas y microservicios:</strong>{" "}
                    Desarrollé las herramientas necesarias para cumplir con los
                    desafíos técnicos más complejos
                  </li>
                  <li className="mb-2">
                    {" "}
                    <strong>
                      Hacer acompañamiento y ser guía de los líderes de equipo:
                    </strong>{" "}
                    Organicé la estructura de liderazgo para optimizar el
                    rendimiento de cada área.
                  </li>
                  <li className="mb-2">
                    {" "}
                    <strong>
                      Fundar y fomentar las jornadas de capacitación:
                    </strong>{" "}
                    Creé programas de formación continua para el equipo
                  </li>
                </ul>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-4"
                style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
              >
                Como diseñador gráfico, di clases en modalidad virtual para más
                de 100 alumnos 😯. Esta experiencia me enseñó que el verdadero
                poder de la tecnología no está solo en el código, sino en las
                personas que lo crean y en cómo trabajamos juntos para alcanzar
                el éxito.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-4"
                style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
              >
                Mi objetivo es seguir dejando huella por todos los lugares donde
                la tecnología me está llevando. En{" "}
                <span className="useteam-gradient-text">useTeam</span> creemos
                que cuando nos conectamos como uno, creamos más que software:{" "}
                <span className="useteam-gradient-text">creamos impacto</span> .
                Cada proyecto, cada desafío, cada logro lleva una parte de
                nosotros.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-4"
                style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
              >
                Porque cuando activamos nuestro useTeam, activamos lo mejor que
                tenemos:{" "}
                <span className="useteam-gradient-text">nuestra gente</span>.
                Somos un equipo que piensa, crea y avanza como uno solo,
                combinando inteligencia colectiva, pasión y tecnología de
                vanguardia para resolver los desafíos más complejos.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center mt-4 mt-md-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://github.com/jon0010.png"
              alt="jon"
              width={295}
              style={{ borderRadius: "50%" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
