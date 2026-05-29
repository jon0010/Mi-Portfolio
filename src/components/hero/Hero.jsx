import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { gsap, hasGsap } from "../../lib/gsap";
import { profile } from "../../data/portfolio";

const Hero = () => {
  const { isDark } = useTheme();
  const rootRef = useRef(null);
  const [text, setText] = useState(profile.typewriterPhrases[0]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const phrases = profile.typewriterPhrases;
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let typeTimeout;
    let eraseTimeout;
    let cursorInterval;

    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setText(currentPhrase.slice(0, charIndex));
      if (charIndex < currentPhrase.length) {
        charIndex += 1;
        typeTimeout = setTimeout(typeWriter, 100);
      } else {
        typeTimeout = setTimeout(eraseText, 2000);
      }
    };

    const eraseText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setText(currentPhrase.slice(0, charIndex));
      if (charIndex > 0) {
        charIndex -= 1;
        eraseTimeout = setTimeout(eraseText, 50);
      } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typeTimeout = setTimeout(typeWriter, 500);
      }
    };

    cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    typeWriter();

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(eraseTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    if (!hasGsap()) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
      });
      gsap.from(".hero-card", {
        scale: 0.94,
        opacity: 0,
        duration: 0.85,
        ease: "power2.out",
        delay: 0.15,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    const next = document.querySelector(".exp-section");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={rootRef} className="hero-section">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge hero-reveal">
            <span className="hero-badge-dot" />
            Director de Operaciones
          </span>

          <p className="hero-tagline hero-reveal">{profile.tagline}</p>

          <h1 className="hero-title hero-reveal">
            Tecnología + equipo
            <br />
            <span className="text-accent">construimos confianza</span>
          </h1>

          <p className="hero-name hero-reveal">{profile.name}</p>
          <p className="hero-role hero-reveal">{profile.role}</p>

          <div className="ide-container hero-reveal">
            <div className="mac-buttons">
              <div className="btn-close" />
              <div className="btn-minimize" />
              <div className="btn-maximize" />
            </div>
            <div className="ide-line">
              <span className="ide-kw">import</span>
              <span className="ide-brace">{"{"}</span>
              <span className="ide-var">{text}</span>
              <span className="ide-brace">{"}"}</span>
              <span className="ide-kw">from</span>
              <span className="ide-str">"useTeam"</span>
              <span
                className="ide-cursor"
                style={{ visibility: cursorVisible ? "visible" : "hidden" }}
              >
                |
              </span>
            </div>
          </div>

          <p
            className="hero-lead hero-reveal"
            style={{ color: isDark ? "#94a3b8" : "#475569" }}
          >
            {profile.intro}
          </p>

          <div className="hero-tags hero-reveal">
            {profile.heroTags.map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="hero-actions hero-reveal">
            <button
              type="button"
              className="btn-tech btn-tech-primary btn-tech-lg"
              onClick={() =>
                window.open(`https://wa.me/${profile.whatsapp}`, "_blank")
              }
            >
              <IoLogoWhatsapp /> Hablemos
            </button>
            <Link to="/services" className="btn-tech btn-tech-lg">
              Ver servicios IA
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech"
            >
              <GrLinkedin /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech"
            >
              <BsGithub /> GitHub
            </a>
          </div>

          <div className="hero-metrics hero-reveal">
            {profile.heroMetrics.map((m) => (
              <div key={m.label} className="hero-metric">
                <span className="hero-metric-value">{m.value}</span>
                <span className="hero-metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          <p className="hero-location hero-reveal">{profile.location}</p>
        </div>

        <aside className="hero-visual hero-reveal">
          <div className="hero-card">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="hero-card-img"
            />
            <div className="hero-card-overlay">
              <span className="hero-card-role">COO</span>
              <span className="hero-card-name">{profile.name}</span>
            </div>
            <div className="hero-card-glow" aria-hidden="true" />
          </div>
        </aside>
      </div>

      <button
        type="button"
        className="hero-scroll"
        onClick={scrollToContent}
        aria-label="Ir al contenido"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
};

export default Hero;
