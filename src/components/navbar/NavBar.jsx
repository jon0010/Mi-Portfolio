import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar2 = () => {
  const handleScrollExperience = () => {
    const offset = 700;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const handleScrollProject = () => {
    const offset = 1636;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const handleScrollAboutMe = () => {
    const offset = 3100;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg row px-4 fw-semibold py-3 fs-5 PORTFOLIO_FONT_4">
      <div className="container-fluid">
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            width={100}
            style={{ borderRadius: "22px", zIndex: "-50" }}
          />
        </NavLink>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-md-auto me-md-2 flex-md-row-reverse justify-content-md-start"
          id="navbarNav"
        >
          <button
            id="nav-link-sobremi"
            className="nav-link text-start text-md-end text-white my-2 me-5"
            onClick={handleScrollAboutMe}
          >
            Sobre mí
          </button>
          <button
            id="nav-link-proyectos"
            className="nav-link text-start text-md-end text-white my-2 me-5"
            onClick={handleScrollProject}
          >
            Proyectos
          </button>
          <button
            id="nav-link-experiencia"
            className="nav-link text-start text-md-end text-white my-2 me-5"
            onClick={handleScrollExperience}
          >
            Experiencia
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
