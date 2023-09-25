import React from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const isSmallScreen = window.innerWidth < 768; // Tamaño de pantalla para el breakpoint sm (según Bootstrap)
  const logoWidth = isSmallScreen ? "30" : "140";
  const logoHeight = isSmallScreen ? "20" : "96";

  return (
    <div className="container-fluid p-0">
      <nav className="barranav row navbar bg-body-secondary mx-0 px-0">
        <div className="d-flex flex-row align-items-center col-sm-12 col-md-6">
          <NavLink className="navbar-brand me-sm-4" to="/">
            <img
              src={isSmallScreen ? logo2 : logo}
              alt="logo"
              width={logoWidth}
              height={logoHeight}
            />
          </NavLink>
          <NavLink
            to="https://drive.google.com/uc?export=download&id=18NnC2xOBSKrOLJNl6bBlgmnCysXHNI1d"
            target="_blank"
          >
            <button className="botonCV">
              <div className="BOTONCV fs-4">Descargar CV</div>
            </button>
          </NavLink>
          <div className="ms-4 d-md-none">
            <div className="btn-group">
              <button
                className="btn btn-secondary dropdown-toggle bi bi-list"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/projects"
                  >
                    Proyectos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    aria-current="page"
                    to="/testimonials"
                  >
                    Testimonios
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-row row align-items-center col-md-6 d-none d-md-flex justify-content-end me-0">
          <div className="col-3">
            <NavLink
              className="nav-link active fs-4"
              aria-current="page"
              to="/projects"
            >
              Proyectos
            </NavLink>
          </div>
          <div className="col-3">
            <NavLink
              className="nav-link active fs-4"
              aria-current="page"
              to="/testimonials"
            >
              Testimonios
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
