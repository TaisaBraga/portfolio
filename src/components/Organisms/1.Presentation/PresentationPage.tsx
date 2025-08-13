import i18n from "i18next";
import linkedIn from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import photoDrawing from "../../../assets/photoDrawing.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import "./PresentationPage.css";
import PageName from "../../Atoms/PageName";
import WhatsAppButton from "../../Atoms/WhatsAppButton";
import { useTranslation } from "react-i18next";

function PresentationPage() {
  const { t } = useTranslation();

  return (
    <div id="presentation">
      <div>
        <PageName identifyName={t("welcomeMessage")} />
        <div>
          <h1>Taisa Braga</h1>
          <p>{t("jobName")}</p>
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
      <img className="photoDraw" src={photoDrawing} alt="photoDrawing" />
      <div id="presentationLinks">
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
