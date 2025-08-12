import linkedIn from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import photoDrawing from "../../../assets/photoDrawing.png";
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
        <div className="iconButtons">
          <a href="https://www.linkedin.com/in/taisabraga/" target="_blank">
            <img src={linkedIn} alt="linkedIn-icon" />
          </a>
          <a href="https://github.com/TaisaBraga" target="_blank">
            <img src={github} alt="github-icon" />
          </a>
        </div>
      </div>
      <img
        className="photoDraw"
        src={photoDrawing}
        alt="photoDrawing"
      />
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
