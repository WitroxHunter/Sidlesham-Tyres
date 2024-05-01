import location from "../assets/icons/location.svg";
import call from "../assets/icons/call.svg";
import mail from "../assets/icons/mail.svg";

export default function ContactBar() {
  return (
    <>
      <div className="contact-bar">
        <div className="contact-info">
          <img className="contact-info-icon" src={call} />
          <a href="tel:+44 1243 641986">
            <span className="contact-bar-text">+44 1243 641986</span>
          </a>
        </div>
        <div className="contact-info">
          <img className="contact-info-icon" src={mail} />
          <a href="mailto:enquiries@sidleshamtyres.co.uk">
            <span className="contact-bar-text">
              enquiries@sidleshamtyres.co.uk
            </span>
          </a>
        </div>
        <div className="contact-info">
          <img className="contact-info-icon" src={location} />
          <a href="https://www.google.com/maps/place/Sidlesham+Tyres/@50.7945532,-0.7989848,18z/data=!3m1!4b1!4m6!3m5!1s0x487453b0fc85be59:0x2fa5e8ff333cd02a!8m2!3d50.7945515!4d-0.7977111!16s%2Fg%2F11b7hsfmb2?authuser=0&entry=ttu">
            <span className="contact-bar-text">
              Chichester, West Sussex, PO20 7PX
            </span>
          </a>
        </div>
      </div>

      <div className="contactBottomDarkening"></div>
    </>
  );
}
