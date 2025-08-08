import PageName from "../../Atoms/PageName";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import radonJoke from "../../../assets/RandonJoke.png";
import todoList from "../../../assets/todoList.png";
import findAddress from "../../../assets/findAddress.png";
import weatherApp from "../../../assets/weatherApp.png";
import rickAndMorty from "../../../assets/rickAndMorty.png";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div id="Projects">
      <PageName identifyName="✏️ Projects" />
      <h1>Works and projects</h1>
      <div className="cardProjects">
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Random-Joke?tab=readme-ov-file"
          }
          cardTitle="Random-Joke"
          cardSubtitle="Create a Random Joke using React app through API"
          cardTec={["React"]}
          cardImage={radonJoke}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Todo-List-with-Vite"
          }
          cardTitle="TODO List"
          cardSubtitle="This is a simple TODO List"
          cardTec={["Vite", "React", "TypeScript"]}
          cardImage={todoList}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/capputeeno_challenge"
          }
          cardTitle="Capputeeno"
          cardSubtitle="Project created as a personal challenge by Rocketseat"
          cardTec={["Next", "React", "TypeScript"]}
          cardImage={todoList}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Find-Address"
          }
          cardTitle="Find Address"
          cardSubtitle="Project carried out with the objective of practicing some React concepts, API consumption and componentization"
          cardTec={["React", "TypeScript", "Axios"]}
          cardImage={findAddress}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/clima-app"
          }
          cardTitle="Weather App"
          cardSubtitle="This project aims to display the city's weather forecast, entered by the user, and change the background according to the forecast."
          cardTec={["React", "TypeScript", "Axios"]}
          cardImage={weatherApp}
        />
        <ProjectCard
          cardLink={
            "https://github.com/TaisaBraga/Rick_and_morty_GraphQl"
          }
          cardTitle="Rick and Morty"
          cardSubtitle="Project created to consume a GraphQL API using React and Apollo Client."
          cardTec={["React", "TypeScript", "GraphQl"]}
          cardImage={rickAndMorty}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;
