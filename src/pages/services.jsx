import Header from "../components/header";
import BackToTop from "../components/backToTop";
import PagesTelebim from "../components/pages-telebim";
import TireMarks from "../components/splitterTireMarks";
import Footer from "../components/footer";

import "./services.css";

function Subline(props) {
  return (
    <>
      <div className="sectionSubLine">
        <div className="sectionLine"></div>
        <div className="section-line-text">{props.title}</div>
        <div className="sectionLine"></div>
      </div>
    </>
  );
}

const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card">
        <h2 className={`service-card-title ${props.position}`}>
          {props.title}
        </h2>
        <div className={`service-card-text ${props.position}`}>
          {props.text}
        </div>

        <div className={`service-card-photo-box ${props.position} stylizedBox`}>
          <div className={`service-card-photo-darkening ${props.position}`}></div>
          <div className={`service-card-photo ${props.photo} ${props.position}`}></div>
        </div>
      </div>
    </>
  )
}

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

      <TireMarks />

      <div className="main-center">
        <div className="article-section">
          <ServiceCard
            position="left"
            photo="wheel-balancing-background"
            title="Wheel balancing"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />

          <ServiceCard
            position="right"
            photo="wheel-balancing-background"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />
          <div className="article-section-background dots-pattern"></div>
        </div>

        <Subline title="Tube replacements" />

        <div className="article-section">
          <ServiceCard
            position="left"
            photo="tube-replacements-background"
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />
          <div className="article-section-background crosses-pattern"></div>
        </div>

        <Subline title="Puncture repairs" />

        <div className="article-section">
          <ServiceCard
            position="right"
            photo="puncture-repairs-background"
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />
          <div className="article-section-background connected-dots-pattern"></div>
        </div>

        <Subline title="Pressure check" />

        <div className="article-section">
          <ServiceCard
            position="left"
            photo="pressure-check-background"
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />
          <div className="article-section-background crosses-pattern"></div>
        </div>

        <Subline title="Tyre replacements" />

        <div className="article-section">
          <ServiceCard
            position="right"
            photo="tyre-replacements-background"
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />
          <div className="article-section-background dots-pattern"></div>
        </div>

        <Subline title="Tyre check" />

        <div className="article-section">
          <ServiceCard
            position="left"
            photo="tyre-check-background"
            title=""
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis pulvinar enim quis viverra. Pellentesque urna nulla, ultrices ac neque nec, gravida tempor lorem. Quisque risus turpis, tristique ut nunc non, semper commodo orci. Cras luctus arcu at facilisis sodales. Donec varius dapibus luctus. Aliquam feugiat, urna nec maximus vehicula, quam enim dignissim nibh, non porta ipsum massa ac nisi. Maecenas sit amet lacus augue. In cursus efficitur convallis."
          />
          <div className="article-section-background crosses-pattern"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
