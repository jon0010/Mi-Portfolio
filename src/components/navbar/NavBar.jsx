import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { BsSun, BsMoon, BsList, BsX } from "react-icons/bs";
import { useTheme } from "../../contexts/ThemeContext";
import Logo from "../ui/Logo";

const Navbar2 = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/services", label: "Servicios IA" },
    { path: "/about", label: "Sobre mí" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="position-fixed w-100 top-0"
        style={{ zIndex: 1000 }}
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled
              ? isDark
                ? "rgba(15, 23, 42, 0.98)"
                : "rgba(248, 250, 252, 0.98)"
              : isDark
              ? "rgba(15, 23, 42, 0.3)"
              : "rgba(248, 250, 252, 0.3)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="navbar navbar-expand-lg px-4 py-2 PORTFOLIO_FONT_4"
          style={{
            backdropFilter: isScrolled ? "blur(30px)" : "blur(5px)",
            WebkitBackdropFilter: isScrolled ? "blur(30px)" : "blur(5px)",
            borderBottom: isScrolled
              ? `1px solid ${
                  isDark ? "rgba(30, 58, 138, 0.1)" : "rgba(59, 130, 246, 0.1)"
                }`
              : "1px solid transparent",
            boxShadow: isScrolled
              ? isDark
                ? "0 4px 20px rgba(15, 23, 42, 0.2)"
                : "0 4px 20px rgba(0, 0, 0, 0.08)"
              : "none",
          }}
        >
          <div className="container-fluid">
            {/* Logo and Brand */}
            <NavLink to="/" className="navbar-brand">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="d-flex align-items-center"
              >
                <Logo
                  width={isScrolled ? 36 : 44}
                  height={isScrolled ? 36 : 44}
                  className="me-3"
                />
                <div>
                  <motion.span
                    animate={{
                      fontSize: isScrolled ? "1.1rem" : "1.2rem",
                    }}
                    transition={{ duration: 0.3 }}
                    className="fw-semibold"
                    style={{
                      color: isDark ? "#f8fafc" : "#0f172a",
                      letterSpacing: "-0.02em",
                      fontWeight: "500",
                    }}
                  >
                    Jon Nahuel Pereyra
                  </motion.span>
                  <motion.div
                    animate={{
                      fontSize: isScrolled ? "0.7rem" : "0.75rem",
                      opacity: isScrolled ? 0.6 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="small"
                    style={{
                      color: isDark
                        ? "rgba(203, 213, 225, 0.7)"
                        : "rgba(71, 85, 105, 0.7)",
                      marginTop: "-2px",
                      fontWeight: "400",
                    }}
                  >
                    Head of Technology
                  </motion.div>
                </div>
              </motion.div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex align-items-center">
              <nav className="d-flex me-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="mx-2"
                  >
                    <NavLink
                      to={item.path}
                      className="nav-link px-3 py-2 rounded-2 fw-normal position-relative text-decoration-none"
                      style={({ isActive }) => ({
                        color: isActive
                          ? isDark
                            ? "#f8fafc"
                            : "#0f172a"
                          : isDark
                          ? "rgba(203, 213, 225, 0.8)"
                          : "rgba(71, 85, 105, 0.8)",
                        background: isActive
                          ? isDark
                            ? "rgba(248, 250, 252, 0.1)"
                            : "rgba(15, 23, 42, 0.08)"
                          : "transparent",
                        transition: "all 0.2s ease",
                        border: "none",
                        fontSize: "0.95rem",
                        fontWeight: "400",
                        letterSpacing: "-0.01em",
                      })}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="btn rounded-2 p-2 d-flex align-items-center justify-content-center"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "transparent",
                  border: "none",
                  color: isDark
                    ? "rgba(203, 213, 225, 0.8)"
                    : "rgba(71, 85, 105, 0.8)",
                  transition: "all 0.2s ease",
                }}
                title={
                  isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
                }
              >
                {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05, opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="btn d-lg-none rounded-2 p-2 d-flex align-items-center justify-content-center"
              style={{
                width: "36px",
                height: "36px",
                background: "transparent",
                border: "none",
                color: isDark
                  ? "rgba(203, 213, 225, 0.8)"
                  : "rgba(71, 85, 105, 0.8)",
              }}
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BsX size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BsList size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="d-lg-none overflow-hidden"
              style={{
                background: isDark
                  ? "rgba(15, 23, 42, 0.95)"
                  : "rgba(248, 250, 252, 0.95)",
                backdropFilter: "blur(20px)",
                borderBottom: `1px solid ${
                  isDark ? "rgba(30, 58, 138, 0.2)" : "rgba(59, 130, 246, 0.2)"
                }`,
              }}
            >
              <div className="container-fluid py-4">
                <div className="d-flex flex-column gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="nav-link px-4 py-3 rounded-2 fw-normal text-decoration-none d-block"
                        style={({ isActive }) => ({
                          color: isActive
                            ? isDark
                              ? "#f8fafc"
                              : "#0f172a"
                            : isDark
                            ? "rgba(203, 213, 225, 0.8)"
                            : "rgba(71, 85, 105, 0.8)",
                          background: isActive
                            ? isDark
                              ? "rgba(248, 250, 252, 0.1)"
                              : "rgba(15, 23, 42, 0.08)"
                            : "transparent",
                          border: "none",
                          transition: "all 0.2s ease",
                          fontSize: "1rem",
                          fontWeight: "400",
                        })}
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Mobile Theme Toggle */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: navItems.length * 0.1,
                      ease: "easeOut",
                    }}
                    className="px-4 pt-3 border-top"
                    style={{
                      borderColor: isDark
                        ? "rgba(30, 58, 138, 0.2)"
                        : "rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <button
                      onClick={toggleTheme}
                      className="btn w-100 py-3 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: isDark
                          ? "rgba(248, 250, 252, 0.1)"
                          : "rgba(15, 23, 42, 0.1)",
                        border: `1px solid ${
                          isDark
                            ? "rgba(248, 250, 252, 0.2)"
                            : "rgba(15, 23, 42, 0.2)"
                        }`,
                        color: isDark ? "#f8fafc" : "#0f172a",
                      }}
                    >
                      {isDark ? <BsSun size={20} /> : <BsMoon size={20} />}
                      {isDark ? "Modo Claro" : "Modo Oscuro"}
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar2;
