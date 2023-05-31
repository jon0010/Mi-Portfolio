import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="barranav row navbar bg-body-secondary mx-0 px-0">
      <div className="col-6">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="140" height="96" />
        </NavLink>
        <NavLink
          to="https://drive.google.com/uc?export=download&id=1219TU9LVePiX-kXRnzRSSJo_misOHq1L"
          target="_blank"
        >
          <button className="botonCV ms-5">
            <div className="BOTONCV">Descargar CV</div>
          </button>
        </NavLink>
      </div>
      <div className="col-2 d-none d-md-block">
        <NavLink className="nav-link active" aria-current="page" to="/projects">
          Proyectos
        </NavLink>
      </div>
      <div className="col-2 d-none d-md-block">
        <NavLink
          className="nav-link active"
          aria-current="page"
          to="/testimonials"
        >
          Testimonios
        </NavLink>
      </div>
      <div className="btn-group col-6 d-sm-block d-md-none">
        <button
          className="btn btn-secondary dropdown-toggle bi bi-list"
          type="button"
          data-bs-toggle="list"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu">
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/projects"
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/testimonials"
            >
              Testimonios
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
