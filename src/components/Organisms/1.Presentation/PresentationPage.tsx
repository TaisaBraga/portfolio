import linkedIn from "../../../assets/linkedin-icon.png";
import github from "../../../assets/github-icon.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./PresentationPage.css";
import PageName from "../../Atoms/PageName";
import WhatsAppButton from "../../Atoms/WhatsAppButton";

function PresentationPage() {

  return (
    <div id="presentation">
      <div>
        <PageName identifyName="👋 Grettings!" />
        <div>
          <h1>Taisa Braga</h1>
          <p>Front-end Developer</p>
        </div>
        <div id="iconButtons">
          <a href="https://www.linkedin.com/in/taisabraga/" target="_blank">
            <img src={linkedIn} alt="linkedIn-icon" />
          </a>
          <a href="https://github.com/TaisaBraga" target="_blank">
            <img src={github} alt="github-icon" />
          </a>
        </div>
      </div>
      <img src={github} alt="github-icon" />
      <div id="presentationLinks">
        <div id="resumelink">
          <a
            href="/resume-Taisa-Braga.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <FileDownloadOutlinedIcon
            fontSize="small"
            sx={{ cursor: "pointer" }}
          />
        </div>
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default PresentationPage;
