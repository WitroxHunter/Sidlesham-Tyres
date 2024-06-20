import { useState, useEffect } from "react";
import AnimatedComponent from "./Reveal";
import arrowDown from "../assets/icons/arrow_down.svg";

export default function PagesTelebim(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`pages-telebim-background ${props.background}`}>
        <div className="pages-telebim">
          <div
            className={
              scrolled ? "scroll-down-button-scrolled" : "scroll-down-button"
            }
          >
            <img src={arrowDown} onClick={handleClick} />
          </div>
          <div className="pages-telebim-darkening" />
          <div className="pages-telebim-box">
            <AnimatedComponent>
              <h1 className="colorUIorange">{props.sectionName}</h1>
              <div className="fontSizeMid">{props.text}</div>
            </AnimatedComponent>
          </div>
        </div>
      </div>
    </>
  );
}
