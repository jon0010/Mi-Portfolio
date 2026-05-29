import React, { useEffect, useRef } from "react";
import { gsap, hasGsap, horizontalLoop } from "../../lib/gsap";
import { partners } from "../../data/portfolio";

const Partners = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!hasGsap() || !trackRef.current) return;
    const items = gsap.utils.toArray(
      trackRef.current.querySelectorAll(".partner-item")
    );
    if (!items.length) return;

    const loop = horizontalLoop(items, {
      paused: false,
      repeat: -1,
      speed: 0.45,
      draggable: false,
      paddingRight: 0,
    });

    return () => loop.kill?.();
  }, []);

  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="container">
        <span className="section-kicker center">Aliados</span>
      </div>
      <div className="partners-viewport">
        <div ref={trackRef} className="partners-track">
          {items.map((p, i) => (
            <span className="partner-item" key={`${p.name}-${i}`}>
              {p.url && p.url !== "#" ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
