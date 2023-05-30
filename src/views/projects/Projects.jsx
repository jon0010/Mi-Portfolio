import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const technologies = [
    {
      name: "JavaScript",
      documentationUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "React.js",
      documentationUrl: "https://es.reactjs.org/",
    },
    {
      name: "Redux.js",
      documentationUrl: "https://redux.js.org/",
    },
    {
      name: "Next.js",
      documentationUrl: "https://nextjs.org/",
    },
    {
      name: "Node.js",
      documentationUrl: "https://nodejs.org/es/docs/",
    },
    {
      name: "Express.js",
      documentationUrl: "https://expressjs.com/",
    },
    {
      name: "PostgreSQL",
      documentationUrl: "https://www.postgresql.org/docs/",
    },
    {
      name: "Sequelize",
      documentationUrl: "https://sequelize.org/",
    },
    {
      name: "Vercel",
      documentationUrl: "https://vercel.com/docs",
    },
    {
      name: "Render",
      documentationUrl: "https://render.com/docs",
    },
    {
      name: "Git",
      documentationUrl: "https://git-scm.com/doc",
    },
    {
      name: "GitHub",
      documentationUrl: "https://docs.github.com/es",
    },
    {
      name: "Thunder Client",
      documentationUrl: "https://www.thunderclient.io/docs/",
    },
    {
      name: "Photoshop",
      documentationUrl: "https://helpx.adobe.com/es/photoshop/user-guide.html",
    },
    {
      name: "After Effects",
      documentationUrl:
        "https://helpx.adobe.com/la/after-effects/user-guide.html",
    },
    {
      name: "Google Cloud",
      documentationUrl: "https://cloud.google.com/docs",
    },
    {
      name: "AWS",
      documentationUrl: "https://aws.amazon.com/es/getting-started/",
    },
    {
      name: "Bootstrap",
      documentationUrl: "https://getbootstrap.com/docs/",
    },
    {
      name: "MaterialUI",
      documentationUrl: "https://mui.com/material-ui/getting-started/",
    },
  ];
  return (
    <div className="contenedorhab row col-10 justify-content-evenly text-center mx-auto">
      <h1 className="tituloproy mt-4">Proyectos</h1>
      <h2 className="text-center">
        Mi stack tecnologico se encuentra en pleno crecimiento, al momento, con
        este conjunto de tecnologías a mi disposición, estoy preparado para
        enfrentar cualquier desafío de desarrollo y ofrecer soluciones de
        calidad sobresaliente.
      </h2>
      <div className="technologies col-10 d-flex justify-content-between flex-wrap mt-4 mb-5">
        {technologies?.map((technology, index) => (
          <Link
            key={index}
            to={technology.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-primary btn-sm mb-3">
              {technology.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="tar-con col-5">
        <div className="tar">
          <div className="front-content">
            <p>"Press Start"</p>
          </div>
          <div className="content fs-5">
            <p className="heading">Proyecto individual "Press Start"</p>
            <p>
              Diseño y desarrollo de un aplicativo web orientado a videojuegos.
              Algunas de las tecnologías que se utilizaron para realizar este
              proyecto fueron - Front-end: React.js, Redux, CSS. - Back-end:
              Node.js, Express.js, sequelize, PostgreSQL
            </p>
            <Link
              to="https://pi-videogames-main-ief4.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button className="bu">IR AL PROYECTO</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="tar-con col-5">
        <div className="tar">
          <div className="front-content">
            <p>"Medical Connect"</p>
          </div>
          <div className="content fs-5">
            <p className="heading">Proyecto Grupal "Medical Connect"</p>
            <p>
              Gestión de equipo y desarrollo en la creación de una plataforma de
              telemedicina, orientada a la comunicación a tiempo real
              paciente-profesional de la salud. Tecnologías: - Front-end:
              Vite.js, React.js, Redux, Bootstrap, SSE. - Back-end: Node.js,
              Express.js, PostgreSQL, Sequelize, MercadoPagoApi, GoogleCloud.
            </p>
            <Link
              to="https://medical-connect.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button className="bu">IR AL PROYECTO</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
