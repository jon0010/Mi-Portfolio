import React from "react";
import Home from "./Home";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
};

export default App;
