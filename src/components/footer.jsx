import location from "../assets/icons/location.svg";
import call from "../assets/icons/call.svg";
import mail from "../assets/icons/mail.svg";
import logo from "../assets/logo.svg";

function WorkingHours(props) {
  return (
    <>
      <div className="day-container">
        <div className="footer-day-box">{props.day}</div>
        <div className="footer-working-hours">{props.hours}</div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} />
          </div>
          <div className="footer-section">
            <div className="footer-content-middle">
              <span className="footer-content-title">Contact info:</span>
              <div className="footer-content-label">
                <div className="footer-content-icon-background">
                  <img src={call} className="footer-content-icon" />
                </div>
                +44 01243 641986
              </div>
              <div className="footer-content-label">
                <div className="footer-content-icon-background">
                  <img src={mail} className="footer-content-icon" />
                </div>
                enquiries@sidleshamtyres.co.uk
              </div>
              <div className="footer-content-label">
                <div className="footer-content-icon-background">
                  <img src={location} className="footer-content-icon" />
                </div>
                Sidlesham Tyres,
                <br /> Jury Lane,
                <br /> Sidlesham Common,
                <br /> Chichester,
                <br /> West Sussex
                <br /> PO20 7PX.
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-content-right">
              <span className="footer-content-title">We are open:</span>
              <WorkingHours day="Mon" hours="8:30 - 5:00" />
              <WorkingHours day="Tue" hours="8:30 - 5:00" />
              <WorkingHours day="Wed" hours="8:30 - 5:00" />
              <WorkingHours day="Thu" hours="8:30 - 5:00" />
              <WorkingHours day="Fri" hours="8:30 - 5:00" />
              <WorkingHours day="Sat, Sun" hours="CLOSED" />
              <WorkingHours day="Holidays" hours="CLOSED" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 Sidlesham Tyres. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
