import React, { useEffect, useState } from "react";
import "./home.css";
import dev from "../../assets/dev.gif";
import { Link } from "react-router-dom";
import discord from "../../assets/discord.jpg";

const Home = () => {
  const [typedSubTitle, setTypedSubTitle] = useState("");
  const [showGmailCard, setShowGmailCard] = useState(false);
  const [showDiscordCard, setShowDiscordCard] = useState(false);

  const handleEmailButtonClick = () => {
    const emailAddress = "jonnahuel78@gmail.com";
    const subject = "";
    const body = "";
    const mailtoUrl = `mail-to:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleGmailMouseEnter = () => {
    setShowGmailCard(true);
  };

  const handleGmailMouseLeave = () => {
    setShowGmailCard(false);
  };

  const handleDiscordMouseEnter = () => {
    setShowDiscordCard(true);
  };

  const handleDiscordMouseLeave = () => {
    setShowDiscordCard(false);
  };

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
    <div className="bg-custom row p-0 m-0 pt-2 mt-0">
      <div className="col-7">
        <h1 className="titulo text-dark text-center my-5 py-5">
          Jon Nahuel Pereyra
        </h1>
        <div className="subtituloCont ms-1">
          <h2 className="subtitulo text-center text-dark">
            {typedSubTitle || <span>&nbsp;</span>}
          </h2>
        </div>
        <p className="texto text-dark text-center texto p-5">
          Hola, soy un desarrollador Fullstack con un background destacado en
          liderazgo, organización y capacitación en equipos a gran escala.
          Además, cuento con experiencia en la creación de planes integrales en
          colaboración con los clientes para garantizar el éxito. Tengo una
          espacialización en desarrollo Full Stack, con conocimientos en
          metodologías ágiles, GIT, estructura de datos, algoritmos, frameworks
          basados en el lenguaje JavaScript.
        </p>
      </div>
      <div className="col-5 text-center pt-5">
        <img className="img-full" src={dev} alt="img" />
        <div className="circleBtn mt-5 ms-5">
          <div className="up">
            <Link
              to="https://www.linkedin.com/in/jon-nahuel-pereyra-832191257/"
              target="_blank"
            >
              <button className="card1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="30px"
                  height="30px"
                  fillRule="nonzero"
                  className="linkedin mt-4 ms-4"
                >
                  <g
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    className="mix-blend-mode: normal"
                  >
                    <g transform="scale(12,11)">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />{" "}
                    </g>
                  </g>
                </svg>
              </button>
            </Link>
            <button
              className="card2"
              onMouseEnter={handleGmailMouseEnter}
              onMouseLeave={handleGmailMouseLeave}
              onClick={handleEmailButtonClick}
            >
              {showGmailCard && (
                <div
                  className="disctarjeta card text-bg-danger mb-0 ms-5"
                  style={{ width: "18rem" }}
                >
                  <div className="card-header">Contactame por E-mail</div>
                  <div className="card-body">
                    <h5 className="card-title">Jonnahuel78@gmail.com</h5>
                    <p className="card-text">Estoy disponible todos los dias</p>
                  </div>
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Gmail"
                role="img"
                viewBox="0 0 970 512"
                className="gmail"
              >
                <rect width="512" height="512" rx="15%" fill="#fff" />
                <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                <path fillOpacity=".05" d="M256 285L120 392l-4-212" />
                <path
                  fill="#d54c3f"
                  d="M120 392H97c-12 0-22-10-22-23V143h45z"
                />
                <path fillOpacity=".08" d="M317 392h77V159H82" />
                <path fill="#f2f2f2" d="M97 121h318L256 234" />
                <path
                  fill="#b63524"
                  d="M392 392h23c12 0 22-10 22-23V143h-45z"
                />
                <path
                  fill="none"
                  stroke="#de5145"
                  strokeLinecap="round"
                  strokeWidth="44"
                  d="M97 143l159 115 159-115"
                />
              </svg>
            </button>
          </div>
          <div className="down">
            <Link to="https://github.com/jon0010" target="_blank">
              <button className="card3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                  className="github"
                >
                  {" "}
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </button>
            </Link>
            <button
              className="card4 mb-5"
              onMouseEnter={handleDiscordMouseEnter}
              onMouseLeave={handleDiscordMouseLeave}
            >
              {showDiscordCard && (
                <div
                  className="disctarjeta mt-2 ms-5"
                  style={{ width: "19rem" }}
                >
                  <Link to="https://discord.com/" target="_blank">
                    <img src={discord} className="card-img-top" alt="card" />
                    <div className="card-body">
                      <h5 className="card-title mt-3">
                        Jon Nahuel Pereyra#3430
                      </h5>
                      <p className="mt-3">
                        Utilicemos discord, la comunicacion es una herramienta
                        fundamental para alcanzar el exito!
                      </p>
                    </div>
                  </Link>
                </div>
              )}
              <svg
                height="30px"
                width="30px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="discord"
              >
                <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
