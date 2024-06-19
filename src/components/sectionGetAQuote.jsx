import React, { useRef } from "react";

export default function SectionGetAQuote(props) {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formData);

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
                <input type="text" name="name"></input>
              </div>

              <div className="formInput">
                <label>E-mail</label>
                <input type="text" name="email"></input>
              </div>
            </div>

            <div className="rightSide">
              <div className="formInput">
                <label>Phone number</label>
                <input type="text" name="phoneNumber"></input>
              </div>

              <div className="formInput">
                <label>Vehicle type</label>
                <input type="text" name="vehicleType"></input>
              </div>
            </div>
          </div>

          <div className="formInput">
            <label>Service needed</label>
            <textarea name="serviceNeeded"></textarea>
          </div>

          <button className="formButtonDiv">
            <div>
              <input
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
