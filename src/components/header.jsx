import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HamburgerChild(props) {
  return (
    <>
      <Link to={"/Sidlesham-Tyres/" + props.link}>
        <div className="hamburger-div-button">{props.name}</div>
      </Link>
    </>
  );
}

function MenuItem(props) {
  return (
    <>
      <div className="headerItem">
        <Link to={"/Sidlesham-Tyres/" + props.tp}>
          <div className="menuItemText fontSizeVerySmall"> {props.name}</div>
        </Link>
      </div>
    </>
  );
}

export default function Header() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
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

  const handleHamburgerClick = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <>
      <div className={scrolled ? "scrolled header" : "header"}>
        <div className="headerLeft">
          <Link to={"/Sidlesham-Tyres/"}>
            <img src={logo} />
          </Link>
        </div>
        <div className="headerCenter">
          <MenuItem name="Home" tp="" />
          <MenuItem name="About us" tp="about" />
          <MenuItem name="Services" tp="services" />
          <MenuItem name="Tyre tech" tp="tyre-tech" />
          {/* <MenuItem name="News" tp="blog"/> */}
          <MenuItem name="Contact us" tp="contact" />
        </div>
        <div className="headerRight">
          <img
            className="header-hamburger"
            src={hamburger}
            onClick={handleHamburgerClick}
          />
          {hamburgerClicked && (
            <div className="hamburger-div">
              <HamburgerChild name="Home" link="" />
              <HamburgerChild name="About us" link="about" />
              <HamburgerChild name="Services" link="services" />
              <HamburgerChild name="Tyre tech" link="tyre-tech" />
              <HamburgerChild name="Contact us" link="contact" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
