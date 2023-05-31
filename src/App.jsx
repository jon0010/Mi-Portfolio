import React from "react";
import { Home, Projects, Testimonials } from "./views/index";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom"; //para rutear en app y trabajar directo en los componentes.

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
