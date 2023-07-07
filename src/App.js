import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Info from "./Components/Info/Info";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './style.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Contact />
      <Footer />

      <a href="#top" id="topscroll">
        <i className="fa-solid fa-arrow-up"></i>
      </a>

    </>
  );
};

export default App;
