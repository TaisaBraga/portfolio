import linkedIn from "../../../assets/linkedin-icon.png";
import github from "../../../assets/github-icon.png";

function PresentationPage() {
  const openWhatsAppPage = () => {
    const number = "+5534991865698";
    window.open(`https://wa.me/${number}`, "_blank");
  };

  return (
    <div>
      <div>
        <div>Grettings!</div>
        <div>
          <h1>Taisa Braga Bento</h1>
          <p>Front-end Developer</p>
        </div>
        <div>
          <img src={linkedIn} alt="linkedIn-icon" />
          <img src={github} alt="github-icon" />
        </div>
      </div>
      <img src={github} alt="github-icon" />
      <div>
        <a
          href="/resume-Taisa-Braga.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        <button onClick={openWhatsAppPage}>Let's chat on WhatsApp</button>
      </div>
    </div>
  );
}

export default PresentationPage;
