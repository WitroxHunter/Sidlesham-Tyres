import { useState } from "react";
import Header from "./components/header";
import Telebim from "./components/telebim";
import SectionTitle from "./components/sectionTitle";
import ContactBar from "./components/contact-bar";
import SectionWhyUs from "./components/sectionWhyUs";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Telebim />
      <ContactBar />
      <main>
        <div className="section sectionWhyUs">
          <SectionTitle
            title="Why us?"
            subtitle="Because you can count on us!"
          />
          <div className="sectionContent">
            <SectionWhyUs />
          </div>
        </div>
        <div className="section sectionOurOffer">
          <SectionTitle title="Our offer" subtitle="Find your perfect need" />
          <div className="sectionContent"></div>
        </div>
        <div className="section sectionCustomerTestimonials">
          <SectionTitle
            title="Customer Testimonials"
            subtitle="What people say about us"
          />
          <div className="sectionContent"></div>
        </div>
        <div className="section sectionGetAQuote">
          <SectionTitle
            title="Get a quote"
            subtitle="Let us know what you need"
          />
          <div className="sectionContent"></div>
        </div>
        <div className="section sectionReachUs">
          <SectionTitle
            title="Reach us"
            subtitle="And finally get what you care about"
          />
          <div className="sectionContent"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;