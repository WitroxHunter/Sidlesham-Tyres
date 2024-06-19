import Header from "../components/header";
import BackToTop from "../components/backToTop";
import PagesTelebim from "../components/pages-telebim";
import TireMarks from "../components/splitterTireMarks";
import Footer from "../components/footer";

import AnimatedComponent from "../components/Reveal";

import "./services.css";

function Subline(props) {
  return (
    <>
      <AnimatedComponent>
        <div className="sectionSubLine">
          <div className="sectionLine"></div>
        </div>
      </AnimatedComponent>
    </>
  );
}

const ServiceCard = (props) => {
  return (
    <>
      <div className={`service-card ${props.position}`}>
        <div className={`service-card-text-box`}>
          <h2 className={`service-card-title ${props.position}`}>
            {props.title}
          </h2>
          <div className={`service-card-text ${props.position}`}>
            {props.text}
          </div>
          <div className="service-card-button">
            <button className="secondaryButton">
              <span>Book appointment</span>
            </button>
          </div>

          <div className={`stylizedBox ${props.position}`}></div>
        </div>

        <div
          className={`service-card-photo-box ${props.position} stylizedBoxNoBG`}
        >
          <div
            className={`service-card-photo ${props.photo} ${props.position}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default function Services() {
  return (
    <>
      <Header />
      <BackToTop />
      <PagesTelebim
        sectionName="Services"
        text="Top company in the area specializing in tire changes and other automotive services."
        background="services-background"
      />
      <AnimatedComponent>
        <TireMarks />
      </AnimatedComponent>

      <div className="main-center">
        <AnimatedComponent>
          <div className="article-section">
            <ServiceCard
              position="left"
              photo="wheel-balancing-background"
              title="Wheel balancing"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
            />
            <div className="article-section-background crosses-pattern"></div>
          </div>
        </AnimatedComponent>

        <Subline />

        <AnimatedComponent>
          <div className="article-section">
            <ServiceCard
              position="right"
              photo="tube-replacements-background"
              title="Tube replacements"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
            />
            <div className="article-section-background connected-dots-pattern"></div>
          </div>
        </AnimatedComponent>

        <Subline />

        <AnimatedComponent>
          <div className="article-section">
            <ServiceCard
              position="left"
              photo="tyre-replacements-background"
              title="Tyre replacements"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
            />
            <div className="article-section-background crosses-pattern"></div>
          </div>
        </AnimatedComponent>

        <Subline />

        <AnimatedComponent>
          <div className="article-section">
            <ServiceCard
              position="right"
              photo="puncture-repairs-background"
              title="Puncture repairs"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
            />
            <div className="article-section-background dots-pattern"></div>
          </div>
        </AnimatedComponent>

        <Subline />

        <AnimatedComponent>
          <div className="article-section">
            <ServiceCard
              position="left"
              photo="pressure-check-background"
              title="Pressure check"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
            />
            <div className="article-section-background crosses-pattern"></div>
          </div>
        </AnimatedComponent>

        <Subline />

        <AnimatedComponent>
          <div className="article-section">
            <ServiceCard
              position="right"
              photo="tyre-check-background"
              title="Tyre check"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
            />
            <div className="article-section-background connected-dots-pattern"></div>
          </div>
        </AnimatedComponent>
      </div>

      <Footer />
    </>
  );
}
