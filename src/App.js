import React, { useState, useEffect } from "react";
import Preloader from "../src/Component/Pre";
import Head from "./Component/Head/Head"
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects"
import Skills from "./Component/Skills/Skills";
import Resume from "./Component/Resume/Resume"
import { Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./Component/ScrollToTop";
import Footer from "./Component/Footer";



function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Head/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Projects/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
