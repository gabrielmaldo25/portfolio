import "./index.scss";
import LogoS from "../../../assets/images/logo-s.png";
import { useEffect, useRef } from "react";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { gsap } from "gsap-trial";
const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 0.6,
      });
  }, []);
  return (
    <div className="logo-container" ref={bgRef}>
      <div className="legend"> gabriel maldonado</div>
    </div>
  );
};

export default Logo;
