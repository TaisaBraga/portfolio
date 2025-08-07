import "./NavigationLinks.css";
import NavigationMenuItem from "../Molecules/NavigationMenuItem";

function NavigationLinks() {
  return (
    <div className="container-nav">
      <NavigationMenuItem name="Home" linkAddress={() => {}}/>
      <NavigationMenuItem name="About me" linkAddress={() => {}}/>
      <NavigationMenuItem name="Projects" linkAddress={() => {}}/>
      <NavigationMenuItem name="Skills" linkAddress={() => {}}/>
      <NavigationMenuItem name="Contact" linkAddress={() => {}}/>
    </div>
  );
}

export default NavigationLinks;
