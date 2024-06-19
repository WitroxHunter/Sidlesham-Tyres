import Header from "../components/header";
import BackToTop from "../components/backToTop";
import Footer from "../components/footer";
import Contact from "../components/sectionGetAQuote";
import ReachUs from "../components/sectionReachUs";
import SectionTitle from "../components/sectionTitle";
import AnimatedComponent from "../components/Reveal";
import "./contact-us.css";

export default function ContactUs() {
  return (
    <>
      <Header />
      <BackToTop />

      <div className="main-center">
        <AnimatedComponent>
          <div className="title-box">
            <SectionTitle
              title="Get a quote"
              subtitle="Let us know what you need"
            />
          </div>

          <div className="article-section">
            <Contact />
            <div className="article-section-background crosses-pattern"></div>
          </div>
        </AnimatedComponent>

        <AnimatedComponent>
          <div className="title-box">
            <SectionTitle
              title="Reach us"
              subtitle="And finally get what you care about"
            />
          </div>

          <div className="article-section">
            <ReachUs />
            <div className="article-section-background dots-pattern"></div>
          </div>
        </AnimatedComponent>
      </div>

      <Footer />
    </>
  );
}
