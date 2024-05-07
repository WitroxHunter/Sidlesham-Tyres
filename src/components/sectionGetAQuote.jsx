export default function SectionGetAQuote(props) {
  return (
    <>
      <div className="formContainer stylizedBox">
        <form>
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
