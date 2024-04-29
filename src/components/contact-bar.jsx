import location from "../assets/icons/location.svg";
import call from "../assets/icons/call.svg";
import mail from "../assets/icons/mail.svg";

export default function ContactBar() {
  return (
    <>
      <div className="contact-bar">
        <div className="contact-info">
          <img className="contact-info-icon" src={call} />
          +44 1243 641986
        </div>
        <div className="contact-info">
          <img className="contact-info-icon" src={mail} />
          enquiries@sidleshamtyres.co.uk
        </div>
        <div className="contact-info">
          <img className="contact-info-icon" src={location} />
          Chichester, West Sussex, PO20 7PX
        </div>
      </div>

      <div className="contactBottomDarkening"></div>
    </>
  );
}
