import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";

import Contact from "./components/Contact";
import Mailer from "./components/Mailer";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Services />
      <About />
      
      <Contact />
      <Mailer />
    </div>
  );
}
export default App;