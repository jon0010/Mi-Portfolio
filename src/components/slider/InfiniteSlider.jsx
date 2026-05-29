import React, { useEffect, useRef } from "react";
import * as LucideIcons from "lucide-react";
import { gsap, hasGsap, horizontalLoop } from "../../lib/gsap";
import { sliderItems } from "../../data/portfolio";

const CapabilityIcon = ({ name }) => {
  const Icon = LucideIcons[name];
  if (!Icon) return <LucideIcons.Box size={26} strokeWidth={1.25} />;
  return <Icon size={26} strokeWidth={1.25} className="slider-card-icon-svg" />;
};

const InfiniteSlider = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!hasGsap() || !trackRef.current) return;
    const cards = gsap.utils.toArray(
      trackRef.current.querySelectorAll(".slider-card")
    );
    if (!cards.length) return;

    const loop = horizontalLoop(cards, {
      paused: false,
      repeat: -1,
      speed: 0.85,
      draggable: true,
      center: false,
      paddingRight: 20,
    });

    const track = trackRef.current;
    const slow = () => gsap.to(loop, { timeScale: 0.2, duration: 0.35 });
    const resume = () => gsap.to(loop, { timeScale: 1, duration: 0.35 });
    track.addEventListener("mouseenter", slow);
    track.addEventListener("mouseleave", resume);

    return () => {
      track.removeEventListener("mouseenter", slow);
      track.removeEventListener("mouseleave", resume);
      loop.kill?.();
    };
  }, []);

  const items = [...sliderItems, ...sliderItems, ...sliderItems];

  return (
    <section ref={sectionRef} className="slider-section">
      <div className="container">
        <span className="section-kicker">Habilidades</span>
        <h2 className="section-title">
          Capacidades <span className="text-accent">end-to-end</span>
        </h2>
      </div>
      <div className="slider-viewport">
        <div ref={trackRef} className="slider-track">
          {items.map((item, i) => (
            <div className="slider-card" key={`${item.label}-${i}`}>
              <CapabilityIcon name={item.icon} />
              <span className="slider-card-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteSlider;
