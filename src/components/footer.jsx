import location from "../assets/icons/location.svg";
import call from "../assets/icons/call.svg";
import mail from "../assets/icons/mail.svg";
import notfound from "../assets/NotFound.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <img src={notfound} />
        </div>
        <div className="footer-section">2</div>
        <div className="footer-section">3</div>
      </div>
    </>
  );
}
