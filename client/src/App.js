import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </>
    );
  }
}

export default App;
