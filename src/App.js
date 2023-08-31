import React from 'react';
import Header from "./Components/Header/Header";
/* import AboutMe from "./Components/AboutMe/AboutMe"; */
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
    {/*     <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}  

    </div>
  );
}

export default App;