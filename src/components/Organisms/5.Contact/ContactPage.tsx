import "./ContactPage.css";
import WhatsAppButton from "../../Atoms/WhatsAppButton";
import email from "../../../assets/email.svg";
import copy from "../../../assets/copy.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const {t} = useTranslation()
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyEmail = () => {
    const texto = "taisa.bragabento@gmail.com";
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => console.error("Erro ao copiar: ", err));
  };
  return (
    <div id="ContactPage">
      <h1>{t("contactTitle")}</h1>
      <div className="contact-info">
        <WhatsAppButton />
        <div className="contact-email">
          <img src={email} alt="email-icon" />
          <p>taisa.bragabento@gmail.com</p>
          <img
            src={copy}
            alt="copy-icon"
            style={{ cursor: "pointer" }}
            onClick={copyEmail}
          />
        </div>
      </div>
        {isCopied ? <p style={{fontSize: "12px"}}>{t("copySucess")}</p> : null}
    </div>
  );
}

export default ContactPage;
