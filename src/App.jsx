import { useState } from "react";
import Header from "./components/header";
import Telebim from "./components/telebim";
import SectionTitle from "./components/sectionTitle";
import ContactBar from "./components/contact-bar";

import SectionWhyUs from "./components/sectionWhyUs";
import SectionOurOffer from "./components/sectionOurOffer";
import SectionTestimonials from "./components/sectionTestimonials";
import SectionGetAQuote from "./components/sectionGetAQuote";
import SectionReachUs from "./components/sectionReachUs";

import Footer from "./components/footer";

import TireMarks from "./components/splitterTireMarks";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Telebim />
      <ContactBar />

      <div className="main-center">
        {/* Why us? */}

        <div className="section sectionWhyUs">
          <SectionTitle
            title="Why us?"
            subtitle="Because you can count on us!"
          />
          <div className="sectionContent">
            <SectionWhyUs />
            <div className="section-content-background connected-dots-pattern"></div>
          </div>
        </div>
      </div>

      <TireMarks />

      {/* Our Offer */}

      <div className="main-center">
        <div className="section sectionOurOffer">
          <SectionTitle title="Our offer" subtitle="Find your perfect need" />
          <div className="sectionContent">
            <SectionOurOffer />
            <div className="section-content-background dots-pattern"></div>
          </div>
        </div>

        {/* Customer Testimonials */}

        <div className="section sectionCustomerTestimonials">
          <SectionTitle
            title="Customer Testimonials"
            subtitle="What people say about us"
          />
          <div className="sectionContent">
            <SectionTestimonials />
            <div className="section-content-background crosses-pattern"></div>
          </div>
        </div>
      </div>

      <TireMarks />

      {/* Get a quote */}
      <div className="main-center">
        <div className="section sectionGetAQuote">
          <SectionTitle
            title="Get a quote"
            subtitle="Let us know what you need"
          />
          <div className="sectionContent">
            <SectionGetAQuote />
            <div className="section-content-background dots-pattern"></div>
          </div>
        </div>

        {/* Reach us */}

        <div className="section sectionReachUs">
          <SectionTitle
            title="Reach us"
            subtitle="And finally get what you care about"
          />
          <div className="sectionContent">
            <SectionReachUs />
            <div className="section-content-background dots-pattern"></div>
          </div>
        </div>
      </div >

      <Footer />
    </>
  );
}

export default App;
