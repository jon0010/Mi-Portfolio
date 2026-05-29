import React, { useEffect, useRef } from "react";
import { gsap, hasGsap } from "../../lib/gsap";

// Adaptación del pen "flair cursor follower" de GreenSock (WbbEGmp).
// En vez de imágenes usamos pequeños orbes con el gradiente de la marca, que
// aparecen siguiendo el cursor y caen con un ease elástico.
const FLAIR_COUNT = 14;

const palette = [
  "linear-gradient(135deg,#1e3a8a,#3b82f6)",
  "linear-gradient(135deg,#3b82f6,#06b6d4)",
  "linear-gradient(135deg,#06b6d4,#22d3ee)",
  "linear-gradient(135deg,#8b5cf6,#3b82f6)",
];

const CursorFlair = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!hasGsap()) return;
    // Sólo en dispositivos con puntero fino (evita móviles/táctiles)
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const container = containerRef.current;
    const flair = gsap.utils.toArray(container.querySelectorAll(".flair"));
    if (!flair.length) return;

    let index = 0;
    const wrap = gsap.utils.wrap(0, flair.length);
    const gap = 90;
    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };

    const onMove = (e) => {
      mousePos = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const playAnimation = (shape) => {
      gsap
        .timeline()
        .fromTo(
          shape,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, ease: "elastic.out(1,0.4)", duration: 1 }
        )
        .to(shape, { rotation: "random([-220,220])" }, "<")
        .to(
          shape,
          { y: "+=180", opacity: 0, ease: "back.in(0.4)", duration: 1 },
          0.1
        );
    };

    const animateImage = () => {
      const img = flair[wrap(index)];
      gsap.killTweensOf(img);
      gsap.set(img, { clearProps: "all" });
      gsap.set(img, {
        opacity: 1,
        left: mousePos.x,
        top: mousePos.y,
        xPercent: -50,
        yPercent: -50,
      });
      playAnimation(img);
      index++;
    };

    const trail = () => {
      const travel = Math.hypot(
        lastMousePos.x - mousePos.x,
        lastMousePos.y - mousePos.y
      );
      if (travel > gap) {
        animateImage();
        lastMousePos = mousePos;
      }
    };
    gsap.ticker.add(trail);

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(trail);
    };
  }, []);

  return (
    <div ref={containerRef} className="cursor-flair-layer" aria-hidden="true">
      {Array.from({ length: FLAIR_COUNT }).map((_, i) => (
        <span
          key={i}
          className="flair"
          style={{ background: palette[i % palette.length] }}
        />
      ))}
    </div>
  );
};

export default CursorFlair;
