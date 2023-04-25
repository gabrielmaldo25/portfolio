import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import React, { useEffect, useState } from "react";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import {
  faBars,
  faCode,
  faEnvelope,
  faHamburger,
  faHouse,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const menuPressed = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const BottomList = () => {
    return (
      <div className="bottom-list">
        <Link
          to="https://www.linkedin.com/in/gabriel-maldonado-gonz%C3%A1lez-931b51215/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          to="https://github.com/gabrielmaldo25"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          gm
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FontAwesomeIcon
            color="#4d4d4e"
            icon={isNavExpanded ? faXmark : faBars}
          />
        </button>
        <nav
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink
                exact="true"
                activeclassname="active"
                to="/"
                onClick={menuPressed}
              >
                <FontAwesomeIcon color="#4d4d4e" icon={faHouse} />
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about"
                onClick={menuPressed}
              >
                <FontAwesomeIcon color="#4d4d4e" icon={faUser} />
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="true"
                activeclassname="active"
                className="work-link"
                to="/my.work"
                onClick={menuPressed}
              >
                <FontAwesomeIcon color="#4d4d4e" icon={faCode} />
              </NavLink>
            </li>

            <li>
              <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
                onClick={menuPressed}
              >
                <FontAwesomeIcon color="#4d4d4e" icon={faEnvelope} />
              </NavLink>
            </li>
            <BottomList />
          </ul>
        </nav>
        <BottomList />
      </div>
    </>
  );
};

export default Sidebar;
