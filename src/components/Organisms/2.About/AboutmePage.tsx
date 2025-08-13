import { useTranslation } from "react-i18next";
import aboutme from "../../../assets/aboutme.jpg";
import PageName from "../../Atoms/PageName";
import "./AboutmePage.css";

function AboutmePage() {
  const { t } = useTranslation();

  return (
    <div id="aboutmePage">
      <img src={aboutme} alt="aboutme-image" />
      <div className="aboutmeDescription">
        <PageName identifyName={t("aboutMe")} />
        <h1>Taisa Braga Bento</h1>
        <div className="presentation-text">
          <p>{t("description")}</p>
          <p style={{ margin: "1.5em 0 0.5em" }}>📝 {t("interests")}</p>
          <p>🚀{t("goal")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutmePage;
