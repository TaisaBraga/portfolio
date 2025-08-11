import "./FooterPage.css";
import linkedIn from "../../../assets/linkedin-icon.png";
import github from "../../../assets/github-icon.png";

function FooterPage() {
  return (
    <div id="Footer">
      <p>Copyright © Taisa Braga Bento · 2025</p>
      <div className="iconButtons">
        <a href="https://www.linkedin.com/in/taisabraga/" target="_blank">
          <img src={linkedIn} alt="linkedIn-icon" />
        </a>
        <a href="https://github.com/TaisaBraga" target="_blank">
          <img src={github} alt="github-icon" />
        </a>
      </div>
    </div>
  );
}

export default FooterPage;
