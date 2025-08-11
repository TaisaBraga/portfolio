import { Divider } from "@mui/material";
import NavigationBar from "../Templates/NavigationBar";
import Presentation from "../Templates/Presentation";
import Projects from "../Templates/Projects";
import Aboutme from "../Templates/Aboutme";
import Skills from "../Templates/Skills";
import Contact from "../Templates/Contact";

export const PrincipalPage = () => {
  return (
    <div>
      <NavigationBar />
      <Presentation />
      <Divider />
      <Aboutme />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Contact />
      <div>footer</div>
    </div>
  );
};
