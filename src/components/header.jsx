import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

function MenuItem(props) {
  return (
    <>
      <div className="headerItem">
        <div className="menuItemText fontSizeVerySmall"> {props.name}</div>
      </div>
    </>
  );
}

export default function Header() {
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

  return (
    <>
      <div className={scrolled ? "scrolled header" : "header"}>
        <div className="headerLeft">
          <img src={logo} />
        </div>
        <div className="headerCenter">
          <MenuItem name="Home" />
          <MenuItem name="About us" />
          <MenuItem name="Services" />
          <MenuItem name="Tyre tech" />
          <MenuItem name="News" />
          <MenuItem name="Contact us" />
        </div>
        <div className="headerRight">
          <img className="header-hamburger" src={hamburger} />
        </div>
      </div>
    </>
  );
}
