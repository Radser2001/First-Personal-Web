import React from "react";
import "./home.css";
import pic from "../assets/coding.gif";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-description">
        <div className="home-name">
          <h1>Supuni Eleesha Randeniya</h1>
        </div>
        <div className="home-text">
          <p>A Software Engineering Undergraduate at SLIIT</p>
        </div>

        <div className="home-contact">
          <div className="location">
            <ImLocation className="location-icon" />
            <p>Kurunegala, North Western Province, Sri Lanka </p>
          </div>
          <div className="email">
            <MdEmail className="email-icon" />
            <p>
              <a href="supuni.randeniya@gmail.com">
                supuni.randeniya@gmail.com
              </a>
            </p>
          </div>

          <div className="social-media">
            <p>
              <a href="https://github.com/Radser2001" target="_blank">
                <FaGithub />
              </a>
            </p>
            <p className="linkedin">
              <a href="https://linkedin.com/in/supuni-eleesha" target="_blank">
                <FaLinkedin />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={pic} alt="pic" />
      </div>
    </div>
  );
};

export default Home;
