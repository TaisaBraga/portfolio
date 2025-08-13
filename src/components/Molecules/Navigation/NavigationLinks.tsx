import i18n from "i18next";
import "./NavigationLinks.css";
import NavigationMenuItem from "../../Atoms/NavigationMenuItem";
import { useTranslation } from "react-i18next";
import usFlag from "../../../assets/US-Flag.svg";
import brFlag from "../../../assets/BR-Flag.svg";

function NavigationLinks() {
  const { t } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-nav">
      <div className="links">
        <NavigationMenuItem
          name={t("navHome")}
          linkAddress={() => {
            scrollToSection("home");
          }}
        />
        <NavigationMenuItem
          name={t("navAboutme")}
          linkAddress={() => {
            scrollToSection("aboutme");
          }}
        />
        <NavigationMenuItem
          name={t("navProjects")}
          linkAddress={() => {
            scrollToSection("projects");
          }}
        />
        <NavigationMenuItem
          name={t("navSkills")}
          linkAddress={() => {
            scrollToSection("skills");
          }}
        />
        <NavigationMenuItem
          name={t("navContact")}
          linkAddress={() => {
            scrollToSection("contact");
          }}
        />
      </div>
      <div className="lang">
        <button className="enLang" onClick={() => i18n.changeLanguage("EN")}>
          <img src={usFlag} alt="USA Flag" />
          <p>EN</p>
        </button>
        <button className="ptLang" onClick={() => i18n.changeLanguage("PT")}>
          <img src={brFlag} alt="BR Flag" />
          <p>PT</p>
        </button>
      </div>
    </div>
  );
}

export default NavigationLinks;
