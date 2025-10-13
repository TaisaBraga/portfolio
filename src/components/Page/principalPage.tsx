import { Box, Divider } from "@mui/material";
import NavigationBar from "../Templates/NavigationBar";
import Projects from "../Templates/Projects";
import Aboutme from "../Templates/Aboutme";
import Skills from "../Templates/Skills";
import Contact from "../Templates/Contact";
import Footer from "../Templates/Footer";

export const PrincipalPage = () => {
  return (
    <div>
      <NavigationBar />
      <Box sx={{padding: {md: "6em 3em 0 3em", sm: "2em 1em 0 1em"}}}>
        {/* <Presentation />
        <Divider sx={{backgroundColor: "#6F6F6F"}}/> */}
        <Aboutme />
        <Divider sx={{backgroundColor: "#6f6f6f30"}} />
        <Projects />
        <Divider sx={{backgroundColor: "#6f6f6f30"}} />
        <Skills />
        <Divider sx={{backgroundColor: "#6f6f6f30"}} />
        <Contact />
        <Divider sx={{backgroundColor: "#6f6f6f30"}} />
      </Box>
      <Footer />
    </div>
  );
};
