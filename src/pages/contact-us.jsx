import Header from "../components/header";
import BackToTop from "../components/backToTop";
import Footer from "../components/footer";
import Contact from "../components/sectionGetAQuote";
import ReachUs from "../components/sectionReachUs"
import SectionTitle from "../components/sectionTitle";
import AnimatedComponent from "../components/Reveal";
import "./contact-us.css";

export default function ContactUs() {
  return (
    <>
      <Header />
      <BackToTop />

      <div className="main-center">
        <div className="title-box">
          <AnimatedComponent>
            <SectionTitle
              title="Get a quote"
              subtitle="Let us know what you need"
            />
          </AnimatedComponent>
        </div>


        <div className="article-section">
          <AnimatedComponent>
            <Contact />
          </AnimatedComponent>

          <div className="article-section-background crosses-pattern"></div>
        </div>

        <div className="title-box">
          <AnimatedComponent>
            <SectionTitle
              title="Reach us"
              subtitle="And finally get what you care about"
            />
          </AnimatedComponent>
        </div>

        <div className="article-section">
          <AnimatedComponent>
            <ReachUs />
          </AnimatedComponent>

          <div className="article-section-background dots-pattern"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
