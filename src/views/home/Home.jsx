import React from "react";
import "./home.css";
import dev from "../../assets/dev.gif";

const Home = () => {
  return (
    <div className="container-fluid m-0 text-white">
      <h1 className="titulo col-8 mx-0 my-0 text-dark p-5">
        Jon Nahuel Pereyra <br />{" "}
      </h1>
      <div className="subtituloCont">
        <h2 className="subtitulo col-8 text-dark p-5">Full Stack Developer</h2>
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
        <img className="rounded float-end me-5" src={dev} alt="img"></img>
      </div>
    </div>
  );
};

export default Home;
