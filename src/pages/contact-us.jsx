import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/sectionGetAQuote";
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
      </div>
      <Footer />
    </>
  );
}
