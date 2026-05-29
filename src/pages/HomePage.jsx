import React from "react";
import { TbBriefcase } from "react-icons/tb";
import { useTheme } from "../contexts/ThemeContext";
import Hero from "../components/hero/Hero";
import Experiences from "../components/experiences/Experiences";
import InfiniteSlider from "../components/slider/InfiniteSlider";
import Partners from "../components/partners/Partners";
import Timeline from "../components/timeline/Timeline";
import { milestones } from "../data/portfolio";

const HomePage = () => {
  const { isDark } = useTheme();

  return (
    <div className="home">
      <Hero />
      <Experiences />
      <InfiniteSlider />

      <section className="container milestones-section">
        <span className="section-kicker">Trayectoria</span>
        <h2 className="section-title">
          <TbBriefcase className="me-2" />
          Hitos <span className="hero-title-grad">profesionales</span>
        </h2>
        <p className="section-sub" style={{ color: isDark ? "#cbd5e1" : "#475569" }}>
          De Buenos Aires a Canarias: el camino hasta liderar la operación de
          useTeam.
        </p>
        <Timeline events={milestones} />
      </section>

      <Partners />
    </div>
  );
};

export default HomePage;
