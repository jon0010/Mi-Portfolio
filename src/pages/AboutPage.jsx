import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, hasGsap } from "../lib/gsap";
import { profile } from "../data/portfolio";

const achievements = [
  {
    title: "COO & socio fundador de useTeam",
    text: "Operación de una compañía con +40 talentos y presencia internacional, especializada en soluciones agénticas e IA.",
  },
  {
    title: "+200 proyectos entregados",
    text: "Clientes en múltiples regiones de España y Portugal desde nuestra sede en Canarias.",
  },
  {
    title: "Alianzas estratégicas",
    text: "Partner tecnológico de Gravitad y partner de Cognitfy en IA empresarial B2B.",
  },
  {
    title: "Convocatoria Gravitad 2026 × SIDECA",
    text: "Web del programa de emprendedores del ecosistema canario.",
  },
];

const AboutPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!hasGsap()) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: { trigger: pageRef.current, start: "top 80%" },
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-wrap about-page">
      <div className="container page-inner">
        <header className="about-header about-reveal">
          <span className="section-kicker">Perfil</span>
          <h1 className="section-title">Sobre mí</h1>
        </header>

        <div className="about-grid">
          <div className="about-photo-wrap about-reveal">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="about-photo"
            />
            <div className="about-photo-frame" aria-hidden="true" />
          </div>

          <div className="about-copy">
            <p className="about-reveal">
              Me llamo <strong>{profile.name}</strong>. Llevo más de cuatro años
              en tecnología y desde el 21 de abril de 2025 soy{" "}
              <span className="text-accent">COO & Co-fundador de useTeam</span>,
              con sede en Canarias. Creamos soluciones agénticas avanzadas y
              experiencias inmersivas para clientes de España, Portugal y la UE.
            </p>

            <p className="about-reveal">
              Formalizamos en España la alianza con{" "}
              <span className="text-accent">Gravitad</span> como partner
              tecnológico, somos partners de{" "}
              <span className="text-accent">Cognitfy</span> en IA B2B y
              desarrollamos la web de la Convocatoria Gravitad 2026 con{" "}
              <span className="text-accent">SIDECA Robótica y Tecnología</span>.
            </p>

            <div className="about-card about-reveal">
              <h2>Logros destacados</h2>
              <ul>
                {achievements.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="about-reveal">
              Como docente formé a más de 100 alumnos en diseño digital. Creo
              que el impacto real nace del código y del equipo que lo construye.
            </p>

            <p className="about-reveal about-tagline">
              En <span className="text-accent">useTeam</span> activamos lo mejor
              de cada persona: inteligencia colectiva, pasión y tecnología de
              vanguardia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
