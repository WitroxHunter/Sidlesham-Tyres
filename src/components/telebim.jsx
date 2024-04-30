import background from "../assets/Background.png";

export default function Telebim() {
  return (
    <>
      <div className="telebimBackground">
        <div className="telebim">
          <div className="telebimTextBox">
            <h1 className="colorUIorange">Sidlesham Tyres</h1>
            <span className="fontSizeMid">
              Top-quality tyres for all vehicles, expert fitting since 1999.
              Unbeatable prices ensuring top-notch safety, performance, and
              customer satisfaction.
            </span>
            <div className="telebimButtons">
              <button className="mainButton">Call us now</button>
              <button className="secondaryButton">Learn more</button>
            </div>
          </div>
        </div>

        <div className="contactTopDarkening"></div>
      </div>
    </>
  );
}
