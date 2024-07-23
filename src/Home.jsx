import React, { useEffect, useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
import {
  FaFileDownload,
  FaReact,
  FaNode,
  FaRegSmileWink,
  FaDocker,
} from "react-icons/fa";
import { TbBriefcase, TbBrandReactNative, TbWorldWww } from "react-icons/tb";
import { IoLogoNodejs, IoLogoWhatsapp } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import Timeline from "./components/timeline/Timeline";
import {
  SiJavascript,
  SiTypescript,
  SiVite,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
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
  SiMeteor,
  SiPuppeteer,
  SiNestjs,
} from "react-icons/si";
import { DiNginx } from "react-icons/di";
import { Link } from "react-router-dom";
import clinicaltech from "./assets/clinicaltech.png";
import proximarket from "../src/assets/proximarket.png";
import "./home.css";

const Home = () => {
  const [text, setText] = useState("Hola!");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const phrases = [
      "Soy Jon",
      "Bienvenido",
      "Soy Programador",
      "Bienvenida",
      "Soy Diseñador",
    ];
    let currentPhraseIndex = 0;
    let charIndex = 0;

    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentText = currentPhrase.slice(0, charIndex);

      setText(currentText);

      if (charIndex < currentPhrase.length) {
        charIndex += 1;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => eraseText(), 2000);
      }
    };

    const eraseText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentText = currentPhrase.slice(0, charIndex);

      setText(currentText);

      if (charIndex > 0) {
        charIndex -= 1;
        setTimeout(eraseText, 50);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, 500);
      }
    };

    const cursorBlink = () => {
      setCursorVisible((prev) => !prev);
      setTimeout(cursorBlink, 500);
    };

    typeWriter();
    cursorBlink();

    return () => {
      clearTimeout();
    };
  }, []);

  const pillProps = [
    {
      name: "JavaScript",
      documentationUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      Icon: <SiJavascript />,
      backgroundColor: "black",
      color: "yellow",
    },
    {
      name: "Typescript",
      documentationUrl: "https://www.typescriptlang.org/docs/",
      Icon: <SiTypescript />,
      backgroundColor: "#1D459A",
      color: "white",
    },
    {
      name: "React.js",
      documentationUrl: "https://es.reactjs.org/",
      Icon: <FaReact />,
      backgroundColor: "#1FA7EF",
      color: "white",
    },
    {
      name: "Redux.js",
      documentationUrl: "https://redux.js.org/",
      Icon: <SiRedux />,
      backgroundColor: "#A31FEF",
      color: "white",
    },
    {
      name: "Vite.js",
      documentationUrl: "https://vitejs.dev/guide/",
      Icon: <SiVite />,
      backgroundColor: "#7358D1",
      color: "white",
    },
    {
      name: "Next.js",
      documentationUrl: "https://nextjs.org/",
      Icon: <SiNextdotjs />,
      backgroundColor: "#000000",
      color: "white",
    },
    {
      name: "Node.js",
      documentationUrl: "https://nodejs.org/es/docs/",
      Icon: <FaNode />,
      backgroundColor: "#569351",
      color: "white",
    },
    {
      name: "Express.js",
      documentationUrl: "https://expressjs.com/",
      Icon: <IoLogoNodejs />,
      backgroundColor: "#000000",
      color: "yellow",
    },
    {
      name: "PostgreSQL",
      documentationUrl: "https://www.postgresql.org/docs/",
      Icon: <SiPostgresql />,
      backgroundColor: "#0044D6",
      color: "white",
    },
    {
      name: "MySQL",
      documentationUrl: "https://dev.mysql.com/doc/",
      Icon: <SiMysql />,
      backgroundColor: "#184F8E",
      color: "#E37752",
    },
    {
      name: "MongoDB",
      documentationUrl: "https://www.mongodb.com/docs/",
      Icon: <SiMongodb />,
      backgroundColor: "#188E1A",
      color: "white",
    },
    {
      name: "Sequelize",
      documentationUrl: "https://sequelize.org/",
      Icon: <SiSequelize />,
      backgroundColor: "#FFFFFF",
      color: "#1D459A",
    },
    {
      name: "Vercel",
      documentationUrl: "https://vercel.com/docs",
      Icon: <SiVercel />,
      backgroundColor: "#FFFFFF",
      color: "black",
    },
    {
      name: "Render",
      documentationUrl: "https://render.com/docs",
      Icon: <SiRender />,
      backgroundColor: "#ADC6CA",
      color: "#402B2B",
    },
    {
      name: "Git",
      documentationUrl: "https://git-scm.com/doc",
      Icon: <SiGit />,
      backgroundColor: "#D95729",
      color: "white",
    },
    {
      name: "GitHub",
      documentationUrl: "https://docs.github.com/es",
      Icon: <SiGithub />,
      backgroundColor: "#FFFFFF",
      color: "#D95729",
    },
    {
      name: "ThunderClient",
      documentationUrl: "https://www.thunderclient.io/docs/",
      Icon: <AiFillThunderbolt />,
      backgroundColor: "#AB4040",
      color: "white",
    },
    {
      name: "Photoshop",
      documentationUrl: "https://helpx.adobe.com/es/photoshop/user-guide.html",
      Icon: <SiAdobephotoshop />,
      backgroundColor: "#122AC2",
      color: "white",
    },
    {
      name: "AfterEffects",
      documentationUrl:
        "https://helpx.adobe.com/la/after-effects/user-guide.html",
      Icon: <SiAdobeaftereffects />,
      backgroundColor: "#7452BE",
      color: "white",
    },
    {
      name: "GoogleCloud",
      documentationUrl: "https://cloud.google.com/docs",
      Icon: <SiGooglecloud />,
      backgroundColor: "#FFFFFF",
      color: "#E31A1A",
    },
    {
      name: "AWS",
      documentationUrl: "https://aws.amazon.com/es/getting-started/",
      Icon: <SiAmazonaws />,
      backgroundColor: "#FFFFFF",
      color: "#F33F00",
    },
    {
      name: "Bootstrap",
      documentationUrl: "https://getbootstrap.com/docs/",
      Icon: <SiBootstrap />,
      backgroundColor: "#8128DB",
      color: "white",
    },
    {
      name: "MaterialUI",
      documentationUrl: "https://mui.com/material-ui/getting-started/",
      Icon: <SiMatrix />,
      backgroundColor: "#FFFFFF",
      color: "blue",
    },
    {
      name: "PostMan",
      documentationUrl: "https://www.postman.com/",
      Icon: <SiPostman />,
      backgroundColor: "#F33F00",
      color: "white",
    },
    {
      name: "ReactNative",
      documentationUrl: "https://reactnative.dev/",
      Icon: <TbBrandReactNative />,
      backgroundColor: "#1FA7EF",
      color: "white",
    },
    {
      name: "Meteor.js",
      documentationUrl: "https://www.meteor.com/",
      Icon: <SiMeteor />,
      backgroundColor: "#CF0D0D",
      color: "white",
    },
    {
      name: "Docker",
      documentationUrl: "https://www.docker.com/",
      Icon: <FaDocker />,
      backgroundColor: "#257ACA",
      color: "white",
    },
    {
      name: "NGINX",
      documentationUrl: "https://www.nginx.com/",
      Icon: <DiNginx />,
      backgroundColor: "#429542",
      color: "white",
    },
    {
      name: "Puppeteer",
      documentationUrl: "https://pptr.dev/",
      Icon: <SiPuppeteer />,
      backgroundColor: "#31B180",
      color: "#043120",
    },
    {
      name: "Nest.js",
      documentationUrl: "https://nestjs.com/",
      Icon: <SiNestjs />,
      backgroundColor: "#FB0E35",
      color: "white",
    },
  ];

  const eventsData = [
    {
      date: "02/05/2024 - actualmente → DESARROLLADOR BACK-END EN GRAVITAD",
      event:
        "Empresa ubicada en españa con financiamiento de la Union Europea y el gobierno de españa. Desarrollo de diversos sistemas multiplataforma y planificación/desarrollo de software innovador para uso interno de la empresa.",
    },
    {
      date: "15/01/2024 - 05/07/2024 → PROXIMARKET, DESARROLLADOR FULL STACK",
      event:
        "Planificación, diseño y desarrollo de una plataforma con motor de busqueda de productos en tiempo real.",
    },
    {
      date: "25/10/2023 - 05/01/2024 → CLINICALTECH SRL - DESARROLLADOR FULL STACK",
      event:
        "Realice la asesoría al cliente, planificación, diseño y desarrollo de un sitio web autogestionable enfocado a la venta de insumos hospitalarios para una empresa ubicada en Merlo, Buenos Aires.",
    },
    {
      date: "11/06/2023 - 05/10/2023 → DOCENTE DE DISEÑO GRÁFICO DIGITAL Y GESTIÓN DE PROYECTOS",
      event:
        "Instruí a +100 alumnos dando clases sobre diseño gráfico digital y uso de herramientas gratuitas de diseño como Gimp e Inkscape, programa impulsado por el gobierno de la ciudad de buenos aires y la universidad tecnológica nacional.",
    },
  ];

  const linkedInProfileUrl =
    "https://www.linkedin.com/in/jon-nahuel-pereyra-832191257";

  const githubProfileUrl = "https://github.com/jon0010";

  const emailAddress = "jonnahuel78@gmail.com";

  const emailSubject = "Hola! escribí tu asunto acá";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  const googleDriveLink =
    "https://drive.google.com/uc?export=download&id=1w1oe6HksHJq9ubeWnpzLHQB65LhkgqW6";

  const isBigScreen = window.innerWidth >= 576;

  return (
    <div className="mx-auto">
      <div className="col-12 col-md-8 mx-auto text-start mt-5 py-5 p-4">
        <img
          src="https://github.com/jon0010.png"
          alt="jon"
          width={75}
          style={{ borderRadius: "50%", marginBottom: "28px" }}
        />
        <div className="row">
          <div className={`col-12 col-sm-10`}>
            <h1
              id="titulo"
              className={`titulo text-white text-start PORTFOLIO_FONT_2 ${
                isBigScreen ? "" : "fs-1"
              }`}
            >
              <span>Hola!&nbsp;</span>
              <span>{text}</span>
              <span
                id="cursor"
                style={{ visibility: cursorVisible ? "visible" : "hidden" }}
              ></span>
            </h1>
          </div>
          <div className="col-12 col-md-8">
            <button
              className="rounded-pill p-1 mt-3 border border-danger border-3 fw-semibold"
              style={{
                color: "red",
                backgroundColor: "aliceblue",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onClick={() => {
                const phoneNumber = "+5491154819253";
                window.open(`https://wa.me/${phoneNumber}`, "_blank");
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.18)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              Actualmente trabajando... <IoLogoWhatsapp className="fs-4 mb-1" />
            </button>
          </div>
        </div>

        <div className="ms-1">
          <p className="texto text-white text-start mt-5 fs-2">
            +2 años de experiencia laboral.{" "}
            <span style={{ color: "orange" }}>
              Desarrollador full stack y diseñador gráfico digital.
            </span>{" "}
            <span>De Buenos Aires, Argentina.&nbsp;</span>
            <span>
              Especializado en crear soluciones en tecnología a medida.
            </span>
          </p>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-around mt-5 mb-5">
          <div className="mb-2">
            <Link
              to={linkedInProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline-light rounded-pill">
                <GrLinkedin style={{ width: "28px" }} />
                LinkedIn
              </button>
            </Link>
          </div>
          <div className="mb-2">
            <Link
              to={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline-light rounded-pill">
                <BsGithub style={{ width: "20px" }} />
                Github
              </button>
            </Link>
          </div>

          <div className="mb-2">
            <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline-light rounded-pill">
                <MdOutgoingMail style={{ width: "20px" }} />
                jonnahuel78@gmail.com
              </button>
            </a>
          </div>
          <div>
            <a
              href={googleDriveLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="btn btn-outline-light rounded-pill">
                <FaFileDownload style={{ width: "20px" }} />
                Descargar CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8 px-4 mx-auto text-light PORTFOLIO_FONT_4">
        <h1 className="PORTFOLIO_FONT_3">
          <TbBriefcase className="me-3 mb-2" />
          Experiencia laboral
        </h1>
        <Timeline events={eventsData} />
      </div>
      <div className="col-12 col-md-8 px-4 mx-auto text-light">
        <h1 className="PORTFOLIO_FONT_3">
          <span className="me-3 mb-2">&lt;/&gt;</span>Proyectos
        </h1>
        <h2 className="fs-3 mt-5" style={{ color: "#ffaa00" }}>
          CLINICALTECH SRL - Una plataforma autogestionable enfocada a insumos
          hospitalarios
        </h2>
        <p className="PORTFOLIO_FONT_4 mt-3">
          Este sitio cuenta con un sistema de creación/borrado/editado de
          secciones, historias, productos, datos de contacto. Además tenemos un
          relevamiento de información en estadisticas para tener conocimiento
          del comportamiento del tráfico diario.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {pillProps
            .filter((pill) =>
              [
                "React.js",
                "Meteor.js",
                "Bootstrap",
                "MongoDB",
                "AWS",
                "Typescript",
                "AfterEffects",
                "Node.js",
                "Vercel",
                "Git",
                "GitHub",
              ].some((tech) => pill.name.includes(tech))
            )
            .map((pill, index) => (
              <a
                key={index}
                href={pill.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="border border-light"
                  style={{
                    backgroundColor: pill.backgroundColor,
                    color: pill.color,
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    borderRadius: "20px",
                  }}
                >
                  <span style={{ marginRight: "5px" }}>{pill.Icon}</span>
                  <span>{pill.name}</span>
                </div>
              </a>
            ))}
        </div>
        <img
          className="mt-4 rounded-2 img-fluid"
          src={clinicaltech}
          alt="clinicaltech"
          width={1000}
        />
        <br />
        <button
          className="mt-3 mb-5 rounded-5 PORTFOLIO_FONT_4 fw-semibold"
          style={{ padding: "8px" }}
        >
          <a
            href="https://clinicaltechsrl.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <TbWorldWww
              style={{ width: "30px", fontSize: "28px", marginRight: "5px" }}
            />
            Ir al sitio web
          </a>
        </button>
      </div>
      <div className="col-12 col-md-8 px-4 mx-auto text-light mb-5">
        <h2 className="fs-3 mt-5" style={{ color: "#ffaa00" }}>
          PROXIMARKET APP - Un motor de busqueda para la organización de compras
          online
        </h2>
        <p className="PORTFOLIO_FONT_4 mt-3">
          Este sitio cuenta con un motor de busqueda basado en puppeteer para
          obtener datos en tiempo real de productos con filtros y ordenamiento,
          y video interactivo en el header del sitio.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {pillProps
            .filter((pill) =>
              [
                "Typescript",
                "Next.js",
                "Node.js",
                "MySQL",
                "Vercel",
                "GitHub",
                "Git",
                "AWS",
                "Docker",
                "NGINX",
                "Puppeteer",
                "Nest.js",
              ].some((tech) => pill.name.includes(tech))
            )
            .map((pill, index) => (
              <a
                key={index}
                href={pill.documentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="border border-light"
                  style={{
                    backgroundColor: pill.backgroundColor,
                    color: pill.color,
                    flexBasis: "calc(12.5% - 10px)",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    borderRadius: "20px",
                  }}
                >
                  <span style={{ marginRight: "5px" }}>{pill.Icon}</span>
                  <span>{pill.name}</span>
                </div>
              </a>
            ))}
        </div>

        <img
          className="mt-4 rounded-2 border border-info img-fluid"
          src={proximarket}
          alt="proximarket_img"
          width={1000}
        />
        <br />
        <button
          className="mt-3 mb-5 rounded-5 PORTFOLIO_FONT_4 fw-semibold"
          style={{ padding: "8px" }}
        >
          <a
            href="https://proxi-market.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <TbWorldWww
              style={{ width: "30px", fontSize: "28px", marginRight: "5px" }}
            />
            Ir al sitio web
          </a>
        </button>
      </div>
      <hr className="border mx-auto mb-5" width={"65%"} />
      <div className="col-12 col-md-8 px-4 mx-auto text-light PORTFOLIO_FONT_4 mb-5">
        <h1 className="PORTFOLIO_FONT_3">
          <FaRegSmileWink className="me-3 mb-2" />
          Sobre mi
        </h1>
        <div className="row text-center">
          <div
            className="col-sm-12 col-md-8 text-start d-flex align-items-center justify-content-center"
            style={{ lineHeight: "32px" }}
          >
            Me llamo jon nahuel pereyra (si así es como se escribe, jon 😌).
            Empecé en la programación hace poco más de dos años. Actualmente
            trabajo en Gravitad, aceleradora de proyectos.
            <br />
            <br />
            Algunos de mis éxitos incluyen formar el equipo de desarrollo de
            software freelance "4Coders TEAM". Fue la mejor decisión que pude
            haber tomado en cuanto a crecimiento personal y profesional 🚀✨.
            Actualmente, formo parte del grupo SPARTANS dentro de Gravitad,
            donde ademas de desarrollar proyectos diversos, creamos nuevas
            herramientas de gran utilidad para la empresa y la comunidad open
            source.
            <br />
            <br />
            Como diseñador gráfico, di clases en modalidad virtual para más de
            cien 100 alumnos donde aprobó más del 80% 😯. Mi objetivo es seguir
            dejando huella por todos los lugares donde la tecnología me está
            llevando.
          </div>
          <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center mt-4 mt-md-0">
            <img
              src="https://github.com/jon0010.png"
              alt="jon"
              width={295}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
