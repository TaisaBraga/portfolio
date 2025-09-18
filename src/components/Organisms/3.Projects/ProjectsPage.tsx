import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import radonJoke from "../../../assets/RandonJoke.png";
import todoList from "../../../assets/todoList.png";
import findAddress from "../../../assets/findAddress.png";
import weatherApp from "../../../assets/weatherApp.png";
import rickAndMorty from "../../../assets/rickAndMorty.png";
import theBlog from "../../../assets/theBlog.png";
import "./ProjectsPage.css";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const {t} = useTranslation()

  return (
    <div id="Projects">
      <h1>{t("pageTitle")}</h1>
      <div className="cardProjects">
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/the-blog"
          }
          cardTitle={t("theblog")}
          cardSubtitle={t("theblogDescription")}
          cardTec={["Next", "Typescript"]}
          cardImage={theBlog}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Random-Joke?tab=readme-ov-file"
          }
          cardTitle={t("randomJoke")}
          cardSubtitle={t("randomJokeCardDescription")}
          cardTec={["React"]}
          cardImage={radonJoke}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Todo-List-with-Vite"
          }
          cardTitle={t("todoList")}
          cardSubtitle={t("todoListCardDescription")}
          cardTec={["Vite", "React", "TypeScript"]}
          cardImage={todoList}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/capputeeno_challenge"
          }
          cardTitle="Capputeeno"
          cardSubtitle={t("capputeenoCardDescription")}
          cardTec={["Next", "React", "TypeScript"]}
          cardImage={todoList}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Find-Address"
          }
          cardTitle={t("findAddress")}
          cardSubtitle={t("findAddressCardDescription")}
          cardTec={["React", "TypeScript", "Axios"]}
          cardImage={findAddress}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/clima-app"
          }
          cardTitle={t("weatherApp")}
          cardSubtitle={t("weatherAppCardDescription")}
          cardTec={["React", "TypeScript", "Axios"]}
          cardImage={weatherApp}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Rick_and_morty_GraphQl"
          }
          cardTitle="Rick and Morty"
          cardSubtitle={t("rickAndMortyCardDescription")}
          cardTec={["React", "TypeScript", "GraphQl"]}
          cardImage={rickAndMorty}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;
