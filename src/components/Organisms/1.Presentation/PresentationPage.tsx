import linkedIn from "../../../assets/linkedin-icon.png";
import github from "../../../assets/github-icon.png";
import whatsapp from "../../../assets/whatsapp.svg";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./PresentationPage.css";
import PageName from "../../Atoms/PageName";

function PresentationPage() {
  const openWhatsAppPage = () => {
    const number = "+5534991865698";
    window.open(`https://wa.me/${number}`, "_blank");
  };

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

        <button onClick={openWhatsAppPage}>
          <img src={whatsapp} alt="whatsapp-icon" />
          <p>Let's chat on WhatsApp</p>
        </button>
      </div>
    </div>
  );
}

export default PresentationPage;
