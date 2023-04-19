import "./index.scss";

import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "gabriel maldonado".split("");
  const jobArray = "jr developer".split("");

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={`${letterClass}`}
            strArray={`hi, i'm`.split("")}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={`${letterClass} logo`}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / React / React Native</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
