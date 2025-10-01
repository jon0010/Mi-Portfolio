import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBriefcase } from "react-icons/tb";
import { useTheme } from "../contexts/ThemeContext";
import Timeline from "../components/timeline/Timeline";

const HomePage = () => {
  const [text, setText] = useState("innovation");
  const [cursorVisible, setCursorVisible] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const phrases = [
      "innovation",
      "teamwork",
      "collaboration",
      "creativity",
      "leadership",
      "technology",
      "passion",
      "growth",
      "impact",
    ];
    let currentPhraseIndex = 0;
    let charIndex = 0;

    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentText = currentPhrase.slice(0, charIndex);

      setText(currentText);

      if (charIndex < currentPhrase.length) {
        charIndex += 1;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => eraseText(), 2000);
      }
    };

    const eraseText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentText = currentPhrase.slice(0, charIndex);

      setText(currentText);

      if (charIndex > 0) {
        charIndex -= 1;
        setTimeout(eraseText, 50);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
      }
    };

    const cursorBlink = () => {
      setCursorVisible((prev) => !prev);
      setTimeout(cursorBlink, 500);
    };

    typeWriter();
    cursorBlink();

    return () => {
      clearTimeout();
    };
  }, []);

  const eventsData = [
    {
      date: "21/04/2025 - actualmente → Co-fundador de useTeam",
      event:
        "Co-fundador y Head of Technology de useTeam, startup enfocada en soluciones tecnológicas innovadoras B2B. Liderazgo en la definición de la arquitectura tecnológica, desarrollo de productos digitales y gestión de equipos de desarrollo. Responsable de la estrategia tecnológica y la implementación de soluciones escalables.",
    },
    {
      date: "02/02/2024 - 01/03/2025 → Team leader Back-end GRAVITAD",
      event:
        "Las Palmas, España, Liderar y acompañar tanto en aspecto personal como técnico a un equipo de 24 personas. Desarrollar microservicios y APIs para diversos proyectos, entre ellos, backend para videojuegos en Unity framework, frontends en react, APKs, corrección de código y documentación de proyectos.",
    },
    {
      date: "02/01/2024 - 02/05/2024 → DESARROLLADOR BACK-END EN GRAVITAD",
      event:
        "Empresa ubicada en Las palmas, España con financiamiento de la Union Europea y el gobierno de españa. Desarrollo de diversos sistemas multiplataforma y planificación/desarrollo de software innovador para uso interno de la empresa.",
    },
    {
      date: "25/10/2023 - 05/01/2024 → CLINICALTECH SRL - DESARROLLADOR FULL STACK",
      event:
        "Realice la asesoría al cliente, planificación, diseño y desarrollo de un sitio web autogestionable enfocado a la venta de insumos hospitalarios para una empresa ubicada en Merlo, Buenos Aires.",
    },
    {
      date: "11/06/2023 - 05/10/2023 → DOCENTE DE DISEÑO GRÁFICO DIGITAL Y GESTIÓN DE PROYECTOS",
      event:
        "Instruí a +100 alumnos dando clases sobre diseño gráfico digital y uso de herramientas gratuitas de diseño como Gimp e Inkscape, programa impulsado por el gobierno de la ciudad de buenos aires y la universidad tecnológica nacional.",
    },
  ];

  const linkedInProfileUrl = "https://www.linkedin.com/in/jon-nahuel-pereyra/";
  const githubProfileUrl = "https://github.com/jon0010";
  const emailAddress = "jonnahuel78@gmail.com";
  const emailSubject = "Hola! escribí tu asunto acá";
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}`;
  const googleDriveLink =
    "https://drive.google.com/uc?export=download&id=1w1oe6HksHJq9ubeWnpzLHQB65LhkgqW6";

  const isBigScreen = window.innerWidth >= 576;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mx-auto"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-12 col-md-8 mx-auto text-start mt-5 py-5 p-4"
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src="https://github.com/jon0010.png"
          alt="jon"
          width={75}
          style={{ borderRadius: "50%", marginBottom: "28px" }}
        />

        <div className="row">
          <div className="col-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="ide-container"
              style={{
                background: "rgba(30, 30, 46, 0.95)",
                border: "1px solid #444",
                borderRadius: "8px",
                padding: "50px 20px 30px 20px",
                fontFamily: "'Fira Code', 'Courier New', monospace",
                fontSize: window.innerWidth < 768 ? "1.1rem" : "1.4rem",
                lineHeight: "1.6",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <div className="mac-buttons mt-2">
                <div className="btn-close"></div>
                <div className="btn-minimize"></div>
                <div className="btn-maximize"></div>
              </div>
              <div
                style={{
                  color: "#f9e2af",
                  marginBottom: "0",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                <span style={{ color: "#ffd700" }}>import&nbsp;</span> {`{`}{" "}
                <span
                  style={{
                    color: "#ff69b4",
                    minWidth: "140px",
                    display: "inline-block",
                    textAlign: "center",
                    padding: "0 4px",
                  }}
                >
                  {`  ${text}  `}
                </span>
                {`}`} <span style={{ color: "#ffd700" }}>&nbsp;from&nbsp;</span>{" "}
                <span style={{ color: "#ff8c00" }}>"useTeam"</span>;
                <span
                  id="cursor"
                  style={{
                    visibility: cursorVisible ? "visible" : "hidden",
                    color: "#ff69b4",
                    fontWeight: "bold",
                    marginLeft: "2px",
                  }}
                >
                  |
                </span>
              </div>
            </motion.div>
          </div>

          <div className="col-12 col-md-8">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 fw-semibold d-flex align-items-center justify-content-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "16px 32px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(30, 58, 138, 0.3)",
                transition: "all 0.3s ease",
                minWidth: "280px",
                height: "56px",
              }}
              onClick={() => {
                const phoneNumber = "+5491154819253";
                window.open(`https://wa.me/${phoneNumber}`, "_blank");
              }}
            >
              Enviame un whatsapp
              <IoLogoWhatsapp style={{ fontSize: "1.3rem" }} />
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="ms-1"
        >
          <p
            className="texto text-start mt-5 fs-2"
            style={{ color: isDark ? "#ffffff" : "#1e293b" }}
          >
            +4 años de experiencia laboral.{" "}
            <span className="useteam-gradient-text">
              Co-fundador de useTeam, desarrollador full stack y diseñador
              gráfico digital.
            </span>{" "}
            <span>De Buenos Aires, Argentina.&nbsp;</span>
            <span>
              Especializado en liderazgo tecnológico y manejo de equipos de
              desarrollo a gran escala.
            </span>
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="d-flex flex-wrap justify-content-center gap-3 mt-5 mb-5"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="social-button-container"
          >
            <a
              href={linkedInProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <button
                className="social-button"
                style={{
                  background: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.3)"
                    : "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px",
                  padding: "12px 20px",
                  color: isDark ? "white" : "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  minWidth: "140px",
                  justifyContent: "center",
                }}
              >
                <GrLinkedin style={{ width: "20px", height: "20px" }} />
                LinkedIn
              </button>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="social-button-container"
          >
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <button
                className="social-button"
                style={{
                  background: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.3)"
                    : "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px",
                  padding: "12px 20px",
                  color: isDark ? "white" : "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  minWidth: "140px",
                  justifyContent: "center",
                }}
              >
                <BsGithub style={{ width: "20px", height: "20px" }} />
                Github
              </button>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="social-button-container"
          >
            <a
              href={mailtoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <button
                className="social-button"
                style={{
                  background: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(15, 23, 42, 0.05)",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.3)"
                    : "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px",
                  padding: "12px 20px",
                  color: isDark ? "white" : "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  minWidth: "200px",
                  justifyContent: "center",
                }}
              >
                <MdOutgoingMail style={{ width: "20px", height: "20px" }} />
                <span style={{ fontSize: "0.85rem" }}>
                  jonnahuel78@gmail.com
                </span>
              </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="col-12 col-md-8 px-4 mx-auto PORTFOLIO_FONT_4"
        style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
      >
        <h1
          className="PORTFOLIO_FONT_3"
          style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
        >
          <TbBriefcase
            className="me-3 mb-2"
            style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
          />
          Experiencia laboral
        </h1>
        <Timeline events={eventsData} />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
