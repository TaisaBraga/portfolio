import "./ProjectCard.css";

interface IProjectCardProps {
  cardTitle: string;
  cardSubtitle: string;
  cardTec: string[];
  cardImage: string;
  cardLink: string;
}

function ProjectCard(IProjectCardProps: IProjectCardProps) {
  const openGithubProjectPage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      id="container-card"
      onClick={() => openGithubProjectPage(IProjectCardProps.cardLink)}
    >
      <h3>{IProjectCardProps.cardTitle}</h3>
      <p style={{minHeight: '5em', maxHeight: '5em'}}>{IProjectCardProps.cardSubtitle}</p>

      <div className="cardmap">
        {IProjectCardProps.cardTec.map((tec) => (
          <div className="cardTec">{tec}</div>
        ))}
      </div>

      <img src={IProjectCardProps.cardImage} alt="Project Image" />
    </div>
  );
}

export default ProjectCard;
