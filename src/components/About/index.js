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
          Hello, my name is Gabriel Maldonado and I'm a student of Computer
          Science from the National University of Asunción in Paraguay.
        </p>
        <p>
          I am a self-taught person, with the goals of constantly training
          myself, whether it be out of interest, due to work or student
          challenges.
        </p>
        <p>
          At the moment my main focus is in the frontend development, I have a
          little more than a year of experience working with React and React
          Native stacks as well as working with Agile Methodologies.
        </p>
        <p>
          I'm open to new oportunities where I can prove myself and continue
          learning about those stacks to solidify my knowledge. But I'm also
          open to learn new Frameworks with other languages such as Java and
          Python.
        </p>
        <p>
          I have the ability to relate, with a calm character and, above all,
          willing to work as a team. Always looking to meet my goals.
        </p>
        <p>
          My hobbies goes from watching some series and movies, hanging out with
          my friends and family as much as I can.
        </p>
        <p>
          I basically speak / understand three languages that includes Spanish,
          Guaraní wich is the second official language of Paraguay and English,
          that I'm always learning and trying new ways to improve it, as an
          example is this whole portfolio.
        </p>
      </div>
    </div>
  );
};

export default About;
