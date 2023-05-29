import React, { useEffect, useState } from "react";
import "./home.css";
import dev from "../../assets/dev.gif";

const Home = () => {
  const [typedSubTitle, setTypedSubTitle] = useState("");

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

  useEffect(() => {
    const subTitle = "Full Stack Developer";
    let currentIndex = 0;

    const typeSubTitle = () => {
      setTimeout(() => {
        if (currentIndex === subTitle.length) {
          setTimeout(() => {
            setTypedSubTitle("");
            currentIndex = 0;
            typeSubTitle();
          }, 1500);
          return;
        }

        setTypedSubTitle(subTitle.substring(0, currentIndex + 1));
        currentIndex++;
        typeSubTitle();
      }, 80);
    };

    typeSubTitle();
  }, []);

  return (
    <div className="container-fluid m-0 text-white">
      <h1 className="titulo col-8 mx-0 my-0 text-dark p-5">
        Jon Nahuel Pereyra <br />{" "}
      </h1>
      <div className="subtituloCont">
        <h2 className="subtitulo col-8 text-dark p-5">
          {typedSubTitle || <span>&nbsp;</span>}
        </h2>
      </div>
      <div>
        <p className="texto text-dark text-center lh-base w-50">
          Hola, soy un desarrollador Fullstack con un background destacado en
          liderazgo, organización y capacitación en equipos a gran escala.
          Además, cuento con experiencia en la creación de planes integrales en
          colaboración con los clientes para garantizar el éxito. Tengo una
          espacialización en desarrollo Full Stack, con conocimientos en
          metodologías ágiles, GIT, estructura de datos, algoritmos, frameworks
          basados en el lenguaje JavaScript.
        </p>
      </div>
      <div className="contenedorImagen">
        <img className="rounded float-end me-5" src={dev} alt="img" />
      </div>
      <div className="technologies">
        {technologies?.map((technology, index) => (
          <a
            key={index}
            href={technology.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="badge badge-primary m-2">{technology.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
