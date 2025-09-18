import i18n from "i18next";
import { useTranslation } from "react-i18next";
import aboutme from "../../../assets/aboutme.jpg";
import "./AboutmePage.css";
import linkedIn from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";

function AboutmePage() {
  const { t } = useTranslation();

  return (
    <div id="aboutmePage">
      <div className="aboutmeDescription">
        <h1>{t("name")}</h1>
        <div className="presentation-text">
          <p>{t("description")}</p>
          <p style={{ margin: "1.5em 0 0.5em" }}>📝 {t("interests")}</p>
          <p>🚀{t("goal")}</p>
          <div className="iconButtons">
            <div id="resumelink">
              {i18n.language == "PT" ? (
                <a
                  href="/curriculo-Taisa-Braga.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("download")}
                </a>
              ) : (
                <a
                  href="/resume-Taisa-Braga.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("download")}
                </a>
              )}
            </div>
            <a href="https://www.linkedin.com/in/taisabraga/" target="_blank">
              <img src={linkedIn} alt="linkedIn-icon" />
            </a>
            <a href="https://github.com/TaisaBraga" target="_blank">
              <img src={github} alt="github-icon" />
            </a>
          </div>
        </div>
      </div>
      <img src={aboutme} alt="aboutme-image" />
    </div>
  );
}

export default AboutmePage;
