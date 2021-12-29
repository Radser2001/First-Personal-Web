import React from "react";
import "./skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiDart,
  SiFlutter,
  SiPython,
  SiNetlify,
  SiVisualstudiocode,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-heading">
        <h2>Skills</h2>
      </div>
      <div className="proIcon-heading">
        <p>Programming Languages and Frameworks</p>
      </div>
      <div className="icon-list">
        <p>
          <FaReact className="icons" />
        </p>

        <p>
          <FaHtml5 className="icons" />
        </p>
        <p>
          <FaCss3Alt className="icons" />
        </p>
        <p>
          <SiJavascript className="icons" />
        </p>
        <p>
          <SiDart className="icons" />
        </p>
        <p>
          <SiFlutter className="icons" />
        </p>
        <p>
          <SiPython className="icons" />
        </p>
        <img
          className="icons"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAABmJLR0QA/wD/AP+gvaeTAAAEFElEQVRYhc3ZS0gqURgH8EyNsFQkMbQghIoWPUybojSqVbVpoduMomXZIiwiCCIhaBW0CaJliyg3LSuoUCt6qFGrIhnDRHosLCwn0jl3IdyJqXPmoXNv//WZ7/xmHGfOd0YEAMj7fcn/34CfI+F3GEmSwWDQ5/Odn5/f3t6Gw2GCIOLxuEKh0Gg0arW6rKysvb29q6urtrY2P5/7yQOOCYVCExMT5eXlLOur1erx8XEcxznNwoEViUT6+/slEj4XWCwW22y2m5ubHLOWl5flcjkP0NfIZLLFxcV0Op0DVjKZtNvtWYK+pqOj4+npKStWMpns6enJoSmTqqqqSCTCk0WSpNVqzbkpk5qamufnZz6subk5gUyZdHd3w+4zKMvv9zP+6UQiEYZhCwsLR0dHd3d3BEG8vr7iOL61teV0OnU6HaNsaWmJA4skSZPJhK5oMBiOj48RFzuVSq2urpaWliKKyOXyx8dHtqzNzU20aWxs7PPzE2H6m1gs1tbWhijldDrZshoaGhCFHA4HSZJsTJkkEgmj0QirplKp3t/fmVmnp6cIU2trK5vnIS3hcFgmk8Fqut1uZtbo6CjseKlUenl5ydWUyezsLKzs8PAwM0uv18OOHxgY4GcCAMRiMdhfu66ujoF1fX0NM+Xl5R0cHPBmAQAcDodIJPpeVqvVMrDW1tZgJr1ez+lOzyb0BVowGISxLBbLj+cqROgsxI+IYZjAGCp01v39PWxoY2OjwBgqdFYsFoMN1Wg0AmOo0Flvb2+woSqVSmAMFTqLIAjYUIVCITCGyi/tE+mswsJC2NB4PC4whgqdVVRUBBv68vIiMIYKnaXVamFDHx4eBMZQobMQ7XIgEBAYQ4XOqq6uhg31+/0CY6jQWYhHudfrBf9s14n26kYvbPb29v7NCoLbMtBut2czGawZ1ul0zCyHwwFjSSSSi4sLfiaPxwMri2EYM+vs7AzxO7a0tPBoMdLptMVigdWcnJxkZgEADAYDQjYyMsJ1mTozM4MoeHJyworldrsRVTIylu1rKpWanp5GlDIajd+Pgjb7TU1NaFl9ff3h4SHa5PV6zWYzus73JhHKAgAEAgE2+5Emk2l+ft7n8+E4nkwmE4lENBrd2dlxuVxsVrOdnZ0/3g+ojSSXy8VYN5toNJpoNPrj1AzbbjabTSCTWCze3d2FTc2wSfnx8dHX15dzU0FBwfr6OmJe5i1dgiCGhoZyaFIqlfv7++hJ2W6Ar6ysKJXK7E29vb2hUIhxOg6fC6LR6ODgoFQq5QeqrKzc2NhgORfnjyvhcHhqaqqiooKlRiqVWq3W7e1tTq8sEeC1hAIAXF1deTyezKeozEMrHo8XFxeXlJSo1WqdTodhmNlsbm5uRvQHsPBkCZ1f2if+AR7oY3OWxbDNAAAAAElFTkSuQmCC"
        ></img>
      </div>
      <div className="toolIcon-heading">
        <p>Tools and Technologies</p>
      </div>
      <div className="toolIcons-list">
        <SiVisualstudiocode className="vs" />
        <FaGitAlt className="git" />
        <SiNetlify className="netlify" />
      </div>
    </div>
  );
};

export default Skills;
