import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import {
  SiJavascript,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiSequelize,
  SiVercel,
  SiRender,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiGooglecloud,
  SiAmazonaws,
  SiBootstrap,
  SiMatrix,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/Io";
import { AiFillThunderbolt } from "react-icons/ai";

const Projects = () => {
  const technologies = [
    {
      name: "JavaScript",
      documentationUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      Icon: <SiJavascript />,
    },
    {
      name: "React.js",
      documentationUrl: "https://es.reactjs.org/",
      Icon: <FaReact />,
    },
    {
      name: "Redux.js",
      documentationUrl: "https://redux.js.org/",
      Icon: <SiRedux />,
    },
    {
      name: "Next.js",
      documentationUrl: "https://nextjs.org/",
      Icon: <SiNextdotjs />,
    },
    {
      name: "Node.js",
      documentationUrl: "https://nodejs.org/es/docs/",
      Icon: <FaNode />,
    },
    {
      name: "Express.js",
      documentationUrl: "https://expressjs.com/",
      Icon: <IoLogoNodejs />,
    },
    {
      name: "PostgreSQL",
      documentationUrl: "https://www.postgresql.org/docs/",
      Icon: <SiPostgresql />,
    },
    {
      name: "Sequelize",
      documentationUrl: "https://sequelize.org/",
      Icon: <SiSequelize />,
    },
    {
      name: "Vercel",
      documentationUrl: "https://vercel.com/docs",
      Icon: <SiVercel />,
    },
    {
      name: "Render",
      documentationUrl: "https://render.com/docs",
      Icon: <SiRender />,
    },
    {
      name: "Git",
      documentationUrl: "https://git-scm.com/doc",
      Icon: <SiGit />,
    },
    {
      name: "GitHub",
      documentationUrl: "https://docs.github.com/es",
      Icon: <SiGithub />,
    },
    {
      name: "Thunder Client",
      documentationUrl: "https://www.thunderclient.io/docs/",
      Icon: <AiFillThunderbolt />,
    },
    {
      name: "Photoshop",
      documentationUrl: "https://helpx.adobe.com/es/photoshop/user-guide.html",
      Icon: <SiAdobephotoshop />,
    },
    {
      name: "After Effects",
      documentationUrl:
        "https://helpx.adobe.com/la/after-effects/user-guide.html",
      Icon: <SiAdobeaftereffects />,
    },
    {
      name: "Google Cloud",
      documentationUrl: "https://cloud.google.com/docs",
      Icon: <SiGooglecloud />,
    },
    {
      name: "AWS",
      documentationUrl: "https://aws.amazon.com/es/getting-started/",
      Icon: <SiAmazonaws />,
    },
    {
      name: "Bootstrap",
      documentationUrl: "https://getbootstrap.com/docs/",
      Icon: <SiBootstrap />,
    },
    {
      name: "MaterialUI",
      documentationUrl: "https://mui.com/material-ui/getting-started/",
      Icon: <SiMatrix />,
    },
    {
      name: "PostMan",
      documentationUrl: "https://www.postman.com/",
      Icon: <SiPostman />,
    },
  ];
  return (
    <div className="contenedorhab row col-10 justify-content-evenly text-center mx-auto">
      <h1 className="tituloproy my-4">Proyectos</h1>
      <h2 className="text-center">
        Mi stack tecnologico se encuentra en pleno crecimiento, al momento, con
        este conjunto de tecnologías a mi disposición, estoy preparado para
        enfrentar cualquier desafío de desarrollo y ofrecer soluciones de
        calidad sobresaliente.
      </h2>
      <div className="technologies col-10 d-flex justify-content-between flex-wrap mt-4 mb-5">
        {technologies?.map((Technology, index) => (
          <Link
            style={{ textDecoration: "none" }}
            key={index}
            to={Technology.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{Technology.Icon}</h1>
            <span>{Technology.name}</span>
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
