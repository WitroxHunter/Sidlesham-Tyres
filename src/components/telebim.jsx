import background from "../assets/Background.png";
import { Link } from "react-router-dom";

export default function Telebim() {
  return (
    <>
      <div className="telebimBackground">
        <div className="telebim">
          <div className="telebimTextBox">
            <h1 className="colorUIorange">Sidlesham Tyres</h1>
            <div className="text">
              <span className="fontSizeMid">
                Top-quality tyres for all vehicles, expert fitting since 1999.
                Unbeatable prices ensuring top-notch safety, performance, and
                customer satisfaction.
              </span>
            </div>

            <div className="telebimButtons">
              <a href="tel:+48790557610">
                <button className="mainButton">
                  <span>Call us now</span>
                </button>
              </a>
              <Link to={"about"}>
                <button className="secondaryButton"><span>Learn more</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="contactTopDarkening"></div>
      </div>
    </>
  );
}
