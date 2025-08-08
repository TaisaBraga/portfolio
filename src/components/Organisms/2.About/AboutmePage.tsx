import github from "../../../assets/github-icon.png";
import PageName from "../../Atoms/PageName";
import "./AboutmePage.css";

function AboutmePage() {
  return (
    <div id="aboutmePage">
      <img src={github} alt="github-icon" />
      <div className="aboutmeDescription">
        <PageName identifyName="🤓 About me" />
        <h1>Taisa Braga Bento</h1>
        <div className="presentation-text">
          <p>
            I'm a Web Developer with over 3 years of experience building
            intuitive and high-performance user interfaces. I hold a Bachelor's
            degree in Information Systems and a Postgraduate degree in Software
            Engineering. I'm constantly updating my skills through advanced
            courses. My main expertise is in Front-end development using
            JavaScript, React.js, and TypeScript, and I also have experience
            with Azure Logic Apps.
          </p>
          <p style={{margin: "1.5em 0 0.5em" }}>
            📝 Main interests: Front-end Development (React.js, Next.js,
            TypeScript)
          </p>
          <p>
            🚀 Goal: To create digital products that have a positive impact on
            people's lives, constantly improve my skills, and learn new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutmePage;
