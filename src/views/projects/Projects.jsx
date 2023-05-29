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
    <div className="row justify-content-evenly">
      <h1>Proyectos</h1>
      <div className="technologies col-4 d-flex justify-content-between flex-wrap">
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
    </div>
  );
};

export default Projects;
