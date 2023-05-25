import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="barranav row navbar bg-body-tertiary mx-0 px-0">
      <div className="col-6">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="140" height="96" />
        </Link>
      </div>
      <div className="col-2 d-none d-md-block">
        <Link className="nav-link active" aria-current="page" to="/projects">
          Proyectos
        </Link>
      </div>
      <div className="col-2 d-none d-md-block">
        <Link className="nav-link active" aria-current="page" to="/skills">
          Habilidades
        </Link>
      </div>
      <div className="col-2 d-none d-md-block">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/testimonials"
        >
          Testimonios
        </Link>
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
            <Link
              className="nav-link active"
              aria-current="page"
              to="/projects"
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link className="nav-link active" aria-current="page" to="/skills">
              Habilidades
            </Link>
          </li>
          <li>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/testimonials"
            >
              Testimonios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
