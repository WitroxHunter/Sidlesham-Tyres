import hamburger from "../assets/icons/hamburger.svg";
import logo from "../assets/logo.png";

function MenuItem(props) {
  return (
    <>
      <div className="headerItem">
        <span className="menuItemText fontSizeVerySmall"> {props.name}</span>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <img src={logo} />
        </div>
        <div className="headerCenter">
          <MenuItem name="Home" />
          <MenuItem name="About us" />
          <MenuItem name="Services" />
          <MenuItem name="Tyre tech" />
          <MenuItem name="Events & news" />
          <MenuItem name="Contact us" />
        </div>
        <div className="headerRight">
          <img src={hamburger} />
        </div>
      </div>
    </>
  );
}
