import React from "react";
import gpt3 from "../../components/assets/projects/image.png";
import recipe from "../../components/assets/projects/recipe.png";
import chat from "../../components/assets/projects/chat.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        <div className="project-gpt3">
          <a href="https://gpt3-radser2001.netlify.app" target="_blank">
            <img src={gpt3} alt="gpt3" />
          </a>
          <p className="project-gpt3-text">
            A Landing Page created using React.js
          </p>
        </div>

        <div className="project-recipe">
          <a href="https://recipe-app-radser.netlify.app" target="_blank">
            <img src={recipe} alt="recipe" />
          </a>
          <p className="project-recipe-text">
            A Recipe app created using Recipe Search api{" "}
          </p>
        </div>

        <div className="project-chat">
          <a href="https://chat-app-radser2001.netlify.app" target="_blank">
            <img src={chat} alt="chat" />
          </a>
          <p className="project-chat-text">
            A chat application created using React.js and chat engine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
