import "./NavigationLinks.css";
import NavigationMenuItem from "../../Atoms/NavigationMenuItem";

function NavigationLinks() {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-nav">
      <NavigationMenuItem name="Home" linkAddress={() => {scrollToSection("home")}}/>
      <NavigationMenuItem name="About me" linkAddress={() => {scrollToSection("aboutme")}}/>
      <NavigationMenuItem name="Projects" linkAddress={() => {scrollToSection("projects")}}/>
      <NavigationMenuItem name="Skills" linkAddress={() => {scrollToSection("skills")}}/>
      <NavigationMenuItem name="Contact" linkAddress={() => {scrollToSection("contact")}}/>
    </div>
  );
}

export default NavigationLinks;
