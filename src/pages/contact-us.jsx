import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/sectionGetAQuote";
import ReachUs from "../components/sectionReachUs"
import SectionTitle from "../components/sectionTitle";
import "./contact-us.css";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="main-center">
        <div className="title-box">
          <SectionTitle
            title="Get a quote"
            subtitle="Let us know what you need"
          />
        </div>

        <Contact />

        <div className="title-box">
          <SectionTitle
            title="Reach us"
            subtitle="And finally get what you care about"
          />
        </div>

        <ReachUs />
      </div>
      <Footer />
    </>
  );
}
