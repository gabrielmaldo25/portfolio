import "./index.scss";

import React, { useEffect, useState } from "react";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [extraClass, setExtraClass] = useState();
  useEffect(() => {
    setTimeout(() => {
      return setExtraClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <span className="full-word-container">
      {strArray.map((char, i) => {
        return (
          <span
            key={char + i}
            className={`${letterClass} _${i + idx} ${extraClass ?? ""}`}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
