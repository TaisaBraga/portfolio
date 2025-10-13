import "./WhatsAppButton.css"
import messages from "../../assets/messages.svg";
import { useTranslation } from "react-i18next";

function WhatsAppButton() {
    const { t } = useTranslation();
  
  const openLinkedInPage = () => {
    window.open("https://www.linkedin.com/in/taisabraga/", "_blank");
  };
  
  return (
    <div id="ContactButton">
      <button onClick={openLinkedInPage}>
        <img src={messages} alt="messages-icon" />
        <p style={{color: 'black', fontSize: '0.9em'}}>{t("letsChat")}</p>
      </button>
    </div>
  );
}

export default WhatsAppButton;
