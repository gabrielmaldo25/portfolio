import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import {
  faAngular,
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={"About me".split("")}
            idx={10}
            letterClass={"text-animate"}
          />
        </h1>
        <p>
          I am a self-taught person, with the goals of constantly training
          myself, whether it be out of interest, due to work or student
          challenges, and to grow in the area of computing.
        </p>
        <p align="LEFT">
          Ability to relate, with a calm character and, above all, willing to
          work as a team.
        </p>
        <p>Always looking to meet my goals.</p>
        <p>
          I'm open to new oportunities where I can prove myself and continue to
          learn in the IT field.{" "}
        </p>
        <p>
          At the moment my main focus is in the frontend development, I have a
          little more than a year of experience working with React and React
          Native stacks as well as working with Agile Metodologies . But I'm
          also open to learn new Frameworks with other languages such as Java
          and Python.
        </p>
      </div>
      {/* <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPython} color="#EC4" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
