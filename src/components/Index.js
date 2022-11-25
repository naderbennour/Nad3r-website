import React from "react";
import Education from "./Education/education";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Navbar from "./Navbar/navbar";
import Projects from "./Projects/Project";
import Researchpapers from "./Researchpaper/researchpaper";
import Skills from "./Skills/skills";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Researchpapers />
      <Footer />
    </div>
  );
};

export default Index;
