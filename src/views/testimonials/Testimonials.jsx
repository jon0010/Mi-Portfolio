import React from "react";
import alan from "../../assets/alan.jpg";
import avatar from "../../assets/chachi.jpg";
import chachi from "../../assets/avatar.jpg";
import MyBluetoothComponent from "../../components/StartBluetooth";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <MyBluetoothComponent />
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
                src={alan}
                alt="Foto de alan"
              />
              <p className="testimonio-texto">
                "Tuve el privilegio de colaborar con jon y siempre fue un
                compañero de equipo excepcional. Jon es un desarrollador
                talentoso y versátil, capaz de trabajar en todas las capas de
                una aplicación. Además, su actitud positiva, su disposición para
                ayudar a otros y su habilidad para comunicarse eficazmente hacen
                de jon un verdadero placer para trabajar. Sin duda alguna,
                recomendaría a jon como un gran activo para cualquier equipo de
                desarrollo."
              </p>
              <div className="testimonio-info">
                <p className="cliente">
                  Alan Abel Pereyra - Full Stack Developer
                </p>
                <p className="cargo">
                  https://www.linkedin.com/in/alan-abel-pereyra-0a8324257/
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={chachi}
                alt="Foto de ibrahin"
              />
              <p className="testimonio-texto">
                "He tenido el placer de trabajar con jon y su contribución fue
                realmente invaluable. Como Tech Lead, jon demostró una gran
                capacidad para guiar al equipo. Su atención al detalle y su
                habilidad para encontrar soluciones eficientes a problemas
                complejos fueron fundamentales para el éxito. Trabajar con jon
                fue una experiencia enriquecedora y definitivamente recomendaría
                su experiencia y habilidades técnicas en cualquier entorno de
                desarrollo."
              </p>
              <div className="testimonio-info">
                <p className="cliente">Dario Velazquez - Tech Lead en Prexto</p>
                <p className="cargo">
                  https://www.linkedin.com/in/velazquez-dario/
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={avatar}
                alt="Foto de dario"
              />
              <p className="testimonio-texto">
                "Trabajar con jon fue una experiencia excepcional. Su capacidad
                para comprender rápidamente los desafíos técnicos y proponer
                soluciones innovadoras nos permitió alcanzar nuestros objetivos
                en tiempo récord. Además, su habilidad para liderar al equipo y
                mantener un ambiente de trabajo colaborativo fue fundamental
                para el éxito del proyecto. Estoy impresionado por su
                conocimiento técnico y su ética de trabajo impecable. Sin duda,
                recomendaría a jon como un activo valioso en cualquier proyecto
                técnico."
              </p>
              <div className="testimonio-info">
                <p className="cliente">Ibrahin Rodriguez - CTO en Docmovi</p>
                <p className="cargo">
                  {" "}
                  https://www.linkedin.com/in/rodriguezibrahin/
                </p>
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
