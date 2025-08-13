import { Divider } from "@mui/material";
import NavigationBar from "../Templates/NavigationBar";
import Presentation from "../Templates/Presentation";
import Projects from "../Templates/Projects";
import Aboutme from "../Templates/Aboutme";
import Skills from "../Templates/Skills";
import Contact from "../Templates/Contact";
import Footer from "../Templates/Footer";

export const PrincipalPage = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ padding: "8em 3em 0 3em" }}>
        <Presentation />
        <Divider />
        <Aboutme />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
        <Divider />
      </div>
      <Footer />
    </div>
  );
};
