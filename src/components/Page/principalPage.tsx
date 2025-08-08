import { Divider } from "@mui/material";
import NavigationBar from "../Templates/NavigationBar";
import Presentation from "../Templates/Presentation";
import Projects from "../Templates/Projects";
import Aboutme from "../Templates/Aboutme";

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
      <div>skills</div>
      <div>contact</div>
      <div>footer</div>
    </div>
  );
};
