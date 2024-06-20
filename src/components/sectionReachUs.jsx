import call from "../assets/icons/call.svg";
import mail from "../assets/icons/mail.svg";
import data from "../assets/data/data.json";
import { useState, useEffect } from "react";

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

export default function sectionReachUs() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(data.message);
  }, []);

  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="verticalFlex">
        <div className="contentReachUs">
          <div className="leftSide stylizedBox">
            <span className="footer-content-title">We are open:</span>
            <WorkingHours day="Mon" hours="8:30 - 5:00" />
            <WorkingHours day="Tue" hours="8:30 - 5:00" />
            <WorkingHours day="Wed" hours="8:30 - 5:00" />
            <WorkingHours day="Thu" hours="8:30 - 5:00" />
            <WorkingHours day="Fri" hours="8:30 - 5:00" />
            <WorkingHours day="Sat, Sun" hours="CLOSED" />
            <WorkingHours day="Holidays" hours="CLOSED" />

            <span className="footer-content-title">Contact info:</span>
            <div className="reachUsContactDiv">
              <div className="reachUsContactIconBack">
                <img src={call} className="reachUsContactIcon" />
              </div>
              <span>01243 641986</span>
            </div>

            <div className="reachUsContactDiv">
              <div className="reachUsContactIconBack">
                <img src={mail} className="reachUsContactIcon" />
              </div>
              <span>enquiries@sidleshamtyres.co.uk</span>
            </div>
          </div>

          <div className="rightSide stylizedBox">
            {loading && <div className="loading">Loading...</div>}
            <iframe
              className="googleMaps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.975918711559!2d-0.8002860231335861!3d50.79455486252758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487453b0fc85be59%3A0x2fa5e8ff333cd02a!2sSidlesham%20Tyres!5e0!3m2!1spl!2spl!4v1714412972416!5m2!1spl!2spl"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>

        <div className="additional-info">
          {data ? (
            <>
              <div>Additional information:</div>
              <div className="additional-information">{message}</div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
