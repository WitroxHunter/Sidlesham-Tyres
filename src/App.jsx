import { useState } from "react";
import Header from "./components/header";
import Telebim from "./components/telebim";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Telebim />
      <div className="contactBox">telefon email location</div>
      <div className="mainContent">
        <div className="sectionWhyUs">why us</div>
        <div className="sectionOurOffer">Our offer</div>
        <div className="sectionCustomerTestimonials">customer testimonials</div>
        <div className="sectionGetAQuote">contact form</div>
        <div className="sectionReachUs"></div>
      </div>
    </>
  );
}

export default App;
