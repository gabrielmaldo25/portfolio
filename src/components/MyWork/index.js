import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import MyPortfolio from "../../assets/images/myWork/MyPortfolio.png";
import TutorialPortfolio from "../../assets/images/myWork/TutorialPortfolio.png";
import OldPortfolio from "../../assets/images/myWork/OldPortfolio.png";

const myWork = [
  {
    name: "Portfolio",
    content: [
      "I want make a shoutout to Slobodan for this course, because at first I was lost as how to start my portfolio and this helped me take inspiration and adapt it with my imagination. Check it out https://www.youtube.com/watch?v=bmpI252DmiI",
      "I adapted the design to fit more of my personal liking and adapt it to mobile devices as well",
      "You can check out my version of the portfolio and the original tutorial that I followed on my GitHub repo",
    ],
    link: "",
    pictures: [TutorialPortfolio, MyPortfolio],
  },
  {
    name: "Personal Portfolio Challenge",
    content: [
      "The page you're at is not my first portfolio!",
      "As part of one freecodecamp.org challenge for my Responsive Web Design Course Certification I had to build a responsive personal portfolio",
      "You can check it out here https://codepen.io/gabrielmaldo_/pen/qBmryvq",
      "There you will find other challenges I did to obtain my certification",
      "Check out my certification here https://www.freecodecamp.org/certification/gabrielmaldo_/responsive-web-design",
    ],
    link: "",
    pictures: [OldPortfolio],
  },
];

const MyWork = () => {
  return (
    <div className="work-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={"My Work".split("")}
            idx={10}
            letterClass={"text-animate"}
          />
        </h1>
        <p>
          As part of this page I want to add some of the projects i worked on as
          well as personal ones. Stay tuned!
        </p>
      </div>
      <div className="my-work">
        {myWork.map((w) => (
          <div className="work">
            <div className="work-image">
              {w.pictures.map((p, index) => (
                <img key={index} src={p} alt={`${p}`} />
              ))}
            </div>
            <div className="content">
              <div className="title">{w.name}</div>
              <div>
                {w.content.map((c) => (
                  <p>{c}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
