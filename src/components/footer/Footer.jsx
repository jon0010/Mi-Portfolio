import React from "react";
import logo from "../../assets/logo.png";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub, BsHandIndexFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between col-11 col-md-8 mx-auto mb-5 py-2"
      style={{
        border: "solid #C28100",
        borderRadius: "12px",
        padding: "12px",
        backgroundColor: "#E3E2E2",
        marginTop: "4em",
      }}
    >
      <div>
        <img
          src={logo}
          alt="Copyright Logo"
          style={{ width: "60px", marginRight: "5px" }}
        />
        <span className="fw-semibold PORTFOLIO_FONT_4">
          &copy; {currentYear} Jon nahuel pereyra | Full stack developer
        </span>
      </div>
      <div className="d-flex justify-content-around">
        <div className="me-4">
          <Link
            to="https://www.linkedin.com/in/jon-nahuel-pereyra-832191257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedin
              style={{ width: "28px", color: "#0077b5", fontSize: "28px" }}
            />
          </Link>
        </div>
        <div className="me-4">
          <Link
            to="https://github.com/jon0010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              style={{ width: "28px", color: "#000000", fontSize: "28px" }}
            />
          </Link>
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className="btn btn-dark"
        style={{ fontSize: "16px" }}
      >
        Subir <BsHandIndexFill />
      </button>
    </div>
  );
};

export default Footer;
