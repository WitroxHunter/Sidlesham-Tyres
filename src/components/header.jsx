import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <>
      <div className="headerItem">
        <Link to={props.tp}>
          <div className="menuItemText fontSizeVerySmall"> {props.name}</div>
        </Link>
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
          <MenuItem name="Home" tp="/" />
          <MenuItem name="About us" tp="about" />
          <MenuItem name="Services" tp="services" />
          <MenuItem name="Tyre tech" tp="tyre-tech" />
          {/* <MenuItem name="News" tp="blog"/> */}
          <MenuItem name="Contact us" tp="contact" />
        </div>
        <div className="headerRight">
          <img className="header-hamburger" src={hamburger} />
        </div>
      </div>
    </>
  );
}
