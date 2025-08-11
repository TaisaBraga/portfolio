import "./SkillsPage.css";
import PageName from "../../Atoms/PageName";
import html from "../../../assets/html.svg";
import css from "../../../assets/css.svg";
import react from "../../../assets/react.svg";
import git from "../../../assets/github.svg";
import tailwind from "../../../assets/tailwind.svg";
import vue from "../../../assets/vue.svg";
import next from "../../../assets/Next.svg";
import javascript from "../../../assets/JavaScript.svg";

function SkillsPage() {
  return (
    <div id="skills">
      <PageName identifyName="👩‍💻 Skills" />
      <h1>Technologies and skills</h1>
      <p>Techs I use on a daily basis</p>
      <div>
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={javascript} alt="javascript-icon" />
        <img src={react} alt="reat-icon" />
        <img src={git} alt="git-icon" />
      </div>

      <p>Other techs I've done projects with</p>
      <div>
        <img src={next} alt="next-icon" />
        <img src={vue} alt="vue-icon" />
        <img src={tailwind} alt="tailwind-icon" />
      </div>
    </div>
  );
}

export default SkillsPage;
