import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, hasGsap } from "../../lib/gsap";

const Timeline = ({ events }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!hasGsap()) return;
    const ctx = gsap.context(() => {
      // Línea que se dibuja con el scroll
      gsap.fromTo(
        ".tl-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
      // Reveal de cada hito
      gsap.utils.toArray(".tl-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 85%", once: true },
          x: -40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, [events]);

  return (
    <div ref={rootRef} className="tl">
      <div className="tl-line">
        <div className="tl-progress" />
      </div>
      {events.map((ev, i) => (
        <div className="tl-item" key={i}>
          <span className="tl-dot" />
          <div className="tl-content">
            <div className="tl-meta">
              <span className="tl-date">{ev.date}</span>
              {ev.place && <span className="tl-place">{ev.place}</span>}
            </div>
            <h4 className="tl-title">{ev.title}</h4>
            <p className="tl-text">{ev.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
