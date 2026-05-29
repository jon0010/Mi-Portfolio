import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger, hasGsap } from "../../lib/gsap";
import { experiences } from "../../data/portfolio";

// Sin Flip ni cambio de grid: tarjetas fijas + panel de detalle abajo.
// Evita roturas de layout con la sección de capacidades.
const Experiences = () => {
  const rootRef = useRef(null);
  const detailRef = useRef(null);
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((e) => e.id === activeId) || experiences[0];

  useEffect(() => {
    if (!hasGsap()) return;
    const ctx = gsap.context(() => {
      gsap.from(".exp-head > *", {
        scrollTrigger: { trigger: ".exp-head", start: "top 85%" },
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.from(".exp-thumb", {
        scrollTrigger: { trigger: ".exp-thumbs", start: "top 85%" },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!hasGsap() || !detailRef.current) return;
    gsap.fromTo(
      detailRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [activeId]);

  return (
    <section ref={rootRef} className="exp-section container">
      <div className="exp-head">
        <span className="section-kicker">Experiencias</span>
        <h2 className="section-title">
          Donde la tecnología me <span className="text-accent">lleva</span>
        </h2>
        <p className="section-sub">
          Proyectos y alianzas desde useTeam. Selecciona un proyecto.
        </p>
      </div>

      <div className="exp-thumbs">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            type="button"
            className={`exp-thumb ${exp.id === activeId ? "is-active" : ""}`}
            onClick={() => setActiveId(exp.id)}
          >
            <img src={exp.image} alt={exp.brand} loading="lazy" />
            <div className="exp-thumb-overlay">
              <span className="exp-tag">{exp.tag}</span>
              <strong>{exp.brand}</strong>
            </div>
          </button>
        ))}
      </div>

      <article ref={detailRef} className="exp-detail">
        <div className="exp-detail-media">
          <img src={active.image} alt={active.brand} />
        </div>
        <div className="exp-detail-body">
          <span className="exp-tag">{active.tag}</span>
          <h3>{active.brand}</h3>
          <p className="exp-detail-sub">{active.title}</p>
          <p className="exp-detail-text">{active.text}</p>
          {active.link && active.link !== "#" && (
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech btn-tech-primary exp-detail-link"
            >
              Visitar sitio <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </article>
    </section>
  );
};

export default Experiences;
