import React from "react";
import { Home, Projects, Skills, Testimonials } from "./views/index";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom"; //para rutear en app y trabajar directo en los componentes.

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
