import "./WhatsAppButton.css"
import whatsapp from "../../assets/whatsapp.svg";

function WhatsAppButton() {
  const openWhatsAppPage = () => {
    const number = "+351911549286";
    window.open(`https://wa.me/${number}`, "_blank");
  };
  return (
    <div id="ContactPage">
      <button onClick={openWhatsAppPage}>
        <img src={whatsapp} alt="whatsapp-icon" />
        <p>Let's chat on WhatsApp</p>
      </button>
    </div>
  );
}

export default WhatsAppButton;
