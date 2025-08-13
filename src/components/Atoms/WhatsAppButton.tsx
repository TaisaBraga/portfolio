import "./WhatsAppButton.css"
import whatsapp from "../../assets/whatsapp.svg";
import { useTranslation } from "react-i18next";

function WhatsAppButton() {
    const { t } = useTranslation();
  
  const openWhatsAppPage = () => {
    const number = "+351911549286";
    window.open(`https://wa.me/${number}`, "_blank");
  };
  return (
    <div id="ContactPage">
      <button onClick={openWhatsAppPage}>
        <img src={whatsapp} alt="whatsapp-icon" />
        <p>{t("aboutButton")}</p>
      </button>
    </div>
  );
}

export default WhatsAppButton;
