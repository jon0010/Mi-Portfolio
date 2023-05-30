import React from "react";
import bowser from "../../assets/bowser.jpg";
import spike from "../../assets/spike.jpg";
import jumpman from "../../assets/jumpman.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <div className="carruseltitulo">
        <div className="carruselfondo">
          <h2>Conoce la experiencia de las personas que conocen mi trabajo</h2>
          <p>
            Referencias de profesionales con los que compartí labores y sus
            perfiles de linkedIn, ampliemos nuestra red!
          </p>
        </div>
      </div>

      <div
        id="testimonios-carrusel"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={bowser}
                alt="Foto de bowser"
              />
              <p className="testimonio-texto">
                "Estoy muy agradecido por el servicio que recibí de Medical
                Connect. La plataforma de videollamadas es muy fácil de usar y
                el médico que me atendió fue muy amable y eficiente. Me
                diagnosticó rápidamente y me dio un tratamiento que me ayudó a
                sentirme mejor. Definitivamente recomendaría esta aplicación a
                cualquier persona que busque atención médica conveniente y
                confiable".
              </p>
              <div className="testimonio-info">
                <p className="cliente">Bowser</p>
                <p className="cargo">Enemigo de mario x2</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={jumpman}
                alt="Foto de jumpman"
              />
              <p className="testimonio-texto">
                "Tuve una experiencia maravillosa con Medical Connect. Mi médico
                me atendió enseguida y fue muy detallado en su explicación de mi
                condición. La aplicación en sí es muy fácil de usar y estoy muy
                contenta con la calidad del servicio que recibí. Definitivamente
                volveré a usarla en el futuro".
              </p>
              <div className="testimonio-info">
                <p className="cliente">jumpman</p>
                <p className="cargo">mario antes de mario</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={spike}
                alt="Foto de spike"
              />
              <p className="testimonio-texto">
                "Medical Connect me sorprendió con su eficiencia y facilidad de
                uso. Nunca había tenido una consulta médica en línea, pero el
                médico que me atendió fue muy amable y profesional. Me sentí muy
                cómodo durante toda la consulta y me encantó no tener que salir
                de mi casa. Definitivamente lo recomiendo a cualquier persona
                que busque atención médica accesible y de calidad".
              </p>
              <div className="testimonio-info">
                <p className="cliente">Spike</p>
                <p className="cargo">Enemigo de mario</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
