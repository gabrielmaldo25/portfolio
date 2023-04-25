import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import MyPortfolio from "../../assets/images/myWork/MyPortfolio.png";
import TutorialPortfolio from "../../assets/images/myWork/TutorialPortfolio.png";
import OldPortfolio from "../../assets/images/myWork/OldPortfolio.png";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const myWork = [
  {
    name: "Portfolio",
    content: (
      <>
        <p>
          I want make a shoutout to Slobodan for this course, because at first I
          was lost as how to start my portfolio and this helped me take
          inspiration and adapt it with my imagination. Check it out
          <Link
            target="_blank"
            to="https://www.youtube.com/watch?v=bmpI252DmiI"
          >
            {" "}
            here
          </Link>
          .
        </p>
        <p>
          This portfolio is built with React and styled with SASS. I adapted the
          design to fit more of my personal liking and adapt it to mobile
          devices as well.
        </p>
        <p>
          You can check out my version of the portfolio and the original
          tutorial that I followed on my GitHub{" "}
          <Link
            target="_blank"
            to="https://github.com/gabrielmaldo25/portfolio"
          >
            repo
          </Link>
          . The tutorial is in the <i>og_tutorial</i> branch.
        </p>
      </>
    ),
    link: "",
    pictures: [TutorialPortfolio, MyPortfolio],
  },
  {
    name: "Personal Portfolio Challenge",
    content: (
      <>
        <p>The page you're at is not my first portfolio!</p>
        <p>
          As part of one freecodecamp.org challenge for my Responsive Web Design
          Course Certification, I had to build a responsive personal portfolio
        </p>
        <p>
          You can check it out{" "}
          <Link
            target="_blank"
            to="https://codepen.io/gabrielmaldo_/full/qBmryvq"
          >
            here
          </Link>
        </p>
        <p>
          There you will find other challenges I did to obtain my certification
        </p>
        <p>
          Check out my certification{" "}
          <Link
            target="_blank"
            to="https://www.freecodecamp.org/certification/gabrielmaldo_/responsive-web-design"
          >
            here
          </Link>
        </p>
      </>
    ),
    link: "",
    pictures: [OldPortfolio, OldPortfolio],
  },
];

const MyWork = () => {
  const ref = useRef(window);

  useEffect(() => {
    const reveal = (event) => {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    const element = ref.current;

    element.addEventListener("scroll", reveal);

    return () => {
      element.removeEventListener("scroll", reveal);
    };
  }, []);

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
          <div className="work reveal">
            <div className="work-image">
              {w.pictures.map((p, index) => (
                <img key={index} src={p} alt={`${p}`} />
              ))}
            </div>
            <div className="work-content">
              <div className="title">{w.name}</div>
              <div className="content">{w.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
