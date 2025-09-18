import "./SkillsPage.css";
import html from "../../../assets/html.svg";
import css from "../../../assets/css.svg";
import react from "../../../assets/react.svg";
import git from "../../../assets/github.svg";
import tailwind from "../../../assets/tailwind.svg";
import vue from "../../../assets/vue.svg";
import next from "../../../assets/Next.svg";
import javascript from "../../../assets/JavaScript.svg";
import typescript from "../../../assets/typescript.svg";
import { useTranslation } from "react-i18next";

function SkillsPage() {
  const {t} = useTranslation()

  return (
    <div id="skills">
      <h1>{t("skillsTitle")}</h1>
      <p>{t("dailyTechs")}</p>
      <div>
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={javascript} alt="javascript-icon" />
        <img src={typescript} alt="typescript-icon" />
        <img src={react} alt="reat-icon" />
        <img src={git} alt="git-icon" />
      </div>

      <p>{t("otherTechs")}</p>
      <div>
        <img src={next} alt="next-icon" />
        <img src={vue} alt="vue-icon" />
        <img src={tailwind} alt="tailwind-icon" />
      </div>
    </div>
  );
}

export default SkillsPage;
