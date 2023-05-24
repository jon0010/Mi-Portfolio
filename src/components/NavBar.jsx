import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="row navbar bg-body-tertiary mx-0 px-0">
      <div className="col-6">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" width="140" height="96" />
        </Link>
      </div>
      <div className="col-2 d-none d-md-block">
        <Link className="nav-link active" aria-current="page" href="#">
          Home
        </Link>
      </div>
      <div className="col-2 d-none d-md-block">
        <Link className="nav-link active" aria-current="page" href="#">
          Home
        </Link>
      </div>
      <div className="col-2 d-none d-md-block">
        <Link className="nav-link active" aria-current="page" href="#">
          Home
        </Link>
      </div>
      <div className="btn-group col-6 d-sm-block d-md-none">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Menu item
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Menu item
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Menu item
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
