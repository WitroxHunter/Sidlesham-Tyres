import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function SectionGetAQuote(props) {
  const form = useRef();
  const [capVal, setCapVal] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!capVal) {
      alert("Please complete the CAPTCHA");
      return;
    }

    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());
    formObject.captchaToken = capVal; // Add the captcha value to the form data

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Error sending email: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email: " + error.toString());
    }
  };

  return (
    <>
      <div className="formContainer stylizedBox">
        <form ref={form} onSubmit={sendEmail}>
          <div className="formTopPart">
            <div className="leftSide">
              <div className="formInput">
                <label>Name</label>
                <input type="text" name="name" required></input>
              </div>

              <div className="formInput">
                <label>E-mail</label>
                <input type="email" name="email" required></input>
              </div>
            </div>

            <div className="rightSide">
              <div className="formInput">
                <label>Phone number</label>
                <input type="text" name="phoneNumber" required></input>
              </div>

              <div className="formInput">
                <label>Vehicle type</label>
                <input type="text" name="vehicleType" required></input>
              </div>
            </div>
          </div>

          <div className="formInput">
            <label>Service needed</label>
            <textarea name="serviceNeeded" required></textarea>
          </div>

          <div className="recaptcha-box">
            <ReCAPTCHA
              sitekey="6Ld4Wf0pAAAAAMkYUiUG_8Tb4xAofKOikiieekiV"
              onChange={(val) => setCapVal(val)}
            />
          </div>

          <button disabled={!capVal} className="formButtonDiv">
            <div>
              <input
                disabled={!capVal}
                className="formButton"
                type="submit"
                value={"Send report"}
              ></input>
            </div>
          </button>
        </form>
      </div>
    </>
  );
}
