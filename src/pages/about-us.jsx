import Header from "../components/header";
import BackToTop from "../components/backToTop";
import PagesTelebim from "../components/pages-telebim";
import TireMarks from "../components/splitterTireMarks";
import Footer from "../components/footer";
import image1 from "../assets/images/Screenshot_gd_porsche_911_turbo_3_0_ks_nordschleife_5-4-124-21-11-25.jpg";
import image2 from "../assets/images/Screenshot_180sx_mission_2_drift_10-3-124-21-40-48.jpg";
import image3 from "../assets/images/Screenshot_a3dr_ferrari_512tr_ks_brands_hatch_4-4-124-18-24-52.jpg";
import image4 from "../assets/images/Screenshot_yk_subaru_sedan_sti_ks_vallelunga_5-4-124-22-10-9.jpg";
import "./about-us.css";

import AnimatedComponent from "../components/Reveal";

function Subline(props) {
  return (
    <>
      <AnimatedComponent>
        <div className="sectionSubLine">
          <div className="sectionLine"></div>
          <div className="section-line-text">{props.title}</div>
          <div className="sectionLine"></div>
        </div>
      </AnimatedComponent>
    </>
  );
}

const TextBox = (props) => {
  return (
    <>
      <AnimatedComponent>
        <div className={`article-flex-box article-flex-${props.direction}`}>
          <div className="article-text">
            {props.text}
          </div>
          <div className="article-photo-box">
            <img src={props.photo} className="article-photo stylizedBoxNoBG" />
          </div>
        </div>
      </AnimatedComponent>
    </>
  )
}

export default function AboutUs() {
  return (
    <>
      <Header />
      <BackToTop />
      <PagesTelebim
        sectionName="About us"
        text="Top company in the area specializing in tire changes and other automotive services."
        background="about-us-background"
      />

      <TireMarks />

      <div className="main-center">
        <Subline title="Our mission" />
        <div className="article-section">
          <TextBox
            direction="forward"
            photo={image1}
            text="At Sidlesham Tyres, our mission is simple: to provide expert fitting and good prices in a fresh and clean environment. We believe in honesty and integrity, which is why we follow the philosophy of only selling you what you need."
          />
          <div className="article-section-background dots-pattern"></div>
        </div>

        <Subline title="Our story" />
        <div className="article-section">
          <TextBox
            direction="reverse"
            photo={image2}
            text="Established in April 2015, Sidlesham Tyres was born out of a desire to offer superior service and value to our customers. After years of experience working for another local tyre fitting firm, our founder decided it was time to strike out on their own. With a background in tyre fitting since 1999, our commitment to quality and customer satisfaction has remained unwavering."
          />
          <TextBox
            direction="forward"
            photo={image3}
            text="Established in April 2015, Sidlesham Tyres was born out of a desire to offer superior service and value to our customers. After years of experience working for another local tyre fitting firm, our founder decided it was time to strike out on their own. With a background in tyre fitting since 1999, our commitment to quality and customer satisfaction has remained unwavering."
          />
          <div className="article-section-background crosses-pattern"></div>
        </div>


        <Subline title="Our services" />
        <div className="article-section">
          <TextBox
            direction="reverse"
            photo={image4}
            text="Sidlesham Tyres is your one-stop shop for all your tyre needs. We supply tyres for cars, vans, 4x4s, trailers, caravans, and motor-homes, ranging from budget options to top brands like Michelin. But that's not all—we also stock mower tyres, wheelbarrow tyres, and mobility scooter tyres. If your tyres hold air, chances are we can supply them at bargain prices."
          />
          <div className="article-section-background dots-pattern"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
