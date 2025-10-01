import React from "react";
import { motion } from "framer-motion";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub, BsArrowUp } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTheme } from "../../contexts/ThemeContext";
import Logo from "../ui/Logo";
// Removed Link import as we're using regular <a> tags for external links

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <GrLinkedin />,
      url: "https://www.linkedin.com/in/jon-nahuel-pereyra/",
      color: "#0077b5",
      label: "LinkedIn",
    },
    {
      icon: <BsGithub />,
      url: "https://github.com/jon0010",
      color: "#333",
      label: "GitHub",
    },
    {
      icon: <MdEmail />,
      url: "mailto:jonnahuel78@gmail.com",
      color: "#ea4335",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-5"
    >
      {/* Main Footer */}
      <div
        className="py-5"
        style={{
          background: isDark
            ? "var(--useteam-gradient-dark)"
            : "var(--useteam-gradient-light)",
          borderTop: isDark
            ? "1px solid rgba(30, 58, 138, 0.2)"
            : "1px solid rgba(59, 130, 246, 0.2)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Logo and Description */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-md-4 mb-4 mb-md-0"
            >
              <div className="d-flex align-items-center mb-3">
                <Logo width={50} height={50} className="me-3" />
                <div>
                  <h5
                    className="mb-0 fw-bold"
                    style={{
                      background: "var(--useteam-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Jon Nahuel Pereyra
                  </h5>
                  <small style={{ color: isDark ? "#cbd5e1" : "#64748b" }}>
                    Co-fundador & Head of Technology
                  </small>
                </div>
              </div>
              <p
                className="PORTFOLIO_FONT_4 small"
                style={{ color: isDark ? "#cbd5e1" : "#475569" }}
              >
                Transformando ideas en productos digitales de alto impacto con
                tecnologías modernas y agentes de inteligentes personalizados.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-md-4 mb-4 mb-md-0"
            >
              <h6
                className="mb-3"
                style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
              >
                Contacto
              </h6>
              <div className="mb-2">
                <MdEmail
                  className="me-2"
                  style={{ color: isDark ? "#06b6d4" : "#0ea5e9" }}
                />
                <span
                  className="small"
                  style={{ color: isDark ? "#cbd5e1" : "#475569" }}
                >
                  jonnahuel78@gmail.com
                </span>
              </div>
              <div className="mb-2">
                <MdPhone
                  className="me-2"
                  style={{ color: isDark ? "#06b6d4" : "#0ea5e9" }}
                />
                <span
                  className="small"
                  style={{ color: isDark ? "#cbd5e1" : "#475569" }}
                >
                  +54 9 11 5481-9253
                </span>
              </div>
              <div>
                <span
                  className="small"
                  style={{ color: isDark ? "#cbd5e1" : "#475569" }}
                >
                  📍 Buenos Aires, Argentina
                </span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-md-4"
            >
              <h6
                className="mb-3"
                style={{ color: isDark ? "#f8fafc" : "#1e293b" }}
              >
                Sígueme
              </h6>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={social.url}
                      target={
                        social.url.startsWith("mailto:") ? "_self" : "_blank"
                      }
                      rel={
                        social.url.startsWith("mailto:")
                          ? ""
                          : "noopener noreferrer"
                      }
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "45px",
                        height: "45px",
                        background: isDark
                          ? "rgba(248, 250, 252, 0.1)"
                          : "rgba(15, 23, 42, 0.05)",
                        borderRadius: "12px",
                        color: social.color,
                        fontSize: "1.2rem",
                        transition: "all 0.3s ease",
                        border: isDark
                          ? "1px solid rgba(30, 58, 138, 0.2)"
                          : "1px solid rgba(59, 130, 246, 0.2)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = social.color;
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = isDark
                          ? "rgba(248, 250, 252, 0.1)"
                          : "rgba(15, 23, 42, 0.05)";
                        e.target.style.color = social.color;
                      }}
                    >
                      {social.icon}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-3"
        style={{
          background: isDark ? "var(--useteam-dark)" : "#f8fafc",
          borderTop: isDark
            ? "1px solid rgba(30, 58, 138, 0.1)"
            : "1px solid rgba(59, 130, 246, 0.1)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="col-md-6"
            >
              <p
                className="mb-0 small PORTFOLIO_FONT_4"
                style={{ color: isDark ? "#cbd5e1" : "#64748b" }}
              >
                &copy; {currentYear} Jon Nahuel Pereyra
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="col-md-6 text-md-end"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToTop}
                className="btn btn-sm rounded-pill px-3"
                style={{
                  background: "var(--useteam-gradient)",
                  border: "none",
                  color: "white",
                }}
              >
                <BsArrowUp className="me-1" />
                Subir
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
