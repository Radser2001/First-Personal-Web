import React from "react";
import "./about.css";
import { FaSchool, FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h2>About</h2>
      </div>
      <div className="about-info">
        <div className="school">
          <p className="school-icon">
            <FaSchool />
          </p>
          <p className="sch-type">Primary & Secondary Education</p>
          <p className="school-name">Holy Family Convent, Kurunegala</p>
          <p className="study">A/L - Physical Science</p>
          <p className="time">2007 - 2020</p>
        </div>
        <div className="university">
          <p>
            <FaUniversity className="uni-icon" />
          </p>
          <p className="uni-type">Higher Education</p>
          <p className="uni-name">
            Sri Lanka Institute of Information Technology
          </p>
          <p className="degree">
            Bsc(hons) in Information Technology specialising in Software
            Engineering
          </p>
          <p className="time">2021 - present</p>
        </div>
      </div>
    </div>
  );
};

export default About;
